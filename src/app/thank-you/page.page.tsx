import { Suspense } from "react";
import ThankYou from "@/pages/ThankYou";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank You",
  canonical: "/thank-you",
  robots: {
    index: false,
    follow: false,
  },
});

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYou />
    </Suspense>
  );
}
