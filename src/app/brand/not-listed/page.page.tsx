import BrandNotListed from "@/pages/BrandNotListed";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Appliance Brand Not Listed? We Still Repair It | Doorifix",
  description:
    "Can't find your appliance brand on our list? Doorifix repairs washing machines, refrigerators, ACs, microwaves, dryers and dishwashers from every manufacturer in Bangalore — free diagnosis, transparent pricing and a warranty on every repair.",
  canonical: "/brand/not-listed",
  keywords: "appliance brand not listed, unlisted appliance brand repair, any brand appliance repair near me, appliance repair all brands Bangalore",
});

export default function BrandNotListedPage() {
  return <BrandNotListed />;
}
