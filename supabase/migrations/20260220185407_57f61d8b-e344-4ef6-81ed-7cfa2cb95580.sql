
-- Create contact_leads table
CREATE TABLE public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Admins can read
CREATE POLICY "Admins can read contact leads"
ON public.contact_leads
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Anyone can submit
CREATE POLICY "Anyone can submit contact form"
ON public.contact_leads
FOR INSERT
WITH CHECK (true);

-- Admins can delete
CREATE POLICY "Admins can delete contact leads"
ON public.contact_leads
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));
