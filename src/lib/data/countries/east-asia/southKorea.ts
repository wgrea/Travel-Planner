// /src/lib/data/countries/east-asia/southKorea.ts
import type { VisaInfo } from '$lib/types/visa';

export const southKoreaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free (K-ETA required)",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 10, // K-ETA fee
      applicationTime: "72 hours for K-ETA",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};