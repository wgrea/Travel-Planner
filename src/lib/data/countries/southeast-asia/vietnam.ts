//src/lib/data/countries/southeast-asia/vietnam.ts
import type { VisaInfo } from '$lib/types/visa';

export const vietnamData: Record<string, VisaInfo> = {
  "United States": {
    ease: "E-visa required",
    freeLength: "30 days (e-visa)",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Moderate",
    region: "Southeast Asia",
    
    duration: 30,
    cost: 25,
    applicationTime: "3-5 days",
    entryType: "single",
    extensionsPossible: true,
    extensionDuration: 30
  },
  "Germany": {
    ease: "Visa-free for 15 days",
    freeLength: "15 days",
    workPolicy: "No local work allowed",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Easy",
    region: "Southeast Asia",
    
    duration: 15,
    cost: 0,
    applicationTime: "Visa-free",
    entryType: "single",
    extensionsPossible: false,
    extensionDuration: 0
  }
};