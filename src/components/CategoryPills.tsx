import { useState } from "react";
import {
  Droplets, Sparkles, Wrench, Paintbrush, Flower2, Zap,
  Hammer, ShieldCheck, Bug, Wind
} from "lucide-react";

const categories = [
  { label: "All", icon: Sparkles },
  { label: "Cleaning", icon: Droplets },
  { label: "IT Solutions", icon: Zap },
  { label: "Plumber", icon: Wrench },
  { label: "Electrician", icon: Zap },
  { label: "Painting", icon: Paintbrush },
  { label: "Gardening", icon: Flower2 },
  { label: "Carpentry", icon: Hammer },
  { label: "Security", icon: ShieldCheck },
  { label: "Pest Control", icon: Bug },
  { label: "AC Service", icon: Wind },
];

const CategoryPills = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat.label}
          onClick={() => setActive(cat.label)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            active === cat.label
              ? "bg-foreground text-card shadow-md"
              : "bg-muted text-foreground hover:bg-accent"
          }`}
        >
          <cat.icon size={14} />
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
