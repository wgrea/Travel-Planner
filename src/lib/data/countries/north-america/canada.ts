// src/lib/data/countries/north-america/canada.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';
import type { VisaInfo } from '$lib/types/visa';

export const canadaFlightPattern: FlightPattern = {
  country: "Canada",
  cities: ["Toronto", "Vancouver", "Montreal", "Calgary"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["May", "September"],
  averagePrice: 0,
  planningTips: [
    "Consider flying into secondary airports for better deals",
    "Book domestic flights separately for potential savings",
    "Winter months offer lower prices but colder weather"
  ]
};

export const canadaVisaData: Record<string, VisaInfo> = {
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

export const canadaRouteCost: RouteCostData = {
  'United States': {
    economy: 250,
    business: 600,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['YYZ', 'YVR', 'YUL', 'YYC'],
    airlines: ['Air Canada', 'WestJet', 'American', 'United', 'Delta']
  },
  'United Kingdom': {
    economy: 550,
    business: 1200,
    season: 'Summer peak',
    bestTimeToBook: '3-4 months in advance for summer',
    airports: ['YYZ', 'YVR', 'YUL'],
    airlines: ['Air Canada', 'British Airways', 'WestJet']
  },
  'Australia': {
    economy: 1200,
    business: 2500,
    season: 'year-round',
    bestTimeToBook: '5-6 months in advance',
    airports: ['YVR', 'YYZ'],
    airlines: ['Air Canada', 'Qantas', 'Air New Zealand']
  },
  'Mexico': {
    economy: 400,
    business: 900,
    season: 'Winter peak',
    bestTimeToBook: '2-3 months in advance',
    airports: ['YYZ', 'YVR', 'YUL'],
    airlines: ['Air Canada', 'Aeromexico', 'WestJet']
  },
  'Costa Rica': {
    economy: 450,
    business: 1000,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '3-4 months in advance',
    airports: ['SJO', 'LIR'],
    airlines: ['Air Canada', 'United', 'American']
  },
  'Panama': {
    economy: 500,
    business: 1100,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '3-4 months in advance',
    airports: ['PTY'],
    airlines: ['Air Canada', 'Copa']
  }
};