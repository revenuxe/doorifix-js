import type { Metadata } from "next";
import AreaLanding from "@/pages/AreaLanding";
import { JsonLd } from "../../_components/JsonLd";
import { getCityBySlug } from "@/data/cities";
import { getAreaByCityAndSlug } from "@/data/areas";
import { breadcrumbSchema, buildMetadata, localBusinessSchema } from "@/lib/seo";

interface AreaPageProps {
  params: {
    city: string;
    area: string;
  };
}

export function generateMetadata({ params }: AreaPageProps): Metadata {
  const city = getCityBySlug(params.city);
  const area = city ? getAreaByCityAndSlug(city.slug, params.area) : undefined;

  if (!city || !area) {
    return {};
  }

  return buildMetadata({
    title: `Appliance Repair in ${area}, ${city.name}`,
    description: `Top-rated doorstep appliance repair in ${area}, ${city.name}. Same-day washing machine, refrigerator, AC, microwave, dryer & dishwasher repair by certified technicians in ${area}.`,
    canonical: `/${city.slug}/${params.area}`,
    keywords: `appliance repair ${area}, washing machine repair ${area}, fridge repair ${area}, AC service ${area}, appliance repair near me ${area}, doorstep appliance repair ${area} ${city.name}`,
  });
}

export default function AreaPage({ params }: AreaPageProps) {
  const city = getCityBySlug(params.city);
  const area = city ? getAreaByCityAndSlug(city.slug, params.area) : undefined;

  if (!city || !area) {
    return null;
  }

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(city, area),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: city.name, url: `/${city.slug}` },
            { name: area, url: `/${city.slug}/${params.area}` },
          ]),
        ]}
      />
      <AreaLanding />
    </>
  );
}
