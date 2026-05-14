import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "*"],
        allow: "/",
        disallow: ["/admin", "/admin/login", "/api"],
      },
      {
        userAgent: ["Twitterbot", "facebookexternalhit"],
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
