// /src/lib/data/countries/europe/caucasus/georgia.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const georgiaFlightPattern: FlightPattern = {
  country: "Georgia",
  cities: ["Tbilisi", "Batumi", "Kutaisi"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["July", "August"],
  sweetSpot: ["March", "April", "May", "September", "October"],
  averagePrice: 800,
  planningTips: ["Wizz Air has good deals from Europe", "Visa-free for most nationalities"],
  notes: "Excellent food and wine, very affordable once you arrive"
};

export const georgiaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Instant (no application needed)",
      freeLength: "365 days",
      workPolicy: "Visa-free remote work allowed",
      nomadVisa: true,
      incomeReq: "None required",
      category: "Instant",
      duration: 365,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",          
      region: "Europe",           // ← MAIN REGION
      subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "365 days",
      workPolicy: "Visa-free remote work allowed",
      nomadVisa: true,
      incomeReq: "None required",
      category: "Instant",
      duration: 365,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      region: "Europe",           // ← MAIN REGION
      subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "365 days",
      workPolicy: "Visa-free remote work allowed",
      nomadVisa: true,
      incomeReq: "None required",
      category: "Instant",
      duration: 365,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      region: "Europe",           // ← MAIN REGION
      subregion: "Caucasus",      // ← SUBREGION (optional)
    }
};