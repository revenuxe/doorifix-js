
-- Tighten delete and select to admin-only
DROP POLICY "Authenticated users can delete bookings" ON public.bookings;
DROP POLICY "Authenticated users can read bookings" ON public.bookings;

CREATE POLICY "Admins can read bookings"
ON public.bookings
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete bookings"
ON public.bookings
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
