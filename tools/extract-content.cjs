#!/usr/bin/env node
// tools/extract-content.cjs
// ─────────────────────────────────────────────────────────────────────────────
// Extracts the existing static atlas (content/_bundle.js + data.js) into
// database-ready seed files under supabase/seed/:
//
//   subjects.json    — one row per subject
//   topics.json      — one row per topic (meta + body jsonb)
//   resources.json   — one row per curated resource (video/book/article/…)
//   enrichment.json  — Wikipedia/Wikimedia enrichment, if present (optional pass)
//
// This is the one-time bridge from "repo as CMS" to "database as commons".
// It mutates nothing in the cloud — it just writes JSON you can review, then
// load with supabase/seed/apply.cjs after the project is provisioned.
//
// Usage:  node tools/extract-content.cjs
// ─────────────────────────────────────────────────────────────────────────────
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'supabase', 'seed');

// ── 1. Evaluate the browser data files in a sandbox to recover their globals ──
const sandbox = {
  window: {},
  document: { createElement: () => ({}), getElementById: () => null },
  console: { log() {}, warn() {}, error() {} },
};
sandbox.self = sandbox.window;
vm.createContext(sandbox);

function run(rel, optional = false) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) {
    if (optional) { console.warn(`· skip (absent): ${rel}`); return; }
    throw new Error(`Required file missing: ${rel}`);
  }
  try {
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: rel, timeout: 30000 });
    console.log(`· loaded ${rel}`);
  } catch (err) {
    if (optional) { console.warn(`· skip (eval error): ${rel} — ${err.message}`); return; }
    throw new Error(`Failed evaluating ${rel}: ${err.message}`, { cause: err });
  }
}

run('data.js');                       // window.SUBJECTS, window.SUBJECT_HEX
run('content/_bundle.js');            // window.CONTENT (all 93 subjects)
run('content/_enrichment.js', true);  // optional: window.ENRICHMENT

const W = sandbox.window;
const SUBJECTS = Array.isArray(W.SUBJECTS) ? W.SUBJECTS : [];
const HEX = W.SUBJECT_HEX || {};
const CONTENT = W.CONTENT || {};
const ENRICHMENT = W.ENRICHMENT || W.ENRICH || null;

if (!SUBJECTS.length) throw new Error('window.SUBJECTS empty — data.js did not load as expected.');
if (!Object.keys(CONTENT).length) throw new Error('window.CONTENT empty — _bundle.js did not load as expected.');

// ── 2. Build a (subjectId, topicId) → {group, level, desc, sort} lookup ──────
const topicMeta = new Map();
for (const s of SUBJECTS) {
  let order = 0;
  for (const g of s.groups || []) {
    for (const t of g.topics || []) {
      topicMeta.set(`${s.id}::${t.id}`, { group: g.name, level: t.level, desc: t.desc, sort: order++ });
    }
  }
}

// ── 3. Emit subjects ─────────────────────────────────────────────────────────
const subjects = [];
const seenSubjects = new Set();
SUBJECTS.forEach((s, i) => {
  seenSubjects.add(s.id);
  subjects.push({
    id: s.id,
    num: s.num || null,
    name: s.name,
    tag: s.tag || null,
    description: s.desc || null,
    category: s.category || null,
    viz: s.viz || null,
    hex: HEX[s.id] || (typeof s.accent === 'string' && s.accent.startsWith('#') ? s.accent : null),
    topic_count: 0, // filled after topics are counted
    sort: i,
  });
});
// Defensive: any subject that has content but no SUBJECTS entry
for (const sid of Object.keys(CONTENT)) {
  if (!seenSubjects.has(sid)) {
    subjects.push({ id: sid, num: null, name: CONTENT[sid].name || sid, tag: null,
      description: null, category: null, viz: null, hex: HEX[sid] || null, topic_count: 0, sort: subjects.length });
  }
}
const subjectById = new Map(subjects.map((s) => [s.id, s]));

// ── 4. Emit topics + resources ───────────────────────────────────────────────
const RESOURCE_KINDS = {
  videos: 'video', books: 'book', articles: 'article', courses: 'course',
  podcasts: 'podcast', tools: 'tool', primarySources: 'primary_source',
  images: 'image', animations: 'animation',
};

const topics = [];
const resources = [];
let resourceCount = 0;

for (const [subjectId, subject] of Object.entries(CONTENT)) {
  if (!subjectById.has(subjectId)) continue;
  const topicsObj = subject.topics || {};
  for (const [topicId, t] of Object.entries(topicsObj)) {
    const meta = topicMeta.get(`${subjectId}::${topicId}`) || {};
    topics.push({
      id: topicId,
      subject_id: subjectId,
      name: t.name || topicId,
      level: t.level || meta.level || null,
      dek: t.dek || meta.desc || null,
      read_time: t.readTime || null,
      sections: t.sections || [],
      body: t.body || [],
      key_terms: t.keyTerms || [],
      see_also: t.seeAlso || [],
      prereqs: t.prereqs || [],
      leads_to: t.leadsTo || [],
      group_name: meta.group || null,
      status: 'published',
      verified_at: t.verifiedAt || null,
      sort: meta.sort ?? 0,
    });
    subjectById.get(subjectId).topic_count++;

    const res = t.resources || {};
    for (const [key, kind] of Object.entries(RESOURCE_KINDS)) {
      const arr = Array.isArray(res[key]) ? res[key] : [];
      arr.forEach((item, idx) => {
        if (!item || typeof item !== 'object') return;
        const { title, url, src, ...rest } = item;
        resources.push({
          topic_id: topicId,
          kind,
          title: title || rest.caption || null,
          url: url || src || null,
          payload: rest,
          status: 'published',
          sort: idx,
        });
        resourceCount++;
      });
    }
  }
}

// ── 5. Optional enrichment passthrough ───────────────────────────────────────
let enrichmentRows = null;
if (ENRICHMENT && typeof ENRICHMENT === 'object') {
  enrichmentRows = Object.entries(ENRICHMENT).map(([topic_id, data]) => ({ topic_id, data }));
}

// ── 6. Write ─────────────────────────────────────────────────────────────────
fs.mkdirSync(OUT, { recursive: true });
const write = (name, data) => {
  const p = path.join(OUT, name);
  fs.writeFileSync(p, JSON.stringify(data));
  const kb = (fs.statSync(p).size / 1024).toFixed(0);
  console.log(`  → ${path.relative(ROOT, p)}  (${data.length ?? Object.keys(data).length} rows, ${kb} KB)`);
};

console.log('\nWriting seed files:');
write('subjects.json', subjects);
write('topics.json', topics);
write('resources.json', resources);
if (enrichmentRows) write('enrichment.json', enrichmentRows);

console.log(`\n✓ Extracted ${subjects.length} subjects, ${topics.length} topics, ${resourceCount} resources` +
  (enrichmentRows ? `, ${enrichmentRows.length} enrichment records` : '') + '.');
console.log('  Next: provision Supabase, apply migration 0001, then: node supabase/seed/apply.cjs\n');
