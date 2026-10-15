#!/usr/bin/env node
// supabase/seed/seed-via-rpc.cjs
// Bulk-loads the generated seed JSON via a temporary SECURITY DEFINER RPC
// (public._seed_bulk), so no service_role key is needed — the anon key + the
// definer function is enough, and the function bypasses RLS to insert.
// The JSON is read from disk and streamed; it never passes through chat context.
//
// Prereq: the _seed_bulk function must exist (created/dropped around this run).
// Env: SUPABASE_URL, SUPABASE_ANON_KEY (or pass SUPABASE_SERVICE_ROLE_KEY).
'use strict';

const fs = require('fs');
const path = require('path');

(function loadEnvLocal() {
  try {
    const p = path.resolve(__dirname, '..', '..', '.env.local');
    if (!fs.existsSync(p)) return;
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  } catch {}
})();

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL || !KEY) { console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY'); process.exit(1); }

async function rpc(kind, rows) {
  const res = await fetch(`${URL}/rest/v1/rpc/_seed_bulk`, {
    method: 'POST',
    headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind, rows }),
  });
  if (!res.ok) throw new Error(`${kind} ${res.status}: ${(await res.text()).slice(0, 400)}`);
  return res.json();
}

async function seed(kind, file, batch) {
  const rows = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'));
  let done = 0;
  for (let i = 0; i < rows.length; i += batch) {
    const chunk = rows.slice(i, i + batch);
    await rpc(kind, chunk);
    done += chunk.length;
    process.stdout.write(`\r  ${kind}: ${done}/${rows.length}`);
  }
  process.stdout.write('\n');
}

(async () => {
  console.log(`Seeding ${URL} via _seed_bulk …`);
  await seed('subjects', 'subjects.json', 100);
  await seed('topics', 'topics.json', 40);
  await seed('resources', 'resources.json', 300);
  console.log('✓ Seed complete.');
})().catch((e) => { console.error('\n✗', e.message); process.exit(1); });
