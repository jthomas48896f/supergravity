# Autonomy Architecture — runs without the Claude desktop app

Three layers, by dependency. Layer 1 has ZERO LLM dependency and runs forever on
infra you already pay for. Layer 2 uses LLM **APIs** (any provider, via key) on
GitHub's servers. Layer 3 (Cowork scheduled tasks) is optional judgment support —
nice while you have a Claude plan, not load-bearing.

## Layer 1 — Deterministic spine (Vercel Cron + Supabase + Stripe; no LLM)
| Function | Mechanism | Human needed? |
|---|---|---|
| Sell + deliver | Stripe Payment Link → webhook → `entitlements` → auto-unlock | Never |
| Receipts, taxes, card handling | Stripe (receipt emails + Stripe Tax on) | Never |
| Unlock email-mismatch (the #1 ticket) | `/api/claim`: redirect carries `session_id`, server verifies PAID with Stripe, binds to signed-in account | Never |
| Funnel telemetry | `events` table (landing/pricing/paywall/checkout events, write-only RLS) | Never |
| Daily digest | Vercel Cron `0 11 * * *` UTC → `/api/ops-digest` → report row + email via Resend | Read it |
| Refunds | Stripe dashboard | Always (by design) |

## Layer 2 — API-driven judgment (GitHub Actions; needs an API key, not an app)
| Function | Mechanism | Gate |
|---|---|---|
| Weekly content sprint | `.github/workflows/content-sprint.yml` Mondays → `tools/sprint-generate.cjs` calls the Anthropic API, validates drafts against the house schema, opens a PR | You merge; safety subjects flagged NEEDS-EXPERT-EYE |
| (Future) newsletter draft, support drafts | Same pattern: Action + API + draft output | You send |

## Layer 3 — Cowork scheduled tasks (optional, only while your Claude plan is active)
The 6 tasks created earlier still exist. They now duplicate Layers 1-2 for digest +
content; keep them for support triage and the weekly/monthly strategy reviews, or
disable them — the business no longer depends on them.

## Setup (one-time, ~10 min, added to the launch checklist)
Vercel env vars: `STRIPE_SECRET_KEY` (for /api/claim), `CRON_SECRET` (any random
string; Vercel sends it to cron endpoints), `RESEND_API_KEY` + `OPS_EMAIL`
(optional email digest — resend.com free tier, 2 min signup).
GitHub repo secret: `ANTHROPIC_API_KEY` (console.anthropic.com — pay-per-use API
key, independent of your Max subscription). Push the repo to GitHub to activate
the workflow.
Stripe Payment Links: set redirect to `/?purchased=1&session_id={CHECKOUT_SESSION_ID}`.

## What stays human forever (on purpose)
Sending anything, publishing content, refunds, price changes, and the day-30
kill/steer/double-down call. Autonomy runs the machine; you steer it.
