// src/lib/data/countries/north-america/canada.ts
import type { VisaInfo } from '$lib/types/visa';

export const canadaData: Record<string, VisaInfo> = {
  "United States": {
    ease: "Easy",
    freeLength: "180 days",
    workPolicy: "Not allowed on visitor status",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa-free",
    region: "North America",
    
    duration: 180,
    cost: 0,
    applicationTime: "None required",
    entryType: "Multiple",
    extensionsPossible: true,
    extensionDuration: 180
  },
  "United Kingdom": {
    ease: "Easy", 
    freeLength: "180 days",
    workPolicy: "Not allowed on visitor status",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa-free",
    region: "North America",
    
    duration: 180,
    cost: 0,
    applicationTime: "None required",
    entryType: "Multiple",
    extensionsPossible: true,
    extensionDuration: 180
  },
  "Germany": {
    ease: "Easy",
    freeLength: "180 days",
    workPolicy: "Not allowed on visitor status", 
    nomadVisa: false,
    incomeReq: "",
    category: "Visa-free",
    region: "North America",
    
    duration: 180,
    cost: 0,
    applicationTime: "None required",
    entryType: "Multiple",
    extensionsPossible: true,
    extensionDuration: 180
  },
  "Australia": {
    ease: "Easy",
    freeLength: "180 days", 
    workPolicy: "Not allowed on visitor status",
    nomadVisa: false,
    incomeReq: "",
    category: "eTA required",
    region: "North America",
    
    duration: 180,
    cost: 7, // eTA fee
    applicationTime: "Minutes (eTA)",
    entryType: "Multiple",
    extensionsPossible: true,
    extensionDuration: 180
  },
  "France": {
    ease: "Easy",
    freeLength: "180 days",
    workPolicy: "Not allowed on visitor status",
    nomadVisa: false, 
    incomeReq: "",
    category: "Visa-free",
    region: "North America",
    
    duration: 180,
    cost: 0,
    applicationTime: "None required",
    entryType: "Multiple",
    extensionsPossible: true,
    extensionDuration: 180
  },
  "Japan": {
    ease: "Easy",
    freeLength: "180 days",
    workPolicy: "Not allowed on visitor status",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa-free", 
    region: "North America",
    
    duration: 180,
    cost: 0,
    applicationTime: "None required",
    entryType: "Multiple",
    extensionsPossible: true,
    extensionDuration: 180
  },
  "South Korea": {
    ease: "Easy",
    freeLength: "180 days",
    workPolicy: "Not allowed on visitor status",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa-free",
    region: "North America",
    
    duration: 180,
    cost: 0,
    applicationTime: "None required", 
    entryType: "Multiple",
    extensionsPossible: true,
    extensionDuration: 180
  },
  "Thailand": {
    ease: "Medium",
    freeLength: "None",
    workPolicy: "Not allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Proof of funds required",
    category: "Tourist Visa Required",
    region: "North America",
    
    duration: 0, // Up to 6 months, determined at border
    cost: 100, // CAD - Visitor visa fee
    applicationTime: "2-4 weeks",
    entryType: "Multiple (up to 10 years)",
    extensionsPossible: true,
    extensionDuration: 6 // Months
  },
  "China": {
    ease: "Hard",
    freeLength: "None", 
    workPolicy: "Not allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Proof of funds required",
    category: "Tourist Visa Required",
    region: "North America",
    
    duration: 0, // Determined at border, up to 6 months
    cost: 100, // CAD
    applicationTime: "4-8 weeks",
    entryType: "Multiple (up to 10 years)", 
    extensionsPossible: true,
    extensionDuration: 6 // Months
  },
  "India": {
    ease: "Hard",
    freeLength: "None",
    workPolicy: "Not allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Proof of funds required",
    category: "Tourist Visa Required",
    region: "North America",
    
    duration: 0, // Up to 6 months
    cost: 100, // CAD
    applicationTime: "2-6 weeks", 
    entryType: "Multiple (up to 10 years)",
    extensionsPossible: true,
    extensionDuration: 6 // Months
  },
  "Brazil": {
    ease: "Medium",
    freeLength: "None",
    workPolicy: "Not allowed on tourist visa", 
    nomadVisa: false,
    incomeReq: "Proof of funds required",
    category: "eTA required",
    region: "North America",
    
    duration: 180,
    cost: 7, // eTA fee
    applicationTime: "Minutes (eTA)",
    entryType: "Multiple",
    extensionsPossible: true,
    extensionDuration: 180
  },
  "Mexico": {
    ease: "Easy",
    freeLength: "180 days",
    workPolicy: "Not allowed on visitor status",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa-free",
    region: "North America",
    
    duration: 180,
    cost: 0,
    applicationTime: "None required",
    entryType: "Multiple",
    extensionsPossible: true, 
    extensionDuration: 180
  }
};