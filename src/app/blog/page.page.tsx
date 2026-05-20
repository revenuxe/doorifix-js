import Blog from "@/pages/Blog";
import { JsonLd } from "../_components/JsonLd";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blogs";

export const metadata = buildMetadata({
  title: "Appliance Repair Blog",
  description: "Doorifix appliance repair guides, troubleshooting tips and service advice for Bangalore homes.",
  canonical: "/blog",
  keywords: "appliance repair blog, washing machine repair blog, appliance service tips, Doorifix blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Doorifix Blog",
          url: absoluteUrl("/blog"),
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url: absoluteUrl(`/blog/${post.slug}`),
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
          })),
        }}
      />
      <Blog />
    </>
  );
}
