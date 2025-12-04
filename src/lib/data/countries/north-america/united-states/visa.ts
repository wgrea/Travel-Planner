// src/lib/data/countries/north-america/united-states/visa.ts

import type { VisaInfo } from '$lib/types/visa';

export const unitedStatesVisaData: Record<string, VisaInfo> = {
    // Germany → United States
    "Germany": {
    ease: "Medium",
    freeLength: "90 days",
    workPolicy: "Not allowed on ESTA/VWP",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa Waiver Program",
    region: "North America",
    
    duration: 90,
    cost: 21, // ESTA fee
    applicationTime: "Immediate to 72 hours",
    entryType: "Multiple",
    extensionsPossible: false,
    extensionDuration: 0
  },
   // United Kingdom → United States
  "United Kingdom": {
    ease: "Medium", 
    freeLength: "90 days",
    workPolicy: "Not allowed on ESTA/VWP",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa Waiver Program",
    region: "North America",
    
    duration: 90,
    cost: 21,
    applicationTime: "Immediate to 72 hours",
    entryType: "Multiple",
    extensionsPossible: false,
    extensionDuration: 0
  },
  "Australia": {
    ease: "Medium",
    freeLength: "90 days", 
    workPolicy: "Not allowed on ESTA/VWP",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa Waiver Program",
    region: "North America",
    
    duration: 90,
    cost: 21,
    applicationTime: "Immediate to 72 hours",
    entryType: "Multiple", 
    extensionsPossible: false,
    extensionDuration: 0
  },
  "Thailand": {
    ease: "Hard",
    freeLength: "None",
    workPolicy: "Not allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Varies by visa type",
    category: "Tourist Visa Required",
    region: "North America",
    
    duration: 0, // Varies by visa
    cost: 185, // Tourist visa fee
    applicationTime: "1-3 weeks",
    entryType: "Single/Multiple depending on visa",
    extensionsPossible: true,
    extensionDuration: 6 // Months for some visas
  },
  "China": {
    ease: "Hard",
    freeLength: "None", 
    workPolicy: "Not allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Varies by visa type",
    category: "Tourist Visa Required",
    region: "North America",
    
    duration: 0, // Varies by visa type
    cost: 185,
    applicationTime: "1-4 weeks",
    entryType: "Single/Multiple depending on visa",
    extensionsPossible: true,
    extensionDuration: 6
  }
  // Add more nationalities as needed
};