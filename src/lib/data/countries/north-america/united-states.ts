// /src/lib/data/countries/north-america/united-states.ts
import type { LivingCostData  } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';

export const unitedStatesLivingCosts: LivingCostData = {
  country: "United States",
  countryCode: "United States", 
  currency: "USD",
  cities: ["New York", "Los Angeles", "Miami", "Chicago", "Las Vegas"],
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 40,        // ~$40 USD
        budgetHotel: 80,   // ~$80 USD
        guesthouse: 60     // ~$60 USD
      },
      midrange: {
        hotel: 150,        // ~$150 USD
        apartment: 120,    // ~$120 USD
        boutiqueHotel: 200 // ~$200 USD
      },
      luxury: {
        hotel: 350,        // ~$350 USD
        resort: 500,       // ~$500 USD
        villa: 800         // ~$800 USD
      },
      monthlyRent: {
        studio: 1200,      // ~$1,200 USD
        oneBedroom: 1800,  // ~$1,800 USD
        threeBedroom: 3000 // ~$3,000 USD
      }
    },
    dailyLiving: {
      budget: 60,          // ~$60 USD
      midrange: 120,       // ~$120 USD
      luxury: 250,         // ~$250 USD
      breakdown: {
        food: 35,          // ~$35 USD
        transport: 15,     // ~$15 USD
        activities: 8,     // ~$8 USD
        misc: 2            // ~$2 USD
      }
    },
    transportation: {
      localBus: 2.50,      // ~$2.50 USD
      taxi: 15,            // ~$15 USD per km
      intercityBus: 50,    // ~$50 USD
      train: 200          // ~$200 USD (domestic)
    },
    food: {
      streetFood: 8,       // ~$8 USD
      restaurantMeal: 25,  // ~$25 USD
      groceryWeekly: 100   // ~$100 USD
    }
  },
  tips: [
    "Tip 15-20% at restaurants - it's expected in US culture",
    "Use ride-sharing apps (Uber/Lyft) in cities - often cheaper than taxis",
    "Visit national parks - they offer incredible value and natural beauty",
    "Book accommodations in advance, especially in popular cities",
    "Use public transportation in major cities to save money",
    "Try regional specialties - BBQ in Texas, seafood in New England, etc.",
    "Visit during shoulder seasons (spring/fall) for better prices and weather",
    "Take advantage of free museums and attractions in major cities"
  ],
  bestAreas: {
    budget: [
      "Queens, New York",
      "Koreatown, Los Angeles",
      "Little Havana, Miami",
      "Wicker Park, Chicago"
    ],
    midrange: [
      "Brooklyn, New York",
      "Santa Monica, Los Angeles",
      "South Beach, Miami",
      "Lincoln Park, Chicago"
    ],
    luxury: [
      "Manhattan, New York",
      "Beverly Hills, Los Angeles",
      "Miami Beach luxury hotels",
      "Gold Coast, Chicago"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const unitedStatesData: Record<string, VisaInfo> = {
  "Germany": {
    ease: "Medium",
    freeLength: "90 days",
    workPolicy: "Not allowed on ESTA/VWP",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa Waiver Program",
    region: "North America",
    
    duration: 90,
    cost: 21, // ESTA fee
    applicationTime: "Immediate to 72 hours",
    entryType: "Multiple",
    extensionsPossible: false,
    extensionDuration: 0
  },
  "United Kingdom": {
    ease: "Medium", 
    freeLength: "90 days",
    workPolicy: "Not allowed on ESTA/VWP",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa Waiver Program",
    region: "North America",
    
    duration: 90,
    cost: 21,
    applicationTime: "Immediate to 72 hours",
    entryType: "Multiple",
    extensionsPossible: false,
    extensionDuration: 0
  },
  "Australia": {
    ease: "Medium",
    freeLength: "90 days", 
    workPolicy: "Not allowed on ESTA/VWP",
    nomadVisa: false,
    incomeReq: "",
    category: "Visa Waiver Program",
    region: "North America",
    
    duration: 90,
    cost: 21,
    applicationTime: "Immediate to 72 hours",
    entryType: "Multiple", 
    extensionsPossible: false,
    extensionDuration: 0
  },
  "Thailand": {
    ease: "Hard",
    freeLength: "None",
    workPolicy: "Not allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Varies by visa type",
    category: "Tourist Visa Required",
    region: "North America",
    
    duration: 0, // Varies by visa
    cost: 185, // Tourist visa fee
    applicationTime: "1-3 weeks",
    entryType: "Single/Multiple depending on visa",
    extensionsPossible: true,
    extensionDuration: 6 // Months for some visas
  },
  "China": {
    ease: "Hard",
    freeLength: "None", 
    workPolicy: "Not allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Varies by visa type",
    category: "Tourist Visa Required",
    region: "North America",
    
    duration: 0, // Varies by visa type
    cost: 185,
    applicationTime: "1-4 weeks",
    entryType: "Single/Multiple depending on visa",
    extensionsPossible: true,
    extensionDuration: 6
  }
  // Add more nationalities as needed
};