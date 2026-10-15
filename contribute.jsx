// ============================================
// Contribute — the first people-powered loop.
//   • Any signed-in user can PROPOSE an edit or ADD a resource on a topic.
//   • Writes to public.contributions (RLS: insert own, status 'pending').
//   • Academic-tier reviewers see the queue and approve/reject.
//   • Approving a resource publishes it live to public.resources.
// AI may co-author, but a named human is always accountable (user_id).
// ============================================

const sbClient = () => (window.SG && window.SG.sb) || null;
const RESOURCE_KINDS = ['article', 'video', 'book', 'course', 'podcast', 'tool', 'primary_source'];

const STATUS_TONE = {
  pending: { c: 'oklch(72% 0.13 80)', label: 'pending review' },
  approved: { c: 'oklch(64% 0.15 150)', label: 'approved' },
  merged: { c: 'oklch(64% 0.15 150)', label: 'published' },
  rejected: { c: 'oklch(60% 0.16 25)', label: 'declined' },
  withdrawn: { c: 'oklch(60% 0.02 250)', label: 'withdrawn' },
};

const StatusBadge = ({ status }) => {
  const t = STATUS_TONE[status] || STATUS_TONE.pending;
  return (
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.04em',
      color: t.c, border: `1px solid ${t.c}`, borderRadius: 999, padding: '2px 9px', whiteSpace: 'nowrap' }}>
      {t.label}
    </span>
  );
};

async function insertContribution(row) {
  const sb = sbClient();
  if (!sb) throw new Error('Not connected to the server.');
  const { error } = await sb.from('contributions').insert(row);
  if (error) throw new Error(error.message || 'Could not submit.');
}

// ---------- The contribute modal (propose edit | add resource) ----------
const ContributeModal = ({ topicId, topicName, user, onClose }) => {
  const [tab, setTab] = React.useState('edit'); // 'edit' | 'resource'
  const [status, setStatus] = React.useState('idle'); // idle | saving | done
  const [err, setErr] = React.useState('');
  const [note, setNote] = React.useState('');
  const [rKind, setRKind] = React.useState('article');
  const [rTitle, setRTitle] = React.useState('');
  const [rUrl, setRUrl] = React.useState('');
  const [rWhy, setRWhy] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    setErr(''); setStatus('saving');
    try {
      if (tab === 'edit') {
        if (note.trim().length < 8) throw new Error('Describe your suggested change in a sentence or two.');
        await insertContribution({
          user_id: user.id, kind: 'correction', target_table: 'topics', target_id: topicId,
          payload: { note: note.trim(), topic: topicName }, status: 'pending', ai_assisted: false,
        });
      } else {
        if (rTitle.trim().length < 2) throw new Error('Add a title for the resource.');
        if (!/^https?:\/\/.+\..+/.test(rUrl.trim())) throw new Error('Enter a valid URL (https://…).');
        await insertContribution({
          user_id: user.id, kind: 'resource', target_table: 'resources', target_id: topicId,
          payload: { kind: rKind, title: rTitle.trim(), url: rUrl.trim(), why: rWhy.trim(), topic: topicName },
          status: 'pending', ai_assisted: false,
        });
      }
      setStatus('done');
    } catch (e2) { setStatus('idle'); setErr(e2.message); }
  };

  const inputStyle = {
    width: '100%', padding: '11px 13px', fontSize: 14, fontFamily: 'Inter Tight, sans-serif',
    borderRadius: 9, border: '1px solid rgba(120,90,60,0.32)', background: 'rgba(255,255,255,0.7)',
    color: 'var(--ink, #2a1a0a)', outline: 'none', boxSizing: 'border-box',
  };

  return (
    <div className="sg-modal-backdrop" onMouseDown={onClose}>
      <div className="sg-signin-card sg-signin-card-modal" onMouseDown={(e) => e.stopPropagation()} style={{ maxWidth: 520 }}>
        <button className="ws-x sg-modal-x" onClick={onClose} aria-label="Close">✕</button>

        {status === 'done' ? (
          <div style={{ textAlign: 'center', padding: '12px 4px' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', margin: '0 auto 16px', display: 'grid', placeItems: 'center', background: 'oklch(64% 0.15 150)', color: '#fff', fontSize: 24 }}>✓</div>
            <h1 className="sg-signin-h1" style={{ fontSize: 28 }}>Thank you.</h1>
            <p className="sg-signin-sub">
              Your contribution is in the review queue. A reviewer will take a look. You can track it under
              <strong> Profile → My contributions</strong>.
            </p>
            <button className="sg-btn sg-btn-demo" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 4, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3, #8a7a6a)' }}>
              Contribute to the commons
            </div>
            <h1 className="sg-signin-h1" style={{ fontSize: 28, marginBottom: 4 }}>{topicName}</h1>
            <p className="sg-signin-sub" style={{ marginBottom: 14 }}>
              Help make this better for the next person. Every contribution is reviewed by a human and credited to you.
            </p>

            <div className="sg-modal-tabs" style={{ marginBottom: 14 }}>
              <button className={tab === 'edit' ? 'on' : ''} onClick={() => setTab('edit')}>Suggest an edit</button>
              <button className={tab === 'resource' ? 'on' : ''} onClick={() => setTab('resource')}>Add a resource</button>
            </div>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {tab === 'edit' ? (
                <textarea
                  autoFocus rows={5} placeholder="What's wrong, missing, or could be clearer? Be specific — cite a source if you can."
                  value={note} onChange={(e) => setNote(e.target.value)} style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                />
              ) : (
                <>
                  <select value={rKind} onChange={(e) => setRKind(e.target.value)} style={inputStyle}>
                    {RESOURCE_KINDS.map((k) => <option key={k} value={k}>{k.replace('_', ' ')}</option>)}
                  </select>
                  <input autoFocus placeholder="Title" value={rTitle} onChange={(e) => setRTitle(e.target.value)} style={inputStyle}/>
                  <input placeholder="https://…" value={rUrl} onChange={(e) => setRUrl(e.target.value)} style={inputStyle}/>
                  <input placeholder="Why it belongs here (one line)" value={rWhy} onChange={(e) => setRWhy(e.target.value)} style={inputStyle}/>
                </>
              )}
              {err && <div style={{ fontSize: 13, color: 'oklch(55% 0.18 25)' }}>{err}</div>}
              <button className="sg-btn sg-btn-google" type="submit" disabled={status === 'saving'}>
                {status === 'saving' ? <><span className="sg-spinner"/>Submitting…</> : <>Submit for review</>}
              </button>
              <div className="sg-signin-legal">
                Submitted as <strong>{user.email}</strong>. Contributions are licensed CC BY-SA 4.0.
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
window.ContributeModal = ContributeModal;

// ---------- Floating "Contribute" button (lesson pages) ----------
const ContributeFab = ({ topicId, topicName, user }) => {
  const [open, setOpen] = React.useState(false);
  const onClick = () => {
    if (!user) { window.__openSignIn && window.__openSignIn(); return; }
    setOpen(true);
  };
  return (
    <>
      <button
        onClick={onClick}
        title="Suggest an edit or add a resource"
        style={{
          position: 'fixed', left: 22, bottom: 22, zIndex: 60,
          display: 'inline-flex', alignItems: 'center', gap: 7,
          padding: '10px 16px', borderRadius: 999, cursor: 'pointer',
          fontFamily: 'Inter Tight, sans-serif', fontSize: 14, fontWeight: 600,
          color: '#fff', background: 'oklch(55% 0.13 35)', border: 'none',
          boxShadow: '0 6px 20px rgba(120,60,20,0.28)',
        }}
      >
        ✎ Contribute
      </button>
      {open && <ContributeModal topicId={topicId} topicName={topicName} user={user} onClose={() => setOpen(false)}/>}
    </>
  );
};
window.ContributeFab = ContributeFab;

// ---------- Shared page shell ----------
const ContribShell = ({ title, kicker, children, onNav }) => (
  <div style={{ maxWidth: 760, margin: '40px auto 80px', padding: '0 24px', fontFamily: 'Inter Tight, sans-serif', color: 'var(--ink, #2a1a0a)' }}>
    <button className="sg-btn sg-btn-demo" style={{ width: 'auto', padding: '6px 14px', marginBottom: 20 }} onClick={() => onNav({ page: 'atlas' })}>← Atlas</button>
    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3, #8a7a6a)', marginBottom: 8 }}>{kicker}</div>
    <h1 style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 42, lineHeight: 1.05, margin: '0 0 24px' }}>{title}</h1>
    {children}
  </div>
);

const ContribCard = ({ row, children }) => {
  const p = row.payload || {};
  return (
    <div style={{ border: '1px solid rgba(120,90,60,0.2)', borderRadius: 12, padding: 16, marginBottom: 12, background: 'var(--paper-2, rgba(255,255,255,0.5))' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-3, #8a7a6a)' }}>
          {row.kind === 'resource' ? `add ${p.kind || 'resource'}` : 'suggest edit'} · {p.topic || row.target_id}
        </span>
        <StatusBadge status={row.status}/>
      </div>
      {row.kind === 'resource'
        ? <div><div style={{ fontWeight: 600 }}>{p.title}</div>
            {p.url && <a href={p.url} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: 'oklch(50% 0.12 240)', wordBreak: 'break-all' }}>{p.url}</a>}
            {p.why && <div style={{ fontSize: 14, color: 'var(--ink-2, #5a4a3a)', marginTop: 4 }}>{p.why}</div>}</div>
        : <div style={{ fontSize: 15, lineHeight: 1.5 }}>{p.note}</div>}
      {children}
    </div>
  );
};

// ---------- My contributions ----------
const MyContributionsPage = ({ user, onNav }) => {
  const [rows, setRows] = React.useState(null);
  React.useEffect(() => {
    const sb = sbClient();
    if (!sb || !user) { setRows([]); return; }
    sb.from('contributions').select('*').order('created_at', { ascending: false })
      .then(({ data }) => setRows(data || []));
  }, [user]);
  return (
    <ContribShell title="My contributions" kicker="What you've given back" onNav={onNav}>
      {rows === null && <p style={{ color: 'var(--ink-3, #8a7a6a)' }}>Loading…</p>}
      {rows && rows.length === 0 && (
        <p style={{ color: 'var(--ink-2, #5a4a3a)', fontSize: 16 }}>
          Nothing yet. Open any lesson and hit <strong>✎ Contribute</strong> to suggest an edit or add a resource.
        </p>
      )}
      {rows && rows.map((r) => <ContribCard key={r.id} row={r}/>)}
    </ContribShell>
  );
};
window.MyContributionsPage = MyContributionsPage;

// ---------- Review queue (academic+ reviewers) ----------
const ReviewQueuePage = ({ user, onNav }) => {
  const isReviewer = user && (user.trustTier === 'academic' || user.trustTier === 'expert');
  const [rows, setRows] = React.useState(null);
  const [busy, setBusy] = React.useState(null);

  const load = React.useCallback(() => {
    const sb = sbClient();
    if (!sb) { setRows([]); return; }
    sb.from('contributions').select('*').eq('status', 'pending').order('created_at', { ascending: true })
      .then(({ data }) => setRows(data || []));
  }, []);
  React.useEffect(() => { load(); }, [load, user]);

  const decide = async (row, verdict) => {
    const sb = sbClient();
    if (!sb) return;
    setBusy(row.id);
    try {
      // Publish an approved resource live to the commons.
      if (verdict === 'approve' && row.kind === 'resource') {
        const p = row.payload || {};
        await sb.from('resources').insert({
          topic_id: row.target_id, kind: p.kind || 'article', title: p.title, url: p.url,
          payload: { why: p.why, contributed_by: row.user_id }, status: 'published',
        });
      }
      await sb.from('contributions').update({
        status: verdict === 'approve' ? (row.kind === 'resource' ? 'merged' : 'approved') : 'rejected',
        decided_by: user.id, decided_at: new Date().toISOString(),
      }).eq('id', row.id);
      await sb.from('reviews').insert({ contribution_id: row.id, reviewer_id: user.id, verdict });
      load();
    } catch (e) {
      alert('Could not record decision: ' + (e.message || e));
    } finally { setBusy(null); }
  };

  if (!isReviewer) {
    return (
      <ContribShell title="Review queue" kicker="Reviewers only" onNav={onNav}>
        <p style={{ color: 'var(--ink-2, #5a4a3a)', fontSize: 16, lineHeight: 1.6 }}>
          Reviewing contributions is open to <strong>academic-tier</strong> members — verified via ORCID or an
          institutional (<code>.edu</code>) email. Verify your academic identity to help steward the commons.
        </p>
      </ContribShell>
    );
  }
  return (
    <ContribShell title="Review queue" kicker={`${rows ? rows.length : '…'} awaiting review`} onNav={onNav}>
      {rows === null && <p style={{ color: 'var(--ink-3, #8a7a6a)' }}>Loading…</p>}
      {rows && rows.length === 0 && <p style={{ color: 'var(--ink-2, #5a4a3a)', fontSize: 16 }}>Queue's clear. 🎉</p>}
      {rows && rows.map((r) => (
        <ContribCard key={r.id} row={r}>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button className="sg-btn sg-btn-google" style={{ width: 'auto', padding: '7px 16px' }} disabled={busy === r.id} onClick={() => decide(r, 'approve')}>
              {busy === r.id ? '…' : (r.kind === 'resource' ? 'Approve & publish' : 'Approve')}
            </button>
            <button className="sg-btn sg-btn-demo" style={{ width: 'auto', padding: '7px 16px' }} disabled={busy === r.id} onClick={() => decide(r, 'reject')}>
              Decline
            </button>
          </div>
        </ContribCard>
      ))}
    </ContribShell>
  );
};
window.ReviewQueuePage = ReviewQueuePage;

Object.assign(window, { ContributeModal, ContributeFab, MyContributionsPage, ReviewQueuePage });
