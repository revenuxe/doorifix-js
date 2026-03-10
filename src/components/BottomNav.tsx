import { useState } from "react";
import { Home, Calendar, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import BookingForm from "@/components/BookingForm";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden sticky bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border px-4 py-3 flex items-center gap-3 z-50">
      <button
        onClick={() => navigate("/")}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
          location.pathname === "/"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        <Home size={18} />
      </button>

      <button
        onClick={() => setOpen(true)}
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors bg-muted text-muted-foreground hover:text-foreground flex-shrink-0"
      >
        <Calendar size={18} />
      </button>

      <a
        href="tel:+9109100038182"
        className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <Phone size={16} />
        Call Now
      </a>

      <BookingForm open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default BottomNav;
