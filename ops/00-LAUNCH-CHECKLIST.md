# Atlas — Launch Checklist (your hands only, ~25 min)

Everything else is built, committed on branch `monetize` in `~/Desktop/projects/supergravity`,
and documented in the ops playbooks (01–05). This file is the critical path.

## 1. Deploy (2 min)
```bash
cd ~/Desktop/projects/supergravity
git checkout main && git merge monetize
vercel --prod
```

## 2. Stripe (10 min) — I can't touch payments; this must be you
1. dashboard.stripe.com → Payment Links → **New**:
   - Link A: "Atlas — Lifetime" $59, one-time. Add metadata `plan=lifetime`.
   - Link B: "Atlas — Family Lifetime" $99, one-time. Add metadata `plan=family`.
   - Both: After payment → redirect to `https://<your-domain>/?purchased=1`
2. Developers → Webhooks → **Add endpoint**: `https://<your-domain>/api/stripe-webhook`,
   event: `checkout.session.completed`. Copy the signing secret (`whsec_...`).
3. Settings: statement descriptor "ATLAS", enable receipt emails, enable **Stripe Tax**.

## 3. Vercel env vars (5 min) — project settings → Environment Variables
- `STRIPE_WEBHOOK_SECRET` = whsec_... (from step 2)
- `STRIPE_SECRET_KEY` = sk_live_... (for the self-serve /api/claim unlock)
- `SUPABASE_SERVICE_ROLE_KEY` = Supabase dashboard → Settings → API → service_role
  (project: supergravity-atlas / syzikkyqciqjwbsutykn)
- `CRON_SECRET` = any random string (protects the daily digest endpoint)
- Optional: `RESEND_API_KEY` + `OPS_EMAIL` — 2-min resend.com signup gets the
  daily digest emailed to you; without it the digest still lands in Supabase.
Also: set the Stripe redirect (step 2) to `/?purchased=1&session_id={CHECKOUT_SESSION_ID}`
— the session_id part powers automatic unlock even when emails don't match.
For the autonomous weekly content sprint: push the repo to GitHub and add repo
secret `ANTHROPIC_API_KEY` (API key from console.anthropic.com — independent of
your Max plan). Details: ops/06-autonomy-architecture.md.

## 4. Wire the links (2 min)
Paste both Payment Link URLs into `sg-config.js`
(`STRIPE_LINK_LIFETIME`, `STRIPE_LINK_FAMILY`), then:
```bash
npm run build && git add -A && git commit -m "stripe links live" && vercel --prod
```

## 5. Domain (5 min)
Nobody pays $59 to a vercel.app URL. Buy a real domain tonight
(supergravity.app / getsupergravity.com / atlasofeverything.com — your call),
add it in Vercel → Domains. Update the Stripe redirect + webhook URLs to match.

## 6. Smoke test (3 min) — do NOT skip
1. Open the site logged out → open a subject → lesson 2 shows the locked page. ✅
2. Buy the $59 link yourself in **live mode** with a real card → redirected to `?purchased=1`
   → sign in with the same email → everything unlocks. ✅ (Refund yourself in Stripe after.)
3. Check Supabase → `entitlements` table has your row.
4. Videos: lesson pages show only real thumbnails now (1,036 dead cards removed).

## What's still open (this week, not tonight)
- **ToS + Privacy pages**: drafts are in `03-legal-compliance.md` — need to be added as
  in-app pages + risky-subject disclaimers pasted in (banner snippets ready in the same file).
- **Content depth**: median subject has 2 lessons. The 12-subject deepening roadmap and
  weekly sprint cadence is in `05-strategy-autonomous-ops.md`. This is the #1 product gap.
- **Autonomous ops**: 6 scheduled jobs specced in `05`. Say the word and I'll create them
  as Cowork scheduled tasks (each with human sign-off gates on sends/publishes/refunds).
- **Launch posts**: all copy ready in `01-marketing-launch.md`. Calendar starts with
  pre-launch prep, then homeschool Monday, HN Tuesday 9am ET.

## The one rule
Distribution gets the first hour of every day. The atlas grows in hour two.
