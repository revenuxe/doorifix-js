import type { CityData } from "@/data/cities";
import type { ServiceData } from "@/data/services";

export interface LocalGuide {
  heading: string;
  intro: string;
  planning: string;
  questions: { q: string; a: string }[];
  services: Record<string, { summary: string; advice: string }>;
}

const bangalore: LocalGuide = {
  heading: "Plan an appliance repair visit in Bangalore",
  intro: "Choose the appliance that needs attention, then select your Bangalore locality. A washer that stops mid-cycle, a refrigerator that runs without cooling and an AC with weak airflow need different checks; describing the symptom is more useful than guessing which part has failed.",
  planning: "For an apartment visit, share the building name, block, floor and entry requirements. If the appliance was recently moved or reconnected, mention that when booking. Tell the team whether the fault happens on every cycle or only at certain times so the technician can plan the inspection.",
  questions: [
    { q: "Are Bangalore and Bengaluru different service locations?", a: "No. Bangalore and Bengaluru refer to the same city. Use the Bangalore locality list for both spellings; you do not need to make separate bookings." },
    { q: "What helps arrange a visit to a Bangalore apartment?", a: "Provide your locality, building and block name, floor, contact number and any visitor-entry instructions. Confirm the available appointment window with the team before making access arrangements." },
    { q: "Can the repair be completed during the first visit?", a: "That depends on the diagnosis, access to the appliance and whether the correct model-specific part is available. Ask for the proposed repair, total quote and any return-visit requirement before approving work." },
  ],
  services: {
    "washing-machine-repair": { summary: "Bangalore washing machine repair for spin interruptions, drainage faults and leaks. Share the load type, error code and the cycle stage where the machine stops.", advice: "Tell us if the machine was moved recently or if the water flow is slow. Mention when the fault starts during the cycle so the technician knows what to check first." },
    "refrigerator-repair": { summary: "Arrange refrigerator diagnosis in Bangalore for uneven cooling, frost buildup, noisy running or water collecting beneath the cabinet.", advice: "Explain whether both compartments are warm or only the fresh-food section. Mention any recent move, door-seal damage or change in temperature settings. These observations help separate an airflow problem from a cooling-system fault." },
    "ac-repair-service": { summary: "Book an AC visit in Bangalore for reduced airflow, indoor water drips, unusual noise or cooling that fades after startup.", advice: "Tell the team when the filters were last cleaned and whether the outdoor unit is accessible. A dirty coil, blocked drain and refrigerant leak require different work; request diagnosis before agreeing to a gas refill." },
    "microwave-repair": { summary: "Microwave repair in Bangalore covers heating interruptions, turntable faults, display problems and doors that do not latch correctly.", advice: "Record the mode that fails: microwave, grill or convection. If there is sparking, smoke or a damaged door, stop using the appliance and describe the incident when booking. Internal high-voltage parts should only be checked by a technician." },
    "dryer-repair": { summary: "Arrange dryer service in Bangalore for damp loads, long cycles, drum noise and heating that cuts out before clothes are dry.", advice: "Identify whether your dryer is vented, condenser or heat-pump based. Mention where the exhaust or condensate drain runs. A drying complaint can involve airflow, moisture sensing or heating, so the dryer type matters." },
    "dishwasher-repair": { summary: "Dishwasher diagnosis in Bangalore for standing water, poor wash results, inlet errors and leakage around the door.", advice: "Note whether residue affects the entire load or one rack. Share the detergent used, any error code and whether water remains after the cycle. These details help the technician distinguish circulation, drainage and loading issues." },
  },
};
const chennai: LocalGuide = {
  heading: "Choosing appliance service in Chennai",
  intro: "Start with the problem you can observe: rooms taking longer to cool, a fridge with a warm compartment or a washing machine leaving water in the drum. Chennai bookings can be made by appliance or locality, with a repair plan agreed after the equipment is checked.",
  planning: "For cooling appliances, tell the team where the indoor and outdoor equipment is installed and whether access needs arranging. For laundry or kitchen equipment, mention built-in cabinets, stacked appliances or restricted water connections. The full address and a landmark help confirm the visit location.",
  questions: [
    { q: "Should I book AC cleaning or AC repair in Chennai?", a: "Describe the cooling, airflow, noise or leakage symptom first. Cleaning may help a dirty filter or coil, but electrical faults and refrigerant leaks need diagnosis. Ask the team which visit is appropriate for your symptoms." },
    { q: "What information is needed for a Chennai booking?", a: "Share your locality, full address, landmark, appliance brand and model, and a brief account of the fault. Include access details for outdoor AC units or built-in appliances and confirm the visit window." },
    { q: "Is a same-day visit available in Chennai?", a: "The team confirms availability for your address when you book. The visit time and repair completion time are separate: testing or ordering a replacement part can require additional time." },
  ],
  services: {
    "washing-machine-repair": { summary: "Water left in the drum, spin issues or leaks during wash.", advice: "Tell us if the washer fills normally and when the fault starts. Mention any leak near the power point or interrupted water supply." },
    "refrigerator-repair": { summary: "Fridge repair in Chennai for a warm food compartment, excessive frost, continuous running or water leakage.", advice: "Describe the cooling in the freezer and refrigerator separately, and mention door gaps or items blocking internal vents. Do not assume every cooling problem needs refrigerant: airflow, seals, sensors and the compressor need separate checks." },
    "ac-repair-service": { summary: "Chennai AC repair and servicing for weak cooling, indoor dripping, fan noise and units that switch off unexpectedly.", advice: "Share the AC capacity, room size and whether cooling is weak throughout the day or only after extended use. Confirm outdoor-unit access before the visit. A leak check should precede any recommendation to top up refrigerant." },
    "microwave-repair": { summary: "Book microwave diagnosis in Chennai when food stays cold, the turntable stops or the display and controls behave intermittently.", advice: "Tell the technician whether the appliance is countertop or built-in and which cooking modes still work. Leave internal covers closed, even when unplugged; microwave components can retain hazardous electrical energy." },
    "dryer-repair": { summary: "Dryer repair in Chennai for clothes remaining damp, a drum that will not turn and cycles that finish too early.", advice: "Let the technician know whether the machine collects water in a tank or drains through a hose. Report any tank warning or filter indicator. Restricted airflow and a blocked condensate route can produce similar drying symptoms." },
    "dishwasher-repair": { summary: "Chennai dishwasher service for wash residue, unusual pump noise, drainage errors and water appearing below the machine.", advice: "Describe whether the problem began after a detergent change, installation work or a change in water supply. Confirm access to the inlet and drain connections for built-in units. The quote should distinguish cleaning, adjustment and replacement parts." },
  },
};
const mangalore: LocalGuide = {
  heading: "Arrange appliance repairs across Mangalore",
  intro: "Use the Mangalore service list to choose washing machine, refrigerator, AC, microwave, dryer or dishwasher support. The locality page helps identify your visit address; the appliance page explains the symptoms and checks relevant to the repair.",
  planning: "Include a landmark and confirm the full address, especially when booking for a locality outside the central city. Tell the team if equipment is in a utility balcony, an enclosed cabinet or an upper-floor installation. Confirm technician availability for the exact address before planning the day around a visit.",
  questions: [
    { q: "Can I book outside central Mangalore?", a: "The coverage directory includes locations such as Surathkal, Ullal, Mulki and Moodabidri as well as central neighbourhoods. Share your exact address so the team can confirm the appointment availability and any visit charges." },
    { q: "What if the appliance has been unused for a long time?", a: "Mention how long it was unused and what happened when it was restarted. If you notice damaged wiring, a burning smell or water near electrical connections, stop using it and arrange an inspection." },
    { q: "How do I decide whether to repair or replace an appliance?", a: "Compare the diagnosis and written repair quote with the appliance age, overall condition, parts availability and the cost of a suitable replacement. Ask what is covered by the proposed repair before deciding." },
  ],
  services: {
    "washing-machine-repair": { summary: "Drum noise, no spin or water leaking during the cycle.", advice: "Share whether it fills normally and when the fault starts. Mention hose damage or a recent move if relevant." },
    "refrigerator-repair": { summary: "Refrigerator service in Mangalore for loss of cooling, recurring frost, clicking sounds and cabinet or drain leaks.", advice: "Explain whether the fridge stopped after a period of non-use or while running normally. Note the condition of door seals and any visible corrosion without removing covers. The repair decision should account for cabinet condition and replacement-part availability." },
    "ac-repair-service": { summary: "Mangalore AC service for cooling loss, drainage issues, noisy fans and an outdoor unit that does not start.", advice: "Describe where the outdoor unit sits and any visible corrosion or obstruction around it. The technician needs safe access to assess coils, electrical connections and drainage; tell the team in advance if a ladder or building permission may be needed." },
    "microwave-repair": { summary: "Microwave repair in Mangalore for heating failure, intermittent power, a stuck turntable or damaged door-latch operation.", advice: "Share the model number and whether the microwave has been stored or unused recently. Stop operating it if you notice sparking, damage to the door or a burning smell. Ask whether a model-specific part must be ordered before approving the repair." },
    "dryer-repair": { summary: "Mangalore dryer diagnosis for repeated long cycles, clothes staying damp, unusual drum sounds and no-heat faults.", advice: "Tell the team how the dryer vents or removes condensed water and whether a filter warning appears. Mention changes in load size and drying time. The technician can then assess airflow, sensing and drive components in the right order." },
    "dishwasher-repair": { summary: "Dishwasher repair in Mangalore for standing water, poor cleaning, failed filling and pump or door-latch problems.", advice: "If the dishwasher has been unused for a while, describe the first cycle after restarting and any error shown. Share the model and installation type so the team can check access and suitable parts before committing to a repair plan." },
  },
};
export function getLocalGuide(citySlug: string): LocalGuide {
  return citySlug === "chennai" ? chennai : citySlug === "mangalore" ? mangalore : bangalore;
}
export function repairName(service: ServiceData) {
  return service.slug === "ac-repair-service" ? "AC Repair & Service" : `${service.title} Repair`;
}
export function localServiceCopy(city: CityData, service: ServiceData) {
  return getLocalGuide(city.slug).services[service.slug];
}
export function repairCostFactors(service: ServiceData): string[] {
  const parts: Record<string, string> = {
    "washing-machine-repair": "Drain pump, door lock, bearings or control-board condition",
    "refrigerator-repair": "Cooling-system, fan, defrost component or seal diagnosis",
    "ac-repair-service": "Cleaning scope, leak testing, electrical faults and installation access",
    "microwave-repair": "Heating circuit, door interlock, controls and compatible parts",
    "dryer-repair": "Airflow path, belt, heater, sensors and dryer technology",
    "dishwasher-repair": "Inlet, circulation pump, drain pump, seals and installation access",
  };
  return [parts[service.slug], "Appliance model, age and availability of the required part", "Labour, visit charges and any follow-up work included in the quote"];
}
