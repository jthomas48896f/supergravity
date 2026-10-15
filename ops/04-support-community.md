# Supergravity — Support & Community Playbook

Everything here is ship-ready copy. Voice rules: first person ("I", not "we" — you're one guy and that's a feature), short sentences, no corporate hedging, sign as Josh.

---

## 1. FAQ Page Copy

### What's free and what's paid?
The first lesson of every subject is free, forever, no account required to browse. That's not a teaser — it's a real lesson, so you can judge the quality before spending a dollar. The full Atlas (every lesson in every subject, plus everything added weekly) is a one-time purchase: $59 for one person, $99 for a family.

### How does unlocking work after I buy?
Simple: buy, then sign in with the same email you used at checkout. The unlock is automatic — usually within a minute of purchase. No license keys, no activation codes. If it didn't unlock, 95% of the time you checked out with a different email than the one you signed in with. Email me at jteducates@gmail.com with your purchase receipt and I'll fix it same day.

### How does the family plan work?
$99 covers up to 6 accounts in one household. After you buy, you'll get a link to add family member emails — each person gets their own sign-in, their own progress, their own place in the Atlas. You can swap emails out later (kid changes addresses, etc.) by emailing me.

### Is "lifetime" really lifetime?
Yes, and here's what that means concretely: lifetime of the product, backed by a person whose name is on it. You pay once and you get every subject and lesson I ever add, no upsells to a "Pro tier." The honest version of the risk: if I ever shut Supergravity down (no plans to — it's cheap to run and I use it myself), I commit to either open-sourcing the content or providing a full downloadable export to every purchaser. Your money buys the content, not a rental.

### What if I want a refund?
14 days, one email, no interrogation. Send "refund please" to jteducates@gmail.com from your purchase email and it's processed within 2 business days. You don't need a reason, though if you give one I'll genuinely use it to improve things.

### Does the AI tutor have limits?
Yes, honest ones. The tutor is included with your purchase — no per-message fees — but there's a fair-use cap (currently generous enough that fewer than 1% of users ever hit it) so one person can't run up my API bill for everyone. If you hit the cap, it resets daily. The tutor also isn't a general chatbot: it's scoped to the lesson you're in, which is what makes it good.

### Can I use the Atlas offline?
Not yet. Lessons are interactive (simulations, diagrams you can poke), which makes offline harder than "download a PDF." Offline lesson packs are on the roadmap — homeschoolers and homesteaders with spotty internet have asked, and I hear you. If this is a dealbreaker, wait to buy; I'd rather you happy later than refunded now.

### How often is new content added?
Weekly. Every Friday I ship new lessons, improvements, or a new subject, and the changelog newsletter documents exactly what changed — so "growing weekly" is a checkable claim, not marketing.

### Is this safe for kids? What about COPPA?
The content is written to be readable by motivated kids roughly 10+, and there's nothing inappropriate in it. Legally: accounts are for ages 13+ (or 16+ where local law requires). For younger kids, the family plan is designed so a parent creates and owns the child's account — the parent is the account holder, I don't knowingly collect personal data from under-13s directly, and I don't run ads or sell data, period.

### Do you sell my data or run ads?
No and no. My business model is embarrassingly simple: you pay once, I make lessons. There's no second business model hiding behind the first.

### Which subjects are included?
Everything in the Atlas at any given time — sciences, trades, homestead skills, and more added weekly. The free first lessons double as the live table of contents. If a subject you want isn't there, email me; requests genuinely steer the roadmap.

### Can I share my account with a friend?
The solo plan is for one person, honor system. If two of you want in, the family plan is $99 for up to six — it's priced so sharing honestly is cheaper than feeling guilty.

### I bought but I'm signed in and still see locked lessons. Help?
First: sign out, sign back in with the exact email from your Stripe receipt (check the receipt — people are often surprised which email they used). Still locked? Email jteducates@gmail.com with the receipt and I'll manually link it, usually same day.

### Can I gift a purchase?
Yes — buy with your email, then email me the recipient's email and I'll move the unlock to them. A proper gift flow is coming; for now it's me and a database, which is honestly faster.

### Who's behind this?
One person: Josh. I write the lessons, answer the emails, and fix the bugs. That's why support replies come from a Gmail address and sound like a human — they are one.

---

## 2. Support Macros

**Macro 1 — Purchase didn't unlock (email mismatch — expect this to be #1)**
> Hi {name} — thanks for buying, and sorry for the hiccup. This almost always has a one-line fix: the Atlas unlocks for the exact email used at checkout. Your Stripe receipt (subject line "Your receipt from Supergravity") shows which email that was — often it's an old address autofilled by your browser or Apple/Google Pay. Try signing out and back in with that email. If they really are the same, or you'd rather use a different email, just reply with the email you WANT unlocked and forward the receipt — I'll link it manually within a few hours. — Josh

**Macro 2 — Refund request**
> Hi {name} — done. Refund processed to your original payment method; Stripe says 5–10 business days to appear. No hard feelings — if you're willing to tell me what didn't work for you, one sentence helps me more than you'd think. And the free first lessons stay free if you ever want to check back in. — Josh

**Macro 3 — Chargeback response (send BEFORE responding via Stripe if there's time)**
> Hi {name} — I see a payment dispute was opened on your Supergravity purchase. Quick heads-up before it goes through the banks: I offer a no-questions 14-day refund by email, which is faster for you and doesn't cost me a $15 dispute fee. If you meant to request a refund, reply "refund" and I'll issue it today and you can withdraw the dispute. If the charge is unrecognized or fraudulent, tell me and I'll refund it immediately and kill the account. Either way you get your money back — this route is just quicker. — Josh
> *(Internal: if no reply in 48h, submit Stripe evidence — receipt, sign-in logs, lesson completion data from the entitlements/progress tables — then move on. Never fight a chargeback for more than 15 minutes.)*

**Macro 4 — Feature request**
> Hi {name} — noted, and genuinely thanks. I keep one list of requests and I re-rank it every Friday when I plan the week's build; yours is on it as of today. I won't promise a date (solo operation, promises are the first thing that breaks), but the weekly changelog email is where you'll see it land if it does. Requests like this are literally how {related_recent_feature} happened. — Josh

**Macro 5 — Content error report**
> Hi {name} — good catch, thank you. You're right / I'm checking this against {source} today (delete one). Errors reported by users get fixed in the next Friday ship at the latest, and I credit reporters in the changelog unless you'd rather I didn't. This is one of the best emails I can get — an Atlas that's wrong is worse than one that's small. — Josh

**Macro 6 — Family seat management**
> Hi {name} — easy. Reply with the change you want in this format and I'll have it done within a day:
> • ADD: email@example.com
> • REMOVE: old@example.com
> • SWAP: old@example.com → new@example.com
> Your plan covers up to 6 accounts. Removed members keep nothing; added members should sign in with the exact email you give me. Progress belongs to the account, so a swap starts the new person fresh. — Josh

**Macro 7 — "Is [subject] coming?"**
> Hi {name} — {subject} is {on the near-term list / on the long list / not currently planned, honestly} (pick one, be truthful). The Atlas grows every Friday and requests are the main input to what I build next — so this email just moved it up. Best way to track it: the weekly changelog email announces every new subject the day it ships. Meanwhile, if you haven't seen {adjacent_subject}, it covers some of the same ground. — Josh

**Macro 8 — Angry customer**
> Hi {name} — you're right to be frustrated, and I'm not going to paper over it: {plain restatement of what went wrong, no excuses}. Here's what I'm doing about it: {concrete fix + when}. If that doesn't make it right, say the word and I'll refund you today regardless of the 14-day window — I'd rather lose $59 than have someone feel stuck with something that let them down. You're dealing with the person who built it, so this reply is as escalated as it gets. — Josh
> *(Internal: never argue, never match tone, always end with the refund valve. One reply like this converts more angry users than any feature.)*

---

## 3. Onboarding Email Sequence

**Email 1 — Immediately post-purchase.** Subject: `You're in — one thing to check`
> Hey — Josh here, the person who builds Supergravity. Thanks for buying. Sincerely: purchases like yours are the entire business model, there's no other one.
>
> One thing to check right now so future-you doesn't email me: sign in at supergravity with THIS email address — the one this receipt went to. That's what unlocks everything. Different email = locked lessons and a confused evening.
>
> That's it. Go poke something in the Atlas. If anything's broken or weird, just reply to this email — it goes straight to me, and I actually read it.
>
> — Josh
> P.S. Family plan folks: your "add family members" link is below. Two minutes now saves an email later.

**Email 2 — Day 2.** Subject: `How to actually use the Atlas (not the obvious way)`
> Hey — most people open the Atlas, browse three subjects, and bounce between them like tabs. Fine, but here's what the people who get the most out of it do instead:
>
> 1. Pick ONE subject and finish three lessons in a row. The lessons build; hopping resets the compounding.
> 2. Argue with the AI tutor. It's scoped to your current lesson, and it's at its best when you say "wait, that doesn't make sense because..." — push back and it earns its keep.
> 3. Touch the diagrams. Anything interactive is meant to be dragged, broken, and reset. The lesson isn't the text; it's what happens when you fiddle.
>
> If you're doing this with kids: let them drive the clicking. Works better than narrating at them, I promise.
>
> What subject did you start with? Genuinely curious — reply and tell me. It shapes what I build.
>
> — Josh

**Email 3 — Day 7.** Subject: `Three hidden gems + ask me anything`
> Hey — you've had the Atlas a week. Three things people consistently miss:
>
> 1. {Hidden gem 1 — e.g., the cross-links between subjects: the electricity lesson links into home wiring, which links into solar}. The Atlas is a web, not a shelf.
> 2. {Hidden gem 2 — e.g., you can ask the tutor to quiz you on the lesson you just finished}. Retrieval beats rereading; this is the single highest-value habit in here.
> 3. {Hidden gem 3 — e.g., the free first lessons make a great "should I care about this subject?" sampler even after you've paid}.
>
> Also: this is your standing invitation. Confused by a lesson, found an error, want a subject that doesn't exist yet, or just want to tell me what you're learning — reply to this email. It's just me on the other end, and answering these is my favorite part of the week.
>
> Every Friday you'll get "This week in the Atlas" — a short changelog of what's new. That's the last regular email; I don't do drip campaigns.
>
> — Josh

---

## 4. Weekly Changelog Newsletter Template

**Subject line rotation:** `This week in the Atlas: {headline item}` / `New this Friday: {headline item}` / `Atlas update: {headline item}`

> **This week in the Atlas** — {date}
>
> **New:** {1–3 bullets: new lessons/subjects, each with a one-line "why you'd care" and a direct link. The link is the retention engine — every email is a reason to re-open the product.}
>
> **Improved:** {1–2 bullets: rewrites, new interactives, better explanations. Shows paid content keeps appreciating.}
>
> **Fixed:** {errors corrected, with credit: "Thanks to Maria R. for catching the torque unit error." Public credit turns readers into proofreaders.}
>
> **From your emails:** {1 short Q&A or a shipped request: "Several of you asked for X — it's live." This section is why people reply, and replies are the community for now.}
>
> **Next week:** {one line, hedged honestly: "Working on the canning module; if it's not Friday it's the Friday after."}
>
> — Josh
> *One-time purchase, weekly growth. That's the deal. Reply anytime — it's just me here.*

**Rules:** ships every Friday even when thin (a thin week says "mostly fixed bugs and answered emails" — honesty IS the brand); under 200 words; every "New" item links directly into the product; free-tier subscribers get the same email with a "the first lesson of every new subject is free — try this one" line, making the changelog the sales engine too.

---

## 5. Support SLA & Triage Rules

One inbox pass per day (~20–30 min, coffee time), plus a Friday batch session (~1 hr). Gmail labels: `SAME-DAY`, `FRIDAY`, `AUTO-HANDLED`.

**Same-day (blocking money or access):**
- Paid but locked / email mismatch — this is #1; the macro makes it a 2-minute reply
- Refund requests — speed here prevents chargebacks, which cost $15 + hours
- Chargebacks/disputes — Macro 3 immediately
- Sign-in failures, broken checkout, site down
- Angry customers — heat compounds daily; Macro 8 same day, always

**Friday batch (important, not urgent):**
- Feature and subject requests → log to the request list, reply with Macros 4/7, re-rank list while planning the week's build
- Content error reports → fix in the Friday ship, then reply with Macro 5 ("fixed, thanks") — replying after fixing is a stronger reply
- Family seat changes (unless the family is actively blocked — then same-day)
- "What are you working on" / roadmap chat, partnership and "can I promote you" emails

**Auto-reply (set once, never touch):**
- Vacation/travel: auto-responder promising 48–72h on access issues, pointing to FAQ + the "sign in with your purchase email" fix (self-serves most of ticket #1)
- Optional always-on auto-reply, worth it once volume passes ~10/day: "Human here (just one). Access/refund issues answered within a day; ideas and requests batched Fridays. Meanwhile: 90% of unlock problems = signing in with a different email than checkout — check your Stripe receipt."
- Hard delete without guilt: cold vendor pitches, link-exchange spam, "guest post" offers

**Standing rules:** every reply ends in a question or a clear next step (kills follow-up volume). Any question asked 3+ times becomes an FAQ entry that week — the FAQ is a deflection asset, not a page. Track one number weekly: tickets per 100 customers; if it climbs, the product has a confusion bug, not a support problem — fix the product.

---

## 6. Community: Discord Now or Wait?

**The call: wait.** (1) A Discord with 30 members is a visibly empty room, and an empty room signals a dead product — worse than no room. (2) It's a synchronous attention tax on a solo founder whose scarcest resource is deep-work time for the weekly ship; the ship IS the retention strategy. (3) The newsletter reply-loop already delivers 80% of early community value — direct founder access — with zero moderation surface. (4) Homeschool parents (a core segment) raise real moderation and child-safety stakes on day one of any open chat. (5) Nothing is lost by waiting; momentum is lost by launching dead.

**Trigger threshold — open the Discord when ANY of these is true:**
1. ~500 paid customers (family plan = 1), OR
2. 10+ organic user-to-user connection requests ("is there a community/forum?") in a 30-day window, OR
3. Newsletter replies routinely answering each other's questions when Josh forwards them — demand proving itself.

**When it opens, keep it small:** three channels only (#announcements read-only mirroring the changelog, #show-your-work, #help-each-other), 18+ or parent-supervised per the COPPA stance in the FAQ, recruit the 2 most helpful newsletter repliers as first mods before opening the doors, and Josh's presence budget is fixed at 30 min/week — announced up front so silence never reads as absence.

**Until then:** the changelog's "From your emails" section is the community. Curated, asynchronous, founder-voiced, zero moderation — the right shape for this stage.
