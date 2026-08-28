import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandDetail from "@/pages/BrandDetail";
import { JsonLd } from "@/app/_components/JsonLd";
import { getBrandBySlug } from "@/data/brands";
import { getCityBySlug } from "@/data/cities";
import { BASE_URL, buildMetadata, type BreadcrumbItem } from "@/lib/seo";

interface CityWashingMachineBrandPageProps {
  params: { city: string; brand: string };
}

function getPageData(params: CityWashingMachineBrandPageProps["params"]) {
  const city = getCityBySlug(params.city);
  const brand = getBrandBySlug(params.brand);
  return city?.slug === "mangalore" && brand?.serviceSlugs.includes("washing-machine-repair") ? { city, brand } : undefined;
}

export function generateMetadata({ params }: CityWashingMachineBrandPageProps): Metadata {
  const page = getPageData(params);
  if (!page) return {};

  const { city, brand } = page;
  return buildMetadata({
    title: `${brand.name} Washing Machine Repair in ${city.name} | Doorstep Service`,
    description: `Book ${brand.name} washing machine repair in ${city.name} with Doorifix. Doorstep diagnosis for front load, top load and automatic machines, genuine parts and transparent pricing.`,
    canonical: `/${city.slug}/washing-machine/brands/${brand.slug}`,
    keywords: `${brand.name} washing machine repair ${city.name}, ${brand.name} washing machine service ${city.name}, ${brand.name} repair near me ${city.name}, washing machine repair ${city.name}`,
  });
}

export default function CityWashingMachineBrandPage({ params }: CityWashingMachineBrandPageProps) {
  const page = getPageData(params);
  if (!page) notFound();

  const { city, brand } = page;
  const path = `/${city.slug}/washing-machine/brands/${brand.slug}`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: city.name, url: `/${city.slug}` },
    { name: "Washing Machine Repair", url: `/${city.slug}/service/washing-machine-repair` },
    { name: `${brand.name} Washing Machine Repair`, url: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${brand.name} Washing Machine Repair in ${city.name}`,
            description: `Doorstep ${brand.name} washing machine repair in ${city.name}.`,
            url: `${BASE_URL}${path}`,
            provider: { "@type": "LocalBusiness", name: "Doorifix", telephone: "+919886579923" },
            areaServed: { "@type": "City", name: city.name },
            brand: { "@type": "Brand", name: brand.name },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((item, index) => ({
              "@type": "ListItem", position: index + 1, name: item.name, item: new URL(item.url, BASE_URL).toString(),
            })),
          },
        ]}
      />
      <BrandDetail brandRoutePrefix={`/${city.slug}/washing-machine/brands`} cityName={city.name} />
    </>
  );
}
