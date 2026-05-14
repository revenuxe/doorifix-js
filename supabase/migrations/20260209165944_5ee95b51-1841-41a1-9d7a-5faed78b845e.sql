
-- Add case_number column with auto-generated DF prefix
ALTER TABLE public.bookings ADD COLUMN case_number TEXT UNIQUE;

-- Create a sequence for case numbers
CREATE SEQUENCE public.booking_case_seq START 1001;

-- Auto-generate case_number on insert
CREATE OR REPLACE FUNCTION public.generate_case_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.case_number := 'DF' || nextval('public.booking_case_seq')::TEXT;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER set_case_number
BEFORE INSERT ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.generate_case_number();
