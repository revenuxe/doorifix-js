import { useState, useEffect, createContext, useContext, useCallback } from "react";
import { useLocation } from "react-router-dom";
import doorifixLogo from "@/assets/doorifix-logo.webp";

interface LoaderContextType {
  showLoader: () => void;
}

const LoaderContext = createContext<LoaderContextType>({ showLoader: () => {} });

export const useLoader = () => useContext(LoaderContext);

const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [manualTrigger, setManualTrigger] = useState(0);

  const showLoader = useCallback(() => {
    setVisible(true);
    setFadeOut(false);
    setManualTrigger((p) => p + 1);
  }, []);

  // Initial load
  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setIsFirstLoad(false);
    }, 1600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Route changes (after initial load)
  useEffect(() => {
    if (isFirstLoad) return;
    setVisible(true);
    setFadeOut(false);
    const fadeTimer = setTimeout(() => setFadeOut(true), 600);
    const hideTimer = setTimeout(() => setVisible(false), 900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

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
            src={doorifixLogo}
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
