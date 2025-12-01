// src/lib/data/countries/europe/western-europe/portugal/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const portugalTransportation: TransportationCosts = {
  country: "Portugal",
  region: "Europe",
  currency: "EUR",
  cities: {
    "Lisbon": {
      city: "Lisbon",
      publicTransport: {
        monthlyPass: 40,
        singleTicket: 1.50,
        dailyCap: 6.40,
        reliability: 8,
        coverage: 7,
        notes: "Metro, buses, trams, and trains. Use Viva Viagem card"
      },
      rideSharing: {
        baseFare: 2.50,
        costPerKm: 0.60,
        availability: 8,
        exampleTrip: 8
      },
      taxis: {
        startFare: 3.25,
        costPerKm: 0.80
      },
      rentalCars: {
        economyWeekly: 150,
        compactWeekly: 180,
        insuranceDaily: 15,
        fuelEfficiency: 18  // Mostly city driving with hills
      },
      fuel: {
        gasolinePerLiter: 1.80,
        dieselPerLiter: 1.65
      },
      intercity: {
        trainPer100km: 15,
        busPer100km: 10,
        domesticFlight: 50
      },
      usagePatterns: {
        tourist: 120,
        budgetTraveler: 50,
        digitalNomad: 80,
        resident: 60
      }
    },
    "Porto": {
      city: "Porto",
      publicTransport: {
        monthlyPass: 35,
        singleTicket: 1.20,
        dailyCap: 5.00,
        reliability: 7,
        coverage: 6,
        notes: "Metro, buses, and trams. Use Andante card"
      },
      rideSharing: {
        baseFare: 2.00,
        costPerKm: 0.55,
        availability: 7,
        exampleTrip: 7
      },
      taxis: {
        startFare: 3.00,
        costPerKm: 0.75
      },
      rentalCars: {
        economyWeekly: 140,
        compactWeekly: 170,
        insuranceDaily: 14,
        fuelEfficiency: 17
      },
      fuel: {
        gasolinePerLiter: 1.78,
        dieselPerLiter: 1.63
      },
      intercity: {
        trainPer100km: 12,
        busPer100km: 8
      },
      usagePatterns: {
        tourist: 100,
        budgetTraveler: 45,
        digitalNomad: 70,
        resident: 55
      }
    },
    "Faro": {
      city: "Faro",
      publicTransport: {
        monthlyPass: 30,
        singleTicket: 1.80,
        reliability: 5,
        coverage: 4,
        notes: "Limited bus network, better in summer tourist season"
      },
      rideSharing: {
        baseFare: 2.20,
        costPerKm: 0.65,
        availability: 6,
        exampleTrip: 9
      },
      taxis: {
        startFare: 3.50,
        costPerKm: 0.85
      },
      rentalCars: {
        economyWeekly: 130,
        compactWeekly: 160,
        insuranceDaily: 13,
        fuelEfficiency: 19  // Better highway driving
      },
      fuel: {
        gasolinePerLiter: 1.82,
        dieselPerLiter: 1.68
      },
      intercity: {
        trainPer100km: 10,
        busPer100km: 6
      },
      usagePatterns: {
        tourist: 150,
        budgetTraveler: 60,
        digitalNomad: 100,
        resident: 75
      }
    },
    "Lagos": {
      city: "Lagos",
      publicTransport: {
        monthlyPass: 25,
        singleTicket: 1.50,
        reliability: 4,
        coverage: 3,
        notes: "Seasonal bus service, walking town center"
      },
      rideSharing: {
        baseFare: 2.50,
        costPerKm: 0.70,
        availability: 5,
        exampleTrip: 10
      },
      taxis: {
        startFare: 4.00,
        costPerKm: 0.90
      },
      rentalCars: {
        economyWeekly: 120,
        compactWeekly: 150,
        insuranceDaily: 12,
        fuelEfficiency: 20
      },
      fuel: {
        gasolinePerLiter: 1.85,
        dieselPerLiter: 1.70
      },
      intercity: {},
      usagePatterns: {
        tourist: 160,
        budgetTraveler: 70,
        digitalNomad: 110,
        resident: 85
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 35,
      singleTicket: 1.50,
      dailyCap: 6.00,
      reliability: 6,
      coverage: 5
    },
    rideSharing: {
      baseFare: 2.30,
      costPerKm: 0.60,
      availability: 7,
      exampleTrip: 8
    },
    taxis: {
      startFare: 3.40,
      costPerKm: 0.80
    },
    rentalCars: {
      economyWeekly: 140,
      compactWeekly: 170,
      insuranceDaily: 14,
      fuelEfficiency: 18
    },
    fuel: {
      gasolinePerLiter: 1.81,
      dieselPerLiter: 1.66
    },
    intercity: {
      trainPer100km: 12,
      busPer100km: 8,
      domesticFlight: 50
    },
    usagePatterns: {
      tourist: 130,
      budgetTraveler: 55,
      digitalNomad: 90,
      resident: 70
    }
  }
};