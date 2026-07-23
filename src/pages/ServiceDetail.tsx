"use client";

import { imageSrc } from "@/lib/image";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Search,
  Star,
} from "lucide-react";
import DesktopHeader from "@/components/DesktopHeader";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import HomepageBookingForm from "@/components/HomepageBookingForm";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";
import whatsappIcon from "@/assets/whatsapp.gif";
import doorifixLogo from "@/assets/doorifix-logo.webp";
import { services, getServiceBySlug, type ServiceData } from "@/data/services";

// SEO keyword map per service slug for high-traffic terms
const seoKeywordMap: Record<string, { keywords: string; metaTitle: string; metaDesc: string }> = {
  "washing-machine-repair": {
    metaTitle: "Washing Machine Repair Near Me | Same-Day Doorstep Service - Doorifix",
    metaDesc: "Book expert washing machine repair near you. Samsung, LG, Whirlpool, IFB, Bosch - all brands. Front load & top load repair. Free diagnosis, same-day doorstep service.",
    keywords: "washing machine repair near me, washing machine service near me, washing machine not spinning, washing machine not draining, front load washing machine repair, top load washing machine repair, samsung washing machine repair, lg washing machine repair, whirlpool washing machine repair, ifb washing machine repair, bosch washing machine repair, washing machine repair cost, washing machine technician near me, doorstep washing machine repair, washing machine drum repair, washing machine motor repair, automatic washing machine repair, semi automatic washing machine repair, washing machine water leak repair, washing machine repair at home",
  },
  "refrigerator-repair": {
    metaTitle: "Refrigerator Repair Near Me | Fridge Not Cooling? Same-Day Fix - Doorifix",
    metaDesc: "Expert refrigerator repair near you. Fridge not cooling? Gas refill, compressor repair, thermostat fix. Samsung, LG, Whirlpool & all brands. Doorstep service.",
    keywords: "refrigerator repair near me, fridge repair near me, fridge not cooling, refrigerator gas refill, fridge compressor repair, double door fridge repair, single door fridge repair, samsung fridge repair, lg refrigerator repair, whirlpool fridge repair, godrej refrigerator repair, haier fridge repair, refrigerator repair cost, fridge thermostat repair, fridge door seal replacement, refrigerator technician near me, fridge repair at home, refrigerator not working, fridge ice maker repair, side by side fridge repair",
  },
  "ac-repair-service": {
    metaTitle: "AC Repair & Service Near Me | AC Not Cooling? Book Now - Doorifix",
    metaDesc: "Professional AC repair & service near you. AC not cooling? Gas refill, deep cleaning, compressor repair. Split & window AC. All brands serviced. Same-day doorstep service.",
    keywords: "ac repair near me, ac service near me, ac not cooling, ac gas refill, split ac repair, window ac repair, ac deep cleaning, ac installation, ac compressor repair, daikin ac service, voltas ac repair, lg ac service, samsung ac repair, blue star ac service, ac technician near me, ac repair cost, ac maintenance, inverter ac repair, ac gas charging near me, ac cleaning service near me, central ac repair",
  },
  "microwave-repair": {
    metaTitle: "Microwave Repair Near Me | Not Heating? Expert Fix - Doorifix",
    metaDesc: "Quick microwave repair near you. Microwave not heating? Turntable, magnetron, display repair. Samsung, LG, IFB & all brands. Doorstep service, free diagnosis.",
    keywords: "microwave repair near me, microwave not heating, microwave oven repair, microwave turntable repair, microwave magnetron repair, samsung microwave repair, lg microwave repair, ifb microwave repair, convection microwave repair, solo microwave repair, grill microwave repair, microwave door repair, microwave display not working, microwave sparking, microwave repair cost, microwave technician near me, microwave repair at home, oven repair near me",
  },
  "dryer-repair": {
    metaTitle: "Dryer Repair Near Me | Not Drying? Same-Day Service - Doorifix",
    metaDesc: "Professional dryer repair near you. Dryer not drying? Heating element, drum, belt repair. All brands serviced. Doorstep service with free diagnosis.",
    keywords: "dryer repair near me, dryer not drying, clothes dryer repair, dryer heating element repair, dryer drum repair, dryer belt repair, samsung dryer repair, lg dryer repair, bosch dryer repair, ifb dryer repair, condenser dryer repair, heat pump dryer repair, dryer not spinning, dryer making noise, dryer repair cost, dryer technician near me, dryer vent cleaning, tumble dryer repair near me",
  },
  "dishwasher-repair": {
    metaTitle: "Dishwasher Repair Near Me | Not Draining? Expert Fix - Doorifix",
    metaDesc: "Expert dishwasher repair near you. Dishwasher not draining? Spray arm, pump, leak repair. Bosch, IFB, Samsung & all brands. Same-day doorstep service.",
    keywords: "dishwasher repair near me, dishwasher not draining, dishwasher not cleaning, dishwasher leak repair, dishwasher spray arm repair, dishwasher pump repair, bosch dishwasher repair, ifb dishwasher repair, samsung dishwasher repair, lg dishwasher repair, siemens dishwasher repair, dishwasher error codes, dishwasher door latch repair, dishwasher repair cost, dishwasher technician near me, dishwasher not starting, dishwasher repair at home",
  },
};

const applianceMap: Record<string, string> = {
  "Washing Machine": "Washing Machine",
  Refrigerator: "Refrigerator",
  "AC Service": "AC",
  Microwave: "Microwave",
  Dryer: "Dryer",
  Dishwasher: "Dishwasher",
};

const serviceCopy: Record<string, {
  headline: string;
  subheadline: string;
  proof: string;
  searchPlaceholder: string;
  issues: string[];
  outcomes: string[];
  steps: string[];
}> = {
  "washing-machine-repair": {
    headline: "Washing Machine Repair in Bangalore",
    subheadline: "Front load, top load, fully automatic and semi-automatic washing machine repair by trained doorstep technicians.",
    proof: "Drum noise, water leakage, spin failure, drainage issue, inlet valve fault and PCB diagnosis handled at home.",
    searchPlaceholder: "Search washing machine issue...",
    issues: ["Not spinning", "Water leakage", "Drainage problem", "Drum noise", "Door lock fault", "Power or PCB issue"],
    outcomes: ["Balanced drum movement", "Clear water flow", "Lower vibration", "Tested wash cycle"],
    steps: ["Inspect machine and error symptoms", "Diagnose motor, pump, inlet and drum parts", "Share quote before repair", "Repair, test and confirm warranty"],
  },
  "refrigerator-repair": {
    headline: "Refrigerator Repair in Bangalore",
    subheadline: "Single door, double door, side-by-side and inverter refrigerator repair for cooling and compressor issues.",
    proof: "Cooling loss, gas leakage, thermostat faults, fan motor issues and door seal problems fixed with clear diagnosis.",
    searchPlaceholder: "Search fridge issue...",
    issues: ["Not cooling", "Gas leakage", "Compressor fault", "Ice buildup", "Door seal issue", "Water leakage"],
    outcomes: ["Stable cooling", "Leak checked system", "Fresh door seal", "Tested thermostat"],
    steps: ["Check cooling and frost pattern", "Inspect compressor, fan and thermostat", "Quote repair or refill work", "Run final cooling test"],
  },
  "ac-repair-service": {
    headline: "AC Repair & Service in Bangalore",
    subheadline: "Split AC, window AC and inverter AC repair, gas refill, deep cleaning and installation support.",
    proof: "Weak cooling, water dripping, gas leakage, noisy outdoor units and electrical faults handled by trained AC technicians.",
    searchPlaceholder: "Search AC issue...",
    issues: ["Not cooling", "Gas refill", "Water dripping", "Deep cleaning", "Compressor issue", "Installation support"],
    outcomes: ["Cleaner airflow", "Better cooling", "Lower load", "Drainage checked"],
    steps: ["Inspect filters, coil and airflow", "Check gas pressure and leakage", "Clean or repair required parts", "Run cooling performance test"],
  },
  "microwave-repair": {
    headline: "Microwave Repair in Bangalore",
    subheadline: "Solo, grill and convection microwave repair for heating, display, sparking and turntable issues.",
    proof: "Magnetron faults, door switch issues, control panel errors and turntable motor problems repaired safely.",
    searchPlaceholder: "Search microwave issue...",
    issues: ["Not heating", "Sparking", "Turntable issue", "Door switch fault", "Display problem", "Power failure"],
    outcomes: ["Safe heating", "Working controls", "Stable turntable", "Door safety tested"],
    steps: ["Check power and safety switches", "Test magnetron and control board", "Repair approved fault", "Verify heating performance"],
  },
  "dryer-repair": {
    headline: "Dryer Repair in Bangalore",
    subheadline: "Condenser, heat pump and tumble dryer repair for heating, belt, drum, sensor and ventilation issues.",
    proof: "Dryer not drying, overheating, drum noise, belt faults and vent blockages diagnosed at your doorstep.",
    searchPlaceholder: "Search dryer issue...",
    issues: ["Not drying", "No heat", "Drum noise", "Belt issue", "Sensor fault", "Vent blockage"],
    outcomes: ["Better drying", "Clean ventilation", "Smooth drum run", "Heat system tested"],
    steps: ["Inspect heating and airflow", "Check belt, drum and sensors", "Repair or replace required parts", "Run timed drying test"],
  },
  "dishwasher-repair": {
    headline: "Dishwasher Repair in Bangalore",
    subheadline: "Dishwasher repair for drainage, spray arm, pump motor, water inlet, leakage and cleaning problems.",
    proof: "Bosch, IFB, LG, Samsung and major dishwasher models serviced with pump, inlet and wash-cycle diagnosis.",
    searchPlaceholder: "Search dishwasher issue...",
    issues: ["Not draining", "Not cleaning", "Water leakage", "Spray arm issue", "Pump fault", "Door latch fault"],
    outcomes: ["Clear drainage", "Better wash pressure", "Leak checked tub", "Cycle tested"],
    steps: ["Inspect drainage and spray arms", "Check pump, inlet and latch", "Share repair estimate", "Run full wash-cycle test"],
  },
};

type ServiceIssueCard = Pick<ServiceData, "id" | "slug" | "title" | "description" | "image" | "color" | "rating" | "duration"> & {
  href: string;
};

// Pilot for area+service footer links and pages — expand to the other
// service slugs once this has been reviewed.
const AREA_SERVICE_PILOT_SLUGS = ["washing-machine-repair"];

const slugifyIssue = (value: string) =>
  value.toLowerCase().trim().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const serviceIssueCards: Record<string, ServiceIssueCard[]> = Object.fromEntries(
  services.map((service) => [
    service.slug,
    (serviceCopy[service.slug]?.issues || []).map((issue, index) => ({
      id: service.id * 100 + index,
      slug: service.slug,
      title: issue,
      description: `${serviceRepairTitle(service)} for ${issue.toLowerCase()} in Bangalore.`,
      image: service.image,
      color: service.color,
      rating: service.rating,
      duration: service.duration,
      href: `/service/${service.slug}/${slugifyIssue(issue)}`,
    })),
  ]),
);

function serviceRepairTitle(service: ServiceData) {
  return service.title === "AC Service" ? "AC Repair & Service" : `${service.title} Repair`;
}

const ServiceDetail = () => {
  const router = useRouter();
  const navigate = (path: string | number) => {
    if (typeof path === "number") router.back();
    else router.push(path);
  };
  const { slug, issue } = useParams() as { slug?: string; issue?: string };
  const service = getServiceBySlug(slug || "");
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!service) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Service not found.</p>
      </div>
    );
  }

  const seoData = seoKeywordMap[service.slug];
  const copy = serviceCopy[service.slug];
  const defaultAppliance = applianceMap[service.title] || service.title;
  const issueCards = serviceIssueCards[service.slug] || [];
  const selectedIssue = copy.issues.find((item) => slugifyIssue(item) === issue);
  const pageTitle = selectedIssue
    ? `${selectedIssue} ${serviceRepairTitle(service)} in Bangalore`
    : copy.headline;
  const pageSubheadline = selectedIssue
    ? `Book Doorifix support for ${selectedIssue.toLowerCase()} with ${serviceRepairTitle(service).toLowerCase()} technicians in Bangalore.`
    : copy.subheadline;

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={seoData?.metaTitle || `${serviceRepairTitle(service)} Near Me`}
        description={seoData?.metaDesc || `Book expert ${service.title.toLowerCase()} repair at your doorstep. Certified technicians, genuine parts. Same-day service.`}
        canonical={`/service/${service.slug}`}
        keywords={seoData?.keywords || `${service.title} repair near me, ${service.title} service near me`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: serviceRepairTitle(service), url: `/service/${service.slug}` },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${serviceRepairTitle(service)} in Bangalore`,
          "description": seoData?.metaDesc || service.detailDescription,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Doorifix",
            "telephone": "+919886579923",
            "email": "doorifix@gmail.com",
          },
          "areaServed": [
            { "@type": "City", "name": "Bangalore" },
            { "@type": "City", "name": "Bengaluru" },
          ],
        }}
      />
      <DesktopHeader />

      <main className="flex-1">
        <div className="max-w-[430px] md:max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-6 md:py-10 pb-24 md:pb-12">
          <section className="md:grid md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:items-center">
            <div className="space-y-6">
              <div className="flex items-center justify-between md:hidden">
                <button onClick={() => navigate("/")} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground">
                  <ArrowRight size={18} className="rotate-180" />
                </button>
                <img src={imageSrc(doorifixLogo)} alt="Doorifix" className="h-10 object-contain" />
                <a href="tel:+919886579923" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={16} />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05]">
                    {pageTitle}
                  </h1>
                  <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
                    {pageSubheadline}
                  </p>
                </div>
              </div>

              <form className="flex items-center gap-3 bg-card rounded-2xl px-4 py-3 border border-border" onSubmit={(event) => {
                event.preventDefault();
                navigate(`/services?q=${encodeURIComponent(copy.searchPlaceholder.replace("Search ", "").replace("...", ""))}`);
              }}>
                <Search size={18} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder={copy.searchPlaceholder}
                  className="bg-transparent outline-none flex-1 text-sm text-foreground placeholder:text-muted-foreground"
                />
              </form>

            </div>

            <div className="relative rounded-3xl overflow-hidden min-h-[300px] md:min-h-[430px] cursor-pointer mt-6 md:mt-0" onClick={() => setBookingOpen(true)}>
              <img src={imageSrc(service.image)} alt={`${serviceRepairTitle(service)} in Bangalore`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
              <div className="relative z-10 p-5 md:p-8 space-y-3 h-full flex flex-col justify-end">
                <div className="flex items-center gap-1 text-white/80">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">{service.rating} (256 reviews)</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  {selectedIssue || serviceRepairTitle(service)}<br />at Home
                </h2>
                <p className="text-white/85 text-sm md:text-base max-w-md">
                  {copy.proof}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="bg-white text-foreground text-xs md:text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity" onClick={(event) => {
                    event.stopPropagation();
                    setBookingOpen(true);
                  }}>
                    Book Now <ArrowRight size={14} />
                  </button>
                  <a href="tel:+919886579923" className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 text-white text-sm" onClick={(event) => event.stopPropagation()}>
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 md:mt-10">
            <HomepageBookingForm
              eyebrow={selectedIssue ? "Book This Issue" : "Book This Service"}
              title={selectedIssue ? `${selectedIssue} service request` : `Book ${serviceRepairTitle(service)} at home`}
              description="Submit your details and the Doorifix team will call back with your booking ID."
              defaultAppliance={defaultAppliance}
              defaultIssue={selectedIssue}
            />
          </div>

          <section className="mt-12 md:mt-16">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="text-sm text-primary font-semibold">{serviceRepairTitle(service)}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">Book by issue type</h2>
              </div>
              <button onClick={() => navigate("/services")} className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
                All services <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {issueCards.map((item) => (
                <ServiceCard key={item.id} {...item} />
              ))}
            </div>
          </section>

          <section className="mt-12 md:mt-16 grid gap-4 md:grid-cols-2">
            <div className="bg-card border border-border rounded-3xl p-5 md:p-7">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">What's Included</h2>
              <div className="grid gap-3 mt-5">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={17} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-5 md:p-7">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Issues We Handle</h2>
              <div className="grid gap-3 mt-5">
                {copy.issues.map((issue) => (
                  <div key={issue} className="flex items-center gap-3">
                    <CheckCircle size={17} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-4 md:mt-6">
            <div className="bg-card border border-border rounded-3xl p-5 md:p-7">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">How It Works</h2>
              <div className="grid gap-3 mt-5 md:grid-cols-4">
                {copy.steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 md:mt-16">
            <div className="relative rounded-3xl overflow-hidden bg-primary p-6 md:p-10">
              <div className="relative z-10 md:flex items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground">
                    Book {serviceRepairTitle(service)} in Bangalore
                  </h2>
                  <p className="text-primary-foreground/75 mt-2 max-w-xl">
                    {service.detailDescription}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-5 max-w-md">
                    {copy.outcomes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-primary-foreground/85 text-sm">
                        <CheckCircle size={15} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="mt-6 md:mt-0 bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 w-full md:w-auto justify-center"
                >
                  Submit Booking <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>

          <section className="mt-12 md:mt-16 grid gap-3 md:grid-cols-3">
            <a href="tel:+919886579923" className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
              <Phone size={20} className="text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Call Now</p>
                <p className="text-xs text-muted-foreground">9886 579 923</p>
              </div>
            </a>
            <a href="https://wa.me/919886579923" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
              <img src={imageSrc(whatsappIcon)} alt="WhatsApp" className="w-5 h-5 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Chat with Doorifix</p>
              </div>
            </a>
            <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
              <Clock size={20} className="text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">{service.duration}</p>
                <p className="text-xs text-muted-foreground">Typical service duration</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer
        serviceContext={
          AREA_SERVICE_PILOT_SLUGS.includes(service.slug)
            ? { slug: service.slug, title: serviceRepairTitle(service) }
            : undefined
        }
      />
      <BottomNav />
      <BookingForm
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        defaultAppliance={defaultAppliance}
        defaultIssue={selectedIssue}
      />
    </div>
  );
};

export default ServiceDetail;
