# Atlas — Legal & Compliance Working Pack

> **NOT LEGAL ADVICE.** This document was drafted by an internal AI working group (internet-products attorney lens, consumer-protection lens, insurance/risk lens, privacy counsel lens) as a **working draft for Josh Thomas to review with a licensed attorney** before publishing or relying on any of it. Nothing here creates an attorney-client relationship. State any of these documents on the site only after real counsel signs off.

**Product context:** Atlas of Everything. Paid online learning site. US-based solo founder (NYC). $59/$99 lifetime purchases via Stripe Payment Links. Supabase email auth. AI tutor routes user text to OpenAI's API. Content spans academic subjects plus physically risky how-to (electrical, welding, HVAC, first aid, foraging, hunting, survival, locksmithing) and alcohol-related content. Homeschool families in audience → likely minor users. Free tier + 14-day refund promise.

---

## 1. Risk Ranking — Top 6 Legal Exposures

### #1 — Personal injury from acting on practical-skills content (electrical, foraging, first aid)
This is the exposure that can actually bankrupt a solo founder. A user rewires an outlet from your electrical module and burns their house down; a forager eats a death cap after misidentifying it against your plant guide; someone performs first aid wrong and a bystander is harmed. Plaintiffs will plead negligent instruction, failure to warn, and (for foraging guides especially — see the mushroom-guidebook line of cases) something akin to product liability for informational content. **Mitigation:** layered defense — (a) prominent, subject-specific in-product warnings (Section 4), not just buried ToS text; (b) assumption-of-risk and "educational only, not professional advice" clauses in the ToS with an affirmative click-accept at signup; (c) editorial hygiene: never present foraging/first-aid/electrical content as sufficient for real-world action — always direct to licensed professionals, certified courses (e.g., Red Cross for first aid), and expert in-person verification for foraging ("never eat anything based on this site alone" stated *in the content itself*); (d) general liability + media/E&O insurance (Section 6); (e) operate through an LLC so personal assets are behind a shield. Disclaimers reduce but never eliminate this risk — content design is the real control.

### #2 — Minors: COPPA (under-13) and state teen-privacy laws, aggravated by the AI chat
Homeschool marketing means kids will use this. If children under 13 create accounts and the AI tutor collects their free-text chat (which is personal information under COPPA and gets shipped to OpenAI), the FTC can seek ~$50k+ per violation, and "we didn't know" fails if the site is deemed directed to children or you have actual knowledge. New York's Child Data Protection Act (effective June 2025) and SAFE for Kids Act add state-level exposure for users under 18. **Mitigation:** structure as a **general-audience site with adult account holders**: accounts require age 16+ self-certification at signup (16 also clears GDPR consent age if EU users appear); market family use as a **parent-owned account** where the parent is the customer, accepts the ToS, and supervises the child's use — the parent, not the child, is your user of record. Add a neutral age gate (birthdate field, no "click here if under 13" prompt), block and don't retain data from failed gates, minimize AI-chat retention, ensure your OpenAI data-processing terms disallow training on your API data (default for the API), and revisit with counsel before ever building child-directed features or a "kids mode" — that flips you into full COPPA verifiable-parental-consent territory.

### #3 — "Lifetime" promise vs. mortality of the service (FTC/state UDAP + NY GBL §349)
Selling a $99 "lifetime" unlock and shutting down in year three is the classic fact pattern for FTC deceptive-practices claims, state attorney-general actions, and consumer class actions under NY General Business Law §349/§350 (deceptive acts, false advertising — private right of action, statutory damages, attorney's fees). **Mitigation:** define "lifetime" **conspicuously at the point of sale**, not just in the ToS: lifetime = the operating life of the Atlas service, plus a concrete wind-down commitment (minimum 90 days' notice; pro-rated or window-based refunds for recent purchasers; best-efforts export of user notes/progress). Put a one-line definition with a link directly under the Stripe payment link on the pricing page. Never advertise "yours forever" or "never pay again, guaranteed." Keep a reserve mentally earmarked for wind-down refunds. This converts a deception claim into a disclosed contract term.

### #4 — Refunds and chargebacks (14-day promise + card-network reality)
The pricing page promises a 14-day refund; if the ToS contradicts it, undercuts it with fine print, or support is slow, that's a UDAP claim and — more practically — a chargeback problem. Stripe will side with cardholders on digital-goods disputes when refund terms are murky, and a dispute rate above ~0.75–1% threatens the Stripe account itself, which is an existential business risk. **Mitigation:** make the ToS refund clause match the pricing page exactly (14 days, no questions asked, full refund, any reason), honor it fast (refund > argue — a $99 refund is always cheaper than a $114 chargeback plus dispute-rate damage), state the policy on the checkout page and in the receipt email (card networks credit clear pre-sale disclosure in dispute adjudication), and log access/usage timestamps in Supabase so you have evidence for disputes filed after heavy use or after the window.

### #5 — AI tutor output: hallucinated dangerous instructions and unauthorized-practice creep
The AI tutor is dynamic content you don't review before it ships. It can hallucinate a wrong wire gauge, a wrong CPR ratio, a wrong "that mushroom is edible," or drift into individualized medical/electrical/legal advice — and courts are unlikely to let a platform disclaim its *own* generated output as easily as user content (Section 230 likely does not protect AI output you generate). **Mitigation:** (a) system-prompt guardrails: instruct the tutor to refuse plant/fungus edibility identification, dosing, and live-electrical troubleshooting, and to append professional-referral language on risky topics; (b) a persistent UI label on the chat: "AI-generated — may be wrong. Never rely on it for safety-critical decisions"; (c) ToS clause (Section 8 below) making non-reliance an explicit term; (d) keep OpenAI moderation endpoint or equivalent filtering on inputs/outputs; (e) log tutor conversations (with retention limits per privacy policy) so you can investigate any incident; (f) E&O insurance that covers AI-generated content — ask the broker explicitly.

### #6 — New York-specific compliance stack
NYC founder means NY law applies to the business regardless of what the ToS says about governing law. Key items: (a) **NY GBL §349/§350** consumer claims (see #3) — NY courts also police unconscionable arbitration/class-waiver terms; (b) **NY automatic-renewal law (GBL §527-a)** — not triggered by lifetime one-shots, but the moment you add any subscription tier you need clear consent, cost disclosure, and easy cancellation; (c) **NY SHIELD Act** — imposes a *reasonable data-security program* duty and breach notification for any business holding NY residents' private info (email + password hash qualifies); document your safeguards (Supabase RLS, encryption, access control, vendor diligence); (d) **NY LLC publication requirement** (§206) — if you form the LLC in NY, you must publish formation notices in two newspapers for six weeks (~$300–$1,500+ in NYC) or lose the right to maintain suits in NY courts until cured; (e) alcohol-related *content* (wine, cocktails) is lawful speech and doesn't require a liquor license since you sell no alcohol, but keep it framed as education for legal drinking age readers and add a 21+ note on those pages. **Mitigation:** form the entity with eyes open (Section 6), adopt a short written security policy for SHIELD, and have counsel sanity-check the arbitration clause against current NY enforceability law.

---

## 2. DRAFT — Terms of Service

> DRAFT FOR ATTORNEY REVIEW — do not publish as-is.

**Atlas — Terms of Service** (Last updated: [DATE])

Welcome to Atlas of Everything ("Atlas," "we," "us"), operated by [Atlas LLC], a [New York] limited liability company. By creating an account or using the site, you agree to these Terms. If you don't agree, please don't use Atlas.

**1. What Atlas is (and isn't).**
Atlas is an educational reference and learning site. We publish lessons, guides, and an AI tutor covering a very wide range of subjects — from mathematics and history to hands-on topics like electrical work, welding, HVAC, first aid, foraging, hunting, survival skills, and locksmithing, plus adult topics like wine and cocktails. **Everything on Atlas is for general educational purposes only.** It is not professional instruction, certification, or advice, and it is not a substitute for hands-on training, licensure, or the judgment of a qualified professional.

**2. Not professional advice — licensed-professional carve-outs.**
- **Not electrical/trade advice.** Content about electrical work, welding, HVAC, gas, plumbing, or similar trades is not a substitute for a licensed tradesperson. Much of this work is regulated; doing it yourself may be illegal where you live, may void insurance, and can kill you. Hire a licensed professional for real-world work and always follow local codes and permit requirements.
- **Not medical advice.** First-aid and health content is educational background, not medical advice, diagnosis, or treatment, and does not make you a trained responder. In an emergency, call 911 (or your local emergency number). Get certified through an accredited course (e.g., Red Cross, AHA) before relying on first-aid skills.
- **Foraging and wild foods.** Plant and fungus identification from text or images is inherently unreliable, and mistakes can be fatal. **Never eat, touch, or use any wild plant or fungus based on Atlas content alone.** Always confirm identification with a qualified local expert, in person.
- **Hunting, firearms, and survival.** You are solely responsible for complying with all laws, licenses, seasons, and safety rules, and for obtaining qualified in-person instruction.
- **Locksmithing.** Lock-related content is provided for education about how mechanisms work. Only practice on locks you own or have explicit permission to open. Possessing or using lockpicking tools is restricted or illegal in some places; you're responsible for knowing your local law.
- **Alcohol content.** Wine and cocktail content is intended for people of legal drinking age in their jurisdiction.
- Nothing on Atlas is legal, financial, or tax advice either.

**3. Assumption of risk.**
Some subjects we teach involve activities that are inherently dangerous — including electricity, welding, open flame, sharp tools, firearms, wild foods, and remote environments. If you choose to attempt any physical activity based on anything you read or learn here, **you do so voluntarily and entirely at your own risk.** You accept full responsibility for evaluating your own skill, your equipment, local laws, and site conditions, and for injuries, death, property damage, or legal consequences that result. To the maximum extent permitted by law, you release Atlas and its owner from claims arising out of your real-world application of the content.

**4. AI tutor.**
The AI tutor generates responses automatically using third-party large language models (currently OpenAI). **AI output can be confidently wrong, incomplete, outdated, or unsafe.** It is not reviewed by a human before you see it, it is not professional advice of any kind, and you must not rely on it for any safety-critical, medical, electrical, legal, or identification decision (it is specifically not able to tell you whether a plant or mushroom is safe to eat). Verify anything important against authoritative sources. Your chats may be processed by our AI provider to generate responses (see the Privacy Policy). You agree not to use the tutor to seek help with illegal activity or to harm yourself or others.

**5. Accounts and age.**
You must be **at least 16 years old** to create an account. Younger learners are welcome to use Atlas **only through an account created, owned, and supervised by their parent or legal guardian** — the parent is our customer, is responsible for all activity on the account, and accepts these Terms on the household's behalf. We don't knowingly collect personal information directly from children under 13; if we learn we have, we'll delete it. Keep your credentials secure; you're responsible for activity under your account.

**6. Free tier, purchases, and "lifetime" access — defined.**
Some content is free. Paid plans ($59 / $99, one-time, via Stripe) unlock full access for the **lifetime of the Atlas service** — meaning for as long as we operate Atlas, **not** for your biological lifetime and not in perpetuity. We're a small independent product and we're honest about that. **Wind-down commitment:** if we ever permanently shut down, we will (a) give paid users at least **90 days' advance notice**, (b) offer a **full refund to anyone who purchased within the 12 months before the shutdown announcement**, and (c) make reasonable efforts to let you export your notes and progress data. We may add, change, or retire individual pieces of content over time, but we won't materially gut the paid offering without treating a paid user's request for a refund sympathetically. Prices may change for future buyers; your one-time purchase will never incur new charges.

**7. Refunds.**
**14-day money-back guarantee, no questions asked.** If you're unhappy for any reason within 14 days of purchase, email [support@supergravity…] and we'll refund you in full to your original payment method. After 14 days, purchases are final except where required by law or covered by the wind-down commitment above. Please contact us before disputing a charge with your bank — we resolve refunds faster than the chargeback process, and we reserve the right to close accounts that file chargebacks in place of using this refund policy.

**8. Acceptable use.**
Don't: share accounts or resell access; scrape, copy, or redistribute our content or AI outputs at scale; use the site to plan or commit illegal acts (including opening locks you have no right to open); attempt to break our security; or use the AI tutor to generate harassing, hateful, or dangerous material. We may suspend or terminate accounts that violate these Terms (with a refund of the purchase price if we terminate a paid account without cause).

**9. Intellectual property.**
We own the site and its content. Your purchase is a personal, non-transferable license to access it for personal, non-commercial learning. Anything you type into the tutor remains yours; you give us a license to process it to run the service.

**10. Disclaimers and limitation of liability.**
The service is provided **"as is" and "as available,"** without warranties of any kind, express or implied, including accuracy, completeness, fitness for a particular purpose, or uninterrupted availability. To the maximum extent permitted by law, our total liability for any claim arising out of the service is limited to **the amount you paid us in the 12 months before the claim**, and we are not liable for indirect, incidental, consequential, or punitive damages, including personal injury or property damage arising from your real-world application of educational content. Some jurisdictions don't allow certain limitations, so some of this may not apply to you; nothing here limits liability that cannot lawfully be limited (e.g., for gross negligence or willful misconduct where non-waivable).

**11. Disputes — informal first, then arbitration.**
Before filing anything, email us at [legal@supergravity…]; most issues get fixed in days. If we can't resolve it within 30 days, disputes will be resolved by **binding individual arbitration** administered by [AAA under its Consumer Arbitration Rules / JAMS], seat New York, NY (conducted remotely on request), rather than in court, and **both sides waive class actions and jury trials.** We'll pay arbitration fees beyond the equivalent of court filing costs for consumer claims. **Exceptions:** either party may bring an individual claim in **small-claims court**, and either party may seek injunctive relief for IP or security violations in court. *(Founder note — why arbitration: for a solo founder the true nightmare is a consumer class action over "lifetime" or refund terms; individual arbitration with a small-claims carve-out neutralizes that while remaining fair and cheap for individual users. Counsel must verify current enforceability — including NY and FAA case law and mass-arbitration fee exposure, which is arbitration's own downside — and add the required conspicuous opt-out mechanism, e.g., email us within 30 days of account creation to opt out.)*

**12. Governing law.** New York law governs, without regard to conflict-of-laws rules, except where your local consumer law gives you non-waivable rights.

**13. Changes.** We may update these Terms; material changes will be announced by email or on-site notice at least 14 days before they take effect. Continued use after that is acceptance. We won't retroactively strip the lifetime-access or wind-down commitments from existing purchasers.

**14. Contact.** [Atlas LLC], New York, NY — [email].

---

## 3. DRAFT — Privacy Policy

> DRAFT FOR ATTORNEY REVIEW — do not publish as-is.

**Atlas — Privacy Policy** (Last updated: [DATE])

We run a small learning site and we collect as little as we can. Here's the whole picture, in plain English.

**1. What we collect.**
- **Account data:** your email address and a password (stored as a salted hash — we never see your actual password), managed through **Supabase**, our authentication and database provider.
- **Learning data:** your course progress, bookmarks, notes, and settings, stored in Supabase.
- **AI tutor chats:** the text you type to the tutor and the responses, which we store to run the feature (retained [12 months], then deleted or anonymized — you can delete your chat history anytime in settings).
- **Payment data:** payments are processed entirely by **Stripe** via Stripe Payment Links. **Your card number never touches our servers** — we receive only confirmation of payment, the amount, and the email you used at checkout.
- **Basic technical logs:** IP address, browser type, and timestamps from our hosting/infrastructure providers, kept briefly for security and debugging.
- **What we don't do: no advertising trackers, no third-party ad networks, no cross-site tracking pixels, and we do not sell or share your personal information for advertising — full stop.**

**2. How we use it.** To operate your account, deliver content and tutor responses, process payments and refunds, provide support, secure the service, and send transactional emails (receipts, security, material changes). We'll only send marketing email if you opt in, and every such email has an unsubscribe link.

**3. Who receives it (our processors).**
- **Supabase** — authentication, database, storage (data hosted in [region]).
- **Stripe** — payment processing; Stripe is an independent controller for fraud/compliance purposes (see Stripe's privacy policy).
- **OpenAI** — when you use the AI tutor, your message text (and recent chat context) is sent to OpenAI's API to generate the response. Under OpenAI's API terms, **API data is not used to train their models** and is retained by OpenAI for a limited abuse-monitoring period. Don't paste sensitive personal information (health details, government IDs, etc.) into the tutor.
- **[Hosting/email providers — list, e.g., Vercel, Resend]** — infrastructure and transactional email.
That's the whole list. No data brokers, no ad tech.

**4. Children and families.**
Atlas is a general-audience service. **Accounts require you to be 16 or older.** We know homeschool families use Atlas: the intended pattern is that a **parent or guardian creates and owns the account** and supervises any use by their children. We do not knowingly collect personal information directly from children under 13 (COPPA), and we don't ask kids for names, contact info, or profiles. If you believe a child under 13 has created an account or submitted personal information, email us at [privacy@…] and we will delete it promptly. Parents: you can review or delete anything on your family's account, including tutor chats, at any time.

**5. Your rights.** Wherever you live, we honor these on request: **access** a copy of your data, **correct** it, **delete** your account and data (self-serve in settings, or by email — completed within 30 days), and **export** your notes/progress. California residents (CCPA/CPRA): we do not "sell" or "share" personal information as those terms are defined, and we don't use sensitive personal information beyond providing the service; you may exercise rights without discrimination. EU/UK visitors (GDPR): our legal bases are contract (running your account), legitimate interests (security), and consent (marketing email); you may also complain to your local supervisory authority. New York residents: we maintain a data-security program consistent with the NY SHIELD Act.

**6. Security.** Encryption in transit (TLS) and at rest, Supabase row-level security so accounts can only read their own data, hashed passwords, least-privilege access (one founder, hardware-key 2FA on all admin accounts), and vendor due diligence. No system is perfect; if a breach affects your data we'll notify you and regulators as the law requires.

**7. Retention.** Account and learning data: while your account exists, then deleted within [30] days of account deletion. Tutor chats: [12 months] rolling, or immediately on your request. Payment records: 7 years (tax law). Logs: [30–90] days.

**8. Changes & contact.** Material changes announced by email 14 days in advance. Questions or requests: **[privacy@supergravity…]**, [Atlas LLC], New York, NY.

---

## 4. In-Product Disclaimer Snippets (paste-ready)

Short enough for a banner component; pair each with a link to the full ToS section. Suggested UI: dismissible-per-session amber banner at the top of each lesson in the tagged category, plus a one-time acknowledgment click the first time a user opens a risky category.

**Electrical / HVAC / gas / trades**
> ⚡ **Educational only — not a substitute for a licensed electrician/technician.** Electrical and mechanical work can kill, and DIY work may be illegal or void your insurance where you live. Always follow local codes, pull permits, and hire a licensed pro for real work.

**Welding / hot work**
> 🔥 **Educational only.** Welding involves lethal voltages, fire, fumes, and eye hazards. Get hands-on instruction and proper PPE before striking an arc. Not professional training or certification.

**First aid / health**
> 🩺 **Not medical advice.** This is background education, not training or treatment guidance. In an emergency call 911. Get certified through an accredited course (Red Cross/AHA) before relying on these skills.

**Foraging / wild plants & fungi**
> ☠️ **Never eat anything based on this site alone.** Misidentifying wild plants or mushrooms can be fatal, and lookalikes fool experts. Always confirm ID with a qualified local expert, in person. Our AI tutor will not and cannot confirm edibility.

**Hunting / firearms**
> 🎯 **Educational only.** Firearms and hunting are heavily regulated. You're responsible for licenses, seasons, local law, and safe handling. Take a certified hunter-safety course before going afield.

**Survival / outdoors**
> 🏕️ **Educational only.** Wilderness skills require practice under safe, supervised conditions. Don't rely on any single source — including this one — in a real emergency.

**Locksmithing**
> 🔐 **Legal note:** only practice on locks you own or have explicit written permission to open. Lockpicking tools are restricted or illegal in some jurisdictions — know your local law. This content explains mechanisms; it's not a license to open anything.

**Wine / cocktails**
> 🍷 **21+ (or legal drinking age where you live).** Educational content about beverages, not encouragement to drink. Please drink responsibly.

**AI tutor (persistent, in/under the chat box)**
> 🤖 **AI-generated — can be confidently wrong.** Never rely on the tutor for safety-critical decisions: no plant/mushroom edibility, no live electrical troubleshooting, no medical dosing. Verify anything important. [Full disclaimer]

---

## 5. Business Hygiene Checklist

**Entity — LLC, and where**
- Form an LLC before meaningful revenue or before publishing the risky-content categories, whichever comes first — the injury exposure in Risk #1 is the reason. Run the business (Stripe account, domain, contracts, insurance) through the LLC, keep finances separate, and don't sign anything personally.
- **NY vs. DE for a solo founder:** you live and operate in NYC, so New York gets jurisdiction over you either way. A **Delaware LLC still must register as a foreign LLC in NY** (foreign registration also triggers NY's publication requirement) and pay Delaware's $300/yr franchise tax plus a DE registered agent — you'd be paying two states for no benefit at this scale. **Recommendation: single-member NY LLC**, unless/until you raise institutional money (investors prefer Delaware *corporations*, and you'd convert then anyway).
- **NY publication caveat (LLC Law §206):** NY requires publishing formation notice in two newspapers designated by the county clerk for six consecutive weeks, then filing a Certificate of Publication. In New York County this can run **$1,000–$1,500+**; many founders use a registered agent address in a cheaper county (e.g., Albany) to cut it to ~$300–$450 — ask the formation service/lawyer about this, and note the only penalty for skipping it is suspension of your ability to *maintain* (not defend) NY lawsuits until you cure it.
- **EIN:** free, 10 minutes, directly at irs.gov (never pay a third party). Needed for the LLC's bank account and Stripe. Then: dedicated business bank account, and move Stripe/Supabase/OpenAI billing onto it.

**Sales tax on digital courses (quick check — verify with an accountant)**
- Turn on **Stripe Tax** on the Payment Links (registration-based collection; ~0.5% per transaction). It calculates, collects, and reports; you still register and remit (or use Stripe's filing partner).
- The landscape: pre-recorded/self-paced online courses are treated as taxable **digital goods/automated services in a substantial minority of states** — commonly cited: **WA, HI, NM, SD, WV, TN, PA, TX (partially), CT, KY, NC, LA, plus others**; live instructor-led courses are more often exempt. **CA, FL, and IL generally do not tax digital goods**; **NY generally does not tax purely educational online courses** (it can tax them if they're characterized as pre-written software/downloads — your web-app framing matters, ask the accountant). AK/DE/MT/NH/OR have no state sales tax.
- Practical posture for a solo founder: you owe tax in a state only once you have **nexus** there — usually $100k sales or 200 transactions/yr per state. At launch volume you likely have obligations only in **NY (home-state nexus — but the product is plausibly exempt there)**. Let Stripe Tax's monitoring dashboard tell you when you cross a threshold elsewhere, register then, not before.

**Insurance (get quotes once the LLC exists)**
- **General liability + media/professional (E&O) liability** — the E&O/media piece is the one that responds to "your content injured me" and defamation-type claims; confirm in writing that it covers (a) educational content re: hazardous activities and (b) **AI-generated output**. Expect roughly $500–$2,000/yr combined at this size (Hiscox, Next, Embroker, Vouch are typical online shops).
- **Cyber liability** (breach response, often bundled) — cheap and worth it given SHIELD Act duties.

**When to actually pay a lawyer (in priority order)**
1. **Before launch of paid tiers / risky categories:** 1–2 hours of review of the ToS, Privacy Policy, and disclaimer placement — especially the arbitration clause, the liability cap, the assumption-of-risk clause, and the lifetime/wind-down language. This is the highest-leverage $500–$1,500 you'll spend.
2. **Before marketing explicitly to homeschool families / minors**, or before adding any kid-directed feature: a COPPA/state-teen-privacy consult.
3. **On any injury claim, regulator letter (FTC/NY AG), or COPPA complaint:** immediately — notify the insurer the same day, say nothing substantive to the claimant.
4. **Before adding subscriptions** (NY/FTC auto-renewal rules), **hiring anyone**, or **raising money**.
5. Cheap ongoing option: a flat-fee small-business attorney review annually as terms/laws drift (AI and teen-privacy law are both moving fast).

**Misc hygiene**
- DMCA registered agent designation with the Copyright Office ($6) + a repeat-infringer policy if you ever accept user-submitted content.
- Keep dated archives of every version of the ToS/Privacy Policy and of what the pricing page said (screenshots) — your best evidence in any "you promised X" dispute.
- Accessibility (WCAG 2.1 AA) effort is cheap insurance against ADA demand letters, which are common against NY-based sites.

---

*Prepared 2026-07-06 by the Legal & Compliance working group. Review with licensed counsel before use. Sales-tax overview informed by current state summaries — see [Numeral's digital-goods state guide](https://www.numeral.com/blog/sales-tax-on-digital-goods), [TaxJar on online classes](https://www.taxjar.com/blog/07-21-are-online-classes), and [Avalara on online instruction](https://www.avalara.com/blog/en/north-america/2020/09/are-online-classes-subject-to-sales-tax.html).*
