import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaLanding from "@/pages/AreaLanding";
import { JsonLd } from "../../_components/JsonLd";
import { getCityBySlug } from "@/data/cities";
import { getAreaByCityAndSlug } from "@/data/areas";
import { areaMetadata, breadcrumbSchema, localBusinessSchema } from "@/lib/seo";

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

  return areaMetadata(city, area, params.area);
}

export default function AreaPage({ params }: AreaPageProps) {
  const city = getCityBySlug(params.city);
  const area = city ? getAreaByCityAndSlug(city.slug, params.area) : undefined;

  if (!city || !area) {
    notFound();
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
