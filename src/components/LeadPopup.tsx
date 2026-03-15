import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const POPUP_KEY = "arrowmind_lead_popup_dismissed";
const POPUP_DELAY = 4000;

const applianceOptions = [
  "Washing Machine",
  "Refrigerator",
  "AC",
  "Microwave",
  "Dryer",
  "Dishwasher",
];

// Map service slugs to appliance names for pre-fill
const slugToAppliance: Record<string, string> = {
  "washing-machine-repair": "Washing Machine",
  "refrigerator-repair": "Refrigerator",
  "ac-repair-service": "AC",
  "microwave-repair": "Microwave",
  "dryer-repair": "Dryer",
  "dishwasher-repair": "Dishwasher",
};

const getApplianceFromPath = (pathname: string): string => {
  for (const [slug, appliance] of Object.entries(slugToAppliance)) {
    if (pathname.includes(slug)) return appliance;
  }
  return "";
};

const LeadPopup = () => {
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const detectedAppliance = getApplianceFromPath(location.pathname);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    appliance: detectedAppliance,
    pincode: "",
  });

  // Update appliance when route changes
  useEffect(() => {
    const appliance = getApplianceFromPath(location.pathname);
    if (appliance) {
      setForm((prev) => ({ ...prev, appliance }));
    }
  }, [location.pathname]);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(POPUP_KEY);
    if (dismissed || location.pathname.startsWith("/admin")) return;

    const timer = setTimeout(() => setVisible(true), POPUP_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(POPUP_KEY, "1");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.appliance || !form.pincode) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const { data, error } = await supabase.rpc("create_booking", {
      _name: form.name.trim(),
      _phone: form.phone.trim(),
      _location: form.pincode.trim(),
      _appliance: form.appliance,
      _warranty: "Not Sure",
    });

    if (error) {
      toast({ title: "Something went wrong", description: error.message, variant: "destructive" });
      setSubmitting(false);
    } else {
      const caseNumber = data as string;

      supabase.functions.invoke("send-booking-email", {
        body: {
          name: form.name.trim(),
          phone: form.phone.trim(),
          location: form.pincode.trim(),
          appliance: form.appliance,
          warranty: "Not Sure",
          caseNumber,
        },
      }).catch((err) => console.error("Email notification failed:", err));

      sessionStorage.setItem(POPUP_KEY, "1");
      setVisible(false);
      navigate(`/thank-you?case=${encodeURIComponent(caseNumber)}&name=${encodeURIComponent(form.name.trim())}`);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative bg-card rounded-t-3xl md:rounded-3xl w-full max-w-[400px] mx-auto p-5 pb-6 shadow-2xl border border-border animate-in slide-in-from-bottom-4 duration-300 z-10">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={16} />
        </button>

        <div className="mb-4">
          <h3 className="text-lg font-bold text-foreground">Book a Service</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Free diagnosis • Doorstep service • Expert technicians</p>
        </div>

        <div className="space-y-2.5">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-xl h-10 text-sm"
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="rounded-xl h-10 text-sm"
          />
          <select
            value={form.appliance}
            onChange={(e) => setForm({ ...form, appliance: e.target.value })}
            className="flex h-10 w-full items-center rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
          >
            <option value="" disabled>Select Appliance</option>
            {applianceOptions.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <Input
            placeholder="Pincode"
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={form.pincode}
            onChange={(e) => setForm({ ...form, pincode: e.target.value.replace(/\D/g, "") })}
            className="rounded-xl h-10 text-sm"
          />
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Submitting...
              </>
            ) : (
              "Book Service Now →"
            )}
          </button>
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-3">
          By submitting, you agree to our terms. No spam, ever.
        </p>
      </div>
    </div>
  );
};

export default LeadPopup;
