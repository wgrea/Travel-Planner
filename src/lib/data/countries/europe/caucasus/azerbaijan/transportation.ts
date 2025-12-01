// src/lib/data/countries/europe/caucasus/azerbaijan/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const azerbaijanTransportation: TransportationCosts = {
  country: "Azerbaijan",
  region: "Caucasus",
  currency: "AZN",
  cities: {
    "Baku": {
      city: "Baku",
      publicTransport: {
        monthlyPass: 30,  // ~$18 USD
        singleTicket: 0.3,
        dailyCap: 1.5,
        reliability: 7,
        coverage: 7,
        notes: "Baku Metro, buses, and new BakuBus system"
      },
      rideSharing: {
        baseFare: 2,
        costPerKm: 0.5,
        availability: 8,
        exampleTrip: 5
      },
      taxis: {
        startFare: 1.5,
        costPerKm: 0.7
      },
      rentalCars: {
        economyWeekly: 250,
        compactWeekly: 350,
        insuranceDaily: 15,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 1,
        dieselPerLiter: 0.8
      },
      intercity: {
        trainPer100km: 10,
        busPer100km: 8,
        domesticFlight: 80
      },
      usagePatterns: {
        tourist: 120,
        budgetTraveler: 60,
        digitalNomad: 100,
        resident: 80
      }
    },
    "Gabala": {
      city: "Gabala",
      publicTransport: {
        monthlyPass: 20,
        singleTicket: 0.4,
        reliability: 5,
        coverage: 4,
        notes: "Limited local buses, taxis more common"
      },
      rideSharing: {
        baseFare: 2.5,
        costPerKm: 0.6,
        availability: 6,
        exampleTrip: 8
      },
      taxis: {
        startFare: 2,
        costPerKm: 0.8
      },
      rentalCars: {
        economyWeekly: 200,
        compactWeekly: 300,
        insuranceDaily: 12,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 1.05,
        dieselPerLiter: 0.85
      },
      intercity: {
        busPer100km: 9
      },
      usagePatterns: {
        tourist: 100,
        budgetTraveler: 50,
        digitalNomad: 80,
        resident: 65
      }
    },
    "Sheki": {
      city: "Sheki",
      publicTransport: {
        monthlyPass: 15,
        singleTicket: 0.3,
        reliability: 4,
        coverage: 3,
        notes: "Small city, walkable center, local minibuses"
      },
      rideSharing: {
        baseFare: 2,
        costPerKm: 0.5,
        availability: 5,
        exampleTrip: 4
      },
      taxis: {
        startFare: 1.5,
        costPerKm: 0.6
      },
      rentalCars: {
        economyWeekly: 180,
        compactWeekly: 280,
        insuranceDaily: 10,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.1,
        dieselPerLiter: 0.9
      },
      intercity: {
        busPer100km: 7
      },
      usagePatterns: {
        tourist: 80,
        budgetTraveler: 40,
        digitalNomad: 65,
        resident: 50
      }
    },
    "Ganja": {
      city: "Ganja",
      publicTransport: {
        monthlyPass: 25,
        singleTicket: 0.35,
        reliability: 6,
        coverage: 5,
        notes: "City buses and marshrutkas (minibuses)"
      },
      rideSharing: {
        baseFare: 2.2,
        costPerKm: 0.55,
        availability: 7,
        exampleTrip: 6
      },
      taxis: {
        startFare: 1.8,
        costPerKm: 0.75
      },
      rentalCars: {
        economyWeekly: 220,
        compactWeekly: 320,
        insuranceDaily: 13,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 1,
        dieselPerLiter: 0.8
      },
      intercity: {
        trainPer100km: 9,
        busPer100km: 7
      },
      usagePatterns: {
        tourist: 90,
        budgetTraveler: 45,
        digitalNomad: 75,
        resident: 60
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 25,
      singleTicket: 0.35,
      dailyCap: 1.5,
      reliability: 6,
      coverage: 5
    },
    rideSharing: {
      baseFare: 2.2,
      costPerKm: 0.55,
      availability: 7,
      exampleTrip: 6
    },
    taxis: {
      startFare: 1.8,
      costPerKm: 0.7
    },
    rentalCars: {
      economyWeekly: 220,
      compactWeekly: 320,
      insuranceDaily: 12,
      fuelEfficiency: 12
    },
    fuel: {
      gasolinePerLiter: 1.05,
      dieselPerLiter: 0.85
    },
    intercity: {
      trainPer100km: 9,
      busPer100km: 8,
      domesticFlight: 80
    },
    usagePatterns: {
      tourist: 100,
      budgetTraveler: 50,
      digitalNomad: 80,
      resident: 65
    }
  }
};