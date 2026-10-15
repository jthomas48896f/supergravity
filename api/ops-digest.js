// api/ops-digest.js
// Autonomous daily ops digest — NO LLM, no desktop app, runs on Vercel Cron.
// Queries Supabase, writes a report row, and (if RESEND_API_KEY is set) emails Josh.
//
// Env: SUPABASE_SERVICE_ROLE_KEY (required), CRON_SECRET (recommended),
//      RESEND_API_KEY (optional), OPS_EMAIL (default jteducates@gmail.com)

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://syzikkyqciqjwbsutykn.supabase.co';

async function count(table, key, filters = '') {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=id${filters}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}`, Prefer: 'count=exact', Range: '0-0' },
  });
  const cr = r.headers.get('content-range');
  return cr ? parseInt(cr.split('/')[1], 10) || 0 : 0;
}

module.exports = async (req, res) => {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers['authorization'] !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) return res.status(500).json({ error: 'not configured' });

  const dayAgo = new Date(Date.now() - 864e5).toISOString();
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString();
  const enc = encodeURIComponent;

  const [
    users, users24, sales, sales24, sales7d, fam,
    pricing24, paywall24, checkout24, landing24,
  ] = await Promise.all([
    count('profiles', key),
    count('profiles', key, `&created_at=gte.${enc(dayAgo)}`),
    count('entitlements', key),
    count('entitlements', key, `&created_at=gte.${enc(dayAgo)}`),
    count('entitlements', key, `&created_at=gte.${enc(weekAgo)}`),
    count('entitlements', key, `&plan=eq.family`),
    count('events', key, `&kind=eq.pricing_view&created_at=gte.${enc(dayAgo)}`),
    count('events', key, `&kind=eq.paywall_view&created_at=gte.${enc(dayAgo)}`),
    count('events', key, `&kind=eq.checkout_click&created_at=gte.${enc(dayAgo)}`),
    count('events', key, `&kind=eq.landing_view&created_at=gte.${enc(dayAgo)}`),
  ]);

  const revenue = (sales - fam) * 59 + fam * 99; // gross, founder pricing
  const founderLeft = Math.max(0, 500 - sales);
  const pct = (a, b) => (b ? ((100 * a) / b).toFixed(1) + '%' : '—');

  const day = new Date().toISOString().slice(0, 10);
  const alerts = [];
  if (sales7d === 0 && sales > 0) alerts.push('NO SALES IN 7 DAYS');
  if (paywall24 > 50 && checkout24 === 0) alerts.push('PAYWALL TRAFFIC BUT ZERO CHECKOUT CLICKS — FUNNEL LEAK');

  const body = [
    `# Supergravity daily digest — ${day}`,
    alerts.length ? `\n**${alerts.join(' · ')}**\n` : '',
    `## Money`,
    `- Lifetime sales: **${sales}** total (${sales24} last 24h, ${sales7d} last 7d) — ~$${revenue.toLocaleString()} gross`,
    `- Founder-500 remaining: **${founderLeft}**`,
    `## Funnel (24h)`,
    `- Landing views: ${landing24} · Pricing views: ${pricing24} · Paywall hits: ${paywall24}`,
    `- Checkout clicks: ${checkout24} (${pct(checkout24, paywall24 + pricing24)} of pricing+paywall)`,
    `- New signups: ${users24} (total ${users}) · Purchases: ${sales24} (${pct(sales24, checkout24)} of clicks)`,
    `## Today's one action`,
    `- ${sales24 === 0 ? 'Zero sales yesterday: fire one distribution shot (see ops/01-marketing-launch.md calendar) before touching code.' : 'Sales are moving: reply to every comment on live posts, then one new distribution shot.'}`,
  ].join('\n');

  const metrics = { users, users24, sales, sales24, sales7d, revenue, pricing24, paywall24, checkout24, landing24 };

  await fetch(`${SUPABASE_URL}/rest/v1/ops_reports?on_conflict=day`, {
    method: 'POST',
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates' },
    body: JSON.stringify({ day, body, metrics }),
  });

  if (process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Supergravity Ops <onboarding@resend.dev>',
        to: [process.env.OPS_EMAIL || 'jteducates@gmail.com'],
        subject: `SG digest ${day}: ${sales24} sale${sales24 === 1 ? '' : 's'}, ${checkout24} checkout clicks${alerts.length ? ' — ALERT' : ''}`,
        text: body,
      }),
    }).catch(() => {});
  }

  return res.status(200).json({ ok: true, day, metrics });
};
