// Areas served per city. Drives /:city/:area dynamic landing pages.

export const cityAreas: Record<string, string[]> = {
  kochi: [
    "Edappally", "Kakkanad", "Fort Kochi", "Vyttila", "Aluva",
    "Palarivattom", "Kaloor", "Ravipuram", "Panampilly Nagar", "Tripunithura",
    "Maradu", "Thevara", "Kalamassery", "Thrikkakara", "Cheranalloor",
    "Mattancherry", "Vennala", "Elamakkara", "Edachira", "Chottanikkara",
  ],
  trivandrum: [
    "Technopark", "Kazhakkoottam", "Pattom", "Kowdiar", "Vazhuthacaud",
    "Kesavadasapuram", "Sasthamangalam", "Vellayambalam", "Peroorkada", "Nedumangad",
    "Attingal", "Neyyattinkara", "Balaramapuram", "Vattiyoorkavu", "Pothencode",
    "Kovalam", "Thampanoor", "Palayam", "Medical College", "Vizhinjam",
  ],
  kozhikode: [
    "Mavoor Road", "Palayam", "Nadakkav", "Feroke", "Beypore",
    "Ramanattukara", "Kallai", "Mananchira", "Vellayil", "Chevayur",
    "Pottammal", "Eranhipalam", "West Hill", "East Hill", "Cherootty Road",
    "Kundayithode", "Olavanna", "Atholi", "Mukkam", "Koyilandy",
  ],
  thrissur: [
    "Swaraj Round", "Punkunnam", "Ollur", "Wadakkanchery", "Irinjalakuda",
    "Chalakudy", "Ayyanthole", "Poonkunnam", "Kuriachira", "Mannuthy",
    "Pullazhi", "Amala Nagar", "Vellanikkara", "Kuttoor", "Patturaikkal",
    "Thrissur East", "Thrissur West", "Nadathara", "Kodakara", "Cherpu",
  ],
  kollam: [
    "Chinnakada", "Asramam", "Kadappakada", "Paravur", "Punalur",
    "Karunagappally", "Kottiyam", "Kundara", "Anchalummoodu", "Thangassery",
    "Eravipuram", "Vadakkevila", "Polayathode", "Kilikollur", "Thattamala",
    "Sasthamcotta", "Mukhathala", "Anchal", "Pathanapuram", "Kottarakkara",
  ],
  hyderabad: [
    "Gachibowli", "Madhapur", "HITEC City", "Kukatpally", "Kondapur",
    "Banjara Hills", "Jubilee Hills", "Ameerpet", "Begumpet", "Miyapur",
    "Manikonda", "Tolichowki", "Mehdipatnam", "Attapur", "Narsingi",
    "Financial District", "Nallagandla", "Chandanagar", "LB Nagar", "Dilsukhnagar",
    "Uppal", "Habsiguda", "Tarnaka", "Malkajgiri", "Sainikpuri",
  ],
  secunderabad: [
    "Bowenpally", "Trimulgherry", "Marredpally", "West Marredpally",
    "Secunderabad East", "Tirumalagiri", "Alwal", "Bolaram",
    "Karkhana", "Paradise", "Patny", "Ranigunj",
    "Begumpet", "Picket", "Lal Bazaar", "Clock Tower",
  ],
  bangalore: [
    "Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "Marathahalli",
    "Electronic City", "Jayanagar", "JP Nagar", "BTM Layout", "Hebbal",
    "Yelahanka", "HBR Layout", "Banashankari", "Rajajinagar", "Malleshwaram",
    "Sarjapur Road", "Bellandur", "Bommanahalli", "Kalyan Nagar", "Banaswadi",
    "Frazer Town", "MG Road", "Domlur", "Kengeri", "RT Nagar",
  ],
  mangalore: [
    "Hampankatta", "Kadri", "Bejai", "Kankanady", "Bunder",
    "Surathkal", "Mangaladevi", "Bondel", "Pumpwell", "Falnir",
    "Balmatta", "Lalbagh", "Attavar", "Derebail", "Bejai New Road",
    "Kulshekar", "Urwa", "Bikarnakatte", "Kulai", "Mulky",
  ],
};

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const getAreaByCityAndSlug = (city: string, areaSlug: string): string | undefined => {
  const list = cityAreas[city];
  if (!list) return undefined;
  return list.find((a) => slugify(a) === areaSlug);
};
