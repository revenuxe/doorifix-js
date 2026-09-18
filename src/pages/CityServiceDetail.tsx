"use client";

import { imageSrc } from "@/lib/image";
import { useState } from "react";
import { ChevronLeft, Star, Clock, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import whatsappIcon from "@/assets/whatsapp.gif";
import { useParams, useRouter } from "next/navigation";
import DesktopHeader from "@/components/DesktopHeader";
import BookingForm from "@/components/BookingForm";
import HomepageBookingForm from "@/components/HomepageBookingForm";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import LocalRepairContent from "@/components/LocalRepairContent";
import { getLocalGuide, localServiceCopy } from "@/data/local-content";
import CityBrandSection from "@/components/CityBrandSection";
import SEO from "@/components/SEO";
import { getServiceBySlug } from "@/data/services";
import { getCityBySlug } from "@/data/cities";
import { applianceIssues } from "@/data/applianceIssues";
import { slugify } from "@/data/areas";

const CityServiceDetail = () => {
  const router = useRouter();
  const navigate = (path: string | number) => {
    if (typeof path === "number") router.back();
    else router.push(path);
  };
  const { city, slug, issue } = useParams() as { city?: string; slug?: string; issue?: string };
  const service = getServiceBySlug(slug || "");
  const cityData = getCityBySlug(city || "");
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!service || !cityData) {
    return null;
  }

  const applianceMap: Record<string, string> = {
    "Washing Machine": "Washing Machine",
    "Refrigerator": "Refrigerator",
    "AC Service": "AC",
    "Microwave": "Microwave",
    "Dryer": "Dryer",
  };
  const defaultAppliance = applianceMap[service.title] || service.title;

  const cityAppliance = cityData.appliances.find((a) =>
    a.title.toLowerCase().includes(service.title.toLowerCase())
  );
  const issues = applianceIssues[service.slug] || [];
  const selectedIssue = issues.find((item) => slugify(item) === issue);
  const pageTitle = selectedIssue ? `${selectedIssue} ${service.title} Repair in ${cityData.name}` : `${service.title} Repair in ${cityData.name}`;
  const canonical = `/${cityData.slug}/service/${service.slug}${selectedIssue ? `/${slugify(selectedIssue)}` : ""}`;

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={pageTitle}
        description={`Expert ${selectedIssue ? `${selectedIssue.toLowerCase()} ` : ""}${service.title.toLowerCase()} repair service in ${cityData.name}. ${localServiceCopy(cityData, service).summary}`}
        canonical={canonical}
        keywords={`${service.title} repair ${cityData.name}, ${service.title} service ${cityData.name}, fix ${service.title} ${cityData.name}, ${cityAppliance?.keywords || ""}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: cityData.name, url: `/${cityData.slug}` },
          { name: `${service.title} Repair`, url: canonical },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.title} Repair & Service in ${cityData.name}`,
          "description": `Expert ${service.title.toLowerCase()} repair service in ${cityData.name}. ${service.detailDescription}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": `Doorifix – ${cityData.name}`,
            "telephone": "+919886579923",
            "areaServed": { "@type": "City", "name": cityData.name },
          },
          "areaServed": { "@type": "City", "name": cityData.name },
        }}
      />
      <DesktopHeader />

      <div className="max-w-[430px] md:max-w-5xl mx-auto flex-1 w-full">
        {/* Mobile Hero */}
        <div className="md:hidden relative">
          <div className="relative rounded-b-[2rem] overflow-hidden min-h-[280px]">
            <img src={imageSrc(service.image)} alt={`${service.title} repair in ${cityData.name}`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="relative z-10 px-5 pt-6 pb-8">
              <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>

          <div className="px-4 -mt-6 relative z-10">
            <div className="rounded-[28px] border border-border bg-card/95 p-3.5 shadow-[0_12px_35px_rgba(15,23,42,0.18)] backdrop-blur-sm">
              <h1 className="text-[1.55rem] leading-[0.96] font-bold tracking-[-0.04em] text-foreground">{pageTitle}</h1>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{selectedIssue ? `Doorstep diagnosis and repair for ${service.title.toLowerCase()} ${selectedIssue.toLowerCase()} in ${cityData.name}.` : service.description}</p>
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1.5 border border-amber-200">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className={s <= Math.floor(service.rating) ? "text-amber-500 fill-amber-500" : "text-amber-300"} />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">Visit by appointment</span>
              </div>
              <a href="tel:+919886579923" className="mt-3 inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground rounded-2xl px-5 py-3 text-base font-semibold shadow-[0_8px_18px_rgba(37,99,235,0.28)] hover:opacity-95 transition-opacity">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:px-0 md:pt-8">
          <div className="hidden md:block">
            <div className="rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[500px]">
              <img src={imageSrc(service.image)} alt={`${service.title} repair in ${cityData.name}`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            </div>

            <div className="-mt-6 relative z-10 mx-6 rounded-[28px] border border-border bg-card/95 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.18)] backdrop-blur-sm">
              <h1 className="text-[1.8rem] leading-[0.96] font-bold tracking-[-0.04em] text-foreground">{pageTitle}</h1>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{selectedIssue ? `Doorstep diagnosis and repair for ${service.title.toLowerCase()} ${selectedIssue.toLowerCase()} in ${cityData.name}.` : service.description}</p>
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1.5 border border-amber-200">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className={s <= Math.floor(service.rating) ? "text-amber-500 fill-amber-500" : "text-amber-300"} />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">Visit by appointment</span>
              </div>
              <a href="tel:+919886579923" className="mt-3 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-2xl px-5 py-3 text-base font-semibold shadow-[0_8px_18px_rgba(37,99,235,0.28)] hover:opacity-95 transition-opacity w-full">
                <Phone size={18} />
                Call Now
              </a>
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
              <span className="text-foreground">{service.title} Repair</span>
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
                {service.title} Service in {cityData.name}
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
                Book {service.title} Repair in {cityData.name}
              </button>
            </div>
          </div>
        </div>

        {issues.length > 0 && (
          <section className="px-5 md:px-8 lg:px-0 pb-8">
            <h2 className="font-semibold text-lg md:text-xl text-foreground mb-2">{service.title} Issues We Repair in {cityData.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">Choose an issue to view the dedicated repair service page and book a technician.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {issues.map((item) => (
                <Link key={item} href={`/${cityData.slug}/service/${service.slug}/${slugify(item)}`} className="rounded-2xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all">
                  <h3 className="font-semibold text-sm text-foreground">{item} Repair</h3>
                  <p className="text-xs text-muted-foreground mt-1">{service.title} repair in {cityData.name}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="px-5 md:px-8 lg:px-0 pb-8">
          <LocalRepairContent city={cityData} service={service} />
        </div>

        {service.slug === "washing-machine-repair" && ["mangalore", "chennai"].includes(cityData.slug) && (
          <div className="px-5 md:px-8 lg:px-0 pb-8">
            <CityBrandSection citySlug={cityData.slug} />
          </div>
        )}

        <div className="px-5 md:px-8 lg:px-0 pb-28 md:pb-10">
          <HomepageBookingForm
            eyebrow={`Book in ${cityData.name}`}
            title={`Book ${service.title} repair in ${cityData.name}`}
            description="Submit your details and the Doorifix team will call back with your booking ID."
            defaultAppliance={defaultAppliance}
          />
        </div>
      </div>

      <Footer serviceContext={{ slug: service.slug, title: service.title }} areaCitySlug={cityData.slug} />
      <BottomNav />

      <BookingForm open={bookingOpen} onOpenChange={setBookingOpen} defaultAppliance={defaultAppliance} />
    </div>
  );
};

export default CityServiceDetail;
