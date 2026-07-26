import { Clock, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import doorifixLogo from "@/assets/doorifix-logo.webp";
import { cityAreas, slugify } from "@/data/areas";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const citiesWeServe = cities.map(({ name, slug }) => ({ name, slug }));

// Bangalore and Bengaluru share the same area list (kept as separate city
// pages for SEO), so only render the area pills once to avoid a duplicate
// block in the footer. Bangalore is the canonical one for these links.
const seenAreaLists = new Set<string>();
const areaSections = cities
  .map((city) => ({
    ...city,
    areas: cityAreas[city.slug] || [],
  }))
  .filter((city) => {
    if (city.areas.length === 0) return false;
    const key = city.areas.join("|");
    if (seenAreaLists.has(key)) return false;
    seenAreaLists.add(key);
    return true;
  });

interface FooterProps {
  // Set on a service detail page to add "<Service> in <Area>" links (and a
  // "<Service> Near Me" link) to the footer for that specific service.
  serviceContext?: {
    slug: string;
    title: string;
  };
}

const Footer = ({ serviceContext }: FooterProps = {}) => {
  const logoSrc = typeof doorifixLogo === "string" ? doorifixLogo : doorifixLogo.src;

  return (
    <footer className="bg-foreground text-card mt-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logoSrc} alt="Doorifix" className="h-10 object-contain brightness-0 invert" />
            <p className="text-sm text-card/70 leading-relaxed">
              Doorifix - your trusted partner for expert appliance repair and servicing. Fast, reliable, and affordable.
            </p>
            <div className="flex items-center gap-2 text-card/70">
              <Clock size={14} />
              <span className="text-sm">Mon - Sun: 8:00 AM - 9:00 PM</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+919886285028" className="flex items-start gap-2 text-sm text-card/70 hover:text-card transition-colors">
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                9886 285 028
              </a>
              <a href="mailto:doorifix@gmail.com" className="flex items-start gap-2 text-sm text-card/70 hover:text-card transition-colors">
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                doorifix@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-card/70">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>HBR Layout, Bangalore,<br />Karnataka 560043</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base">Our Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <Link key={service.slug} href={`/service/${service.slug}`} className="block text-sm text-card/70 hover:text-card transition-colors">
                  {service.title} Repair
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base">Cities We Serve</h3>
            <div className="space-y-2">
              {citiesWeServe.map((loc) => (
                <Link key={loc.slug} href={`/${loc.slug}`} className="block text-sm text-card/70 hover:text-card transition-colors">
                  Appliance Repair {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {!serviceContext && areaSections.map((city, index) => (
          <div key={city.slug} className={`border-t border-card/15 ${index === 0 ? "mt-8" : "mt-6"} pt-6`}>
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <MapPin size={14} className="text-card/70" />
              Appliance Repair in {city.name} - Areas We Serve
            </h4>
            <div className="flex flex-wrap gap-2">
              {city.areas.map((area) => (
                <Link
                  key={area}
                  href={`/${city.slug}/${slugify(area)}`}
                  className="text-xs text-card/60 hover:text-card bg-card/5 hover:bg-card/10 rounded-full px-3 py-1 transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {serviceContext && (
          <div className="border-t border-card/15 mt-6 pt-6 space-y-6">
            <Link
              href={`/service/${serviceContext.slug}`}
              className="inline-block text-sm font-semibold text-card hover:underline"
            >
              {serviceContext.title} Near Me
            </Link>

            {areaSections.map((city) => (
              <div key={`${city.slug}-${serviceContext.slug}`}>
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <MapPin size={14} className="text-card/70" />
                  {serviceContext.title} in {city.name} - Book by Area
                </h4>
                <div className="flex flex-wrap gap-2">
                  {city.areas.map((area) => (
                    <Link
                      key={area}
                      href={`/${city.slug}/${slugify(area)}/service/${serviceContext.slug}`}
                      className="text-xs text-card/60 hover:text-card bg-card/5 hover:bg-card/10 rounded-full px-3 py-1 transition-colors"
                    >
                      {serviceContext.title} in {area}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-card/15 mt-6 pt-6">
          <p className="text-xs text-card/50 leading-relaxed">
            <span className="font-semibold text-card/70">Disclaimer:</span> Doorifix is an independent, third-party appliance repair service provider. We are not authorized, sponsored, or affiliated with any appliance manufacturer or brand, and we do not represent ourselves as an "authorized" or "brand-associated" service/customer care center. Brand names mentioned on this website are used solely to describe the appliances we service. We provide repairs only for appliances that are out of their standard manufacturer warranty period (i.e., after the first year from purchase); we do not handle in-warranty claims.
          </p>
        </div>

        <div className="border-t border-card/15 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-card/50">
            &copy; {new Date().getFullYear()} Doorifix. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-card/50">
            <a
              href="https://linkedin.com/company/doorifix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Doorifix on LinkedIn"
              className="hover:text-card/80 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/thedoorifix/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Doorifix on Instagram"
              className="hover:text-card/80 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <Link href="/privacy" className="hover:text-card/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-card/80 transition-colors">Terms of Service</Link>
            <Link href="/blog" className="hover:text-card/80 transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-card/80 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-card/80 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
