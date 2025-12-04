// src/lib/data/countries/europe/southern-europe/italy/living-costs.ts  
import type { LivingCosts } from '$lib/types/livingCosts';

export const italyLivingCosts: LivingCosts = {
  country: "Italy",
  region: "Southern Europe",
  currency: "EUR",
  cities: {
    "Rome": {
      city: "Rome",
      monthlyRent: {
        studio: 800,
        oneBedroom: 1000,
        twoBedroom: 1400,
        threeBedroom: 1900
      },
      utilities: {
        basic: 150,
        internet: 30,
        mobilePlan: 15
      },
      food: {
        groceriesMonthly: 300,
        restaurantMeal: 15,
        coffee: 1.5,
        waterBottle: 1
      },
      transportation: {
        monthlyPass: 35,
        taxiStart: 5,
        gasPerLiter: 1.8
      },
      lifestyle: {
        fitnessMembership: 50,
        cinemaTicket: 9,
        beerAtBar: 5
      },
      summary: {
        budgetTraveler: 1200,
        digitalNomad: 1800,
        expatFamily: 3500
      },
      notes: "Historic center most expensive, Trastevere and Prati more affordable"
    },
    "Milan": {
      city: "Milan",
      monthlyRent: {
        studio: 1000,
        oneBedroom: 1300,
        twoBedroom: 1800,
        threeBedroom: 2500
      },
      utilities: {
        basic: 170,
        internet: 30,
        mobilePlan: 15
      },
      food: {
        groceriesMonthly: 350,
        restaurantMeal: 20,
        coffee: 1.5,
        waterBottle: 1
      },
      transportation: {
        monthlyPass: 39,
        taxiStart: 6,
        gasPerLiter: 1.85
      },
      lifestyle: {
        fitnessMembership: 70,
        cinemaTicket: 10,
        beerAtBar: 6
      },
      summary: {
        budgetTraveler: 1500,
        digitalNomad: 2200,
        expatFamily: 4000
      },
      notes: "Most expensive city in Italy, financial and fashion capital"
    },
    "Florence": {
      city: "Florence",
      monthlyRent: {
        studio: 700,
        oneBedroom: 900,
        twoBedroom: 1300,
        threeBedroom: 1800
      },
      utilities: {
        basic: 140,
        internet: 30,
        mobilePlan: 15
      },
      food: {
        groceriesMonthly: 280,
        restaurantMeal: 18,
        coffee: 1.4,
        waterBottle: 1
      },
      transportation: {
        monthlyPass: 25,
        taxiStart: 4,
        gasPerLiter: 1.8
      },
      lifestyle: {
        fitnessMembership: 45,
        cinemaTicket: 8,
        beerAtBar: 5
      },
      summary: {
        budgetTraveler: 1100,
        digitalNomad: 1700,
        expatFamily: 3200
      },
      notes: "Tourist areas expensive, consider Oltrarno or outside center"
    },
    "Naples": {
      city: "Naples",
      monthlyRent: {
        studio: 500,
        oneBedroom: 650,
        twoBedroom: 900,
        threeBedroom: 1300
      },
      utilities: {
        basic: 120,
        internet: 30,
        mobilePlan: 12
      },
      food: {
        groceriesMonthly: 250,
        restaurantMeal: 12,
        coffee: 1,
        waterBottle: 0.5
      },
      transportation: {
        monthlyPass: 30,
        taxiStart: 4,
        gasPerLiter: 1.75
      },
      lifestyle: {
        fitnessMembership: 35,
        cinemaTicket: 7,
        beerAtBar: 3
      },
      summary: {
        budgetTraveler: 900,
        digitalNomad: 1400,
        expatFamily: 2500
      },
      notes: "Most affordable major city, authentic Italian experience"
    },
    "Bologna": {
      city: "Bologna",
      monthlyRent: {
        studio: 600,
        oneBedroom: 800,
        twoBedroom: 1100,
        threeBedroom: 1600
      },
      utilities: {
        basic: 130,
        internet: 30,
        mobilePlan: 15
      },
      food: {
        groceriesMonthly: 280,
        restaurantMeal: 16,
        coffee: 1.3,
        waterBottle: 1
      },
      transportation: {
        monthlyPass: 28,
        taxiStart: 4.5,
        gasPerLiter: 1.8
      },
      lifestyle: {
        fitnessMembership: 40,
        cinemaTicket: 8,
        beerAtBar: 4
      },
      summary: {
        budgetTraveler: 1000,
        digitalNomad: 1600,
        expatFamily: 3000
      },
      notes: "University city with vibrant student life, good food scene"
    }
  },
  nationalAverage: {
    monthlyRent: {
      studio: 700,
      oneBedroom: 900,
      twoBedroom: 1300,
      threeBedroom: 1800
    },
    utilities: {
      basic: 140,
      internet: 30,
      mobilePlan: 14
    },
    food: {
      groceriesMonthly: 290,
      restaurantMeal: 16,
      coffee: 1.3,
      waterBottle: 0.9
    },
    transportation: {
      monthlyPass: 32,
      taxiStart: 5,
      gasPerLiter: 1.8
    },
    lifestyle: {
      fitnessMembership: 48,
      cinemaTicket: 8.4,
      beerAtBar: 4.6
    },
    summary: {
      budgetTraveler: 1100,
      digitalNomad: 1700,
      expatFamily: 3200
    }
  }
};