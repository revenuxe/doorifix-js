"use client";

import { useState, useEffect, createContext, useContext, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import doorifixLogo from "@/assets/doorifix-logo.webp";

interface LoaderContextType {
  showLoader: () => void;
}

const LoaderContext = createContext<LoaderContextType>({ showLoader: () => {} });

export const useLoader = () => useContext(LoaderContext);

const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  // Never block the first page render. The loader is reserved for client-side
  // navigation and explicit actions after the site has opened.
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const pathname = usePathname();
  const initialPathname = useRef(pathname);
  const hasNavigated = useRef(false);
  const [manualTrigger, setManualTrigger] = useState(0);
  const logoSrc = typeof doorifixLogo === "string" ? doorifixLogo : doorifixLogo.src;

  const showLoader = useCallback(() => {
    setVisible(true);
    setFadeOut(false);
    setManualTrigger((p) => p + 1);
  }, []);

  // Route changes only. The initial pathname is intentionally skipped so the
  // first page render is never covered by the splash screen.
  useEffect(() => {
    if (pathname !== initialPathname.current) hasNavigated.current = true;
    if (!hasNavigated.current) return;
    setVisible(true);
    setFadeOut(false);
    const fadeTimer = setTimeout(() => setFadeOut(true), 600);
    const hideTimer = setTimeout(() => setVisible(false), 900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  // Manual trigger (button clicks)
  useEffect(() => {
    if (manualTrigger === 0) return;
    const fadeTimer = setTimeout(() => setFadeOut(true), 600);
    const hideTimer = setTimeout(() => setVisible(false), 900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [manualTrigger]);

  return (
    <LoaderContext.Provider value={{ showLoader }}>
      {visible && (
        <div
          className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={logoSrc}
            alt="Doorifix"
            className="h-16 md:h-20 object-contain animate-in fade-in zoom-in-95 duration-500"
          />
          <div className="mt-6 flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
};

export default SplashScreen;
