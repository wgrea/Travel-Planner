// src/lib/data/countries/southeast-asia/laos/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const laosTransportation: TransportationCosts = {
  country: "Laos",
  region: "Southeast Asia",
  currency: "LAK (Kip), USD accepted",
  cities: {
    "Vientiane": {
      city: "Vientiane",
      publicTransport: {
        monthlyPass: 15,
        singleTicket: 0.5,
        reliability: 4,
        coverage: 3,
        notes: "Limited city buses, tuk-tuks and songthaews main transport"
      },
      rideSharing: {
        baseFare: 2.5,
        costPerKm: 0.8,
        availability: 6,
        exampleTrip: 5
      },
      taxis: {
        startFare: 2,
        costPerKm: 0.7
      },
      rentalCars: {
        economyWeekly: 180,
        compactWeekly: 250,
        insuranceDaily: 10,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 1.2,
        dieselPerLiter: 1.1
      },
      intercity: {
        busPer100km: 8,
        domesticFlight: 80
      },
      usagePatterns: {
        tourist: 60,
        budgetTraveler: 30,
        digitalNomad: 50,
        resident: 40
      }
    },
    "Luang Prabang": {
      city: "Luang Prabang",
      publicTransport: {
        monthlyPass: 10,
        singleTicket: 0.4,
        reliability: 3,
        coverage: 2,
        notes: "Very walkable town center, tuk-tuks for longer distances"
      },
      rideSharing: {
        baseFare: 3,
        costPerKm: 1,
        availability: 5,
        exampleTrip: 8
      },
      taxis: {
        startFare: 2.5,
        costPerKm: 0.9
      },
      rentalCars: {
        economyWeekly: 200,
        compactWeekly: 280,
        insuranceDaily: 12,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.25,
        dieselPerLiter: 1.15
      },
      intercity: {
        busPer100km: 10,
        domesticFlight: 100
      },
      usagePatterns: {
        tourist: 50,
        budgetTraveler: 25,
        digitalNomad: 40,
        resident: 35
      }
    },
    "Vang Vieng": {
      city: "Vang Vieng",
      publicTransport: {
        monthlyPass: 8,
        singleTicket: 0.3,
        reliability: 3,
        coverage: 2,
        notes: "Small town, walking or bicycle sufficient for most needs"
      },
      rideSharing: {
        baseFare: 4,
        costPerKm: 1.2,
        availability: 4,
        exampleTrip: 12
      },
      taxis: {
        startFare: 3,
        costPerKm: 1.1
      },
      rentalCars: {
        economyWeekly: 220,
        compactWeekly: 300,
        insuranceDaily: 15,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 1.3,
        dieselPerLiter: 1.2
      },
      intercity: {
        busPer100km: 9
      },
      usagePatterns: {
        tourist: 45,
        budgetTraveler: 22,
        digitalNomad: 35,
        resident: 30
      }
    },
    "Pakse": {
      city: "Pakse",
      publicTransport: {
        monthlyPass: 12,
        singleTicket: 0.4,
        reliability: 3,
        coverage: 2,
        notes: "Limited local transport, tuk-tuks and motorbike taxis common"
      },
      rideSharing: {
        baseFare: 2.8,
        costPerKm: 0.9,
        availability: 5,
        exampleTrip: 7
      },
      taxis: {
        startFare: 2.2,
        costPerKm: 0.8
      },
      rentalCars: {
        economyWeekly: 190,
        compactWeekly: 270,
        insuranceDaily: 11,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 1.22,
        dieselPerLiter: 1.12
      },
      intercity: {
        busPer100km: 7
      },
      usagePatterns: {
        tourist: 55,
        budgetTraveler: 28,
        digitalNomad: 45,
        resident: 38
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 12,
      singleTicket: 0.4,
      reliability: 3,
      coverage: 2
    },
    rideSharing: {
      baseFare: 3,
      costPerKm: 1,
      availability: 5,
      exampleTrip: 8
    },
    taxis: {
      startFare: 2.5,
      costPerKm: 0.9
    },
    rentalCars: {
      economyWeekly: 200,
      compactWeekly: 280,
      insuranceDaily: 12,
      fuelEfficiency: 14
    },
    fuel: {
      gasolinePerLiter: 1.24,
      dieselPerLiter: 1.14
    },
    intercity: {
      busPer100km: 9,
      domesticFlight: 90
    },
    usagePatterns: {
      tourist: 55,
      budgetTraveler: 28,
      digitalNomad: 45,
      resident: 38
    }
  }
};