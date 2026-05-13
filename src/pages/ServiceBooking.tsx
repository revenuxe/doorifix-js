import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ChevronLeft, Phone, ShieldCheck, Clock, CheckCircle, Loader2 } from "lucide-react";
import DesktopHeader from "@/components/DesktopHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getServiceBySlug } from "@/data/services";

const warrantyTypes = ["In Warranty", "Out of Warranty", "Extended Warranty", "Not Sure"];

const ServiceBooking = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const service = getServiceBySlug(slug || "");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    warranty: "",
  });
  const [submitting, setSubmitting] = useState(false);

  if (!service) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Service not found.</p>
      </div>
    );
  }

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.location || !form.warranty) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { data, error } = await supabase.rpc("create_booking", {
      _name: form.name.trim(),
      _phone: form.phone.trim(),
      _location: form.location.trim(),
      _appliance: service.applianceLabel,
      _warranty: form.warranty,
    });

    if (error) {
      toast({ title: "Something went wrong", description: error.message, variant: "destructive" });
      setSubmitting(false);
      return;
    }

    const caseNumber = data as string;
    supabase.functions
      .invoke("send-booking-email", {
        body: {
          name: form.name.trim(),
          phone: form.phone.trim(),
          location: form.location.trim(),
          appliance: service.applianceLabel,
          warranty: form.warranty,
          caseNumber,
        },
      })
      .catch((err) => console.error("Email notification failed:", err));

    navigate(
      `/thank-you?case=${encodeURIComponent(caseNumber)}&name=${encodeURIComponent(form.name.trim())}`
    );
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title={`Book ${service.title} Repair Online | Same-Day Doorstep – Doorifix`}
        description={`Book ${service.applianceLabel.toLowerCase()} repair online. Same-day doorstep service in Bangalore by certified Doorifix technicians. Free diagnosis, transparent pricing, service warranty.`}
        canonical={`/service/${service.slug}/book`}
        keywords={`book ${service.applianceLabel.toLowerCase()} repair, ${service.applianceLabel.toLowerCase()} repair near me, online ${service.applianceLabel.toLowerCase()} service booking, doorstep ${service.applianceLabel.toLowerCase()} technician`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: `${service.title} Repair`, url: `/service/${service.slug}` },
          { name: "Book", url: `/service/${service.slug}/book` },
        ]}
      />
      <DesktopHeader />

      <div className="flex-1">
        <div className="max-w-[430px] md:max-w-5xl mx-auto px-5 md:px-8 pt-5 pb-12">
          {/* Back button (mobile) */}
          <div className="md:hidden mb-3">
            <button
              onClick={() => navigate(`/service/${service.slug}`)}
              className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to={`/service/${service.slug}`} className="hover:text-foreground">
              {service.title} Repair
            </Link>
            <span>/</span>
            <span className="text-foreground">Book</span>
          </div>

          <div className="md:grid md:grid-cols-[1fr_1.1fr] md:gap-10">
            {/* Hero panel */}
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  {service.title} Booking
                </p>
                <h1 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                  Book {service.title} Repair
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-md">
                  {service.seo.ctaSubtitle}
                </p>
              </div>

              <div className="relative rounded-3xl overflow-hidden bg-secondary aspect-[4/3] md:aspect-[5/4]">
                <img
                  src={service.image}
                  alt={`${service.title} repair booking`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: ShieldCheck, label: "Warranty" },
                  { icon: Clock, label: "Same Day" },
                  { icon: CheckCircle, label: "Free Diagnosis" },
                ].map((b) => (
                  <div key={b.label} className="bg-card rounded-2xl border border-border p-3 text-center">
                    <b.icon size={18} className="text-primary mx-auto mb-1" />
                    <p className="text-[11px] font-medium text-foreground">{b.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="tel:+919100038182"
                className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" /> Prefer to call? 9100 038 182
              </a>
            </div>

            {/* Form */}
            <div className="mt-6 md:mt-0">
              <div className="bg-card rounded-3xl border border-border p-5 md:p-7 space-y-4">
                <div>
                  <h2 className="font-semibold text-lg text-foreground">Tell us about your {service.title.toLowerCase()}</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    A certified technician will call you within minutes to confirm your visit.
                  </p>
                </div>

                <div className="bg-secondary rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-secondary-foreground/70">Service</p>
                    <p className="text-sm font-semibold text-secondary-foreground">{service.applianceLabel} Repair</p>
                  </div>
                  <span className="text-[11px] bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full">
                    Pre-selected
                  </span>
                </div>

                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl"
                />
                <Input
                  placeholder="Location / Address"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="rounded-xl"
                />
                <select
                  value={form.warranty}
                  onChange={(e) => setForm({ ...form, warranty: e.target.value })}
                  className="flex h-10 w-full items-center rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                >
                  <option value="" disabled>Warranty Status</option>
                  {warrantyTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>

                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Booking...
                    </>
                  ) : (
                    `Confirm ${service.title} Booking`
                  )}
                </button>

                <p className="text-[11px] text-muted-foreground text-center">
                  By booking you agree to be contacted by Doorifix about your service request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceBooking;
