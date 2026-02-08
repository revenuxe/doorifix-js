import { ChevronLeft, ShoppingCart, Search, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import DesktopHeader from "@/components/DesktopHeader";
import BottomNav from "@/components/BottomNav";
import homeCleaning from "@/assets/home-cleaning.png";
import bathroomCleaning from "@/assets/bathroom-cleaning.png";
import carpetCleaning from "@/assets/carpet-cleaning.png";
import kitchenCleaning from "@/assets/kitchen-cleaning.png";

const services = [
  { id: 1, title: "Home Cleaning", description: "Get 20% Off Our Best Services Today", image: homeCleaning, color: "pink" as const, rating: 4.9, duration: "2-3 hrs" },
  { id: 2, title: "Bathroom Cleaning", description: "Sparkling bathrooms, enjoy 20% off today!", image: bathroomCleaning, color: "green" as const, rating: 4.8, duration: "1-2 hrs" },
  { id: 3, title: "Sofa Carpet Clean", description: "Fresh sofas, carpets— get 15% off!", image: carpetCleaning, color: "yellow" as const, rating: 4.7, duration: "2-4 hrs" },
  { id: 4, title: "Kitchen Cleaning", description: "Spotless kitchens, enjoy 10% off!", image: kitchenCleaning, color: "blue" as const, rating: 4.9, duration: "1-2 hrs" },
  { id: 5, title: "Deep Home Cleaning", description: "Complete deep clean for your entire home", image: homeCleaning, color: "pink" as const, rating: 4.9, duration: "4-6 hrs" },
  { id: 6, title: "Office Cleaning", description: "Professional office & workspace cleaning", image: kitchenCleaning, color: "green" as const, rating: 4.8, duration: "3-5 hrs" },
];

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
          <h1 className="font-semibold text-lg text-foreground">Cleaning</h1>
          <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <ShoppingCart size={16} />
          </button>
        </div>

        {/* Desktop Title & Search */}
        <div className="hidden md:flex items-center justify-between px-8 lg:px-12 pt-8 pb-2">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Cleaning Services</h1>
            <p className="text-muted-foreground mt-1">Browse our professional cleaning services</p>
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
