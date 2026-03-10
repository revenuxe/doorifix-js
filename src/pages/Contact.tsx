import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "@/components/DesktopHeader";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.from("contact_leads").insert({
      name: form.name.trim(),
      email: form.email.trim() || null,
      phone: form.phone.trim(),
      message: form.message.trim(),
    });

    if (error) {
      toast({ title: "Something went wrong", description: error.message, variant: "destructive" });
      setSubmitting(false);
      return;
    }

    // Fire-and-forget email notification
    supabase.functions.invoke("send-contact-email", {
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      },
    }).catch((err) => console.error("Contact email failed:", err));

    setForm({ name: "", email: "", phone: "", message: "" });
    setSubmitting(false);
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title="Contact Us – Arrowmind Service Center"
        description="Get in touch with Arrowmind Service Center for appliance repair queries, bookings, and support. Call, email, or visit us."
        canonical="/contact"
        keywords="contact arrowmind, appliance repair contact, customer support, service center phone number"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <DesktopHeader />

      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-10 md:py-16">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Get in Touch</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have a question or need a repair? We're here to help. Reach out through any channel below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <a href="tel:+9109100038182" className="flex items-start gap-4 bg-card rounded-2xl border border-border p-5 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <p className="text-sm text-primary font-medium mt-1">+91 88846 47100</p>
                  <p className="text-xs text-muted-foreground mt-1">Available Mon–Sun, 8 AM – 9 PM</p>
                </div>
              </a>

              <a href="mailto:arrowmind.in@gmail.com" className="flex items-start gap-4 bg-card rounded-2xl border border-border p-5 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p className="text-sm text-primary font-medium mt-1">arrowmind.in@gmail.com</p>
                  <p className="text-xs text-muted-foreground mt-1">We typically respond within 30 minutes</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-card rounded-2xl border border-border p-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Working Hours</h3>
                  <p className="text-sm text-muted-foreground mt-1">Monday – Sunday</p>
                  <p className="text-sm text-primary font-medium">8:00 AM – 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card rounded-2xl border border-border p-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Service Areas</h3>
                  <p className="text-sm text-muted-foreground mt-1">Bangalore, Hyderabad, Mangalore, Mumbai & Kerala</p>
                  <p className="text-xs text-muted-foreground mt-1">Doorstep service across all locations</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 space-y-4">
              <h2 className="font-semibold text-lg text-foreground">Send us a Message</h2>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Name *</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground border border-transparent focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                <input
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground border border-transparent focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Phone *</label>
                <input
                  type="tel"
                  required
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground border border-transparent focus:border-primary transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Message *</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground border border-transparent focus:border-primary transition-colors resize-none"
                  placeholder="Describe your issue or question..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Contact;
