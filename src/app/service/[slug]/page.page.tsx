import type { Metadata } from "next";
import ServiceDetail from "@/pages/ServiceDetail";
import { JsonLd } from "../../_components/JsonLd";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata, serviceSchema, type BreadcrumbItem } from "@/lib/seo";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: `${service.title} Repair Near Me`,
    description: service.detailDescription,
    canonical: `/service/${service.slug}`,
    keywords: `${service.title} repair near me, ${service.title} service near me, doorstep ${service.title.toLowerCase()} repair`,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: `${service.title} Repair`, url: `/service/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(service, breadcrumbs)} />
      <ServiceDetail />
    </>
  );
}
