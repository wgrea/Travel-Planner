// src/lib/data/visa/destinations/south-america/argentina.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData  } from '$lib/types/living-costs';
import type { NomadData } from '$lib/data/nomadData';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const argentinaFlightPattern: FlightPattern = {
  country: "Argentina",
  cities: ["Buenos Aires", "Mendoza", "Bariloche"],
  cheapestMonths: ["May", "June"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["March", "April", "September", "October"],
  averagePrice: 1150,
  planningTips: ["Long domestic flights, consider overnight buses"],
  notes: "Diverse climates from Patagonia to Buenos Aires, opposite seasons from Northern Hemisphere"
};

export const argentinaLivingCosts: LivingCostData = {
  country: "Argentina",
  countryCode: "Argentina", 
  currency: "ARS",
  cities: ["Buenos Aires", "Mendoza", "Bariloche", "Córdoba", "Salta"],
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 12000,      // ~$15 USD
        budgetHotel: 25000, // ~$31 USD
        guesthouse: 18000   // ~$22 USD
      },
      midrange: {
        hotel: 50000,       // ~$61 USD
        apartment: 40000,   // ~$49 USD
        boutiqueHotel: 80000 // ~$98 USD
      },
      luxury: {
        hotel: 150000,      // ~$184 USD
        resort: 250000,     // ~$306 USD
        villa: 400000       // ~$490 USD
      },
      monthlyRent: {
        studio: 150000,     // ~$184 USD
        oneBedroom: 250000, // ~$306 USD
        threeBedroom: 400000 // ~$490 USD
      }
    },
    dailyLiving: {
      budget: 25000,        // ~$31 USD
      midrange: 50000,      // ~$61 USD
      luxury: 100000,       // ~$123 USD
      breakdown: {
        food: 15000,        // ~$18 USD
        transport: 3000,    // ~$4 USD
        activities: 6000,   // ~$7 USD
        misc: 1000          // ~$1 USD
      }
    },
    transportation: {
      localBus: 300,        // ~$0.37 USD
      taxi: 800,            // ~$1 USD per km
      intercityBus: 15000,  // ~$18 USD
      train: 20000          // ~$25 USD (Buenos Aires to Córdoba)
    },
    food: {
      streetFood: 2000,     // ~$2.45 USD
      restaurantMeal: 8000, // ~$9.80 USD
      groceryWeekly: 25000  // ~$31 USD
    }
  },
  tips: [
    "Carry cash as credit cards often have poor exchange rates",
    "Try the famous steak and Malbec wine - world class quality",
    "Use official exchange rates (blue dollar rate is much better)",
    "Visit Patagonia for incredible natural scenery and hiking",
    "Learn some basic Spanish - English isn't widely spoken outside tourist areas",
    "Take advantage of free walking tours in major cities",
    "Try mate tea - it's a cultural ritual",
    "Visit during shoulder season (March-May, September-November)"
  ],
  bestAreas: {
    budget: [
      "San Telmo, Buenos Aires",
      "Palermo Soho, Buenos Aires (hostels)",
      "Mendoza downtown",
      "Bariloche center"
    ],
    midrange: [
      "Palermo Hollywood, Buenos Aires",
      "Recoleta, Buenos Aires",
      "Mendoza wine region",
      "Bariloche lake area"
    ],
    luxury: [
      "Puerto Madero, Buenos Aires",
      "Nordelta, Buenos Aires",
      "Mendoza luxury vineyards",
      "Bariloche luxury resorts"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const argentinaNomadData: NomadData = {
  country: 'Argentina',
  internet: {
    speed: 65,
    reliability: 7,
    coworkingSpaces: 22
  },
  costs: {
    coworkingMonthly: 140,
    simCardMonthly: 10,
    coffeeShopWork: 9
  },
  community: {
    expatSize: 7,
    englishLevel: 4,
    safety: 7
  }
};

// src/lib/data/visa/destinations/south-america/argentina.ts

// Add this city-level cost data
export const argentinaCityCosts = {
  'Buenos Aires': {
    accommodation: {
      budget: 400,    // USD per month
      midrange: 700,
      luxury: 1200
    },
    dailyLiving: {
      budget: 25,
      midrange: 45, 
      luxury: 85
    },
    coworking: {
      monthly: 180,
      dayPass: 15
    },
    transportation: {
      monthly: 20,
      taxi: 0.5
    }
  },
  'Mendoza': {
    accommodation: {
      budget: 280,
      midrange: 450,
      luxury: 800
    },
    dailyLiving: {
      budget: 20,
      midrange: 35,
      luxury: 65
    },
    coworking: {
      monthly: 120,
      dayPass: 10
    },
    transportation: {
      monthly: 15,
      taxi: 0.4
    }
  },
  'Bariloche': {
    accommodation: {
      budget: 350,
      midrange: 550,
      luxury: 900
    },
    dailyLiving: {
      budget: 30,
      midrange: 50,
      luxury: 90
    },
    coworking: {
      monthly: 150,
      dayPass: 12
    },
    transportation: {
      monthly: 25,
      taxi: 0.6
    }
  }
};

export const argentinaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$2,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$2,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$2,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};