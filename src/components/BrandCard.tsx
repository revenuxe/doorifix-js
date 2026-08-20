import Link from "next/link";
import { imageSrc } from "@/lib/image";
import type { BrandData } from "@/data/brands";

interface BrandCardProps {
  brand: BrandData;
  href?: string;
}

const BrandCard = ({ brand, href = `/brand/${brand.slug}` }: BrandCardProps) => {
  return (
    <Link
      href={href}
      className="bg-card rounded-2xl border border-border p-4 flex flex-col items-center justify-center gap-2 text-center hover:shadow-md hover:border-primary/30 transition-all"
    >
      <span className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
        <img src={imageSrc(brand.logo)} alt={`${brand.name} logo`} className="w-full h-full object-contain p-1.5" />
      </span>
      <span className="text-sm font-semibold text-foreground">{brand.name}</span>
    </Link>
  );
};

export default BrandCard;
