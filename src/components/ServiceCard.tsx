"use client";

import { useState } from "react";
import { Star, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import type { StaticImageData } from "next/image";
import BookingForm from "@/components/BookingForm";
import { getServiceBySlug } from "@/data/services";

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
  href?: string;
  bookOnCardClick?: boolean;
}

const colorMap = {
  pink: "bg-card-pink",
  green: "bg-card-green",
  yellow: "bg-card-yellow",
  blue: "bg-card-blue",
};

// Normalizes a service's canonical title into the appliance option used by
// the booking form's dropdown (e.g. "AC Service" -> "AC").
const applianceMap: Record<string, string> = {
  "Washing Machine": "Washing Machine",
  Refrigerator: "Refrigerator",
  "AC Service": "AC",
  Microwave: "Microwave",
  Dryer: "Dryer",
  Dishwasher: "Dishwasher",
};

const ServiceCard = ({ title, description, image, color, slug, rating = 4.8, duration = "2-3 hrs", linkPrefix = "", href, bookOnCardClick = false }: ServiceCardProps) => {
  const router = useRouter();
  const [bookingOpen, setBookingOpen] = useState(false);
  const basePath = href || `${linkPrefix}/service/${slug}`;
  const imageSrc = typeof image === "string" ? image : image.src;

  const matchedService = getServiceBySlug(slug);
  // Issue cards reuse ServiceCard with the issue text as the title (e.g.
  // "Not spinning"), while service cards use the service's own title —
  // comparing the two tells us which one this card represents.
  const isIssueCard = Boolean(matchedService && matchedService.title !== title);
  const defaultAppliance = matchedService ? applianceMap[matchedService.title] || matchedService.title : title;
  const defaultIssue = isIssueCard ? title : undefined;

  return (
    <>
      <div
        role="link"
        tabIndex={0}
        onClick={() => (bookOnCardClick ? setBookingOpen(true) : router.push(basePath))}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (bookOnCardClick) setBookingOpen(true);
            else router.push(basePath);
          }
        }}
        className={`${colorMap[color]} rounded-3xl p-5 flex gap-4 items-center cursor-pointer transition-all hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]`}
      >
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-semibold text-base text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-snug mt-2">{description}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
            <span className="flex items-center gap-1">
              <Star size={12} className="text-amber-500 fill-amber-500" /> {rating}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {duration}
            </span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setBookingOpen(true);
            }}
            className="inline-flex bg-primary text-primary-foreground text-xs font-medium px-4 py-2 rounded-full mt-3 hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
        </div>
        <img
          src={imageSrc}
          alt={title}
          className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl flex-shrink-0"
        />
      </div>
      <BookingForm
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        defaultAppliance={defaultAppliance}
        defaultIssue={defaultIssue}
      />
    </>
  );
};

export default ServiceCard;
