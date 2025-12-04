// src/lib/data/countries/southeast-asia/thailand/visa.ts
import type { VisaInfo } from '$lib/types/visa';

export const thailandVisaData: Record<string, VisaInfo> = {
  // US citizens → Thailand
  "United States": {
    ease: "Visa on arrival / Online application",
    freeLength: "30 days (extendable)",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: true,
    incomeReq: "2000/month", // ← Keep as string, just remove the $ symbol
    category: "Easy",
    region: "Southeast Asia",
    
    // New fields
    duration: 30,
    cost: 0,
    applicationTime: "On arrival",
    entryType: "single",
    extensionsPossible: true,
    extensionDuration: 30
  },
  "Germany": {
    ease: "Visa-free",
    freeLength: "30 days",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: true,
    incomeReq: "2000/month", // ← Keep as string, just remove the $ symbol
    category: "Easy",
    region: "Southeast Asia",
    
    // New fields
    duration: 30,
    cost: 0,
    applicationTime: "Not applicable",
    entryType: "single", 
    extensionsPossible: true,
    extensionDuration: 30
  }
  // Add other home countries...
};