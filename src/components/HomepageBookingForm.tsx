"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const applianceTypes = [
  "Washing Machine",
  "Refrigerator",
  "AC",
  "Microwave",
  "Dryer",
  "Dishwasher",
];

const warrantyTypes = ["In Warranty", "Out of Warranty", "Extended Warranty", "Not Sure"];

const initialForm = {
  name: "",
  phone: "",
  location: "",
  appliance: "",
  warranty: "",
};

export default function HomepageBookingForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.location || !form.appliance || !form.warranty) {
      toast({ title: "Please fill all booking fields", variant: "destructive" });
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
    setSubmitting(false);

    if (!response.ok || !result.caseNumber) {
      toast({
        title: "Booking failed",
        description: result.error || "Please try again.",
        variant: "destructive",
      });
      return;
    }

    setForm(initialForm);
    router.push(`/thank-you?case=${encodeURIComponent(result.caseNumber)}&name=${encodeURIComponent(form.name.trim())}`);
  };

  return (
    <section className="bg-card border border-border rounded-3xl p-5 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-primary">Book Doorifix Service</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
            Need appliance repair at home?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Share your details and our team will call back with a DF booking ID. Leads go directly to the Doorifix admin dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="rounded-xl"
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="rounded-xl"
          />
          <Input
            placeholder="Location / Address"
            value={form.location}
            onChange={(event) => setForm({ ...form, location: event.target.value })}
            className="rounded-xl md:col-span-2"
          />
          <select
            value={form.appliance}
            onChange={(event) => setForm({ ...form, appliance: event.target.value })}
            className="flex h-10 w-full items-center rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
          >
            <option value="" disabled>Appliance Type</option>
            {applianceTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select
            value={form.warranty}
            onChange={(event) => setForm({ ...form, warranty: event.target.value })}
            className="flex h-10 w-full items-center rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
          >
            <option value="" disabled>Warranty Type</option>
            {warrantyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={submitting}
            className="md:col-span-2 bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Booking...
              </>
            ) : (
              <>
                <Send size={16} />
                Submit Booking
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
