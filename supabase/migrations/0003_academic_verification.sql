-- ═══════════════════════════════════════════════════════════════════════════
-- Migration 0003: Academic-email auto-verification
--
-- The "human, not bots" backbone leans on academic identity. An academic email
-- domain (.edu, .ac.<cc>, .edu.<cc>) is hard to mass-fake and is exactly the
-- target audience — so a new sign-up from such a domain is auto-granted the
-- 'academic' trust tier (can author, add resources, and review the queue).
-- Everyone else starts 'verified'. ORCID (gold standard) comes later via OAuth.
--
-- NOTE: reviewing is gated to academic+ (see is_reviewer). As the platform
-- scales you may want to raise that bar (expert-only, or academic + reputation).
-- ═══════════════════════════════════════════════════════════════════════════

create or replace function public.is_academic_email(email text)
returns boolean language sql stable set search_path = public as $$
  select lower(split_part(coalesce(email, ''), '@', 2))
         ~ '(\.edu$)|(\.ac\.[a-z]{2,3}$)|(\.edu\.[a-z]{2,3}$)';
$$;

create or replace function public.academic_tier_for_email(email text)
returns trust_tier language sql stable set search_path = public as $$
  select case when public.is_academic_email(email)
              then 'academic'::trust_tier
              else 'verified'::trust_tier end;
$$;

-- Internal helpers — not part of the public REST RPC surface.
revoke execute on function public.is_academic_email(text) from public;
revoke execute on function public.academic_tier_for_email(text) from public;

-- Recreate the signup trigger to set tier + edu_verified from the email domain.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare tier trust_tier;
begin
  tier := public.academic_tier_for_email(new.email);
  insert into public.profiles (id, handle, display_name, trust_tier, edu_verified)
  values (
    new.id,
    split_part(coalesce(new.email, 'user'), '@', 1) || '-' || substr(new.id::text, 1, 6),
    coalesce(new.raw_user_meta_data->>'name', split_part(coalesce(new.email, 'user'), '@', 1)),
    tier,
    (tier = 'academic')
  )
  on conflict (id) do nothing;
  return new;
end $$;

revoke execute on function public.handle_new_user() from public;
