// Areas served per city. Drives /:city/:area dynamic landing pages.
export const cityAreas: Record<string, string[]> = {
  bangalore: [
    "Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "Marathahalli",
    "Electronic City", "Jayanagar", "JP Nagar", "BTM Layout", "Hebbal",
    "Yelahanka", "HBR Layout", "Banashankari", "Rajajinagar", "Malleshwaram",
    "Sarjapur Road", "Bellandur", "Bommanahalli", "Kalyan Nagar", "Banaswadi",
    "Frazer Town", "MG Road", "Domlur", "Kengeri", "RT Nagar",
    "Adugodi", "Agaram", "Akshaya Nagar", "Amruthahalli", "Anand Nagar",
    "Anekal", "Arehalli", "Attibele", "Austin Town", "Avalahalli",
    "Bagalakunte", "Bagalur", "Baiyappanahalli", "Bannerghatta Road",
    "Basavanagudi", "Basaveshwaranagar", "Battarahalli", "Begur", "Benson Town",
    "Bharathi Nagar", "Bilekahalli", "Brookefield", "Budigere", "Byatarayanapura",
    "Chamarajpet", "Chandapura", "Chandra Layout", "Chickpet", "Cooke Town",
    "Cox Town", "CV Raman Nagar", "Dasarahalli", "Devanahalli", "Doddanekundi",
    "Doddaballapur", "Dooravani Nagar", "Ejipura", "Ganganagar", "Girinagar",
    "Gottigere", "HAL", "Hegganahalli", "Hennur",
    "Hennur Road", "Hoodi", "Horamavu", "Hosur Road", "Hulimavu",
    "ISRO Layout", "ITPL", "Jakkur", "Jalahalli", "Jeevan Bima Nagar",
    "Jigani", "K R Puram", "Kadubeesanahalli", "Kadugodi", "Kaggadasapura",
    "Kamakshipalya", "Kammanahalli", "Kanakapura Road", "Kasavanahalli", "Kasturi Nagar",
    "Kathriguppe", "Kengeri Satellite Town", "Kodigehalli", "Kodihalli", "Konanakunte",
    "Kudlu Gate", "Kumaraswamy Layout", "Kundalahalli", "Laggere", "Langford Town",
    "Lavelle Road", "Mahadevapura", "Majestic", "Malleswaram", "Mathikere",
    "Mico Layout", "Munnekollal", "Murugeshpalya", "Nagarbhavi", "Nagawara",
    "Nandini Layout", "Nayandahalli", "Neelasandra", "Nelamangala", "New BEL Road",
    "Old Airport Road", "Old Madras Road", "Padmanabhanagar", "Peenya", "Rajarajeshwari Nagar",
    "Ramamurthy Nagar", "Richmond Town", "Sahakar Nagar", "Sanjay Nagar", "Shanthinagar",
    "Shivajinagar", "Singasandra", "Sunkadakatte", "Thanisandra", "Thanisandra Main Road",
    "Ulsoor", "Uttarahalli", "Varthur", "Vasanth Nagar", "Vidyaranyapura",
    "Vijayanagar", "Vittal Mallya Road", "Wilson Garden", "Yeshwanthpur",
  ],
  bengaluru: [
    "Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "Marathahalli",
    "Electronic City", "Jayanagar", "JP Nagar", "BTM Layout", "Hebbal",
    "Yelahanka", "HBR Layout", "Banashankari", "Rajajinagar", "Malleshwaram",
    "Sarjapur Road", "Bellandur", "Bommanahalli", "Kalyan Nagar", "Banaswadi",
    "Frazer Town", "MG Road", "Domlur", "Kengeri", "RT Nagar",
    "Adugodi", "Agaram", "Akshaya Nagar", "Amruthahalli", "Anand Nagar",
    "Anekal", "Arehalli", "Attibele", "Austin Town", "Avalahalli",
    "Bagalakunte", "Bagalur", "Baiyappanahalli", "Bannerghatta Road",
    "Basavanagudi", "Basaveshwaranagar", "Battarahalli", "Begur", "Benson Town",
    "Bharathi Nagar", "Bilekahalli", "Brookefield", "Budigere", "Byatarayanapura",
    "Chamarajpet", "Chandapura", "Chandra Layout", "Chickpet", "Cooke Town",
    "Cox Town", "CV Raman Nagar", "Dasarahalli", "Devanahalli", "Doddanekundi",
    "Doddaballapur", "Dooravani Nagar", "Ejipura", "Ganganagar", "Girinagar",
    "Gottigere", "HAL", "Hegganahalli", "Hennur",
    "Hennur Road", "Hoodi", "Horamavu", "Hosur Road", "Hulimavu",
    "ISRO Layout", "ITPL", "Jakkur", "Jalahalli", "Jeevan Bima Nagar",
    "Jigani", "K R Puram", "Kadubeesanahalli", "Kadugodi", "Kaggadasapura",
    "Kamakshipalya", "Kammanahalli", "Kanakapura Road", "Kasavanahalli", "Kasturi Nagar",
    "Kathriguppe", "Kengeri Satellite Town", "Kodigehalli", "Kodihalli", "Konanakunte",
    "Kudlu Gate", "Kumaraswamy Layout", "Kundalahalli", "Laggere", "Langford Town",
    "Lavelle Road", "Mahadevapura", "Majestic", "Malleswaram", "Mathikere",
    "Mico Layout", "Munnekollal", "Murugeshpalya", "Nagarbhavi", "Nagawara",
    "Nandini Layout", "Nayandahalli", "Neelasandra", "Nelamangala", "New BEL Road",
    "Old Airport Road", "Old Madras Road", "Padmanabhanagar", "Peenya", "Rajarajeshwari Nagar",
    "Ramamurthy Nagar", "Richmond Town", "Sahakar Nagar", "Sanjay Nagar", "Shanthinagar",
    "Shivajinagar", "Singasandra", "Sunkadakatte", "Thanisandra", "Thanisandra Main Road",
    "Ulsoor", "Uttarahalli", "Varthur", "Vasanth Nagar", "Vidyaranyapura",
    "Vijayanagar", "Vittal Mallya Road", "Wilson Garden", "Yeshwanthpur",
  ],
};

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const getAreaByCityAndSlug = (city: string, areaSlug: string): string | undefined => {
  const list = cityAreas[city];
  if (!list) return undefined;
  return list.find((a) => slugify(a) === areaSlug);
};
