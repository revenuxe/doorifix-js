CREATE OR REPLACE FUNCTION public.generate_case_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.case_number := 'DF' || nextval('public.booking_case_seq')::TEXT;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
