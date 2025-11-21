// /src/lib/data/countries/europe/caucasus/armenia.ts
import type { VisaInfo } from '$lib/types/visa';

export const armeniaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      region: "Europe",           // ← MAIN REGION
      subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    }
};