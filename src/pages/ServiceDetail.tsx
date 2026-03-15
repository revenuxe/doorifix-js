import { useState } from "react";
import { ChevronLeft, Star, Clock, CheckCircle, Phone } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.gif";
import { useNavigate, useParams } from "react-router-dom";
import DesktopHeader from "@/components/DesktopHeader";
import BookingForm from "@/components/BookingForm";
import SEO from "@/components/SEO";
import { services, getServiceBySlug } from "@/data/services";

// SEO keyword map per service slug for high-traffic terms
const seoKeywordMap: Record<string, { keywords: string; metaTitle: string; metaDesc: string }> = {
  "washing-machine-repair": {
    metaTitle: "Washing Machine Repair Near Me | Same-Day Doorstep Service – Arrowmind",
    metaDesc: "Book expert washing machine repair near you. Samsung, LG, Whirlpool, IFB, Bosch — all brands. Front load & top load repair. Free diagnosis, same-day doorstep service.",
    keywords: "washing machine repair near me, washing machine service near me, washing machine not spinning, washing machine not draining, front load washing machine repair, top load washing machine repair, samsung washing machine repair, lg washing machine repair, whirlpool washing machine repair, ifb washing machine repair, bosch washing machine repair, washing machine repair cost, washing machine technician near me, doorstep washing machine repair, washing machine drum repair, washing machine motor repair, automatic washing machine repair, semi automatic washing machine repair, washing machine water leak repair, washing machine repair at home",
  },
  "refrigerator-repair": {
    metaTitle: "Refrigerator Repair Near Me | Fridge Not Cooling? Same-Day Fix – Arrowmind",
    metaDesc: "Expert refrigerator repair near you. Fridge not cooling? Gas refill, compressor repair, thermostat fix. Samsung, LG, Whirlpool & all brands. Doorstep service.",
    keywords: "refrigerator repair near me, fridge repair near me, fridge not cooling, refrigerator gas refill, fridge compressor repair, double door fridge repair, single door fridge repair, samsung fridge repair, lg refrigerator repair, whirlpool fridge repair, godrej refrigerator repair, haier fridge repair, refrigerator repair cost, fridge thermostat repair, fridge door seal replacement, refrigerator technician near me, fridge repair at home, refrigerator not working, fridge ice maker repair, side by side fridge repair",
  },
  "ac-repair-service": {
    metaTitle: "AC Repair & Service Near Me | AC Not Cooling? Book Now – Arrowmind",
    metaDesc: "Professional AC repair & service near you. AC not cooling? Gas refill, deep cleaning, compressor repair. Split & window AC. All brands serviced. Same-day doorstep service.",
    keywords: "ac repair near me, ac service near me, ac not cooling, ac gas refill, split ac repair, window ac repair, ac deep cleaning, ac installation, ac compressor repair, daikin ac service, voltas ac repair, lg ac service, samsung ac repair, blue star ac service, ac technician near me, ac repair cost, ac maintenance, inverter ac repair, ac gas charging near me, ac cleaning service near me, central ac repair",
  },
  "microwave-repair": {
    metaTitle: "Microwave Repair Near Me | Not Heating? Expert Fix – Arrowmind",
    metaDesc: "Quick microwave repair near you. Microwave not heating? Turntable, magnetron, display repair. Samsung, LG, IFB & all brands. Doorstep service, free diagnosis.",
    keywords: "microwave repair near me, microwave not heating, microwave oven repair, microwave turntable repair, microwave magnetron repair, samsung microwave repair, lg microwave repair, ifb microwave repair, convection microwave repair, solo microwave repair, grill microwave repair, microwave door repair, microwave display not working, microwave sparking, microwave repair cost, microwave technician near me, microwave repair at home, oven repair near me",
  },
  "dryer-repair": {
    metaTitle: "Dryer Repair Near Me | Not Drying? Same-Day Service – Arrowmind",
    metaDesc: "Professional dryer repair near you. Dryer not drying? Heating element, drum, belt repair. All brands serviced. Doorstep service with free diagnosis.",
    keywords: "dryer repair near me, dryer not drying, clothes dryer repair, dryer heating element repair, dryer drum repair, dryer belt repair, samsung dryer repair, lg dryer repair, bosch dryer repair, ifb dryer repair, condenser dryer repair, heat pump dryer repair, dryer not spinning, dryer making noise, dryer repair cost, dryer technician near me, dryer vent cleaning, tumble dryer repair near me",
  },
  "dishwasher-repair": {
    metaTitle: "Dishwasher Repair Near Me | Not Draining? Expert Fix – Arrowmind",
    metaDesc: "Expert dishwasher repair near you. Dishwasher not draining? Spray arm, pump, leak repair. Bosch, IFB, Samsung & all brands. Same-day doorstep service.",
    keywords: "dishwasher repair near me, dishwasher not draining, dishwasher not cleaning, dishwasher leak repair, dishwasher spray arm repair, dishwasher pump repair, bosch dishwasher repair, ifb dishwasher repair, samsung dishwasher repair, lg dishwasher repair, siemens dishwasher repair, dishwasher error codes, dishwasher door latch repair, dishwasher repair cost, dishwasher technician near me, dishwasher not starting, dishwasher repair at home",
  },
};

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

  const applianceMap: Record<string, string> = {
    "Washing Machine": "Washing Machine",
    "Refrigerator": "Refrigerator",
    "AC Service": "AC",
    "Microwave": "Microwave",
    "Dryer": "Dryer",
  };
  const defaultAppliance = applianceMap[service.title] || service.title;
  const seoData = seoKeywordMap[service.slug];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={seoData?.metaTitle || `${service.title} Repair Near Me`}
        description={seoData?.metaDesc || `Book expert ${service.title.toLowerCase()} repair at your doorstep. Certified technicians, genuine parts. Same-day service.`}
        canonical={`/service/${service.slug}`}
        keywords={seoData?.keywords || `${service.title} repair near me, ${service.title} service near me`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: `${service.title} Repair`, url: `/service/${service.slug}` },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.title} Repair & Service`,
          "description": seoData?.metaDesc || service.detailDescription,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Arrowmind Service Center",
            "telephone": "+9109100038182",
            "email": "arrowmind.in@gmail.com",
          },
          "areaServed": [
            { "@type": "City", "name": "Bangalore" },
            { "@type": "City", "name": "Hyderabad" },
            { "@type": "City", "name": "Secunderabad" },
            { "@type": "City", "name": "Kochi" },
          ],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": String(service.rating), "reviewCount": "256" },
        }}
      />
      <DesktopHeader />

      <div className="max-w-[430px] md:max-w-5xl mx-auto flex-1 w-full">
        {/* Mobile Hero */}
        <div className="md:hidden relative rounded-b-[2rem] overflow-hidden min-h-[280px]">
          <img src={service.image} alt={`${service.title} repair near me`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="relative z-10 px-5 pt-6 pb-8">
            <button onClick={() => navigate("/")} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:px-0 md:pt-8">
          <div className="hidden md:block">
            <div className="rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[500px]">
              <img src={service.image} alt={`${service.title} repair service`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 rounded-3xl" />
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
              <button onClick={() => navigate("/services")} className="hover:text-foreground">Services</button>
              <span>/</span>
              <span className="text-foreground">{service.title}</span>
            </div>

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
                href="tel:+9109100038182"
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
              <a
                href="https://wa.me/9109100038182"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card rounded-xl p-3 border border-border text-center hover:shadow-md transition-shadow"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 mx-auto mb-1 rounded-full" />
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
              <h2 className="font-semibold text-base text-foreground mb-2">Service Description</h2>
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
