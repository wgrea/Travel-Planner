// src/lib/data/visa/destinations/south-asia/india.ts
import type { LivingCostData } from '$lib/types/living-costs';

import type { VisaInfo } from '$lib/types/visa';

export const indiaLivingCosts: LivingCostData = {
  country: "India",
  countryCode: "India",
  cities: ["Delhi", "Mumbai", "Goa", "Bangalore", "Kolkata", "Jaipur", "Kerala"],
  currency: "INR",
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 500, // ~$6 USD
        budgetHotel: 1200, // ~$14 USD
        guesthouse: 800 // ~$10 USD
      },
      midrange: {
        hotel: 3000, // ~$36 USD
        apartment: 2500, // ~$30 USD
        boutiqueHotel: 5000 // ~$60 USD
      },
      luxury: {
        hotel: 10000, // ~$120 USD
        resort: 15000, // ~$180 USD
        villa: 25000 // ~$300 USD
      },
      monthlyRent: {
        studio: 20000, // ~$240 USD
        oneBedroom: 35000, // ~$420 USD
        threeBedroom: 70000 // ~$840 USD
      }
    },
    dailyLiving: {
      budget: 1500, // ~$18 USD
      midrange: 4000, // ~$48 USD
      luxury: 10000, // ~$120 USD
      breakdown: {
        food: 800, // ~$10 USD
        transport: 300, // ~$4 USD
        activities: 300, // ~$4 USD
        misc: 100 // ~$1 USD
      }
    },
    transportation: {
      localBus: 20, // ~$0.24 USD
      taxi: 150, // ~$1.80 USD per km
      intercityBus: 800, // ~$10 USD
      train: 1500 // ~$18 USD (Delhi to Mumbai)
    },
    food: {
      streetFood: 100, // ~$1.20 USD
      restaurantMeal: 500, // ~$6 USD
      groceryWeekly: 2000 // ~$24 USD
    }
  },
  tips: [
    "Street food is amazing but stick to busy vendors with high turnover",
    "Use Uber or Ola for reliable transportation",
    "Bargain at markets but be respectful",
    "Learn basic Hindi phrases - locals appreciate it",
    "Carry cash as many places don't accept credit cards",
    "Be prepared for cultural differences and crowded spaces",
    "Try local chai tea - it's everywhere and delicious",
    "Dress modestly, especially when visiting temples"
  ],
  bestAreas: {
    budget: [
      "Paharganj, Delhi",
      "Colaba, Mumbai", 
      "Anjuna, Goa",
      "Jaipur Old City"
    ],
    midrange: [
      "Hauz Khas, Delhi",
      "Bandra, Mumbai",
      "Calangute, Goa",
      "Bangalore City Center"
    ],
    luxury: [
      "South Delhi",
      "Marine Drive, Mumbai",
      "Candolim, Goa",
      "Bangalore suburbs"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const indiaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "E-Visa available",
      freeLength: "60 days",
      workPolicy: "No local work allowed on tourist visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Moderate",
      duration: 60,
      cost: 25,
      applicationTime: "3-5 business days",
      entryType: "multiple"
    },
    'Germany': {
      ease: "E-Visa available",
      freeLength: "60 days",
      workPolicy: "No local work allowed on tourist visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Moderate",
      duration: 60,
      cost: 25,
      applicationTime: "3-5 business days",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "E-Visa available",
      freeLength: "60 days",
      workPolicy: "No local work allowed on tourist visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Moderate",
      duration: 60,
      cost: 25,
      applicationTime: "3-5 business days",
      entryType: "multiple"
    }
};