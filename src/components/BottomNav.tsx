import { useState } from "react";
import { Home, Calendar, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const applianceTypes = [
  "Washing Machine",
  "Refrigerator",
  "AC",
  "Microwave",
  "Dryer",
];

const warrantyTypes = [
  "In Warranty",
  "Out of Warranty",
  "Extended Warranty",
  "Not Sure",
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    appliance: "",
    warranty: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.location || !form.appliance || !form.warranty) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Booking submitted!", description: "We'll contact you shortly." });
    setForm({ name: "", phone: "", location: "", appliance: "", warranty: "" });
    setOpen(false);
  };

  return (
    <div className="md:hidden sticky bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border px-6 py-3 flex justify-center gap-4">
      <button
        onClick={() => navigate("/")}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          location.pathname === "/"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        <Home size={20} />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-muted text-muted-foreground hover:text-foreground"
          >
            <Calendar size={20} />
          </button>
        </SheetTrigger>
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
            <Select value={form.appliance} onValueChange={(v) => setForm({ ...form, appliance: v })}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Appliance Type" />
              </SelectTrigger>
              <SelectContent>
                {applianceTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={form.warranty} onValueChange={(v) => setForm({ ...form, warranty: v })}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Warranty Type" />
              </SelectTrigger>
              <SelectContent>
                {warrantyTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity mt-2"
            >
              Submit Booking
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BottomNav;
