// ============================================
// Premium — entitlements, pricing, landing doors, lesson gate
// One SKU, four audiences. Free tier: first 3 lessons of every subject.
// ============================================

const { useState: useStateP, useEffect: useEffectP, useMemo: useMemoP } = React;

// ---- Config ----
const SG_PRICE = { solo: 59, family: 99, anchor: 749.99, founderCap: 500 };

// ---- Free-tier gate: first 3 topics of every subject are free forever ----
window.SG_isFreeTopic = (subjectId, topicId) => {
  const s = (window.SUBJECTS || []).find(x => x.id === subjectId);
  if (!s) return true; // fail open — never brick a lesson we can't identify
  const flat = s.groups.flatMap(g => g.topics.map(t => t.id));
  const idx = flat.indexOf(topicId);
  return idx === -1 ? true : idx < 1; // first lesson of every subject is free
};

// ---- Entitlement hook (RLS-scoped: users only ever see their own row) ----
(function () {
  let cached = null;
  try { cached = JSON.parse(localStorage.getItem('sg-ent') || 'null'); } catch {}
  window.usePremium = (user) => {
    const [premium, setPremium] = useStateP(!!(cached && cached.plan));
    useEffectP(() => {
      if (!user) { setPremium(!!(cached && cached.plan)); return; }
      if (!window.SG?.sb) return;
      let alive = true;
      window.SG.sb.from('entitlements').select('plan').limit(1).then(({ data }) => {
        if (!alive) return;
        const ent = (data && data[0]) || null;
        cached = ent;
        try { localStorage.setItem('sg-ent', JSON.stringify(ent)); } catch {}
        setPremium(!!ent);
      }).catch(() => {});
      return () => { alive = false; };
    }, [user && user.id]);
    return premium;
  };
})();

// ---- Telemetry (write-only; RLS blocks reads) ----
window.SG_track = (kind, meta) => {
  try { window.SG?.sb?.from('events').insert({ kind, meta: meta || {} }).then(() => {}, () => {}); } catch {}
};

// ---- Self-serve purchase claim: binds a paid Stripe session to this account ----
window.SG_claimPurchase = async () => {
  try {
    const sid = new URLSearchParams(location.search).get('session_id');
    if (!sid) return false;
    const { data } = await window.SG.sb.auth.getSession();
    const token = data?.session?.access_token;
    const r = await fetch('/api/claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify({ session_id: sid }),
    });
    if (r.ok) { try { localStorage.removeItem('sg-ent'); } catch {} return true; }
  } catch {}
  return false;
};

// ---- Checkout ----
const goCheckout = (plan, user) => {
  window.SG_track('checkout_click', { plan });
  const link = plan === 'family'
    ? window.SG_CONFIG?.STRIPE_LINK_FAMILY
    : window.SG_CONFIG?.STRIPE_LINK_LIFETIME;
  if (link) {
    const email = user?.email ? `?prefilled_email=${encodeURIComponent(user.email)}` : '';
    window.location.href = link + email;
  } else if (user) {
    alert('Checkout opens at launch (hours away). Your account is on the founder list — the $' + SG_PRICE.solo + ' price is locked in for you.');
  } else {
    window.__openSignIn?.();
  }
};

// ---- Shared bits ----
const kicker = { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)' };
const serifH = { fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', lineHeight: 1.04, margin: 0 };

const atlasStats = () => {
  const subjects = (window.SUBJECTS || []).length;
  const topics = (window.SUBJECTS || []).reduce((n, s) => n + s.groups.reduce((m, g) => m + g.topics.length, 0), 0);
  return { subjects, topics };
};

// ---- Landing doors: one product, four audiences ----
const DOORS = {
  learn: {
    kicker: 'For the endlessly curious',
    h1: <>Learn <em>everything.</em></>,
    sub: 'One atlas: physics to plumbing, chess to cheesemaking. Interactive lessons and live simulations on every page.',
    points: ['300+ in-depth lessons across 101 subjects — academic depth and real-world craft in one place, growing weekly', 'Pay once. Own it for life — including every subject and lesson added after you buy'],
    chips: ['physics', 'math', 'cs', 'philosophy', 'music', 'chess', 'astronomy', 'linguistics'],
  },
  homeschool: {
    kicker: 'For homeschool families',
    h1: <>The whole curriculum. <em>One shelf.</em></>,
    sub: 'Math, science, history, literature, civics — plus the life skills school never taught. One family plan covers everyone at the table.',
    points: ['Structured subject ladders: arithmetic → algebra → calculus, cells → ecosystems', 'Costs less than one month of most boxed curricula — families spend $300–800/yr; this is $99 once', 'Self-paced, ad-free, no accounts required for the kids to read'],
    chips: ['math', 'science', 'history', 'literature', 'geography', 'art', 'biology', 'firstaid'],
  },
  trades: {
    kicker: 'For hands that want work',
    h1: <>Test-drive <em>fifteen trades.</em></>,
    sub: 'HVAC, electrical, welding, plumbing, machining, diesel, locksmithing. Know what the work actually is before you commit years to an apprenticeship.',
    points: ['2.1M skilled-trades jobs are projected to go unfilled by 2030 — the leverage is yours', 'Real fundamentals: circuits, brazing, code basics, tool literacy — not marketing fluff', 'One price, every trade. Compare them honestly before you choose'],
    chips: ['electrical', 'hvac', 'welding', 'plumbing', 'carpentry', 'machining', 'diesel', 'automotive'],
  },
  homestead: {
    kicker: 'For the self-reliant',
    h1: <>Knowledge you can <em>hold onto.</em></>,
    sub: 'First aid, foraging, fermentation, beekeeping, small-engine repair, knots, navigation. The library you want before you need it.',
    points: ['The skills stack for real self-reliance — grow it, fix it, preserve it, treat it', 'Written to be used: checklists, failure modes, and the why behind each step', 'Lifetime access — this library does not expire with a subscription'],
    chips: ['survival', 'firstaid', 'foraging', 'beekeeping', 'fermentation', 'smallengine', 'knots', 'mapreading'],
  },
};

const LandingPage = ({ audience = 'learn', onNav, user }) => {
  const d = DOORS[audience] || DOORS.learn;
  const { subjects, topics } = atlasStats();
  useEffectP(() => { window.SG_track('landing_view', { audience }); }, [audience]);
  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 24px 96px' }}>
      <div style={{ ...kicker, marginBottom: 14 }}>§ {d.kicker}</div>
      <h1 style={{ ...serifH, fontSize: 'clamp(44px, 7vw, 72px)' }}>{d.h1}</h1>
      <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 620, margin: '20px 0 28px' }}>{d.sub}</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
        <button className="btn-primary" onClick={() => onNav({ page: 'pricing' })}>
          Unlock everything — ${SG_PRICE.solo} once
        </button>
        <button className="btn-ghost" onClick={() => onNav({ page: 'atlas' })}>
          Browse the atlas free
        </button>
      </div>
      <div style={{ display: 'grid', gap: 14, marginBottom: 36 }}>
        {d.points.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
            <span style={{ color: 'var(--amber)', fontFamily: 'JetBrains Mono, monospace' }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>{p}</span>
          </div>
        ))}
      </div>
      <div style={{ ...kicker, marginBottom: 12 }}>Inside, among {subjects} subjects · {topics.toLocaleString()} lessons</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {d.chips.map(id => {
          const s = (window.SUBJECTS || []).find(x => x.id === id);
          return s ? (
            <button key={id} className="btn-ghost" style={{ fontSize: 13 }} onClick={() => onNav({ page: 'subject', subjectId: id })}>
              {s.name}
            </button>
          ) : null;
        })}
      </div>
    </div>
  );
};
window.LandingPage = LandingPage;

// ---- Pricing ----
const PricingPage = ({ onNav, user, purchased }) => {
  const { subjects, topics } = atlasStats();
  useEffectP(() => { window.SG_track('pricing_view', { purchased: !!purchased }); }, []);
  // Returning from checkout: verify the session server-side and bind it to this account.
  useEffectP(() => {
    if (purchased && user) {
      window.SG_claimPurchase().then(ok => { if (ok) location.replace('/'); });
    }
  }, [purchased, user && user.id]);
  const card = { background: 'var(--paper-2)', border: '1px solid var(--line, rgba(0,0,0,0.08))', padding: 28, flex: '1 1 280px', maxWidth: 380 };
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px 96px' }}>
      {purchased && (
        <div style={{ padding: '14px 18px', marginBottom: 28, background: 'var(--paper-2)', borderLeft: '3px solid var(--amber)', fontSize: 15, lineHeight: 1.5 }}>
          <strong>Payment received.</strong> Sign in (or create an account) with the same email you used at checkout and the full atlas unlocks automatically.
          {!user && <> <button className="btn-primary" style={{ marginLeft: 10 }} onClick={() => window.__openSignIn?.()}>Sign in</button></>}
        </div>
      )}
      <div style={{ ...kicker, marginBottom: 14 }}>§ Founder pricing · first {SG_PRICE.founderCap} buyers</div>
      <h1 style={{ ...serifH, fontSize: 'clamp(40px, 6vw, 64px)' }}>Pay once. <em>Learn forever.</em></h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 640, margin: '18px 0 8px' }}>
        {subjects} subjects. {topics.toLocaleString()} in-depth lessons — and the atlas grows every week.
        The first lesson of every subject is free, forever. The rest is one honest price,
        and everything added later is included in it.
      </p>
      <p style={{ fontSize: 14, color: 'var(--ink-3)', margin: '0 0 36px' }}>
        For scale: a comparable interactive-learning subscription runs $161/yr — or ${SG_PRICE.anchor} for lifetime access to a fraction of the subjects.
      </p>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
        <div style={card}>
          <div style={{ ...kicker, marginBottom: 10 }}>Solo · lifetime</div>
          <div style={{ fontSize: 48, fontWeight: 700, fontFamily: 'Inter Tight, sans-serif' }}>${SG_PRICE.solo}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 18 }}>once — not per year</div>
          <ul style={{ margin: '0 0 22px', padding: 0, listStyle: 'none', display: 'grid', gap: 8, fontSize: 15, color: 'var(--ink-2)' }}>
            <li>→ Every subject, every lesson, forever</li>
            <li>→ All interactive simulations</li>
            <li>→ Workshop notes, paths &amp; spaced repetition</li>
          </ul>
          <button className="btn-primary" style={{ width: '100%' }} onClick={() => goCheckout('solo', user)}>Unlock everything</button>
        </div>
        <div style={card}>
          <div style={{ ...kicker, marginBottom: 10 }}>Family · lifetime</div>
          <div style={{ fontSize: 48, fontWeight: 700, fontFamily: 'Inter Tight, sans-serif' }}>${SG_PRICE.family}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 18 }}>once — up to 6 accounts</div>
          <ul style={{ margin: '0 0 22px', padding: 0, listStyle: 'none', display: 'grid', gap: 8, fontSize: 15, color: 'var(--ink-2)' }}>
            <li>→ Everything in Solo, for the whole table</li>
            <li>→ Built for homeschool &amp; multi-learner homes</li>
            <li>→ Each member gets their own progress &amp; notes</li>
          </ul>
          <button className="btn-primary" style={{ width: '100%' }} onClick={() => goCheckout('family', user)}>Unlock for the family</button>
        </div>
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-3)', maxWidth: 640 }}>
        <strong style={{ color: 'var(--ink-2)' }}>14-day guarantee.</strong> If it isn't what you hoped, one email gets you a full refund — no forms, no friction.
        Payments are handled by Stripe; we never see your card.
      </div>
    </div>
  );
};
window.PricingPage = PricingPage;

// ---- Locked lesson ----
const LockedLessonPage = ({ subjectId, topicId, onNav }) => {
  const s = (window.SUBJECTS || []).find(x => x.id === subjectId);
  const t = s && s.groups.flatMap(g => g.topics).find(x => x.id === topicId);
  useEffectP(() => { window.SG_track('paywall_view', { subjectId, topicId }); }, [topicId]);
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px 24px' }}>
      <div style={{ ...kicker, marginBottom: 14 }}>§ {s ? s.name : 'Atlas'} · locked lesson</div>
      <h1 style={{ ...serifH, fontSize: 'clamp(36px, 5vw, 54px)' }}>{t ? t.name : 'This lesson'} <em>awaits.</em></h1>
      <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', margin: '20px 0 8px' }}>
        The first lesson of every subject is free, forever — including {s ? s.name.toLowerCase() : 'this one'}.
        This one is part of the full atlas: one payment, lifetime access, every subject,
        and every lesson added from here on.
      </p>
      <p style={{ fontSize: 14, color: 'var(--ink-3)', margin: '0 0 30px' }}>
        No subscription. No meter. ${SG_PRICE.solo}, once.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={() => onNav({ page: 'pricing' })}>Unlock the full atlas — ${SG_PRICE.solo}</button>
        {s && <button className="btn-ghost" onClick={() => onNav({ page: 'subject', subjectId })}>Back to {s.name}</button>}
      </div>
    </div>
  );
};
window.LockedLessonPage = LockedLessonPage;

// ---- Floating unlock pill (shown to non-premium users) ----
const UnlockFab = ({ onNav }) => (
  <button
    onClick={() => onNav({ page: 'pricing' })}
    style={{
      position: 'fixed', left: 20, bottom: 20, zIndex: 60,
      fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '0.06em',
      padding: '10px 16px', cursor: 'pointer',
      background: 'var(--ink)', color: 'var(--paper)', border: 'none', borderRadius: 999,
      boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
    }}
    title="Lifetime access to the full atlas"
  >
    ★ Unlock everything — ${SG_PRICE.solo}
  </button>
);
window.UnlockFab = UnlockFab;
