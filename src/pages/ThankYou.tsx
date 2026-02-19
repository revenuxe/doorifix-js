import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const caseNumber = searchParams.get("case") || "AM0000";
  const name = searchParams.get("name") || "Customer";

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17962306213",
        event_category: "booking",
        event_label: caseNumber,
      });
    }
  }, [caseNumber]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <SEO title="Booking Confirmed" description={`Your service request ${caseNumber} has been submitted. Our team will contact you shortly.`} />
      <div className="w-full max-w-sm text-center space-y-6">
        <img src={arrowmindLogo} alt="Arrowmind" className="h-10 mx-auto" />

        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
          <CheckCircle size={40} className="text-green-500" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Thank You, {name}!</h1>
          <p className="text-sm text-muted-foreground">
            Your service request has been submitted successfully. Our team will contact you shortly.
          </p>
        </div>

        {/* Case Number Card */}
        <div className="bg-card rounded-2xl border border-border p-5 space-y-1">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">Your Service Request Number</p>
          <p className="text-3xl font-bold text-primary tracking-wider">{caseNumber}</p>
          <p className="text-xs text-muted-foreground">Save this for future reference</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-2">
          <Button
            onClick={() => window.open("tel:+918884647100")}
            className="w-full h-12 rounded-xl gap-2"
          >
            <Phone size={16} /> Call Us Now
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="w-full h-12 rounded-xl gap-2"
          >
            <ArrowLeft size={16} /> Back to Home
          </Button>
        </div>

        <p className="text-[11px] text-muted-foreground">
          Expected response time: 15–30 minutes
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
