import washingMachine from "@/assets/washing-machine.png";
import refrigerator from "@/assets/refrigerator.png";
import acUnit from "@/assets/ac-unit.png";
import microwave from "@/assets/microwave.png";
import dryer from "@/assets/dryer.png";
import dishwasher from "@/assets/dishwasher.png";

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string;
  color: "pink" | "green" | "yellow" | "blue";
  rating: number;
  duration: string;
  detailDescription: string;
  includes: string[];
}

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Washing Machine",
    description: "Expert washing machine repair & servicing",
    image: washingMachine,
    color: "blue",
    rating: 4.9,
    duration: "1-2 hrs",
    detailDescription: "Our certified technicians handle all washing machine issues — drum problems, water leakage, spin failures, and more. We use genuine spare parts and offer a 90-day warranty on all repairs.",
    includes: ["Full machine inspection", "Drum & motor check", "Water inlet/outlet repair", "Belt & bearing replacement", "Performance testing", "90-day service warranty"],
  },
  {
    id: 2,
    title: "Refrigerator",
    description: "Cooling issues? Expert refrigerator repair",
    image: refrigerator,
    color: "green",
    rating: 4.8,
    duration: "1-3 hrs",
    detailDescription: "From cooling issues to compressor problems, our experts repair all refrigerator brands. We diagnose the root cause and fix it right, with genuine parts and transparent pricing.",
    includes: ["Cooling system diagnosis", "Gas refilling & leak fix", "Compressor repair", "Thermostat calibration", "Door seal replacement", "90-day service warranty"],
  },
  {
    id: 3,
    title: "AC Service",
    description: "AC repair, gas refill & deep cleaning",
    image: acUnit,
    color: "yellow",
    rating: 4.7,
    duration: "1-2 hrs",
    detailDescription: "Stay cool with our professional AC servicing. We handle gas refills, deep cleaning, compressor repairs, and installation for all brands and models.",
    includes: ["Deep coil cleaning", "Gas check & refill", "Compressor diagnosis", "Filter cleaning/replacement", "Electrical check", "90-day service warranty"],
  },
  {
    id: 4,
    title: "Microwave",
    description: "Microwave not heating? Quick expert repair",
    image: microwave,
    color: "pink",
    rating: 4.9,
    duration: "1 hr",
    detailDescription: "Expert microwave repair for all brands. We fix heating issues, turntable problems, display malfunctions, and more with quick turnaround times.",
    includes: ["Magnetron testing", "Turntable motor repair", "Control panel fix", "Door switch replacement", "Safety inspection", "90-day service warranty"],
  },
  {
    id: 5,
    title: "Dryer",
    description: "Dryer not drying? Complete repair service",
    image: dryer,
    color: "blue",
    rating: 4.9,
    duration: "1-2 hrs",
    detailDescription: "Professional dryer repair service covering heating element failures, drum issues, ventilation problems, and more. Fast and reliable service at your doorstep.",
    includes: ["Heating element check", "Drum & belt inspection", "Vent cleaning", "Thermostat repair", "Motor diagnosis", "90-day service warranty"],
  },
  {
    id: 6,
    title: "Dishwasher",
    description: "Dishwasher not draining? Expert repair service!",
    image: dishwasher,
    color: "green",
    rating: 4.8,
    duration: "1-2 hrs",
    detailDescription: "Professional dishwasher repair for all brands. We fix drainage issues, spray arm problems, leaks, and electrical faults with genuine parts and a 90-day warranty.",
    includes: ["Drainage system check", "Spray arm repair", "Door latch fix", "Pump & motor diagnosis", "Leak detection & repair", "90-day service warranty"],
  },
];
