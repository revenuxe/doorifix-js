import About from "@/pages/About";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Doorifix",
  description: "Learn about Doorifix appliance repair and doorstep servicing.",
  canonical: "/about",
});

export default function AboutPage() {
  return <About />;
}
