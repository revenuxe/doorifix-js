"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
export function useLocationLinks() {
  const pathname = usePathname();
  const query = useSearchParams();
  const city = getCityBySlug(pathname.split("/")[1]) || getCityBySlug(query.get("city") || "");
  return (path: string) => {
    if (!city) return path;
    if (path === "/") return `/${city.slug}`;
    if (path === "/services") return `/${city.slug}/services`;
    if (path.startsWith("/service/")) return `/${city.slug}${path}`;
    return path;
  };
}
