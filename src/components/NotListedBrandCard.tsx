import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { NOT_LISTED_BRAND_SLUG } from "@/data/brands";

const NotListedBrandCard = () => {
  return (
    <Link
      href={`/brand/${NOT_LISTED_BRAND_SLUG}`}
      className="bg-card rounded-2xl border border-dashed border-border p-4 flex flex-col items-center justify-center gap-2 text-center hover:shadow-md hover:border-primary/40 transition-all"
    >
      <span className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
        <HelpCircle size={22} className="text-muted-foreground" />
      </span>
      <span className="text-sm font-semibold text-foreground">Other Brand</span>
    </Link>
  );
};

export default NotListedBrandCard;
