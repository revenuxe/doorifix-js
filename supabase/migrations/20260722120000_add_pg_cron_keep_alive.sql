-- Belt-and-suspenders keep-alive: schedule the heartbeat directly inside
-- Postgres via pg_cron, so the project stays active even if the app's
-- hosting (Vercel) or the GitHub Actions ping ever go down.
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;

GRANT USAGE ON SCHEMA cron TO postgres;

SELECT cron.schedule(
  'keep-supabase-awake',
  '0 */12 * * *',
  $$ SELECT public.keep_supabase_awake(); $$
);
