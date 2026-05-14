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
    <Suspense fallback={<PageLoading title="Loading services..." />}>
      <Services />
    </Suspense>
  );
}

function PageLoading({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
      </div>
    </div>
  );
}
