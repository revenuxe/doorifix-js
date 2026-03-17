import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";

const hyderabadAreas = [
  "Gachibowli", "Madhapur", "HITEC City", "Kukatpally", "Kondapur",
  "Banjara Hills", "Jubilee Hills", "Ameerpet", "Begumpet", "Miyapur",
  "Manikonda", "Tolichowki", "Mehdipatnam", "Attapur", "Narsingi",
  "Financial District", "Nallagandla", "Chandanagar", "LB Nagar", "Dilsukhnagar",
  "Uppal", "Habsiguda", "Tarnaka", "Malkajgiri", "Sainikpuri",
];

const secunderabadAreas = [
  "Bowenpally", "Trimulgherry", "Marredpally", "West Marredpally",
  "Secunderabad East", "Tirumalagiri", "Alwal", "Bolaram",
  "Karkhana", "Paradise", "Patny", "Ranigunj",
  "Begumpet", "Picket", "Lal Bazaar", "Clock Tower",
];

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
              <a href="tel:+919100038182" className="flex items-start gap-2 text-sm text-card/70 hover:text-card transition-colors">
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                9100 038 182
              </a>
              <a href="mailto:arrowmind.in@gmail.com" className="flex items-start gap-2 text-sm text-card/70 hover:text-card transition-colors">
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                arrowmind.in@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-card/70">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>HBR Layout, Bangalore,<br />Karnataka 560043</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Our Services</h3>
            <div className="space-y-2">
              {[
                { name: "Washing Machine Repair", slug: "washing-machine-repair" },
                { name: "Refrigerator Repair", slug: "refrigerator-repair" },
                { name: "AC Repair & Service", slug: "ac-repair-service" },
                { name: "Microwave Repair", slug: "microwave-repair" },
                { name: "Dryer Repair", slug: "dryer-repair" },
                { name: "Dishwasher Repair", slug: "dishwasher-repair" },
              ].map((s) => (
                <Link key={s.slug} to={`/service/${s.slug}`} className="block text-sm text-card/70 hover:text-card transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Locations</h3>
            <div className="space-y-2">
              {[
                { name: "Kochi", slug: "kochi" },
                { name: "Trivandrum", slug: "trivandrum" },
                { name: "Kozhikode", slug: "kozhikode" },
                { name: "Thrissur", slug: "thrissur" },
                { name: "Kollam", slug: "kollam" },
                { name: "Hyderabad", slug: "hyderabad" },
                { name: "Secunderabad", slug: "secunderabad" },
              ].map((loc) => (
                <Link key={loc.slug} to={`/${loc.slug}`} className="block text-sm text-card/70 hover:text-card transition-colors">
                  Appliance Repair {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hyderabad Areas */}
        <div className="border-t border-card/15 mt-8 pt-6">
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <MapPin size={14} className="text-card/70" />
            Appliance Repair in Hyderabad – Areas We Serve
          </h4>
          <div className="flex flex-wrap gap-2">
            {hyderabadAreas.map((area) => (
              <Link
                key={area}
                to="/hyderabad"
                className="text-xs text-card/60 hover:text-card bg-card/5 hover:bg-card/10 rounded-full px-3 py-1 transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>

        {/* Secunderabad Areas */}
        <div className="border-t border-card/15 mt-6 pt-6">
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <MapPin size={14} className="text-card/70" />
            Appliance Repair in Secunderabad – Areas We Serve
          </h4>
          <div className="flex flex-wrap gap-2">
            {secunderabadAreas.map((area) => (
              <Link
                key={area}
                to="/secunderabad"
                className="text-xs text-card/60 hover:text-card bg-card/5 hover:bg-card/10 rounded-full px-3 py-1 transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-card/15 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-card/50">
            © {new Date().getFullYear()} Arrowmind Service Center. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-card/50">
            <Link to="/privacy" className="hover:text-card/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-card/80 transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-card/80 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-card/80 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
