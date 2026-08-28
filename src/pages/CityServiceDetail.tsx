"use client";

import { imageSrc } from "@/lib/image";
import { useState } from "react";
import { ChevronLeft, Star, Clock, CheckCircle, Phone, ArrowRight, Search, MapPin } from "lucide-react";
import Link from "next/link";
import whatsappIcon from "@/assets/whatsapp.gif";
import { useParams, useRouter } from "next/navigation";
import DesktopHeader from "@/components/DesktopHeader";
import BookingForm from "@/components/BookingForm";
import HomepageBookingForm from "@/components/HomepageBookingForm";
import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getServiceBySlug } from "@/data/services";
import { getCityBySlug } from "@/data/cities";
import { brands } from "@/data/brands";
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
  const washingMachineBrands = cityData.slug === "mangalore" && service.slug === "washing-machine-repair"
    ? brands.filter((brand) => brand.serviceSlugs.includes("washing-machine-repair"))
    : [];
  const isMangaloreWashingMachine = cityData.slug === "mangalore" && service.slug === "washing-machine-repair";
  const isMangaloreWashingMachineLanding = isMangaloreWashingMachine && !selectedIssue;
  const isBangaloreWashingMachineLanding = cityData.slug === "bangalore" && service.slug === "washing-machine-repair" && !selectedIssue;

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={pageTitle}
        description={`Expert ${selectedIssue ? `${selectedIssue.toLowerCase()} ` : ""}${service.title.toLowerCase()} repair service in ${cityData.name}. ${service.detailDescription}`}
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
        {isBangaloreWashingMachineLanding && (
          <nav
            aria-label="Washing machine repair locations"
            className="mx-5 md:mx-8 lg:mx-0 mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-3"
          >
            <span className="flex items-center gap-1.5 px-2 text-sm font-medium text-foreground">
              <MapPin size={15} className="text-primary" />
              Choose location:
            </span>
            <Link
              href="/bangalore/service/washing-machine-repair"
              aria-current="page"
              className="rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
            >
              Bangalore
            </Link>
            <Link
              href="/mangalore/service/washing-machine-repair"
              className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Mangalore
            </Link>
          </nav>
        )}

        {isMangaloreWashingMachineLanding && (
          <section className="px-5 md:px-8 lg:px-0 pt-8 md:pt-12 pb-8 md:pb-12 md:grid md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05]">Washing Machine Repair in Mangalore</h1>
                <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">Front load, top load, fully automatic and semi-automatic washing machine repair by trained doorstep technicians in Mangalore.</p>
              </div>
              <form className="flex items-center gap-3 bg-card rounded-2xl px-4 py-3 border border-border" onSubmit={(event) => { event.preventDefault(); setBookingOpen(true); }}>
                <Search size={18} className="text-muted-foreground" />
                <input type="text" placeholder="Search washing machine issue..." className="bg-transparent outline-none flex-1 text-sm text-foreground placeholder:text-muted-foreground" />
              </form>
            </div>
            <div className="relative rounded-3xl overflow-hidden min-h-[300px] md:min-h-[430px] cursor-pointer mt-6 md:mt-0" onClick={() => setBookingOpen(true)}>
              <img src={imageSrc(service.image)} alt="Washing machine repair in Mangalore" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/15" />
              <div className="relative z-10 p-5 md:p-8 space-y-3 h-full flex flex-col justify-end">
                <div className="flex items-center gap-1 text-white/80"><Star size={16} className="fill-amber-400 text-amber-400" /><span className="text-sm font-medium">{service.rating} (256 reviews)</span></div>
                <h2 className="text-2xl md:text-4xl font-bold text-white">Washing Machine Repair<br />at Home</h2>
                <p className="text-white/85 text-sm md:text-base max-w-md">Drum noise, water leakage, spin failure, drainage issue, inlet valve fault and PCB diagnosis handled at home.</p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="bg-white text-foreground text-xs md:text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity" onClick={(event) => { event.stopPropagation(); setBookingOpen(true); }}>Book Now <ArrowRight size={14} /></button>
                  <a href="tel:+919886579923" className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 text-white text-sm" onClick={(event) => event.stopPropagation()}><Phone size={14} /> Call Now</a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Mobile Hero */}
        {!isMangaloreWashingMachineLanding && <div className="md:hidden relative rounded-b-[2rem] overflow-hidden min-h-[280px]">
          <img src={imageSrc(service.image)} alt={`${service.title} repair in ${cityData.name}`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
          <div className="relative z-10 px-5 pt-6 pb-8">
            <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>}

        {/* Desktop Layout */}
        {!isMangaloreWashingMachineLanding && <div className="md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:px-0 md:pt-8">
          <div className="hidden md:block">
            <div className="rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[500px]">
              <img src={imageSrc(service.image)} alt={`${service.title} repair in ${cityData.name}`} className="absolute inset-0 w-full h-full object-cover" />
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
              <span className="text-foreground">{service.title} Repair</span>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">{pageTitle}</h1>
                <p className="text-sm text-muted-foreground mt-0.5">{selectedIssue ? `Doorstep diagnosis and repair for washing machine ${selectedIssue.toLowerCase()} in Mangalore.` : service.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className={s <= Math.floor(service.rating) ? "text-amber-500 fill-amber-500" : "text-amber-500"} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">{service.rating} (256 reviews)</span>
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
                {service.title} Service in {cityData.name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.detailDescription}</p>
              {cityAppliance && (
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Looking for <strong>{cityAppliance.title}</strong>? Our certified technicians in {cityData.name} specialize in {cityAppliance.keywords}.
                </p>
              )}
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
        </div>}

        {selectedIssue && isMangaloreWashingMachine && (
          <section className="px-5 md:px-8 lg:px-0 pb-8 md:pb-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-card border border-border p-5 md:p-7">
              <p className="text-sm text-primary font-semibold">Mangalore Washing Machine Repair</p>
              <h2 className="text-2xl font-bold text-foreground mt-2">{selectedIssue} — diagnosed at home</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">A washing machine can develop a {selectedIssue.toLowerCase()} because of wear, blocked components, loose wiring, an imbalance, or an electrical fault. Our Mangalore technician checks the machine safely at your doorstep, explains the fault, and shares the repair cost before work starts.</p>
            </div>
            <div className="rounded-3xl bg-card border border-border p-5 md:p-7">
              <h2 className="text-xl font-bold text-foreground">What the technician checks</h2>
              <div className="grid gap-3 mt-5">
                {["Power supply, controls and error indicators", "Relevant mechanical parts, wiring and connections", "Water flow, drainage and spin operation", "A complete test cycle after the repair"].map((item) => (
                  <div key={item} className="flex items-start gap-3"><CheckCircle size={17} className="text-primary mt-0.5 flex-shrink-0" /><span className="text-sm text-muted-foreground">{item}</span></div>
                ))}
              </div>
              <button onClick={() => setBookingOpen(true)} className="mt-6 w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm">Book {selectedIssue} Repair in Mangalore</button>
            </div>
          </section>
        )}

        {isMangaloreWashingMachineLanding && (
          <section className="px-5 md:px-8 lg:px-0 pb-10">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="text-sm text-primary font-semibold">Washing Machine Repair</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">Book by issue type</h2>
              </div>
              <button onClick={() => navigate(`/${cityData.slug}`)} className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">All services <ArrowRight size={14} /></button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {issues.map((item, index) => (
                <ServiceCard
                  key={item}
                  id={index + 1}
                  title={item}
                  description={`Washing Machine Repair for ${item.toLowerCase()} in Mangalore.`}
                  image={service.image}
                  color="blue"
                  slug={service.slug}
                  rating={service.rating}
                  duration="1-2 hrs"
                  href={`/${cityData.slug}/service/${service.slug}/${slugify(item)}`}
                />
              ))}
            </div>
          </section>
        )}

        {!isMangaloreWashingMachine && issues.length > 0 && (
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

        {isMangaloreWashingMachineLanding && washingMachineBrands.length > 0 && (
          <section className="px-5 md:px-8 lg:px-0 pb-8">
            <p className="text-sm text-primary font-semibold">Washing Machine Repair</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1 mb-5">Brands We Repair</h2>
            <div className="grid grid-cols-3 gap-3">
              {washingMachineBrands.map((brand) => (
                <Link key={brand.slug} href={`/mangalore/washing-machine/brands/${brand.slug}`} className="min-h-36 rounded-3xl border border-border bg-card p-4 flex flex-col items-center justify-center gap-5 text-sm font-semibold text-foreground hover:border-primary/40 hover:shadow-sm transition-all">
                  <img src={imageSrc(brand.logo)} alt={`${brand.name} logo`} className="h-10 w-20 object-contain" />
                  {brand.name}
                </Link>
              ))}
            </div>
            <Link href="/brand/not-listed" className="inline-block mt-5 text-sm font-medium text-primary hover:underline">Don't see your brand? We repair it anyway →</Link>
          </section>
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

      {isMangaloreWashingMachineLanding && <Footer areaCitySlug="mangalore" />}
      <BottomNav />

      <BookingForm open={bookingOpen} onOpenChange={setBookingOpen} defaultAppliance={defaultAppliance} />
    </div>
  );
};

export default CityServiceDetail;
