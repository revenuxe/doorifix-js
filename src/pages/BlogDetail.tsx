"use client";

import { imageSrc } from "@/lib/image";
import { ArrowRight, Calendar, CheckCircle, Clock, ExternalLink, Phone } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import DesktopHeader from "@/components/DesktopHeader";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import SEO from "@/components/SEO";
import { getBlogBySlug } from "@/data/blogs";

const BlogDetail = () => {
  const { slug } = useParams() as { slug?: string };
  const post = getBlogBySlug(slug || "");

  if (!post) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center px-5">
        <p className="text-sm text-muted-foreground">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO title={post.title} description={post.excerpt} canonical={`/blog/${post.slug}`} keywords={post.keywords} />
      <DesktopHeader />

      <main className="flex-1">
        <div className="max-w-[430px] md:max-w-6xl mx-auto px-5 md:px-8 lg:px-12 py-6 md:py-10">
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <span>/</span>
            <span className="text-foreground">{post.category}</span>
          </div>

          <article>
            <header className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">{post.title}</h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={15} /> Updated {post.updatedAt}</span>
                  <span className="flex items-center gap-1"><Clock size={15} /> {post.readTime}</span>
                </div>
              </div>

              <aside className="bg-card border border-border rounded-2xl p-5 space-y-4">
                <h2 className="font-bold text-foreground">Quick Takeaways</h2>
                <div className="space-y-3">
                  {post.summary.map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </header>

            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mt-8 md:mt-10">
              <img src={imageSrc(post.image)} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="grid lg:grid-cols-[240px_1fr] gap-8 mt-10">
              <aside className="hidden lg:block">
                <div className="sticky top-24 bg-card border border-border rounded-2xl p-5">
                  <h2 className="font-bold text-sm text-foreground mb-3">In This Guide</h2>
                  <nav className="space-y-2">
                    {post.sections.map((section) => (
                      <a key={section.id} href={`#${section.id}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="space-y-10">
                <section className="bg-card border border-border rounded-2xl p-5 md:p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">What This Guide Covers</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {post.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                {post.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{section.title}</h2>
                    <div className="mt-4 space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-base text-muted-foreground leading-8">{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-7">
                            <CheckCircle size={17} className="text-primary mt-1 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                <section className="bg-primary text-primary-foreground rounded-3xl p-6 md:p-8">
                  <div className="md:flex md:items-center md:justify-between gap-6">
                    <div>
                      <h2 className="text-2xl font-bold">Need Washing Machine Repair in Bangalore?</h2>
                      <p className="mt-2 text-sm text-primary-foreground/75 max-w-xl">
                        Book Doorifix for doorstep diagnosis, transparent repair quotes and expert service for all major washing machine brands.
                      </p>
                    </div>
                    <div className="mt-5 md:mt-0 flex flex-col sm:flex-row gap-3">
                      <a href="tel:+919886579923" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary rounded-full px-6 py-3 text-sm font-semibold">
                        <Phone size={16} />
                        Call Now
                      </a>
                      <Link href="/service/washing-machine-repair" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/15 rounded-full px-6 py-3 text-sm font-semibold">
                        Book Service <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                  <div className="mt-5 space-y-3">
                    {post.faqs.map((faq) => (
                      <details key={faq.question} className="bg-card rounded-2xl border border-border group">
                        <summary className="px-5 py-4 cursor-pointer font-semibold text-sm text-foreground list-none flex items-center justify-between gap-4">
                          {faq.question}
                          <span className="text-muted-foreground text-xl group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>

                <section className="border-t border-border pt-6">
                  <h2 className="font-bold text-foreground">Sources and Further Reading</h2>
                  <div className="mt-3 space-y-2">
                    {post.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        {source.label}
                        <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default BlogDetail;
