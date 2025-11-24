// /src/lib/data/countries/europe/caucasus/azerbaijan.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const azerbaijanFlightPattern: FlightPattern = {
  country: "Azerbaijan",
  cities: ["Baku", "Ganja", "Sheki"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["July", "August"],
  sweetSpot: ["April", "May", "September", "October"],
  averagePrice: 900,
  planningTips: ["E-visa available online", "Modern infrastructure in Baku"],
  notes: "Mix of modern architecture and ancient history"
};

export const azerbaijanLivingCosts: LivingCostData = {
  country: "Azerbaijan",
  countryCode: "Azerbaijan",
  cities: ["Baku", "Gabala", "Sheki", "Ganja", "Lankaran", "Quba", "Shamakhi"],
  currency: "AZN",
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 30, // ~$18 USD
        budgetHotel: 60, // ~$35 USD
        guesthouse: 45 // ~$26 USD
      },
      midrange: {
        hotel: 120, // ~$71 USD
        apartment: 100, // ~$59 USD
        boutiqueHotel: 180 // ~$106 USD
      },
      luxury: {
        hotel: 300, // ~$176 USD
        resort: 450, // ~$265 USD
        villa: 700 // ~$412 USD
      },
      monthlyRent: {
        studio: 400, // ~$235 USD
        oneBedroom: 600, // ~$353 USD
        threeBedroom: 1000 // ~$588 USD
      }
    },
    dailyLiving: {
      budget: 40, // ~$24 USD
      midrange: 100, // ~$59 USD
      luxury: 250, // ~$147 USD
      breakdown: {
        food: 20, // ~$12 USD
        transport: 8, // ~$4.70 USD
        activities: 10, // ~$5.88 USD
        misc: 2 // ~$1.18 USD
      }
    },
    transportation: {
      localBus: 0.3, // ~$0.18 USD
      taxi: 5, // ~$2.94 USD per km
      intercityBus: 10, // ~$5.88 USD
      train: 20 // ~$11.76 USD (Baku to Ganja)
    },
    food: {
      streetFood: 5, // ~$2.94 USD
      restaurantMeal: 25, // ~$15 USD
      groceryWeekly: 80 // ~$47 USD
    }
  },
  tips: [
    "Try plov (rice dish) and kebabs - they're national specialties",
    "Visit the Flame Towers in Baku for amazing city views",
    "Use Bolt app for reliable taxi service",
    "Carry cash as credit cards aren't widely accepted outside Baku",
    "Learn basic Azerbaijani or Russian phrases",
    "Visit during spring (April-May) for pleasant weather",
    "Try local tea with jam - it's a traditional way to drink tea",
    "Explore both modern Baku and ancient regions like Sheki"
  ],
  bestAreas: {
    budget: [
      "Old City (Icherisheher), Baku",
      "Sheki Center", 
      "Ganja downtown",
      "Gabala budget hotels"
    ],
    midrange: [
      "Nasimi, Baku",
      "Gabala resorts",
      "Sheki historic area",
      "Lankaran coastal area"
    ],
    luxury: [
      "Khagani, Baku",
      "Flame Towers area, Baku",
      "Gabala luxury resorts",
      "Shamakhi mountain hotels"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const azerbaijanData: Record<string, VisaInfo> = {
    'United States': {
      ease: "E-Visa available",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 25,
      applicationTime: "3 business days",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60,
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "30 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "single",
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'United Kingdom': {
      ease: "E-Visa available",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 25,
      applicationTime: "3 business days",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60,
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    }
};