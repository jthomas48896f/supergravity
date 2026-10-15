-- ═══════════════════════════════════════════════════════════════════════════
-- Atlas of Everything
-- Migration 0001: Foundation
--
-- Turns the static, single-author content site into a people-powered commons:
--   • Identity with tiered trust (the "human, not bots" backbone)
--   • A knowledge graph (subjects → topics → revisions, resources)
--   • Per-claim provenance with independence grouping (the epistemic moat)
--   • A contribution + peer-review ledger (propose → review → merge)
--   • Reputation + moderation
--   • A personal layer (cloud Workshop notes, collections, spaced repetition)
--   • AI usage accounting (Phase-1 backbone for per-user proxy quotas)
--
-- Apply ONCE to a fresh Supabase project. RLS policies here are a sane starting
-- point — review the write/tier gates against your moderation model before
-- opening contribution to the public.
-- ═══════════════════════════════════════════════════════════════════════════

create extension if not exists pgcrypto;

-- ── Enums ──────────────────────────────────────────────────────────────────
-- trust_tier is ORDERED on purpose: 'unverified' < 'verified' < 'academic' < 'expert'.
-- Postgres compares enums by declaration order, so policies can say
-- `current_trust_tier() >= 'academic'`.
do $$ begin
  create type trust_tier as enum ('unverified','verified','academic','expert');
exception when duplicate_object then null; end $$;

do $$ begin
  create type content_status as enum ('draft','review','published','archived');
exception when duplicate_object then null; end $$;

do $$ begin
  create type revision_status as enum ('proposed','approved','merged','rejected','superseded');
exception when duplicate_object then null; end $$;

do $$ begin
  create type contribution_kind as enum ('topic_create','topic_revision','resource','claim','source','correction','flag');
exception when duplicate_object then null; end $$;

do $$ begin
  create type contribution_status as enum ('pending','approved','rejected','merged','withdrawn');
exception when duplicate_object then null; end $$;

do $$ begin
  create type review_verdict as enum ('approve','reject','needs_work');
exception when duplicate_object then null; end $$;

do $$ begin
  create type resource_kind as enum ('video','book','article','course','podcast','tool','primary_source','image','animation');
exception when duplicate_object then null; end $$;

do $$ begin
  create type verification_method as enum ('email','phone','oauth_google','oauth_github','orcid','edu_sso','id_document','peer_vouch');
exception when duplicate_object then null; end $$;

do $$ begin
  create type visibility as enum ('private','unlisted','public');
exception when duplicate_object then null; end $$;

-- ── Helper functions (used in RLS policies) ────────────────────────────────
-- plpgsql (not sql) so the reference to public.profiles resolves at runtime,
-- letting these be created before the profiles table without an ordering error.
create or replace function public.current_trust_tier()
returns trust_tier language plpgsql stable security definer set search_path = public as $$
declare t trust_tier;
begin
  select trust_tier into t from public.profiles where id = auth.uid();
  return coalesce(t, 'unverified'::trust_tier);
end $$;

create or replace function public.is_reviewer()
returns boolean language plpgsql stable security definer set search_path = public as $$
declare t trust_tier;
begin
  select trust_tier into t from public.profiles where id = auth.uid();
  return coalesce(t >= 'academic'::trust_tier, false);
end $$;

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

-- ═══════════════════════════════════════════════════════════════════════════
-- IDENTITY & TRUST
-- ═══════════════════════════════════════════════════════════════════════════

create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  handle        text unique not null,
  display_name  text,
  avatar_url    text,
  bio           text,
  trust_tier    trust_tier not null default 'verified',  -- any signed-in human starts 'verified'
  reputation    integer not null default 0,
  orcid         text unique,
  edu_verified  boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
alter table public.profiles enable row level security;

create policy "profiles: public read"   on public.profiles for select using (true);
create policy "profiles: self update"    on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

-- Users may edit display_name/bio/avatar, but NOT promote their own tier/rep/orcid.
-- Those are system-managed (granted by the verification + reputation pipelines,
-- which run as service_role).
create or replace function public.guard_profile_privileges()
returns trigger language plpgsql as $$
begin
  if auth.role() = 'service_role' then return new; end if;
  new.trust_tier   := old.trust_tier;
  new.reputation   := old.reputation;
  new.orcid        := old.orcid;
  new.edu_verified := old.edu_verified;
  return new;
end $$;
create trigger profiles_guard before update on public.profiles
  for each row execute function public.guard_profile_privileges();
create trigger profiles_touch before update on public.profiles
  for each row execute function public.set_updated_at();

-- Auto-create a profile when a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, handle, display_name)
  values (
    new.id,
    split_part(coalesce(new.email,'user'),'@',1) || '-' || substr(new.id::text,1,6),
    coalesce(new.raw_user_meta_data->>'name', split_part(coalesce(new.email,'user'),'@',1))
  )
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

create table if not exists public.identity_verifications (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  method      verification_method not null,
  status      text not null default 'pending',
  detail      jsonb not null default '{}',
  verified_at timestamptz,
  created_at  timestamptz not null default now()
);
alter table public.identity_verifications enable row level security;
create policy "verifications: read own/reviewer" on public.identity_verifications
  for select using (auth.uid() = user_id or public.is_reviewer());
create policy "verifications: insert own" on public.identity_verifications
  for insert with check (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════════════════════
-- KNOWLEDGE GRAPH
-- ═══════════════════════════════════════════════════════════════════════════

create table if not exists public.subjects (
  id          text primary key,           -- e.g. 'cs'
  num         text,
  name        text not null,
  tag         text,
  description text,
  category    text,
  viz         text,
  hex         text,
  topic_count integer not null default 0,
  sort        integer not null default 0,
  created_at  timestamptz not null default now()
);
alter table public.subjects enable row level security;
create policy "subjects: public read"  on public.subjects for select using (true);
create policy "subjects: expert manage" on public.subjects for all
  using (public.current_trust_tier() >= 'expert'::trust_tier)
  with check (public.current_trust_tier() >= 'expert'::trust_tier);

create table if not exists public.topics (
  id                  text primary key,   -- e.g. 'programming'
  subject_id          text not null references public.subjects(id) on delete cascade,
  name                text not null,
  level               text,
  dek                 text,
  read_time           text,
  sections            jsonb not null default '[]',
  body                jsonb not null default '[]',   -- current rendered body (denormalized for fast read)
  key_terms           text[] not null default '{}',
  see_also            text[] not null default '{}',
  prereqs             text[] not null default '{}',
  leads_to            text[] not null default '{}',
  group_name          text,
  status              content_status not null default 'published',
  current_revision_id uuid,                            -- → topic_revisions.id (no FK: avoids circular dep)
  created_by          uuid references public.profiles(id),
  verified_at         timestamptz,
  sort                integer not null default 0,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
create index if not exists topics_subject_idx on public.topics(subject_id);
create index if not exists topics_status_idx  on public.topics(status);
alter table public.topics enable row level security;
create policy "topics: read published/own/reviewer" on public.topics for select
  using (status = 'published' or created_by = auth.uid() or public.is_reviewer());
create policy "topics: academic insert" on public.topics for insert
  with check (public.current_trust_tier() >= 'academic'::trust_tier);
create policy "topics: academic update" on public.topics for update
  using (public.current_trust_tier() >= 'academic'::trust_tier)
  with check (public.current_trust_tier() >= 'academic'::trust_tier);
create trigger topics_touch before update on public.topics
  for each row execute function public.set_updated_at();

create table if not exists public.topic_revisions (
  id              uuid primary key default gen_random_uuid(),
  topic_id        text not null references public.topics(id) on delete cascade,
  revision_number integer not null,
  body            jsonb not null,
  summary         text,
  author_id       uuid references public.profiles(id),
  ai_assisted     boolean not null default false,
  ai_model        text,
  status          revision_status not null default 'proposed',
  reviewed_by     uuid references public.profiles(id),
  reviewed_at     timestamptz,
  created_at      timestamptz not null default now(),
  unique (topic_id, revision_number)
);
create index if not exists revisions_topic_idx on public.topic_revisions(topic_id);
alter table public.topic_revisions enable row level security;
create policy "revisions: read merged/own/reviewer" on public.topic_revisions for select
  using (status in ('approved','merged','superseded') or author_id = auth.uid() or public.is_reviewer());
create policy "revisions: author propose" on public.topic_revisions for insert
  with check (auth.uid() = author_id);
create policy "revisions: reviewer decide" on public.topic_revisions for update
  using (public.is_reviewer()) with check (public.is_reviewer());

create table if not exists public.resources (
  id         uuid primary key default gen_random_uuid(),
  topic_id   text not null references public.topics(id) on delete cascade,
  kind       resource_kind not null,
  title      text,
  url        text,
  payload    jsonb not null default '{}',   -- author, channel, duration, why, credit, etc.
  status     content_status not null default 'published',
  added_by   uuid references public.profiles(id),
  sort       integer not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists resources_topic_idx on public.resources(topic_id);
alter table public.resources enable row level security;
create policy "resources: read published/reviewer" on public.resources for select
  using (status = 'published' or public.is_reviewer());
-- Resources are low-risk: any verified human can add one (defaults to 'review').
create policy "resources: verified add" on public.resources for insert
  with check (public.current_trust_tier() >= 'verified'::trust_tier);
create policy "resources: academic manage" on public.resources for update
  using (public.current_trust_tier() >= 'academic'::trust_tier)
  with check (public.current_trust_tier() >= 'academic'::trust_tier);

-- ═══════════════════════════════════════════════════════════════════════════
-- CLAIMS & PROVENANCE  (the differentiator nobody else shows learners)
-- ═══════════════════════════════════════════════════════════════════════════

create table if not exists public.sources (
  id          uuid primary key default gen_random_uuid(),
  url         text,
  title       text,
  source_type text,                          -- matches tools/source-weights.cjs BASE keys
  base_weight numeric(4,3),                   -- 0..1 reliability
  identifiers jsonb not null default '{}',    -- {doi, wikidata, isbn, orcid, ...}
  added_by    uuid references public.profiles(id),
  created_at  timestamptz not null default now()
);
alter table public.sources enable row level security;
create policy "sources: public read" on public.sources for select using (true);
create policy "sources: verified add" on public.sources for insert
  with check (public.current_trust_tier() >= 'verified'::trust_tier);

create table if not exists public.claims (
  id               uuid primary key default gen_random_uuid(),
  topic_id         text references public.topics(id) on delete set null,
  statement        text not null,
  confidence       numeric(4,3),              -- aggregated truth score
  confidence_label text,                      -- high | medium | low | unverified
  consensus_label  text,                      -- unanimous | broad | contested | disputed
  created_by       uuid references public.profiles(id),
  status           content_status not null default 'published',
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
create index if not exists claims_topic_idx on public.claims(topic_id);
alter table public.claims enable row level security;
create policy "claims: public read" on public.claims for select using (true);
create policy "claims: academic write" on public.claims for all
  using (public.current_trust_tier() >= 'academic'::trust_tier)
  with check (public.current_trust_tier() >= 'academic'::trust_tier);
create trigger claims_touch before update on public.claims
  for each row execute function public.set_updated_at();

-- Links claims ↔ sources. `independence_group` is the fix for the false-
-- independence flaw in the truth formula: sources that share a group (because
-- they trace to the same primary study) count ONCE in 1 − Π(1 − wᵢ) aggregation.
create table if not exists public.claim_sources (
  claim_id           uuid not null references public.claims(id) on delete cascade,
  source_id          uuid not null references public.sources(id) on delete cascade,
  corroborates       boolean not null default true,
  independence_group text,
  note               text,
  added_by           uuid references public.profiles(id),
  created_at         timestamptz not null default now(),
  primary key (claim_id, source_id)
);
alter table public.claim_sources enable row level security;
create policy "claim_sources: public read" on public.claim_sources for select using (true);
create policy "claim_sources: verified add" on public.claim_sources for insert
  with check (public.current_trust_tier() >= 'verified'::trust_tier);

-- ═══════════════════════════════════════════════════════════════════════════
-- CONTRIBUTION, REVIEW, REPUTATION, MODERATION
-- ═══════════════════════════════════════════════════════════════════════════

-- One ledger row per contribution. `ai_assisted`/`ai_model` encode the rule:
-- AI may co-author, but a named human is always accountable (user_id).
create table if not exists public.contributions (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references public.profiles(id) on delete cascade,
  kind         contribution_kind not null,
  target_table text,
  target_id    text,
  payload      jsonb not null default '{}',
  status       contribution_status not null default 'pending',
  ai_assisted  boolean not null default false,
  ai_model     text,
  decided_by   uuid references public.profiles(id),
  decided_at   timestamptz,
  created_at   timestamptz not null default now()
);
create index if not exists contributions_status_idx on public.contributions(status);
create index if not exists contributions_user_idx   on public.contributions(user_id);
alter table public.contributions enable row level security;
create policy "contributions: read own/reviewer" on public.contributions for select
  using (auth.uid() = user_id or public.is_reviewer());
create policy "contributions: insert own" on public.contributions for insert
  with check (auth.uid() = user_id);
create policy "contributions: reviewer decide" on public.contributions for update
  using (public.is_reviewer()) with check (public.is_reviewer());

create table if not exists public.reviews (
  id              uuid primary key default gen_random_uuid(),
  contribution_id uuid not null references public.contributions(id) on delete cascade,
  reviewer_id     uuid not null references public.profiles(id),
  verdict         review_verdict not null,
  comment         text,
  created_at      timestamptz not null default now()
);
alter table public.reviews enable row level security;
create policy "reviews: read by reviewer/owner" on public.reviews for select
  using (public.is_reviewer() or exists (
    select 1 from public.contributions c
    where c.id = contribution_id and c.user_id = auth.uid()));
create policy "reviews: reviewer insert" on public.reviews for insert
  with check (public.is_reviewer() and auth.uid() = reviewer_id);

-- Auditable reputation ledger (reputation column on profiles is the running sum,
-- maintained by service_role from these events).
create table if not exists public.reputation_events (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles(id) on delete cascade,
  delta      integer not null,
  reason     text,
  ref        jsonb not null default '{}',
  created_at timestamptz not null default now()
);
alter table public.reputation_events enable row level security;
create policy "reputation: read own/reviewer" on public.reputation_events for select
  using (auth.uid() = user_id or public.is_reviewer());
-- Inserts happen via service_role only (no public insert policy).

create table if not exists public.flags (
  id           uuid primary key default gen_random_uuid(),
  target_table text not null,
  target_id    text not null,
  reporter_id  uuid references public.profiles(id),
  reason       text not null,
  detail       text,
  status       text not null default 'open',
  created_at   timestamptz not null default now()
);
alter table public.flags enable row level security;
create policy "flags: read reporter/reviewer" on public.flags for select
  using (reporter_id = auth.uid() or public.is_reviewer());
create policy "flags: authenticated report" on public.flags for insert
  with check (auth.uid() is not null and reporter_id = auth.uid());
create policy "flags: reviewer resolve" on public.flags for update
  using (public.is_reviewer()) with check (public.is_reviewer());

-- ═══════════════════════════════════════════════════════════════════════════
-- PERSONAL LAYER  (the selfish loop: cloud Workshop + collections + SRS)
-- "Organize your ideas as you learn" — and one day publish a node to the commons.
-- ═══════════════════════════════════════════════════════════════════════════

create table if not exists public.collections (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  title       text not null,
  description text,
  visibility  visibility not null default 'private',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
alter table public.collections enable row level security;
create policy "collections: owner all" on public.collections for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "collections: public read" on public.collections for select
  using (visibility = 'public');
create trigger collections_touch before update on public.collections
  for each row execute function public.set_updated_at();

create table if not exists public.notes (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references public.profiles(id) on delete cascade,
  collection_id uuid references public.collections(id) on delete set null,
  topic_id      text references public.topics(id) on delete set null,
  title         text,
  body          text,
  tags          text[] not null default '{}',
  visibility    visibility not null default 'private',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index if not exists notes_user_idx on public.notes(user_id);
alter table public.notes enable row level security;
create policy "notes: owner all" on public.notes for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "notes: public read" on public.notes for select
  using (visibility = 'public');
create trigger notes_touch before update on public.notes
  for each row execute function public.set_updated_at();

create table if not exists public.srs_cards (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references public.profiles(id) on delete cascade,
  topic_id      text references public.topics(id) on delete set null,
  front         text not null,
  back          text not null,
  due_at        timestamptz not null default now(),
  interval_days numeric not null default 0,
  ease          numeric not null default 2.5,
  reps          integer not null default 0,
  lapses        integer not null default 0,
  created_at    timestamptz not null default now()
);
create index if not exists srs_due_idx on public.srs_cards(user_id, due_at);
alter table public.srs_cards enable row level security;
create policy "srs_cards: owner all" on public.srs_cards for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table if not exists public.srs_reviews (
  id          uuid primary key default gen_random_uuid(),
  card_id     uuid not null references public.srs_cards(id) on delete cascade,
  user_id     uuid not null references public.profiles(id) on delete cascade,
  grade       smallint not null,            -- 0..5 (SM-2 style)
  reviewed_at timestamptz not null default now()
);
alter table public.srs_reviews enable row level security;
create policy "srs_reviews: owner all" on public.srs_reviews for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════════════════════
-- AI USAGE  (Phase-1 backbone: per-user quotas replace the in-memory limiter)
-- ═══════════════════════════════════════════════════════════════════════════
create table if not exists public.ai_usage (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references public.profiles(id) on delete set null,
  ip_hash       text,
  model         text,
  tokens_in     integer,
  tokens_out    integer,
  cost_estimate numeric(10,5),
  created_at    timestamptz not null default now()
);
create index if not exists ai_usage_user_idx on public.ai_usage(user_id, created_at);
alter table public.ai_usage enable row level security;
create policy "ai_usage: read own" on public.ai_usage for select
  using (auth.uid() = user_id);
-- Inserts happen via service_role from the proxy (no public insert policy).

-- ── Done ───────────────────────────────────────────────────────────────────
-- Next: load the existing 93-subject atlas with tools/extract-content.cjs →
-- supabase/seed/*.json, then supabase/seed/apply.cjs (service_role).
