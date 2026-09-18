import { Suspense } from "react";
import { notFound } from "next/navigation";
import Services from "@/pages/Services";
import { getCityBySlug } from "@/data/cities";
import { buildMetadata } from "@/lib/seo";
export function generateMetadata({ params, searchParams }: { params: { city: string }; searchParams: Record<string, string | string[] | undefined> }) {
 const city = getCityBySlug(params.city);
 return city ? buildMetadata({ title: `Appliance Repair Services in ${city.name}`, canonical: `/${city.slug}/services`, robots: searchParams.q || searchParams.category || searchParams.area ? { index: false, follow: true } : undefined, description: `Browse washing machine, AC, refrigerator, microwave, dryer and dishwasher repair in ${city.name}.` }) : {};
}
export default function Page({ params }: { params: { city: string } }) {
 if (!getCityBySlug(params.city)) notFound();
 return <Suspense fallback={null}><Services /></Suspense>;
}
