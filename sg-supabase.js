// sg-supabase.js
// Initializes the browser Supabase client as window.SG.sb — the single client
// the app (auth.jsx and future data-layer code) reads. Loaded after the
// supabase-js UMD bundle and sg-config.js, before the app bundle.
(function () {
  var cfg = window.SG_CONFIG || {};
  window.SG = window.SG || {};
  if (window.supabase && cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY) {
    window.SG.sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true, // completes the magic-link redirect on load
      },
    });
  } else {
    console.warn('[SG] Supabase client not initialized — missing window.supabase or SG_CONFIG.');
  }
})();
