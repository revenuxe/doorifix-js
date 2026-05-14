import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import doorifixLogo from "@/assets/doorifix-logo.webp";
import { cityAreas, slugify } from "@/data/areas";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const citiesWeServe = cities.map(({ name, slug }) => ({ name, slug }));
const areaSections = cities
  .map((city) => ({
    ...city,
    areas: cityAreas[city.slug] || [],
  }))
  .filter((city) => city.areas.length > 0);

const Footer = () => {
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
              <a href="tel:+919886579923" className="flex items-start gap-2 text-sm text-card/70 hover:text-card transition-colors">
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                9886 579 923
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

        {areaSections.map((city, index) => (
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

        <div className="border-t border-card/15 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-card/50">
            &copy; {new Date().getFullYear()} Doorifix. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-card/50">
            <Link href="/privacy" className="hover:text-card/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-card/80 transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:text-card/80 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-card/80 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
