"use client";

import { Home, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import whatsappIcon from "@/assets/whatsapp.gif";
import { imageSrc } from "@/lib/image";

const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="md:hidden sticky bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border px-4 py-3 flex items-center gap-3 z-50">
      <button
        onClick={() => router.push("/")}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
          pathname === "/"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        <Home size={18} />
      </button>

      <a
        href="https://wa.me/919886579923"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Doorifix on WhatsApp"
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors bg-muted hover:bg-muted/80 flex-shrink-0"
      >
        <img src={imageSrc(whatsappIcon)} alt="" className="w-5 h-5 rounded-full" />
      </a>

      <a
        href="tel:+919886579923"
        className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <Phone size={16} />
        Call Now
      </a>
    </div>
  );
};

export default BottomNav;
