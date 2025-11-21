// /src/lib/data/countries/europe/caucasus/georgia.ts
import type { VisaInfo } from '$lib/types/visa';

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