// src/lib/data/countries/europe/united-kingdom/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const ukTransportation: TransportationCosts = {
  country: "United Kingdom",
  region: "Western Europe",
  currency: "GBP",
  cities: {
    "London": {
      city: "London",
      publicTransport: {
        monthlyPass: 150,
        singleTicket: 2.5,
        dailyCap: 8,
        reliability: 8,
        coverage: 10,
        notes: "Extensive Underground (Tube), buses, Overground, DLR, trams. Oyster/Contactless payment"
      },
      rideSharing: {
        baseFare: 3.5,
        costPerKm: 1.5,
        availability: 10,
        exampleTrip: 15
      },
      taxis: {
        startFare: 3.5,
        costPerKm: 2.5
      },
      rentalCars: {
        economyWeekly: 250,
        compactWeekly: 350,
        insuranceDaily: 25,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 1.6,
        dieselPerLiter: 1.7
      },
      intercity: {
        trainPer100km: 25,
        busPer100km: 10,
        domesticFlight: 80
      },
      usagePatterns: {
        tourist: 120,
        budgetTraveler: 60,
        digitalNomad: 100,
        resident: 80
      }
    },
    "Manchester": {
      city: "Manchester",
      publicTransport: {
        monthlyPass: 80,
        singleTicket: 2,
        dailyCap: 5,
        reliability: 7,
        coverage: 8,
        notes: "Metrolink trams, buses, trains. System One travelcard available"
      },
      rideSharing: {
        baseFare: 3,
        costPerKm: 1.2,
        availability: 9,
        exampleTrip: 10
      },
      taxis: {
        startFare: 3,
        costPerKm: 2
      },
      rentalCars: {
        economyWeekly: 200,
        compactWeekly: 280,
        insuranceDaily: 20,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 1.55,
        dieselPerLiter: 1.65
      },
      intercity: {
        trainPer100km: 20,
        busPer100km: 8
      },
      usagePatterns: {
        tourist: 80,
        budgetTraveler: 40,
        digitalNomad: 70,
        resident: 60
      }
    },
    "Edinburgh": {
      city: "Edinburgh",
      publicTransport: {
        monthlyPass: 60,
        singleTicket: 1.8,
        dailyCap: 4.5,
        reliability: 7,
        coverage: 7,
        notes: "Buses main transport, trams to airport, Ridacard for monthly travel"
      },
      rideSharing: {
        baseFare: 2.8,
        costPerKm: 1.1,
        availability: 8,
        exampleTrip: 9
      },
      taxis: {
        startFare: 2.8,
        costPerKm: 1.8
      },
      rentalCars: {
        economyWeekly: 180,
        compactWeekly: 250,
        insuranceDaily: 18,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.58,
        dieselPerLiter: 1.68
      },
      intercity: {
        trainPer100km: 22,
        busPer100km: 9
      },
      usagePatterns: {
        tourist: 70,
        budgetTraveler: 35,
        digitalNomad: 60,
        resident: 50
      }
    },
    "Bristol": {
      city: "Bristol",
      publicTransport: {
        monthlyPass: 70,
        singleTicket: 2.2,
        dailyCap: 5,
        reliability: 6,
        coverage: 6,
        notes: "Buses main transport, limited park and ride, First Bus app"
      },
      rideSharing: {
        baseFare: 3.2,
        costPerKm: 1.3,
        availability: 8,
        exampleTrip: 11
      },
      taxis: {
        startFare: 3.2,
        costPerKm: 2.2
      },
      rentalCars: {
        economyWeekly: 190,
        compactWeekly: 270,
        insuranceDaily: 19,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 1.57,
        dieselPerLiter: 1.67
      },
      intercity: {
        trainPer100km: 21,
        busPer100km: 8.5
      },
      usagePatterns: {
        tourist: 75,
        budgetTraveler: 38,
        digitalNomad: 65,
        resident: 55
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 90,
      singleTicket: 2.1,
      dailyCap: 5.6,
      reliability: 7,
      coverage: 8
    },
    rideSharing: {
      baseFare: 3.1,
      costPerKm: 1.3,
      availability: 9,
      exampleTrip: 11
    },
    taxis: {
      startFare: 3.1,
      costPerKm: 2.1
    },
    rentalCars: {
      economyWeekly: 205,
      compactWeekly: 290,
      insuranceDaily: 21,
      fuelEfficiency: 13
    },
    fuel: {
      gasolinePerLiter: 1.58,
      dieselPerLiter: 1.68
    },
    intercity: {
      trainPer100km: 22,
      busPer100km: 9,
      domesticFlight: 100
    },
    usagePatterns: {
      tourist: 86,
      budgetTraveler: 43,
      digitalNomad: 74,
      resident: 61
    }
  }
};