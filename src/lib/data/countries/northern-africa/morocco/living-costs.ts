// src/lib/data/countries/middle-east/morocco/living-costs.ts
import type { LivingCosts } from '$lib/types/livingCosts';

export const moroccoLivingCosts: LivingCosts = {
  country: "Morocco",
  region: "North Africa",
  currency: "MAD (Moroccan Dirham)",
  cities: {
    "Marrakech": {
      city: "Marrakech",
      monthlyRent: {
        studio: 3000,
        oneBedroom: 4500,
        twoBedroom: 7000,
        threeBedroom: 10000
      },
      utilities: {
        basic: 800,
        internet: 300,
        mobilePlan: 100
      },
      food: {
        groceriesMonthly: 1500,
        restaurantMeal: 60,
        coffee: 20,
        waterBottle: 5
      },
      transportation: {
        monthlyPass: 300,
        taxiStart: 10,
        gasPerLiter: 12
      },
      lifestyle: {
        fitnessMembership: 400,
        cinemaTicket: 50,
        beerAtBar: 40
      },
      summary: {
        budgetTraveler: 5000,
        digitalNomad: 9000,
        expatFamily: 18000
      },
      notes: "Medina area authentic but noisy, Gueliz/Hivernage modern/expensive, Palmeraie for luxury"
    },
    "Casablanca": {
      city: "Casablanca",
      monthlyRent: {
        studio: 4000,
        oneBedroom: 6000,
        twoBedroom: 9000,
        threeBedroom: 14000
      },
      utilities: {
        basic: 1000,
        internet: 350,
        mobilePlan: 100
      },
      food: {
        groceriesMonthly: 1800,
        restaurantMeal: 80,
        coffee: 25,
        waterBottle: 5
      },
      transportation: {
        monthlyPass: 350,
        taxiStart: 12,
        gasPerLiter: 12
      },
      lifestyle: {
        fitnessMembership: 500,
        cinemaTicket: 60,
        beerAtBar: 50
      },
      summary: {
        budgetTraveler: 7000,
        digitalNomad: 12000,
        expatFamily: 22000
      },
      notes: "Business capital, most expensive city. Maarif/Anfa upscale, Ain Diab coastal, working-class areas more affordable"
    },
    "Fes": {
      city: "Fes",
      monthlyRent: {
        studio: 2500,
        oneBedroom: 3500,
        twoBedroom: 5500,
        threeBedroom: 8500
      },
      utilities: {
        basic: 700,
        internet: 300,
        mobilePlan: 100
      },
      food: {
        groceriesMonthly: 1300,
        restaurantMeal: 50,
        coffee: 15,
        waterBottle: 4
      },
      transportation: {
        monthlyPass: 250,
        taxiStart: 8,
        gasPerLiter: 12
      },
      lifestyle: {
        fitnessMembership: 350,
        cinemaTicket: 40,
        beerAtBar: 35
      },
      summary: {
        budgetTraveler: 4000,
        digitalNomad: 8000,
        expatFamily: 15000
      },
      notes: "Historic imperial city, Fes el Bali (old medina) authentic, Ville Nouvelle modern, more conservative"
    },
    "Tangier": {
      city: "Tangier",
      monthlyRent: {
        studio: 2800,
        oneBedroom: 4000,
        twoBedroom: 6500,
        threeBedroom: 9500
      },
      utilities: {
        basic: 750,
        internet: 300,
        mobilePlan: 100
      },
      food: {
        groceriesMonthly: 1400,
        restaurantMeal: 55,
        coffee: 18,
        waterBottle: 5
      },
      transportation: {
        monthlyPass: 280,
        taxiStart: 10,
        gasPerLiter: 12
      },
      lifestyle: {
        fitnessMembership: 380,
        cinemaTicket: 45,
        beerAtBar: 38
      },
      summary: {
        budgetTraveler: 4500,
        digitalNomad: 8500,
        expatFamily: 16000
      },
      notes: "Gateway to Europe, international vibe, Kasbah area historic, modern developments along coast"
    },
    "Agadir": {
      city: "Agadir",
      monthlyRent: {
        studio: 3200,
        oneBedroom: 4800,
        twoBedroom: 7500,
        threeBedroom: 11000
      },
      utilities: {
        basic: 850,
        internet: 300,
        mobilePlan: 100
      },
      food: {
        groceriesMonthly: 1600,
        restaurantMeal: 70,
        coffee: 22,
        waterBottle: 5
      },
      transportation: {
        monthlyPass: 320,
        taxiStart: 11,
        gasPerLiter: 12
      },
      lifestyle: {
        fitnessMembership: 420,
        cinemaTicket: 55,
        beerAtBar: 45
      },
      summary: {
        budgetTraveler: 5500,
        digitalNomad: 10000,
        expatFamily: 19000
      },
      notes: "Beach resort city, modern rebuild after earthquake, tourist infrastructure, European retirees"
    },
    "Essaouira": {
      city: "Essaouira",
      monthlyRent: {
        studio: 2200,
        oneBedroom: 3200,
        twoBedroom: 5000,
        threeBedroom: 7500
      },
      utilities: {
        basic: 650,
        internet: 300,
        mobilePlan: 100
      },
      food: {
        groceriesMonthly: 1200,
        restaurantMeal: 45,
        coffee: 15,
        waterBottle: 4
      },
      transportation: {
        monthlyPass: 200,
        taxiStart: 7,
        gasPerLiter: 12
      },
      lifestyle: {
        fitnessMembership: 300,
        cinemaTicket: 35,
        beerAtBar: 30
      },
      summary: {
        budgetTraveler: 3500,
        digitalNomad: 7000,
        expatFamily: 13000
      },
      notes: "Coastal fortified town, artsy/bohemian vibe, popular with surfers and creative expats, windy climate"
    }
  },
  nationalAverage: {
    monthlyRent: {
      studio: 3000,
      oneBedroom: 4300,
      twoBedroom: 6800,
      threeBedroom: 10000
    },
    utilities: {
      basic: 800,
      internet: 300,
      mobilePlan: 100
    },
    food: {
      groceriesMonthly: 1500,
      restaurantMeal: 60,
      coffee: 19,
      waterBottle: 5
    },
    transportation: {
      monthlyPass: 300,
      taxiStart: 10,
      gasPerLiter: 12
    },
    lifestyle: {
      fitnessMembership: 390,
      cinemaTicket: 48,
      beerAtBar: 40
    },
    summary: {
      budgetTraveler: 4800,
      digitalNomad: 9000,
      expatFamily: 17000
    }
  }
};