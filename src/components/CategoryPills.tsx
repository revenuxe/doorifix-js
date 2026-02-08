import { useState } from "react";
import { Sparkles, Zap, Wind, Snowflake, Box, Waves } from "lucide-react";

const categories = [
  { label: "All", icon: Sparkles },
  { label: "Washing Machine", icon: Waves },
  { label: "Refrigerator", icon: Snowflake },
  { label: "AC", icon: Wind },
  { label: "Microwave", icon: Box },
  { label: "Dryer", icon: Zap },
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
