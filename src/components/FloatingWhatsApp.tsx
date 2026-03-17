import { useLocation } from "react-router-dom";
import whatsappIcon from "@/assets/whatsapp.gif";

const FloatingWhatsApp = () => {
  const location = useLocation();

  // Hide on service detail pages and admin pages
  const hiddenPaths = ["/service/", "/admin"];
  const shouldHide = hiddenPaths.some((p) => location.pathname.includes(p));

  if (shouldHide) return null;

  return (
    <a
      href="https://wa.me/919100038182"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 z-[90] w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full rounded-full" />
    </a>
  );
};

export default FloatingWhatsApp;
