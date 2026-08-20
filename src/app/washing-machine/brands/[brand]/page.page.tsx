import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandDetail from "@/pages/BrandDetail";
import { JsonLd } from "@/app/_components/JsonLd";
import { getBrandBySlug } from "@/data/brands";
import { BASE_URL, buildMetadata, type BreadcrumbItem } from "@/lib/seo";

interface WashingMachineBrandPageProps {
  params: { brand: string };
}

function getWashingMachineBrand(params: WashingMachineBrandPageProps["params"]) {
  const brand = getBrandBySlug(params.brand);
  return brand?.serviceSlugs.includes("washing-machine-repair") ? brand : undefined;
}

export function generateMetadata({ params }: WashingMachineBrandPageProps): Metadata {
  const brand = getWashingMachineBrand(params);
  if (!brand) return {};

  return buildMetadata({
    title: `${brand.name} Washing Machine Repair Near Me | Doorstep Service`,
    description: `Book expert ${brand.name} washing machine repair near you with Doorifix. Same-day doorstep diagnosis, certified technicians, genuine parts and service warranty.`,
    canonical: `/washing-machine/brands/${brand.slug}`,
    keywords: `${brand.name} washing machine repair, ${brand.name} washing machine service near me, ${brand.keywords}`,
  });
}

export default function WashingMachineBrandPage({ params }: WashingMachineBrandPageProps) {
  const brand = getWashingMachineBrand(params);
  if (!brand) notFound();

  const url = `${BASE_URL}/washing-machine/brands/${brand.slug}`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Washing Machine Repair", url: "/service/washing-machine-repair" },
    { name: `${brand.name} Washing Machine Repair`, url: `/washing-machine/brands/${brand.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${brand.name} Washing Machine Repair`,
            description: `Doorstep ${brand.name} washing machine repair in Bangalore and Bengaluru.`,
            url,
            provider: { "@type": "LocalBusiness", name: "Doorifix", telephone: "+919886579923" },
            brand: { "@type": "Brand", name: brand.name },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: new URL(item.url, BASE_URL).toString(),
            })),
          },
        ]}
      />
      <BrandDetail brandRoutePrefix="/washing-machine/brands" />
    </>
  );
}
