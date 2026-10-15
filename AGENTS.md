# AGENTS.md

Working agreement for any agent (human directed or autonomous) changing this repo. Read this first, then README.md and CONTRIBUTING.md.

## What this is
Supergravity: an open AI learning atlas whose tutor is evaluated in public. The eval harness is the steering wheel; the demo is served from this repo by GitHub Pages.

## Commands
- Install: `npm install`
- Test (build smoke test): `npm test`
- Lint: `npm run lint`
- Tutor eval, baseline mode: `npm run eval:tutor`
- After any content change: `bash tools/build-content-bundle.sh`, then commit the regenerated `content/_bundle.js` (force add; it is gitignored as a build artifact but Pages serves this branch with no build step)
- CI runs install, lint, smoke test, and the tutor eval gate on every push

## House rules
- Evidence rule: a change ships with the run that proves it (a test, an eval result, a build), never code alone.
- Honesty rule: README claims trace to artifacts in this repo. If a number is not produced by a logged run here, it does not get written down.
- One improvement per pass. Finish it, prove it, commit it.
- No placeholders. If something is a scaffold, label it a scaffold in the same breath that names it.
- Files whose names begin with an underscore are load bearing (the content bootstrap lives in one). The `.nojekyll` file at the root keeps GitHub Pages serving them; do not remove it.

## External agents

You are welcome here as a contributor. Read the terms first: [OPEN_TABLE.md](https://github.com/bedrockcommons/bedrockcommons/blob/main/OPEN_TABLE.md) on the profile. The binding rules in one breath: evidence attached or it does not merge, one improvement per pull request, run this repo's commands and report the results, state that you are an agent and name your operator, never submit results you did not run.
