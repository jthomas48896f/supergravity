# Landscape: AI tutors and evaluation, late 2026

A short scan of where AI tutoring and LLM evaluation practice stands, run on
2026-10-14 to ground this project's roadmap. Sources are linked; the
projection at the end is labeled as projection.

## Where the field is

**Evaluation is now a release gate, not a research extra.** Current practice
runs a small golden set in CI on every change, gates on per-axis thresholds
rather than one composite score (a faithfulness floor around 0.75 is a
commonly cited starting point), layers cheap deterministic checks before any
LLM judge, and compares each run against a committed baseline so quiet
regressions surface as diffs, not arguments.

- https://futureagi.com/blog/llm-evaluation-best-practices-checklist-2026/
- https://futureagi.com/blog/llm-evaluation-frameworks-metrics-best-practices/

**Tutor evaluation is moving from content accuracy to pedagogy.** Newer
benchmarks test whether an agent adapts to a learner, diagnoses a
misconception, and exercises professional teaching judgment, not only
whether its facts are right. Frameworks like TEACH-AI argue for human
centered, stakeholder aligned measures alongside correctness.

- https://github.com/edtechdev/aied/blob/HEAD/concepts/pedagogical-agent.md
- https://openreview.net/pdf?id=FLA2FggDxG

**Groundedness is shifting from measured to constructed.** One visible
design pattern in 2026 projects is extractive generation with a citation
guard: every substantive sentence must resolve to a retrieved passage or it
does not render, making groundedness an invariant the eval verifies rather
than a rate it discovers.

- https://github.com/chelseakr/sprout/blob/HEAD/docs/adr/0003-extractive-generation-and-citation-guard-for-100pct-groundedness.md

## Projection (projection, not a claim)

Over the next 12 to 24 months, AI tutors will plausibly be judged less on
raw answer quality and more on two auditable properties: whether every
claim traces to a source a teacher can inspect, and whether the tutor's
interaction pattern (diagnosing before telling, adapting to the learner) is
itself evaluated. Tutor products that cannot produce an eval report on
demand will look unfinished next to those that can.

## How Supergravity is positioned

Shipped now: a deterministic eval harness (`tools/tutor-eval/`) that grades
answers over the atlas's own content for groundedness and citation
presence, runs as a regression gate in CI with absolute per-axis thresholds
and a committed baseline diff, and includes an extractive baseline mode
that embodies the grounded-by-construction pattern above. The baseline
scores (groundedness 0.806, citation rate 1.0, correct source rate 0.833 on
12 questions) are committed under `tools/tutor-eval/results/` and are the
floor any real model configuration must beat.

Next along this trajectory, in order: run the same harness in LLM mode
against the production tutor prompt (implemented, awaits an API key in CI),
then add pedagogy cases (misconception diagnosis, adapting an explanation
to a stated level) to the question set.
