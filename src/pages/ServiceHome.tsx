import { useNavigate, useParams, Link } from "react-router-dom";
import { Phone, Clock, Star, CheckCircle, ShieldCheck, Wrench, Sparkles, ArrowRight, Users, Award } from "lucide-react";
import DesktopHeader from "@/components/DesktopHeader";
import MobileMenu from "@/components/MobileMenu";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServiceCard from "@/components/ServiceCard";
import { services, getServiceBySlug } from "@/data/services";
import doorifixLogo from "@/assets/doorifix-logo.webp";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "100+", label: "Expert Technicians" },
  { icon: CheckCircle, value: "2000+", label: "Repairs Done" },
  { icon: Star, value: "4.9", label: "Avg Rating" },
];

const ServiceHome = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Service not found.</p>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const bookPath = `/service/${service.slug}/book`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} Repair & Service`,
    description: service.seo.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Doorifix",
      telephone: "+919100038182",
      email: "doorifix.in@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Secunderabad" },
      { "@type": "City", name: "Kochi" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: String(service.rating), reviewCount: "256" },
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={service.seo.metaTitle}
        description={service.seo.metaDescription}
        keywords={service.seo.keywords}
        canonical={`/service/${service.slug}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: `${service.title} Repair`, url: `/service/${service.slug}` },
        ]}
        structuredData={[serviceSchema, faqSchema]}
      />
      <DesktopHeader />

      <div className="flex-1">
        <div className="max-w-[430px] md:max-w-none mx-auto">
          <div className="px-5 md:px-8 lg:px-12 pt-6 pb-4 space-y-5 md:space-y-8">
            {/* Mobile Header */}
            <div className="flex items-center justify-between md:hidden">
              <Link to="/" className="flex items-center gap-2">
                <img src={doorifixLogo} alt="Doorifix" className="h-10 object-contain" />
              </Link>
              <MobileMenu />
            </div>

            {/* Title */}
            <div className="md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  {service.title} Repair · Bangalore
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground italic">
                  {service.seo.h1}
                </h1>
                <p className="text-sm md:text-lg text-muted-foreground mt-3 max-w-lg">
                  {service.seo.heroSubtitle}
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <button
                    onClick={() => navigate(bookPath)}
                    className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Book {service.title} Repair
                  </button>
                  <a
                    href="tel:+919100038182"
                    className="border border-border text-foreground text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-muted transition-colors"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                </div>
              </div>

              {/* Desktop Stats */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-4 border border-border text-center">
                    <stat.icon size={20} className="mx-auto text-primary mb-1" />
                    <span className="text-xl font-bold text-foreground">{stat.value}</span>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Card */}
            <div
              className="relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[340px] cursor-pointer"
              onClick={() => navigate(bookPath)}
            >
              <img
                src={service.image}
                alt={`${service.title} repair near me`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 p-5 md:p-8 space-y-2 max-w-md h-full flex flex-col justify-end">
                <div className="flex items-center gap-1 text-white/80">
                  <Sparkles size={14} />
                  <span className="text-xs">Same-Day Doorstep Service</span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-white leading-snug">
                  {service.title} Repair<br />by Certified Experts
                </h2>
                <p className="hidden md:block text-sm text-white/80 max-w-sm">
                  {service.detailDescription}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    className="bg-white text-foreground text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(bookPath);
                    }}
                  >
                    Book Now
                  </button>
                  <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2">
                    <Clock size={14} className="text-white/80" />
                    <span className="text-xs font-medium text-white">{service.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-3">
                Brands We Service
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.brands.map((brand) => (
                  <span
                    key={brand}
                    className="bg-muted text-foreground text-xs md:text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Common Issues */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">
                Common {service.title} Issues We Fix
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {service.commonIssues.map((issue) => (
                  <button
                    key={issue.title}
                    onClick={() => navigate(bookPath)}
                    className="text-left bg-card rounded-2xl p-4 border border-border hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Wrench size={16} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">{issue.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{issue.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-card rounded-3xl border border-border p-5 md:p-7">
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">
                What's Included in Your {service.title} Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Doorifix */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">
                Why Choose Doorifix for {service.title} Repair
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: ShieldCheck, title: "Service Warranty", desc: "On every repair & part" },
                  { icon: Wrench, title: "Certified Techs", desc: "Background-verified" },
                  { icon: Clock, title: "Same-Day Visit", desc: "Within hours of booking" },
                  { icon: CheckCircle, title: "Transparent Quote", desc: "Free diagnosis, no hidden fees" },
                ].map((item) => (
                  <div key={item.title} className="bg-card rounded-2xl border border-border p-4">
                    <item.icon size={20} className="text-primary mb-2" />
                    <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">
                What Customers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {service.testimonials.map((t) => (
                  <div key={t.name} className="bg-card rounded-2xl border border-border p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={12}
                          className={s <= Math.floor(t.rating) ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                    <p className="text-xs text-foreground font-semibold mt-3">
                      {t.name} <span className="text-muted-foreground font-normal">· {t.location}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative rounded-3xl overflow-hidden bg-primary p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Clock size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary-foreground/80">Quick Turnaround</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
                    {service.seo.ctaHeadline}
                  </h2>
                  <p className="text-sm text-primary-foreground/80 max-w-md">
                    {service.seo.ctaSubtitle}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-center gap-3">
                  <button
                    onClick={() => navigate(bookPath)}
                    className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 w-full md:w-auto justify-center"
                  >
                    Book Now <ArrowRight size={14} />
                  </button>
                  <a
                    href="tel:+919100038182"
                    className="text-primary-foreground/90 text-xs font-medium underline-offset-4 hover:underline"
                  >
                    Or call 9100 038 182
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">
                {service.title} Repair — FAQs
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq) => (
                  <details key={faq.q} className="bg-card rounded-2xl border border-border group">
                    <summary className="px-4 py-3 cursor-pointer font-medium text-sm text-foreground list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-muted-foreground text-lg group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="px-4 pb-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Other services */}
            <div className="pb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg md:text-xl text-foreground">Other Services</h2>
                <button
                  onClick={() => navigate("/services")}
                  className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  View All <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {otherServices.map((s) => (
                  <ServiceCard key={s.id} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-card/95 backdrop-blur-lg border-t border-border px-5 py-3 z-40">
        <button
          onClick={() => navigate(bookPath)}
          className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm"
        >
          Book {service.title} Repair
        </button>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default ServiceHome;
