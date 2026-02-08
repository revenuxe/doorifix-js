import { Sparkles, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  color: "pink" | "green" | "yellow" | "blue";
  id: number;
  rating?: number;
  duration?: string;
}

const colorMap = {
  pink: "bg-card-pink",
  green: "bg-card-green",
  yellow: "bg-card-yellow",
  blue: "bg-card-blue",
};

const ServiceCard = ({ title, description, image, color, id, rating = 4.8, duration = "2-3 hrs" }: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${colorMap[color]} rounded-3xl p-5 flex gap-4 items-center cursor-pointer transition-all hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]`}
      onClick={() => navigate(`/service/${id}`)}
    >
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-primary" />
          <h3 className="font-semibold text-base text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-snug">{description}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star size={12} className="text-amber-500 fill-amber-500" /> {rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {duration}
          </span>
        </div>
        <button
          className="bg-primary text-primary-foreground text-xs font-medium px-4 py-2 rounded-full mt-1 hover:opacity-90 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/service/${id}`);
          }}
        >
          Book Now
        </button>
      </div>
      <img
        src={image}
        alt={title}
        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl flex-shrink-0"
      />
    </div>
  );
};

export default ServiceCard;
