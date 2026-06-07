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
    "Bangalore's trusted appliance repair experts - serving Whitefield, Koramangala, Indiranagar, HSR Layout, Marathahalli, Electronic City, Jayanagar, JP Nagar, Hebbal & nearby Bengaluru areas.",
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

export const cities: CityData[] = [bangaloreCity, bengaluruCity];

export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find((c) => c.slug === slug);
