"use client";

import { imageSrc } from "@/lib/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, CheckCircle, HelpCircle, ShieldCheck, Cog, MapPin } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import CategoryPills from "@/components/CategoryPills";
import BottomNav from "@/components/BottomNav";
import DesktopHeader from "@/components/DesktopHeader";
import Footer from "@/components/Footer";
import HomepageBookingForm from "@/components/HomepageBookingForm";
import SEO from "@/components/SEO";
import repairHero from "@/assets/repair-hero.png";
import doorifixLogo from "@/assets/doorifix-logo.webp";
import { brands } from "@/data/brands";

const reasons = [
  {
    icon: Cog,
    title: "Cross-brand expertise",
    description: "Our technicians diagnose and repair appliances from every manufacturer, not just the popular names — the fault-finding process is the same regardless of the badge on the machine.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine or certified-compatible parts",
    description: "For less common brands we source genuine, OEM or certified-compatible parts, and confirm availability before we quote you.",
  },
  {
    icon: CheckCircle,
    title: "Same free diagnosis, same warranty",
    description: "An appliance from a brand you don't see listed gets exactly the same doorstep diagnosis, transparent pricing and service warranty as any other.",
  },
];

const faqs = [
  {
    q: "My appliance brand isn't listed on your website — can you still repair it?",
    a: "Yes. The brands listed on our site are just the most commonly searched ones — our technicians repair washing machines, refrigerators, ACs, microwaves, dryers and dishwashers from every manufacturer, including less common or regional brands. Book a repair and we'll confirm right away.",
  },
  {
    q: "What if I don't know my appliance's exact brand or model?",
    a: "That's fine — a photo of the appliance (including the rating plate, usually inside the door or on the back) is enough for our technician to identify it and get started.",
  },
  {
    q: "Do you repair old or discontinued appliance brands?",
    a: "In most cases, yes. Our technicians can diagnose the fault regardless of brand; the main constraint is part availability, which we check and confirm with you before starting any work.",
  },
  {
    q: "Will an unlisted brand cost more to repair?",
    a: "Not necessarily. Pricing depends on the actual fault and part needed, not the brand name. You'll always see a transparent quote before we start.",
  },
];

const BrandNotListed = () => {
  const router = useRouter();
  const navigate = (path: string | number) => {
    if (typeof path === "number") router.back();
    else router.push(path);
  };
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title="Appliance Brand Not Listed? We Still Repair It | Doorifix"
        description="Can't find your appliance brand on our list? Doorifix repairs washing machines, refrigerators, ACs, microwaves, dryers and dishwashers from every manufacturer in Bangalore — free diagnosis, transparent pricing and a warranty on every repair."
        canonical="/brand/not-listed"
        keywords="appliance brand not listed, unlisted appliance brand repair, any brand appliance repair near me, appliance repair all brands Bangalore"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Brand Not Listed", url: "/brand/not-listed" },
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Doorifix - Any Brand Appliance Repair",
            "description": "Certified appliance repair for any brand, including manufacturers not listed on the website, with doorstep service in Bangalore.",
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
            "mainEntity": faqs.map((faq) => ({
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
          <div className="px-5 md:px-8 lg:px-12 pt-6 pb-4 space-y-5 md:space-y-8">

            {/* Mobile Header */}
            <div className="flex items-center justify-between md:hidden">
              <img src={imageSrc(doorifixLogo)} alt="Doorifix" className="h-10 object-contain" />
              <MobileMenu />
            </div>

            {/* Title */}
            <div className="md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-card border border-dashed border-border flex items-center justify-center flex-shrink-0">
                    <HelpCircle size={22} className="text-muted-foreground" />
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground italic">
                    Don't See Your<br />Brand? We Repair It
                  </h1>
                </div>
                <p className="hidden md:block text-muted-foreground mt-3 text-lg max-w-lg">
                  The brands on our site are just the most searched ones — our certified technicians repair every appliance brand in Bangalore, with the same free diagnosis, transparent pricing and warranty.
                </p>
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
              <input type="text" placeholder="Search your appliance issue" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground" />
            </form>

            <CategoryPills active="All" onSelect={(cat) => {
              if (cat === "All") navigate("/services");
              else navigate(`/services?category=${encodeURIComponent(cat)}`);
            }} />

            {/* Hero Card */}
            <div className="relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[320px] cursor-pointer" onClick={() => navigate("/services")}>
              <img src={imageSrc(repairHero)} alt="Appliance repair for any brand in Bangalore" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur rounded-full pl-1.5 pr-3 py-1.5 shadow-sm">
                <span className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={14} className="text-muted-foreground" />
                </span>
                <span className="text-[11px] font-semibold text-foreground">Any Brand, Any Model</span>
              </div>

              <div className="relative z-10 p-5 md:p-8 space-y-2 max-w-md h-full flex flex-col justify-end">
                <h2 className="text-xl md:text-3xl font-bold text-white leading-snug">
                  Any Appliance Brand,<br />Repaired at Your Doorstep
                </h2>
                <p className="hidden md:block text-sm text-white/70 max-w-sm">
                  Free diagnosis, transparent pricing, and a warranty on every repair — whatever the brand.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="bg-white text-foreground text-xs md:text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity" onClick={(e) => { e.stopPropagation(); navigate("/services"); }}>
                    Book a Repair
                  </button>
                </div>
              </div>
            </div>

            {/* Reasons */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Why an Unlisted Brand Is Still in Safe Hands</h2>
              <div className="grid gap-3 md:grid-cols-3">
                {reasons.map((reason) => (
                  <div key={reason.title} className="bg-card rounded-2xl p-4 border border-border">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <reason.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">{reason.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* All brands */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-3">Or Check If Your Brand Is Already Listed</h2>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brand/${b.slug}`}
                    className="text-xs text-foreground bg-card border border-border rounded-full px-3 py-1.5 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {b.name} Repair
                  </Link>
                ))}
              </div>
              <button onClick={() => navigate("/")} className="mt-4 text-sm text-primary font-medium flex items-center gap-1 hover:underline">
                <MapPin size={14} />
                View all brands we repair <ArrowRight size={14} />
              </button>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
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

            <div className="pb-8">
              <HomepageBookingForm
                eyebrow="Book Doorifix Service"
                title="Book a repair for any appliance brand"
                description="Submit your details and the Doorifix team will call back with your booking ID."
                source="Brand: Not Listed"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default BrandNotListed;
