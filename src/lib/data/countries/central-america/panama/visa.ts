// /src/lib/data/countries/central-america/panama/visa.ts
import type { VisaInfo } from '$lib/types/visa';

export const panamaVisaData: Record<string, VisaInfo> = {
    // United States → Panama
    'United States': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    }
};
