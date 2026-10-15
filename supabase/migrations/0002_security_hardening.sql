-- ═══════════════════════════════════════════════════════════════════════════
-- Migration 0002: Security hardening (clears Supabase security-advisor WARNs)
--
--   • Pin search_path on the trigger functions (set_updated_at, guard_profile_privileges).
--   • current_trust_tier()/is_reviewer() only read the publicly-readable profiles
--     table, so SECURITY INVOKER is sufficient — and removes the "definer is
--     publicly executable" exposure. (RLS still works: callers can read profiles.)
--   • handle_new_user() must stay SECURITY DEFINER (it inserts a profile bypassing
--     RLS during the auth signup trigger), but it should never be callable via the
--     REST RPC API — revoke EXECUTE from the API roles. Trigger invocation is
--     unaffected by the revoke.
-- ═══════════════════════════════════════════════════════════════════════════

alter function public.set_updated_at() set search_path = '';
alter function public.guard_profile_privileges() set search_path = '';

create or replace function public.current_trust_tier()
returns trust_tier language plpgsql stable security invoker set search_path = public as $$
declare t trust_tier;
begin
  select trust_tier into t from public.profiles where id = auth.uid();
  return coalesce(t, 'unverified'::trust_tier);
end $$;

create or replace function public.is_reviewer()
returns boolean language plpgsql stable security invoker set search_path = public as $$
declare t trust_tier;
begin
  select trust_tier into t from public.profiles where id = auth.uid();
  return coalesce(t >= 'academic'::trust_tier, false);
end $$;

-- Revoke from PUBLIC (anon/authenticated inherit EXECUTE via the default PUBLIC
-- grant, so revoking from them individually isn't enough).
revoke execute on function public.handle_new_user() from public;
