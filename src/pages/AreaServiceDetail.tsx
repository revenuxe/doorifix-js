"use client";

import { imageSrc } from "@/lib/image";
import { useState } from "react";
import { ChevronLeft, Star, Clock, CheckCircle, Phone } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.gif";
import { useParams, useRouter } from "next/navigation";
import DesktopHeader from "@/components/DesktopHeader";
import BookingForm from "@/components/BookingForm";
import HomepageBookingForm from "@/components/HomepageBookingForm";
import Footer from "@/components/Footer";
import LocalRepairContent from "@/components/LocalRepairContent";
import { getLocalGuide, localServiceCopy } from "@/data/local-content";
import CityBrandSection from "@/components/CityBrandSection";
import SEO from "@/components/SEO";
import { getServiceBySlug } from "@/data/services";
import { getCityBySlug } from "@/data/cities";
import { getAreaByCityAndSlug } from "@/data/areas";

const applianceMap: Record<string, string> = {
  "Washing Machine": "Washing Machine",
  "Refrigerator": "Refrigerator",
  "AC Service": "AC",
  "Microwave": "Microwave",
  "Dryer": "Dryer",
  "Dishwasher": "Dishwasher",
};

const AreaServiceDetail = () => {
  const router = useRouter();
  const navigate = (path: string | number) => {
    if (typeof path === "number") router.back();
    else router.push(path);
  };
  const { city, area, slug } = useParams() as { city?: string; area?: string; slug?: string };
  const service = getServiceBySlug(slug || "");
  const cityData = getCityBySlug(city || "");
  const areaName = cityData ? getAreaByCityAndSlug(cityData.slug, area || "") : undefined;
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!service || !cityData || !areaName) {
    return null;
  }

  const defaultAppliance = applianceMap[service.title] || service.title;

  const cityAppliance = cityData.appliances.find((a) =>
    a.title.toLowerCase().includes(service.title.toLowerCase())
  );

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={`${service.title} Repair in ${areaName}, ${cityData.name}`}
        description={`Expert ${service.title.toLowerCase()} repair service in ${areaName}, ${cityData.name}. ${localServiceCopy(cityData, service).summary}`}
        canonical={`/${cityData.slug}/${area}/service/${service.slug}`}
        keywords={`${service.title} repair ${areaName}, ${service.title} service ${areaName}, fix ${service.title} ${areaName}, ${cityAppliance?.keywords || ""}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: cityData.name, url: `/${cityData.slug}` },
          { name: areaName, url: `/${cityData.slug}/${area}` },
          { name: `${service.title} Repair`, url: `/${cityData.slug}/${area}/service/${service.slug}` },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.title} Repair & Service in ${areaName}, ${cityData.name}`,
          "description": `Expert ${service.title.toLowerCase()} repair service in ${areaName}, ${cityData.name}. ${service.detailDescription}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": `Doorifix – ${areaName}, ${cityData.name}`,
            "telephone": "+919886579923",
            "areaServed": { "@type": "Place", "name": `${areaName}, ${cityData.name}` },
          },
          "areaServed": { "@type": "Place", "name": `${areaName}, ${cityData.name}` },
        }}
      />
      <DesktopHeader />

      <div className="max-w-[430px] md:max-w-5xl mx-auto flex-1 w-full">
        {/* Mobile Hero */}
        <div className="md:hidden relative rounded-b-[2rem] overflow-hidden min-h-[280px]">
          <img src={imageSrc(service.image)} alt={`${service.title} repair in ${areaName}, ${cityData.name}`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
          <div className="relative z-10 px-5 pt-6 pb-8">
            <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:px-0 md:pt-8">
          <div className="hidden md:block">
            <div className="rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[500px]">
              <img src={imageSrc(service.image)} alt={`${service.title} repair in ${areaName}, ${cityData.name}`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-3xl bg-gradient-to-t from-primary/25 via-primary/10 to-transparent" />
            </div>

            <div className="mt-6 bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-semibold text-base text-foreground mb-4">What's Included</h2>
              <div className="grid grid-cols-2 gap-3">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 md:px-0 pt-5 pb-28 md:pb-8 space-y-5">
            {/* Breadcrumb */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <button onClick={() => navigate("/")} className="hover:text-foreground">Home</button>
              <span>/</span>
              <button onClick={() => navigate(`/${cityData.slug}`)} className="hover:text-foreground">{cityData.name}</button>
              <span>/</span>
              <button onClick={() => navigate(`/${cityData.slug}/${area}`)} className="hover:text-foreground">{areaName}</button>
              <span>/</span>
              <span className="text-foreground">{service.title} Repair</span>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">{service.title} Repair in {areaName}, {cityData.name}</h1>
                <p className="text-sm text-muted-foreground mt-0.5">{service.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className={s <= Math.floor(service.rating) ? "text-amber-500 fill-amber-500" : "text-amber-500"} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">Visit by appointment</span>
                  </div>
                </div>
              </div>
              <a href="tel:+919886579923" className="bg-primary text-primary-foreground rounded-xl px-4 py-2.5 text-sm font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity flex-shrink-0">
                <Phone size={14} />
                Call Now
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex gap-3">
              <div className="flex-1 bg-card rounded-xl p-3 border border-border text-center">
                <Clock size={16} className="text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">{service.duration}</p>
                <p className="text-[10px] text-muted-foreground">Duration</p>
              </div>
              <a
                href="https://wa.me/919886579923"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card rounded-xl p-3 border border-border text-center hover:shadow-md transition-shadow"
              >
                <img src={imageSrc(whatsappIcon)} alt="WhatsApp" className="w-5 h-5 mx-auto mb-1 rounded-full" />
                <p className="text-xs font-medium text-foreground">WhatsApp</p>
                <p className="text-[10px] text-muted-foreground">Chat Now</p>
              </a>
              <div className="flex-1 bg-card rounded-xl p-3 border border-border text-center">
                <Star size={16} className="text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">{service.rating}</p>
                <p className="text-[10px] text-muted-foreground">Rating</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-semibold text-base text-foreground mb-2">
                {service.title} Service in {areaName}, {cityData.name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.detailDescription}</p>

            </div>

            {/* Mobile What's Included */}
            <div className="md:hidden">
              <h2 className="font-semibold text-base text-foreground mb-3">What's Included</h2>
              <div className="space-y-2">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex pt-4">
              <button onClick={() => setBookingOpen(true)} className="flex-1 bg-primary text-primary-foreground font-semibold py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity">
                Book {service.title} Repair in {areaName}
              </button>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-8 lg:px-0 pb-8">
          <LocalRepairContent city={cityData} area={areaName} service={service} />
        </div>

        {service.slug === "washing-machine-repair" && ["mangalore", "chennai"].includes(cityData.slug) && (
          <div className="px-5 md:px-8 lg:px-0 pb-8">
            <CityBrandSection citySlug={cityData.slug} />
          </div>
        )}

        <div className="px-5 md:px-8 lg:px-0 pb-28 md:pb-10">
          <HomepageBookingForm
            eyebrow={`Book in ${areaName}, ${cityData.name}`}
            title={`Book ${service.title} repair in ${areaName}`}
            description="Submit your details and the Doorifix team will call back with your booking ID."
            defaultAppliance={defaultAppliance}
          />
        </div>
      </div>

      <Footer serviceContext={{ slug: service.slug, title: service.title }} areaCitySlug={cityData.slug} />

      {/* Mobile Bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-card/90 backdrop-blur-lg border-t border-border px-5 py-4 z-50">
        <a
          href="tel:+919886579923"
          className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-base flex items-center justify-center gap-2 shadow-sm tracking-wide"
        >
          <Phone size={18} />
          +91 98865 79923
        </a>
      </div>

      <BookingForm open={bookingOpen} onOpenChange={setBookingOpen} defaultAppliance={defaultAppliance} />
    </div>
  );
};

export default AreaServiceDetail;
