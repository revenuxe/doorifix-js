"use client";

import { usePathname } from "next/navigation";
import whatsappIcon from "@/assets/whatsapp.gif";

const FloatingWhatsApp = () => {
  const pathname = usePathname();
  const whatsappSrc = typeof whatsappIcon === "string" ? whatsappIcon : whatsappIcon.src;

  // Hide on service detail pages and admin pages
  const hiddenPaths = ["/service/", "/admin"];
  const shouldHide = hiddenPaths.some((p) => pathname.includes(p));

  if (shouldHide) return null;

  return (
    <a
      href="https://wa.me/919886579923"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 z-[90] w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappSrc} alt="WhatsApp" className="w-full h-full rounded-full" />
    </a>
  );
};

export default FloatingWhatsApp;
