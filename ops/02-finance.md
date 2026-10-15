# Supergravity — Finance Brief (02)

**Prepared:** 2026-07-06 · Solo founder: Josh Thomas · Panel: Campbell (pricing) / Cohen (bootstrap econ) / conservative CFO / revenue operator.
**Disclaimer: this is internal analysis, not licensed financial, tax, or legal advice. Confirm tax/entity questions with a CPA.**

---

## 1. Unit economics

### Contribution per sale (Stripe: 2.9% + $0.30)

| SKU | Gross | Stripe fee | Net to bank |
|---|---|---|---|
| Solo lifetime | $59.00 | $2.01 | **$56.99** |
| Family lifetime | $99.00 | $3.17 | **$95.83** |

Blended (assume ~83% solo / 17% family): avg gross **$65.80**, avg net **$63.55**.

### AI tutor cost per active user per month

Assumptions (state-of-market, GPT-4o-mini-class, e.g. GPT-4o-mini at $0.15/1M input, $0.60/1M output; GPT-4.1-mini at $0.40/$1.60):

- Per tutor turn: ~2,500 input tokens (system prompt + lesson context + chat history) + ~400 output tokens.
- Per session: 10 turns → ~25K in / 4K out → **~$0.006/session on 4o-mini** (~$0.016 on 4.1-mini, ~$0.08 on a full 4o/4.1-class model).

| Usage profile | Sessions/mo | Cost/mo (mini) | Cost/mo (full 4o-class) |
|---|---|---|---|
| Casual (most buyers) | 4 | ~$0.03 | ~$0.32 |
| Regular | 20 | ~$0.12 | ~$1.60 |
| Heavy | 100 | ~$0.60 | ~$8.00 |

Expected blended average across active buyers: **$0.10–$0.30/user/mo** on mini-class models.

### When does a lifetime buyer become unprofitable?

$56.99 net must cover ALL future AI cost. Break-even consumption:

- Mini model: ~9,500 sessions ($56.99 / $0.006). Only abuse or API scraping gets there.
- Full 4o-class model: ~700 sessions — a genuinely heavy daily user on a frontier model burns the margin in **~7 months**. This is the real risk vector.
- Rule of thumb: any user averaging **>$1.00/mo in AI cost erodes margin to zero within 5 years**; >$5/mo does it within a year.

**Mitigations (implement before launch, not after):**
1. **Per-user quota:** e.g. 50 tutor messages/day, 600/mo, enforced server-side. Covers 99% of legit learners.
2. **Model tiering:** mini-class default; route to a stronger model only for flagged-hard questions, capped per day.
3. **Context discipline:** cap history at ~6 turns, don't stuff whole lessons into context (retrieve snippets).
4. **Abuse tripwire:** per-user monthly spend alert at $2; auto-throttle at $5.

With quotas, worst-case AI liability per user ≈ 600 msgs × $0.0006 ≈ **$0.36/mo cap on mini** — lifetime deal stays safe.

---

## 2. The lifetime-deal trap (honest take)

**The problem:** lifetime revenue is booked once; AI cost recurs forever. Every sale is a small perpetual liability. At $0.15/mo blended AI cost, one sale funds ~30 years of usage — fine. But: (a) model costs could rise for the quality users expect, (b) your best, most-retained users are your most expensive, (c) at scale, cumulative AI spend grows linearly while lifetime revenue from old cohorts is $0. Cohen's framing: LTDs are **financing, not a business model** — you're borrowing from future costs to fund launch.

**Why it's still right for now:** zero audience, need revenue in 4 weeks, price anchors trust ("founder pricing, first 500"), and quotas cap the tail risk. Campbell's note: $59 lifetime also badly underprices family/homeschool value — accept it as a launch tool only.

**Transition plan (commit now, execute on triggers):**

| Stage | Trigger | Action |
|---|---|---|
| 1 | 500 founder seats sold OR day 90, whichever first | Raise to **$99 solo / $149 family lifetime**. Announce the raise 1 week ahead (creates urgency for stragglers). |
| 2 | ~1,000 total lifetime seats OR $50K cumulative | Close lifetime entirely for new buyers. New cohorts: **$8–12/mo or $79/yr subscription**; existing lifetime buyers keep everything (never claw back). |
| 3 | If AI costs spike or usage skews heavy | Lifetime = lifetime *content + sims*; AI tutor gets a generous included quota + **credit top-ups** ($5 per pack) for the top 1–2% of users. Grandfather framing: "unlimited within fair use." |
| Guardrail | Monthly (AI + infra) cost > 3% of cumulative net revenue collected | Stop selling lifetime immediately, move to subscription that week. |

Escrow discipline: treat **20% of every lifetime sale as deferred cost reserve** (mentally or in a savings sub-account) — that's the fund that services old cohorts forever.

---

## 3. Four-week revenue scenarios

Channel + conversion assumptions (cold traffic to a $59 LTD from an unknown founder converts ~0.3–0.8% visitor→paid; free-signup→paid 2–5%):

| Channel | Bear | Base | Bull |
|---|---|---|---|
| Show HN | Not front page: ~300 visits | Brief front-page (few hrs): ~5,000 | Front page day: ~25,000 |
| Reddit (4–6 posts: r/homeschool, r/selfimprovement, r/InternetIsBeautiful, niche subject subs) | 800 visits | 3,000 | 8,000 |
| Product Hunt | 400 visits | 1,200 | 4,000 (top 5) |
| X/word of mouth | 100 | 500 | 3,000 |
| **Total visits** | **~1,600** | **~9,700** | **~40,000** |
| Visitor→paid | 0.4% | 0.45% | 0.5% (front-page traffic converts worse, volume compensates) |
| **Sales** | **6** | **~44** | **~200** |
| **Gross revenue** | **~$400** | **~$2,900** | **~$13,200** |
| **Net after Stripe** | **~$380** | **~$2,800** | **~$12,700** |

**Honest expected first-month range: $400–$3,000 net, with ~$1,500–2,500 the most likely outcome.** Bull requires an HN front page (roughly a 10–20% event even with a good post). Plan cash and morale around bear/base; treat bull as upside.

---

## 4. Simple P&L — months 1–3, base case

Assumes M1 = launch (44 sales), then decay without new channels; avg net/sale $63.55; blended AI cost $0.20/active user/mo; ~60% of buyers active in a given month.

| Line | M1 | M2 | M3 |
|---|---|---|---|
| Sales (units) | 44 | 20 | 15 |
| Gross revenue | $2,895 | $1,316 | $987 |
| Stripe fees | ($99) | ($46) | ($35) |
| **Net revenue** | **$2,796** | **$1,270** | **$952** |
| OpenAI API | ($6) | ($9) | ($11) |
| Vercel Pro | ($20) | ($20) | ($20) |
| Supabase Pro | ($25) | ($25) | ($25) |
| Domain (amortized) | ($1) | ($1) | ($1) |
| **Total opex** | **($52)** | **($55) ** | **($57)** |
| Refund reserve (8% of net, held) | ($224) | ($102) | ($76) |
| **Operating profit (after reserve)** | **~$2,520** | **~$1,113** | **~$819** |
| Cumulative profit | $2,520 | $3,633 | $4,452 |

Read: opex is ~$55/mo ≈ **1 sale/month keeps the lights on**. Everything above that is founder profit (pre-tax — set aside 25–30% for income/self-employment tax). The business cannot die from costs; it can only die from silence (no sales).

---

## 5. Price-raise and kill triggers (exact)

| Trigger | Threshold | Action |
|---|---|---|
| Day 7 | < 5 total sales | Do NOT cut price. Problem is traffic/messaging. Run 5–10 exit interviews with free-tier users; rewrite landing headline; post to 2 new subreddits. |
| Day 14 | < 10 total sales | Change lead angle (e.g., pitch homeschool families at $99 family SKU as primary). Still no discounting — a discount on an unknown $59 LTD signals distress. |
| Day 28 | < 15 total sales | Treat as pre-product-market-fit: pause "first 500" clock, shift 4 weeks to distribution experiments + content SEO before touching price. |
| Day 28 | ≥ 60 sales | Pull Stage-1 raise forward: announce $99/$149 within 7 days regardless of the 500-seat count. Demand > plan means price is too low. |
| Founder seats | 500 sold OR day 90 | Raise to $99/$149 (Section 2). Non-negotiable — credibility depends on actually raising. |
| AI cost | Blended > $0.75/active user/mo for 2 consecutive weeks | Tighten quota to 30 msgs/day; audit top 10 spenders; force mini-model for all traffic. |
| Refunds | > 8% of sales in any 30-day window | Stop paid promotion, diagnose (expectation mismatch vs. bugs) before selling more. |
| Kill (lifetime SKU) | Monthly total costs > 3% of cumulative net revenue, OR 1,000 lifetime seats | Close lifetime to new buyers; switch to $79/yr. |

---

## 6. Money hygiene (solo founder)

1. **Separate account, day one.** Free business checking (Mercury or Relay). All Stripe payouts land there; all business costs (Vercel, Supabase, OpenAI, domain) paid from there. Never commingle.
2. **Stripe settings (15 minutes, do before launch):**
   - Statement descriptor: `SUPERGRAVITY` (prevents "what is this charge?" disputes — disputes cost $15 each).
   - Enable customer receipt emails + support email/URL on receipts.
   - **Enable Stripe Tax** on the Payment Links: digital products/SaaS are taxable in many US states and VAT applies in EU/UK; lifetime one-time sales still count. Let Stripe collect; register only where you cross thresholds.
   - Set payout schedule to weekly (smoother reconciliation than daily).
   - Turn on Radar default fraud rules (included).
3. **Refund reserve: hold 8–10% of net revenue for 60 days** before counting it as yours. Lifetime deals to cold traffic see elevated early refunds; Stripe no longer returns its fee on refunds.
4. **Tax reserve: move 25–30% of profit to a separate savings sub-account monthly.** US sole-prop income = income tax + ~15.3% self-employment tax; quarterly estimated payments once profit is real. LLC + separate EIN is a cheap upgrade once revenue is consistent (ask a CPA, ~$300 well spent).
5. **Bookkeeping cadence: 30 minutes, first Monday of each month.** Export Stripe balance report + bank CSV → one spreadsheet with 5 columns (gross, fees, refunds, opex, net). Reconcile Stripe payouts to bank deposits. That's the entire close at this size; buy real software (Wave is free) only when it stops fitting on one tab.
6. **Cost tripwires:** billing alerts on OpenAI ($25/mo hard cap initially), Vercel spend limit, Supabase spend cap ON. An autonomous business must be unable to surprise-bill you.

---

*Pricing sources: [OpenAI API pricing](https://developers.openai.com/api/docs/pricing), [pricepertoken.com GPT-4o-mini](https://pricepertoken.com/pricing-page/model/openai-gpt-4o-mini), [pecollective OpenAI pricing 2026](https://pecollective.com/tools/openai-api-pricing/). Analysis only — not licensed financial advice.*
