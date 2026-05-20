import washingMachine from "@/assets/washing-machine.png";
import acUnit from "@/assets/ac-unit.png";
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
  {
    slug: "ac-repair-service-bangalore",
    title: "AC Repair & Services in Bangalore: Complete Cooling Guide",
    excerpt:
      "A practical guide to AC repair in Bangalore, including cooling issues, gas leakage, servicing steps, AC types, brands, maintenance tips, repair costs, and when to call a technician.",
    category: "AC Repair & Service",
    readTime: "10 min read",
    publishedAt: "2026-05-21",
    updatedAt: "2026-05-21",
    author: "Doorifix Service Team",
    image: acUnit,
    keywords:
      "AC repair Bangalore, AC service Bangalore, AC repair near me, AC not cooling Bangalore, split AC service Bangalore, window AC repair Bangalore, inverter AC repair Bangalore, AC gas refill Bangalore, Daikin AC service Bangalore, Voltas AC repair Bangalore, LG AC service Bangalore, Samsung AC repair Bangalore",
    summary: [
      "Most AC complaints in Bangalore are linked to clogged filters, dirty coils, low refrigerant, gas leakage, blocked drainage, weak capacitors, fan motor issues, sensor faults, or compressor load.",
      "Split AC, window AC, inverter AC, cassette AC, ductable AC and tower AC units need different inspection methods and cleaning depth.",
      "A reliable AC service should include filter cleaning, coil inspection, drain flush, gas pressure check, electrical diagnosis, temperature testing and a clear repair quote.",
    ],
    highlights: [
      "Split, window, inverter and cassette AC service",
      "AC not cooling, gas leak and water leakage diagnosis",
      "Daikin, Voltas, LG, Samsung, Blue Star and more",
      "Deep cleaning, installation, uninstallation and repair",
    ],
    sections: [
      {
        id: "intro",
        title: "Why AC Service Is Important in Bangalore",
        body: [
          "Bangalore weather can be pleasant for much of the year, but summer heat, dust, traffic pollution, construction debris and closed apartment layouts can make an AC work harder than expected.",
          "When an AC is not serviced, dust builds up on filters and coils, airflow drops, cooling becomes weak, water can start dripping indoors, and electricity use can rise. Small issues such as a clogged drain pipe or dirty condenser coil can slowly become larger repair bills.",
          "This guide explains the most common AC problems, the types of air conditioners serviced, brand coverage, what a proper AC service includes, expected repair-cost factors and how to keep cooling efficient."
        ],
      },
      {
        id: "ac-types",
        title: "Types of AC Units We Service",
        body: [
          "Air conditioners may all cool a room, but their parts, installation style and fault patterns are different. A technician should identify the AC type before checking refrigerant pressure, electrical load or airflow."
        ],
        bullets: [
          "Split AC: The most common home AC type in Bangalore. Typical checks include indoor blower, evaporator coil, outdoor condenser, copper pipe insulation, drain line, gas pressure and PCB.",
          "Window AC: Compact and durable, but prone to coil dust, fan noise, thermostat faults, water drainage issues, compressor load and installation vibration.",
          "Inverter AC: Efficient at partial load, but diagnosis needs care around inverter PCB, compressor drive, sensors, fan motor, voltage input and refrigerant balance.",
          "Non-inverter AC: Simpler to repair in many cases, but compressor, capacitor, relay, thermostat and cooling cycle checks are important.",
          "Cassette AC: Often used in offices, shops and larger rooms. Service includes panel cleaning, drain pump check, blower cleaning, refrigerant diagnosis and ceiling-mounted access work.",
          "Ductable AC: Used for larger spaces and commercial cooling. It needs duct airflow checks, filter cleaning, drain inspection, thermostat calibration and outdoor unit inspection.",
          "Tower AC: Common for showrooms and halls. Service involves blower, fan motor, coil cleaning, gas pressure, thermostat and drainage checks."
        ],
      },
      {
        id: "common-problems",
        title: "Common AC Problems and Their Likely Causes",
        body: [
          "The most visible AC symptom is usually weak cooling, but the root cause may be airflow, refrigerant, electrical, installation or sensor related. A proper diagnosis prevents unnecessary gas filling or random part replacement."
        ],
        bullets: [
          "AC not cooling: Often caused by dirty filters, clogged coils, low refrigerant, gas leakage, weak compressor, wrong mode setting or undersized AC capacity.",
          "Water leaking from indoor unit: Usually linked to blocked drain pipe, dirty evaporator coil, broken drain tray, poor installation slope or ice formation.",
          "AC gas leakage: Can happen at flare joints, copper pipe bends, condenser coil, evaporator coil or service valve. Refilling gas without fixing the leak is only a temporary fix.",
          "AC making noise: May come from loose mounting, blower imbalance, fan motor bearing, outdoor fan blade, compressor vibration or foreign objects.",
          "AC not turning on: Can be due to power supply, remote issue, PCB fault, capacitor failure, thermostat sensor, MCB trip or wiring damage.",
          "Ice formation on coils: Often connected to low refrigerant, restricted airflow, dirty filter, blocked coil or fan speed issues.",
          "Bad smell from AC: Usually from dust, fungus, stagnant drain water, wet filters or dirty blower assembly.",
          "High electricity bill: Can be caused by dirty coils, poor insulation, low gas, wrong thermostat use, clogged filters, aging compressor or frequent door/window opening."
        ],
      },
      {
        id: "brands",
        title: "AC Brands Covered in Bangalore",
        body: [
          "Doorifix technicians handle common AC models from major brands used in Bangalore apartments, villas, shops and offices. Brand-specific diagnosis matters because PCB design, sensor logic, error codes and spare-part fitment vary."
        ],
        bullets: [
          "Daikin AC service: Split, inverter and non-inverter units, cooling issues, gas leaks, PCB faults and installation checks.",
          "Voltas AC repair: Window, split, inverter, compressor, capacitor, fan motor, water leakage and cooling complaints.",
          "LG AC service: Dual inverter models, indoor blower cleaning, PCB diagnosis, gas pressure checks and sensor faults.",
          "Samsung AC repair: Inverter and split AC service, error-code diagnosis, cooling faults, drain issues and outdoor unit problems.",
          "Blue Star AC service: Residential and light commercial AC repair, cassette units, gas leakage, coil cleaning and compressor diagnosis.",
          "Carrier, Hitachi, Panasonic, Lloyd, Whirlpool, Godrej, Haier, Mitsubishi and O General: General service, gas refill, installation, uninstallation and part replacement."
        ],
      },
      {
        id: "service-process",
        title: "What a Professional AC Service Includes",
        body: [
          "A good AC service is more than washing the filter. The technician should check airflow, temperature drop, drainage, refrigerant pressure, electrical load and installation condition before recommending a repair."
        ],
        bullets: [
          "Indoor unit inspection for filter dust, blower dirt, evaporator coil condition, sensor position and water leakage.",
          "Outdoor unit inspection for condenser coil dust, fan operation, compressor sound, service valve condition and mounting stability.",
          "Drain pipe flushing to remove blockage and reduce indoor water dripping.",
          "Gas pressure check and leak inspection before any refrigerant refill.",
          "Electrical diagnosis for capacitor, PCB, wiring, compressor input, fan motor and voltage supply.",
          "Temperature testing at air inlet and outlet to confirm cooling performance.",
          "Remote, mode, swing, thermostat and timer function checks.",
          "Final run test with maintenance guidance for filter cleaning, thermostat setting and service interval."
        ],
      },
      {
        id: "gas-refill",
        title: "AC Gas Refill vs Gas Leak Repair",
        body: [
          "Many customers ask for AC gas refill as soon as cooling becomes weak. Sometimes that is correct, but low cooling can also come from clogged filters, dirty coils, weak capacitor, fan motor issues or poor airflow.",
          "If refrigerant is low, the technician should inspect for leakage before refilling. A sealed AC system should not need frequent gas refill. Repeated refilling without leak repair wastes money and can still leave the AC underperforming."
        ],
        bullets: [
          "Gas refill may be needed when pressure is genuinely low and cooling is poor.",
          "Leak repair is needed when refrigerant escapes through joints, copper pipes, coils or valves.",
          "Vacuuming and correct refrigerant quantity matter for long-term cooling performance.",
          "Different ACs may use different refrigerants, so the technician should verify the correct gas type."
        ],
      },
      {
        id: "cost",
        title: "AC Repair Cost in Bangalore",
        body: [
          "AC repair cost depends on the AC type, tonnage, brand, access difficulty, spare-part requirement, refrigerant type and whether the work is regular service, deep cleaning, gas refill, leak repair or component replacement.",
          "A transparent service provider should diagnose the issue and share the quote before starting paid repair. This is especially important for compressor, PCB, motor, coil and gas-leak work."
        ],
        bullets: [
          "Lower-cost work: Filter cleaning, drain cleaning, basic service, remote check, mode setting correction and minor installation adjustment.",
          "Medium-cost repairs: Capacitor, sensor, fan motor, drain pipe, swing motor, contactor, thermostat and gas top-up work.",
          "Higher-cost repairs: Compressor, PCB, evaporator coil, condenser coil, major gas leak repair, copper pipe replacement and commercial AC repairs.",
          "Additional factors: High-rise outdoor unit access, wall bracket work, copper pipe length, refrigerant type and part availability."
        ],
      },
      {
        id: "maintenance",
        title: "How to Keep Your AC Cooling Efficiently",
        body: [
          "Reliable AC guidance is consistent on one point: maintenance matters. The U.S. Department of Energy recommends regular maintenance for cooling equipment, and BEE star labels in India help customers compare room AC energy performance.",
          "BEE material for room air conditioners also highlights the 24 degree Celsius default setting requirement for star-labelled RACs in India. In everyday use, correct temperature settings, clean filters and good room sealing can reduce load on the AC."
        ],
        bullets: [
          "Clean the indoor filter every 2 to 4 weeks during heavy use.",
          "Schedule professional AC service before peak summer.",
          "Keep doors and windows closed while the AC is running.",
          "Set the thermostat sensibly instead of running the AC at the lowest temperature.",
          "Do not block indoor airflow with curtains, cupboards or furniture.",
          "Keep the outdoor unit area clear for heat rejection.",
          "Check for unusual sound, weak airflow, water leakage or repeated tripping early.",
          "Use curtains or blinds in sunny rooms to reduce cooling load.",
          "Avoid placing heat-producing devices close to the thermostat or indoor unit sensor."
        ],
      },
      {
        id: "when-to-call",
        title: "When Should You Call an AC Technician?",
        body: [
          "Basic cleaning and setting checks are fine at home, but refrigerant, compressor, PCB, high-voltage electricals and outdoor unit faults should be handled by a trained technician."
        ],
        bullets: [
          "Call a technician if the AC is not cooling after filter cleaning and correct mode setting.",
          "Book service if water is leaking from the indoor unit, ice forms on the coil, or the outdoor unit is not starting.",
          "Do not keep restarting the AC if it trips the MCB, smells burnt or makes heavy compressor noise.",
          "Avoid gas refilling from unverified providers who do not inspect for leaks.",
          "For older ACs, ask whether repair or replacement is more practical if compressor or coil replacement is required."
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide AC repair and service in Bangalore?",
        answer:
          "Yes. Doorifix provides doorstep AC repair and service in Bangalore for split AC, window AC, inverter AC, cassette AC, ductable AC and tower AC units.",
      },
      {
        question: "Which AC brands do you service?",
        answer:
          "We service major brands including Daikin, Voltas, LG, Samsung, Blue Star, Carrier, Hitachi, Panasonic, Lloyd, Whirlpool, Godrej, Haier, Mitsubishi and O General.",
      },
      {
        question: "Why is my AC running but not cooling?",
        answer:
          "Common reasons include dirty filters, clogged coils, low refrigerant, gas leakage, weak capacitor, fan motor issue, compressor fault, incorrect mode setting or poor room sealing.",
      },
      {
        question: "How often should I service my AC in Bangalore?",
        answer:
          "For normal home use, service once or twice a year is recommended. If the AC runs daily, is near dust or traffic, or serves a commercial space, more frequent servicing may be needed.",
      },
      {
        question: "Should I refill AC gas every year?",
        answer:
          "No. A healthy sealed AC system should not need yearly gas refill. If gas is repeatedly low, the leak should be found and repaired before refilling.",
      },
    ],
    sources: [
      {
        label: "Bureau of Energy Efficiency - Room Air Conditioner Schedule",
        url: "https://beeindia.gov.in/sites/default/files/Schedule_24_LCAC.pdf",
      },
      {
        label: "PIB - BEE Energy Performance Standards for Room Air Conditioners",
        url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1598508",
      },
      {
        label: "U.S. Department of Energy - Air Conditioning",
        url: "https://www.energy.gov/energysaver/air-conditioning",
      },
      {
        label: "U.S. Department of Energy - Summer Energy-Saving Tips",
        url: "https://www.energy.gov/energysaver/spring-and-summer-energy-saving-tips?linkId=452855758",
      },
    ],
  },
];

export const getBlogBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
