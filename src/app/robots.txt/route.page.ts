import { absoluteUrl } from "@/lib/seo";

export function GET() {
  return new Response(
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
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=3600",
      },
    },
  );
}
