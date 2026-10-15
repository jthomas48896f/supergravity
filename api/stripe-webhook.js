// api/stripe-webhook.js
// Stripe → Supabase entitlements. Zero dependencies (raw HMAC verification).
//
// Env vars required (Vercel project settings):
//   STRIPE_WEBHOOK_SECRET      whsec_... (from the webhook endpoint in Stripe)
//   SUPABASE_SERVICE_ROLE_KEY  service_role key (Supabase → Settings → API)
//   SUPABASE_URL               optional; defaults to the project URL below.
//
// Stripe setup (one-time, in the dashboard):
//   1. Create two Payment Links: $59 (metadata plan=lifetime), $99 (metadata plan=family).
//      Set the after-payment redirect to https://<site>/?purchased=1
//   2. Add a webhook endpoint: https://<site>/api/stripe-webhook
//      listening to `checkout.session.completed`. Copy its signing secret to env.

const crypto = require('crypto');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://syzikkyqciqjwbsutykn.supabase.co';

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function verifyStripeSignature(payload, header, secret, toleranceSec = 300) {
  if (!header) return false;
  const parts = Object.fromEntries(header.split(',').map((kv) => kv.split('=')));
  const t = parts.t;
  const v1 = parts.v1;
  if (!t || !v1) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > toleranceSec) return false;
  const expected = crypto.createHmac('sha256', secret).update(`${t}.${payload}`).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(v1, 'hex'));
  } catch {
    return false;
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret || !serviceKey) return res.status(500).json({ error: 'webhook not configured' });

  const raw = await readRawBody(req);
  if (!verifyStripeSignature(raw.toString('utf8'), req.headers['stripe-signature'], secret)) {
    return res.status(400).json({ error: 'bad signature' });
  }

  let event;
  try { event = JSON.parse(raw.toString('utf8')); } catch { return res.status(400).json({ error: 'bad payload' }); }

  if (event.type !== 'checkout.session.completed') return res.status(200).json({ received: true });

  const s = event.data && event.data.object;
  const email = (s && (s.customer_details?.email || s.customer_email) || '').trim().toLowerCase();
  if (!email) return res.status(200).json({ received: true, note: 'no email on session' });

  const plan =
    (s.metadata && s.metadata.plan) ||
    (s.amount_total >= 9900 ? 'family' : 'lifetime');

  const resp = await fetch(`${SUPABASE_URL}/rest/v1/entitlements?on_conflict=stripe_session_id`, {
    method: 'POST',
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates',
    },
    body: JSON.stringify({
      email,
      plan,
      source: 'stripe',
      stripe_session_id: s.id,
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    console.error('entitlement insert failed', resp.status, text);
    return res.status(500).json({ error: 'insert failed' });
  }

  return res.status(200).json({ received: true });
};
