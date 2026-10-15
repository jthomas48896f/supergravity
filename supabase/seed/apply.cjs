#!/usr/bin/env node
// supabase/seed/apply.cjs
// ─────────────────────────────────────────────────────────────────────────────
// Loads the generated seed JSON (subjects/topics/resources) into a provisioned
// Supabase project via the PostgREST REST API. No npm dependency required —
// uses Node 20's global fetch and the service-role key.
//
// Prereqs:
//   1. Provision a Supabase project and apply supabase/migrations/0001_foundation.sql
//   2. Run: node tools/extract-content.cjs   (writes supabase/seed/*.json)
//   3. Set env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY  (e.g. in .env.local)
//
// Usage:  node supabase/seed/apply.cjs
// ─────────────────────────────────────────────────────────────────────────────
'use strict';

const fs = require('fs');
const path = require('path');

// Load repo-root .env.local so the service-role key stays in that gitignored file
// — never pasted into a shell or chat. No npm dependency needed.
(function loadEnvLocal() {
  try {
    const envPath = path.resolve(__dirname, '..', '..', '.env.local');
    if (!fs.existsSync(envPath)) return;
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      const val = m[2].trim().replace(/^["']|["']$/g, '');
      if (process.env[m[1]] === undefined) process.env[m[1]] = val;
    }
  } catch { /* ignore */ }
})();

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL || !KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  console.error('Add both to .env.local (repo root) and re-run: node supabase/seed/apply.cjs');
  process.exit(1);
}

const HERE = __dirname;
const BATCH = 500;

function load(name) {
  const p = path.join(HERE, name);
  if (!fs.existsSync(p)) throw new Error(`Seed file missing: ${name} — run tools/extract-content.cjs first.`);
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

async function upsert(table, rows, onConflict) {
  if (!rows.length) return;
  let done = 0;
  for (let i = 0; i < rows.length; i += BATCH) {
    const chunk = rows.slice(i, i + BATCH);
    const qs = onConflict ? `?on_conflict=${onConflict}` : '';
    const res = await fetch(`${URL}/rest/v1/${table}${qs}`, {
      method: 'POST',
      headers: {
        apikey: KEY,
        Authorization: `Bearer ${KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(chunk),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`${table} batch @${i} failed: ${res.status} ${text.slice(0, 400)}`);
    }
    done += chunk.length;
    process.stdout.write(`\r  ${table}: ${done}/${rows.length}`);
  }
  process.stdout.write('\n');
}

(async () => {
  const subjects = load('subjects.json');
  const topics = load('topics.json');
  const resources = load('resources.json');

  console.log(`Loading into ${URL} …`);
  // FK order: subjects → topics → resources
  await upsert('subjects', subjects, 'id');
  await upsert('topics', topics, 'id');
  await upsert('resources', resources); // uuid PK, no natural conflict key

  console.log(`\n✓ Seeded ${subjects.length} subjects, ${topics.length} topics, ${resources.length} resources.`);
})().catch((err) => { console.error('\n✗', err.message); process.exit(1); });
