import { ChevronLeft, ShoppingCart, Phone, MessageCircle, Star, Clock, CheckCircle, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "@/components/DesktopHeader";
import serviceMan from "@/assets/service-man.png";

const tiers = [
  { name: "Classic", price: "$2499", old: "$2799" },
  { name: "Premium", price: "$2899", old: "$3099" },
  { name: "Platinum", price: "$3099", old: "$3299" },
];

const includes = [
  "Full home dusting & wiping",
  "Floor mopping & vacuuming",
  "Bathroom deep clean",
  "Kitchen degreasing",
  "Window & mirror cleaning",
  "Trash removal & organizing",
];

const ServiceDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <DesktopHeader />

      <div className="max-w-[430px] md:max-w-5xl mx-auto flex-1 w-full">
        {/* Mobile Hero */}
        <div className="md:hidden relative bg-hero-pink rounded-b-[2rem] overflow-hidden px-5 pt-6 pb-8 min-h-[280px]">
          <div className="flex items-center justify-between relative z-10">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-full bg-card/60 backdrop-blur flex items-center justify-center text-foreground"
            >
              <ChevronLeft size={18} />
            </button>
            <button className="w-9 h-9 rounded-full bg-card/60 backdrop-blur flex items-center justify-center text-foreground">
              <ShoppingCart size={16} />
            </button>
          </div>
          <img
            src={serviceMan}
            alt="Service Man"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[240px] object-contain"
          />
        </div>

        {/* Desktop Layout */}
        <div className="md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:px-0 md:pt-8">
          {/* Desktop Hero Image */}
          <div className="hidden md:block">
            <div className="bg-hero-pink rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[500px]">
              <img
                src={serviceMan}
                alt="Service Man"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[380px] lg:h-[460px] object-contain"
              />
            </div>

            {/* What's Included - Desktop */}
            <div className="mt-6 bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-semibold text-base text-foreground mb-4">What's Included</h2>
              <div className="grid grid-cols-2 gap-3">
                {includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 md:px-0 pt-5 pb-28 md:pb-8 space-y-5">
            {/* Breadcrumb - desktop */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <button onClick={() => navigate("/")} className="hover:text-foreground">Home</button>
              <span>/</span>
              <button onClick={() => navigate("/services")} className="hover:text-foreground">Services</button>
              <span>/</span>
              <span className="text-foreground">Home Deep Cleaning</span>
            </div>

            {/* Title & Discount */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">Home Deep Cleaning</h1>
                <p className="text-sm text-muted-foreground mt-0.5">thorough care, spotless home.</p>
                {/* Rating */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className={s <= 4 ? "text-amber-500 fill-amber-500" : "text-amber-500"} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">4.8 (256 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="bg-accent rounded-xl px-3 py-2 text-center">
                <p className="text-[10px] text-muted-foreground">Up to</p>
                <p className="text-lg font-bold text-foreground leading-none">30%</p>
                <p className="text-[10px] text-muted-foreground">Off</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">$2499</span>
              <span className="text-sm text-muted-foreground line-through">$2799</span>
            </div>

            {/* Tiers */}
            <div className="flex gap-3">
              {tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`flex-1 rounded-2xl p-3 text-center border cursor-pointer transition-all hover:shadow-md ${
                    i === 0
                      ? "bg-foreground text-card border-foreground"
                      : "bg-card text-foreground border-border"
                  }`}
                >
                  <p className={`text-xs font-medium ${i === 0 ? "text-card/70" : "text-muted-foreground"}`}>
                    {tier.name}
                  </p>
                  <p className="font-bold text-sm mt-0.5">{tier.price}</p>
                  <p className={`text-[10px] line-through ${i === 0 ? "text-card/50" : "text-muted-foreground"}`}>
                    {tier.old}
                  </p>
                </div>
              ))}
            </div>

            {/* Service Man */}
            <div className="flex items-center justify-between bg-card rounded-2xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <img src={serviceMan} alt="Marcus Mane" className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Marcus Mane</p>
                  <p className="text-xs text-muted-foreground">Service Man • 5 yrs exp</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <Phone size={16} />
                </button>
                <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <MessageCircle size={16} />
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex gap-3">
              <div className="flex-1 bg-card rounded-xl p-3 border border-border text-center">
                <Clock size={16} className="text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">2-3 Hours</p>
                <p className="text-[10px] text-muted-foreground">Duration</p>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-border text-center">
                <MapPin size={16} className="text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">At Home</p>
                <p className="text-[10px] text-muted-foreground">Location</p>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-border text-center">
                <Star size={16} className="text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">4.8</p>
                <p className="text-[10px] text-muted-foreground">Rating</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-semibold text-base text-foreground mb-2">Home Description</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our Home Deep Cleaning service delivers a thorough,
                spotless clean for every corner of your house. Enjoy a
                fresh, hygienic, and comfortable living space with
                professional care you can trust. Our trained experts use eco-friendly products and modern equipment.
              </p>
            </div>

            {/* Mobile What's Included */}
            <div className="md:hidden">
              <h2 className="font-semibold text-base text-foreground mb-3">What's Included</h2>
              <div className="space-y-2">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4 pt-4">
              <div className="bg-card border border-border rounded-full px-6 py-3">
                <span className="font-bold text-foreground text-lg">$2499</span>
              </div>
              <button className="flex-1 bg-primary text-primary-foreground font-semibold py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-card/90 backdrop-blur-lg border-t border-border px-5 py-4 flex items-center gap-4 z-50">
        <div className="bg-card border border-border rounded-full px-5 py-3">
          <span className="font-bold text-foreground">$2499</span>
        </div>
        <button className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
