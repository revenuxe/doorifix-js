"use client";

import { useState } from "react";
import { Menu, X, Home, Wrench, Phone, Info, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import doorifixLogo from "@/assets/doorifix-logo.webp";

const mainLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Services", path: "/services", icon: Wrench },
  { label: "About Us", path: "/about", icon: Info },
  { label: "Contact", path: "/contact", icon: Phone },
];

const serviceLinks = [
  { label: "Washing Machine Repair", path: "/service/washing-machine-repair" },
  { label: "Refrigerator Repair", path: "/service/refrigerator-repair" },
  { label: "AC Repair & Service", path: "/service/ac-repair-service" },
  { label: "Microwave Repair", path: "/service/microwave-repair" },
  { label: "Dryer Repair", path: "/service/dryer-repair" },
  { label: "Dishwasher Repair", path: "/service/dishwasher-repair" },
];

const cityLinks = [
  { label: "Kochi", path: "/kochi" },
  { label: "Trivandrum", path: "/trivandrum" },
  { label: "Kozhikode", path: "/kozhikode" },
  { label: "Thrissur", path: "/thrissur" },
  { label: "Kollam", path: "/kollam" },
  { label: "Hyderabad", path: "/hyderabad" },
  { label: "Secunderabad", path: "/secunderabad" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const pathname = usePathname();
  const logoSrc = typeof doorifixLogo === "string" ? doorifixLogo : doorifixLogo.src;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-[100]" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Slide-in panel */}
          <div
            className="absolute right-0 top-0 h-full w-[280px] bg-card shadow-2xl flex flex-col animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <img src={logoSrc} alt="Doorifix" className="h-8 object-contain" />
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <link.icon size={18} />
                  {link.label}
                </Link>
              ))}

              {/* Services Accordion */}
              <button
                onClick={() => setShowServices(!showServices)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Wrench size={18} />
                  Our Services
                </span>
                <ChevronDown size={16} className={`text-muted-foreground transition-transform ${showServices ? "rotate-180" : ""}`} />
              </button>
              {showServices && (
                <div className="pl-6 space-y-0.5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Cities Accordion */}
              <button
                onClick={() => setShowCities(!showCities)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <span className="flex items-center gap-3">
                  <MapPin size={18} />
                  Locations
                </span>
                <ChevronDown size={16} className={`text-muted-foreground transition-transform ${showCities ? "rotate-180" : ""}`} />
              </button>
              {showCities && (
                <div className="pl-6 space-y-0.5">
                  {cityLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      Repair in {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </nav>

            {/* Footer CTA */}
            <div className="p-4 border-t border-border">
              <a
                href="tel:+919886579923"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
