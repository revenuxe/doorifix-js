// Common fault types per appliance, keyed by service slug. Mirrors the
// issues shown on each service's own detail page (src/pages/ServiceDetail.tsx)
// so brand pages can build long-tail "{Brand} {Appliance} {Issue}" SEO cards
// without duplicating the full per-service copy.
export const applianceIssues: Record<string, string[]> = {
  "washing-machine-repair": ["Not spinning", "Water leakage", "Drainage problem", "Drum noise", "Door lock fault", "Power or PCB issue"],
  "refrigerator-repair": ["Not cooling", "Gas leakage", "Compressor fault", "Ice buildup", "Door seal issue", "Water leakage"],
  "ac-repair-service": ["Not cooling", "Gas refill", "Water dripping", "Deep cleaning", "Compressor issue", "Installation support"],
  "microwave-repair": ["Not heating", "Sparking", "Turntable issue", "Door switch fault", "Display problem", "Power failure"],
  "dryer-repair": ["Not drying", "No heat", "Drum noise", "Belt issue", "Sensor fault", "Vent blockage"],
  "dishwasher-repair": ["Not draining", "Not cleaning", "Water leakage", "Spray arm issue", "Pump fault", "Door latch fault"],
};
