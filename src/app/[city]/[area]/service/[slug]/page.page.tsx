import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaServiceDetail from "@/pages/AreaServiceDetail";
import { JsonLd } from "../../../../_components/JsonLd";
import { getCityBySlug } from "@/data/cities";
import { getServiceBySlug } from "@/data/services";
import { getAreaByCityAndSlug } from "@/data/areas";
import { areaServiceMetadata, areaServiceSchema, type BreadcrumbItem } from "@/lib/seo";

interface AreaServicePageProps {
  params: {
    city: string;
    area: string;
    slug: string;
  };
}

export function generateMetadata({ params }: AreaServicePageProps): Metadata {
  const city = getCityBySlug(params.city);
  const area = city ? getAreaByCityAndSlug(city.slug, params.area) : undefined;
  const service = getServiceBySlug(params.slug);

  if (!city || !area || !service) {
    return {};
  }

  return areaServiceMetadata(city, area, params.area, service);
}

export default function AreaServicePage({ params }: AreaServicePageProps) {
  const city = getCityBySlug(params.city);
  const area = city ? getAreaByCityAndSlug(city.slug, params.area) : undefined;
  const service = getServiceBySlug(params.slug);

  if (!city || !area || !service) {
    notFound();
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: city.name, url: `/${city.slug}` },
    { name: area, url: `/${city.slug}/${params.area}` },
    { name: `${service.title} Repair`, url: `/${city.slug}/${params.area}/service/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={areaServiceSchema(city, area, params.area, service, breadcrumbs)} />
      <AreaServiceDetail />
    </>
  );
}
