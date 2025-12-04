// src/lib/data/countries/south-asia/bangladesh/living-costs.ts
import type { LivingCosts } from '$lib/types/livingCosts';

export const bangladeshLivingCosts: LivingCosts = {
  country: "Bangladesh",
  region: "South Asia",
  currency: "BDT (Bangladeshi Taka)",
  cities: {
    "Dhaka": {
      city: "Dhaka",
      monthlyRent: {
        studio: 30000,
        oneBedroom: 45000,
        twoBedroom: 70000,
        threeBedroom: 100000
      },
      utilities: {
        basic: 6000,
        internet: 1200,
        mobilePlan: 400
      },
      food: {
        groceriesMonthly: 10000,
        restaurantMeal: 300,
        coffee: 150,
        waterBottle: 15
      },
      transportation: {
        monthlyPass: 1000,
        taxiStart: 60,
        gasPerLiter: 110
      },
      lifestyle: {
        fitnessMembership: 3000,
        cinemaTicket: 300,
        beerAtBar: 500
      },
      summary: {
        budgetTraveler: 35000,
        digitalNomad: 70000,
        expatFamily: 140000
      },
      notes: "Most expensive city, Gulshan/Banani upscale expat areas, Dhanmondi more affordable"
    },
    "Chittagong": {
      city: "Chittagong",
      monthlyRent: {
        studio: 20000,
        oneBedroom: 30000,
        twoBedroom: 50000,
        threeBedroom: 75000
      },
      utilities: {
        basic: 5000,
        internet: 1200,
        mobilePlan: 400
      },
      food: {
        groceriesMonthly: 8000,
        restaurantMeal: 250,
        coffee: 120,
        waterBottle: 12
      },
      transportation: {
        monthlyPass: 800,
        taxiStart: 50,
        gasPerLiter: 110
      },
      lifestyle: {
        fitnessMembership: 2500,
        cinemaTicket: 250,
        beerAtBar: 400
      },
      summary: {
        budgetTraveler: 25000,
        digitalNomad: 50000,
        expatFamily: 100000
      },
      notes: "Port city, more relaxed than Dhaka, Agrabad commercial area, residential areas more affordable"
    },
    "Sylhet": {
      city: "Sylhet",
      monthlyRent: {
        studio: 15000,
        oneBedroom: 22000,
        twoBedroom: 35000,
        threeBedroom: 55000
      },
      utilities: {
        basic: 4000,
        internet: 1200,
        mobilePlan: 400
      },
      food: {
        groceriesMonthly: 7000,
        restaurantMeal: 200,
        coffee: 100,
        waterBottle: 10
      },
      transportation: {
        monthlyPass: 600,
        taxiStart: 40,
        gasPerLiter: 110
      },
      lifestyle: {
        fitnessMembership: 2000,
        cinemaTicket: 200,
        beerAtBar: 300
      },
      summary: {
        budgetTraveler: 20000,
        digitalNomad: 40000,
        expatFamily: 80000
      },
      notes: "Tea garden region, many British Bangladeshi expats, more conservative culture"
    },
    "Cox's Bazar": {
      city: "Cox's Bazar",
      monthlyRent: {
        studio: 18000,
        oneBedroom: 25000,
        twoBedroom: 40000,
        threeBedroom: 60000
      },
      utilities: {
        basic: 4500,
        internet: 1500,
        mobilePlan: 400
      },
      food: {
        groceriesMonthly: 7500,
        restaurantMeal: 300,
        coffee: 150,
        waterBottle: 20
      },
      transportation: {
        monthlyPass: 500,
        taxiStart: 50,
        gasPerLiter: 115
      },
      lifestyle: {
        fitnessMembership: 2200,
        cinemaTicket: 250,
        beerAtBar: 350
      },
      summary: {
        budgetTraveler: 22000,
        digitalNomad: 45000,
        expatFamily: 90000
      },
      notes: "Beach resort town, tourist prices apply, seasonal variations (high season Nov-Mar)"
    }
  },
  nationalAverage: {
    monthlyRent: {
      studio: 21000,
      oneBedroom: 31000,
      twoBedroom: 49000,
      threeBedroom: 73000
    },
    utilities: {
      basic: 4900,
      internet: 1300,
      mobilePlan: 400
    },
    food: {
      groceriesMonthly: 8100,
      restaurantMeal: 260,
      coffee: 130,
      waterBottle: 14
    },
    transportation: {
      monthlyPass: 700,
      taxiStart: 50,
      gasPerLiter: 111
    },
    lifestyle: {
      fitnessMembership: 2400,
      cinemaTicket: 250,
      beerAtBar: 390
    },
    summary: {
      budgetTraveler: 26000,
      digitalNomad: 51000,
      expatFamily: 103000
    }
  }
};