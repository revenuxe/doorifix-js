import { Search, MapPin, ShoppingCart, Bell, LogIn, Home, Briefcase, ChevronRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import cleanerHero from "@/assets/cleaner-hero.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/" },
  { label: "Contact", path: "/" },
];

const DesktopHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="hidden md:flex items-center justify-between px-8 lg:px-12 py-4 bg-card border-b border-border sticky top-0 z-50 backdrop-blur-lg bg-card/90">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <Home size={18} className="text-primary-foreground" />
        </div>
        <span className="font-bold text-lg text-foreground">CleanPro</span>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Search */}
      <div className="hidden lg:flex items-center gap-2 bg-muted rounded-full px-4 py-2 w-64">
        <Search size={16} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search services..."
          className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative">
          <Bell size={16} />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full border-2 border-card" />
        </button>
        <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <ShoppingCart size={16} />
        </button>
        <div className="w-9 h-9 rounded-full bg-muted overflow-hidden">
          <img src={cleanerHero} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <button className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity">
          <LogIn size={14} />
          Login
        </button>
      </div>
    </header>
  );
};

export default DesktopHeader;
