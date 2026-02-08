import { Home, Calendar, Users, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { icon: Home, path: "/", label: "Home" },
  { icon: Calendar, path: "/services", label: "Services" },
  { icon: Users, path: "/services", label: "Community" },
  { icon: User, path: "/", label: "Profile" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="md:hidden sticky bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border px-6 py-3 flex justify-center gap-4">
      {tabs.map((tab, i) => {
        const isActive =
          (i === 0 && location.pathname === "/") ||
          (i === 1 && location.pathname === "/services");
        return (
          <button
            key={i}
            onClick={() => navigate(tab.path)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon size={20} />
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
