//src/lib/data/countries/southeast-asia/philippines.ts
import type { VisaInfo } from '$lib/types/visa';

export const philippinesData: Record<string, VisaInfo> = {
  "United States": {
    ease: "Visa-free for 30 days",
    freeLength: "30 days (extendable)",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Easy",
    region: "Southeast Asia",
    
    duration: 30,
    cost: 0,
    applicationTime: "Visa-free",
    entryType: "single",
    extensionsPossible: true,
    extensionDuration: 30
  },
  "Germany": {
    ease: "Visa-free for 30 days",
    freeLength: "30 days",
    workPolicy: "No local work allowed",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Easy",
    region: "Southeast Asia",
    
    duration: 30,
    cost: 0,
    applicationTime: "Visa-free",
    entryType: "single",
    extensionsPossible: true,
    extensionDuration: 30
  }
};