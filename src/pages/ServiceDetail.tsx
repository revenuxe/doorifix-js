import { useState } from "react";
import { ChevronLeft, Star, Clock, CheckCircle, MapPin, Phone } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import DesktopHeader from "@/components/DesktopHeader";
import BookingForm from "@/components/BookingForm";
import SEO from "@/components/SEO";
import { services, getServiceBySlug } from "@/data/services";

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!service) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Service not found.</p>
      </div>
    );
  }

  // Map service title to the appliance type used in the booking form
  const applianceMap: Record<string, string> = {
    "Washing Machine": "Washing Machine",
    "Refrigerator": "Refrigerator",
    "AC Service": "AC",
    "Microwave": "Microwave",
    "Dryer": "Dryer",
  };
  const defaultAppliance = applianceMap[service.title] || service.title;

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={`${service.title} Repair Near Me`}
        description={`Book expert ${service.title.toLowerCase()} repair at your doorstep. Certified technicians, genuine parts. Same-day service in Bangalore.`}
        canonical={`/service/${service.slug}`}
        keywords={`${service.title} repair near me, ${service.title} service near me, fix ${service.title}, ${service.title} repair cost, ${service.title} repair Bangalore, ${service.title} technician, doorstep ${service.title} repair`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: `${service.title} Repair`, url: `/service/${service.slug}` },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.title} Repair & Service`,
          "description": service.detailDescription,
          "provider": { "@type": "LocalBusiness", "name": "Arrowmind Service Center" },
          "areaServed": "Bangalore, Karnataka",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": String(service.rating), "reviewCount": "256" },
        }}
      />
      <DesktopHeader />

      <div className="max-w-[430px] md:max-w-5xl mx-auto flex-1 w-full">
        {/* Mobile Hero - full image with dark overlay */}
        <div className="md:hidden relative rounded-b-[2rem] overflow-hidden min-h-[280px]">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 px-5 pt-6 pb-8">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:px-0 md:pt-8">
          {/* Desktop Hero Image - full with overlay */}
          <div className="hidden md:block">
            <div className="rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[500px]">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 rounded-3xl" />
            </div>

            {/* What's Included - Desktop */}
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

          {/* Content */}
          <div className="px-5 md:px-0 pt-5 pb-28 md:pb-8 space-y-5">
            {/* Breadcrumb - desktop */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <button onClick={() => navigate("/")} className="hover:text-foreground">Home</button>
              <span>/</span>
              <button onClick={() => navigate("/services")} className="hover:text-foreground">Services</button>
              <span>/</span>
              <span className="text-foreground">{service.title}</span>
            </div>

            {/* Title & Discount */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">{service.title} Repair Near Me</h1>
                <p className="text-sm text-muted-foreground mt-0.5">Certified doorstep {service.title.toLowerCase()} repair by expert technicians</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className={s <= Math.floor(service.rating) ? "text-amber-500 fill-amber-500" : "text-amber-500"} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">{service.rating} (256 reviews)</span>
                  </div>
                </div>
              </div>
              <a
                href="tel:+918884647100"
                className="bg-primary text-primary-foreground rounded-xl px-4 py-2.5 text-sm font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity flex-shrink-0"
              >
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
              <div className="flex-1 bg-card rounded-xl p-3 border border-border text-center">
                <MapPin size={16} className="text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">At Home</p>
                <p className="text-[10px] text-muted-foreground">Location</p>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-border text-center">
                <Star size={16} className="text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">{service.rating}</p>
                <p className="text-[10px] text-muted-foreground">Rating</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-semibold text-base text-foreground mb-2">Service Description</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.detailDescription}
              </p>
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
              <button
                onClick={() => setBookingOpen(true)}
                className="flex-1 bg-primary text-primary-foreground font-semibold py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-card/90 backdrop-blur-lg border-t border-border px-5 py-4 z-50">
        <button
          onClick={() => setBookingOpen(true)}
          className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm"
        >
          Book Now
        </button>
      </div>

      <BookingForm open={bookingOpen} onOpenChange={setBookingOpen} defaultAppliance={defaultAppliance} />
    </div>
  );
};

export default ServiceDetail;
