// ============================================
// Auth — REAL Supabase email magic-link sign-in
//   Replaces the old fake demo sign-in. Uses window.SG.sb (see sg-supabase.js).
//   A new sign-in auto-creates a public.profiles row (DB trigger) at trust tier
//   'verified'. The [user, setUser] contract is preserved for app.jsx.
// ============================================

// ---------- map a Supabase auth user → the shape the app/UI expects ----------
const mapSbUser = (u) => {
  if (!u) return null;
  const email = u.email || '';
  const meta = u.user_metadata || {};
  const name = meta.name || meta.full_name || (email ? email.split('@')[0] : 'Learner');
  const parts = String(name).trim().split(/\s+/);
  const initials = (parts.length > 1
    ? (parts[0][0] + parts[parts.length - 1][0])
    : (name.slice(0, 2)))
    .toUpperCase();
  let memberSince = '—';
  try { if (u.created_at) memberSince = new Date(u.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); } catch {}
  let timezone = '—';
  try { timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '—'; } catch {}
  return {
    id: u.id,
    name,
    email,
    given: parts[0] || name,
    avatar: meta.avatar_url || null,
    initials,
    accentHue: 26,
    memberSince,
    timezone,
  };
};

// ---------- Google G logo (kept for a future OAuth option) ----------
const GoogleG = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

// ---------- Avatar ----------
const Avatar = ({ user, size = 32 }) => {
  if (!user) return null;
  const s = { width: size, height: size, fontSize: size * 0.42 };
  return (
    <div
      className="sg-avatar"
      style={{ ...s, background: `oklch(62% 0.14 ${user.accentHue || 26})` }}
      aria-label={user.name}
    >
      {user.avatar
        ? <img src={user.avatar} alt="" style={{ width: '100%', height: '100%', borderRadius: 'inherit', objectFit: 'cover' }}/>
        : user.initials}
    </div>
  );
};

// ---------- Auth hook — Supabase session is the source of truth ----------
const useAuth = () => {
  const [user, setUserState] = React.useState(null);

  React.useEffect(() => {
    const sb = window.SG && window.SG.sb;
    if (!sb) { console.warn('[SG] No Supabase client; auth disabled.'); return; }
    let active = true;
    // Hydrate the base user from the session, then enrich with the profile row
    // (trust_tier / reputation / handle) so the UI can gate reviewer features.
    const hydrate = async (sbUser) => {
      const base = mapSbUser(sbUser);
      if (base) {
        try {
          const { data } = await sb.from('profiles').select('trust_tier,reputation,handle,edu_verified').eq('id', base.id).single();
          if (data) { base.trustTier = data.trust_tier; base.reputation = data.reputation; base.handle = data.handle; base.eduVerified = data.edu_verified; }
        } catch {}
      }
      if (active) setUserState(base);
    };
    sb.auth.getSession().then(({ data }) => hydrate(data && data.session && data.session.user));
    const { data: sub } = sb.auth.onAuthStateChange((_event, session) => hydrate(session && session.user));
    return () => { active = false; sub && sub.subscription && sub.subscription.unsubscribe(); };
  }, []);

  // Preserve the [user, setUser] contract. setUser(null) signs out; a truthy
  // value sets optimistically (real sign-in is driven by onAuthStateChange).
  const setUser = (u) => {
    const sb = window.SG && window.SG.sb;
    if (u === null) { if (sb) sb.auth.signOut(); setUserState(null); }
    else if (u) setUserState(u);
  };
  return [user, setUser];
};
window.useAuth = useAuth;

// ---------- Brand mark ----------
const SgMark = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
    <defs>
      <radialGradient id="sg-auth-core" cx="38%" cy="38%" r="55%">
        <stop offset="0%" stopColor="#ffd89a"/>
        <stop offset="45%" stopColor="#e09a5a"/>
        <stop offset="100%" stopColor="#6b2a0a"/>
      </radialGradient>
    </defs>
    <g stroke="rgba(60,30,15,0.25)" strokeWidth="0.6" fill="none">
      <ellipse cx="20" cy="20" rx="17" ry="6"/>
      <ellipse cx="20" cy="20" rx="17" ry="10" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="20" rx="17" ry="10" transform="rotate(-60 20 20)"/>
    </g>
    <circle cx="20" cy="20" r="6.5" fill="url(#sg-auth-core)"/>
    <ellipse cx="20" cy="20" rx="15" ry="4.5" fill="none" stroke="#e09a5a" strokeWidth="0.7" transform="rotate(-22 20 20)"/>
    <circle cx="33.5" cy="15.2" r="1.4" fill="#e09a5a"/>
  </svg>
);

// ---------- Email magic-link form (shared by page + modal) ----------
const EmailSignInForm = () => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
  const [msg, setMsg] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    const sb = window.SG && window.SG.sb;
    if (!sb) { setStatus('error'); setMsg('Sign-in is not configured yet.'); return; }
    if (!/.+@.+\..+/.test(email)) { setStatus('error'); setMsg('Please enter a valid email address.'); return; }
    setStatus('sending'); setMsg('');
    try {
      const { error } = await sb.auth.signInWithOtp({
        email: email.trim(),
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) { setStatus('error'); setMsg(error.message || 'Could not send the link.'); }
      else { setStatus('sent'); }
    } catch (err) {
      setStatus('error'); setMsg((err && err.message) || 'Could not send the link.');
    }
  };

  if (status === 'sent') {
    return (
      <div style={{ textAlign: 'center', padding: '8px 0' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', margin: '0 auto 16px', display: 'grid', placeItems: 'center', background: 'oklch(62% 0.14 150)', color: '#fff', fontSize: 24 }}>✓</div>
        <h2 style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 26, margin: '0 0 8px' }}>Check your email</h2>
        <p className="sg-signin-sub" style={{ marginBottom: 18 }}>
          We sent a one-time sign-in link to <strong>{email}</strong>. Open it on this device to finish.
        </p>
        <button className="sg-btn sg-btn-demo" onClick={() => { setStatus('idle'); setEmail(''); }}>
          ← Use a different email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        autoFocus
        placeholder="you@example.com"
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
        disabled={status === 'sending'}
        style={{
          width: '100%', padding: '13px 14px', fontSize: 15, fontFamily: 'Inter Tight, sans-serif',
          borderRadius: 10, border: '1px solid rgba(120,90,60,0.35)', background: 'rgba(255,255,255,0.7)',
          color: 'var(--ink, #2a1a0a)', outline: 'none', boxSizing: 'border-box',
        }}
      />
      <button className="sg-btn sg-btn-google" type="submit" disabled={status === 'sending'}>
        {status === 'sending'
          ? <><span className="sg-spinner"/>Sending link…</>
          : <>✉ Email me a magic link</>}
      </button>
      {status === 'error' && (
        <div style={{ fontSize: 13, color: 'oklch(55% 0.18 25)', fontFamily: 'Inter Tight, sans-serif' }}>{msg}</div>
      )}
      <div className="sg-signin-legal">
        No password — we email you a one-time sign-in link. By continuing you agree to our <a>Terms</a> and <a>Privacy Policy</a>.
      </div>
    </form>
  );
};

// ---------- Sign-in page (full screen) ----------
const SignInPage = () => (
  <div className="sg-signin">
    <div className="sg-signin-canvas">
      {window.HeroVisual && <window.HeroVisual/>}
    </div>
    <div className="sg-signin-overlay"/>
    <div className="sg-signin-card">
      <div className="sg-signin-brand">
        <SgMark size={44}/>
        <div>
          <div className="sg-signin-name">Atlas</div>
          <div className="sg-signin-tag">Atlas of Everything</div>
        </div>
      </div>
      <h1 className="sg-signin-h1">A quieter place<br/>to learn.</h1>
      <p className="sg-signin-sub">
        Curated lessons and a place to organize what you learn, and one day contribute it back.
      </p>
      <EmailSignInForm/>
    </div>
    <div className="sg-signin-footer">
      <span>Est. 2024</span><span>·</span><span>Made with care</span><span>·</span><span>v3.2</span>
    </div>
  </div>
);
window.SignInPage = SignInPage;

// ---------- Sign-in modal (from the top-right button) ----------
const SignInModal = ({ onClose }) => {
  const [mode, setMode] = React.useState('in'); // 'in' | 'up'
  return (
    <div className="sg-modal-backdrop" onMouseDown={onClose}>
      <div className="sg-signin-card sg-signin-card-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="ws-x sg-modal-x" onClick={onClose} aria-label="Close">✕</button>
        <div className="sg-signin-brand">
          <SgMark size={36}/>
          <div>
            <div className="sg-signin-name">Atlas</div>
            <div className="sg-signin-tag">Atlas of Everything</div>
          </div>
        </div>
        <div className="sg-modal-tabs">
          <button className={mode === 'in' ? 'on' : ''} onClick={() => setMode('in')}>Sign in</button>
          <button className={mode === 'up' ? 'on' : ''} onClick={() => setMode('up')}>Sign up</button>
        </div>
        <h1 className="sg-signin-h1" style={{ fontSize: 32 }}>
          {mode === 'in' ? 'Welcome back.' : 'Start your atlas.'}
        </h1>
        <p className="sg-signin-sub">
          {mode === 'in'
            ? 'Enter your email and we’ll send you a one-time sign-in link.'
            : 'A lifetime of curiosity, saved in one place. No password, no credit card.'}
        </p>
        <EmailSignInForm/>
      </div>
    </div>
  );
};
window.SignInModal = SignInModal;

// ---------- Profile menu (topbar) ----------
const ProfileMenu = ({ user, onSignOut, onNav }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return (
    <div className="sg-profile" ref={ref}>
      <button className="sg-profile-btn" onClick={() => setOpen(o => !o)} aria-label="Profile">
        <Avatar user={user} size={30}/>
        <span className="sg-profile-name">{user.given}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="sg-profile-menu" role="menu">
          <div className="sg-profile-head">
            <Avatar user={user} size={44}/>
            <div>
              <div className="sg-profile-mn">{user.name}</div>
              <div className="sg-profile-me">{user.email}</div>
            </div>
          </div>
          <div className="sg-profile-section">
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'home' }); }}>
              <Icon name="star" size={14}/> Your dashboard
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'workshop' }); }}>
              <Icon name="book" size={14}/> Workshop
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'progress' }); }}>
              <Icon name="book" size={14}/> Learning progress
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'flashcards' }); }}>
              <Icon name="cards" size={14}/> Flashcards
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'contributions' }); }}>
              <Icon name="star" size={14}/> My contributions
            </button>
            {(user.trustTier === 'academic' || user.trustTier === 'expert') && (
              <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'review' }); }}>
                <Icon name="grid" size={14}/> Review queue
              </button>
            )}
          </div>
          <div className="sg-profile-section">
            <div className="sg-profile-mini">
              <span>Member since</span><span>{user.memberSince}</span>
            </div>
            <div className="sg-profile-mini">
              <span>Tier</span>
              <span style={{ textTransform: 'capitalize' }}>
                {(user.trustTier || 'verified')}{(user.trustTier === 'academic' || user.trustTier === 'expert') ? ' ✓' : ''}
              </span>
            </div>
            <div className="sg-profile-mini">
              <span>Reputation</span><span>{user.reputation ?? 0}</span>
            </div>
          </div>
          <div className="sg-profile-section">
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'path' }); }}>
              <Icon name="tree" size={14}/> The Path
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'chapters' }); }}>
              <Icon name="grid" size={14}/> NYC Chapter
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'rule' }); }}>
              <Icon name="book" size={14}/> The Rule
            </button>
          </div>
          <div className="sg-profile-section">
            <button className="sg-profile-item quiet">
              <Icon name="book" size={14}/> Settings
            </button>
            <button className="sg-profile-item danger" onClick={onSignOut}>
              <Icon name="close" size={14}/> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
window.ProfileMenu = ProfileMenu;
Object.assign(window, { SignInPage, SignInModal, ProfileMenu, Avatar, GoogleG, useAuth, EmailSignInForm });
