import type { Metadata } from "next";
import type { CityData } from "@/data/cities";
import type { ServiceData } from "@/data/services";

export const SITE_NAME = "Doorifix";
export const BASE_URL = "https://doorifix.com";
export const DEFAULT_DESCRIPTION =
  "Book same-day doorstep appliance repair near you for washing machines, refrigerators, ACs, microwaves, dryers and dishwashers by certified Doorifix technicians.";
export const DEFAULT_KEYWORDS =
  "appliance repair near me, washing machine repair near me, refrigerator repair near me, AC repair near me, microwave repair near me, dryer repair, dishwasher repair, doorstep appliance repair, same day appliance service";
export const DEFAULT_IMAGE = `${BASE_URL}/favicon.ico`;

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
  return new URL(path, BASE_URL).toString();
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = "/",
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  robots,
}: MetadataInput = {}): Metadata {
  const pageTitle = title || `${SITE_NAME} - Expert Appliance Repair & Servicing`;
  const absoluteTitle = pageTitle.includes(SITE_NAME) ? pageTitle : `${pageTitle} | ${SITE_NAME}`;
  const url = absoluteUrl(canonical);

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
      "geo.region": "IN-KA",
      "geo.placename": "Bangalore",
    },
  };
}

const primaryCities = ["Bangalore", "Mangalore", "Hyderabad", "Kerala"];
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
      "Doorifix offers same-day appliance repair near you for washing machines, refrigerators, ACs, microwaves, dryers and dishwashers in Bangalore, Mangalore, Hyderabad and Kerala.",
    canonical: "/",
    keywords:
      "appliance repair near me, washing machine repair near me, AC repair near me, fridge repair near me, refrigerator repair, doorstep appliance service, same day appliance repair, appliance repair Bangalore, appliance repair Hyderabad, appliance repair Kerala",
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
    title: `${service.title} Repair in ${city.name} | Same-Day Service Near Me`,
    description: `Book ${service.title.toLowerCase()} repair in ${city.name} with Doorifix. Same-day doorstep service, certified technicians, genuine parts and transparent pricing.`,
    canonical: `/${city.slug}/service/${service.slug}`,
    keywords: `${service.title} repair ${city.name}, ${service.title} service ${city.name}, ${service.title} repair near me ${city.name}, doorstep ${service.title.toLowerCase()} repair ${city.name}, same day ${service.title.toLowerCase()} service ${city.name}`,
  });
}

export function areaMetadata(city: CityData, area: string, areaSlug: string) {
  return buildMetadata({
    title: `Appliance Repair in ${area}, ${city.name} | Doorstep Service Near Me`,
    description: `Same-day appliance repair in ${area}, ${city.name}. Book washing machine, refrigerator, AC, microwave, dryer and dishwasher repair by certified Doorifix technicians.`,
    canonical: `/${city.slug}/${areaSlug}`,
    keywords: `appliance repair ${area}, appliance repair near me ${area}, washing machine repair ${area}, fridge repair ${area}, refrigerator repair ${area}, AC repair ${area}, AC service ${area}, doorstep appliance repair ${area} ${city.name}, same day appliance service ${area}`,
  });
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: DEFAULT_IMAGE,
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

export function serviceSchema(service: ServiceData, breadcrumbs?: BreadcrumbItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} Repair & Service`,
    description: service.detailDescription,
    serviceType: `${service.title} Repair`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: "+919886579923",
      email: "doorifix@gmail.com",
      url: BASE_URL,
    },
    areaServed: primaryCities.map((name) => ({ "@type": name === "Kerala" ? "State" : "City", name })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: absoluteUrl(`/service/${service.slug}`),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(service.rating),
      reviewCount: "256",
    },
  };

  return breadcrumbs ? [schema, breadcrumbSchema(breadcrumbs)] : schema;
}

export function localBusinessSchema(city: CityData, area?: string) {
  const placeName = area ? `${area}, ${city.name}` : city.name;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: area ? `${SITE_NAME} - ${placeName}` : `${SITE_NAME} - ${city.name}`,
    description: city.metaDescription,
    url: absoluteUrl(`/${city.slug}${area ? `/${area.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}` : ""}`),
    image: DEFAULT_IMAGE,
    telephone: "+919886579923",
    email: "doorifix@gmail.com",
    paymentAccepted: ["Cash", "UPI", "Card"],
    currenciesAccepted: "INR",
    knowsAbout: primaryServiceNames,
    areaServed: {
      "@type": area ? "Place" : "City",
      name: placeName,
    },
    ...(area
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: area,
            addressRegion: city.name,
            addressCountry: "IN",
          },
        }
      : {}),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "256",
    },
    openingHours: "Mo-Su 08:00-21:00",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Doorifix appliance repair services in ${placeName}`,
      itemListElement: primaryServiceNames.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };
}

export function cityServiceSchema(city: CityData, service: ServiceData, breadcrumbs?: BreadcrumbItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} Repair & Service in ${city.name}`,
    description: `Expert ${service.title.toLowerCase()} repair service in ${city.name}. ${service.detailDescription}`,
    serviceType: `${service.title} Repair in ${city.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: `${SITE_NAME} - ${city.name}`,
      telephone: "+919886579923",
      email: "doorifix@gmail.com",
      url: absoluteUrl(`/${city.slug}`),
      areaServed: {
        "@type": "City",
        name: city.name,
      },
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(service.rating),
      reviewCount: "256",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: absoluteUrl(`/${city.slug}/service/${service.slug}`),
    },
  };

  return breadcrumbs ? [schema, breadcrumbSchema(breadcrumbs)] : schema;
}
