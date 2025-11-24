//src/lib/data/countries/southeast-asia/thailand.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

// FLIGHT PATTERN DATA (new - destination-focused)
export const thailandFlightPattern: FlightPattern = {
  country: "Thailand",
  cities: ["Bangkok", "Phuket", "Chiang Mai"],
  cheapestMonths: ["May", "June", "September"],
  expensiveMonths: ["December", "January"], 
  sweetSpot: ["February", "March", "October", "November"],
  averagePrice: 800,
  alternativeRoutes: "Fly to Kuala Lumpur first, then budget airline to Bangkok",
  planningTips: ["Book 2-3 months in advance", "Avoid Songkran festival in April"],
  notes: "Islands are more expensive than northern cities"
};

// NEW: Living costs data (in Thai Baht)
export const thailandLivingCosts: LivingCostData = {
  country: "Thailand",
  countryCode: "Thailand",
  cities: ["Bangkok", "Chiang Mai", "Phuket", "Krabi"],
  currency: "THB",
  
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 300,
        budgetHotel: 800,
        guesthouse: 600
      },
      midrange: {
        hotel: 1500,
        apartment: 1200,
        boutiqueHotel: 2000
      },
      luxury: {
        hotel: 4000,
        resort: 6000,
        villa: 8000
      },
      monthlyRent: {
        studio: 15000,
        oneBedroom: 25000,
        threeBedroom: 45000
      }
    },
    
    dailyLiving: {
      budget: 800,    // 800 THB per day
      midrange: 1600, // 1600 THB per day
      luxury: 3500,   // 3500 THB per day
      breakdown: {
        food: 400,
        transport: 150,
        activities: 200,
        misc: 50
      }
    },
    
    transportation: {
      localBus: 20,
      taxi: 100,
      intercityBus: 300,
      train: 500
    },
    
    food: {
      streetFood: 50,
      restaurantMeal: 200,
      groceryWeekly: 1500
    }
  },
  
  tips: [
    "Eat street food to save money - 50-100 THB per meal",
    "Use BTS/MRT in Bangkok instead of taxis",
    "Book accommodations in advance during high season (Nov-Feb)",
    "Negotiate prices in local markets (except department stores)"
  ],
  
  bestAreas: {
    budget: ["Khao San Road", "Sukhumvit Soi 38", "Old City Chiang Mai"],
    midrange: ["Ari", "Thong Lor", "Nimmanhaemin Chiang Mai"],
    luxury: ["Sathorn", "Riverside", "Kamala Beach Phuket"]
  },
  
  lastUpdated: "2024-01-15"
};

export const thailandData: Record<string, VisaInfo> = {
  "United States": {
    ease: "Visa on arrival / Online application",
    freeLength: "30 days (extendable)",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: true,
    incomeReq: "$2,000/month",
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
    incomeReq: "$2,000/month",
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

// FLIGHT COST DATA (new - origin-specific)
export const belizeFlightData: FlightCostData = {
  'United States': {
    economy: 800,
    business: 2000,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['BKK', 'DMK'],
    airlines: ['Thai Airways', 'United', 'Delta', 'Qatar']
  },
  'United Kingdom': {
    economy: 600,
    business: 1500,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['BKK'],
    airlines: ['British Airways', 'Thai Airways', 'Qatar']
  }
  // Add other origin countries...
};