import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityLanding from "@/pages/CityLanding";
import { JsonLd } from "../_components/JsonLd";
import { getCityBySlug } from "@/data/cities";
import { breadcrumbSchema, cityMetadata, localBusinessSchema } from "@/lib/seo";

interface CityPageProps {
  params: {
    city: string;
  };
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const city = getCityBySlug(params.city);

  if (!city) {
    return {};
  }

  return cityMetadata(city);
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(city),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: city.faqs.map((faq) => ({
              "@type": "Question", name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: city.name, url: `/${city.slug}` },
          ]),
        ]}
      />
      <CityLanding />
    </>
  );
}
