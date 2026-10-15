# Supergravity — Marketing & Launch Playbook
*Marketing & Launch division. Lenses: Dunford (positioning), Dry (copy), Fishkin (distribution), Bourgoin (buyer psych). Everything below is copy-paste ready.*

**PRE-FLIGHT (non-negotiable, do before ANY post goes live):**
1. Buy the real domain. Nobody pays $59 to `project-qj81t.vercel.app`. This is the #1 conversion killer.
2. Confirm free lessons load with NO signup wall. r/InternetIsBeautiful bans signup-required sites, and HN will bounce off any email gate.
3. Stripe checkout works on mobile. Test it with a real card.

---

## 1. Positioning

**Positioning statement (internal — this is the strategy, not the copy):**
For curious people who want to actually *understand* things — not collect certificates — **Supergravity** is the only interactive learning atlas that treats rewiring a thermostat and understanding chaos theory as equally worth knowing. 101 subjects, live simulations, an AI tutor on every lesson, built by one person, $59 once. Unlike Brilliant ($161.88/yr for ~4 domains) or YouTube (free but unstructured), Supergravity bundles the academy and the workshop in one place you own forever.

**Category frame (Dunford):** Don't compete as "another course platform." Compete as **"the atlas"** — a reference work you own, like buying an encyclopedia, not renting a gym membership. Lifetime pricing only makes sense inside this frame. Use "atlas," "library," "own it" language everywhere; never "subscription," "content," or "courses."

**One-line pitch per door:**
| Door | One-liner |
|---|---|
| `?door=learn` | Brilliant teaches 4 subjects for $162/year. This teaches 101 — including the ones with grease under their fingernails — for $59, once. |
| `?door=homeschool` | One library from physics to philosophy to first aid, for up to 6 kids, $99 lifetime. That's less than most families spend on a single subject this August. |
| `?door=trades` | Try the first lesson of HVAC, welding, electrical, or locksmithing free — find out if the trade fits *before* you sign trade-school paperwork. |
| `?door=homestead` | The self-reliance library: butchery, foraging, beekeeping, first aid, plus the science underneath them. Pay once, it's yours — no subscription to lapse when you need it. |

---

## 2. Hacker News — Show HN

**Title:**
`Show HN: Atlas of Everything – 101 subjects, from fluid dynamics to locksmithing`

**Body:**

Hi HN, solo founder here (ex-education, NYC). For the past months I've been building Supergravity — an interactive learning site that deliberately mixes academic subjects with hands-on trades: physics next to HVAC, philosophy next to beekeeping, chaos theory next to butchery.

Why the weird bundle: every learning platform picks a lane — Brilliant does math/CS, Coursera does credentials, YouTube does everything but with no structure. Nobody treats "how a refrigeration cycle works" and "how differential equations work" as the same kind of knowledge, even though one literally runs on the other. I wanted the reference work I always wished existed.

What's in it today:
- 101 subjects, 300+ lessons, growing weekly via a content pipeline I built
- Live simulations (fluid dynamics, double pendulum chaos, particle systems) — canvas/WebGL, no video
- Highlight any passage in any lesson → ask an AI tutor about it in context
- First lesson of every subject is free, no signup

Honest notes, because you'll ask anyway:
- The content pipeline is AI-assisted with my editorial pass on structure, accuracy, and the simulations. I'm the bottleneck on review, which is why it's 300 lessons and not 3,000. Errors exist; there's a report button and I fix fast.
- Pricing is $59 lifetime (solo) / $99 family while I find out if this should exist. I know lifetime deals make HN suspicious — marginal cost is low (static content + metered AI calls), and I'd rather have 500 owners than 50 subscribers right now.
- Stack: Next.js on Vercel, Supabase, Stripe. Parts of the work are open source on my GitHub (american-desi).

Things I'd genuinely like feedback on: whether the simulations hold up on your hardware, whether the AI tutor is useful or a gimmick, and whether the academic/trades bundle reads as a feature or as a lack of focus.

URL: [real domain]

**Rules of engagement:** reply to every comment for the first 6 hours. Never defensive. When someone finds an error, thank them, fix it live, and reply "fixed." That single move wins HN threads.

---

## 3. Product Hunt

**Name:** Supergravity — Atlas of Everything

**Tagline (≤60 chars):** `101 subjects, live simulations, one lifetime price`

**Description:**
Supergravity is an interactive learning atlas built by one person. It covers 101 subjects — and unlike everyone else, it bundles academics with real-world skills: quantum mechanics AND welding, philosophy AND first aid, chaos theory AND beekeeping. Every lesson has live simulations instead of videos, and an AI tutor you invoke by highlighting any passage. The first lesson of every subject is free with no signup. Own the whole atlas for $59 (or $99 for a family of 6) — founder pricing for the first 500 buyers. For comparison: Brilliant covers ~4 domains for $161.88/year.

**First comment (maker):**

Hey Product Hunt — Josh here, solo founder, former educator in NYC.

I built Supergravity because of a pattern I kept seeing: the people who are curious about Gödel are usually also curious about how their furnace works, but the internet forces them into separate, siloed products — one for "smart" subjects, YouTube roulette for the rest.

So this is one atlas: 101 subjects, 300+ lessons (growing weekly), live simulations you can poke at, and an AI tutor on every lesson — highlight any sentence and ask about it.

Three things I'd love from you today:
1. Open a subject you know deeply and try to break it. Tell me what's wrong.
2. Try the highlight-to-ask tutor on something confusing. Did it actually help?
3. Tell me which missing subject would make you buy. The pipeline ships weekly; top request gets built first.

First lesson of all 101 subjects is free, no signup. Lifetime is $59 solo / $99 family for the first 500 buyers, then it goes up. Ask me anything — I'm here all day.

---

## 4. Reddit — one post per door

**Ground rules (Fishkin):** Reddit accounts need history. Spend the 5 days before launch leaving 3-5 genuinely helpful comments/day in each target sub. Never post the same day you join. Always disclose you built it. Rule pages change — re-read each sub's sidebar the morning you post.

### 4a. Learn door → r/InternetIsBeautiful
*Why this sub: it exists for sharing sites, self-submission is allowed, and its hard rule — no signup required — is one we pass (verified via pre-flight #2). ~17M members, link-post format.*

**Title (link post, the title carries everything):**
`An interactive atlas of 101 subjects — physics and philosophy next to welding and beekeeping, with live simulations you can play with`

**Pinned comment after posting:**
Maker here. Everything you can click from the homepage is free with no signup — first lesson of all 101 subjects, including the simulations (try the double pendulum under Chaos Theory). Built solo. Happy to answer anything about how the simulations work.

### 4b. Homeschool door → r/homeschool
*Why this sub: it's where the buyers are, and it's July — peak curriculum-buying season. Culture check: resource sharing is welcome; blatant vendor promotion is heavily moderated. Mitigation: full disclosure in line one, lead with the free tier, and message the mods for permission BEFORE posting. If mods say no, post to r/homeschooldiscussion or answer curriculum-request threads in comments instead.*

**Modmail first:** "Hi mods — I'm a former educator who built a learning site (101 subjects incl. life skills like first aid; first lesson of everything is free, no signup). I'd like to share it with full disclosure as the builder and stick around to answer questions. Is that OK under your rules, and is there a preferred flair or thread for it?"

**Title:** `Former educator, built a "learn everything" library my own way — first lesson of all 101 subjects is free, would love homeschool parents to tear it apart [I made this]`

**Body:**
Full disclosure up front: I built this, and mods OK'd this post.

I used to work in education, and the thing that always bothered me about curriculum shopping was buying subjects one at a time from ten different vendors. So I built one library: 101 subjects — the academic ones (math, physics, writing, philosophy) alongside ones schools skip entirely (first aid, foraging, basic electrical, negotiation).

What might actually matter to you: lessons are interactive with live simulations instead of videos, there's a built-in tutor your kid can ask by highlighting any confusing sentence, and the first lesson of every subject is free without creating an account — so you can vet the whole thing before spending anything.

It's not a boxed curriculum with scope-and-sequence (yet) — it's a library you assign from. Best fit for middle school and up, or as a supplement.

If you do decide it's useful: $99 one-time for up to 6 kids, forever. No subscription that renews in a school year you didn't plan for.

Mostly though, I want criticism from people who actually teach at home. What's missing? What would make this a "no" for your family? I'll answer everything.

### 4c. Trades door → r/skilledtrades
*Why this sub: 100k+ tradespeople and career-changers; constant "how do I get started" posts. Culture check: blunt, allergic to marketers, no formal self-promo carve-out visible — so the post must be a genuine ask, not an ad, and it leads with free. Re-read sidebar day-of; if promo is banned, run this in r/BlueCollarWomen's resource thread or answer "how do I start" posts in comments with the link instead.*

**Title:** `I built free intro lessons for HVAC, welding, electrical, and locksmithing — tradespeople, please tell me what I got wrong`

**Body:**
Not a tradesperson — I'm an educator who builds learning material, and I'll take the beating that comes with that.

I kept reading that there'll be over 2 million unfilled trade jobs by 2030, while every "learn online" platform teaches Python and calculus. So I added trades to the learning site I'm building: HVAC, welding, electrical fundamentals, locksmithing, plumbing basics — theory-first (refrigeration cycle, ohm's law, metallurgy) with interactive simulations, meant for someone deciding whether to commit to trade school, not a replacement for hands-on hours. It says that in the lessons.

The first lesson of every trade is free, no account needed. That's the part I'm asking you to look at.

What I want from this sub: open the trade you work in and tell me what's wrong, what's oversimplified, or what a first-year apprentice actually needs to know that I skipped. I'd rather get roasted here than mislead some kid deciding on a career. I'll fix what you flag and credit you if you want.

### 4d. Homestead door → r/preppers
*Why this sub: skill redundancy is a core prepper value and our exact product. Culture check: r/preppers requires mod approval for self-promotion — modmail BEFORE posting or it gets nuked. If declined, fall back to r/homestead (same modmail-first approach) or r/selfreliance, which is smaller but explicitly resource-friendly.*

**Modmail first:** "Hi mods — solo builder of a learning site that includes self-reliance skills (first aid, foraging, butchery, beekeeping, basic electrical/HVAC). First lesson of everything is free, no signup. Requesting permission for one disclosed post; happy to follow any format you prefer."

**Title:** `Skills are the one prep that weighs nothing — I built a library of them (first aid, foraging, butchery, beekeeping) and the intro lessons are free`

**Body:**
Posted with mod approval; I built this.

Common wisdom here: gear breaks, stockpiles run out, skills don't. The gap I kept hitting was that skill-learning online means either a $200 course per skill or YouTube videos of wildly variable quality that assume the grid is up.

So the learning site I'm building treats self-reliance skills as first-class subjects next to the sciences: first aid, foraging, butchery, beekeeping, basic electrical, HVAC, locksmithing, welding — plus the underlying science (food preservation is just microbiology you can eat).

The first lesson of every one of the 101 subjects is free without an account, so you can judge the quality yourself before spending a dollar. If it earns it, the whole library is a one-time $59 — I specifically didn't want a subscription, because a skills library you lose access to when a payment fails is a bad prep.

Honest limits: reading about butchery isn't butchering. These are for building the mental model before (and alongside) hands-on practice. Would genuinely value this sub's read on the first aid and foraging content — that's where being wrong costs the most, and I want it bulletproof.

---

## 5. X/Twitter launch thread

**1/** I spent months building an "atlas of everything" — 101 subjects, one site.

Quantum mechanics next to welding. Philosophy next to beekeeping. Chaos theory next to locksmithing.

Here's why nobody else builds this, and why I did anyway 🧵

**2/** Every learning platform picks a lane.

Brilliant: math + CS. $161.88/yr for ~4 domains.
Coursera: certificates.
YouTube: everything, zero structure.

Nobody puts "how your AC works" next to "the thermodynamics it runs on." Even though one IS the other.

**3/** So Supergravity bundles what school separates:

📐 The academy: physics, philosophy, math, history
🔧 The workshop: HVAC, welding, first aid, foraging, negotiation, butchery

101 subjects. 300+ lessons. Growing every week.

**4/** No videos. Live simulations instead.

Fluid dynamics you can stir. A double pendulum you can drag into chaos. Particle systems you can break.

You don't watch physics. You poke it. (screen recording of a sim goes here — this tweet is the one that gets shared)

**5/** Every lesson has an AI tutor built in.

Highlight any sentence you don't understand → ask about it, right there, in context.

It's the "wait, what does that mean?" moment, solved at the exact moment it happens.

**6/** The honest part: I'm one person.

Ex-educator, NYC, building in the open (github: american-desi). AI-assisted content pipeline, my editorial review. When you find an error — you will — there's a report button and I fix it same-day.

**7/** Pricing, and the reasoning:

First lesson of all 101 subjects: free, no signup.
Whole atlas: $59. Once. Forever.
Family (6 people): $99.

Brilliant charges $749.99 for a lifetime of 4 domains. I'm charging $59 for 101. That's not a typo, it's a land grab.

**8/** Founder pricing holds for the first 500 buyers, then it goes up.

Not fake urgency — I'm one guy funding server costs and an AI tutor bill. The first 500 people are betting on the roadmap, so they get the price nobody else will.

**9/** Who it's for:

• The insatiably curious
• Homeschool families (one library, every kid, $99, done)
• Anyone eyeing the trades — try before trade school
• Self-reliance folks — skills are the prep that weighs nothing

**10/** First lesson of every subject is free. No signup, no card, no trick.

Go break something in the chaos simulator: [link]

If you learn one thing you didn't know today, that's the product. RTs help a solo builder more than you know 🙏

---

## 6. Launch-week calendar (all times ET)

| Day | Channel | Time (ET) | Why |
|---|---|---|---|
| **Thu–Sun (pre-launch)** | Reddit karma-building + both modmails (r/homeschool, r/preppers) + buy domain + kill signup wall | any | Posts from day-old accounts with zero history die. Modmail replies take 1–3 days. Domain must propagate. |
| **Mon** | r/homeschool (if mods approved) | 8:30 PM | It's July — buying season. Homeschool parents browse after kids are down; evening posts get morning-coffee comment momentum. Start with the door most likely to produce *paying* customers, and learn from it before the big channels. |
| **Tue** | **Show HN** + X thread 30 min after | 9:00 AM | HN's best window: US East mid-morning, West Coast waking up, before the front page gets crowded. Tuesday beats Monday (no weekend backlog) and Friday (dead). X thread rides any HN momentum; link them. |
| **Tue** | r/skilledtrades | 6:00 PM | Tradespeople browse after the workday, not during. Same day as HN keeps you in "answer everything" mode anyway. |
| **Wed** | **Product Hunt** (submit 12:01 AM PT = 3:01 AM ET Tue night) | all day | PH day runs on PT. Wednesday is high-traffic without Tuesday's big-launch competition. Never same day as HN — you can't maker-comment two arenas at once, and each deserves a full day. |
| **Thu** | r/preppers (if approved) + r/InternetIsBeautiful | 12:00 PM | IIB is a lunch-scroll sub; midday weekday is its peak. By Thursday the site has survived 3 days of traffic and hot-fixes — IIB's 17M members are the biggest raw-traffic swing, so it goes last, when the product is most battle-tested. |
| **Fri** | X recap thread: real numbers (visitors, buyers, top feedback, funniest bug) + fixes shipped | 11:00 AM | "Open metrics" recaps outperform launch threads for solo builders. It's also the setup for week 2: build-in-public cadence. |
| **Sat–Sun** | Reply-only. Answer every comment across all threads. Ship top-requested subject; announce in each thread. | ongoing | The follow-up comment ("you asked, it's live") revives threads and converts fence-sitters. Weekend is when homeschool + prepper audiences actually have reading time. |

---

## 7. Top 5 flop risks — blunt version

**1. Traffic arrives, nobody pays (the most likely failure).**
HN front page = 20–50k visits and historically terrible conversion for paid content. If checkout has any friction — vercel.app domain, signup before value, clunky Stripe flow — you'll get 30k visitors, 400 nice comments, and 6 sales.
*Mitigation:* real domain first. Free lessons with zero gate. One visible "own the atlas — $59, first 500" button on every free lesson, with a live "N of 500 remaining" counter (real, not fake). Measure the funnel Tuesday morning; if visits→checkout is under 0.5%, fix the page before Product Hunt on Wednesday — that's why HN goes first.

**2. HN smells AI-generated content and the thread turns hostile.**
"AI slop" is HN's 2026 allergy. One commenter finds one wrong fact in the welding lesson and the top comment becomes "this is ChatGPT with a paywall." That thread tone is unrecoverable.
*Mitigation:* preempt it in the post body (done — the "honest notes" section names the pipeline and the human bottleneck). Before Tuesday, have a subject-matter friend audit the 5 subjects HN knows best (physics, math, CS, EE, chemistry). When errors surface live, fix within the hour and reply "fixed, thank you" — that flips the narrative from slop to craftsmanship.

**3. Lifetime pricing reads as a rug-pull-in-waiting.**
Smart buyers have watched lifetime deals die when the AI-tutor bill outruns revenue. "How is $59 forever sustainable?" will be asked in every channel, and a weak answer kills trust.
*Mitigation:* answer it before it's asked, with math: content is static and cheap to serve; the AI tutor is the metered cost, so lifetime includes a generous fair-use cap (state it: e.g., N tutor queries/day — nobody legitimate hits it). Say plainly: "if this fails, the content stays up; open-source pieces are already on GitHub." Cap founder pricing at exactly 500 and honor it.

**4. "101 subjects" signals 101-inches-deep.**
The breadth that makes the story great makes the skeptic assume every lesson is a Wikipedia summary. One shallow lesson screenshot can define you.
*Mitigation:* never lead with the number alone — lead with a *demo* (the chaos sim, the highlight-to-ask moment). Pick your 3 deepest subjects and hyperlink them everywhere as proof-of-depth. Reframe growth as the feature: "300+ lessons, shipping weekly, buyers vote on what's next" turns thin spots into a roadmap people bought into.

**5. Reddit posts get removed and the two best buyer pools (homeschool, preppers) never see it.**
Both subs have anti-promo enforcement; a removed post can also mean a ban and a public "spammer" flair that follows the username. That's the whole homeschool buying season, gone.
*Mitigation:* modmail first (drafts above), post only with approval, and hold a fallback per door (r/homeschooldiscussion, r/selfreliance, r/homestead, comment-answers in "how do I start" threads — which convert nearly as well and break no rules). If a post is removed anyway: apologize to mods, don't repost, work the sub in comments for two weeks, then ask again. Never argue with a moderator in public.

---
*Sources consulted for subreddit policy: [Reddit self-promotion rules guide (redship)](https://redship.io/blog/reddit-self-promotion-rules), [KarmaGuy 2026 guide](https://karmaguy.io/en/blog/reddit-self-promotion-rules), [Refined MVP-on-Reddit guide (r/InternetIsBeautiful no-signup rule)](https://refined.so/blog/marketing-on-reddit), [Conbersa Reddit rules overview](https://www.conbersa.ai/learn/reddit-self-promotion-rules). Rule pages change — re-read each sub's sidebar the morning of posting.*
