import { localServiceCopy, repairName, getLocalGuide } from "@/data/local-content";
import repairHero from "@/assets/repair-hero.png";
import doorifixLogo from "@/assets/doorifix-logo.webp";
import type { Metadata } from "next";
import { cities, type CityData } from "@/data/cities";
import type { ServiceData } from "@/data/services";
import { brandFocusService, brandPrimaryServiceTitle, type BrandData } from "@/data/brands";

export const SITE_NAME = "Doorifix";
export const BASE_URL = "https://www.doorifix.com";
export const DEFAULT_DESCRIPTION =
  "Book same-day doorstep appliance repair near you for washing machines, refrigerators, ACs, microwaves, dryers and dishwashers by certified Doorifix technicians.";
export const DEFAULT_KEYWORDS =
  "appliance repair near me, washing machine repair near me, refrigerator repair near me, AC repair near me, microwave repair near me, dryer repair, dishwasher repair, doorstep appliance repair, same day appliance service";
export const DEFAULT_IMAGE = new URL(typeof repairHero === "string" ? repairHero : repairHero.src, BASE_URL).toString();

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface MetadataInput {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  image?: string;
  robots?: Metadata["robots"];
}

export function absoluteUrl(path = "/") {
  return new URL(path.replace(/^\/bengaluru(?=\/|$)/, "/bangalore").replace(/^\/service\//, "/bangalore/service/"), BASE_URL).toString();
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = "/",
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  robots,
}: MetadataInput = {}): Metadata {
  const pageTitle = (title || "Expert Appliance Repair & Servicing")
    .replace(/\s(?:[:–—-])\s/g, " | ")
    .replace(/\s\|\s+/g, " | ")
    .trim();
  const absoluteTitle = pageTitle.includes(SITE_NAME)
    ? pageTitle
    : `${SITE_NAME} | ${pageTitle}`;
  const url = absoluteUrl(canonical);
  const location = cities.find((city) => city.slug === canonical.split("/")[1]);

  return {
    title: {
      absolute: absoluteTitle,
    },
    description,
    keywords,
    robots:
      robots ?? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: absoluteTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [image],
    },
    authors: [{ name: SITE_NAME }],
    other: {
      "geo.region": location?.slug === "chennai" ? "IN-TN" : "IN-KA",
      "geo.placename": location?.name || "Bangalore",
    },
  };
}

const primaryCities = cities.map((city) => city.name);
const primaryServiceNames = [
  "Washing Machine Repair",
  "Refrigerator Repair",
  "AC Repair & Service",
  "Microwave Repair",
  "Dryer Repair",
  "Dishwasher Repair",
];

export function homeMetadata() {
  return buildMetadata({
    title: "Appliance Repair Near Me | Washing Machine, AC & Fridge Service",
    description:
      "Doorifix offers same-day appliance repair near you for washing machines, refrigerators, ACs, microwaves, dryers and dishwashers in Bangalore and Bengaluru.",
    canonical: "/",
    keywords:
      "appliance repair near me, washing machine repair near me, AC repair near me, fridge repair near me, refrigerator repair, doorstep appliance service, same day appliance repair, appliance repair Bangalore, appliance repair Bengaluru",
  });
}

export function serviceMetadata(service: ServiceData) {
  return buildMetadata({
    title: `${service.title} Repair Near Me | Same-Day Doorstep Service`,
    description: `Book expert ${service.title.toLowerCase()} repair near you with Doorifix. Same-day doorstep diagnosis, trained technicians, genuine parts and service warranty.`,
    canonical: `/service/${service.slug}`,
    keywords: `${service.title} repair near me, ${service.title} service near me, ${service.title} technician near me, doorstep ${service.title.toLowerCase()} repair, same day ${service.title.toLowerCase()} service, Doorifix ${service.title.toLowerCase()} repair`,
  });
}

export function cityMetadata(city: CityData) {
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    canonical: `/${city.slug}`,
    keywords: city.keywords,
  });
}

export function cityServiceMetadata(city: CityData, service: ServiceData) {
  return buildMetadata({
    title: `${repairName(service)} in ${city.name} | Doorifix`,
    description: localServiceCopy(city, service).summary,
    canonical: `/${city.slug}/service/${service.slug}`,
    keywords: `${service.title} repair ${city.name}, ${service.title} service ${city.name}, ${service.title} repair near me ${city.name}, doorstep ${service.title.toLowerCase()} repair ${city.name}, same day ${service.title.toLowerCase()} service ${city.name}`,
  });
}

export function areaMetadata(city: CityData, area: string, areaSlug: string) {
  return buildMetadata({
    title: `Appliance Repair in ${area}, ${city.name} | Doorifix`,
    description: `Arrange appliance repair in ${area}, ${city.name}. Choose your appliance, describe the fault and confirm address-specific visit availability and charges.`,
    canonical: `/${city.slug}/${areaSlug}`,
    keywords: `appliance repair ${area}, appliance repair near me ${area}, washing machine repair ${area}, fridge repair ${area}, refrigerator repair ${area}, AC repair ${area}, AC service ${area}, doorstep appliance repair ${area} ${city.name}, same day appliance service ${area}`,
  });
}

export function areaServiceMetadata(city: CityData, area: string, areaSlug: string, service: ServiceData) {
  return buildMetadata({
    title: `${repairName(service)} in ${area}, ${city.name}`,
    description: `${repairName(service)} in ${area}, ${city.name}. Get diagnosis, an itemised repair quote and appointment guidance for your appliance model.`,
    canonical: `/${city.slug}/${areaSlug}/service/${service.slug}`,
    keywords: `${service.title} repair ${area}, ${service.title} repair near me ${area}, ${service.title} service ${area} ${city.name}, doorstep ${service.title.toLowerCase()} repair ${area}, same day ${service.title.toLowerCase()} service ${area} ${city.name}`,
  });
}

export function brandMetadata(brand: BrandData) {
  return buildMetadata({
    title: `${brand.name} ${brandPrimaryServiceTitle(brand)} Near Me | Doorstep Service`,
    description: `Book expert ${brand.name} appliance repair near you with Doorifix. Doorstep repair for ${brand.highlight}. Same-day service, certified technicians, genuine parts.`,
    canonical: `/brand/${brand.slug}`,
    keywords: brand.keywords,
  });
}

export function brandSchema(brand: BrandData, breadcrumbs?: BreadcrumbItem[]) {
  const url = absoluteUrl(`/brand/${brand.slug}`);
  const focusService = brandFocusService(brand);
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/brand/${brand.slug}#localbusiness`,
    name: `${SITE_NAME} - ${brand.name} ${brandPrimaryServiceTitle(brand)}`,
    description: `Doorstep ${brand.name} ${(focusService?.title || "appliance").toLowerCase()} repair in Bangalore and Bengaluru.`,
    url,
    image: DEFAULT_IMAGE,
    telephone: "+919886579923",
    email: "doorifix@gmail.com",
    paymentAccepted: ["Cash", "UPI", "Card"],
    currenciesAccepted: "INR",
    openingHours: "Mo-Su 08:00-21:00",
    priceRange: "$$",
    areaServed: primaryCities.map((name) => ({ "@type": "City", name })),
    brand: { "@type": "Brand", name: brand.name },
  };

  return breadcrumbs ? [schema, breadcrumbSchema(breadcrumbs)] : schema;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: SITE_NAME,
    url: BASE_URL,
    logo: new URL(typeof doorifixLogo === "string" ? doorifixLogo : doorifixLogo.src, BASE_URL).toString(),
    image: DEFAULT_IMAGE,
    email: "doorifix@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919886579923",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Kannada", "Malayalam"],
    },
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

function serviceOfferSchema(service: ServiceData, url: string, city?: CityData) {
  return {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    url,
    itemOffered: {
      "@type": "Service",
      name: city ? `${service.title} Repair & Service in ${city.name}` : `${service.title} Repair & Service`,
      description: city
        ? `Expert ${service.title.toLowerCase()} repair service in ${city.name}. ${service.detailDescription}`
        : service.detailDescription,
      serviceType: city ? `${service.title} Repair in ${city.name}` : `${service.title} Repair`,
      areaServed: city
        ? {
            "@type": "City",
            name: city.name,
          }
        : primaryCities.map((name) => ({ "@type": "City", name })),
    },
  };
}

export function serviceSchema(service: ServiceData, breadcrumbs?: BreadcrumbItem[]) {
  const url = absoluteUrl(`/service/${service.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: SITE_NAME,
    description: service.detailDescription,
    url,
    image: DEFAULT_IMAGE,
    telephone: "+919886579923",
    email: "doorifix@gmail.com",
    paymentAccepted: ["Cash", "UPI", "Card"],
    currenciesAccepted: "INR",
    openingHours: "Mo-Su 08:00-21:00",
    priceRange: "$$",
    areaServed: primaryCities.map((name) => ({ "@type": "City", name })),
    makesOffer: serviceOfferSchema(service, url),
  };

  return breadcrumbs ? [schema, breadcrumbSchema(breadcrumbs)] : schema;
}

export function localBusinessSchema(city: CityData, area?: string) {
  const placeName = area ? `${area}, ${city.name}` : city.name;
  const path = `/${city.slug}${area ? `/${area.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}` : ""}`;
  return {
    "@context": "https://schema.org", "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: `Appliance repair in ${placeName}`,
    description: area ? `Doorstep appliance diagnosis and repair in ${placeName}. Confirm availability for the exact address.` : city.metaDescription,
    url: absoluteUrl(path),
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: { "@type": area ? "Place" : "City", name: placeName },
    hasOfferCatalog: {
      "@type": "OfferCatalog", name: `Appliance services in ${placeName}`,
      itemListElement: primaryServiceNames.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
}

export function cityServiceSchema(city: CityData, service: ServiceData, breadcrumbs?: BreadcrumbItem[]) {
  const url = absoluteUrl(`/${city.slug}/service/${service.slug}`);
  const schema = {
    "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`,
    name: `${repairName(service)} in ${city.name}`,
    description: localServiceCopy(city, service).summary,
    url, serviceType: repairName(service),
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: { "@type": "City", name: city.name },
  };
  return breadcrumbs ? [schema, breadcrumbSchema(breadcrumbs)] : schema;
}

export function areaServiceSchema(city: CityData, area: string, areaSlug: string, service: ServiceData, breadcrumbs?: BreadcrumbItem[]) {
  const url = absoluteUrl(`/${city.slug}/${areaSlug}/service/${service.slug}`);
  const schema = {
    ...cityServiceSchema(city, service), "@id": `${url}#service`, url,
    name: `${repairName(service)} in ${area}, ${city.name}`,
    areaServed: { "@type": "Place", name: `${area}, ${city.name}` },
  };
  return breadcrumbs ? [schema, breadcrumbSchema(breadcrumbs)] : schema;
}
