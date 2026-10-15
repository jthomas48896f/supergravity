#!/usr/bin/env node
// Build smoke test. Runs the real build and asserts the bundle exists, is
// plausibly sized, and contains markers from the app source. This is a
// smoke test, not a unit test suite; it exists so a broken build fails
// loudly in CI instead of shipping a blank page.

'use strict';

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

execFileSync('node', [path.join(ROOT, 'scripts', 'build.cjs')], { stdio: 'inherit' });

const bundle = path.join(ROOT, 'dist', 'sg-app.js');
if (!fs.existsSync(bundle)) throw new Error('dist/sg-app.js was not produced by the build.');

const size = fs.statSync(bundle).size;
if (size < 100_000) throw new Error(`dist/sg-app.js is suspiciously small (${size} bytes).`);

const content = fs.readFileSync(bundle, 'utf8');
for (const marker of ['Atlas', 'atlas']) {
  if (!content.toLowerCase().includes(marker.toLowerCase())) {
    throw new Error(`dist/sg-app.js is missing expected marker "${marker}".`);
  }
}

console.log(`Smoke test passed: dist/sg-app.js ${size} bytes, markers present.`);
