import { readFileSync, writeFileSync } from "node:fs";

const baseUrl = "https://www.doorifix.com";
const staticRoutes = ["/", "/services", "/blog", "/about", "/contact", "/terms", "/privacy", "/brand/not-listed"];

function readSource(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

function unique(values) {
  return [...new Set(values)];
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractSlugs(source) {
  return unique([...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
}

function extractCityAreas(source) {
  const cityAreas = {};
  const entries = source.matchAll(/^\s*([a-z0-9-]+):\s*\[([\s\S]*?)^\s*\]/gm);

  for (const [, city, block] of entries) {
    cityAreas[city] = [...block.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
  }

  return cityAreas;
}

function absoluteUrl(path) {
  return new URL(path, baseUrl).toString();
}

function priorityFor(path, cityRoutes, serviceRoutes, cityServiceRoutes, areaRoutes, brandRoutes) {
  if (path === "/") return 1;
  if (path === "/services") return 0.9;
  if (path === "/blog") return 0.8;
  if (path.startsWith("/blog/")) return 0.7;
  if (cityRoutes.includes(path)) return path === "/bangalore" ? 0.9 : 0.8;
  if (serviceRoutes.includes(path) || cityServiceRoutes.includes(path)) return 0.8;
  if (brandRoutes.includes(path)) return 0.7;
  if (areaRoutes.includes(path)) return 0.7;
  if (path === "/about" || path === "/contact") return 0.7;
  return 0.3;
}

function changeFrequencyFor(path, cityRoutes) {
  if (path === "/" || path === "/services" || path === "/blog" || cityRoutes.includes(path)) return "weekly";
  if (path === "/terms" || path === "/privacy") return "yearly";
  return "monthly";
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const services = extractSlugs(readSource("src/data/services.ts"));
const blogPosts = extractSlugs(readSource("src/data/blogs.ts"));
const cities = extractSlugs(readSource("src/data/cities.ts"));
const cityAreas = extractCityAreas(readSource("src/data/areas.ts"));
const brands = extractSlugs(readSource("src/data/brands.ts"));

// Pilot for area+service pages — keep in sync with AREA_SERVICE_PILOT_SLUGS
// in src/pages/ServiceDetail.tsx, expand once reviewed.
const areaServicePilotSlugs = ["washing-machine-repair"];

const serviceRoutes = services.map((slug) => `/service/${slug}`);
const blogRoutes = blogPosts.map((slug) => `/blog/${slug}`);
const brandRoutes = brands.map((slug) => `/brand/${slug}`);
const washingMachineBrandRoutes = brands
  .filter((slug) => slug !== "voltas")
  .map((slug) => `/washing-machine/brands/${slug}`);
const cityWashingMachineBrandRoutes = brands
  .filter((slug) => slug !== "voltas")
  .map((slug) => `/mangalore/washing-machine/brands/${slug}`);
const cityRoutes = cities.map((city) => `/${city}`);
const cityServiceRoutes = cities.flatMap((city) => services.map((slug) => `/${city}/service/${slug}`));
const areaRoutes = cities.flatMap((city) => (cityAreas[city] || []).map((area) => `/${city}/${slugify(area)}`));
const areaServiceRoutes = cities.flatMap((city) =>
  (cityAreas[city] || []).flatMap((area) =>
    areaServicePilotSlugs.map((slug) => `/${city}/${slugify(area)}/service/${slug}`),
  ),
);
const routes = unique([
  ...staticRoutes,
  ...blogRoutes,
  ...serviceRoutes,
  ...brandRoutes,
  ...washingMachineBrandRoutes,
  ...cityWashingMachineBrandRoutes,
  ...cityRoutes,
  ...cityServiceRoutes,
  ...areaRoutes,
  ...areaServiceRoutes,
]);
const lastModified = new Date().toISOString().slice(0, 10);

const sitemapUrls = routes
  .map(
    (path) => `  <url>
    <loc>${escapeXml(absoluteUrl(path))}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequencyFor(path, cityRoutes)}</changefreq>
    <priority>${priorityFor(path, cityRoutes, serviceRoutes, cityServiceRoutes, areaRoutes, brandRoutes).toFixed(1)}</priority>
  </url>`,
  )
  .join("\n");

writeFileSync(
  new URL("../public/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`,
);

writeFileSync(
  new URL("../public/robots.txt", import.meta.url),
  `User-agent: Googlebot
Allow: /
Disallow: /admin
Disallow: /admin/login
Disallow: /api

User-agent: Bingbot
Allow: /
Disallow: /admin
Disallow: /admin/login
Disallow: /api

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/login
Disallow: /api

Sitemap: ${absoluteUrl("/sitemap.xml")}
`,
);

console.log(`Generated ${routes.length} sitemap URLs.`);
