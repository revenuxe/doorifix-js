import { useState } from "react";
import { Home, Calendar } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import BookingForm from "@/components/BookingForm";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden sticky bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border px-6 py-3 flex justify-center gap-4">
      <button
        onClick={() => navigate("/")}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          location.pathname === "/"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        <Home size={20} />
      </button>

      <button
        onClick={() => setOpen(true)}
        className="w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-muted text-muted-foreground hover:text-foreground"
      >
        <Calendar size={20} />
      </button>

      <BookingForm open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default BottomNav;
