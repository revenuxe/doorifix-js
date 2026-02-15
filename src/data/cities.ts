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
  appliances: {
    title: string;
    keywords: string;
  }[];
  faqs: { q: string; a: string }[];
}

export const cities: CityData[] = [
  {
    slug: "kochi",
    name: "Kochi",
    headline: "Best Appliance Repair\nService in Kochi",
    subheadline: "Trusted home appliance repair & servicing across Kochi — Edappally, Kakkanad, Fort Kochi, Vyttila, Aluva & more.",
    metaTitle: "Appliance Repair in Kochi | Washing Machine, AC, Fridge Service – Arrowmind",
    metaDescription: "Top-rated appliance repair in Kochi. Expert technicians for washing machine, refrigerator, AC, microwave, dryer & dishwasher repair. Doorstep service across Ernakulam.",
    keywords: "appliance repair kochi, washing machine repair kochi, fridge repair kochi, AC service kochi, microwave repair kochi, home appliance service ernakulam, doorstep repair kochi",
    heroText: "Kochi's most trusted appliance repair experts — serving Edappally, Kakkanad, Fort Kochi, Vyttila & beyond.",
    ctaText: "Book a Repair in Kochi",
    appliances: [
      { title: "Washing Machine Repair Kochi", keywords: "front load repair, top load service, drum issue fix, water leak kochi" },
      { title: "Refrigerator Repair Kochi", keywords: "fridge not cooling, gas refill kochi, compressor repair ernakulam" },
      { title: "AC Repair & Service Kochi", keywords: "AC gas charging kochi, split AC service, window AC repair ernakulam" },
      { title: "Microwave Repair Kochi", keywords: "microwave not heating kochi, turntable fix, display repair" },
      { title: "Dryer Repair Kochi", keywords: "dryer not drying kochi, drum noise fix, heating element repair" },
      { title: "Dishwasher Repair Kochi", keywords: "dishwasher leak kochi, not draining, spray arm fix ernakulam" },
    ],
    faqs: [
      { q: "How quickly can I get an appliance repair in Kochi?", a: "We typically arrive within 60-90 minutes across Kochi, including Edappally, Kakkanad, Vyttila, and Aluva areas." },
      { q: "Do you provide washing machine repair in Kakkanad?", a: "Yes, we cover all of Kakkanad and the wider Ernakulam district for washing machine, fridge, AC, and all major appliance repairs." },
      { q: "What brands do you service in Kochi?", a: "We service Samsung, LG, Whirlpool, Bosch, IFB, Haier, Godrej, Voltas, Daikin, and all major brands across Kochi." },
      { q: "Is there a service charge for doorstep repair in Kochi?", a: "We offer free diagnosis. You only pay for the repair and parts — no hidden charges. Transparent pricing guaranteed." },
    ],
  },
  {
    slug: "trivandrum",
    name: "Trivandrum",
    headline: "Expert Appliance Repair\nin Trivandrum",
    subheadline: "Professional home appliance servicing across Thiruvananthapuram — Technopark, Kazhakkoottam, Pattom, Kowdiar & more.",
    metaTitle: "Appliance Repair Trivandrum | AC, Fridge, Washing Machine Service – Arrowmind",
    metaDescription: "Reliable appliance repair in Trivandrum. Doorstep washing machine, refrigerator, AC, microwave & dryer repair by certified technicians across Thiruvananthapuram.",
    keywords: "appliance repair trivandrum, washing machine repair thiruvananthapuram, fridge repair trivandrum, AC service trivandrum, home appliance repair pattom, doorstep service trivandrum",
    heroText: "Trivandrum's leading appliance service — covering Technopark, Kazhakkoottam, Pattom, Kowdiar & surrounding areas.",
    ctaText: "Book a Repair in Trivandrum",
    appliances: [
      { title: "Washing Machine Repair Trivandrum", keywords: "top load repair, front load service, motor fix trivandrum" },
      { title: "Refrigerator Repair Trivandrum", keywords: "fridge gas refill trivandrum, cooling issue, compressor service" },
      { title: "AC Repair & Service Trivandrum", keywords: "AC installation trivandrum, split AC gas charge, deep cleaning" },
      { title: "Microwave Repair Trivandrum", keywords: "microwave sparking trivandrum, not heating, magnetron repair" },
      { title: "Dryer Repair Trivandrum", keywords: "dryer belt repair trivandrum, heating issue, timer fix" },
      { title: "Dishwasher Repair Trivandrum", keywords: "dishwasher not cleaning trivandrum, drain pump, inlet valve" },
    ],
    faqs: [
      { q: "Do you offer same-day appliance repair in Trivandrum?", a: "Yes! We offer same-day service across Trivandrum. Our technicians can reach most areas within 60-90 minutes of booking." },
      { q: "Do you cover the Technopark area for repairs?", a: "Absolutely. We serve Technopark, Kazhakkoottam, and all surrounding areas in Thiruvananthapuram district." },
      { q: "What is the cost of AC service in Trivandrum?", a: "AC service pricing depends on the type and issue. We provide upfront quotes with no hidden charges after free diagnosis." },
      { q: "Are your technicians certified in Trivandrum?", a: "Yes, all our technicians are trained and certified professionals with 3+ years of experience in appliance repair." },
    ],
  },
  {
    slug: "kozhikode",
    name: "Kozhikode",
    headline: "Trusted Appliance Repair\nin Kozhikode",
    subheadline: "Fast & affordable appliance repair across Calicut — Mavoor Road, Palayam, Nadakkav, Feroke, Beypore & more.",
    metaTitle: "Appliance Repair Kozhikode | Washing Machine, Fridge, AC Service – Arrowmind",
    metaDescription: "Best appliance repair in Kozhikode (Calicut). Expert washing machine, refrigerator, AC, microwave & dishwasher repair at your doorstep. Book now!",
    keywords: "appliance repair kozhikode, washing machine repair calicut, fridge repair kozhikode, AC service calicut, microwave repair kozhikode, doorstep repair calicut",
    heroText: "Kozhikode's trusted repair partner — fast service across Mavoor Road, Palayam, Nadakkav & beyond.",
    ctaText: "Book a Repair in Kozhikode",
    appliances: [
      { title: "Washing Machine Repair Kozhikode", keywords: "semi-auto repair calicut, drum noise fix, water inlet issue" },
      { title: "Refrigerator Repair Kozhikode", keywords: "double door fridge repair calicut, ice maker fix, thermostat" },
      { title: "AC Repair & Service Kozhikode", keywords: "AC not cooling calicut, gas top-up, compressor service kozhikode" },
      { title: "Microwave Repair Kozhikode", keywords: "convection microwave repair calicut, door switch, fuse fix" },
      { title: "Dryer Repair Kozhikode", keywords: "clothes dryer repair calicut, vent cleaning, motor issue" },
      { title: "Dishwasher Repair Kozhikode", keywords: "dishwasher error codes calicut, detergent dispenser, rack repair" },
    ],
    faqs: [
      { q: "How fast is appliance repair service in Kozhikode?", a: "We reach most locations in Kozhikode within 60-90 minutes. Areas like Mavoor Road, Palayam, and Nadakkav get priority coverage." },
      { q: "Do you repair all brands in Calicut?", a: "Yes, we service all major brands including Samsung, LG, Whirlpool, Bosch, IFB, Haier, and more across Kozhikode." },
      { q: "Is there warranty on repairs in Kozhikode?", a: "Yes, we offer a 90-day warranty on all repairs and replaced parts across Kozhikode." },
      { q: "Do you serve Feroke and Beypore areas?", a: "Yes, our service coverage includes Feroke, Beypore, Ramanattukara, and all areas within Kozhikode district." },
    ],
  },
  {
    slug: "thrissur",
    name: "Thrissur",
    headline: "Professional Appliance\nRepair in Thrissur",
    subheadline: "Certified technicians for all appliance repairs in Thrissur — Swaraj Round, Punkunnam, Ollur, Wadakkanchery & more.",
    metaTitle: "Appliance Repair Thrissur | Expert Washing Machine, AC, Fridge Service – Arrowmind",
    metaDescription: "Professional appliance repair in Thrissur. Doorstep service for washing machine, refrigerator, AC, microwave & dryer by certified technicians. Quick turnaround!",
    keywords: "appliance repair thrissur, washing machine repair thrissur, fridge repair thrissur, AC service thrissur, home appliance service thrissur, doorstep repair thrissur",
    heroText: "Thrissur's certified repair experts — covering Swaraj Round, Punkunnam, Ollur & all nearby areas.",
    ctaText: "Book a Repair in Thrissur",
    appliances: [
      { title: "Washing Machine Repair Thrissur", keywords: "fully automatic repair thrissur, spin issue, drain pump fix" },
      { title: "Refrigerator Repair Thrissur", keywords: "side-by-side fridge repair thrissur, freezer not working, door seal" },
      { title: "AC Repair & Service Thrissur", keywords: "AC annual maintenance thrissur, inverter AC service, duct cleaning" },
      { title: "Microwave Repair Thrissur", keywords: "grill microwave repair thrissur, power issue, control panel fix" },
      { title: "Dryer Repair Thrissur", keywords: "condenser dryer repair thrissur, lint filter, sensor issue" },
      { title: "Dishwasher Repair Thrissur", keywords: "dishwasher water leak thrissur, rinse aid issue, pump motor" },
    ],
    faqs: [
      { q: "Do you provide appliance repair near Swaraj Round, Thrissur?", a: "Yes, we cover all areas around Swaraj Round, Punkunnam, Ayyanthole, and the entire Thrissur corporation limits." },
      { q: "How much does washing machine repair cost in Thrissur?", a: "Repair costs vary by issue. We offer free diagnosis and transparent pricing — no hidden charges anywhere in Thrissur." },
      { q: "Do you offer emergency repair service in Thrissur?", a: "Yes, we offer same-day emergency repairs across Thrissur. Call us and our technician will be at your doorstep quickly." },
      { q: "Which areas in Thrissur do you cover?", a: "We cover Swaraj Round, Punkunnam, Ollur, Wadakkanchery, Irinjalakuda, Chalakudy, and all of Thrissur district." },
    ],
  },
  {
    slug: "kollam",
    name: "Kollam",
    headline: "Reliable Appliance Repair\nService in Kollam",
    subheadline: "Affordable home appliance repair across Kollam — Chinnakada, Asramam, Kadappakada, Paravur, Punalur & more.",
    metaTitle: "Appliance Repair Kollam | Washing Machine, Fridge, AC Repair – Arrowmind",
    metaDescription: "Affordable appliance repair in Kollam. Expert doorstep service for washing machine, refrigerator, AC, microwave & dryer. Trusted technicians across Kollam district.",
    keywords: "appliance repair kollam, washing machine repair kollam, fridge repair kollam, AC service kollam, microwave repair kollam, home appliance repair kollam, doorstep service kollam",
    heroText: "Kollam's affordable repair service — covering Chinnakada, Asramam, Kadappakada & surrounding areas.",
    ctaText: "Book a Repair in Kollam",
    appliances: [
      { title: "Washing Machine Repair Kollam", keywords: "agitator repair kollam, lid switch, water pump fix" },
      { title: "Refrigerator Repair Kollam", keywords: "mini fridge repair kollam, defrost issue, evaporator fan" },
      { title: "AC Repair & Service Kollam", keywords: "AC repair kollam, cassette AC service, stabilizer issue" },
      { title: "Microwave Repair Kollam", keywords: "solo microwave repair kollam, waveguide cover, light fix" },
      { title: "Dryer Repair Kollam", keywords: "heat pump dryer repair kollam, exhaust issue, drum roller" },
      { title: "Dishwasher Repair Kollam", keywords: "dishwasher noise kollam, wash arm, float switch repair" },
    ],
    faqs: [
      { q: "Is appliance repair available in Kollam city?", a: "Yes, we provide comprehensive appliance repair services across Kollam city including Chinnakada, Asramam, and Kadappakada." },
      { q: "Do you cover Paravur and Punalur for repairs?", a: "Yes, our service area includes Paravur, Punalur, Karunagappally, and all major towns in Kollam district." },
      { q: "What is the response time in Kollam?", a: "We typically reach locations within Kollam city in 60-90 minutes and outer areas within 2 hours of booking." },
      { q: "Do you offer warranty on parts in Kollam?", a: "Yes, all repairs come with a 90-day warranty on service and replaced parts across Kollam." },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    headline: "Best Appliance Repair\nService in Hyderabad",
    subheadline: "Trusted home appliance repair & servicing across Hyderabad — Gachibowli, Madhapur, Kukatpally, Ameerpet, Kondapur, Banjara Hills & more.",
    metaTitle: "Appliance Repair in Hyderabad | Washing Machine, AC, Fridge Service – Arrowmind",
    metaDescription: "Top-rated appliance repair in Hyderabad. Expert technicians for washing machine, refrigerator, AC, microwave, dryer & dishwasher repair. Doorstep service across Hyderabad & Secunderabad.",
    keywords: "appliance repair hyderabad, washing machine repair hyderabad, fridge repair hyderabad, AC service hyderabad, microwave repair hyderabad, home appliance repair gachibowli, doorstep repair kukatpally, appliance service madhapur, repair near me hyderabad",
    heroText: "Hyderabad's most trusted appliance repair experts — serving Gachibowli, Madhapur, Kukatpally, Kondapur, Banjara Hills & beyond.",
    ctaText: "Book a Repair in Hyderabad",
    appliances: [
      { title: "Washing Machine Repair Hyderabad", keywords: "front load repair hyderabad, top load service gachibowli, drum issue fix kukatpally, water leak madhapur" },
      { title: "Refrigerator Repair Hyderabad", keywords: "fridge not cooling hyderabad, gas refill gachibowli, compressor repair kondapur, double door fridge service" },
      { title: "AC Repair & Service Hyderabad", keywords: "AC gas charging hyderabad, split AC service madhapur, window AC repair kukatpally, AC installation gachibowli" },
      { title: "Microwave Repair Hyderabad", keywords: "microwave not heating hyderabad, turntable fix gachibowli, magnetron repair, display issue kukatpally" },
      { title: "Dryer Repair Hyderabad", keywords: "dryer not drying hyderabad, drum noise fix, heating element repair madhapur, belt repair gachibowli" },
      { title: "Dishwasher Repair Hyderabad", keywords: "dishwasher leak hyderabad, not draining kukatpally, spray arm fix gachibowli, pump motor madhapur" },
    ],
    faqs: [
      { q: "How quickly can I get appliance repair in Hyderabad?", a: "We typically arrive within 60-90 minutes across Hyderabad, including Gachibowli, Madhapur, Kukatpally, Kondapur, and Banjara Hills areas." },
      { q: "Do you provide washing machine repair in Gachibowli?", a: "Yes, we cover all of Gachibowli, HITEC City, Madhapur, and the wider Hyderabad district for washing machine, fridge, AC, and all major appliance repairs." },
      { q: "What brands do you service in Hyderabad?", a: "We service Samsung, LG, Whirlpool, Bosch, IFB, Haier, Godrej, Voltas, Daikin, and all major brands across Hyderabad & Secunderabad." },
      { q: "Is there a service charge for doorstep repair in Hyderabad?", a: "We offer free diagnosis. You only pay for the repair and parts — no hidden charges. Transparent pricing guaranteed across Hyderabad." },
      { q: "Do you cover Secunderabad for appliance repairs?", a: "Yes, our service area covers all of Secunderabad including Bowenpally, Trimulgherry, Tarnaka, and Jubilee Hills." },
    ],
  },
  {
    slug: "secunderabad",
    name: "Secunderabad",
    headline: "Expert Appliance Repair\nin Secunderabad",
    subheadline: "Professional home appliance servicing across Secunderabad — Bowenpally, Trimulgherry, Tarnaka, Begumpet, Jubilee Hills & more.",
    metaTitle: "Appliance Repair Secunderabad | Washing Machine, AC, Fridge Service – Arrowmind",
    metaDescription: "Reliable appliance repair in Secunderabad. Doorstep washing machine, refrigerator, AC, microwave & dryer repair by certified technicians. Fast same-day service!",
    keywords: "appliance repair secunderabad, washing machine repair secunderabad, fridge repair secunderabad, AC service secunderabad, microwave repair secunderabad, home appliance repair bowenpally, doorstep repair tarnaka, appliance service begumpet",
    heroText: "Secunderabad's leading appliance service — covering Bowenpally, Trimulgherry, Tarnaka, Begumpet & surrounding areas.",
    ctaText: "Book a Repair in Secunderabad",
    appliances: [
      { title: "Washing Machine Repair Secunderabad", keywords: "top load repair secunderabad, front load service bowenpally, motor fix tarnaka, drain pump issue" },
      { title: "Refrigerator Repair Secunderabad", keywords: "fridge gas refill secunderabad, cooling issue bowenpally, compressor service trimulgherry" },
      { title: "AC Repair & Service Secunderabad", keywords: "AC installation secunderabad, split AC gas charge bowenpally, deep cleaning tarnaka, AC not cooling" },
      { title: "Microwave Repair Secunderabad", keywords: "microwave sparking secunderabad, not heating bowenpally, magnetron repair tarnaka, control panel fix" },
      { title: "Dryer Repair Secunderabad", keywords: "dryer belt repair secunderabad, heating issue bowenpally, timer fix tarnaka, condenser dryer" },
      { title: "Dishwasher Repair Secunderabad", keywords: "dishwasher not cleaning secunderabad, drain pump bowenpally, inlet valve tarnaka, error codes" },
    ],
    faqs: [
      { q: "Do you offer same-day appliance repair in Secunderabad?", a: "Yes! We offer same-day service across Secunderabad. Our technicians can reach most areas within 60-90 minutes of booking." },
      { q: "Do you cover Bowenpally and Trimulgherry for repairs?", a: "Absolutely. We serve Bowenpally, Trimulgherry, Tarnaka, Begumpet, and all surrounding areas in Secunderabad." },
      { q: "What is the cost of AC service in Secunderabad?", a: "AC service pricing depends on the type and issue. We provide upfront quotes with no hidden charges after free diagnosis." },
      { q: "Are your technicians certified in Secunderabad?", a: "Yes, all our technicians are trained and certified professionals with 3+ years of experience in appliance repair." },
      { q: "Do you also serve Hyderabad from Secunderabad?", a: "Yes, we cover both Secunderabad and Hyderabad including Gachibowli, Madhapur, Kukatpally, and all surrounding areas." },
    ],
  },
];

export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find((c) => c.slug === slug);
