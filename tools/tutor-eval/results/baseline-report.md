# Tutor eval results (baseline)

Run: 2026-10-15T03:06:30.002Z. Questions: 12. Mode: baseline.

- Groundedness (expected atlas facts present in the answer): **0.806** (gate: 0.75)
- Citation rate (answers naming at least one source): **1** (gate: 1)
- Correct source rate (cited the subject file the question targets): **0.833** (gate: 0.75)

| Question | Subject | Facts found | Cited | Correct source | Retrieved from |
|---|---|---|---|---|---|
| chess-openings | chess | 3/3 | yes | yes | chess.js |
| plumbing-drain-slope | plumbing | 3/3 | yes | yes | plumbing.js |
| astronomy-hubble | astronomy | 3/3 | yes | yes | astronomy.js |
| beekeeping-varroa | beekeeping | 2/3 | yes | yes | beekeeping.js |
| sailing-jibe | sailing | 2/2 | yes | yes | sailing.js |
| knots-three-kinds | knots | 3/3 | yes | yes | knots.js |
| welding-mig-tig | welding | 3/3 | yes | yes | welding.js |
| gardening-soil | gardening | 3/3 | yes | yes | gardening.js, composting.js |
| bbq-brisket | bbq | 1/3 | yes | no | cooking.js, sociology.js |
| survival-priorities | survival | 1/3 | yes | no | hunting.js, parenting.js |
| physics-frameworks | physics | 3/3 | yes | yes | math.js, physics.js |
| geology-basics | geology | 1/3 | yes | yes | geology.js, astronomy.js |

Baseline mode is an extractive answerer over retrieved atlas passages. It is the floor: any real tutor configuration should beat it, and a drop here means retrieval or content changed for the worse.
