#!/usr/bin/env node
// tools/sprint-generate.cjs
// Autonomous weekly content sprint — runs on GitHub Actions (no desktop app).
// Picks the 2 thinnest priority subjects, asks the Anthropic API for new topic
// records as STRICT JSON matching content/_schema.md, validates them, and writes
// draft files to content/drafts/ for human review via PR. Never touches live content.
//
// Usage: ANTHROPIC_API_KEY=sk-ant-... node tools/sprint-generate.cjs [--per-subject 5]
'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// Priority queue from ops/05-strategy-autonomous-ops.md §2 (homeschool → trades → homestead)
const PRIORITY = ['math', 'biology', 'astronomy', 'history', 'literature',
  'electrical', 'welding', 'plumbing', 'gardening', 'fermentation', 'firstaid', 'survival'];
const TARGET = 12; // "full-feeling" lessons per subject
const PER_SUBJECT = parseInt((process.argv.find(a => a.startsWith('--per-subject')) || '').split('=')[1] || '5', 10);
const SAFETY_SUBJECTS = ['electrical', 'welding', 'plumbing', 'firstaid', 'survival', 'fermentation'];

// Load atlas structure + existing content counts
global.window = {};
require(path.join(ROOT, 'data.js'));
const SUBJECTS = global.window.SUBJECTS;
function lessonCount(subjectId) {
  const f = path.join(ROOT, 'content', subjectId + '.js');
  if (!fs.existsSync(f)) return 0;
  try {
    const ctx = { window: {} };
    require('vm').runInNewContext(fs.readFileSync(f, 'utf8'), ctx);
    return Object.keys(((ctx.window.CONTENT || {})[subjectId] || {}).topics || {}).length;
  } catch { return 0; }
}

const picks = PRIORITY
  .map(id => ({ id, have: lessonCount(id), s: SUBJECTS.find(x => x.id === id) }))
  .filter(x => x.s && x.have < TARGET)
  .sort((a, b) => a.have - b.have)
  .slice(0, 2);

if (!picks.length) { console.log('All priority subjects at target. Nothing to do.'); process.exit(0); }

const SCHEMA_DOC = fs.readFileSync(path.join(ROOT, 'content', '_schema.md'), 'utf8').slice(0, 6000);
const STYLE_DOC = fs.existsSync(path.join(ROOT, 'content', '_style.md'))
  ? fs.readFileSync(path.join(ROOT, 'content', '_style.md'), 'utf8').slice(0, 4000) : '';

async function generate(subject, existingTopicIds) {
  const prompt = `You are the content author for Atlas of Everything, an interactive learning site with a precise house style.

HOUSE SCHEMA (follow the topic-record shape exactly):
${SCHEMA_DOC}

HOUSE STYLE:
${STYLE_DOC}

TASK: Author ${PER_SUBJECT} NEW in-depth lessons for the subject "${subject.name}" (id: ${subject.id}).
Existing topic ids (do NOT duplicate): ${existingTopicIds.join(', ') || 'none'}.
Progress logically from the existing topics toward intermediate/advanced material.

Respond with ONLY a JSON array (no markdown fence, no commentary) of ${PER_SUBJECT} objects:
{ "id": "<short_snake_id>", "name": "...", "level": "Beginner|Intermediate|Advanced",
  "dek": "10-18 word newspaper dek", "readTime": "N min",
  "sections": ["..."],
  "body": [ {"type":"lead","text":"..."}, {"type":"h2","text":"..."}, {"type":"p","text":"..."},
            {"type":"callout","text":"..."}, {"type":"quote","text":"...","cite":"..."} ],
  "keyTerms": ["..."] }
Rules: body 14-24 blocks, real depth (a motivated adult learns something), concrete first sentences,
no invented statistics or fake citations, no URLs (resources are added by a separate pipeline).
Never give dosage, edibility verdicts, or live-electrical procedures — teach principles and defer
specifics to licensed professionals or field guides.`;

  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.SPRINT_MODEL || 'claude-sonnet-5',
      max_tokens: 16000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!r.ok) throw new Error(`API ${r.status}: ${(await r.text()).slice(0, 300)}`);
  const data = await r.json();
  const text = data.content.map(c => c.text || '').join('');
  const json = text.slice(text.indexOf('['), text.lastIndexOf(']') + 1);
  return JSON.parse(json);
}

function validate(t) {
  const errs = [];
  if (!/^[a-z0-9_]{2,32}$/.test(t.id || '')) errs.push('bad id');
  if (!t.name || !t.dek) errs.push('missing name/dek');
  if (!['Beginner', 'Intermediate', 'Advanced'].includes(t.level)) errs.push('bad level');
  if (!Array.isArray(t.body) || t.body.length < 10) errs.push('body too thin');
  const okTypes = new Set(['lead', 'h2', 'h3', 'p', 'callout', 'quote']);
  if ((t.body || []).some(b => !okTypes.has(b.type) || !b.text)) errs.push('bad body block');
  return errs;
}

(async () => {
  if (!process.env.ANTHROPIC_API_KEY) { console.error('ANTHROPIC_API_KEY missing'); process.exit(1); }
  const outDir = path.join(ROOT, 'content', 'drafts');
  fs.mkdirSync(outDir, { recursive: true });
  const day = new Date().toISOString().slice(0, 10);
  const checklist = [`# Content sprint ${day} — review checklist`, ''];

  for (const p of picks) {
    const existing = p.s.groups.flatMap(g => g.topics.map(t => t.id));
    console.log(`Generating ${PER_SUBJECT} lessons for ${p.id} (has ${p.have}/${TARGET})...`);
    const topics = await generate(p.s, existing);
    const valid = [], rejected = [];
    for (const t of topics) {
      const errs = validate(t);
      (errs.length ? rejected : valid).push(errs.length ? { id: t.id, errs } : t);
    }
    const needsExpert = SAFETY_SUBJECTS.includes(p.id);
    const out = { subjectId: p.id, generated: day, needsExpertReview: needsExpert, topics: valid, rejected };
    const file = path.join(outDir, `sprint-${day}-${p.id}.json`);
    fs.writeFileSync(file, JSON.stringify(out, null, 2));
    console.log(`  → ${valid.length} valid, ${rejected.length} rejected → ${path.relative(ROOT, file)}`);
    checklist.push(`## ${p.s.name} (${valid.length} drafts${needsExpert ? ' — NEEDS-EXPERT-EYE' : ''})`);
    for (const t of valid) checklist.push(`- [ ] **${t.name}** (${t.level}, ${t.body.length} blocks) — accuracy / tone / safety`);
    checklist.push('');
  }
  checklist.push('Integrate approved drafts: add topic entries to data.js groups and the topic records to content/<subject>.js per content/_schema.md, then `npm run build`.');
  fs.writeFileSync(path.join(ROOT, 'ops', 'reports', `content-sprint-${day}.md`), checklist.join('\n'));
  console.log('Sprint complete.');
})().catch(e => { console.error(e.message); process.exit(1); });
