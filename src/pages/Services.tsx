import { ChevronLeft, Search, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import DesktopHeader from "@/components/DesktopHeader";
import BottomNav from "@/components/BottomNav";
import { services } from "@/data/services";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <DesktopHeader />

      <div className="max-w-[430px] md:max-w-none mx-auto flex-1 w-full">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-5 pt-6 pb-4 md:hidden">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground"
          >
            <ChevronLeft size={18} />
          </button>
          <h1 className="font-semibold text-lg text-foreground">Services</h1>
          <div className="w-9" />
        </div>

        {/* Desktop Title & Search */}
        <div className="hidden md:flex items-center justify-between px-8 lg:px-12 pt-8 pb-2">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Appliance Services</h1>
            <p className="text-muted-foreground mt-1">Browse our professional repair & servicing</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2.5 border border-border w-72">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search services..."
                className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* Service List */}
        <div className="flex-1 px-5 md:px-8 lg:px-12 pb-6 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Services;
