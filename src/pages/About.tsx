"use client";

import { imageSrc } from "@/lib/image";
import { CheckCircle, Users, Award, Star, MapPin, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import DesktopHeader from "@/components/DesktopHeader";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import doorifixLogo from "@/assets/doorifix-logo.webp";

const timeline = [
  { year: "2019", city: "Bangalore", description: "Doorifix was founded in Bangalore with a mission to make appliance repair fast, transparent, and affordable. Started with a small team of 5 technicians." },
  { year: "2020", city: "Hyderabad", description: "Expanded to Hyderabad, bringing trusted doorstep appliance repair to the city. Crossed 500+ happy customers within months." },
  { year: "2022", city: "Mangalore", description: "Entered the Mangalore market, serving coastal Karnataka with expert technicians for all major appliance brands." },
  { year: "2023", city: "Mumbai", description: "Launched operations in Mumbai — India's largest metro. Scaled our team to 100+ certified technicians across all service areas." },
  { year: "2025", city: "Kerala", description: "Expanded across Kerala — Kochi, Trivandrum, Kozhikode, Thrissur & Kollam. And we're still growing." },
];

const About = () => {
  const router = useRouter();
  const navigate = (path: string | number) => {
    if (typeof path === "number") router.back();
    else router.push(path);
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title="About Us – Doorifix | Since 2019"
        description="Doorifix has been providing expert appliance repair since 2019. From Bangalore to Kerala, we've served thousands of happy customers across India."
        canonical="/about"
        keywords="about doorifix, appliance repair company, doorifix history, home service company india"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <DesktopHeader />

      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-10 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <img src={imageSrc(doorifixLogo)} alt="Doorifix" className="h-12 mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Story</h1>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Since 2019, we've been on a mission to make appliance repair simple, fast, and trustworthy — one city at a time.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { icon: Users, value: "1000+", label: "Happy Clients" },
              { icon: Award, value: "100+", label: "Expert Technicians" },
              { icon: CheckCircle, value: "2000+", label: "Repairs Done" },
              { icon: Star, value: "4.9", label: "Avg Rating" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-5 border border-border text-center">
                <stat.icon size={24} className="mx-auto text-primary mb-2" />
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our Journey</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={item.year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-5 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 ring-4 ring-background z-10" />

                    {/* Spacer for desktop alternating */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div className="ml-12 md:ml-0 md:w-1/2 bg-card rounded-2xl border border-border p-5 hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{item.year}</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin size={12} />
                          <span className="text-xs font-medium">{item.city}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Growing Banner */}
          <div className="bg-primary rounded-3xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              And We're Still Growing 🚀
            </h2>
            <p className="text-sm text-primary-foreground/70 max-w-md mx-auto mb-6">
              From 5 technicians in Bangalore to 100+ across India — our commitment to quality service remains the same. Your trusted repair partner, wherever you are.
            </p>
            <button
              onClick={() => navigate("/services")}
              className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Book a Service <ArrowRight size={16} />
            </button>
          </div>
        </div>
          </div>

          {/* Built By */}
          <div className="mt-10 text-center">
            <p className="text-xs text-muted-foreground">
              Designed & Developed by{" "}
              <a
                href="https://revenuxe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Revenuxe.com
              </a>
            </p>
          </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default About;
