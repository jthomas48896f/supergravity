# Contributing to Atlas

Contributions are welcome, and the door is kept visibly open: there is
always at least one good first issue available. Every change here follows
the project's evidence rule: a contribution ships with the run that proves
it (a test, an eval result, a build), not just the code.

## Setup

```bash
npm install
npm run build     # compiles the app
npm test          # build smoke test
npm run lint      # scoped lint (server, lib, tooling)
npm run eval:tutor  # tutor eval regression gate, baseline mode
```

## Good first issues (sized in hours)

- **Add five questions to the tutor eval set (1 to 2 hours).** Pick facts
  from an atlas content module, add them to `tools/tutor-eval/questions.json`,
  and confirm the harness self check passes (it verifies every fact against
  its source file). Include the before and after scores in your PR.
- **Write the missing run book for one tool (about 2 hours).** The scripts
  in `tools/` work but are thinly documented. Pick one, run it, and write
  the short guide you wish you had found.
- **Add a smoke check for one API function (2 to 3 hours).** Pick an
  endpoint in `api/`, write a small scripted check in the style of
  `scripts/smoke-test.cjs`, and wire it into the test script.
- **File a groundedness failure (under an hour).** Run the tutor eval,
  find a question where retrieval pulled the wrong subject, and open an
  issue with the row from the report. Diagnosis is a contribution.

## Content contributions

New subject modules follow `content/_grounding.md`: sources cited,
reliability weighted, no uncited factual claims. A module that cannot
point at its sources does not merge, however good it reads.

## Pull requests

Keep them small and single purpose. State the evidence in the PR
description: what you ran, what the numbers were before, what they are
after. Contributors are named in release notes.
