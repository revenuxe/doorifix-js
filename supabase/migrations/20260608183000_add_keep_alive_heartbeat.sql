CREATE TABLE IF NOT EXISTS public.supabase_keep_alive (
  id BOOLEAN PRIMARY KEY DEFAULT TRUE,
  last_ping_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT supabase_keep_alive_single_row CHECK (id)
);

ALTER TABLE public.supabase_keep_alive ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.keep_supabase_awake()
RETURNS TIMESTAMPTZ
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  pinged_at TIMESTAMPTZ := now();
BEGIN
  INSERT INTO public.supabase_keep_alive (id, last_ping_at)
  VALUES (TRUE, pinged_at)
  ON CONFLICT (id)
  DO UPDATE SET last_ping_at = EXCLUDED.last_ping_at;

  RETURN pinged_at;
END;
$$;

REVOKE ALL ON FUNCTION public.keep_supabase_awake() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.keep_supabase_awake() TO anon, authenticated;
