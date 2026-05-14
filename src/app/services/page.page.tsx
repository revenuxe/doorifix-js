import { Suspense } from "react";
import Services from "@/pages/Services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Appliance Repair Services",
  description: "Explore Doorifix appliance repair services for washing machines, refrigerators, AC, microwaves, dryers, and dishwashers.",
  canonical: "/services",
  keywords: "appliance repair services, washing machine repair, refrigerator repair, AC service, microwave repair, dryer repair, dishwasher repair",
});

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <Services />
    </Suspense>
  );
}
