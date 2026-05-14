import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Doorifix privacy policy.",
  canonical: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
