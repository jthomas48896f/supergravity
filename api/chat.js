// Vercel serverless function — hardened OpenAI proxy.
// Keeps OPENAI_API_KEY server-side; the browser never sees it.
// Shared protections live in ../lib/proxy-guard.js (also used by the Netlify fn).
// Accepts: POST { messages, model?, max_tokens?, system? }
// Returns: { completion, content:[{text}] } or { error }.

import {
  corsHeaders, originAllowed, appCheckOk, verifyAuth,
  rateLimit, validate, hashIp, clientIp,
} from '../lib/proxy-guard.js';

export default async function handler(req, res) {
  const origin = req.headers.origin;
  const headers = corsHeaders(origin);
  for (const [k, v] of Object.entries(headers)) res.setHeader(k, v);

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!originAllowed(origin)) return res.status(403).json({ error: 'Origin not allowed' });
  if (!appCheckOk(req.headers)) return res.status(403).json({ error: 'App check failed' });

  const auth = verifyAuth(req.headers.authorization);
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

  const key = auth.userId || hashIp(clientIp(req.headers));
  const rl = rateLimit(key);
  if (!rl.ok) {
    res.setHeader('Retry-After', String(rl.retryAfter));
    return res.status(429).json({ error: 'Rate limit exceeded. Please slow down.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(503).json({ error: 'API key not configured on server.' });

  const v = validate(req.body);
  if (!v.ok) return res.status(v.status).json({ error: v.error });

  const openaiMessages = [];
  if (v.clean.system) openaiMessages.push({ role: 'system', content: v.clean.system });
  openaiMessages.push(...v.clean.messages);

  try {
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        model: v.clean.model,
        max_tokens: v.clean.max_tokens,
        messages: openaiMessages,
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '');
      return res.status(upstream.status).json({ error: `OpenAI ${upstream.status}: ${text.slice(0, 200)}` });
    }

    const data = await upstream.json();
    const completion = data.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ completion, content: [{ text: completion }] });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
}
