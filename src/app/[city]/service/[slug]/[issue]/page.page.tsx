import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityServiceDetail from "@/pages/CityServiceDetail";
import { JsonLd } from "@/app/_components/JsonLd";
import { getCityBySlug } from "@/data/cities";
import { getServiceBySlug } from "@/data/services";
import { applianceIssues } from "@/data/applianceIssues";
import { slugify } from "@/data/areas";
import { areaServiceSchema, buildMetadata } from "@/lib/seo";

interface CityServiceIssuePageProps { params: { city: string; slug: string; issue: string } }

function getPageData(params: CityServiceIssuePageProps["params"]) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.slug);
  const issue = service && (applianceIssues[service.slug] || []).find((item) => slugify(item) === params.issue);
  return city && service && issue ? { city, service, issue } : undefined;
}

export function generateMetadata({ params }: CityServiceIssuePageProps): Metadata {
  const page = getPageData(params);
  if (!page) return {};
  const { city, service, issue } = page;
  return buildMetadata({
    title: `${issue} ${service.title} Repair in ${city.name} | Doorstep Service`,
    description: `Book expert ${issue.toLowerCase()} ${service.title.toLowerCase()} repair in ${city.name}. Same-day doorstep diagnosis, transparent pricing and trained technicians.`,
    canonical: `/${city.slug}/service/${service.slug}/${params.issue}`,
    keywords: `${issue} ${service.title} repair ${city.name}, ${service.title} repair ${city.name}, ${service.title} technician near me ${city.name}`,
  });
}

export default function CityServiceIssuePage({ params }: CityServiceIssuePageProps) {
  const page = getPageData(params);
  if (!page) notFound();
  const { city, service, issue } = page;
  return <><JsonLd data={areaServiceSchema(city, city.name, city.slug, service)} /><CityServiceDetail /></>;
}
