import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityServiceDetail from "@/pages/CityServiceDetail";
import ServiceDetail from "@/pages/ServiceDetail";
import { JsonLd } from "@/app/_components/JsonLd";
import { getCityBySlug } from "@/data/cities";
import { getServiceBySlug } from "@/data/services";
import { issueGuides } from "@/data/issue-guides";
import { repairName } from "@/data/local-content";
import { applianceIssues } from "@/data/applianceIssues";
import { slugify } from "@/data/areas";
import { cityServiceSchema, buildMetadata, absoluteUrl, breadcrumbSchema } from "@/lib/seo";

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
    title: `${issue}: ${repairName(service)} in ${city.name}`,
    description: `${issue} on your ${service.title.toLowerCase()} in ${city.name}? Learn what to report, possible causes and how to arrange diagnosis before approving repair.`,
    canonical: `/${city.slug}/service/${service.slug}/${params.issue}`,
    keywords: `${issue} ${service.title} repair ${city.name}, ${service.title} repair ${city.name}, ${service.title} technician near me ${city.name}`,
  });
}

export default function CityServiceIssuePage({ params }: CityServiceIssuePageProps) {
  const page = getPageData(params);
  if (!page) notFound();
  const { city, service, issue } = page;
  const path = `/${city.slug}/service/${service.slug}/${params.issue}`;
  const schema = cityServiceSchema(city, service);
  return <><JsonLd data={[
    { ...schema, "@id": `${absoluteUrl(path)}#service`, url: absoluteUrl(path), description: issueGuides[service.slug]?.[issue]?.explanation || `${issue} diagnosis in ${city.name}.` },
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: city.name, url: `/${city.slug}` },
      { name: `${service.title} Repair`, url: `/${city.slug}/service/${service.slug}` },
      { name: issue, url: path },
    ]),
  ]} /><ServiceDetail /></>;
}
