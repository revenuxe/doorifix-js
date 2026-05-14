"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import CategoryPills from "@/components/CategoryPills";
import DesktopHeader from "@/components/DesktopHeader";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { services } from "@/data/services";

const categoryToTitle: Record<string, string[]> = {
  "Washing Machine": ["Washing Machine"],
  "Refrigerator": ["Refrigerator"],
  "AC": ["AC Service"],
  "Microwave": ["Microwave"],
  "Dryer": ["Dryer"],
  "Dishwasher": ["Dishwasher"],
};

const Services = () => {
  const router = useRouter();
  const navigate = (path: string | number) => {
    if (typeof path === "number") router.back();
    else router.push(path);
  };
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "All");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory =
        activeCategory === "All" ||
        (categoryToTitle[activeCategory]?.some((t) => s.title.includes(t)) ?? false);
      const matchesSearch =
        !search ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title="All Services"
        description="Browse all appliance repair services — washing machine, refrigerator, AC, microwave, dryer & dishwasher repair by certified technicians at your doorstep."
        canonical="/services"
        keywords="appliance repair services, book appliance repair, washing machine service, fridge repair, AC repair near me"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Appliance Repair Services",
          "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": s.title,
            "description": s.description,
          })),
        }}
      />
      <DesktopHeader />

      <div className="max-w-[430px] md:max-w-none mx-auto flex-1 w-full">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-5 pt-6 pb-4 md:hidden">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground"
          >
            <ChevronLeft size={18} />
          </button>
          <h1 className="font-semibold text-lg text-foreground">Services</h1>
          <div className="w-9" />
        </div>

        {/* Mobile Search */}
        <div className="px-5 pb-3 md:hidden">
          <div className="flex items-center gap-2 bg-card rounded-2xl px-4 py-3 border border-border">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Desktop Title & Search */}
        <div className="hidden md:flex items-center justify-between px-8 lg:px-12 pt-8 pb-2">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Appliance Services</h1>
            <p className="text-muted-foreground mt-1">Browse our professional repair & servicing</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2.5 border border-border w-72">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="px-5 md:px-8 lg:px-12 py-3">
          <CategoryPills active={activeCategory} onSelect={setActiveCategory} />
        </div>

        {/* Service List */}
        <div className="flex-1 px-5 md:px-8 lg:px-12 pb-6 pt-2">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg font-medium">No services found</p>
              <p className="text-sm mt-1">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Services;
