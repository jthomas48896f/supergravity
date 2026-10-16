# Tutor eval score trend (baseline)

Scores over time from the baseline mode eval harness in `tools/tutor-eval/`. Each row is a logged run in this repo; no row is copied from a run that was not committed or re-run here.

| Date (UTC) | Questions | Groundedness | Citation rate | Correct source rate | Artifact |
|---|---|---|---|---|---|
| 2026-10-15T03:05:09.692Z | 12 | 0.806 | 1 | 0.833 | `tools/tutor-eval/results/baseline.json` as originally committed (superseded by the re-acceptance below; its numbers are recorded in that file's note) |
| 2026-10-15T18:10:29.664Z | 12 | 0.833 | 1 | 0.75 | `tools/tutor-eval/results/baseline.json` (current committed regression baseline) |
| 2026-10-16T13:18:47.282Z | 17 | 0.804 | 1 | 0.765 | `tools/tutor-eval/results/baseline-results.json` and `tools/tutor-eval/results/baseline-report.md` as committed in 1a4ac18 |
| 2026-10-16T22:21:35.651Z | 17 | 0.804 | 1 | 0.765 | `tools/tutor-eval/results/baseline-results.json` and `tools/tutor-eval/results/baseline-report.md` (fresh run, 2026-10-16 evening pass) |

These points are not like-for-like. The first two rows share the same 12 questions but sit on different corpora: the second row was re-accepted after Sprint W1 added 40 topics, which raised groundedness and lowered the correct source rate on one question. The set then grew from 12 to 17 questions on 2026-10-16, adding one question each for first aid, finance, nutrition, law, and medicine, so the 17 question rows measure a wider set than the 12 question rows. The named weak spot in the current rows is the finance question (`finance-budget`), which scores 0 of 3: the retriever answers it from economics.js instead of finance.js, so it is cited but not grounded and not from the correct source. That failure is kept in the committed report rather than edited away.

Baseline mode is an extractive answerer over retrieved atlas passages. It is the floor: any real tutor configuration should beat it, and a drop here means retrieval or content changed for the worse.
