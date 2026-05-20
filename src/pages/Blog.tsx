"use client";

import { imageSrc } from "@/lib/image";
import { ArrowRight, BookOpen, Calendar, ChevronLeft, Clock, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DesktopHeader from "@/components/DesktopHeader";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import MobileMenu from "@/components/MobileMenu";
import SEO from "@/components/SEO";
import doorifixLogo from "@/assets/doorifix-logo.webp";
import { blogPosts } from "@/data/blogs";

const Blog = () => {
  const router = useRouter();
  const featured = blogPosts[0];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title="Doorifix Blog"
        description="Expert appliance repair guides, maintenance tips, troubleshooting advice and service insights from Doorifix."
        canonical="/blog"
        keywords="Doorifix blog, appliance repair blog, washing machine repair tips, appliance maintenance Bangalore"
      />
      <DesktopHeader />

      <main className="flex-1">
        <div className="max-w-[430px] md:max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-6 md:py-10">
          <div className="flex items-center justify-between md:hidden mb-6">
            <button
              onClick={() => router.back()}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground"
              aria-label="Go back"
            >
              <ChevronLeft size={18} />
            </button>
            <img src={imageSrc(doorifixLogo)} alt="Doorifix" className="h-9 object-contain" />
            <MobileMenu />
          </div>

          <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                <BookOpen size={14} />
                Appliance Care Guides
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
                  Doorifix Blog
                </h1>
                <p className="mt-3 text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Practical repair guides, maintenance checklists and appliance troubleshooting advice for Bangalore homes.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-2xl px-4 py-3 max-w-xl">
                <Search size={17} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Search-ready guides for washing machine, fridge, AC and more</span>
              </div>
            </div>

            <Link href={`/blog/${featured.slug}`} className="group block rounded-3xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3]">
                <img src={imageSrc(featured.image)} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs font-semibold text-white/75">{featured.category}</p>
                  <h2 className="mt-1 text-xl md:text-2xl font-bold leading-snug">{featured.title}</h2>
                </div>
              </div>
            </Link>
          </section>

          <section className="mt-10 md:mt-14">
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Latest Articles</h2>
                <p className="text-sm text-muted-foreground mt-1">Scannable, useful guides written for real repair decisions.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-all">
                  <div className="relative aspect-[16/10]">
                    <img src={imageSrc(post.image)} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={13} /> {post.updatedAt}</span>
                      <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read guide <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Blog;
