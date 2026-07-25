import type { StaticImageData } from "next/image";
import samsungLogo from "@/assets/brand-logos/samsung.webp";
import boschLogo from "@/assets/brand-logos/bosch.webp";
import lgLogo from "@/assets/brand-logos/lg.webp";
import siemensLogo from "@/assets/brand-logos/siemens.webp";
import panasonicLogo from "@/assets/brand-logos/panasonic.webp";
import voltasLogo from "@/assets/brand-logos/voltas.webp";
import ifbLogo from "@/assets/brand-logos/ifb.webp";
import haierLogo from "@/assets/brand-logos/haier.webp";
import whirlpoolLogo from "@/assets/brand-logos/whirlpool.webp";
import godrejLogo from "@/assets/brand-logos/godrej.webp";
import { getServiceBySlug, type ServiceData } from "./services";

export interface BrandData {
  slug: string;
  name: string;
  logo: StaticImageData;
  // What this brand is actually known for in the Indian appliance market —
  // drives the hero copy and intro paragraph on the brand page.
  highlight: string;
  // Only the services this brand realistically sells, so SEO cards and
  // keywords stay accurate instead of listing all 6 appliances for every brand.
  serviceSlugs: string[];
  keywords: string;
}

export const brands: BrandData[] = [
  {
    slug: "samsung",
    name: "Samsung",
    logo: samsungLogo,
    highlight: "front-load & top-load washing machines, French-door refrigerators, split ACs and convection microwaves",
    serviceSlugs: ["washing-machine-repair", "refrigerator-repair", "ac-repair-service", "microwave-repair"],
    keywords:
      "Samsung washing machine repair, Samsung refrigerator repair near me, Samsung AC service, Samsung microwave repair, Samsung front load washing machine repair, Samsung side by side fridge repair, Samsung inverter AC gas refill, Samsung eco bubble washing machine repair, Samsung digital inverter compressor repair, Samsung service center near me",
  },
  {
    slug: "lg",
    name: "LG",
    logo: lgLogo,
    highlight: "twin-wash washing machines, door-in-door refrigerators, dual inverter ACs, microwaves and dishwashers",
    serviceSlugs: ["washing-machine-repair", "refrigerator-repair", "ac-repair-service", "microwave-repair", "dishwasher-repair"],
    keywords:
      "LG washing machine repair, LG refrigerator repair, LG AC service, LG microwave repair, LG dishwasher repair, LG twin wash repair, LG door-in-door fridge repair, LG dual inverter AC repair, LG service center near me",
  },
  {
    slug: "bosch",
    name: "Bosch",
    logo: boschLogo,
    highlight: "German-engineered front-load washing machines, refrigerators and dishwashers",
    serviceSlugs: ["washing-machine-repair", "refrigerator-repair", "dishwasher-repair"],
    keywords:
      "Bosch washing machine repair, Bosch dishwasher repair, Bosch refrigerator repair, Bosch front load washing machine service, Bosch dishwasher not draining fix, Bosch series 6 washing machine repair, Bosch service center near me",
  },
  {
    slug: "siemens",
    name: "Siemens",
    logo: siemensLogo,
    highlight: "premium iQ-series washing machines, dishwashers and built-in refrigerators",
    serviceSlugs: ["washing-machine-repair", "dishwasher-repair", "refrigerator-repair"],
    keywords:
      "Siemens washing machine repair, Siemens dishwasher repair, Siemens refrigerator repair, Siemens iQ series washing machine service, Siemens dishwasher spray arm repair, Siemens home appliance service center near me",
  },
  {
    slug: "panasonic",
    name: "Panasonic",
    logo: panasonicLogo,
    highlight: "washing machines, refrigerators, inverter ACs and convection microwaves",
    serviceSlugs: ["washing-machine-repair", "refrigerator-repair", "ac-repair-service", "microwave-repair"],
    keywords:
      "Panasonic washing machine repair, Panasonic refrigerator repair, Panasonic AC service, Panasonic microwave repair, Panasonic inverter AC gas refill, Panasonic econavi fridge repair, Panasonic service center near me",
  },
  {
    slug: "voltas",
    name: "Voltas",
    logo: voltasLogo,
    highlight: "India's best-selling split and window air conditioners",
    serviceSlugs: ["ac-repair-service"],
    keywords:
      "Voltas AC repair, Voltas AC service near me, Voltas split AC gas refill, Voltas window AC repair, Voltas inverter AC not cooling, Voltas AC installation, Voltas AC service center near me",
  },
  {
    slug: "ifb",
    name: "IFB",
    logo: ifbLogo,
    highlight: "India's pioneer of front-load washing machines, plus microwaves and dishwashers",
    serviceSlugs: ["washing-machine-repair", "microwave-repair", "dishwasher-repair"],
    keywords:
      "IFB washing machine repair, IFB front load washing machine service, IFB microwave repair, IFB dishwasher repair, IFB washing machine not spinning, IFB senator washing machine repair, IFB service center near me",
  },
  {
    slug: "haier",
    name: "Haier",
    logo: haierLogo,
    highlight: "double-door refrigerators, top-load washing machines and split ACs",
    serviceSlugs: ["refrigerator-repair", "washing-machine-repair", "ac-repair-service"],
    keywords:
      "Haier refrigerator repair, Haier washing machine repair, Haier AC service, Haier double door fridge repair, Haier top load washing machine repair, Haier inverter AC gas refill, Haier service center near me",
  },
  {
    slug: "whirlpool",
    name: "Whirlpool",
    logo: whirlpoolLogo,
    highlight: "6th Sense washing machines, refrigerators, microwaves and dishwashers",
    serviceSlugs: ["washing-machine-repair", "refrigerator-repair", "microwave-repair", "dishwasher-repair"],
    keywords:
      "Whirlpool washing machine repair, Whirlpool refrigerator repair, Whirlpool microwave repair, Whirlpool dishwasher repair, Whirlpool 6th sense fridge repair, Whirlpool top load washing machine repair, Whirlpool service center near me",
  },
  {
    slug: "godrej",
    name: "Godrej",
    logo: godrejLogo,
    highlight: "Eon refrigerators, split ACs and washing machines",
    serviceSlugs: ["refrigerator-repair", "ac-repair-service", "washing-machine-repair"],
    keywords:
      "Godrej refrigerator repair, Godrej AC service, Godrej washing machine repair, Godrej eon fridge repair, Godrej inverter AC gas refill, Godrej double door fridge repair, Godrej service center near me",
  },
];

// Route for the "my brand isn't listed" reassurance page — kept out of the
// `brands` array since it has no logo/keywords/serviceSlugs of its own.
export const NOT_LISTED_BRAND_SLUG = "not-listed";

export const getBrandBySlug = (slug: string): BrandData | undefined =>
  brands.find((b) => b.slug === slug);

export const brandServices = (brand: BrandData): ServiceData[] =>
  brand.serviceSlugs.map((slug) => getServiceBySlug(slug)).filter((s): s is ServiceData => Boolean(s));

// Brand pages are washing-machine-focused (that's the pilot appliance for
// this feature) — so every brand page centers on washing machine repair,
// falling back to the brand's actual specialty only when it genuinely has
// no washing machines (e.g. Voltas, which is AC-only in India).
export function brandFocusService(brand: BrandData): ServiceData | undefined {
  const services = brandServices(brand);
  return services.find((s) => s.slug === "washing-machine-repair") || services[0];
}

function pluralAppliance(title: string): string {
  return title === "AC Service" ? "ACs" : `${title}s`;
}

// The single most-searched brand+appliance combo (e.g. "IFB Washing Machine
// Repair", "Voltas AC Repair & Service") — used as the page H1 and meta
// title so each brand page targets a real keyword instead of generic copy.
export function brandPrimaryServiceTitle(brand: BrandData): string {
  const focusService = brandFocusService(brand);
  if (!focusService) return "Appliance Repair";
  return focusService.title === "AC Service" ? "AC Repair & Service" : `${focusService.title} Repair`;
}

export interface BrandCopy {
  headline: string;
  subheadline: string;
  intro: string;
  faqs: { q: string; a: string }[];
}

export function buildBrandCopy(brand: BrandData): BrandCopy {
  const focusService = brandFocusService(brand);
  const focusTitle = (focusService?.title || "Appliance").toLowerCase();
  const focusPlural = pluralAppliance(focusService?.title || "Appliance").toLowerCase();
  const repairTitle = brandPrimaryServiceTitle(brand);

  return {
    headline: `${brand.name} ${repairTitle}`,
    subheadline: `Doorstep ${brand.name} ${repairTitle.toLowerCase()} — certified technicians, genuine parts and same-day service across Bangalore and Bengaluru.`,
    intro: `Doorifix repairs ${brand.name} ${focusPlural} at your doorstep in Bangalore. Our certified technicians are trained on ${brand.name}'s common fault patterns and carry genuine or certified-compatible parts, so most ${brand.name} ${focusTitle} repairs are diagnosed and fixed in a single visit.`,
    faqs: [
      {
        q: `Do you repair ${brand.name} ${focusPlural} in Bangalore?`,
        a: `Yes. Doorifix repairs ${brand.name} ${focusPlural} with certified technicians and free doorstep diagnosis anywhere in Bangalore and Bengaluru.`,
      },
      {
        q: `Do you use genuine ${brand.name} spare parts?`,
        a: `We use genuine or certified-compatible ${brand.name} parts for every repair, and back the work with a service warranty.`,
      },
      {
        q: `How much does ${brand.name} ${focusTitle} repair cost?`,
        a: `Cost depends on the exact fault. We provide a free diagnosis and a transparent quote before starting any work — no hidden charges.`,
      },
      {
        q: `Do you offer doorstep ${brand.name} appliance repair?`,
        a: `Yes, all ${brand.name} repairs are done at your doorstep by technicians who arrive fully equipped for on-spot diagnosis and repair.`,
      },
    ],
  };
}
