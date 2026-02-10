import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";


const Footer = () => {
  return (
    <footer className="bg-foreground text-card mt-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={arrowmindLogo} alt="Arrowmind Service Center" className="h-10 object-contain brightness-0 invert" />
            <p className="text-sm text-card/70 leading-relaxed">
              Arrowmind Service Center — your trusted partner for expert appliance repair & servicing. Fast, reliable, and affordable.
            </p>
            <div className="flex items-center gap-2 text-card/70">
              <Clock size={14} />
              <span className="text-sm">Mon – Sun: 8:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+919999999999" className="flex items-start gap-2 text-sm text-card/70 hover:text-card transition-colors">
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                +91 99999 99999
              </a>
              <a href="mailto:support@arrowmind.com" className="flex items-start gap-2 text-sm text-card/70 hover:text-card transition-colors">
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                support@arrowmind.com
              </a>
              <div className="flex items-start gap-2 text-sm text-card/70">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>123 Service Street, Anna Nagar,<br />Chennai, Tamil Nadu 600040</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Our Services</h3>
            <div className="space-y-2">
              {["Washing Machine Repair", "Refrigerator Repair", "AC Repair & Service", "Microwave Repair", "Dryer Repair", "Dishwasher Repair"].map((s) => (
                <Link key={s} to="/services" className="block text-sm text-card/70 hover:text-card transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Kerala Locations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Kerala</h3>
            <div className="space-y-2">
              {[
                { name: "Kochi", slug: "kochi" },
                { name: "Trivandrum", slug: "trivandrum" },
                { name: "Kozhikode", slug: "kozhikode" },
                { name: "Thrissur", slug: "thrissur" },
                { name: "Kollam", slug: "kollam" },
              ].map((loc) => (
                <Link key={loc.slug} to={`/${loc.slug}`} className="block text-sm text-card/70 hover:text-card transition-colors">
                  Appliance Repair {loc.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-card/15 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-card/50">
            © {new Date().getFullYear()} Arrowmind Service Center. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-card/50">
            <span className="hover:text-card/80 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-card/80 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
