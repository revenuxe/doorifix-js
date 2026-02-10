import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Search, Clock, Star, ArrowRight, CheckCircle, Users, Award, Menu, WashingMachine, Refrigerator, AirVent, Microwave, Fan, Droplets } from "lucide-react";
import CategoryPills from "@/components/CategoryPills";
import BottomNav from "@/components/BottomNav";
import DesktopHeader from "@/components/DesktopHeader";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import repairHero from "@/assets/repair-hero.png";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";
import { services } from "@/data/services";
import { getCityBySlug } from "@/data/cities";

const featuredServices = services.slice(0, 4);

const applianceIcons = [
  <WashingMachine size={24} className="text-primary" />,
  <Refrigerator size={24} className="text-primary" />,
  <AirVent size={24} className="text-primary" />,
  <Microwave size={24} className="text-primary" />,
  <Fan size={24} className="text-primary" />,
  <Droplets size={24} className="text-primary" />,
];

const CityLanding = () => {
  const { city } = useParams<{ city: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const cityData = getCityBySlug(city || "");
  if (!cityData) return <Navigate to="/\" replace />;

  const stats = [
    { icon: Users, value: "1000+", label: `Happy Clients in ${cityData.name}` },
    { icon: Award, value: "100+", label: "Expert Technicians" },
    { icon: CheckCircle, value: "2000+", label: "Repairs Done" },
    { icon: Star, value: "4.9", label: "Avg Rating" },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={cityData.metaTitle}
        description={cityData.metaDescription}
        canonical={`/${cityData.slug}`}
        keywords={cityData.keywords}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Arrowmind Service Center – ${cityData.name}`,
          "description": cityData.metaDescription,
          "telephone": "+918095000510",
          "email": "arrowmind.in@gmail.com",
          "areaServed": { "@type": "City", "name": cityData.name },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "256" },
          "openingHours": "Mo-Su 08:00-21:00",
          "priceRange": "$$",
        }}
      />
      <DesktopHeader />

      <div className="flex-1">
        <div className="max-w-[430px] md:max-w-none mx-auto">
          <div className="px-5 md:px-8 lg:px-12 pt-6 pb-4 space-y-5 md:space-y-8">

            {/* Mobile Header */}
            <div className="flex items-center justify-between md:hidden">
              <div className="flex items-center gap-2">
                <img src={arrowmindLogo} alt="Arrowmind" className="h-10 object-contain" />
              </div>
              <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                <Menu size={18} />
              </button>
            </div>

            {/* Title */}
            <div className="md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground italic whitespace-pre-line">
                  {cityData.headline}
                </h1>
                <p className="hidden md:block text-muted-foreground mt-3 text-lg max-w-lg">
                  {cityData.subheadline}
                </p>
              </div>

              {/* Desktop Stats */}
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
              <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground" />
            </form>

            {/* Categories */}
            <div>
              <div className="hidden md:flex items-center justify-between mb-3">
                <h2 className="font-semibold text-lg text-foreground">Categories</h2>
              </div>
              <CategoryPills active="All" onSelect={(cat) => {
                if (cat === "All") navigate("/services");
                else navigate(`/services?category=${encodeURIComponent(cat)}`);
              }} />
            </div>

            {/* Badges - mobile */}
            <div className="flex gap-3 md:hidden">
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border">
                <Clock size={14} className="text-muted-foreground" />
                <span className="text-xs font-medium text-foreground">24/7 Support</span>
              </div>
              <button onClick={() => navigate("/services")} className="bg-primary text-primary-foreground text-xs font-medium px-5 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity">
                Book Now
              </button>
            </div>

            {/* Hero Card */}
            <div className="relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[320px] cursor-pointer" onClick={() => navigate("/services")}>
              <img src={repairHero} alt={`Appliance repair service in ${cityData.name}`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 p-5 md:p-8 space-y-2 max-w-sm h-full flex flex-col justify-end">
                <div className="flex items-center gap-1 text-white/70">
                  <Sparkle />
                  <span className="text-xs">Fast, Reliable Repairs in {cityData.name}</span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-white leading-snug">
                  Quick Appliance<br />Repair in {cityData.name}
                </h2>
                <p className="hidden md:block text-sm text-white/70 max-w-xs">
                  {cityData.heroText}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="bg-white text-foreground text-xs md:text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity" onClick={(e) => { e.stopPropagation(); navigate("/services"); }}>
                    {cityData.ctaText}
                  </button>
                  <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2">
                    <Clock size={14} className="text-white/70" />
                    <span className="text-xs font-medium text-white">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Services */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg md:text-xl text-foreground">Popular Services in {cityData.name}</h2>
                <button onClick={() => navigate("/services")} className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
                  View All <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {featuredServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            </div>

            {/* City-specific SEO Cards */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Expert Appliance Repair in {cityData.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
                {cityData.appliances.map((item, i) => (
                  <div key={item.title} onClick={() => navigate(`/service/${i + 1}`)} className="bg-card rounded-2xl p-4 border border-border hover:shadow-md transition-all cursor-pointer hover:border-primary/30">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      {applianceIcons[i]}
                    </div>
                    <h3 className="font-semibold text-sm text-foreground leading-tight">{item.title}</h3>
                    <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">{item.keywords}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative rounded-3xl overflow-hidden bg-primary p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Clock size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary-foreground/80">Quick Turnaround in {cityData.name}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
                    Book in 10 Minutes,<br />Service Done in 1–2 Hours
                  </h2>
                  <p className="text-sm text-primary-foreground/70 max-w-md">
                    Our certified technicians in {cityData.name} arrive at your doorstep fully equipped. No waiting, no hassle — just fast, reliable repairs.
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
                  <button onClick={() => navigate("/services")} className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 w-full md:w-auto justify-center">
                    {cityData.ctaText}
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="pb-8">
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Frequently Asked Questions – {cityData.name}</h2>
              <div className="space-y-3">
                {cityData.faqs.map((faq) => (
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
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

const Sparkle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
  </svg>
);

export default CityLanding;
