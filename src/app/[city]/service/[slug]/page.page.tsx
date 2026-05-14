import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityServiceDetail from "@/pages/CityServiceDetail";
import { JsonLd } from "../../../_components/JsonLd";
import { getCityBySlug } from "@/data/cities";
import { getServiceBySlug } from "@/data/services";
import { cityServiceMetadata, cityServiceSchema, type BreadcrumbItem } from "@/lib/seo";

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

  return cityServiceMetadata(city, service);
}

export default function CityServicePage({ params }: CityServicePageProps) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.slug);

  if (!city || !service) {
    notFound();
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
