import { Search, MapPin, ShoppingCart, Clock, Star, ArrowRight, CheckCircle, Users, Award, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CategoryPills from "@/components/CategoryPills";
import BottomNav from "@/components/BottomNav";
import DesktopHeader from "@/components/DesktopHeader";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import cleanerHero from "@/assets/cleaner-hero.png";
import repairHero from "@/assets/repair-hero.png";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";
import washingMachine from "@/assets/washing-machine.png";
import refrigerator from "@/assets/refrigerator.png";
import acUnit from "@/assets/ac-unit.png";
import microwave from "@/assets/microwave.png";
import dryer from "@/assets/dryer.png";
import { services } from "@/data/services";

const featuredServices = services.slice(0, 4);

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
                <img src={arrowmindLogo} alt="Arrowmind" className="h-10 object-contain" />
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
              className="relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[320px] cursor-pointer"
              onClick={() => navigate("/services")}
            >
              <img
                src={repairHero}
                alt="Technician repairing washing machine"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 p-5 md:p-8 space-y-2 max-w-sm h-full flex flex-col justify-end">
                <div className="flex items-center gap-1 text-white/70">
                  <Sparkle />
                  <span className="text-xs">Fast, Reliable Repairs</span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-white leading-snug">
                  Quick Appliance<br />Repair Service
                </h2>
                <p className="hidden md:block text-sm text-white/70 max-w-xs">
                  Professional appliance repair services at your doorstep. Get 40% off on your first booking!
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    className="bg-white text-foreground text-xs md:text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/services");
                    }}
                  >
                    <ShoppingCart size={14} />
                    Book Now
                  </button>
                  <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2">
                    <Clock size={14} className="text-white/70" />
                    <span className="text-xs font-medium text-white">24/7 Support</span>
                  </div>
                  <div className="hidden md:block bg-white/20 backdrop-blur rounded-full px-4 py-2">
                    <span className="text-lg font-bold text-white">40%</span>
                    <span className="text-xs text-white/70 ml-1">Off</span>
                  </div>
                </div>
              </div>
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

            {/* Expert Services SEO Cards */}
            <div>
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Expert Appliance Repair Near You</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
                {[
                  { title: "Washing Machine Repair", subtitle: "Expert Technician", keywords: "drum repair, water leak fix, motor service" },
                  { title: "Refrigerator Repair", subtitle: "Certified Expert", keywords: "cooling issue, gas refill, compressor fix" },
                  { title: "AC Repair & Service", subtitle: "Trained Specialist", keywords: "gas charging, deep clean, installation" },
                  { title: "Microwave Repair", subtitle: "Quick Fix Expert", keywords: "not heating, turntable, display fix" },
                  { title: "Dryer Repair", subtitle: "Skilled Technician", keywords: "not drying, drum noise, heating issue" },
                  { title: "Dishwasher Repair", subtitle: "Certified Technician", keywords: "not draining, spray arm, leak fix" },
                ].map((item) => (
                  <div
                    key={item.title}
                    onClick={() => navigate("/services")}
                    className="bg-card rounded-2xl p-4 border border-border hover:shadow-md transition-all cursor-pointer hover:border-primary/30"
                  >
                    <h3 className="font-semibold text-sm text-foreground leading-tight">{item.title}</h3>
                    <p className="text-xs text-primary font-medium mt-1">{item.subtitle}</p>
                    <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">{item.keywords}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative rounded-3xl overflow-hidden bg-primary p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Clock size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary-foreground/80">Quick Turnaround</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
                    Book in 10 Minutes,<br />Service Done in 1–2 Hours
                  </h2>
                  <p className="text-sm text-primary-foreground/70 max-w-md">
                    Our certified technicians arrive at your doorstep fully equipped. No waiting, no hassle — just fast, reliable repairs.
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-center gap-3">
                  <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur rounded-2xl px-5 py-3">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary-foreground">10</span>
                      <p className="text-[10px] text-primary-foreground/60 uppercase">Min</p>
                    </div>
                    <div className="w-px h-8 bg-primary-foreground/20" />
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary-foreground">1–2</span>
                      <p className="text-[10px] text-primary-foreground/60 uppercase">Hours</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/services")}
                    className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 w-full md:w-auto justify-center"
                  >
                    <ShoppingCart size={16} />
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="pb-8">
              <h2 className="font-semibold text-lg md:text-xl text-foreground mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {[
                  { q: "How long does an appliance repair take?", a: "Most repairs are completed within 1-3 hours depending on the appliance and issue. Our technicians carry common spare parts to ensure quick fixes." },
                  { q: "Do you provide warranty on repairs?", a: "Yes, we offer a 90-day warranty on all repairs and replaced parts. If the same issue reoccurs, we'll fix it free of charge." },
                  { q: "What brands do you service?", a: "We service all major brands including Samsung, LG, Whirlpool, Bosch, IFB, Haier, Godrej, Voltas, Daikin, and many more." },
                  { q: "How much does a typical repair cost?", a: "Repair costs vary by appliance and issue. We provide a free diagnosis and transparent quote before starting any work — no hidden charges." },
                  { q: "Do you offer doorstep service?", a: "Yes, all our repairs are done at your doorstep. Our certified technicians come fully equipped with tools and common spare parts." },
                  { q: "How do I book a service?", a: "You can book through our app by tapping the calendar icon, calling us directly, or filling out the booking form on any service page." },
                ].map((faq) => (
                  <details key={faq.q} className="bg-card rounded-2xl border border-border group">
                    <summary className="px-4 py-3 cursor-pointer font-medium text-sm text-foreground list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-muted-foreground text-lg group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="px-4 pb-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
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
