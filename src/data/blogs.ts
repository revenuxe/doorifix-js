import washingMachine from "@/assets/washing-machine.png";
import type { StaticImageData } from "next/image";

export interface BlogSection {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  image: string | StaticImageData;
  keywords: string;
  summary: string[];
  highlights: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  sources: { label: string; url: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "washing-machine-repair-services-bangalore",
    title: "Washing Machine Repair & Services in Bangalore: Complete Guide",
    excerpt:
      "A practical guide to washing machine repair in Bangalore, including common problems, machine types, brands, service steps, costs, maintenance tips, and when to call a technician.",
    category: "Washing Machine Repair",
    readTime: "9 min read",
    publishedAt: "2026-05-21",
    updatedAt: "2026-05-21",
    author: "Doorifix Service Team",
    image: washingMachine,
    keywords:
      "washing machine repair Bangalore, washing machine service Bangalore, washing machine repair near me, front load washing machine repair, top load washing machine repair, LG washing machine repair Bangalore, Samsung washing machine repair Bangalore, IFB washing machine service Bangalore, Bosch washing machine repair Bangalore",
    summary: [
      "Most washing machine issues in Bangalore homes are linked to drainage, water inlet, spin imbalance, motor load, door lock, sensor, or hard-water scale buildup.",
      "Front load, top load, semi-automatic, fully automatic, inverter, and washer dryer combo machines need different diagnosis methods.",
      "A good repair visit should include inspection, error-code reading, part-level diagnosis, transparent quote, test cycle, and maintenance guidance.",
    ],
    highlights: [
      "Same-day doorstep support in Bangalore",
      "Front load, top load and semi-automatic repair",
      "Samsung, LG, IFB, Bosch, Whirlpool and more",
      "Drainage, leakage, drum, motor and PCB diagnosis",
    ],
    sections: [
      {
        id: "intro",
        title: "Why Washing Machine Repair Matters in Bangalore",
        body: [
          "A washing machine breakdown rarely happens at a convenient time. One day the drum will not spin, the next day the machine stops mid-cycle, leaks near the base, shows an error code, or leaves clothes dripping wet.",
          "In Bangalore, the most common repair triggers are hard-water scale, clogged filters, unstable installation, voltage fluctuations, overloaded drums, inlet pressure issues, worn belts, damaged bearings, faulty drain pumps, and control board faults.",
          "This guide explains how washing machine repair and service works, what different machine types need, which brands are commonly serviced, and how to decide when a technician should inspect the appliance."
        ],
      },
      {
        id: "machine-types",
        title: "Types of Washing Machines We Service",
        body: [
          "Every washing machine type has a different mechanical layout, washing action, water path, and set of failure points. Correct diagnosis starts by identifying the machine design before opening panels or replacing parts."
        ],
        bullets: [
          "Front load washing machines: Best known for efficient washing and lower water use, but they need careful drum, gasket, bearing, heater, door lock, and drain pump diagnosis.",
          "Top load washing machines: Common in Indian homes and easier to load. Typical issues include agitator or pulsator faults, water inlet problems, suspension imbalance, spin errors, and lid switch failures.",
          "Semi-automatic washing machines: Durable and economical, but they often need attention for spin motor issues, wash motor failure, drain selector problems, belt wear, and timer faults.",
          "Fully automatic washing machines: Convenient but sensor-heavy. These machines need checks for PCB, pressure sensor, inlet valve, motor, door lock, and cycle-program faults.",
          "Inverter washing machines: Efficient and quiet, but diagnosis should include inverter motor, wiring harness, control module, rotor, stator, and hall sensor checks.",
          "Washer dryer combo machines: Useful for apartments, but they can develop drying heater, fan, condenser, drainage, lint, and humidity sensor problems."
        ],
      },
      {
        id: "common-problems",
        title: "Common Washing Machine Problems and What They Mean",
        body: [
          "The symptom you see is often only the visible part of the fault. A machine that does not spin may have a drain problem, load imbalance, belt issue, motor fault, or control board error. That is why proper diagnosis matters."
        ],
        bullets: [
          "Not draining: Often caused by clogged filters, blocked drain hose, jammed drain pump, or pump motor failure.",
          "Not spinning: Can happen due to unbalanced load, worn belt, motor issue, lid or door lock fault, or PCB signal failure.",
          "Water leakage: Common around inlet hoses, tub seals, drain hose joints, detergent drawer, door gasket, or pump housing.",
          "Too much noise or vibration: Usually linked to uneven flooring, damaged shock absorbers, drum bearing wear, foreign objects, or overloaded washing.",
          "Water not filling: May be caused by low water pressure, blocked inlet filter, faulty inlet valve, pressure sensor issue, or tap connection problem.",
          "Bad smell: Usually from detergent residue, lint, moisture trapped in the gasket, or missed tub cleaning.",
          "Error codes: Brand-specific codes may point to drainage, water level, door lock, heating, motor, or communication faults."
        ],
      },
      {
        id: "brands",
        title: "Washing Machine Brands Covered in Bangalore",
        body: [
          "Doorifix technicians handle common models across major washing machine brands used in Bangalore homes and apartments. Brand-specific diagnosis matters because error codes, spare design, and component layout can vary."
        ],
        bullets: [
          "LG washing machine repair: Direct drive motor, front load, top load, inverter and washer dryer models.",
          "Samsung washing machine repair: EcoBubble, digital inverter, top load, front load and fully automatic models.",
          "IFB washing machine service: Front load, top load, heater, drum, gasket, door lock, pump and PCB issues.",
          "Bosch washing machine repair: Front load models, drainage faults, bearing noise, error codes and motor diagnosis.",
          "Whirlpool washing machine repair: Top load, fully automatic, semi-automatic, inlet, spin and wash motor issues.",
          "Haier, Godrej, Panasonic, Siemens, Lloyd, Onida and Voltas Beko: General repair, service, installation and part replacement support."
        ],
      },
      {
        id: "service-process",
        title: "What a Proper Washing Machine Service Includes",
        body: [
          "A robust service visit should not begin with guesswork. The technician should inspect the machine, understand the symptom, run a test cycle where possible, and then explain the issue before repair."
        ],
        bullets: [
          "Initial symptom check and customer usage history.",
          "Error-code reading and cycle test when the machine can safely run.",
          "Water inlet, drain hose, filter, pump, drum, belt, motor and wiring inspection.",
          "Door lock, lid switch, pressure sensor, heater, PCB and control panel checks where relevant.",
          "Transparent quote before replacement of spare parts.",
          "Repair or replacement using compatible parts.",
          "Final wash or spin test to confirm drainage, vibration, water flow and cycle completion.",
          "Maintenance guidance for detergent quantity, tub cleaning, load size and hard-water care."
        ],
      },
      {
        id: "cost",
        title: "Washing Machine Repair Cost in Bangalore",
        body: [
          "Repair cost depends on the machine type, brand, part availability, fault severity, and whether the issue needs cleaning, adjustment, repair, or component replacement.",
          "Basic service and filter cleaning usually cost less than motor, drum bearing, PCB, heater, drain pump, inlet valve, or door lock replacement. A technician should always share the diagnosis and quote before starting paid repair work."
        ],
        bullets: [
          "Lower-cost fixes: Filter cleaning, pipe refitting, installation correction, minor wiring checks and basic servicing.",
          "Medium-cost repairs: Drain pump, inlet valve, belt, door lock, pressure sensor, capacitor or timer replacement.",
          "Higher-cost repairs: Motor, PCB, drum bearing, tub assembly, inverter board or major leakage repair."
        ],
      },
      {
        id: "maintenance",
        title: "How to Prevent Frequent Washing Machine Repairs",
        body: [
          "Good maintenance is simple, but it makes a real difference. Reliable sources such as Energy Saving Trust recommend paying attention to wash temperature and load size, while Consumer Reports highlights regular washer care as a way to extend appliance life.",
          "In India, BEE star labelling also helps customers compare energy performance when buying a washing machine. Choosing and maintaining an efficient machine can reduce operating stress over time."
        ],
        bullets: [
          "Do not overload the drum. Leave enough space for clothes to move.",
          "Use the detergent quantity recommended for your machine type.",
          "Clean the lint filter, drain filter and detergent tray regularly.",
          "Keep the door or lid slightly open after use to reduce trapped moisture.",
          "Run a tub clean cycle periodically, especially in hard-water areas.",
          "Check inlet and drain hoses for bends, cracks, leaks or loose fittings.",
          "Keep the machine level to reduce vibration and bearing strain.",
          "Use a suitable voltage stabilizer if your area has frequent voltage fluctuation."
        ],
      },
      {
        id: "when-to-call",
        title: "When Should You Call a Washing Machine Technician?",
        body: [
          "Some small issues, such as an overloaded drum or blocked inlet tap, can be corrected at home. But electrical, motor, drum, PCB, pump, leakage and repeated error-code issues should be inspected by a trained technician."
        ],
        bullets: [
          "Call a technician if the machine trips power, smells burnt, leaks from the bottom, makes grinding noise, does not drain, does not spin, or repeats the same error code.",
          "Avoid opening panels, touching wiring, bypassing safety locks, or running the machine repeatedly when it is leaking or making heavy noise.",
          "If your washing machine is older and the repair cost is high, ask for a repair-versus-replacement opinion before approving major parts."
        ],
      },
    ],
    faqs: [
      {
        question: "Do you repair front load and top load washing machines in Bangalore?",
        answer:
          "Yes. Doorifix handles front load, top load, semi-automatic, fully automatic, inverter and washer dryer combo washing machines across Bangalore.",
      },
      {
        question: "Which washing machine brands do you service?",
        answer:
          "We service major brands including LG, Samsung, IFB, Bosch, Whirlpool, Haier, Godrej, Panasonic, Siemens, Lloyd, Onida and Voltas Beko.",
      },
      {
        question: "Can a washing machine that is not spinning be repaired at home?",
        answer:
          "Usually yes. Not-spinning issues are often linked to drainage, belt, motor, load imbalance, lid or door lock, or PCB faults. A technician can diagnose most of these at your doorstep.",
      },
      {
        question: "How often should I service my washing machine?",
        answer:
          "For regular household use, a preventive check every 6 to 12 months is helpful, especially in hard-water areas or if the machine is used daily.",
      },
    ],
    sources: [
      {
        label: "Bureau of Energy Efficiency - Washing Machine Schedule",
        url: "https://beeindia.gov.in/sites/default/files/Schedule12-WM.pdf",
      },
      {
        label: "Energy Saving Trust - Washing Machine Energy Saving",
        url: "https://energysavingtrust.org.uk/how-save-energy-when-using-your-washing-machine?loc=scotland",
      },
      {
        label: "Consumer Reports - Make Your Washer and Dryer Last Longer",
        url: "https://www.consumerreports.org/appliances/how-to-make-your-washer-and-dryer-last-a2393416520/",
      },
    ],
  },
];

export const getBlogBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
