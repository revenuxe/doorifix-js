"use client";

import { imageSrc } from "@/lib/image";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Search, Clock, Star, ArrowRight, CheckCircle, Users, Award, MapPin, WashingMachine, Refrigerator, AirVent, Microwave, Fan, Droplets } from "lucide-react";
import CategoryPills from "@/components/CategoryPills";
import BottomNav from "@/components/BottomNav";
import DesktopHeader from "@/components/DesktopHeader";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import LocalRepairContent from "@/components/LocalRepairContent";
import { getLocalGuide, localServiceCopy } from "@/data/local-content";
import CityBrandSection from "@/components/CityBrandSection";
import SEO from "@/components/SEO";
import repairHero from "@/assets/repair-hero.png";
import { services } from "@/data/services";
import { getCityBySlug } from "@/data/cities";
import { cityAreas, getAreaByCityAndSlug, slugify } from "@/data/areas";


const applianceIcons = [
  <WashingMachine size={24} className="text-primary" />,
  <Refrigerator size={24} className="text-primary" />,
  <AirVent size={24} className="text-primary" />,
  <Microwave size={24} className="text-primary" />,
  <Fan size={24} className="text-primary" />,
  <Droplets size={24} className="text-primary" />,
];

const AreaLanding = () => {
  const { city, area } = useParams<{ city: string; area: string }>();
  const router = useRouter();
  const navigate = (path: string | number) => {
    if (typeof path === "number") router.back();
    else if (path === "/services" || path.startsWith("/services?")) {
      const destination = new URL(path, "https://www.doorifix.com");
      destination.searchParams.set("city", city);
      destination.searchParams.set("area", area);
      router.push(`/${city}/services${destination.search}`);
    } else router.push(path);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredServices = services.filter((service) =>
    activeCategory === "All" || service.title === (activeCategory === "AC" ? "AC Service" : activeCategory),
  );
  const selectCategory = (category: string) => {
    setActiveCategory(category);
    document.getElementById("location-services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cityData = getCityBySlug(city || "");
  const areaName = cityData ? getAreaByCityAndSlug(city || "", area || "") : undefined;

  if (!cityData || !areaName) return null;

  const fullLocation = `${areaName}, ${cityData.name}`;
  // Rotate the window per area (instead of always slicing the first 12) so
  // every locality page gets cross-linked by others, not just the first
  // dozen entries in cityAreas — otherwise most area pages end up orphaned.
  const allAreas = cityAreas[cityData.slug] || [];
  const currentIndex = Math.max(allAreas.indexOf(areaName), 0);
  const otherAreas = Array.from({ length: Math.min(12, allAreas.length - 1) }, (_, i) =>
    allAreas[(currentIndex + 1 + i) % allAreas.length]
  ).filter((a) => a !== areaName);

  const stats = [
    { icon: Users, value: "6", label: "Appliance categories" },
    { icon: Award, value: "Model", label: "Specific diagnosis" },
    { icon: CheckCircle, value: "Quote", label: "Before repair" },
    { icon: Star, value: "Visit", label: "By appointment" },
  ];

  const metaTitle = `Appliance Repair in ${areaName}, ${cityData.name} | Washing Machine, AC, Fridge Repair Near Me – Doorifix`;
  const metaDescription = `Top-rated doorstep appliance repair in ${areaName}, ${cityData.name}. Same-day washing machine, refrigerator, AC, microwave, dryer & dishwasher repair by certified technicians in ${areaName}.`;
  const keywords = `appliance repair ${areaName}, washing machine repair ${areaName}, fridge repair ${areaName}, AC service ${areaName}, microwave repair ${areaName}, appliance repair near me ${areaName}, doorstep appliance repair ${areaName} ${cityData.name}, same day repair ${areaName}, samsung repair ${areaName}, lg repair ${areaName}, whirlpool repair ${areaName}, bosch repair ${areaName}, IFB repair ${areaName}, ${areaName} appliance service, best appliance repair ${areaName} ${cityData.name}`;

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={`/${cityData.slug}/${area}`}
        keywords={keywords}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: cityData.name, url: `/${cityData.slug}` },
          { name: areaName, url: `/${cityData.slug}/${area}` },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Doorifix – ${areaName}, ${cityData.name}`,
          "description": metaDescription,
          "telephone": "+919886579923",
          "email": "doorifix@gmail.com",
          "areaServed": { "@type": "Place", "name": `${areaName}, ${cityData.name}` },
          "address": { "@type": "PostalAddress", "streetAddress": "6, 1st Cross, Nagawara Main Rd, Umar Nagar", "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "postalCode": "560045", "addressCountry": "IN" },
          "openingHours": "Mo-Su 08:00-21:00",
          "priceRange": "$$",
        }}
      />
      <DesktopHeader />

      <main className="flex-1">
        <div className="max-w-[430px] md:max-w-none mx-auto">
          <div className="px-5 md:px-8 lg:px-12 pt-6 pb-4 space-y-6 md:space-y-8">

            {/* Hero Card */}
            <div className="relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[320px] cursor-pointer" onClick={() => navigate("/services")}>
              <img src={imageSrc(repairHero)} alt={`Appliance repair in ${fullLocation}`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 p-5 md:p-8 space-y-2 max-w-md h-full flex flex-col justify-end">
                <div className="flex items-center gap-1 text-white/70">
                  <MapPin size={14} />
                  <span className="text-xs">Serving {areaName}, {cityData.name}</span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-white leading-snug">
                  Appliance Repair at<br />Your Doorstep in {areaName}
                </h2>
                <p className="hidden md:block text-sm text-white/70 max-w-sm">
                  Certified technicians arrive in 60–90 minutes anywhere in {areaName}. Free diagnosis, transparent pricing.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="bg-white text-foreground text-xs md:text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity" onClick={(e) => { e.stopPropagation(); navigate("/services"); }}>
                    Book Repair in {areaName}
                  </button>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Link href="/" className="hover:text-foreground">Home</Link>
                  <span>/</span>
                  <Link href={`/${cityData.slug}`} className="hover:text-foreground">{cityData.name}</Link>
                  <span>/</span>
                  <span className="text-foreground">{areaName}</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground italic">
                  Appliance Repair in<br />{areaName}, {cityData.name}
                </h1>
                <p className="hidden md:block text-muted-foreground mt-3 text-lg max-w-lg">
                  Choose appliance diagnosis in {areaName}, {cityData.name}. Confirm the visit window, access details and charges for your address.
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
              <input type="text" placeholder={`Search repairs in ${areaName}`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground" />
            </form>

            <CategoryPills active={activeCategory} onSelect={selectCategory} />

            {/* Featured Services */}
            <div id="location-services" className="scroll-mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg md:text-xl text-foreground">Popular Services in {areaName}</h2>
                <button onClick={() => navigate("/services")} className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
                  View All <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {featuredServices.map((service) => (
                  <ServiceCard key={service.id} {...service} linkPrefix={`/${cityData.slug}/${area}`} />
                ))}
              </div>
            </div>

            <CityBrandSection citySlug={cityData.slug} />

            <LocalRepairContent city={cityData} area={areaName} />

            {/* CTA Section */}
            <div className="relative rounded-3xl overflow-hidden bg-primary p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Clock size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary-foreground/80">Quick Turnaround in {areaName}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
                    Describe the Fault,<br />Confirm Your Visit
                  </h2>
                  <p className="text-sm text-primary-foreground/70 max-w-md">
                    Share your appliance model, symptoms and address. The team confirms the appointment window, access requirements and the next steps.
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-center gap-3">
                  <button onClick={() => navigate("/services")} className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 w-full md:w-auto justify-center">
                    Book a Repair in {areaName}
                  </button>
                </div>
              </div>
            </div>

            {/* Other Areas in this city */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-3 flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                Other Areas We Serve in {cityData.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {otherAreas.map((a) => (
                  <Link
                    key={a}
                    href={`/${cityData.slug}/${slugify(a)}`}
                    className="text-xs text-foreground bg-card border border-border rounded-full px-3 py-1.5 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {a}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="pb-8">
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Frequently Asked Questions – {areaName}</h2>
              <div className="space-y-3">
                {getLocalGuide(cityData.slug).questions.map((faq) => (
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

          </div>
        </div>
      </main>

      <Footer areaCitySlug={cityData.slug} />
      <BottomNav />
    </div>
  );
};

export default AreaLanding;
