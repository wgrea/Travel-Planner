//src/lib/data/countries/southeast-asia/malaysia.ts
import type { VisaInfo } from '$lib/types/visa';

export const malaysiaData: Record<string, VisaInfo> = {
  "United States": {
    ease: "Online application",
    freeLength: "90 days",
    workPolicy: "Digital field only on DE Rantau Visa", // Fixed work policy
    nomadVisa: true,
    incomeReq: "$24,000/year",
    category: "Easy",
    region: "Southeast Asia", // Added region
    duration: 90,
    cost: 0,
    applicationTime: "Online application",
    entryType: "multiple",
    extensionsPossible: true,
    extensionDuration: 365 // DE Rantau can extend up to 12 months
    }
    // Add more passport countries...
};