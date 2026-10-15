// api/claim.js
// Self-serve purchase claim — kills the #1 support ticket (purchase email ≠ sign-in email).
// Payment Link redirects to /?purchased=1&session_id={CHECKOUT_SESSION_ID}; the client
// posts that session_id here with the signed-in user's token. We verify the session is
// PAID directly with Stripe, then bind the entitlement to the signed-in account.
//
// Env: STRIPE_SECRET_KEY, SUPABASE_SERVICE_ROLE_KEY

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://syzikkyqciqjwbsutykn.supabase.co';

function readBody(req) {
  return new Promise((resolve) => {
    let d = '';
    req.on('data', (c) => (d += c));
    req.on('end', () => { try { resolve(JSON.parse(d)); } catch { resolve({}); } });
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!stripeKey || !serviceKey) return res.status(500).json({ error: 'not configured' });

  const { session_id } = await readBody(req);
  if (!session_id || !/^cs_[A-Za-z0-9_]+$/.test(session_id)) {
    return res.status(400).json({ error: 'bad session id' });
  }

  // Who is signed in? (optional — claim still records by purchase email without it)
  let user = null;
  const token = (req.headers['authorization'] || '').replace(/^Bearer /, '');
  if (token) {
    const ur = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: { apikey: serviceKey, Authorization: `Bearer ${token}` },
    });
    if (ur.ok) user = await ur.json();
  }

  // Verify with Stripe directly — the session id alone proves nothing until we check paid.
  const sr = await fetch(`https://api.stripe.com/v1/checkout/sessions/${session_id}`, {
    headers: { Authorization: `Bearer ${stripeKey}` },
  });
  if (!sr.ok) return res.status(400).json({ error: 'unknown session' });
  const s = await sr.json();
  if (s.payment_status !== 'paid') return res.status(402).json({ error: 'not paid' });

  const email = ((s.customer_details && s.customer_details.email) || s.customer_email || '').toLowerCase();
  const plan = (s.metadata && s.metadata.plan) || (s.amount_total >= 9900 ? 'family' : 'lifetime');

  const ir = await fetch(`${SUPABASE_URL}/rest/v1/entitlements?on_conflict=stripe_session_id`, {
    method: 'POST',
    headers: {
      apikey: serviceKey, Authorization: `Bearer ${serviceKey}`,
      'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates',
    },
    body: JSON.stringify({
      email: email || (user && user.email) || 'unknown',
      user_id: user ? user.id : null,
      plan, source: 'stripe', stripe_session_id: s.id,
    }),
  });
  if (!ir.ok) return res.status(500).json({ error: 'claim failed' });

  return res.status(200).json({ ok: true, plan, bound_to_account: !!user });
};
