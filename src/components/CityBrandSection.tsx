import Link from "next/link";
import { brands } from "@/data/brands";
import { imageSrc } from "@/lib/image";

interface CityBrandSectionProps {
  citySlug: string;
  excludeBrand?: string;
}

export default function CityBrandSection({ citySlug, excludeBrand }: CityBrandSectionProps) {
  if (!["mangalore", "chennai"].includes(citySlug)) return null;
  const availableBrands = brands.filter((brand) =>
    brand.serviceSlugs.includes("washing-machine-repair") && brand.slug !== excludeBrand,
  );

  return (
    <section aria-label="Washing machine brands we repair">
      <p className="text-base font-semibold text-primary">Washing Machine Repair</p>
      <h2 className="mt-2 mb-7 text-3xl font-bold text-foreground">
        {excludeBrand ? "Other Brands We Repair" : "Brands We Repair"}
      </h2>
      <div className="grid grid-cols-3 gap-3.5 md:grid-cols-4 lg:grid-cols-6">
        {availableBrands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/${citySlug}/washing-machine/brands/${brand.slug}`}
            aria-label={`${brand.name} washing machine repair in ${citySlug === "chennai" ? "Chennai" : "Mangalore"}`}
            className="flex min-h-[148px] min-w-0 flex-col items-center justify-center gap-6 rounded-3xl border border-border bg-card px-3 py-6 text-foreground transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <img src={imageSrc(brand.logo)} alt={`${brand.name} logo`} width={80} height={40} className="h-10 w-20 max-w-full object-contain" loading="lazy" />
            <span className="text-sm font-semibold sm:text-base">{brand.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
