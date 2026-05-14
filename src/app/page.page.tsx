import { homeMetadata } from "@/lib/seo";
import Index from "@/pages/Index";

export const metadata = homeMetadata();

export default function HomePage() {
  return <Index />;
}
