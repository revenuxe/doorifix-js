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
    <Suspense fallback={<PageLoading title="Confirming your request..." />}>
      <ThankYou />
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
