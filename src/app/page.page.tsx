import { buildMetadata } from "@/lib/seo";
import Index from "@/pages/Index";

export const metadata = buildMetadata({
  title: "Doorifix - Expert Appliance Repair & Servicing",
  canonical: "/",
});

export default function HomePage() {
  return <Index />;
}
