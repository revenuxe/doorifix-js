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

function changeFrequencyFor(path: string) {
  if (path === "/" || path === "/services" || cityRoutes.includes(path)) return "weekly";
  if (path === "/terms" || path === "/privacy") return "yearly";
  return "monthly";
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const lastModified = new Date().toISOString();
  const routes = [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes, ...areaRoutes];
  const urls = routes
    .map(
      (path) => `  <url>
    <loc>${escapeXml(absoluteUrl(path))}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequencyFor(path)}</changefreq>
    <priority>${priorityFor(path).toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
