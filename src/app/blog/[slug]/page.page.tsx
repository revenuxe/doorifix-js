import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "@/pages/BlogDetail";
import { JsonLd } from "../../_components/JsonLd";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { blogPosts, getBlogBySlug } from "@/data/blogs";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Doorifix",
            },
            mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
            keywords: post.keywords,
            articleSection: post.category,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <BlogDetail />
    </>
  );
}
