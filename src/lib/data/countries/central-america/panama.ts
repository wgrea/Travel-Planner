// /src/lib/data/countries/central-america/panama.ts
import type { VisaInfo } from '$lib/types/visa';
import type { LivingCostData  } from '$lib/types/living-costs';
import type { FlightCostData } from '$lib/types/flight';
import type { FlightPattern } from '$lib/data/flyData';

export const panamaFlightPattern: FlightPattern = {
  country: "Panama",
  cities: ["Panama City", "Bocas del Toro", "Boquete", "San Blas Islands"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January", "Carnival season"],
  sweetSpot: ["March", "April", "November"],
  averagePrice: 600,
  alternativeRoutes: "Often cheaper to fly to San José, Costa Rica first",
  planningTips: [
    "Panama City has excellent flight connections",
    "Domestic flights to islands can be pricey - book early"
  ],
  notes: "US dollars accepted, modern infrastructure"
};

export const panamaLivingCosts: LivingCostData = {
  country: "Panama",
  countryCode: "Panama", 
  currency: "PAB", // Same as USD 1:1
  cities: ["Panama City", "Bocas del Toro", "Boquete", "Pedasí", "Colón"],
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 15,        // ~$15 USD
        budgetHotel: 40,   // ~$40 USD
        guesthouse: 30     // ~$30 USD
      },
      midrange: {
        hotel: 80,         // ~$80 USD
        apartment: 60,     // ~$60 USD
        boutiqueHotel: 120 // ~$120 USD
      },
      luxury: {
        hotel: 200,        // ~$200 USD
        resort: 350,       // ~$350 USD
        villa: 500         // ~$500 USD
      },
      monthlyRent: {
        studio: 500,       // ~$500 USD
        oneBedroom: 700,   // ~$700 USD
        threeBedroom: 1000 // ~$1,000 USD
      }
    },
    dailyLiving: {
      budget: 35,          // ~$35 USD
      midrange: 70,        // ~$70 USD
      luxury: 150,         // ~$150 USD
      breakdown: {
        food: 20,          // ~$20 USD
        transport: 5,      // ~$5 USD
        activities: 8,     // ~$8 USD
        misc: 2            // ~$2 USD
      }
    },
    transportation: {
      localBus: 0.35,      // ~$0.35 USD
      taxi: 5,             // ~$5 USD per km
      intercityBus: 15,    // ~$15 USD
      train: 25            // ~$25 USD (to islands)
    },
    food: {
      streetFood: 3,       // ~$3 USD
      restaurantMeal: 15,  // ~$15 USD
      groceryWeekly: 60    // ~$60 USD
    }
  },
  tips: [
    "Visit both Caribbean and Pacific coasts - they offer different experiences",
    "Try fresh seafood - Panama has excellent ceviche",
    "Use Uber in Panama City - it's safer and cheaper than taxis",
    "Learn basic Spanish for better prices and interactions",
    "Visit during dry season (December-April) for best weather",
    "Explore the Panama Canal - it's an engineering marvel",
    "Carry both USD and local currency for remote areas",
    "Try geisha coffee in Boquete - some of the world's best"
  ],
  bestAreas: {
    budget: [
      "Casco Viejo hostels, Panama City",
      "Bocas del Toro islands",
      "Boquete downtown",
      "David city center"
    ],
    midrange: [
      "Bella Vista, Panama City",
      "Bocas del Toro water bungalows",
      "Boquete mountain cabins",
      "Pedasí beach towns"
    ],
    luxury: [
      "Punta Pacifica, Panama City",
      "Bocas del Toro luxury resorts",
      "Boquete luxury coffee estates",
      "Pearl Islands private villas"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const panamaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    }
};

export const panamaFlightData: FlightCostData = {
  'United States': {
    economy: 420,
    business: 950,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-4 months in advance',
    airports: ['PTY'],
    airlines: ['Copa', 'American', 'United']
  }
};