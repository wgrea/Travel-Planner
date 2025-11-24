// /src/lib/data/countries/europe/caucasus/georgia.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const georgiaFlightPattern: FlightPattern = {
  country: "Georgia",
  cities: ["Tbilisi", "Batumi", "Kutaisi"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["July", "August"],
  sweetSpot: ["March", "April", "May", "September", "October"],
  averagePrice: 800,
  planningTips: ["Wizz Air has good deals from Europe", "Visa-free for most nationalities"],
  notes: "Excellent food and wine, very affordable once you arrive"
};

export const georgiaLivingCosts: LivingCostData = {
  country: "Georgia",
  countryCode: "Georgia",
  cities: ["Tbilisi", "Batumi", "Kazbegi", "Kutaisi", "Sighnaghi", "Mestia", "Gudauri"],
  currency: "GEL",
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 40, // ~$15 USD
        budgetHotel: 80, // ~$30 USD
        guesthouse: 60 // ~$22 USD
      },
      midrange: {
        hotel: 150, // ~$55 USD
        apartment: 120, // ~$44 USD
        boutiqueHotel: 200 // ~$73 USD
      },
      luxury: {
        hotel: 400, // ~$146 USD
        resort: 600, // ~$219 USD
        villa: 1000 // ~$365 USD
      },
      monthlyRent: {
        studio: 800, // ~$292 USD
        oneBedroom: 1200, // ~$438 USD
        threeBedroom: 2000 // ~$730 USD
      }
    },
    dailyLiving: {
      budget: 50, // ~$18 USD
      midrange: 120, // ~$44 USD
      luxury: 300, // ~$110 USD
      breakdown: {
        food: 25, // ~$9 USD
        transport: 10, // ~$3.65 USD
        activities: 12, // ~$4.38 USD
        misc: 3 // ~$1.10 USD
      }
    },
    transportation: {
      localBus: 1, // ~$0.36 USD
      taxi: 5, // ~$1.83 USD per km
      intercityBus: 30, // ~$11 USD
      train: 50 // ~$18 USD (Tbilisi to Batumi)
    },
    food: {
      streetFood: 10, // ~$3.65 USD
      restaurantMeal: 40, // ~$15 USD
      groceryWeekly: 100 // ~$36.50 USD
    }
  },
  tips: [
    "Try Georgian wine - it's where wine originated and very affordable",
    "Eat khachapuri (cheese bread) and khinkali (dumplings)",
    "Use Bolt or Yandex Taxi for reliable transportation",
    "Visit during September-October for wine harvest season",
    "Learn basic Georgian phrases - locals appreciate the effort",
    "Carry cash as many places don't accept credit cards",
    "Try churchkhela (traditional candy) from local markets",
    "Visit both modern Tbilisi and mountain regions like Kazbegi"
  ],
  bestAreas: {
    budget: [
      "Old Tbilisi",
      "Batumi Boulevard", 
      "Kutaisi Center",
      "Sighnaghi guesthouses"
    ],
    midrange: [
      "Vake, Tbilisi",
      "Batumi New Town",
      "Kazbegi hotels",
      "Gudauri ski resorts"
    ],
    luxury: [
      "Saburtalo, Tbilisi",
      "Batumi seaside resorts",
      "Rooms Hotel Kazbegi",
      "Sighnaghi wine hotels"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const georgiaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Instant (no application needed)",
      freeLength: "365 days",
      workPolicy: "Visa-free remote work allowed",
      nomadVisa: true,
      incomeReq: "None required",
      category: "Instant",
      duration: 365,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",          
      region: "Europe",           // ← MAIN REGION
      subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "365 days",
      workPolicy: "Visa-free remote work allowed",
      nomadVisa: true,
      incomeReq: "None required",
      category: "Instant",
      duration: 365,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      region: "Europe",           // ← MAIN REGION
      subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "365 days",
      workPolicy: "Visa-free remote work allowed",
      nomadVisa: true,
      incomeReq: "None required",
      category: "Instant",
      duration: 365,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      region: "Europe",           // ← MAIN REGION
      subregion: "Caucasus",      // ← SUBREGION (optional)
    }
};