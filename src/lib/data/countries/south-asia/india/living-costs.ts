// src/lib/data/visa/destinations/south-asia/india.ts
import type { LivingCosts } from '$lib/types/livingCosts';

export const indiaLivingCosts: LivingCosts = {
  country: "India",
  region: "South Asia",
  currency: "INR (Indian Rupee)",
  cities: {
    "Delhi": {
      city: "Delhi",
      monthlyRent: {
        studio: 25000,
        oneBedroom: 35000,
        twoBedroom: 55000,
        threeBedroom: 80000
      },
      utilities: {
        basic: 5000,
        internet: 1000,
        mobilePlan: 300
      },
      food: {
        groceriesMonthly: 8000,
        restaurantMeal: 500,
        coffee: 200,
        waterBottle: 20
      },
      transportation: {
        monthlyPass: 1500,
        taxiStart: 50,
        gasPerLiter: 100
      },
      lifestyle: {
        fitnessMembership: 2500,
        cinemaTicket: 300,
        beerAtBar: 400
      },
      summary: {
        budgetTraveler: 30000,
        digitalNomad: 60000,
        expatFamily: 120000
      },
      notes: "NCR region expensive, South Delhi most upscale, Gurgaon/Noida more affordable but further"
    },
    "Mumbai": {
      city: "Mumbai",
      monthlyRent: {
        studio: 40000,
        oneBedroom: 60000,
        twoBedroom: 90000,
        threeBedroom: 150000
      },
      utilities: {
        basic: 7000,
        internet: 1200,
        mobilePlan: 300
      },
      food: {
        groceriesMonthly: 10000,
        restaurantMeal: 800,
        coffee: 250,
        waterBottle: 25
      },
      transportation: {
        monthlyPass: 1200,
        taxiStart: 60,
        gasPerLiter: 105
      },
      lifestyle: {
        fitnessMembership: 4000,
        cinemaTicket: 350,
        beerAtBar: 500
      },
      summary: {
        budgetTraveler: 50000,
        digitalNomad: 80000,
        expatFamily: 180000
      },
      notes: "Most expensive city in India, South Mumbai premium, suburbs more affordable but commute long"
    },
    "Bangalore": {
      city: "Bangalore",
      monthlyRent: {
        studio: 30000,
        oneBedroom: 45000,
        twoBedroom: 70000,
        threeBedroom: 100000
      },
      utilities: {
        basic: 6000,
        internet: 1000,
        mobilePlan: 300
      },
      food: {
        groceriesMonthly: 9000,
        restaurantMeal: 600,
        coffee: 200,
        waterBottle: 20
      },
      transportation: {
        monthlyPass: 2000,
        taxiStart: 50,
        gasPerLiter: 100
      },
      lifestyle: {
        fitnessMembership: 3000,
        cinemaTicket: 300,
        beerAtBar: 400
      },
      summary: {
        budgetTraveler: 40000,
        digitalNomad: 70000,
        expatFamily: 130000
      },
      notes: "Tech hub, Indiranagar/Koramangala expensive, Whitefield/Electronic City more affordable"
    },
    "Goa": {
      city: "Goa",
      monthlyRent: {
        studio: 20000,
        oneBedroom: 30000,
        twoBedroom: 45000,
        threeBedroom: 70000
      },
      utilities: {
        basic: 4000,
        internet: 1500,
        mobilePlan: 300
      },
      food: {
        groceriesMonthly: 7000,
        restaurantMeal: 500,
        coffee: 150,
        waterBottle: 15
      },
      transportation: {
        monthlyPass: 1000,
        taxiStart: 40,
        gasPerLiter: 100
      },
      lifestyle: {
        fitnessMembership: 2000,
        cinemaTicket: 250,
        beerAtBar: 200
      },
      summary: {
        budgetTraveler: 25000,
        digitalNomad: 50000,
        expatFamily: 90000
      },
      notes: "North Goa (Anjuna, Vagator) popular with expats/digital nomads, South Goa more relaxed"
    },
    "Pune": {
      city: "Pune",
      monthlyRent: {
        studio: 20000,
        oneBedroom: 30000,
        twoBedroom: 45000,
        threeBedroom: 70000
      },
      utilities: {
        basic: 4500,
        internet: 1000,
        mobilePlan: 300
      },
      food: {
        groceriesMonthly: 7500,
        restaurantMeal: 450,
        coffee: 180,
        waterBottle: 20
      },
      transportation: {
        monthlyPass: 1500,
        taxiStart: 45,
        gasPerLiter: 100
      },
      lifestyle: {
        fitnessMembership: 2500,
        cinemaTicket: 250,
        beerAtBar: 350
      },
      summary: {
        budgetTraveler: 30000,
        digitalNomad: 55000,
        expatFamily: 100000
      },
      notes: "University city with growing tech scene, Koregaon Park upscale, Kothrud more affordable"
    },
    "Chennai": {
      city: "Chennai",
      monthlyRent: {
        studio: 18000,
        oneBedroom: 25000,
        twoBedroom: 40000,
        threeBedroom: 60000
      },
      utilities: {
        basic: 4000,
        internet: 1000,
        mobilePlan: 300
      },
      food: {
        groceriesMonthly: 7000,
        restaurantMeal: 400,
        coffee: 150,
        waterBottle: 20
      },
      transportation: {
        monthlyPass: 1000,
        taxiStart: 40,
        gasPerLiter: 100
      },
      lifestyle: {
        fitnessMembership: 2000,
        cinemaTicket: 200,
        beerAtBar: 350
      },
      summary: {
        budgetTraveler: 25000,
        digitalNomad: 50000,
        expatFamily: 90000
      },
      notes: "More conservative culture, Besant Nagar/Adyar popular with expats, less expensive than other metros"
    },
    "Hyderabad": {
      city: "Hyderabad",
      monthlyRent: {
        studio: 15000,
        oneBedroom: 22000,
        twoBedroom: 35000,
        threeBedroom: 50000
      },
      utilities: {
        basic: 3500,
        internet: 1000,
        mobilePlan: 300
      },
      food: {
        groceriesMonthly: 6000,
        restaurantMeal: 350,
        coffee: 120,
        waterBottle: 15
      },
      transportation: {
        monthlyPass: 800,
        taxiStart: 35,
        gasPerLiter: 100
      },
      lifestyle: {
        fitnessMembership: 1800,
        cinemaTicket: 200,
        beerAtBar: 300
      },
      summary: {
        budgetTraveler: 20000,
        digitalNomad: 45000,
        expatFamily: 80000
      },
      notes: "Affordable tech hub, Banjara Hills/Jubilee Hills upscale, Gachibowli/HITEC City for tech professionals"
    }
  },
  nationalAverage: {
    monthlyRent: {
      studio: 25000,
      oneBedroom: 35000,
      twoBedroom: 55000,
      threeBedroom: 85000
    },
    utilities: {
      basic: 5000,
      internet: 1100,
      mobilePlan: 300
    },
    food: {
      groceriesMonthly: 8000,
      restaurantMeal: 500,
      coffee: 180,
      waterBottle: 20
    },
    transportation: {
      monthlyPass: 1400,
      taxiStart: 50,
      gasPerLiter: 100
    },
    lifestyle: {
      fitnessMembership: 2500,
      cinemaTicket: 280,
      beerAtBar: 380
    },
    summary: {
      budgetTraveler: 32000,
      digitalNomad: 60000,
      expatFamily: 110000
    }
  }
};