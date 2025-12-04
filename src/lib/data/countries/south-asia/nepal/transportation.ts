// src/lib/data/countries/south-asia/nepal/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const nepalTransportation: TransportationCosts = {
  country: "Nepal",
  region: "South Asia",
  currency: "NPR",
  cities: {
    "Kathmandu": {
      city: "Kathmandu",
      publicTransport: {
        monthlyPass: 1200,
        singleTicket: 25,
        reliability: 4,
        coverage: 5,
        notes: "Microbuses, tempos, rickshaws, taxis. Traffic congestion severe"
      },
      rideSharing: {
        baseFare: 100,
        costPerKm: 30,
        availability: 7,
        exampleTrip: 250
      },
      taxis: {
        startFare: 120,
        costPerKm: 35
      },
      rentalCars: {
        economyWeekly: 20000,
        compactWeekly: 28000,
        insuranceDaily: 600,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 135,
        dieselPerLiter: 115
      },
      intercity: {
        busPer100km: 200,
        domesticFlight: 8000
      },
      usagePatterns: {
        tourist: 3000,
        budgetTraveler: 1500,
        digitalNomad: 2500,
        resident: 2000
      }
    },
    "Pokhara": {
      city: "Pokhara",
      publicTransport: {
        monthlyPass: 800,
        singleTicket: 20,
        reliability: 5,
        coverage: 4,
        notes: "Local buses, taxis, rickshaws. Lakeside area walkable"
      },
      rideSharing: {
        baseFare: 80,
        costPerKm: 25,
        availability: 6,
        exampleTrip: 200
      },
      taxis: {
        startFare: 100,
        costPerKm: 30
      },
      rentalCars: {
        economyWeekly: 18000,
        compactWeekly: 25000,
        insuranceDaily: 550,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 140,
        dieselPerLiter: 120
      },
      intercity: {
        busPer100km: 180,
        domesticFlight: 6000
      },
      usagePatterns: {
        tourist: 2500,
        budgetTraveler: 1200,
        digitalNomad: 2000,
        resident: 1600
      }
    },
    "Chitwan": {
      city: "Chitwan",
      publicTransport: {
        monthlyPass: 600,
        singleTicket: 15,
        reliability: 4,
        coverage: 3,
        notes: "Local buses, jeeps, bicycle rentals popular"
      },
      rideSharing: {
        baseFare: 70,
        costPerKm: 22,
        availability: 5,
        exampleTrip: 150
      },
      taxis: {
        startFare: 90,
        costPerKm: 28
      },
      rentalCars: {
        economyWeekly: 16000,
        compactWeekly: 22000,
        insuranceDaily: 500,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 145,
        dieselPerLiter: 125
      },
      intercity: {
        busPer100km: 170
      },
      usagePatterns: {
        tourist: 2000,
        budgetTraveler: 1000,
        digitalNomad: 1600,
        resident: 1300
      }
    },
    "Nagarkot": {
      city: "Nagarkot",
      publicTransport: {
        monthlyPass: 1000,
        singleTicket: 30,
        reliability: 4,
        coverage: 2,
        notes: "Mountain town, limited transport, taxis main option"
      },
      rideSharing: {
        baseFare: 120,
        costPerKm: 35,
        availability: 5,
        exampleTrip: 400
      },
      taxis: {
        startFare: 150,
        costPerKm: 40
      },
      rentalCars: {
        economyWeekly: 22000,
        compactWeekly: 30000,
        insuranceDaily: 700,
        fuelEfficiency: 11
      },
      fuel: {
        gasolinePerLiter: 155,
        dieselPerLiter: 135
      },
      intercity: {
        busPer100km: 250
      },
      usagePatterns: {
        tourist: 3500,
        budgetTraveler: 1800,
        digitalNomad: 3000,
        resident: 2500
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 900,
      singleTicket: 22,
      reliability: 4,
      coverage: 4
    },
    rideSharing: {
      baseFare: 95,
      costPerKm: 28,
      availability: 6,
      exampleTrip: 250
    },
    taxis: {
      startFare: 115,
      costPerKm: 33
    },
    rentalCars: {
      economyWeekly: 19000,
      compactWeekly: 26000,
      insuranceDaily: 590,
      fuelEfficiency: 12
    },
    fuel: {
      gasolinePerLiter: 144,
      dieselPerLiter: 124
    },
    intercity: {
      busPer100km: 200,
      domesticFlight: 7000
    },
    usagePatterns: {
      tourist: 2800,
      budgetTraveler: 1400,
      digitalNomad: 2300,
      resident: 1900
    }
  }
};