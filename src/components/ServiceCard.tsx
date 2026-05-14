"use client";

import { Star, Clock } from "lucide-react";
import Link from "next/link";
import type { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  color: "pink" | "green" | "yellow" | "blue";
  id: number;
  slug: string;
  rating?: number;
  duration?: string;
  linkPrefix?: string;
}

const colorMap = {
  pink: "bg-card-pink",
  green: "bg-card-green",
  yellow: "bg-card-yellow",
  blue: "bg-card-blue",
};

const ServiceCard = ({ title, description, image, color, slug, rating = 4.8, duration = "2-3 hrs", linkPrefix = "" }: ServiceCardProps) => {
  const basePath = `${linkPrefix}/service/${slug}`;
  const imageSrc = typeof image === "string" ? image : image.src;

  return (
    <Link
      href={basePath}
      className={`${colorMap[color]} rounded-3xl p-5 flex gap-4 items-center cursor-pointer transition-all hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]`}
    >
      <div className="flex-1 space-y-2">
        <h3 className="font-semibold text-base text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-snug">{description}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star size={12} className="text-amber-500 fill-amber-500" /> {rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {duration}
          </span>
        </div>
        <span
          className="bg-primary text-primary-foreground text-xs font-medium px-4 py-2 rounded-full mt-1 hover:opacity-90 transition-opacity"
        >
          Book Now
        </span>
      </div>
      <img
        src={imageSrc}
        alt={title}
        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl flex-shrink-0"
      />
    </Link>
  );
};

export default ServiceCard;
