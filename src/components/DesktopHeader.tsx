import { Search } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";

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
        <img src={arrowmindLogo} alt="Arrowmind Service Center" className="h-14 object-contain" />
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
      <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2 w-64">
        <Search size={16} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search services..."
          className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </header>
  );
};

export default DesktopHeader;
