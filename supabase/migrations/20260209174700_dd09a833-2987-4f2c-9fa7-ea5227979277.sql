
CREATE OR REPLACE FUNCTION public.create_booking(
  _name text,
  _phone text,
  _location text,
  _appliance text,
  _warranty text
)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _case_number text;
BEGIN
  INSERT INTO public.bookings (name, phone, location, appliance, warranty)
  VALUES (_name, _phone, _location, _appliance, _warranty)
  RETURNING case_number INTO _case_number;
  
  RETURN _case_number;
END;
$$;
