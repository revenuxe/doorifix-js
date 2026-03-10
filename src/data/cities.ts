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
      { q: "Is there warranty on repairs in Kozhikode?", a: "Yes, we offer a warranty on all repairs and replaced parts across Kozhikode." },
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
      { q: "Do you offer warranty on parts in Kollam?", a: "Yes, all repairs come with a warranty on service and replaced parts across Kollam." },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    headline: "Best Appliance Repair\nService in Hyderabad",
    subheadline: "Trusted home appliance repair & servicing across Hyderabad — Gachibowli, Madhapur, HITEC City, Kukatpally, Kondapur, Banjara Hills, Jubilee Hills, Ameerpet, LB Nagar, Dilsukhnagar & more.",
    metaTitle: "Appliance Repair in Hyderabad | Washing Machine, AC, Fridge Repair Near Me – Arrowmind",
    metaDescription: "Top-rated appliance repair in Hyderabad. Expert washing machine, refrigerator, AC, microwave, dryer & dishwasher repair at your doorstep. Same-day service in Gachibowli, Madhapur, Kukatpally, Kondapur, Banjara Hills & all Hyderabad areas.",
    keywords: "appliance repair hyderabad, washing machine repair hyderabad, fridge repair hyderabad, AC service hyderabad, microwave repair hyderabad, appliance repair near me hyderabad, home appliance repair gachibowli, doorstep repair kukatpally, appliance service madhapur, washing machine repair near me hyderabad, refrigerator repair near me hyderabad, AC repair near me hyderabad, appliance repair HITEC city, appliance service kondapur, fridge repair banjara hills, AC service jubilee hills, washing machine repair ameerpet, appliance repair LB nagar, home appliance repair dilsukhnagar, appliance service miyapur, repair near me hyderabad, best appliance repair hyderabad, cheapest appliance repair hyderabad, same day repair hyderabad",
    heroText: "Hyderabad's most trusted appliance repair experts — serving Gachibowli, Madhapur, HITEC City, Kukatpally, Kondapur, Banjara Hills, Jubilee Hills, LB Nagar, Dilsukhnagar & beyond.",
    ctaText: "Book a Repair in Hyderabad",
    appliances: [
      { title: "Washing Machine Repair Hyderabad", keywords: "washing machine repair near me hyderabad, front load repair gachibowli, top load service kukatpally, samsung washing machine repair hyderabad, lg washing machine repair madhapur, drum issue fix kondapur, water leak repair HITEC city, ifb washing machine service hyderabad, whirlpool washing machine repair banjara hills" },
      { title: "Refrigerator Repair Hyderabad", keywords: "fridge repair near me hyderabad, fridge not cooling gachibowli, refrigerator gas refill hyderabad, compressor repair kondapur, double door fridge service madhapur, samsung fridge repair hyderabad, lg refrigerator repair kukatpally, godrej fridge repair banjara hills, whirlpool refrigerator service HITEC city" },
      { title: "AC Repair & Service Hyderabad", keywords: "AC repair near me hyderabad, AC gas charging gachibowli, split AC service madhapur, window AC repair kukatpally, AC installation hyderabad, AC deep cleaning kondapur, daikin AC service hyderabad, voltas AC repair banjara hills, AC not cooling hyderabad, inverter AC repair HITEC city" },
      { title: "Microwave Repair Hyderabad", keywords: "microwave repair near me hyderabad, microwave not heating gachibowli, turntable fix kukatpally, magnetron repair madhapur, samsung microwave repair hyderabad, lg microwave service kondapur, convection microwave repair banjara hills" },
      { title: "Dryer Repair Hyderabad", keywords: "dryer repair near me hyderabad, dryer not drying gachibowli, drum noise fix madhapur, heating element repair kukatpally, samsung dryer repair hyderabad, lg dryer service kondapur, belt repair HITEC city" },
      { title: "Dishwasher Repair Hyderabad", keywords: "dishwasher repair near me hyderabad, dishwasher not draining gachibowli, spray arm fix madhapur, pump motor kukatpally, bosch dishwasher repair hyderabad, ifb dishwasher service kondapur, dishwasher leak repair banjara hills" },
    ],
    faqs: [
      { q: "How quickly can I get appliance repair in Hyderabad?", a: "We typically arrive within 60-90 minutes across Hyderabad, including Gachibowli, Madhapur, HITEC City, Kukatpally, Kondapur, Banjara Hills, and Jubilee Hills areas." },
      { q: "Do you provide washing machine repair in Gachibowli & HITEC City?", a: "Yes, we cover all of Gachibowli, HITEC City, Madhapur, Financial District, and the wider Hyderabad area for washing machine, fridge, AC, and all major appliance repairs." },
      { q: "What brands do you service in Hyderabad?", a: "We service Samsung, LG, Whirlpool, Bosch, IFB, Haier, Godrej, Voltas, Daikin, and all major brands across Hyderabad & Secunderabad." },
      { q: "Is there a service charge for doorstep repair in Hyderabad?", a: "We offer free diagnosis. You only pay for the repair and parts — no hidden charges. Transparent pricing guaranteed across Hyderabad." },
      { q: "Which areas in Hyderabad do you cover?", a: "We serve Gachibowli, Madhapur, HITEC City, Kukatpally, Kondapur, Banjara Hills, Jubilee Hills, Ameerpet, Begumpet, Miyapur, Manikonda, Tolichowki, Mehdipatnam, LB Nagar, Dilsukhnagar, Uppal, and all major Hyderabad localities." },
    ],
  },
  {
    slug: "secunderabad",
    name: "Secunderabad",
    headline: "Expert Appliance Repair\nin Secunderabad",
    subheadline: "Professional home appliance servicing across Secunderabad — Bowenpally, Trimulgherry, Tarnaka, Marredpally, Begumpet, Karkhana, Paradise, Alwal & more.",
    metaTitle: "Appliance Repair Secunderabad | Washing Machine, AC, Fridge Repair Near Me – Arrowmind",
    metaDescription: "Reliable appliance repair in Secunderabad. Doorstep washing machine, refrigerator, AC, microwave & dryer repair by certified technicians. Same-day service in Bowenpally, Tarnaka, Marredpally, Karkhana & all Secunderabad areas.",
    keywords: "appliance repair secunderabad, washing machine repair secunderabad, fridge repair secunderabad, AC service secunderabad, microwave repair secunderabad, appliance repair near me secunderabad, home appliance repair bowenpally, doorstep repair tarnaka, appliance service marredpally, washing machine repair near me secunderabad, refrigerator repair near me secunderabad, AC repair near me secunderabad, appliance repair karkhana, appliance service paradise, fridge repair alwal, AC service trimulgherry, best appliance repair secunderabad, same day repair secunderabad",
    heroText: "Secunderabad's leading appliance service — covering Bowenpally, Trimulgherry, Tarnaka, Marredpally, Karkhana, Paradise, Alwal & surrounding areas.",
    ctaText: "Book a Repair in Secunderabad",
    appliances: [
      { title: "Washing Machine Repair Secunderabad", keywords: "washing machine repair near me secunderabad, top load repair bowenpally, front load service marredpally, samsung washing machine repair secunderabad, lg washing machine repair tarnaka, motor fix karkhana, drain pump issue paradise" },
      { title: "Refrigerator Repair Secunderabad", keywords: "fridge repair near me secunderabad, fridge gas refill bowenpally, cooling issue marredpally, compressor service trimulgherry, samsung fridge repair secunderabad, lg refrigerator repair tarnaka, double door fridge karkhana" },
      { title: "AC Repair & Service Secunderabad", keywords: "AC repair near me secunderabad, AC installation bowenpally, split AC gas charge marredpally, deep cleaning tarnaka, AC not cooling secunderabad, daikin AC service karkhana, voltas AC repair paradise, inverter AC repair alwal" },
      { title: "Microwave Repair Secunderabad", keywords: "microwave repair near me secunderabad, microwave sparking bowenpally, not heating marredpally, magnetron repair tarnaka, samsung microwave repair secunderabad, control panel fix karkhana" },
      { title: "Dryer Repair Secunderabad", keywords: "dryer repair near me secunderabad, dryer belt repair bowenpally, heating issue marredpally, timer fix tarnaka, samsung dryer repair secunderabad, condenser dryer service karkhana" },
      { title: "Dishwasher Repair Secunderabad", keywords: "dishwasher repair near me secunderabad, dishwasher not cleaning bowenpally, drain pump marredpally, inlet valve tarnaka, bosch dishwasher repair secunderabad, error codes karkhana" },
    ],
    faqs: [
      { q: "Do you offer same-day appliance repair in Secunderabad?", a: "Yes! We offer same-day service across Secunderabad. Our technicians can reach most areas within 60-90 minutes of booking." },
      { q: "Do you cover Bowenpally and Trimulgherry for repairs?", a: "Absolutely. We serve Bowenpally, Trimulgherry, Tarnaka, Marredpally, Karkhana, Paradise, Alwal, Bolaram, and all surrounding areas in Secunderabad." },
      { q: "Which areas in Secunderabad do you serve?", a: "We cover Bowenpally, Trimulgherry, Marredpally, West Marredpally, Tarnaka, Karkhana, Paradise, Alwal, Bolaram, Picket, Lal Bazaar, Clock Tower, Ranigunj, Begumpet, and all major Secunderabad localities." },
      { q: "Are your technicians certified in Secunderabad?", a: "Yes, all our technicians are trained and certified professionals with 3+ years of experience in appliance repair." },
      { q: "Do you also serve Hyderabad from Secunderabad?", a: "Yes, we cover both Secunderabad and Hyderabad including Gachibowli, Madhapur, Kukatpally, HITEC City, and all surrounding areas." },
    ],
  },
];

export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find((c) => c.slug === slug);
