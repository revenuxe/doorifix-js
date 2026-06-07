import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/pages/ServiceDetail";
import { JsonLd } from "../../../_components/JsonLd";
import { getServiceBySlug } from "@/data/services";
import { serviceMetadata, serviceSchema, type BreadcrumbItem } from "@/lib/seo";

interface ServiceIssuePageProps {
  params: {
    slug: string;
    issue: string;
  };
}

export function generateMetadata({ params }: ServiceIssuePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return serviceMetadata(service);
}

export default function ServiceIssuePage({ params }: ServiceIssuePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: `${service.title} Repair`, url: `/service/${service.slug}` },
    { name: params.issue, url: `/service/${service.slug}/${params.issue}` },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(service, breadcrumbs)} />
      <ServiceDetail />
    </>
  );
}
