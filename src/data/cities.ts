import { getLocalGuide } from "@/data/local-content";

export interface CityData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroText: string;
  ctaText: string;
  appliances: { title: string; keywords: string }[];
  faqs: { q: string; a: string }[];
}

const bangaloreCity: CityData = {
  slug: "bangalore",
  name: "Bangalore",
  headline: "Appliance Repair at\nYour Doorstep in Bangalore",
  subheadline:
    "Trusted home appliance repair & servicing across Bangalore and Bengaluru - Whitefield, Koramangala, Indiranagar, HSR Layout, Marathahalli, Electronic City, Jayanagar, JP Nagar, BTM Layout, Hebbal, Yelahanka, HBR Layout & more.",
  metaTitle: "Appliance Repair in Bangalore/Bengaluru | Washing Machine, AC, Fridge Repair Near Me - Doorifix",
  metaDescription:
    "Top-rated appliance repair in Bangalore and Bengaluru. Expert washing machine, refrigerator, AC, microwave, dryer & dishwasher repair at your doorstep. Same-day service in Whitefield, Koramangala, Indiranagar, HSR Layout, Marathahalli, Electronic City & all Bangalore areas.",
  keywords:
    "appliance repair bangalore, appliance repair bengaluru, washing machine repair bangalore, washing machine repair bengaluru, fridge repair bangalore, AC service bangalore, microwave repair bangalore, appliance repair near me bangalore, home appliance repair whitefield, doorstep repair koramangala, appliance service indiranagar, washing machine repair near me bangalore, refrigerator repair near me bangalore, AC repair near me bengaluru, appliance repair electronic city, appliance service hsr layout, fridge repair jayanagar, AC service marathahalli, washing machine repair hebbal, appliance repair HBR layout, repair near me bangalore, best appliance repair bangalore, cheapest appliance repair bangalore, same day repair bangalore",
  heroText:
    "Fast doorstep appliance repair across Bangalore and nearby neighbourhoods.",
  ctaText: "Book a Repair in Bangalore",
  appliances: [
    {
      title: "Washing Machine Repair Bangalore",
      keywords:
        "washing machine repair near me bangalore, washing machine repair bengaluru, front load repair whitefield, top load service koramangala, samsung washing machine repair bangalore, lg washing machine repair indiranagar, drum issue fix HSR layout, water leak repair marathahalli, ifb washing machine service bangalore, whirlpool washing machine repair electronic city",
    },
    {
      title: "Refrigerator Repair Bangalore",
      keywords:
        "fridge repair near me bangalore, refrigerator repair bengaluru, fridge not cooling whitefield, refrigerator gas refill bangalore, compressor repair koramangala, double door fridge service indiranagar, samsung fridge repair bangalore, lg refrigerator repair HSR layout, godrej fridge repair jayanagar, whirlpool refrigerator service marathahalli",
    },
    {
      title: "AC Repair & Service Bangalore",
      keywords:
        "AC repair near me bangalore, AC service bengaluru, AC gas charging whitefield, split AC service koramangala, window AC repair indiranagar, AC installation bangalore, AC deep cleaning HSR layout, daikin AC service bangalore, voltas AC repair marathahalli, AC not cooling bangalore, inverter AC repair electronic city",
    },
    {
      title: "Microwave Repair Bangalore",
      keywords:
        "microwave repair near me bangalore, microwave service bengaluru, microwave not heating whitefield, turntable fix koramangala, magnetron repair indiranagar, samsung microwave repair bangalore, lg microwave service HSR layout, convection microwave repair jayanagar",
    },
    {
      title: "Dryer Repair Bangalore",
      keywords:
        "dryer repair near me bangalore, dryer service bengaluru, dryer not drying whitefield, drum noise fix koramangala, heating element repair indiranagar, samsung dryer repair bangalore, lg dryer service HSR layout, belt repair marathahalli",
    },
    {
      title: "Dishwasher Repair Bangalore",
      keywords:
        "dishwasher repair near me bangalore, dishwasher service bengaluru, dishwasher not draining whitefield, spray arm fix koramangala, pump motor indiranagar, bosch dishwasher repair bangalore, ifb dishwasher service HSR layout, dishwasher leak repair jayanagar",
    },
  ],
  faqs: [
    {
      q: "How quickly can I get appliance repair in Bangalore?",
      a: "We typically arrive within 60-90 minutes across Bangalore and Bengaluru, including Whitefield, Koramangala, Indiranagar, HSR Layout, Marathahalli, and Electronic City areas.",
    },
    {
      q: "Do you provide washing machine repair in Whitefield and Koramangala?",
      a: "Yes, we cover Whitefield, Koramangala, Indiranagar, HSR Layout, Marathahalli, Electronic City, and the wider Bangalore area for washing machine, fridge, AC, and all major appliance repairs.",
    },
    {
      q: "What brands do you service in Bangalore?",
      a: "We service Samsung, LG, Whirlpool, Bosch, IFB, Haier, Godrej, Voltas, Daikin, and all major brands across Bangalore and Bengaluru.",
    },
    {
      q: "Is there a service charge for doorstep repair in Bangalore?",
      a: "We offer free diagnosis. You only pay for the repair and parts - no hidden charges. Transparent pricing guaranteed across Bangalore.",
    },
    {
      q: "Which areas in Bangalore do you cover?",
      a: "We serve Whitefield, Koramangala, Indiranagar, HSR Layout, Marathahalli, Electronic City, Jayanagar, JP Nagar, BTM Layout, Hebbal, Yelahanka, HBR Layout, Banashankari, Rajajinagar, Malleshwaram, Sarjapur Road, Bellandur, and all major Bangalore localities.",
    },
  ],
};

const bengaluruCity: CityData = {
  ...bangaloreCity,
  slug: "bengaluru",
  name: "Bengaluru",
  headline: "Appliance Repair at\nYour Doorstep in Bengaluru",
  ctaText: "Book a Repair in Bengaluru",
};

const mangaloreCity: CityData = {
  slug: "mangalore",
  name: "Mangalore",
  headline: "Appliance Repair at\nYour Doorstep in Mangalore",
  subheadline: "Trusted doorstep home appliance repair across Mangalore - Kadri, Kankanady, Bejai, Surathkal, Derebail, Hampankatta, Valencia, Kavoor, Panambur, Ullal and nearby areas.",
  metaTitle: "Appliance Repair in Mangalore | AC, Fridge & Washer | Doorifix",
  metaDescription: "Book doorstep appliance repair in Mangalore. Washing machine, refrigerator, AC, microwave, dryer and dishwasher service in Kadri, Bejai, Surathkal and more.",
  keywords: "washing machine repair mangalore, washing machine service mangalore, washing machine repair near me mangalore, front load washing machine repair mangalore, top load washing machine service mangalore, appliance repair mangalore, fridge repair mangalore, AC service mangalore, washing machine technician mangalore, doorstep washing machine repair mangalore, LG washing machine repair mangalore, Samsung washing machine repair mangalore, IFB washing machine service mangalore, Bosch washing machine repair mangalore, Whirlpool washing machine repair mangalore",
  heroText: "Quick doorstep repair for washing machines, refrigerators and ACs in Mangalore.",
  ctaText: "Book a Repair in Mangalore",
  appliances: [
    { title: "Washing Machine Repair Mangalore", keywords: "washing machine repair near me mangalore, front load washing machine repair mangalore, top load washing machine service mangalore, LG, Samsung, IFB, Bosch and Whirlpool washing machine repair mangalore" },
    { title: "Refrigerator Repair Mangalore", keywords: "fridge repair mangalore, refrigerator not cooling mangalore, double door fridge service mangalore, compressor and gas refill repair" },
    { title: "AC Repair & Service Mangalore", keywords: "AC repair mangalore, AC service near me mangalore, split AC service, AC not cooling and gas refill" },
    { title: "Microwave Repair Mangalore", keywords: "microwave repair mangalore, microwave not heating, convection microwave service near me" },
    { title: "Dryer Repair Mangalore", keywords: "dryer repair mangalore, dryer not drying, heating element and belt repair" },
    { title: "Dishwasher Repair Mangalore", keywords: "dishwasher repair mangalore, dishwasher not draining, pump and leak repair" },
  ],
  faqs: [
    { q: "Which appliances do you repair in Mangalore?", a: "Doorifix provides doorstep washing machine, refrigerator, AC, microwave, dryer and dishwasher repair across Mangalore. Select your appliance and locality to arrange a technician visit." },
    { q: "Which washing machine brands do you repair in Mangalore?", a: "We repair major brands including Samsung, LG, IFB, Bosch, Whirlpool, Haier, Godrej, Panasonic and Siemens in Mangalore." },
    { q: "Which Mangalore areas do you cover?", a: "We serve Kadri, Kankanady, Bejai, Surathkal, Derebail, Hampankatta, Valencia, Kavoor, Panambur, Ullal and other Mangalore localities." },
    { q: "What washing machine issues can be repaired at home?", a: "Our technicians diagnose common drainage, spin, water-leak, inlet, door-lock, motor, drum, bearing and control-board issues at your doorstep." },
    { q: "Is the repair price shared before work begins?", a: "Yes. After diagnosis, we explain the fault and provide a transparent repair quote before any work is started." },
  ],
};

const chennaiCity: CityData = {
  slug: "chennai",
  name: "Chennai",
  headline: "Appliance Repair at\nYour Doorstep in Chennai",
  subheadline: "Doorstep home appliance repair across Chennai, including Anna Nagar, Adyar, T Nagar, Velachery, Porur, Ambattur, Perungudi and Sholinganallur. Choose your appliance and locality to arrange a technician visit.",
  metaTitle: "Appliance Repair in Chennai | AC, Fridge & Washer | Doorifix",
  metaDescription: "Book doorstep appliance repair in Chennai. Washing machine, AC, fridge, microwave, dryer and dishwasher service in Anna Nagar, Adyar, Velachery and more.",
  keywords: "appliance repair Chennai, washing machine repair Chennai, AC service Chennai, refrigerator repair Chennai, doorstep appliance repair Chennai",
  heroText: "Trusted appliance repair and doorstep service across Chennai neighbourhoods.",
  ctaText: "Book a Repair in Chennai",
  appliances: [
    { title: "Washing Machine Repair Chennai", keywords: "front load, top load and semi-automatic washing machine diagnosis, drainage faults, spin problems and water leaks" },
    { title: "Refrigerator Repair Chennai", keywords: "single door, double door and side-by-side refrigerator diagnosis, cooling problems, frost buildup and water leaks" },
    { title: "AC Repair & Service Chennai", keywords: "split and window AC servicing, cooling checks, filter cleaning, drainage problems and refrigerant leak diagnosis" },
    { title: "Microwave Repair Chennai", keywords: "solo, grill and convection microwave diagnosis, heating faults, turntable problems and control panel repairs" },
    { title: "Dryer Repair Chennai", keywords: "tumble dryer diagnosis, heating faults, drum noise, airflow problems and drying cycle issues" },
    { title: "Dishwasher Repair Chennai", keywords: "dishwasher diagnosis, drainage faults, spray arm blockages, poor cleaning and water leaks" },
  ],
  faqs: [
    { q: "Which appliances can I book for repair in Chennai?", a: "Book washing machine, refrigerator, AC, microwave, dryer and dishwasher repair. Select the appliance service page, describe the fault and share your Chennai address when booking." },
    { q: "Which Chennai localities can I select?", a: "Our Chennai area pages include Anna Nagar, Adyar, T Nagar, Velachery, Porur, Ambattur, Mylapore, Nungambakkam, Perungudi and Sholinganallur. Check the area list below and confirm your address and appointment availability with the team." },
    { q: "Can I arrange same-day appliance repair in Chennai?", a: "Contact the team with your locality, appliance model and fault. Same-day visits depend on technician availability; the appointment time is confirmed when you book." },
    { q: "How is the repair cost decided?", a: "The technician checks the appliance and explains the fault, required parts and repair quote before work begins. Share the model number and any error code to help prepare for the visit." },
    { q: "What should I prepare before a technician visits?", a: "Keep the appliance model number, error codes and a description of the problem ready. Share your full address, landmark and access instructions for your Chennai apartment or house." },
  ],
};

export const cities: CityData[] = [bangaloreCity, bengaluruCity, mangaloreCity, chennaiCity].map((city) => {
  const guide = getLocalGuide(city.slug);
  return {
    ...city,
    metaTitle: `Appliance Repair in ${city.name} | Doorifix`,
    metaDescription: city.slug === "chennai"
      ? "Arrange AC, fridge and home appliance repair in Chennai. Compare service options, check locality coverage and prepare for a doorstep diagnosis."
      : city.slug === "mangalore"
        ? "Book appliance diagnosis in Mangalore and surrounding localities. Explore washing machine, fridge, AC and kitchen appliance repair with quote guidance."
        : "Find appliance repair in Bangalore by service and locality. Get help with washing machine, refrigerator, AC and kitchen appliance faults at home.",
    subheadline: guide.intro,
    heroText: city.slug === "chennai"
      ? "Trusted appliance repair and doorstep service across Chennai neighbourhoods."
      : city.slug === "mangalore"
        ? "Quick doorstep repair for washing machines, refrigerators and ACs in Mangalore."
        : "Fast doorstep appliance repair across Bangalore and nearby neighbourhoods.",
    faqs: guide.questions,
  };
});

export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find((c) => c.slug === slug);
