//src/lib/data/countries/southeast-asia/vietnam.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { NomadData } from '$lib/data/nomadData';
import type { VisaInfo } from '$lib/types/visa';

export const vietnamLivingCosts: LivingCostData = {
  country: "Vietnam",
  countryCode: "Vietnam",
  cities: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hoi An", "Nha Trang", "Hue"],
  currency: "VND",
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 150000, // ~$6 USD
        budgetHotel: 300000, // ~$12 USD
        guesthouse: 250000 // ~$10 USD
      },
      midrange: {
        hotel: 800000, // ~$32 USD
        apartment: 600000, // ~$24 USD
        boutiqueHotel: 1200000 // ~$48 USD
      },
      luxury: {
        hotel: 2500000, // ~$100 USD
        resort: 4000000, // ~$160 USD
        villa: 6000000 // ~$240 USD
      },
      monthlyRent: {
        studio: 8000000, // ~$320 USD
        oneBedroom: 12000000, // ~$480 USD
        threeBedroom: 25000000 // ~$1000 USD
      }
    },
    dailyLiving: {
      budget: 400000, // ~$16 USD
      midrange: 1000000, // ~$40 USD
      luxury: 2500000, // ~$100 USD
      breakdown: {
        food: 200000, // ~$8 USD
        transport: 50000, // ~$2 USD
        activities: 100000, // ~$4 USD
        misc: 50000 // ~$2 USD
      }
    },
    transportation: {
      localBus: 7000, // ~$0.30 USD
      taxi: 15000, // ~$0.60 USD per km
      intercityBus: 200000, // ~$8 USD
      train: 500000 // ~$20 USD (Hanoi to Ho Chi Minh)
    },
    food: {
      streetFood: 30000, // ~$1.20 USD
      restaurantMeal: 150000, // ~$6 USD
      groceryWeekly: 500000 // ~$20 USD
    }
  },
  tips: [
    "Street food is excellent and very affordable - try pho, banh mi, and bun cha",
    "Download Grab app for reliable and cheap transportation",
    "Bargain at local markets but be respectful",
    "Learn basic Vietnamese phrases - locals appreciate it",
    "Carry cash as many places don't accept credit cards",
    "Be careful with street crossing in big cities - traffic can be intense",
    "Try local coffee - it's strong and delicious"
  ],
  bestAreas: {
    budget: [
      "District 4, Ho Chi Minh City",
      "Old Quarter, Hanoi", 
      "An Bang, Hoi An",
      "Nha Trang City Center"
    ],
    midrange: [
      "District 1, Ho Chi Minh City",
      "Tay Ho, Hanoi",
      "My Khe, Da Nang",
      "Cam Chau, Hoi An"
    ],
    luxury: [
      "District 2 (Thao Dien), Ho Chi Minh City",
      "Ba Dinh, Hanoi",
      "Son Tra Peninsula, Da Nang",
      "Vinpearl Island, Nha Trang"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const vietnamNomadData: NomadData = {
  country: 'Vietnam',
  internet: {
    speed: 65,
    reliability: 7,
    coworkingSpaces: 25
  },
  costs: {
    coworkingMonthly: 150,
    simCardMonthly: 10,
    coffeeShopWork: 6
  },
  community: {
    expatSize: 7,
    englishLevel: 5,
    safety: 7
  }
};

export const vietnamData: Record<string, VisaInfo> = {
  "United States": {
    ease: "E-visa required",
    freeLength: "30 days (e-visa)",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Moderate",
    region: "Southeast Asia",
    
    duration: 30,
    cost: 25,
    applicationTime: "3-5 days",
    entryType: "single",
    extensionsPossible: true,
    extensionDuration: 30
  },
  "Germany": {
    ease: "Visa-free for 15 days",
    freeLength: "15 days",
    workPolicy: "No local work allowed",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Easy",
    region: "Southeast Asia",
    
    duration: 15,
    cost: 0,
    applicationTime: "Visa-free",
    entryType: "single",
    extensionsPossible: false,
    extensionDuration: 0
  }
};