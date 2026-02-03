// src/lib/data/countries/europe/southern-europe/italy/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const italyTransportation: TransportationCosts = {
  country: "Italy",
  region: "Southern Europe",
  currency: "EUR",
  cities: {
    "Rome": {
      city: "Rome",
      publicTransport: {
        monthlyPass: 35,
        singleTicket: 1.5,
        dailyCap: 7,
        reliability: 6,
        coverage: 7,
        notes: "Metro (limited lines), buses, trams, and regional trains (FL)"
      },
      rideSharing: {
        baseFare: 3.5,
        costPerKm: 1.2,
        availability: 9,
        exampleTrip: 15
      },
      taxis: {
        startFare: 5,
        costPerKm: 1.5
      },
      rentalCars: {
        economyWeekly: 250,
        compactWeekly: 350,
        insuranceDaily: 18,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.85,
        dieselPerLiter: 1.75
      },
      intercity: {
        trainPer100km: 15,
        busPer100km: 8,
        domesticFlight: 80
      },
      usagePatterns: {
        tourist: 120,
        budgetTraveler: 60,
        digitalNomad: 100,
        resident: 85
      }
    },
    "Milan": {
      city: "Milan",
      publicTransport: {
        monthlyPass: 39,
        singleTicket: 2,
        dailyCap: 7,
        reliability: 8,
        coverage: 8,
        notes: "Efficient metro, trams, buses. ATM transport card recommended"
      },
      rideSharing: {
        baseFare: 4,
        costPerKm: 1.3,
        availability: 9,
        exampleTrip: 18
      },
      taxis: {
        startFare: 6,
        costPerKm: 1.6
      },
      rentalCars: {
        economyWeekly: 280,
        compactWeekly: 380,
        insuranceDaily: 20,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 1.9,
        dieselPerLiter: 1.8
      },
      intercity: {
        trainPer100km: 18,
        busPer100km: 10,
        domesticFlight: 90
      },
      usagePatterns: {
        tourist: 140,
        budgetTraveler: 70,
        digitalNomad: 120,
        resident: 100
      }
    },
    "Florence": {
      city: "Florence",
      publicTransport: {
        monthlyPass: 25,
        singleTicket: 1.5,
        dailyCap: 5,
        reliability: 6,
        coverage: 6,
        notes: "Walkable center, buses, and regional trains. Limited parking"
      },
      rideSharing: {
        baseFare: 3.5,
        costPerKm: 1.2,
        availability: 8,
        exampleTrip: 12
      },
      taxis: {
        startFare: 5,
        costPerKm: 1.4
      },
      rentalCars: {
        economyWeekly: 230,
        compactWeekly: 330,
        insuranceDaily: 17,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.85,
        dieselPerLiter: 1.75
      },
      intercity: {
        trainPer100km: 12,
        busPer100km: 7
      },
      usagePatterns: {
        tourist: 100,
        budgetTraveler: 50,
        digitalNomad: 80,
        resident: 65
      }
    },
    "Naples": {
      city: "Naples",
      publicTransport: {
        monthlyPass: 30,
        singleTicket: 1.5,
        dailyCap: 4.5,
        reliability: 5,
        coverage: 6,
        notes: "Metro, funiculars, buses. Can be chaotic but extensive"
      },
      rideSharing: {
        baseFare: 3,
        costPerKm: 1.1,
        availability: 8,
        exampleTrip: 10
      },
      taxis: {
        startFare: 4.5,
        costPerKm: 1.3
      },
      rentalCars: {
        economyWeekly: 200,
        compactWeekly: 300,
        insuranceDaily: 15,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 1.8,
        dieselPerLiter: 1.7
      },
      intercity: {
        trainPer100km: 10,
        busPer100km: 6
      },
      usagePatterns: {
        tourist: 90,
        budgetTraveler: 45,
        digitalNomad: 70,
        resident: 55
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 32,
      singleTicket: 1.6,
      dailyCap: 6,
      reliability: 6,
      coverage: 7
    },
    rideSharing: {
      baseFare: 3.5,
      costPerKm: 1.2,
      availability: 8,
      exampleTrip: 14
    },
    taxis: {
      startFare: 5,
      costPerKm: 1.5
    },
    rentalCars: {
      economyWeekly: 240,
      compactWeekly: 340,
      insuranceDaily: 18,
      fuelEfficiency: 14
    },
    fuel: {
      gasolinePerLiter: 1.85,
      dieselPerLiter: 1.75
    },
    intercity: {
      trainPer100km: 14,
      busPer100km: 8,
      domesticFlight: 85
    },
    usagePatterns: {
      tourist: 115,
      budgetTraveler: 58,
      digitalNomad: 93,
      resident: 76
    }
  }
};