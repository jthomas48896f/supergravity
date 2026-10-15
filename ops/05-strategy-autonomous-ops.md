# Supergravity — Strategy & Autonomous Ops Plan
*Strategy & Ops division · Panel: Kahneman (debiasing) · Systems Architect · Growth PM · Indie Operator*
*Date: 2026-07-06 · Horizon: 90 days · Prime directive: revenue in 4 weeks, then progressively autonomous operation*

**Panel's one-line consensus before anything else:** Your risk is not that the product is bad. It is that you will spend the next 90 days improving the product instead of selling it, because building is your comfort zone and selling is not. Everything below is designed around that single behavioral fact.

---

## 1. PREMORTEM — Day 90, total revenue <$500. What happened?

Base rate check (Kahneman): most solo edtech/consumer-lifetime launches make <$1,000 in their first 90 days. That is the *default outcome*, not the failure case. You need active counter-pressure, not optimism.

### Failure Chain 1: "The Builder's Loop" — depth work ate distribution work
**Chain:** Depth is correctly identified as the #1 gap → founder spends weeks 1–3 "getting content ready" before promoting → launch slips → homeschool buying window (July–Aug) closes → launches to self-learners in September with no seasonal tailwind → 40 signups, 3 sales. The tell: a founder with ~97 repos has a demonstrated preference for starting/building over shipping/distributing. This is the single most probable failure mode and it will *feel* virtuous while it happens.
**Countermeasure (install now):** Invert the order. Launch THIS WEEK with 304 lessons and honest framing ("101 subjects, deepening weekly — founder pricing because you're early"). Content depth becomes the *post-launch retention engine*, not a launch prerequisite. Hard rule: **no more than 50% of weekly hours on content/code; distribution gets first 60 minutes of every day.** The autonomous ops jobs (§6) enforce this by making content generation mostly machine work.

### Failure Chain 2: Stripe stays "pending" and the funnel has no bottom
**Chain:** Stripe is a "15-minute task" today → it stays pending 10 more days because it's boring → early traffic (the best traffic you'll ever get — launch spike) hits a paywall that can't take money → the spike is wasted → by the time checkout works, traffic is 20/day.
**Countermeasure:** Stripe checkout live within **24 hours of reading this**, before any other task. It is the literal definition of the critical path. Test with a real card, refund yourself, verify the entitlements row writes. Day 1, non-negotiable, done before touching content.

### Failure Chain 3: Launch as an event, not a system
**Chain:** One HN "Show HN" post → it doesn't hit front page (base rate: ~85% don't) → founder reads this as "the market doesn't want it" → morale collapse → quiet abandonment by day 45. A single launch is a coin flip; treating it as the verdict is a sampling error.
**Countermeasure:** Pre-commit (in writing, now) to **8 distribution shots across 4 doors** before ANY conclusion is drawn: Show HN, Product Hunt, 2 homeschool communities (e.g., r/homeschool, a co-op FB group — during July buying season), 2 trades communities (r/skilledtrades, r/electricians — "free interactive intro to your trade"), 2 homestead/prepper communities. Log each shot and its funnel numbers. Verdicts come from the day-14/day-30 framework (§5), never from one post's performance.

### Failure Chain 4: The lifetime-price trap — sold to the wrong door at the wrong depth
**Chain:** $59 lifetime is an easy yes for self-learners, but self-learners churn through the free lesson, think "neat," and never return — 2 lessons/subject can't sustain a "learn anything" promise, so word-of-mouth is zero. Meanwhile homeschool parents — who actually *plan curricula in July and pay for a full year* — never hear about it because the founder launched where founders live (HN), not where buyers live. Day 90: 200 HN upvotes, 6 sales, no homeschool presence.
**Countermeasure:** Treat HN/PH as *awareness*, homeschool as *revenue*. The $99 family tier is the real product for the real buyer. Ship a "Homeschool: 2026–27 year at a glance" landing page in week 1 mapping subjects to grade bands. Content roadmap (§2) deepens homeschool-core subjects FIRST so the July–Aug buyer sees a usable spine, not a demo. Track sales *by door*; expect homeschool to embarrass the other three.

### Failure Chain 5: Refund/credibility spiral from the depth mismatch
**Chain:** Marketing says "Atlas of Everything, 101 subjects" → buyer pays $59 → clicks into subject #3 and finds 2 lessons → feels misled → refund + a public "this is AI-generated shovelware" comment on the launch thread → the comment outranks the product. With AI-generated content in 2026, skepticism is the default; one credible "shallow/slop" accusation during launch week is fatal to a founder-priced early-adopter motion.
**Countermeasure:** (a) Honest depth signaling in the UI now: show lesson counts per subject and a public "deepening roadmap — vote on what's next" page. Convert the weakness into an early-adopter feature: founders' cohort steers the atlas. (b) Human review gate on every published lesson (§6, Job 2) — no unreviewed AI lesson ever ships. (c) 30-day no-questions refund policy stated loudly; it *reduces* refunds by lowering purchase anxiety and defuses the "scam" framing before it starts.

**Kahneman's closing note:** Chains 1, 2, and 3 are all the same underlying failure — *avoidance of exposure to judgment* — expressed three ways. The countermeasures work only if scheduled and externally enforced. That is what §6 is for: the cron jobs are your accountability structure, not just automation.

---

## 2. Content-Depth Roadmap

### Define "full-feeling" numerically
- **Full-feeling subject: 12 lessons** (≈ 4–6 hrs of learner time), structured as 3 units × 4 lessons, each unit ending in a sim or applied project. 12 is the threshold where a homeschool parent can call it "a unit study" and a self-learner can call it "a course."
- **Credible subject: 6 lessons** (minimum to not feel like a demo).
- **Anything at ≤2 lessons gets a visible "In development — vote to prioritize" badge.** Never let a paying user hit a 2-lesson subject unwarned.

### The First 12 (deepen to 12 lessons each; ordered by revenue proximity)

| # | Subject | Cluster | Why first |
|---|---------|---------|-----------|
| 1 | Pre-Algebra / Algebra I | Homeschool core | #1 homeschool pain point; parents pay for math first; sims are a genuine differentiator vs. workbooks |
| 2 | Biology (life science) | Homeschool core | Middle-school science staple; sim-friendly (cells, ecosystems); July curriculum shoppers |
| 3 | Earth & Space Science | Homeschool core | High-wonder, sim-native, low controversy; strong free-lesson hook |
| 4 | US History / Civics | Homeschool core | Curriculum requirement in most states; completes a 4-subject "core spine" a parent can buy today |
| 5 | Writing & Grammar | Homeschool core | Rounds out ELA; AI tutor is uniquely strong here (feedback on writing) |
| 6 | Electrical (trade) | Trades | Largest trade labor gap; licensure ladder gives clear lesson sequence; searchers have commercial intent |
| 7 | Welding | Trades | Huge interest, visual/sim-friendly, almost zero good interactive content online |
| 8 | Plumbing | Trades | Completes a "skilled trades starter" bundle; cross-sells with 6–7 |
| 9 | Vegetable Gardening / Small-Scale Farming | Homestead | Gateway subject of the whole cluster; seasonal urgency (fall planting content in Aug) |
| 10 | Food Preservation & Canning | Homestead | Peak search season is Aug–Sep — perfectly timed; safety content rewards a careful, reviewed source |
| 11 | Home Energy / Off-Grid Solar | Homestead | Bridges trades + prepper doors; high willingness to pay |
| 12 | First Aid & Emergency Preparedness | Homestead/prepper | Whole-family relevance; pushes the $99 family tier |

**Deliberately excluded from the first 12:** anything you personally find most interesting that isn't on this list. (Operator's rule: the atlas's breadth was built for you; its depth gets built for buyers.)

### Weekly content sprint (uses existing pipeline: batch prompts + `npm run enrich` + founder review)

| Day | Task | Time |
|-----|------|------|
| Mon (automated) | Cron job generates 10 lesson drafts for the 2 focus subjects of the week, opens a PR (§6, Job 2) | 0 min founder |
| Tue–Thu | Founder reviews ~3–4 lessons/day: accuracy, voice, sim hooks. Approve / edit / reject in PR | 30–40 min/day |
| Fri | Merge + deploy; changelog job drafts the "what's new" note (§6, Job 4) | 15 min |
| Ongoing | 1 subject-priority vote check from users; reorder queue if a door is converting hot | 5 min |

**Throughput: ~10 reviewed lessons/week = 2 subjects/week from 2→12.** All 12 priority subjects full-feeling by **week 6–7** (304 → ~424 lessons). Growth PM's caveat: if review takes >5 min/lesson, fix the batch prompt template, don't grind — the pipeline is the product here.

---

## 3. 4-Week Operating Plan

Budget: launch week is heavier; thereafter **≤2 focused hrs/day**, distribution gets the first hour, always.

### Week 1 (Jul 6–12): TAKE MONEY — *Metric: first 10 sales*
- Day 1: Stripe live, tested end-to-end with real card + refund. Depth badges + roadmap/voting page shipped.
- Day 2–3: Homeschool landing page ("2026–27 year at a glance"). First content sprint starts (Algebra + Biology).
- Day 4: Launch night — Show HN + 1 homeschool community post (this is the exception night, go long).
- Day 5–7: Reply to every comment (60 min/day), 2 more community posts, watch the funnel.
- Daily: ~2 hrs (launch day ~4).

### Week 2 (Jul 13–19): FIND THE DOOR — *Metric: sales by channel (which door converts?)*
- Complete the 8 pre-committed distribution shots (PH, trades ×2, homestead ×2).
- Content sprint 2 (Earth/Space + US History). Autonomous jobs go live (§6).
- Day 14 checkpoint (§5).
- Daily: 60 min distribution/replies, 40 min lesson review, 20 min funnel digest.

### Week 3 (Jul 20–26): POUR INTO THE HOT DOOR — *Metric: paywall→purchase conversion rate*
- Kill outreach to the two worst doors. Double posting/engagement in the best one.
- Content sprint reordered to the winning door's subjects. First newsletter/changelog to signups (drafted by Job 4, human-approved).
- If conversion <2%: fix the paywall page (show lesson counts, roadmap, refund promise), not the price.
- Daily: same 2-hr split.

### Week 4 (Jul 27–Aug 2): SYSTEMATIZE — *Metric: revenue per founder-hour*
- Full autonomous cadence running; founder role reduces to: review PRs, approve sends, engage the winning community.
- Founder-500 counter on pricing page if ≥25 sales (real scarcity only — fake scarcity is a refund machine).
- Day 30 checkpoint (§5). Write the week-5+ plan from data, not vibes.
- Daily: ≤90 min.

---

## 4. KPI Dashboard Spec (8 metrics)

Source: Supabase (signups, lesson events, entitlements) + Stripe (purchases, refunds) + Vercel/analytics (visitors). Rendered daily by Job 1 (§6). Thresholds are for **steady state after launch week** — launch-spike days are excluded from trend judgments (Kahneman: don't calibrate on your own outlier).

| # | Metric | Definition | Healthy | Warning | Kill-signal |
|---|--------|-----------|---------|---------|-------------|
| 1 | Weekly unique visitors | Site uniques, 7-day | >1,500 | 500–1,500 | <300 for 2 consecutive wks |
| 2 | Visitor→signup | Signups ÷ uniques | >8% | 3–8% | <2% |
| 3 | Signup→first lesson complete | Within 48h of signup | >60% | 35–60% | <25% (product problem, stop all marketing) |
| 4 | Free-lesson→paywall hit | Signups who finish lesson 1 and click into locked lesson 2 | >40% | 20–40% | <15% (lesson 1 isn't creating pull) |
| 5 | Paywall→purchase | Purchases ÷ paywall hitters, 7-day | >4% | 1.5–4% | <1% for 2 wks post-fix |
| 6 | Refund rate | Refunds ÷ purchases, trailing 30d | <5% | 5–12% | >15% (Failure Chain 5 is live — halt promo, fix depth signaling) |
| 7 | Tutor cost / active user / wk | AI spend ÷ WAU | <$0.15 | $0.15–0.50 | >$0.75 (margin killer at lifetime pricing — cap or tier it) |
| 8 | Lessons shipped / wk (reviewed & merged) | From merged PRs | ≥10 | 5–9 | <5 for 2 wks (pipeline or founder-review bottleneck) |

Rule: any **kill-signal** cell triggers a mandatory written diagnosis within 48h — one paragraph: cause hypothesis, fix, deadline. No silent yellow-drift.

---

## 5. Kill / Double-Down Framework

Pre-committed now so day-30 Josh can't rationalize (this document is the contract with him).

### Day 14 (Jul 20) — *Diagnostic gate, not a kill gate. Killing at n<200 visitors is noise-reading.*
Preconditions for the gate to count: Stripe was live ≥10 days AND ≥6 of 8 distribution shots fired. **If not, the gate is void and the diagnosis is "founder didn't execute §1's countermeasures" — fix that, not the product.**
- **DOUBLE DOWN** if: ≥10 sales, OR (≥300 signups AND paywall→purchase ≥2%). Action: pour everything into the best door.
- **STEER** if: signups healthy (≥150) but sales <5 → conversion problem: fix paywall page, test $39 founder price, push family tier to homeschool. Product interest is proven; packaging isn't.
- **ALARM** if: <100 signups across 6+ shots AND visitor→signup <3% → the pitch, not the funnel, is failing. Rewrite positioning around ONE door for week 3. Do not add features. Do not add subjects.

### Day 30 (Aug 5) — *Real gate.*
- **DOUBLE DOWN** (any one): ≥$1,500 total revenue; OR ≥25 sales; OR one door showing ≥5% paywall→purchase with a repeatable channel behind it. → Commit 90 more days, deepen the winning cluster to 20+ lessons/subject, raise price at founder-500.
- **PIVOT-WITHIN** (all of): $300–1,500 revenue AND metric #3 ≥50% (people who try it, like it) AND one door clearly outperforming → Narrow: relaunch as the single-door product ("Supergravity Homeschool" / "Trade School in Your Pocket"). The atlas remains the library; the *product* becomes the door.
- **KILL / SHELVE** (all of): <$300 revenue AND no door >1% paywall→purchase AND refund rate >10% AND 8/8 shots fired with honest effort → Stop active work. Leave the site up (lifetime buyers keep access; costs are near-zero), write the postmortem, take the pipeline + entitlements + autonomous-ops machinery to the next product. **Explicit non-criterion: "but I have new feature ideas" does not override this row. Only funnel numbers vote.**

---

## 6. AUTONOMOUS OPS DESIGN — Claude Scheduled Tasks Blueprint

**Architecture principles (Systems Architect):**
1. **Read freely, write behind gates.** Jobs may read Supabase, Stripe, GitHub, analytics, inbox without limits. Anything user-facing or irreversible (publish, send, refund, price change) terminates in a *draft + human approval*, never an autonomous send.
2. **Every job ends with an artifact** (digest file, PR, draft) — no job that "just checks." Artifacts land in `/ops/reports/` or as GitHub PRs so there is a paper trail.
3. **Escalation over silence.** Jobs that detect threshold breaches say so at the top of their output in ALL CAPS; a job that errors leaves a failure note rather than dying quietly.
4. **Founder's daily surface = 1 digest + PR review queue + drafts folder.** If it's not in one of those three places, it doesn't exist.

### Job 1 — Morning Revenue & Funnel Digest
- **Cron:** `0 7 * * *` (7:00 AM ET daily)
- **Reads:** Stripe (charges, refunds, MRR-equivalent), Supabase (signups, lesson completions, paywall events, entitlements), Vercel analytics, yesterday's digest (for deltas).
- **Prompt-brief:** "Pull the last 24h and trailing 7d for the 8 KPIs in §4 of `/ops/05-strategy-autonomous-ops.md`. Render the funnel visitors→signup→first-lesson→paywall→purchase with conversion % at each step and Δ vs trailing average. Flag any warning/kill threshold at the top in caps. Compute tutor cost/user. End with exactly ONE recommended founder action for today, ≤2 sentences, biased toward distribution over building. Write to `/ops/reports/daily/YYYY-MM-DD.md`."
- **Produces:** Daily digest file + one-action recommendation.
- **Human gate:** None (read-only). This job also serves as the §1 accountability mechanism — it names the day's distribution action every single morning.

### Job 2 — Weekly Content-Sprint PR
- **Cron:** `0 6 * * 1` (Mondays 6:00 AM)
- **Reads:** Content roadmap (§2 table + user votes from the roadmap page via Supabase), existing lessons in the repo (style/format reference), batch prompt templates, `npm run enrich` tooling.
- **Prompt-brief:** "For the top 2 subjects in the §2 queue (adjusted by user votes and last week's door performance from Job 1 digests), generate 5 lessons each using the repo's batch prompt templates, run `npm run enrich`, and validate: sim hooks present, reading level matches subject's grade band, no factual claims without confidence, safety-sensitive content (electrical, canning, first aid) flagged with `NEEDS-EXPERT-EYE` comments. Open ONE PR titled `content-sprint-W{n}: {subjects}` with a review checklist per lesson. Never merge."
- **Produces:** 1 PR with ~10 draft lessons + per-lesson review checklist.
- **Human gate:** **Hard.** Founder reviews/edits/merges Tue–Thu (§2 cadence). Nothing publishes without merge. Safety-flagged lessons require explicit checkbox sign-off.

### Job 3 — Support & Community Triage
- **Cron:** `0 8,17 * * *` (8 AM + 5 PM daily)
- **Reads:** Support inbox (jteducates@gmail.com or support@ alias), Stripe disputes/refund requests, comment threads on active launch posts (via provided URLs list in `/ops/config/watch-urls.md`).
- **Prompt-brief:** "Triage all new inbound. Categorize: bug / refund request / presales question / content feedback / community comment. For each, draft a reply in Josh's voice (direct, warm, no corporate filler; templates in `/ops/config/voice.md`) and save as email drafts / a replies file. For refund requests: draft the approval reply and the Stripe refund link but DO NOT execute the refund. For bugs: also open a GitHub issue with repro details. Surface anything reputationally hot (public 'AI slop' accusations, angry threads) at the top of the output with a suggested response strategy. Log recurring themes to `/ops/reports/support-themes.md`."
- **Produces:** Draft replies + GitHub issues + escalation flags.
- **Human gate:** **Hard on all sends and all refunds.** Founder approves drafts in one 15-min batch/day. Issues auto-file (reversible, internal).

### Job 4 — Weekly Changelog & Newsletter Draft
- **Cron:** `0 9 * * 5` (Fridays 9:00 AM)
- **Reads:** Week's merged content PRs, deploy log, roadmap votes, Job 1 digests (for a "this week in numbers" line if flattering), support themes file.
- **Prompt-brief:** "Draft (1) a public changelog entry and (2) a short newsletter to all signups: what shipped (subjects deepened, lesson counts), what's next from the vote queue, one interesting lesson teaser with link, founder-500 spots remaining if ≥25 sold. ≤250 words, Josh's voice, zero hype-words ('excited', 'thrilled' banned). CTA for free users: the newly deepened subject's first lesson. Save as draft in email tool + `/ops/reports/changelog/`."
- **Produces:** Changelog + newsletter drafts.
- **Human gate:** **Hard.** Founder edits and hits send (Friday, 10 min). Sending is irreversible; never automated.

### Job 5 — Weekly Growth & Experiment Review
- **Cron:** `0 18 * * 0` (Sundays 6:00 PM — sets up Monday)
- **Reads:** All 7 daily digests, sales-by-door data (UTM/referrer in Supabase), §3 plan, §5 criteria, distribution-shot log `/ops/reports/shots.md`.
- **Prompt-brief:** "Write the weekly ops review: (1) KPI table vs thresholds with trend arrows; (2) door ranking by paywall→purchase — declare the current winner; (3) verdict on this week's ONE metric from §3; (4) countdown + current trajectory vs the day-14/day-30 gates in §5, stated bluntly ('on current trend you MISS the day-30 double-down bar'); (5) propose next week's single experiment (one variable: price point, paywall copy, door, free-lesson choice) with success criterion and how to measure it; (6) count distribution shots fired vs the 8 committed — if behind, say so first. Write to `/ops/reports/weekly/W{n}.md`."
- **Produces:** Weekly review + one proposed experiment.
- **Human gate:** Founder approves/rejects the experiment Monday morning (config-level changes like paywall copy may then ship via PR; **price changes always founder-executed in Stripe manually**).

### Job 6 — Monthly Pricing, Cost & Strategy Review
- **Cron:** `0 9 1 * *` (1st of month, 9:00 AM)
- **Reads:** Full month of Stripe + Supabase, tutor/API cost data, Vercel/Supabase bills, founder-500 counter, §5 framework, all weekly reviews.
- **Prompt-brief:** "Produce the monthly review: unit economics (revenue/user, tutor cost/user, infra cost/sale — flag if lifetime pricing is underwater on heavy tutor users and propose a cap/tier if so); founder-500 pacing and the price-raise recommendation with proposed new price; formal day-30/60/90 gate evaluation against §5 with an explicit KILL / STEER / DOUBLE-DOWN recommendation and the three numbers that drove it; top 3 strategic risks for next month mapped to the §1 premortem chains (state which chain is most active). Write to `/ops/reports/monthly/YYYY-MM.md`."
- **Produces:** Monthly strategy memo + explicit gate verdict.
- **Human gate:** **All of it.** This job recommends; it changes nothing. Pricing edits, kill decisions, and pivots are founder-only, made against the pre-committed §5 criteria — the job's role is to make ignoring those criteria impossible, not to act on them.

### Steady-state founder week (post-week-4 target)
| Touchpoint | Time |
|---|---|
| Daily: read digest, execute its one distribution action, approve support drafts | ~45 min |
| Tue–Thu: content PR review | ~35 min/day |
| Fri: send newsletter, merge sprint | ~25 min |
| Sun/Mon: weekly review + experiment approval | ~30 min |
| **Total** | **≈ 7 hrs/week** — the rest of the system runs itself, and every irreversible act still passes through your hands. |

---

*Final panel note (Operator, seconded by Kahneman): The most dangerous line in this whole plan is the one you'll be tempted to skip — Stripe in the next 24 hours and a launch this week with the content you already have. 304 lessons is enough to start charging. It is not enough to keep polishing. Ship, then deepen.*
