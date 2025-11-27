// src/lib/data/countries//europe/western-europe/spain.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData  } from '$lib/types/living-costs';
import type { NomadData } from '$lib/data/nomadData';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const spainFlightPattern: FlightPattern = {
  country: "Spain",
  cities: ["Madrid", "Barcelona", "Seville"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["July", "August"],
  sweetSpot: ["April", "May", "September", "October"],
  averagePrice: 875,
  planningTips: ["Consider smaller airlines for inter-Europe flights"],
  notes: "Southern Spain very hot in summer"
};

export const spainLivingCosts: LivingCostData = {
  country: "Spain",
  countryCode: "Spain", 
  currency: "EUR",
  cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Granada"],
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 25,        // ~$27 USD
        budgetHotel: 50,   // ~$54 USD
        guesthouse: 40     // ~$43 USD
      },
      midrange: {
        hotel: 100,        // ~$109 USD
        apartment: 80,     // ~$87 USD
        boutiqueHotel: 150 // ~$163 USD
      },
      luxury: {
        hotel: 250,        // ~$272 USD
        resort: 400,       // ~$435 USD
        villa: 600         // ~$652 USD
      },
      monthlyRent: {
        studio: 600,       // ~$652 USD
        oneBedroom: 800,   // ~$870 USD
        threeBedroom: 1200 // ~$1,304 USD
      }
    },
    dailyLiving: {
      budget: 45,          // ~$49 USD
      midrange: 90,        // ~$98 USD
      luxury: 180,         // ~$196 USD
      breakdown: {
        food: 25,          // ~$27 USD
        transport: 8,      // ~$9 USD
        activities: 10,    // ~$11 USD
        misc: 2            // ~$2 USD
      }
    },
    transportation: {
      localBus: 1.50,      // ~$1.63 USD
      taxi: 8,             // ~$8.70 USD per km
      intercityBus: 25,    // ~$27 USD
      train: 50            // ~$54 USD (Madrid to Barcelona)
    },
    food: {
      streetFood: 8,       // ~$8.70 USD
      restaurantMeal: 35,  // ~$38 USD
      groceryWeekly: 120   // ~$130 USD
    }
  },
  tips: [
    "Try tapas hopping in local bars - it's a cultural experience",
    "Use high-speed trains (AVE) between major cities for efficiency",
    "Visit during shoulder season (May-June, September-October) for best weather and prices",
    "Learn basic Spanish phrases for better local prices and interactions",
    "Take advantage of free museum hours and city walking tours",
    "Try regional specialties like paella in Valencia, gazpacho in Andalusia",
    "Use public transportation - it's efficient and affordable in cities",
    "Shop at local markets for fresh produce and authentic experiences"
  ],
  bestAreas: {
    budget: [
      "Lavapiés, Madrid",
      "Gràcia, Barcelona", 
      "El Carmen, Valencia",
      "Triana, Seville"
    ],
    midrange: [
      "Salamanca, Madrid",
      "Eixample, Barcelona",
      "Ruzafa, Valencia",
      "Santa Cruz, Seville"
    ],
    luxury: [
      "Salamanca Golden Mile, Madrid",
      "Pedralbes, Barcelona",
      "Playa de San Juan, Alicante",
      "Puerto Banús, Marbella"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const spainNomadData: NomadData = {
  country: 'Spain',
  internet: {
    speed: 90,
    reliability: 9,
    coworkingSpaces: 50
  },
  costs: {
    coworkingMonthly: 280,
    simCardMonthly: 25,
    coffeeShopWork: 15
  },
  community: {
    expatSize: 8,
    englishLevel: 6,
    safety: 9
  }
};

export const spainData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Moderate application",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "~$2,400/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Freedom of movement (EU)",
      freeLength: "Unlimited",
      workPolicy: "No restrictions for EU citizens",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 0,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free for 90 days",
      freeLength: "90 days in Schengen area",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "~$2,400/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};