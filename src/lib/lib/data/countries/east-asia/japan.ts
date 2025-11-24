// /src/lib/data/countries/east-asia/japan.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const japanFlightPattern: FlightPattern = {
  country: "Japan",
  cities: ["Tokyo", "Osaka", "Kyoto"],
  cheapestMonths: ["January", "February"],
  expensiveMonths: ["April", "November"],
  sweetSpot: ["May", "October"],
  averagePrice: 1200,
  alternativeRoutes: "Fly to Seoul first, then budget airline to Osaka",
  planningTips: ["Book 3-4 months in advance", "Use Google Flights alerts"],
  notes: "Cherry blossom season (April) is most expensive"
};


export const turkeyLivingCosts: LivingCostData = {
  country: "Turkey",
  countryCode: "Turkey",
  cities: ["Istanbul", "Antalya", "Cappadocia", "Izmir", "Bodrum", "Ankara", "Pamukkale"],
  currency: "TRY",
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 200, // ~$6 USD
        budgetHotel: 400, // ~$12 USD
        guesthouse: 300 // ~$9 USD
      },
      midrange: {
        hotel: 1000, // ~$30 USD
        apartment: 800, // ~$24 USD
        boutiqueHotel: 1500 // ~$45 USD
      },
      luxury: {
        hotel: 3000, // ~$90 USD
        resort: 5000, // ~$150 USD
        villa: 8000 // ~$240 USD
      },
      monthlyRent: {
        studio: 5000, // ~$150 USD
        oneBedroom: 8000, // ~$240 USD
        threeBedroom: 15000 // ~$450 USD
      }
    },
    dailyLiving: {
      budget: 300, // ~$9 USD
      midrange: 800, // ~$24 USD
      luxury: 2000, // ~$60 USD
      breakdown: {
        food: 150, // ~$4.50 USD
        transport: 50, // ~$1.50 USD
        activities: 80, // ~$2.40 USD
        misc: 20 // ~$0.60 USD
      }
    },
    transportation: {
      localBus: 10, // ~$0.30 USD
      taxi: 30, // ~$0.90 USD per km
      intercityBus: 200, // ~$6 USD
      train: 400 // ~$12 USD (Istanbul to Ankara)
    },
    food: {
      streetFood: 50, // ~$1.50 USD
      restaurantMeal: 200, // ~$6 USD
      groceryWeekly: 500 // ~$15 USD
    }
  },
  tips: [
    "Try Turkish breakfast - it's a feast and great value",
    "Use Istanbulkart for public transportation in Istanbul",
    "Bargain at bazaars but be respectful",
    "Visit hamams (Turkish baths) for authentic cultural experience",
    "Try Turkish tea and coffee everywhere",
    "Carry some cash for small purchases and local markets",
    "Visit both European and Asian sides of Istanbul",
    "Try local desserts like baklava and Turkish delight"
  ],
  bestAreas: {
    budget: [
      "Sultanahmet, Istanbul",
      "Lara, Antalya", 
      "Goreme, Cappadocia",
      "Konak, Izmir"
    ],
    midrange: [
      "Beyoglu, Istanbul",
      "Kaleici, Antalya",
      "Urgup, Cappadocia",
      "Cesme, Izmir"
    ],
    luxury: [
      "Bebek, Istanbul",
      "Konyaalti, Antalya",
      "Cave hotels in Cappadocia",
      "Bodrum Peninsula"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const japanLivingCosts: LivingCostData = {
  country: "Japan",
  countryCode: "Japan",
  cities: ["Tokyo", "Osaka", "Kyoto", "Hokkaido", "Hiroshima", "Fukuoka", "Nara"],
  currency: "JPY",
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 3000, // ~$20 USD
        budgetHotel: 6000, // ~$40 USD
        guesthouse: 5000 // ~$33 USD
      },
      midrange: {
        hotel: 15000, // ~$100 USD
        apartment: 12000, // ~$80 USD
        boutiqueHotel: 20000 // ~$133 USD
      },
      luxury: {
        hotel: 40000, // ~$267 USD
        resort: 60000, // ~$400 USD
        villa: 100000 // ~$667 USD
      },
      monthlyRent: {
        studio: 80000, // ~$533 USD
        oneBedroom: 120000, // ~$800 USD
        threeBedroom: 250000 // ~$1,667 USD
      }
    },
    dailyLiving: {
      budget: 5000, // ~$33 USD
      midrange: 12000, // ~$80 USD
      luxury: 30000, // ~$200 USD
      breakdown: {
        food: 2500, // ~$17 USD
        transport: 1000, // ~$7 USD
        activities: 1000, // ~$7 USD
        misc: 500 // ~$3 USD
      }
    },
    transportation: {
      localBus: 210, // ~$1.40 USD
      taxi: 500, // ~$3.33 USD per km
      intercityBus: 4000, // ~$27 USD
      train: 15000 // ~$100 USD (Tokyo to Osaka)
    },
    food: {
      streetFood: 500, // ~$3.33 USD
      restaurantMeal: 1500, // ~$10 USD
      groceryWeekly: 8000 // ~$53 USD
    }
  },
  tips: [
    "Get a JR Pass if traveling between cities - it can save you money",
    "Try convenience store food (7-Eleven, FamilyMart) - it's surprisingly good and cheap",
    "Learn basic Japanese phrases - English is not widely spoken outside tourist areas",
    "Use IC cards (Suica/Pasmo) for easy public transportation",
    "Carry cash as many places don't accept credit cards",
    "Try ramen, sushi, and takoyaki from local shops",
    "Visit during cherry blossom season (late March-early April) or autumn for beautiful scenery",
    "Use luggage forwarding services when changing cities"
  ],
  bestAreas: {
    budget: [
      "Asakusa, Tokyo",
      "Shin-Osaka area", 
      "Central Kyoto hostels",
      "Namba, Osaka"
    ],
    midrange: [
      "Shibuya, Tokyo",
      "Umeda, Osaka",
      "Gion, Kyoto",
      "Hakodate, Hokkaido"
    ],
    luxury: [
      "Ginza, Tokyo",
      "Minato, Tokyo",
      "Arashiyama, Kyoto",
      "Niseko, Hokkaido"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const japanData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free for short stays",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};