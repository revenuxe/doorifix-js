"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const applianceTypes = [
  "Washing Machine",
  "Refrigerator",
  "AC",
  "Microwave",
  "Dryer",
  "Dishwasher",
];

const warrantyTypes = [
  "In Warranty",
  "Out of Warranty",
  "Extended Warranty",
  "Not Sure",
];

interface BookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultAppliance?: string;
}

const BookingForm = ({ open, onOpenChange, defaultAppliance = "" }: BookingFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    appliance: defaultAppliance,
    warranty: "",
  });

  // Sync default appliance when it changes
  const [lastDefault, setLastDefault] = useState(defaultAppliance);
  if (defaultAppliance !== lastDefault) {
    setLastDefault(defaultAppliance);
    setForm((prev) => ({ ...prev, appliance: defaultAppliance }));
  }

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.location || !form.appliance || !form.warranty) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.trim(),
        phone: form.phone.trim(),
        location: form.location.trim(),
        appliance: form.appliance,
        warranty: form.warranty,
      }),
    });
    const result = (await response.json().catch(() => ({}))) as { caseNumber?: string; error?: string };

    if (!response.ok || !result.caseNumber) {
      toast({ title: "Something went wrong", description: result.error || "Please try again.", variant: "destructive" });
      setSubmitting(false);
    } else {
      setForm({ name: "", phone: "", location: "", appliance: defaultAppliance, warranty: "" });
      onOpenChange(false);
      router.push(`/thank-you?case=${encodeURIComponent(result.caseNumber)}&name=${encodeURIComponent(form.name.trim())}`);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-3xl max-w-[430px] mx-auto px-5 pb-8">
        <SheetHeader className="pb-3">
          <SheetTitle className="text-lg font-bold text-foreground">Book a Service</SheetTitle>
        </SheetHeader>
        <div className="space-y-3">
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
            value={form.appliance}
            onChange={(e) => setForm({ ...form, appliance: e.target.value })}
            className="flex h-10 w-full items-center rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
          >
            <option value="" disabled>Appliance Type</option>
            {applianceTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select
            value={form.warranty}
            onChange={(e) => setForm({ ...form, warranty: e.target.value })}
            className="flex h-10 w-full items-center rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
          >
            <option value="" disabled>Warranty Type</option>
            {warrantyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Booking...
              </>
            ) : (
              "Submit Booking"
            )}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BookingForm;
