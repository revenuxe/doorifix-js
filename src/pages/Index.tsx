import { Search, MapPin, ShoppingCart, Clock, Star, ArrowRight, CheckCircle, Users, Award, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CategoryPills from "@/components/CategoryPills";
import BottomNav from "@/components/BottomNav";
import DesktopHeader from "@/components/DesktopHeader";
import ServiceCard from "@/components/ServiceCard";
import cleanerHero from "@/assets/cleaner-hero.png";
import repairHero from "@/assets/repair-hero.png";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";
import washingMachine from "@/assets/washing-machine.png";
import refrigerator from "@/assets/refrigerator.png";
import acUnit from "@/assets/ac-unit.png";
import microwave from "@/assets/microwave.png";
import dryer from "@/assets/dryer.png";

const featuredServices = [
  { id: 1, title: "Washing Machine", description: "Expert repair & servicing, 20% off today!", image: washingMachine, color: "blue" as const },
  { id: 2, title: "Refrigerator", description: "Cooling issues? Get 20% off repairs today!", image: refrigerator, color: "green" as const },
  { id: 3, title: "AC Service", description: "Stay cool — AC repair & gas refill, 15% off!", image: acUnit, color: "yellow" as const },
  { id: 4, title: "Microwave", description: "Microwave not heating? 10% off repairs!", image: microwave, color: "pink" as const },
];

const stats = [
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: Award, value: "500+", label: "Expert Technicians" },
  { icon: CheckCircle, value: "15K+", label: "Repairs Done" },
  { icon: Star, value: "4.9", label: "Avg Rating" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <DesktopHeader />

      <div className="flex-1">
        {/* Mobile-only shell wrapper */}
        <div className="max-w-[430px] md:max-w-none mx-auto">
          <div className="px-5 md:px-8 lg:px-12 pt-6 pb-4 space-y-5 md:space-y-8">

            {/* Mobile Header */}
            <div className="flex items-center justify-between md:hidden">
              <div className="flex items-center gap-2">
                <img src={arrowmindLogo} alt="Arrowmind" className="h-8 object-contain" />
              </div>
              <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                <Menu size={18} />
              </button>
            </div>

            {/* Title */}
            <div className="md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground italic">
                  Smart Repairs,<br />
                  Trusted Service
                </h1>
                <p className="hidden md:block text-muted-foreground mt-3 text-lg max-w-lg">
                  Professional appliance repair & servicing at your fingertips. Book trusted technicians with just a tap.
                </p>
              </div>

              {/* Desktop Stats */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-4 border border-border flex items-center gap-3 min-w-[180px]">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <stat.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground leading-none">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search - mobile */}
            <div className="flex items-center gap-3 bg-card rounded-2xl px-4 py-3 border border-border md:hidden">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Categories */}
            <div>
              <div className="hidden md:flex items-center justify-between mb-3">
                <h2 className="font-semibold text-lg text-foreground">Categories</h2>
              </div>
              <CategoryPills />
            </div>

            {/* Badges - mobile */}
            <div className="flex gap-3 md:hidden">
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border">
                <Clock size={14} className="text-muted-foreground" />
                <span className="text-xs font-medium text-foreground">24/7 Support</span>
              </div>
              <div className="bg-accent rounded-full px-4 py-2">
                <span className="text-lg font-bold text-foreground">40%</span>
                <span className="text-xs text-muted-foreground ml-1">Off</span>
              </div>
            </div>

            {/* Hero Card */}
            <div
              className="relative bg-accent rounded-3xl overflow-hidden p-5 md:p-8 min-h-[280px] md:min-h-[320px] cursor-pointer"
              onClick={() => navigate("/services")}
            >
              <div className="relative z-10 space-y-2 max-w-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Sparkle />
                  <span className="text-xs">Fast, Reliable Repairs</span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-foreground leading-snug">
                  Quick Appliance<br />Repair Service
                </h2>
                <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
                  Professional appliance repair services at your doorstep. Get 40% off on your first booking!
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    className="bg-foreground text-card text-xs md:text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/services");
                    }}
                  >
                    <ShoppingCart size={14} />
                    Book Now
                  </button>
                  <div className="hidden md:flex items-center gap-2 bg-card/60 backdrop-blur rounded-full px-4 py-2">
                    <Clock size={14} className="text-muted-foreground" />
                    <span className="text-xs font-medium text-foreground">24/7 Support</span>
                  </div>
                  <div className="hidden md:block bg-card/60 backdrop-blur rounded-full px-4 py-2">
                    <span className="text-lg font-bold text-foreground">40%</span>
                    <span className="text-xs text-muted-foreground ml-1">Off</span>
                  </div>
                </div>
              </div>
              <img
                src={repairHero}
                alt="Technician repairing washing machine"
                className="absolute bottom-0 right-0 md:right-8 w-[200px] md:w-[280px] lg:w-[320px] h-[260px] md:h-[320px] object-cover object-top rounded-2xl"
              />
            </div>

            {/* Featured Services Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg md:text-xl text-foreground">Popular Services</h2>
                <button
                  onClick={() => navigate("/services")}
                  className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  View All <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {featuredServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            </div>

            {/* Desktop: Why Choose Us */}
            <div className="hidden md:block pb-8">
              <h2 className="font-semibold text-xl text-foreground mb-4">Why Choose Arrowmind?</h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Certified Technicians", desc: "All our technicians are trained, certified and background-checked.", icon: "✅" },
                  { title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges. Save up to 40%.", icon: "💰" },
                  { title: "Warranty on Repairs", desc: "Not satisfied? We offer warranty on all repairs. 100% guarantee.", icon: "⭐" },
                ].map((item) => (
                  <div key={item.title} className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

const Sparkle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
  </svg>
);

export default Index;
