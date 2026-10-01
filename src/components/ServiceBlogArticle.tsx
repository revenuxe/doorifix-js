import Image from "next/image";
import Link from "next/link";
import DesktopHeader from "./DesktopHeader";
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import { blogPosts, type BlogPost, type BlogSection } from "@/data/blogs";
import { brands } from "@/data/brands";
import { services } from "@/data/services";
import { cityAreas } from "@/data/areas";

const button = "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const textLink = "text-primary underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
const date = (value: string) => new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeZone: "Asia/Kolkata" }).format(new Date(`${value}T00:00:00Z`));

function CTASection({ title = "Book an Appliance Repair Service", compact = false }: { title?: string; compact?: boolean }) {
  return <section className={`rounded-2xl border border-primary/20 bg-primary/5 ${compact ? "p-5" : "p-6 md:p-8"}`}>
    <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
    {!compact && <p className="mt-3 leading-7 text-muted-foreground">Share your model, symptoms and address. Confirm availability and inspection charges.</p>}
    <div className="mt-5 flex flex-wrap items-center gap-4">
      <Link className={button} href="/contact">Book a repair</Link>
      <a className={textLink} href="tel:+918884647100">Call 88846 47100</a>
      <a className={textLink} href="https://wa.me/918884647100">WhatsApp Doorifix</a>
    </div>
  </section>;
}

function TableOfContents({ sections }: { sections: BlogSection[] }) {
  const links = <nav aria-label="In this guide" className="space-y-3">{sections.filter(s => s.id !== "quick-answer").map(s => <a className="block text-sm leading-5 text-muted-foreground hover:text-primary focus-visible:outline focus-visible:outline-primary" key={s.id} href={`#${s.id}`}>{s.title}</a>)}<a className="block text-sm text-primary" href="#faqs">Frequently asked questions</a><a className="block text-sm text-primary" href="#book-service">Book a repair</a></nav>;
  return <aside className="min-w-0">
    <details className="rounded-2xl border border-border bg-card p-5 lg:hidden"><summary className="cursor-pointer font-semibold">In this guide</summary><div className="mt-4">{links}</div></details>
    <div className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-border bg-card p-5 lg:block"><h2 className="mb-4 font-semibold">In this guide</h2>{links}</div>
  </aside>;
}

function ArticleSection({ section }: { section: BlogSection }) {
  return <section id={section.id} className="scroll-mt-28">
    <h2 className="text-2xl font-bold leading-tight md:text-3xl">{section.title}</h2>
    <div className="mt-4 space-y-4">{section.body.map(p => <p key={p} className="leading-8 text-muted-foreground">{p}</p>)}</div>
    {section.cards && <div className="mt-5 grid gap-4 sm:grid-cols-2">{section.cards.map(card => <div key={card.title} className="rounded-2xl border border-border bg-card p-5"><h3 className="text-base font-semibold">{card.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{card.text}</p></div>)}</div>}
    {section.bullets && <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-muted-foreground">{section.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
    {section.link && <Link className={`${textLink} mt-5 inline-flex min-h-11 items-center`} href={section.link.href}>{section.link.label} →</Link>}
  </section>;
}

export default function ServiceBlogArticle({ post }: { post: BlogPost }) {
  const supportedBrands = brands.filter(b => post.serviceSlug && b.serviceSlugs.includes(post.serviceSlug));
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);
  const serviceName = services.find(s => s.slug === post.serviceSlug)?.title || "appliance";
  const [quick, ...sections] = post.sections;
  return <div className="min-h-screen bg-background text-foreground">
    <DesktopHeader />
    <main className="mx-auto max-w-6xl px-5 py-8 pb-28 md:px-8 md:py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-xs leading-6 text-muted-foreground sm:text-sm"><ol className="flex flex-wrap gap-x-2"><li><Link className={textLink} href="/">Home</Link> /</li><li><Link className={textLink} href="/blog">Blog</Link> /</li><li aria-current="page">{post.title}</li></ol></nav>
      <article>
        <header className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div><span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">{post.category}</span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-5 text-muted-foreground"><span>{post.author}</span><span>Published <time dateTime={post.publishedAt}>{date(post.publishedAt)}</time></span><span>Last updated: <time dateTime={post.updatedAt}>{date(post.updatedAt)}</time></span><span>{post.readTime}</span></div>
            <div className="mt-6 flex flex-wrap items-center gap-5"><Link href="/contact" className={button}>Book {serviceName.toLowerCase()} repair</Link><Link className={textLink} href="/contact">Contact us</Link></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted"><Image src={post.image} alt={post.imageAlt || post.title} fill priority sizes="(min-width: 1024px) 460px, (min-width: 768px) 700px, 100vw" className="object-contain p-6" /></div>
        </header>
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8"><ArticleSection section={quick} /></div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)]">
          <TableOfContents sections={post.sections} />
          <div className="min-w-0 space-y-12">
            {sections.map(section => <div key={section.id}><ArticleSection section={section} />{post.serviceAreas?.includes(section.id) && cityAreas[section.id]?.length > 0 && <p className="mt-3 text-sm leading-7 text-muted-foreground">Listed service areas include {cityAreas[section.id].slice(0, 4).join(", ")}. Confirm your exact address when booking.</p>}{section.id === "troubleshooting" && <div className="mt-6"><CTASection compact title="Need help with a recurring fault?" /></div>}{section.id === "machine-types" && supportedBrands.length > 0 && <div className="mt-6 rounded-2xl bg-muted/50 p-5"><h3 className="font-semibold">Documented washing machine brands</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Confirm your exact model when booking. Brand listings do not imply manufacturer affiliation.</p><ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3">{supportedBrands.map(b => <li key={b.slug}><Link className={`${textLink} text-sm`} href={`/washing-machine/brands/${b.slug}`}>{b.name}</Link></li>)}</ul></div>}</div>)}
            <CTASection compact title="Ask about diagnosis and a repair quote" />
            <section id="faqs" className="scroll-mt-28"><h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2><div className="mt-5 space-y-3">{post.faqs.map(faq => <details key={faq.question} className="rounded-2xl border border-border bg-card"><summary className="cursor-pointer px-5 py-4 font-semibold focus-visible:outline focus-visible:outline-primary">{faq.question}</summary><p className="px-5 pb-5 leading-7 text-muted-foreground">{faq.answer}</p></details>)}</div></section>
            <div id="book-service" className="scroll-mt-28"><CTASection title={`Book a ${serviceName} Repair Service`} /></div>
            <section><h2 className="text-2xl font-bold">Related appliance services</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{services.map(s => <li key={s.slug}><Link className={`${textLink} inline-flex min-h-11 items-center`} href={`/service/${s.slug}`}>{s.title} repair and service</Link></li>)}</ul></section>
            {related.length > 0 && <section><h2 className="text-2xl font-bold">Related guides</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{related.map(p => <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-border bg-card p-5 hover:border-primary focus-visible:outline focus-visible:outline-primary"><h3 className="font-semibold leading-6">{p.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{p.excerpt}</p></Link>)}</div></section>}
            {post.sources.length > 0 && <section><h2 className="text-xl font-bold">Manufacturer guidance</h2><ul className="mt-4 space-y-3">{post.sources.map(s => <li key={s.url}><a className={textLink} href={s.url}>{s.label}</a></li>)}</ul></section>}
          </div>
        </div>
      </article>
    </main>
    <Footer /><BottomNav />
  </div>;
}
