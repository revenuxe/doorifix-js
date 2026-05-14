import Contact from "@/pages/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Doorifix",
  description: "Contact Doorifix for doorstep appliance repair and service bookings.",
  canonical: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
