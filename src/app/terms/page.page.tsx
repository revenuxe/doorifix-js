import TermsOfService from "@/pages/TermsOfService";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Doorifix terms of service.",
  canonical: "/terms",
});

export default function TermsPage() {
  return <TermsOfService />;
}
