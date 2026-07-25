import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandDetail from "@/pages/BrandDetail";
import { JsonLd } from "../../_components/JsonLd";
import { buildBrandCopy, getBrandBySlug } from "@/data/brands";
import { brandMetadata, brandSchema, type BreadcrumbItem } from "@/lib/seo";

interface BrandPageProps {
  params: {
    brand: string;
  };
}

export function generateMetadata({ params }: BrandPageProps): Metadata {
  const brand = getBrandBySlug(params.brand);

  if (!brand) {
    return {};
  }

  return brandMetadata(brand);
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = getBrandBySlug(params.brand);

  if (!brand) {
    notFound();
  }

  const copy = buildBrandCopy(brand);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: copy.headline, url: `/brand/${brand.slug}` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const brandSchemas = brandSchema(brand, breadcrumbs) as object[];

  return (
    <>
      <JsonLd data={[...brandSchemas, faqSchema]} />
      <BrandDetail />
    </>
  );
}
