-- Track which page/context a booking lead originated from (e.g. a brand
-- page like "Samsung"), so the admin dashboard can show lead source.
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS source TEXT;

CREATE OR REPLACE FUNCTION public.create_booking(
  _name text, _phone text, _location text, _appliance text, _warranty text, _source text DEFAULT NULL
)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _case_number text;
BEGIN
  INSERT INTO public.bookings (name, phone, location, appliance, warranty, source)
  VALUES (_name, _phone, _location, _appliance, _warranty, _source)
  RETURNING case_number INTO _case_number;
  RETURN _case_number;
END;
$$;
