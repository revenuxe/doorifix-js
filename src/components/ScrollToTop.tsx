import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Send SPA page view to Google Ads
    if ((window as any).gtag) {
      (window as any).gtag("config", "AW-17962306213", { page_path: pathname });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
