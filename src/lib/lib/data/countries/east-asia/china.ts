// /src/lib/data/countries/east-asia/china.ts
import type { VisaInfo } from '$lib/types/visa';

export const chinaData: Record<string, VisaInfo> = {
  "United States": {
    ease: "Medium", // Research this!
    freeLength: "None", // Or "X days" if visa-free
    workPolicy: "Not allowed",
    nomadVisa: false,
    incomeReq: "",
    category: "Tourist Visa Required",
    region: "East Asia",
    duration: 0, // Research: 30, 60, or 90 days?
    cost: 0, // Research: ~$140-200?
    applicationTime: "", // Research: "4-10 business days"
    entryType: "Single/Multiple", // Research which
    extensionsPossible: false, // Usually not
    extensionDuration: 0
  }
};