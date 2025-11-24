// src/lib/data/visa/destinations/south-asia/nepal.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const nepalFlightPattern: FlightPattern = {
  country: "Nepal",
  cities: ["Kathmandu", "Pokhara", "Chitwan"],
  cheapestMonths: ["January", "February", "June", "July", "August"],
  expensiveMonths: ["October"],
  sweetSpot: ["September", "October", "November"],
  averagePrice: 950,
  planningTips: ["Trekking permits required for popular routes"],
  notes: "Popular for trekking, Himalayan views, spring and fall best for hiking"
};

export const nepalLivingCosts: LivingCostData = {
  country: "Nepal",
  countryCode: "Nepal",
  cities: ["Kathmandu", "Pokhara", "Chitwan", "Bhaktapur", "Lumbini", "Nagarkot"],
  currency: "NPR",
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 600, // ~$4.50 USD
        budgetHotel: 1500, // ~$11 USD
        guesthouse: 1000 // ~$7.50 USD
      },
      midrange: {
        hotel: 4000, // ~$30 USD
        apartment: 3000, // ~$22 USD
        boutiqueHotel: 6000 // ~$45 USD
      },
      luxury: {
        hotel: 12000, // ~$90 USD
        resort: 20000, // ~$150 USD
        villa: 30000 // ~$225 USD
      },
      monthlyRent: {
        studio: 25000, // ~$188 USD
        oneBedroom: 40000, // ~$300 USD
        threeBedroom: 80000 // ~$600 USD
      }
    },
    dailyLiving: {
      budget: 2000, // ~$15 USD
      midrange: 5000, // ~$38 USD
      luxury: 12000, // ~$90 USD
      breakdown: {
        food: 1000, // ~$7.50 USD
        transport: 400, // ~$3 USD
        activities: 500, // ~$3.75 USD
        misc: 100 // ~$0.75 USD
      }
    },
    transportation: {
      localBus: 30, // ~$0.22 USD
      taxi: 100, // ~$0.75 USD per km
      intercityBus: 1000, // ~$7.50 USD
      train: 0 // No train system in Nepal
    },
    food: {
      streetFood: 150, // ~$1.12 USD
      restaurantMeal: 600, // ~$4.50 USD
      groceryWeekly: 2500 // ~$19 USD
    }
  },
  tips: [
    "Try local dal bhat - it's the national dish and very affordable",
    "Hire local guides for trekking - they know the routes and conditions",
    "Respect religious sites - remove shoes and dress modestly",
    "Carry cash as ATMs can be unreliable outside major cities",
    "Learn basic Nepali greetings - namaste is universally appreciated",
    "Be prepared for power outages in some areas",
    "Try local momos (dumplings) - they're delicious and cheap",
    "Visit during dry season (Oct-Nov, Mar-Apr) for best trekking conditions"
  ],
  bestAreas: {
    budget: [
      "Thamel, Kathmandu",
      "Lakeside, Pokhara", 
      "Sauraha, Chitwan",
      "Bhaktapur Durbar Square"
    ],
    midrange: [
      "Boudha, Kathmandu",
      "Pokhara City Center",
      "Chitwan National Park area",
      "Nagarkot viewpoints"
    ],
    luxury: [
      "Lazimpat, Kathmandu",
      "Fewa Lake resorts, Pokhara",
      "Wildlife lodges in Chitwan",
      "Mountain view resorts in Nagarkot"
    ]
  },
  lastUpdated: "2024-01-15"
};

export const nepalData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    },
    'Germany': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    },
    'United Kingdom': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    }
};