import type { MetadataRoute } from "next";
import {
  areaRoutes,
  cityRoutes,
  cityServiceRoutes,
  serviceRoutes,
  staticRoutes,
} from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

function priorityFor(path: string) {
  if (path === "/") return 1;
  if (path === "/services") return 0.9;
  if (cityRoutes.includes(path)) return path === "/hyderabad" ? 0.9 : 0.8;
  if (serviceRoutes.includes(path) || cityServiceRoutes.includes(path)) return 0.8;
  if (areaRoutes.includes(path)) return 0.7;
  if (path === "/about" || path === "/contact") return 0.7;
  return 0.3;
}

function changeFrequencyFor(path: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/" || path === "/services" || cityRoutes.includes(path)) return "weekly";
  if (path === "/terms" || path === "/privacy") return "yearly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes, ...areaRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: changeFrequencyFor(path),
    priority: priorityFor(path),
  }));
}
