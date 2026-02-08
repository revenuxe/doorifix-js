import { ChevronLeft, Star, Clock, CheckCircle, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "@/components/DesktopHeader";
import serviceMan from "@/assets/service-man.png";

const includes = [
  "Full appliance inspection",
  "Component testing & diagnosis",
  "Repair or part replacement",
  "Performance calibration",
  "Safety check & testing",
  "90-day service warranty",
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
              <span className="text-foreground">Appliance Repair</span>
            </div>

            {/* Title & Discount */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">Appliance Repair</h1>
                <p className="text-sm text-muted-foreground mt-0.5">Expert diagnosis & reliable repair.</p>
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


            {/* Quick Info */}
            <div className="flex gap-3">
              <div className="flex-1 bg-card rounded-xl p-3 border border-border text-center">
                <Clock size={16} className="text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">1-2 Hours</p>
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
              <h2 className="font-semibold text-base text-foreground mb-2">Service Description</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our expert technicians diagnose and repair all major appliance
                brands. We use genuine parts and offer a 90-day warranty on
                all repairs. Fast, reliable service at your doorstep with
                transparent pricing and no hidden charges.
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
            <div className="hidden md:flex pt-4">
              <button className="flex-1 bg-primary text-primary-foreground font-semibold py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-card/90 backdrop-blur-lg border-t border-border px-5 py-4 z-50">
        <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
