import type { Metadata } from "next";
import CityServiceDetail from "@/pages/CityServiceDetail";
import { JsonLd } from "../../../_components/JsonLd";
import { getCityBySlug } from "@/data/cities";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata, cityServiceSchema, type BreadcrumbItem } from "@/lib/seo";

interface CityServicePageProps {
  params: {
    city: string;
    slug: string;
  };
}

export function generateMetadata({ params }: CityServicePageProps): Metadata {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.slug);

  if (!city || !service) {
    return {};
  }

  return buildMetadata({
    title: `${service.title} Repair in ${city.name}`,
    description: `Expert ${service.title.toLowerCase()} repair service in ${city.name}. ${service.detailDescription}`,
    canonical: `/${city.slug}/service/${service.slug}`,
    keywords: `${service.title} repair ${city.name}, ${service.title} service ${city.name}, ${service.title} repair near me ${city.name}`,
  });
}

export default function CityServicePage({ params }: CityServicePageProps) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.slug);

  if (!city || !service) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: city.name, url: `/${city.slug}` },
    { name: `${service.title} Repair`, url: `/${city.slug}/service/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={cityServiceSchema(city, service, breadcrumbs)} />
      <CityServiceDetail />
    </>
  );
}
