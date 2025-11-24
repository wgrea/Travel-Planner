// src/lib/data/countries/europe/southern-europe/turkey.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const turkeyFlightPattern: FlightPattern = {
  country: "Turkey",
  cities: ["Istanbul", "Cappadocia", "Antalya"],
  cheapestMonths: ["January", "February"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "June", "September", "October", "November"],
  averagePrice: 950,
  planningTips: ["Visa may be required depending on nationality"],
  notes: "Crossroads of Europe and Asia with rich history"
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

export const turkeyData: Record<string, VisaInfo> = {
    'United States': {
      ease: "E-Visa available",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 50,
      applicationTime: "24 hours",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "E-Visa available",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 50,
      applicationTime: "24 hours",
      entryType: "multiple"
    }
};