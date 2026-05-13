import washingMachine from "@/assets/washing-machine.png";
import refrigerator from "@/assets/refrigerator.png";
import acUnit from "@/assets/ac-unit.png";
import microwave from "@/assets/microwave.png";
import dryer from "@/assets/dryer.png";
import dishwasher from "@/assets/dishwasher.png";

export interface ServiceFAQ { q: string; a: string }
export interface ServiceIssue { title: string; description: string }
export interface ServiceTestimonial { name: string; location: string; text: string; rating: number }
export interface ServiceSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  heroSubtitle: string;
  ctaHeadline: string;
  ctaSubtitle: string;
}

export interface ServiceData {
  id: number;
  slug: string;
  title: string;            // short label used in pills/menus
  applianceLabel: string;   // value submitted to booking form
  description: string;
  image: string;
  color: "pink" | "green" | "yellow" | "blue";
  rating: number;
  duration: string;
  detailDescription: string;
  includes: string[];
  brands: string[];
  commonIssues: ServiceIssue[];
  faqs: ServiceFAQ[];
  testimonials: ServiceTestimonial[];
  seo: ServiceSEO;
}

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const services: ServiceData[] = [
  {
    id: 1,
    slug: "washing-machine-repair",
    title: "Washing Machine",
    applianceLabel: "Washing Machine",
    description: "Expert washing machine repair & servicing",
    image: washingMachine,
    color: "blue",
    rating: 4.9,
    duration: "1-2 hrs",
    detailDescription:
      "Our certified technicians handle every washing machine issue — drum problems, water leakage, spin failures, drainage faults, and more. Front load, top load, semi & fully automatic. Genuine spare parts and a service warranty on every repair.",
    includes: [
      "Full machine inspection",
      "Drum & motor check",
      "Water inlet/outlet repair",
      "Belt & bearing replacement",
      "Spin & wash test",
      "Service warranty",
    ],
    brands: ["Samsung", "LG", "Whirlpool", "IFB", "Bosch", "Haier", "Godrej", "Panasonic"],
    commonIssues: [
      { title: "Not spinning / drum stuck", description: "Belt slip, motor issue or worn bearing — fixed on the spot." },
      { title: "Water leakage", description: "Inlet hose, drain pipe & door seal leaks diagnosed and sealed." },
      { title: "Not draining", description: "Drain pump, filter blockage and pipe choke cleared end-to-end." },
      { title: "Excessive noise / vibration", description: "Bearing, suspension and shock absorber service." },
      { title: "Display or control fault", description: "PCB / control board diagnosis and replacement." },
      { title: "Door not opening / locking", description: "Door lock assembly and interlock switch repair." },
    ],
    faqs: [
      { q: "How much does a washing machine repair cost?", a: "Diagnosis is free at your doorstep. Final cost depends on the part — we share a transparent quote before starting any work." },
      { q: "Do you repair both front load and top load machines?", a: "Yes — front load, top load, fully automatic and semi automatic from every major brand." },
      { q: "My washing machine is not spinning. Can you fix it today?", a: "Most spin and drainage issues are fixed within 1–2 hours on the same visit. We carry common spares." },
      { q: "Do you provide warranty on washing machine repair?", a: "Yes. We provide a service warranty on the repair and replaced parts. If the same fault recurs, we re-fix it free." },
      { q: "Which brands do you service?", a: "Samsung, LG, IFB, Bosch, Whirlpool, Haier, Godrej, Panasonic and all other major brands." },
    ],
    testimonials: [
      { name: "Priya R.", location: "HSR Layout", rating: 5, text: "My IFB front load was leaking water — booked at 10 AM, fixed by 1 PM. Very transparent pricing." },
      { name: "Arjun S.", location: "Indiranagar", rating: 5, text: "LG top load was not spinning. Technician carried spare belt, done in 40 mins." },
      { name: "Meera K.", location: "Whitefield", rating: 4.9, text: "Doorstep service, neat work and warranty card given. Recommended." },
    ],
    seo: {
      metaTitle: "Washing Machine Repair Near Me | Same-Day Doorstep Service – Doorifix",
      metaDescription: "Book expert washing machine repair near you. Samsung, LG, Whirlpool, IFB, Bosch — all brands. Front load & top load repair. Free diagnosis, same-day doorstep service.",
      keywords: "washing machine repair near me, washing machine service near me, washing machine not spinning, washing machine not draining, front load washing machine repair, top load washing machine repair, samsung washing machine repair, lg washing machine repair, whirlpool washing machine repair, ifb washing machine repair, bosch washing machine repair, washing machine repair cost, washing machine technician near me, doorstep washing machine repair, washing machine drum repair, washing machine motor repair, automatic washing machine repair, semi automatic washing machine repair, washing machine water leak repair, washing machine repair at home",
      h1: "Washing Machine Repair at Your Doorstep",
      heroSubtitle: "Front load, top load, semi & fully automatic — all brands fixed by certified technicians.",
      ctaHeadline: "Book Washing Machine Repair Today",
      ctaSubtitle: "Free diagnosis, genuine spares and a service warranty on every repair.",
    },
  },
  {
    id: 2,
    slug: "refrigerator-repair",
    title: "Refrigerator",
    applianceLabel: "Refrigerator",
    description: "Cooling issues? Expert refrigerator repair",
    image: refrigerator,
    color: "green",
    rating: 4.8,
    duration: "1-3 hrs",
    detailDescription:
      "From a fridge that won't cool to compressor noise and ice-build-up — our specialists diagnose the root cause, refill gas, replace seals and fix the PCB. Single door, double door, side-by-side and French door — all serviced.",
    includes: [
      "Cooling system diagnosis",
      "Gas refilling & leak fix",
      "Compressor repair",
      "Thermostat calibration",
      "Door seal replacement",
      "Service warranty",
    ],
    brands: ["Samsung", "LG", "Whirlpool", "Godrej", "Haier", "Bosch", "Panasonic", "Hitachi"],
    commonIssues: [
      { title: "Fridge not cooling", description: "Gas leak, thermostat or compressor diagnosed in one visit." },
      { title: "Freezer cooling but not fridge", description: "Damper, fan motor and defrost system inspected." },
      { title: "Water leakage inside / outside", description: "Drain line cleared, defrost tray cleaned, seal replaced." },
      { title: "Compressor noise / vibration", description: "Mounting, capacitor and compressor diagnosis." },
      { title: "Ice build-up in freezer", description: "Defrost timer / heater fault repaired." },
      { title: "LED / display fault", description: "PCB diagnosis and replacement with genuine parts." },
    ],
    faqs: [
      { q: "Why is my fridge not cooling but the freezer works?", a: "Usually the damper, evaporator fan or defrost system. Our technician will test and confirm before any replacement." },
      { q: "Do you refill refrigerator gas?", a: "Yes, we do gas leak detection, vacuum and refill with the correct gas grade for your model." },
      { q: "How long does a refrigerator repair take?", a: "Most repairs finish in 1–3 hours. Compressor swaps may take an extra visit if a part is ordered." },
      { q: "Is there a warranty on the repair?", a: "Yes — service warranty on the repair and replaced parts. If the issue returns, we fix it free." },
      { q: "Which brands of refrigerator do you repair?", a: "Samsung, LG, Whirlpool, Godrej, Haier, Bosch, Hitachi, Panasonic and other major brands." },
    ],
    testimonials: [
      { name: "Rahul M.", location: "Koramangala", rating: 5, text: "Double-door Samsung was not cooling — gas leak fixed and refilled the same day." },
      { name: "Nisha P.", location: "JP Nagar", rating: 5, text: "Whirlpool fridge ice build-up sorted in one visit. Polite technician." },
      { name: "Vikas T.", location: "Marathahalli", rating: 4.8, text: "Fair pricing, no upselling. Would book again." },
    ],
    seo: {
      metaTitle: "Refrigerator Repair Near Me | Fridge Not Cooling? Same-Day Fix – Doorifix",
      metaDescription: "Expert refrigerator repair near you. Fridge not cooling? Gas refill, compressor repair, thermostat fix. Samsung, LG, Whirlpool & all brands. Doorstep service.",
      keywords: "refrigerator repair near me, fridge repair near me, fridge not cooling, refrigerator gas refill, fridge compressor repair, double door fridge repair, single door fridge repair, samsung fridge repair, lg refrigerator repair, whirlpool fridge repair, godrej refrigerator repair, haier fridge repair, refrigerator repair cost, fridge thermostat repair, fridge door seal replacement, refrigerator technician near me, fridge repair at home, refrigerator not working, fridge ice maker repair, side by side fridge repair",
      h1: "Refrigerator Repair at Your Doorstep",
      heroSubtitle: "Fridge not cooling? Gas refill, compressor, thermostat & seal repair — all brands.",
      ctaHeadline: "Book Refrigerator Repair Today",
      ctaSubtitle: "Same-day doorstep service. Free diagnosis. Service warranty included.",
    },
  },
  {
    id: 3,
    slug: "ac-repair-service",
    title: "AC Service",
    applianceLabel: "AC",
    description: "AC repair, gas refill & deep cleaning",
    image: acUnit,
    color: "yellow",
    rating: 4.7,
    duration: "1-2 hrs",
    detailDescription:
      "Stay cool with professional AC service — split, window and inverter. We handle AC not cooling, gas refill, deep coil cleaning, compressor repair and installation for every brand at your doorstep.",
    includes: [
      "Deep coil cleaning",
      "Gas check & refill",
      "Compressor diagnosis",
      "Filter cleaning / replacement",
      "Electrical & PCB check",
      "Service warranty",
    ],
    brands: ["Daikin", "Voltas", "LG", "Samsung", "Blue Star", "Hitachi", "Carrier", "Panasonic"],
    commonIssues: [
      { title: "AC not cooling", description: "Gas top-up, filter clean, sensor calibration in one visit." },
      { title: "Water leakage from indoor unit", description: "Drain line clean, tray and pipe slope correction." },
      { title: "AC making noise", description: "Fan blade, blower bearing and compressor diagnosis." },
      { title: "AC tripping / not starting", description: "Capacitor, PCB and electrical wiring inspection." },
      { title: "Bad smell from AC", description: "Deep coil + blower wheel cleaning with anti-bacterial spray." },
      { title: "Remote / display fault", description: "Sensor, IR receiver and PCB repair / replacement." },
    ],
    faqs: [
      { q: "Why is my AC not cooling enough?", a: "Common causes are low gas, dirty filters, blocked condenser or sensor fault. We diagnose all four in one visit." },
      { q: "How often should I service my AC?", a: "Once before summer and once after monsoon — about every 6 months for best efficiency and electricity savings." },
      { q: "Do you refill AC gas?", a: "Yes, we do leak detection, vacuum and gas refill with R-32 / R-410A / R-22 as per your model." },
      { q: "Do you service split, window and inverter ACs?", a: "Yes — split, window, cassette and inverter ACs of all brands." },
      { q: "Do you offer AC installation and uninstallation?", a: "Yes, we handle install, uninstall, copper piping and gas-charging at your doorstep." },
    ],
    testimonials: [
      { name: "Karthik N.", location: "Bellandur", rating: 5, text: "Voltas AC deep cleaned + gas refilled. Cooling like new." },
      { name: "Sneha L.", location: "BTM Layout", rating: 5, text: "Booked at night, technician came next morning. Clean work." },
      { name: "Imran A.", location: "RT Nagar", rating: 4.7, text: "Honest diagnosis, only paid for what was needed." },
    ],
    seo: {
      metaTitle: "AC Repair & Service Near Me | AC Not Cooling? Book Now – Doorifix",
      metaDescription: "Professional AC repair & service near you. AC not cooling? Gas refill, deep cleaning, compressor repair. Split & window AC. All brands serviced. Same-day doorstep service.",
      keywords: "ac repair near me, ac service near me, ac not cooling, ac gas refill, split ac repair, window ac repair, ac deep cleaning, ac installation, ac compressor repair, daikin ac service, voltas ac repair, lg ac service, samsung ac repair, blue star ac service, ac technician near me, ac repair cost, ac maintenance, inverter ac repair, ac gas charging near me, ac cleaning service near me",
      h1: "AC Repair & Service at Your Doorstep",
      heroSubtitle: "Split, window & inverter AC — gas refill, deep clean, compressor & PCB repair.",
      ctaHeadline: "Book AC Service Today",
      ctaSubtitle: "Certified technicians, transparent pricing, same-day doorstep visits.",
    },
  },
  {
    id: 4,
    slug: "microwave-repair",
    title: "Microwave",
    applianceLabel: "Microwave",
    description: "Microwave not heating? Quick expert repair",
    image: microwave,
    color: "pink",
    rating: 4.9,
    duration: "1 hr",
    detailDescription:
      "Microwave not heating, sparking inside or display gone? Our technicians repair magnetron, turntable motor, control panel and door switch issues for solo, grill and convection microwaves.",
    includes: [
      "Magnetron testing",
      "Turntable motor repair",
      "Control panel fix",
      "Door switch replacement",
      "Capacitor & diode check",
      "Service warranty",
    ],
    brands: ["Samsung", "LG", "IFB", "Bajaj", "Whirlpool", "Panasonic", "Bosch"],
    commonIssues: [
      { title: "Microwave not heating", description: "Magnetron, capacitor and high-voltage diode replaced as needed." },
      { title: "Sparking inside", description: "Wave guide cover and cavity inspection — safe parts replacement." },
      { title: "Turntable not rotating", description: "Coupler and turntable motor swap." },
      { title: "Display / touch panel dead", description: "Membrane keypad and PCB repair." },
      { title: "Door not closing properly", description: "Door interlock and hinge replacement." },
      { title: "Buttons unresponsive", description: "Touch panel and control board service." },
    ],
    faqs: [
      { q: "Why is my microwave not heating?", a: "Almost always a faulty magnetron, capacitor or high-voltage diode. We test each before replacing." },
      { q: "Is it safe to repair a microwave at home?", a: "Yes — our technicians are trained to safely discharge the high-voltage capacitor before any work." },
      { q: "Do you repair convection and grill microwaves?", a: "Yes — solo, grill and convection microwaves of all brands." },
      { q: "How long does microwave repair take?", a: "Most repairs are completed in under an hour during the doorstep visit." },
      { q: "Do you offer warranty?", a: "Yes — service warranty on the repair and on the replaced parts." },
    ],
    testimonials: [
      { name: "Anita V.", location: "Jayanagar", rating: 5, text: "IFB convection not heating — magnetron replaced in 45 mins." },
      { name: "Sundar G.", location: "Banashankari", rating: 5, text: "Sparking issue fixed, technician was very knowledgeable." },
      { name: "Lekha D.", location: "Hebbal", rating: 4.9, text: "Same-day service, clean repair." },
    ],
    seo: {
      metaTitle: "Microwave Repair Near Me | Not Heating? Expert Fix – Doorifix",
      metaDescription: "Quick microwave repair near you. Microwave not heating? Turntable, magnetron, display repair. Samsung, LG, IFB & all brands. Doorstep service, free diagnosis.",
      keywords: "microwave repair near me, microwave not heating, microwave oven repair, microwave turntable repair, microwave magnetron repair, samsung microwave repair, lg microwave repair, ifb microwave repair, convection microwave repair, solo microwave repair, grill microwave repair, microwave door repair, microwave display not working, microwave sparking, microwave repair cost, microwave technician near me, microwave repair at home, oven repair near me",
      h1: "Microwave Repair at Your Doorstep",
      heroSubtitle: "Solo, grill & convection microwaves — heating, magnetron, display & door repair.",
      ctaHeadline: "Book Microwave Repair Today",
      ctaSubtitle: "Quick visits, genuine parts, service warranty on every repair.",
    },
  },
  {
    id: 5,
    slug: "dryer-repair",
    title: "Dryer",
    applianceLabel: "Dryer",
    description: "Dryer not drying? Complete repair service",
    image: dryer,
    color: "blue",
    rating: 4.9,
    duration: "1-2 hrs",
    detailDescription:
      "Clothes coming out wet, drum noisy or dryer overheating? We service heating elements, drum belts, thermostats and motors on condenser, vented and heat-pump dryers.",
    includes: [
      "Heating element check",
      "Drum & belt inspection",
      "Vent cleaning",
      "Thermostat repair",
      "Motor diagnosis",
      "Service warranty",
    ],
    brands: ["Samsung", "LG", "IFB", "Bosch", "Siemens", "Whirlpool"],
    commonIssues: [
      { title: "Dryer not drying clothes", description: "Heating element, thermal fuse and sensor diagnosis." },
      { title: "Drum not turning", description: "Belt, idler pulley and motor inspection." },
      { title: "Loud noise from dryer", description: "Drum rollers, bearings and belt replacement." },
      { title: "Overheating / auto-cutoff", description: "Vent cleaning and thermostat reset." },
      { title: "Dryer not starting", description: "Door switch, control board and start capacitor check." },
      { title: "Lint or vent issues", description: "Complete vent line cleaning to restore airflow." },
    ],
    faqs: [
      { q: "Why is my dryer not drying clothes?", a: "Usually a faulty heating element, blocked vent or sensor issue. We check all three before quoting." },
      { q: "Do you repair condenser and heat-pump dryers?", a: "Yes — vented, condenser and heat-pump dryers from every major brand." },
      { q: "Is dryer vent cleaning included?", a: "Vent cleaning is included when it's the cause; otherwise it's a small add-on we'll quote upfront." },
      { q: "How long does the repair take?", a: "Most dryer repairs finish in 1–2 hours at your doorstep." },
      { q: "Is there a warranty?", a: "Yes — service warranty on the repair and replaced spares." },
    ],
    testimonials: [
      { name: "Pooja H.", location: "Yelahanka", rating: 5, text: "IFB dryer not drying — heating element replaced, working perfect now." },
      { name: "Rohit B.", location: "Sarjapur", rating: 5, text: "Drum noise gone after belt change, fast service." },
      { name: "Anjali S.", location: "HSR", rating: 4.9, text: "Clean job, polite technician." },
    ],
    seo: {
      metaTitle: "Dryer Repair Near Me | Not Drying? Same-Day Service – Doorifix",
      metaDescription: "Professional dryer repair near you. Dryer not drying? Heating element, drum, belt repair. All brands serviced. Doorstep service with free diagnosis.",
      keywords: "dryer repair near me, dryer not drying, clothes dryer repair, dryer heating element repair, dryer drum repair, dryer belt repair, samsung dryer repair, lg dryer repair, bosch dryer repair, ifb dryer repair, condenser dryer repair, heat pump dryer repair, dryer not spinning, dryer making noise, dryer repair cost, dryer technician near me, dryer vent cleaning, tumble dryer repair near me",
      h1: "Dryer Repair at Your Doorstep",
      heroSubtitle: "Vented, condenser & heat-pump dryers — heating, drum, belt and vent repair.",
      ctaHeadline: "Book Dryer Repair Today",
      ctaSubtitle: "Same-day visits, genuine parts, service warranty on every job.",
    },
  },
  {
    id: 6,
    slug: "dishwasher-repair",
    title: "Dishwasher",
    applianceLabel: "Dishwasher",
    description: "Dishwasher not draining? Expert repair service",
    image: dishwasher,
    color: "green",
    rating: 4.8,
    duration: "1-2 hrs",
    detailDescription:
      "Dishwasher not cleaning, leaking or showing an error code? We repair spray arms, drain pumps, door latches and electronic controls on Bosch, IFB, Siemens and other premium brands.",
    includes: [
      "Drainage system check",
      "Spray arm repair",
      "Door latch fix",
      "Pump & motor diagnosis",
      "Leak detection & repair",
      "Service warranty",
    ],
    brands: ["Bosch", "IFB", "Siemens", "Samsung", "LG", "Faber"],
    commonIssues: [
      { title: "Dishwasher not draining", description: "Drain pump, filter and hose blockage cleared." },
      { title: "Dishes not clean", description: "Spray arm, inlet valve and water pressure inspection." },
      { title: "Leaking water", description: "Door gasket, pump seal and hose connections." },
      { title: "Showing error code", description: "Sensor, PCB and inlet diagnostics with manufacturer codes." },
      { title: "Not starting", description: "Door latch, fuse and control board check." },
      { title: "Bad smell from inside", description: "Deep clean, filter service and gasket sanitisation." },
    ],
    faqs: [
      { q: "Why is my dishwasher not draining?", a: "Usually a clogged filter, drain hose or faulty drain pump. We clear and test all three in one visit." },
      { q: "Do you decode error codes (E15, E24 etc.)?", a: "Yes — our technicians know the common Bosch, IFB and Siemens error codes and what to check first." },
      { q: "Do you repair built-in and freestanding dishwashers?", a: "Yes — both built-in and freestanding dishwashers from major brands." },
      { q: "Is the diagnosis really free?", a: "Yes. You only pay if you approve the quote we share before any repair starts." },
      { q: "Is there a warranty on the repair?", a: "Yes — a service warranty on the repair and the replaced parts." },
    ],
    testimonials: [
      { name: "Divya R.", location: "Whitefield", rating: 5, text: "Bosch dishwasher E24 error fixed in one visit. Excellent service." },
      { name: "Karan J.", location: "Electronic City", rating: 5, text: "Drain pump replaced quickly, no mess left behind." },
      { name: "Suresh M.", location: "Kalyan Nagar", rating: 4.8, text: "Fair pricing and very professional." },
    ],
    seo: {
      metaTitle: "Dishwasher Repair Near Me | Not Draining? Expert Fix – Doorifix",
      metaDescription: "Expert dishwasher repair near you. Dishwasher not draining? Spray arm, pump, leak repair. Bosch, IFB, Samsung & all brands. Same-day doorstep service.",
      keywords: "dishwasher repair near me, dishwasher not draining, dishwasher not cleaning, dishwasher leak repair, dishwasher spray arm repair, dishwasher pump repair, bosch dishwasher repair, ifb dishwasher repair, samsung dishwasher repair, lg dishwasher repair, siemens dishwasher repair, dishwasher error codes, dishwasher door latch repair, dishwasher repair cost, dishwasher technician near me, dishwasher not starting, dishwasher repair at home",
      h1: "Dishwasher Repair at Your Doorstep",
      heroSubtitle: "Built-in & freestanding dishwashers — drainage, spray arm, pump and PCB repair.",
      ctaHeadline: "Book Dishwasher Repair Today",
      ctaSubtitle: "Bosch, IFB, Siemens & more. Same-day doorstep service with warranty.",
    },
  },
];
