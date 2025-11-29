// /src/lib/data/countries/north-america/united-states.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { LivingCostData  } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';
import type { RouteCostData } from '$lib/types/flight';

export const unitedStatesFlightPattern: FlightPattern = {
  country: "United States",
  cities: ["New York", "Los Angeles", "Chicago", "Miami", "Las Vegas"],
  cheapestMonths: ["January", "February", "September"],
  expensiveMonths: ["June", "July", "December"],
  sweetSpot: ["May", "October"],
  averagePrice: 0, // This will be overridden by flightData
  planningTips: [
    "Consider flying into secondary airports for better deals",
    "Book domestic flights 3-4 weeks in advance for best prices",
    "Use nearby cities as alternatives (e.g., Oakland instead of San Francisco)"
  ]
};

export const unitedStatesLivingCosts: LivingCostData = {
  country: "United States",
  countryCode: "United States", 
  currency: "USD",
  lastUpdated: "2024-01-15",
  
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 40,
        budgetHotel: 80,
        guesthouse: 60
      },
      midrange: {
        hotel: 150,
        apartment: 120,
        boutiqueHotel: 200
      },
      luxury: {
        hotel: 350,
        resort: 500,
        villa: 800
      },
      monthlyRent: {
        studio: 1200,
        oneBedroom: 1500,
        threeBedroom: 2500
      }
    },
    dailyLiving: {
      budget: 50,
      midrange: 100,
      luxury: 200,
      breakdown: {
        food: 30,
        transport: 10,
        activities: 8,
        misc: 2
      }
    },
    transportation: {
      localBus: 2.50,
      taxi: 2.00, // per mile
      intercityBus: 50,
      train: 80
    },
    food: {
      streetFood: 8,
      restaurantMeal: 25,
      groceryWeekly: 80
    }
  },
  
  tips: [
    "Use ride-sharing apps for cheaper transport",
    "Book hotels in advance for better rates",
    "Many museums have free admission days",
    "Use public transportation in major cities",
    "Tipping is expected (15-20% in restaurants)",
    "Consider Airbnb for longer stays"
  ],
  
  bestAreas: {
    budget: [
      "Downtown Chicago",
      "Queens, New York",
      "Portland city center",
      "Austin downtown"
    ],
    midrange: [
      "Brooklyn, New York",
      "San Diego coastal areas",
      "Seattle downtown",
      "Boston historic districts"
    ],
    luxury: [
      "Manhattan, New York",
      "Beverly Hills, Los Angeles",
      "Miami Beach",
      "San Francisco downtown"
    ]
  },
  
  // FIXED: cities as object with CityData, not array of strings
  cities: {
    "New York": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 60,      // Higher than national average
            budgetHotel: 120,
            guesthouse: 90
          },
          midrange: {
            hotel: 250,
            apartment: 200,
            boutiqueHotel: 350
          },
          monthlyRent: {
            studio: 2000,
            oneBedroom: 3000,
            threeBedroom: 5000
          }
        },
        dailyLiving: {
          budget: 70,
          midrange: 150,
          luxury: 300
        },
        transportation: {
          localBus: 2.75,
          taxi: 3.50,
          train: 2.75 // could use 'subway'
        }
      },
      tips: [
        "Use subway for cheapest transportation",
        "Visit museums on free admission days",
        "Walk between nearby attractions",
        "Book Broadway tickets in advance"
      ]
    },
    
    "Los Angeles": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 45,
            budgetHotel: 100,
            guesthouse: 75
          },
          midrange: {
            hotel: 200,
            apartment: 180,
            boutiqueHotel: 300
          },
          monthlyRent: {
            studio: 1800,
            oneBedroom: 2200,
            threeBedroom: 3500
          }
        },
        dailyLiving: {
          budget: 60,
          midrange: 120,
          luxury: 250
        },
        transportation: {
          localBus: 1.75,
          taxi: 2.50
        }
      },
      tips: [
        "Rent a car for best mobility",
        "Visit beaches for free activities",
        "Use ride-sharing in downtown areas",
        "Many studios offer free tours"
      ]
    },
    
    "Chicago": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 35,
            budgetHotel: 70,
            guesthouse: 55
          },
          midrange: {
            hotel: 130,
            apartment: 100,
            boutiqueHotel: 180
          }
        },
        dailyLiving: {
          budget: 45,
          midrange: 90,
          luxury: 180
        }
      },
      tips: [
        "Use the 'L' train system",
        "Visit museums on free days",
        "Walk along the Riverwalk",
        "Try deep dish pizza"
      ]
    },
    
    "Miami": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 40,
            budgetHotel: 90,
            guesthouse: 70
          },
          midrange: {
            hotel: 180,
            apartment: 150,
            boutiqueHotel: 280
          }
        },
        dailyLiving: {
          budget: 55,
          midrange: 110,
          luxury: 220
        }
      },
      tips: [
        "Visit during shoulder season for better prices",
        "Use public beaches",
        "Explore Little Havana for affordable food",
        "Rent a bike for South Beach"
      ]
    },
    
    "Las Vegas": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 30,
            budgetHotel: 60,
            guesthouse: 50
          },
          midrange: {
            hotel: 100,      // Often cheaper due to casino subsidies
            apartment: 90,
            boutiqueHotel: 150
          }
        },
        dailyLiving: {
          budget: 40,
          midrange: 80,
          luxury: 160
        }
      },
      tips: [
        "Stay mid-week for best hotel deals",
        "Use free hotel shuttles",
        "Visit downtown for cheaper options",
        "Many free attractions on the Strip"
      ]
    }
  }
};

export const unitedStatesVisaData: Record<string, VisaInfo> = {
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

export const unitedStatesRouteCost: RouteCostData = {
  'Canada': {
    economy: 200,
    business: 500,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['JFK', 'LAX', 'ORD', 'MIA'],
    airlines: ['American', 'United', 'Delta', 'Air Canada']
  },
  'United Kingdom': {
    economy: 500,
    business: 1100,
    season: 'Summer peak',
    bestTimeToBook: '3-4 months in advance for summer',
    airports: ['JFK', 'LAX', 'ORD'],
    airlines: ['American', 'British Airways', 'United']
  },
  'Australia': {
    economy: 1100,
    business: 2400,
    season: 'year-round',
    bestTimeToBook: '5-6 months in advance',
    airports: ['LAX', 'SFO', 'JFK'],
    airlines: ['United', 'American', 'Qantas', 'Delta']
  },
  'Mexico': {
    economy: 300,
    business: 700,
    season: 'year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LAX', 'DFW', 'ORD', 'MIA'],
    airlines: ['American', 'United', 'Delta', 'Aeromexico']
  },
  'Costa Rica': {
    economy: 400,
    business: 900,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['SJO', 'LIR'],
    airlines: ['American', 'United', 'Delta', 'Spirit']
  },
  'Panama': {
    economy: 420,
    business: 950,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-4 months in advance',
    airports: ['PTY'],
    airlines: ['Copa', 'American', 'United']
  },
  'Belize': {
    economy: 350,
    business: 800,
    season: 'year-round',
    bestTimeToBook: '3-4 months in advance',
    airports: ['BZE'],
    airlines: ['American', 'United', 'Delta']
  },
  'Guatemala': {
    economy: 380,
    business: 850,
    season: 'year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GUA'],
    airlines: ['American', 'United', 'Delta']
  },
  'Argentina': {
    economy: 800,
    business: 1800,
    season: 'Summer peak (Dec-Feb)',
    bestTimeToBook: '4-5 months in advance',
    airports: ['EZE'],
    airlines: ['American', 'United', 'Aerolineas Argentinas']
  }
};