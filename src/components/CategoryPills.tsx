import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, Wind, Snowflake, Box, Waves, Droplets } from "lucide-react";

const categories = [
  { label: "All", icon: Sparkles, slug: null },
  { label: "Washing Machine", icon: Waves, slug: "washing-machine-repair" },
  { label: "Refrigerator", icon: Snowflake, slug: "refrigerator-repair" },
  { label: "AC", icon: Wind, slug: "ac-repair-service" },
  { label: "Microwave", icon: Box, slug: "microwave-repair" },
  { label: "Dryer", icon: Zap, slug: "dryer-repair" },
  { label: "Dishwasher", icon: Droplets, slug: "dishwasher-repair" },
];

interface CategoryPillsProps {
  active?: string;
  onSelect?: (category: string) => void;
}

const CategoryPills = ({ active = "All", onSelect }: CategoryPillsProps) => {
  const navigate = useNavigate();

  const handleClick = (cat: typeof categories[number]) => {
    if (onSelect) {
      onSelect(cat.label);
      return;
    }
    if (cat.slug) navigate(`/service/${cat.slug}`);
    else navigate("/services");
  };

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat.label}
          onClick={() => handleClick(cat)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            active === cat.label
              ? "bg-foreground text-card shadow-md"
              : "bg-muted text-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
