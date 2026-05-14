import type { Metadata } from "next";
import type { CityData } from "@/data/cities";
import type { ServiceData } from "@/data/services";

export const SITE_NAME = "Doorifix";
export const BASE_URL = "https://doorifix.com";
export const DEFAULT_DESCRIPTION =
  "Professional appliance repair & servicing at your doorstep. Washing machine, refrigerator, AC, microwave, dryer & dishwasher repair by certified technicians.";
export const DEFAULT_KEYWORDS =
  "appliance repair, washing machine repair, refrigerator repair, AC service, microwave repair, dryer repair, dishwasher repair, home appliance service, doorstep repair";
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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: DEFAULT_IMAGE,
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
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: "+919886579923",
      email: "doorifix@gmail.com",
    },
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Secunderabad" },
      { "@type": "City", name: "Kochi" },
    ],
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
    telephone: "+919886579923",
    email: "doorifix@gmail.com",
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
  };
}

export function cityServiceSchema(city: CityData, service: ServiceData, breadcrumbs?: BreadcrumbItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} Repair & Service in ${city.name}`,
    description: `Expert ${service.title.toLowerCase()} repair service in ${city.name}. ${service.detailDescription}`,
    provider: {
      "@type": "LocalBusiness",
      name: `${SITE_NAME} - ${city.name}`,
      telephone: "+919886579923",
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
  };

  return breadcrumbs ? [schema, breadcrumbSchema(breadcrumbs)] : schema;
}
