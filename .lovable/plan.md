# Per-Service Homepage Landing Pages

Replicate the full homepage layout for each appliance service (Washing Machine, AC, Refrigerator, Microwave, Dryer, Dishwasher) — tailored hero, brand row, category pills, service cards, testimonials, FAQ, CTA — and route the menu/category pills directly to these pages. Each page gets its own booking flow and SEO metadata.

## Scope

### 1. Routing
- Replace current `/service/:slug` (which shows a small detail page) with a full `ServiceHome` page that uses the homepage's structure.
- Keep existing route `/service/:slug` so all internal links + sitemap stay valid.
- Add `/service/:slug/book` → dedicated booking page pre-filled with the appliance.
- Update menus (Desktop header, Mobile menu, Bottom nav, CategoryPills) so "Washing Machine", "AC", etc., link to `/service/<slug>` instead of filtering on `/services`.

### 2. ServiceHome page (per appliance)
Mirror the Index.tsx homepage but localized to one appliance:
- Hero with appliance image + headline ("Washing Machine Repair in Bangalore — Same-Day Service")
- Brand-trust row (Samsung, LG, Whirlpool, Bosch, IFB, Haier — appliance-specific brand list)
- Category pills (common faults: "Not spinning", "Water leakage", "Drum noise", etc.)
- "Common issues we fix" cards (4–6 fault cards with icons & short copy)
- "Why choose us" (warranty, certified techs, transparent pricing language — no rupee figures)
- Testimonials specific to that appliance
- FAQ accordion (5 SEO-rich Q&As per appliance)
- Sticky "Book Now" CTA → `/service/:slug/book`

### 3. Service-specific BookingPage
- Pre-fills appliance from URL slug (locked field shown as read-only chip)
- Reuses BookingForm logic + Supabase insert + email trigger + Thank You redirect
- Page-level hero ("Book Washing Machine Repair") with trust badges

### 4. Content & SEO per service
- Unique meta title/description, H1, H2s, JSON-LD `Service` schema, FAQ schema
- High-intent keywords woven into copy (e.g., "washing machine repair near me", "front load washing machine service Bangalore", "AC gas refill", "refrigerator not cooling repair")
- Internal linking between services + city pages
- Update `public/sitemap.xml` and SEO component

### 5. Data model
- Extend `src/data/services.ts` with per-service fields: `brands[]`, `commonIssues[]`, `faqs[]`, `testimonials[]`, `keywords[]`, `metaTitle`, `metaDescription`, `heroSubtitle`.
- Keep existing fields backward-compatible.

## Files

**New**
- `src/pages/ServiceHome.tsx` — per-service homepage clone
- `src/pages/ServiceBooking.tsx` — service-specific booking page
- `src/components/service-home/HeroBanner.tsx`
- `src/components/service-home/BrandStrip.tsx`
- `src/components/service-home/CommonIssues.tsx`
- `src/components/service-home/ServiceFAQ.tsx`

**Updated**
- `src/App.tsx` — new routes, replace ServiceDetail mapping
- `src/data/services.ts` — extended content per appliance
- `src/components/CategoryPills.tsx` — link to `/service/:slug`
- `src/components/MobileMenu.tsx` + `DesktopHeader.tsx` + `BottomNav.tsx` — service submenu
- `src/components/SEO.tsx` — accept FAQ + Service schema
- `public/sitemap.xml` — add `/book` URLs

## Technical notes

- Reuses existing tokens (`--primary` orange, `--brand-navy`) — no design-system changes.
- Keeps Lovable Cloud (Supabase) booking insert and Resend email triggers intact.
- City-aware: ServiceHome reads optional `?city=` or falls back to "Bangalore" so the same component serves city + non-city contexts later.
- Splash loader and lead popup behavior unchanged.
- Booking pre-fill done by passing `defaultAppliance` prop to existing BookingForm — no schema changes required.
- No pricing or specific warranty days mentioned (per memory).

## Out of scope (ask before adding)

- Net-new images per appliance beyond what's already in `src/assets`
- Translating content to regional languages
- Programmatic city × service matrix beyond existing CityServiceDetail
