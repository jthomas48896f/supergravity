// lib/proxy-guard.js
// ─────────────────────────────────────────────────────────────────────────────
// Shared hardening for the OpenAI proxy. Imported by BOTH:
//   • api/chat.js                 (Vercel serverless)
//   • netlify/functions/chat.js   (Netlify function)
//
// Phase-0 protections (this file):
//   • Origin allowlist (blocks other websites from spending your tokens via a
//     victim's browser).
//   • Strict input + size caps and a model allowlist (bounds the cost of any
//     single request — the highest-leverage abuse mitigation).
//   • Best-effort in-memory rate limiting per caller key.
//   • Optional app-check header (a speed bump against trivial curl/bots).
//   • An auth hook (verifyAuth), OFF by default.
//
// LIMITATIONS: the in-memory limiter is PER-INSTANCE and resets on cold start —
// it is a speed bump, not a guarantee. Phase 1 replaces it with Supabase-backed
// per-user quotas (see the `ai_usage` table) and turns on real JWT verification
// in verifyAuth(). Until then, the request caps are what actually bound spend.
// ─────────────────────────────────────────────────────────────────────────────

import crypto from 'node:crypto';

// ── Config (env-overridable) ──────────────────────────────────────────────────
const DEFAULT_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://american-desi.github.io',
  'https://project-qj81t.vercel.app',
];

export function allowedOrigins() {
  const extra = (process.env.SG_ALLOWED_ORIGINS || '')
    .split(',').map((s) => s.trim()).filter(Boolean);
  return new Set([...DEFAULT_ORIGINS, ...extra]);
}

export const ALLOWED_MODELS = new Set(
  (process.env.SG_ALLOWED_MODELS || 'gpt-4o-mini')
    .split(',').map((s) => s.trim()).filter(Boolean),
);

export const LIMITS = {
  maxMessages: num(process.env.SG_MAX_MESSAGES, 40),
  maxChars: num(process.env.SG_MAX_CHARS, 24000), // total content chars across messages + system
  maxTokens: num(process.env.SG_MAX_TOKENS, 1024), // hard cap on completion tokens
  perMinute: num(process.env.SG_RL_PER_MIN, 15),
  perHour: num(process.env.SG_RL_PER_HOUR, 120),
};

function num(v, d) { const n = Number(v); return Number.isFinite(n) && n > 0 ? n : d; }

// ── CORS ──────────────────────────────────────────────────────────────────────
export function corsHeaders(origin) {
  const ok = origin && allowedOrigins().has(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-SG-App',
    Vary: 'Origin',
    'Content-Type': 'application/json',
  };
}

// A browser request carries an Origin header; a server/curl request usually does
// not. We allow no-origin (so the enrichment pipeline and health checks work) but
// rely on the rate limiter + request caps to bound that path.
export function originAllowed(origin) {
  if (!origin) return true;
  return allowedOrigins().has(origin);
}

// ── App-check (optional speed bump) ───────────────────────────────────────────
export function appCheckOk(headers = {}) {
  const required = process.env.SG_APP_TOKEN;
  if (!required) return true;
  const got = headers['x-sg-app'] || headers['X-SG-App'];
  return got === required;
}

// ── Auth hook (OFF by default; wired up in Phase 1) ───────────────────────────
export function verifyAuth(authHeader) {
  if (!process.env.SG_REQUIRE_AUTH) return { ok: true, userId: null };
  const token = String(authHeader || '').replace(/^Bearer\s+/i, '').trim();
  if (!token) return { ok: false, status: 401, error: 'Authentication required' };
  // TODO(phase-1): verify HS256 JWT against process.env.SUPABASE_JWT_SECRET and
  // return the `sub` claim as userId so the limiter + ai_usage key on the user.
  return { ok: true, userId: null };
}

// ── Rate limiting (interim, in-memory, per-instance) ──────────────────────────
const hits = new Map(); // key -> sorted number[] of request timestamps (ms)

export function rateLimit(key) {
  const now = Date.now();
  const arr = hits.get(key) || [];
  // drop anything older than an hour
  let i = 0;
  while (i < arr.length && now - arr[i] > 3_600_000) i++;
  if (i) arr.splice(0, i);

  const lastMinute = arr.reduce((c, t) => c + (now - t < 60_000 ? 1 : 0), 0);
  if (lastMinute >= LIMITS.perMinute) { hits.set(key, arr); return { ok: false, retryAfter: 60 }; }
  if (arr.length >= LIMITS.perHour) { hits.set(key, arr); return { ok: false, retryAfter: 600 }; }

  arr.push(now);
  hits.set(key, arr);

  // opportunistic memory bound so a flood of unique keys can't grow unbounded
  if (hits.size > 5000) {
    for (const k of hits.keys()) { if (hits.size <= 4000) break; hits.delete(k); }
  }
  return { ok: true };
}

// ── Input validation ──────────────────────────────────────────────────────────
const ROLES = new Set(['system', 'user', 'assistant']);

export function validate(body) {
  if (!body || typeof body !== 'object') {
    return { ok: false, status: 400, error: 'JSON body required' };
  }
  const { messages, model, max_tokens, system } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return { ok: false, status: 400, error: 'messages array required' };
  }
  if (messages.length > LIMITS.maxMessages) {
    return { ok: false, status: 400, error: `Too many messages (max ${LIMITS.maxMessages})` };
  }

  let total = 0;
  for (const m of messages) {
    if (!m || typeof m !== 'object' || !ROLES.has(m.role) || typeof m.content !== 'string') {
      return { ok: false, status: 400, error: 'Each message must be { role, content:string }' };
    }
    total += m.content.length;
  }
  if (typeof system === 'string') total += system.length;
  if (total > LIMITS.maxChars) {
    return { ok: false, status: 413, error: `Payload too large (max ${LIMITS.maxChars} chars)` };
  }

  const useModel = model || 'gpt-4o-mini';
  if (!ALLOWED_MODELS.has(useModel)) {
    return { ok: false, status: 400, error: `Model not allowed: ${useModel}` };
  }

  const cap = Math.min(num(max_tokens, LIMITS.maxTokens), LIMITS.maxTokens);
  return {
    ok: true,
    clean: {
      messages,
      system: typeof system === 'string' ? system : undefined,
      model: useModel,
      max_tokens: cap,
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
export function hashIp(ip) {
  return ip ? crypto.createHash('sha256').update(String(ip)).digest('hex').slice(0, 16) : 'noip';
}

export function clientIp(headers = {}) {
  const fwd = headers['x-forwarded-for'] || headers['X-Forwarded-For'] || headers['client-ip'] || '';
  return String(fwd).split(',')[0].trim();
}
