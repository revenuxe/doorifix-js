"use client";

import { imageSrc } from "@/lib/image";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Search, Clock, Star, ArrowRight, CheckCircle, Users, Award, ShieldCheck, WashingMachine, Refrigerator, AirVent, Microwave, Fan, Droplets } from "lucide-react";
import CategoryPills from "@/components/CategoryPills";
import BottomNav from "@/components/BottomNav";
import DesktopHeader from "@/components/DesktopHeader";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import HomepageBookingForm from "@/components/HomepageBookingForm";
import SEO from "@/components/SEO";
import repairHero from "@/assets/repair-hero.png";
import { brands, brandFocusService, buildBrandCopy, getBrandBySlug } from "@/data/brands";
import { applianceIssues } from "@/data/applianceIssues";
import type { ServiceData } from "@/data/services";

const serviceIcons: Record<string, JSX.Element> = {
  "washing-machine-repair": <WashingMachine size={24} className="text-primary" />,
  "refrigerator-repair": <Refrigerator size={24} className="text-primary" />,
  "ac-repair-service": <AirVent size={24} className="text-primary" />,
  "microwave-repair": <Microwave size={24} className="text-primary" />,
  "dryer-repair": <Fan size={24} className="text-primary" />,
  "dishwasher-repair": <Droplets size={24} className="text-primary" />,
};

// Normalizes a service's canonical title into the appliance option used by
// the booking form's dropdown (matches ServiceCard's applianceMap).
const applianceMap: Record<string, string> = {
  "Washing Machine": "Washing Machine",
  Refrigerator: "Refrigerator",
  "AC Service": "AC",
  Microwave: "Microwave",
  Dryer: "Dryer",
  Dishwasher: "Dishwasher",
};

const stats = [
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "100+", label: "Expert Technicians" },
  { icon: CheckCircle, value: "2000+", label: "Repairs Done" },
  { icon: Star, value: "4.9", label: "Avg Rating" },
];

const brandIssueKeywords = (brandName: string, service: ServiceData, issue: string) =>
  `${brandName} ${service.title.toLowerCase()} ${issue.toLowerCase()} repair near me, ${issue.toLowerCase()} fix, genuine ${brandName} parts, doorstep ${service.title.toLowerCase()} service`;

const BrandDetail = () => {
  const { brand: brandSlug } = useParams<{ brand: string }>();
  const router = useRouter();
  const navigate = (path: string | number) => {
    if (typeof path === "number") router.back();
    else router.push(path);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingIssue, setBookingIssue] = useState("");

  const brand = getBrandBySlug(brandSlug || "");
  if (!brand) return null;

  const copy = buildBrandCopy(brand);
  const focusService = brandFocusService(brand);
  const relevantServices = focusService ? [focusService] : [];
  const focusIssues = focusService ? applianceIssues[focusService.slug] || [] : [];
  const defaultAppliance = focusService ? applianceMap[focusService.title] || focusService.title : "";
  const otherBrands = brands.filter((b) => b.slug !== brand.slug);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={`${copy.headline} Near Me | Doorifix`}
        description={copy.subheadline}
        canonical={`/brand/${brand.slug}`}
        keywords={brand.keywords}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: copy.headline, url: `/brand/${brand.slug}` },
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Doorifix - ${copy.headline}`,
            "description": copy.subheadline,
            "telephone": "+919886579923",
            "email": "doorifix@gmail.com",
            "areaServed": [
              { "@type": "City", "name": "Bangalore" },
              { "@type": "City", "name": "Bengaluru" },
            ],
            "openingHours": "Mo-Su 08:00-21:00",
            "priceRange": "$$",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": copy.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a },
            })),
          },
        ]}
      />
      <DesktopHeader />

      <div className="flex-1">
        <div className="max-w-[430px] md:max-w-none mx-auto">
          <div className="px-5 md:px-8 lg:px-12 pt-6 md:pt-4 pb-4 space-y-6 md:space-y-8">

            {/* Title */}
            <div className="md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src={imageSrc(brand.logo)} alt={`${brand.name} logo`} className="w-full h-full object-contain p-1.5" />
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground italic">
                    {copy.headline}
                  </h1>
                </div>
                <p className="hidden md:block text-muted-foreground mt-3 text-lg max-w-lg">
                  {copy.subheadline}
                </p>
              </div>

              <div className="hidden md:grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-4 border border-border text-center">
                    <stat.icon size={20} className="mx-auto text-primary mb-1" />
                    <span className="text-xl font-bold text-foreground">{stat.value}</span>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Search - mobile */}
            <form
              className="flex items-center gap-3 bg-card rounded-2xl px-4 py-3 border border-border md:hidden"
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) navigate(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
              }}
            >
              <Search size={18} className="text-muted-foreground" />
              <input type="text" placeholder={`Search ${brand.name} appliance issue`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground" />
            </form>

            <CategoryPills active="All" onSelect={(cat) => {
              if (cat === "All") navigate("/services");
              else navigate(`/services?category=${encodeURIComponent(cat)}`);
            }} />

            {/* Hero Card */}
            <div className="relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[320px] cursor-pointer" onClick={() => { setBookingIssue(""); setBookingOpen(true); }}>
              <img src={imageSrc(repairHero)} alt={`${brand.name} appliance repair in Bangalore`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 p-5 md:p-8 space-y-2 max-w-md h-full flex flex-col justify-end">
                {/* Small brand logo badge */}
                <div className="self-start flex items-center gap-2 bg-white/95 backdrop-blur rounded-full pl-1.5 pr-3 py-1.5 shadow-sm mb-1">
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src={imageSrc(brand.logo)} alt={`${brand.name} logo`} className="w-full h-full object-contain p-1" />
                  </span>
                  <span className="text-[11px] font-semibold text-foreground flex items-center gap-1 whitespace-nowrap">
                    <ShieldCheck size={12} className="text-primary" />
                    Certified Technician {brand.name} Repair
                  </span>
                </div>

                <h2 className="text-xl md:text-3xl font-bold text-white leading-snug">
                  {copy.headline}<br />at Your Doorstep
                </h2>
                <p className="hidden md:block text-sm text-white/70 max-w-sm">
                  {copy.subheadline}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="bg-white text-foreground text-xs md:text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity" onClick={(e) => { e.stopPropagation(); setBookingIssue(""); setBookingOpen(true); }}>
                    Book {brand.name} Repair
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Services */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg md:text-xl text-foreground">{copy.headline}</h2>
                <button onClick={() => navigate("/services")} className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
                  View All <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {relevantServices.map((service) => (
                  <ServiceCard key={service.id} {...service} description={`${brand.name} ${service.description.toLowerCase()}`} bookOnCardClick />
                ))}
              </div>
            </div>

            {/* Brand-specific SEO Cards */}
            {focusService && (
              <div>
                <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Expert {copy.headline} Near You</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
                  {focusIssues.map((issue) => (
                    <div
                      key={issue}
                      onClick={() => { setBookingIssue(issue); setBookingOpen(true); }}
                      className="bg-card rounded-2xl p-4 border border-border hover:shadow-md transition-all cursor-pointer hover:border-primary/30"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        {serviceIcons[focusService.slug]}
                      </div>
                      <h3 className="font-semibold text-sm text-foreground leading-tight">{brand.name} {focusService.title} {issue}</h3>
                      <p className="text-xs text-primary font-medium mt-1">Certified Expert</p>
                      <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">{brandIssueKeywords(brand.name, focusService, issue)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="relative rounded-3xl overflow-hidden bg-primary p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Clock size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary-foreground/80">Quick Turnaround</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
                    Same-Day {copy.headline}<br />at Your Doorstep
                  </h2>
                  <p className="text-sm text-primary-foreground/70 max-w-md">
                    {copy.intro}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-center gap-3">
                  <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur rounded-2xl px-5 py-3">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary-foreground">10</span>
                      <p className="text-[10px] text-primary-foreground/60 uppercase">Min</p>
                    </div>
                    <div className="w-px h-8 bg-primary-foreground/20" />
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary-foreground">1–2</span>
                      <p className="text-[10px] text-primary-foreground/60 uppercase">Hours</p>
                    </div>
                  </div>
                  <button onClick={() => { setBookingIssue(""); setBookingOpen(true); }} className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 w-full md:w-auto justify-center">
                    Book {brand.name} Repair
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Frequently Asked Questions – {brand.name}</h2>
              <div className="space-y-3">
                {copy.faqs.map((faq) => (
                  <details key={faq.q} className="bg-card rounded-2xl border border-border group">
                    <summary className="px-4 py-3 cursor-pointer font-medium text-sm text-foreground list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-muted-foreground text-lg group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="px-4 pb-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Other Brands */}
            <div className="pb-8">
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-3">Other Brands We Repair</h2>
              <div className="flex flex-wrap gap-2">
                {otherBrands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brand/${b.slug}`}
                    className="text-xs text-foreground bg-card border border-border rounded-full px-3 py-1.5 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {b.name} Repair
                  </Link>
                ))}
              </div>
            </div>

            <HomepageBookingForm
              eyebrow={`Book ${brand.name} Repair`}
              title={`Book ${brand.name} appliance repair at home`}
              description="Submit your details and the Doorifix team will call back with your booking ID."
              defaultAppliance={defaultAppliance}
              source={`Brand: ${brand.name}`}
            />
          </div>
        </div>
      </div>

      <Footer
        serviceContext={
          focusService?.slug === "washing-machine-repair"
            ? { slug: focusService.slug, title: `${focusService.title} Repair` }
            : undefined
        }
      />
      <BottomNav />

      <BookingForm
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        defaultAppliance={defaultAppliance}
        defaultIssue={bookingIssue}
      />
    </div>
  );
};

export default BrandDetail;
