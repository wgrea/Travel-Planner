import type { TransportationCosts } from '$lib/types/transportation';

export const unitedStatesTransportation: TransportationCosts = {
  country: "United States",
  region: "North America",
  currency: "USD",
  cities: {
    "New York": {
      city: "New York",
      publicTransport: {
        monthlyPass: 132,
        singleTicket: 2.75,
        dailyCap: 12,
        reliability: 8,
        coverage: 9,
        notes: "Subway system is extensive, buses cover remaining areas"
      },
      rideSharing: {
        baseFare: 2.50,
        costPerKm: 1.75,
        availability: 9,
        exampleTrip: 15
      },
      taxis: {
        startFare: 3.00,
        costPerKm: 2.00,
        flagFall: 3.00
      },
      rentalCars: {
        economyWeekly: 250,
        compactWeekly: 300,
        insuranceDaily: 20,
        fuelEfficiency: 10
      },
      fuel: {
        gasolinePerLiter: 0.95
      },
      intercity: {
        trainPer100km: 40,
        busPer100km: 25,
        domesticFlight: 150
      },
      usagePatterns: {
        tourist: 150,
        budgetTraveler: 132,
        digitalNomad: 200,
        resident: 132
      }
    },
    "San Francisco": {
      city: "San Francisco",
      publicTransport: {
        monthlyPass: 98,
        singleTicket: 2.50,
        dailyCap: 15,
        reliability: 7,
        coverage: 8,
        notes: "Muni buses, metro, and cable cars cover most areas"
      },
      rideSharing: {
        baseFare: 3.00,
        costPerKm: 2.00,
        availability: 9,
        exampleTrip: 18
      },
      taxis: {
        startFare: 3.50,
        costPerKm: 2.50
      },
      rentalCars: {
        economyWeekly: 200,
        compactWeekly: 250,
        insuranceDaily: 18,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 1.05
      },
      intercity: {
        trainPer100km: 35,
        busPer100km: 20,
        domesticFlight: 120
      },
      usagePatterns: {
        tourist: 180,
        budgetTraveler: 98,
        digitalNomad: 150,
        resident: 120
      }
    },
    "Los Angeles": {
      city: "Los Angeles",
      publicTransport: {
        monthlyPass: 100,
        singleTicket: 1.75,
        dailyCap: 7,
        reliability: 6,
        coverage: 6,
        notes: "Car-dependent city, public transport limited but improving"
      },
      rideSharing: {
        baseFare: 2.50,
        costPerKm: 1.50,
        availability: 9,
        exampleTrip: 20
      },
      taxis: {
        startFare: 3.50,
        costPerKm: 2.00
      },
      rentalCars: {
        economyWeekly: 180,
        compactWeekly: 220,
        insuranceDaily: 15,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 1.05
      },
      intercity: {
        trainPer100km: 35,
        busPer100km: 20,
        domesticFlight: 120
      },
      usagePatterns: {
        tourist: 250,
        budgetTraveler: 120,
        digitalNomad: 200,
        resident: 150
      }
    },
    "Austin": {
      city: "Austin",
      publicTransport: {
        monthlyPass: 41,
        singleTicket: 1.25,
        dailyCap: 3.50,
        reliability: 6,
        coverage: 5,
        notes: "Limited public transport, ride-sharing and scooters popular"
      },
      rideSharing: {
        baseFare: 2.00,
        costPerKm: 1.25,
        availability: 8,
        exampleTrip: 12
      },
      taxis: {
        startFare: 3.00,
        costPerKm: 1.75
      },
      rentalCars: {
        economyWeekly: 150,
        compactWeekly: 180,
        insuranceDaily: 12,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 0.80
      },
      intercity: {
        trainPer100km: 30,
        busPer100km: 15,
        domesticFlight: 100
      },
      usagePatterns: {
        tourist: 120,
        budgetTraveler: 50,
        digitalNomad: 100,
        resident: 80
      }
    },
    "Miami": {
      city: "Miami",
      publicTransport: {
        monthlyPass: 112,
        singleTicket: 2.25,
        dailyCap: 9,
        reliability: 6,
        coverage: 6,
        notes: "Metrorail and buses serve main areas, car often needed"
      },
      rideSharing: {
        baseFare: 2.75,
        costPerKm: 1.60,
        availability: 9,
        exampleTrip: 16
      },
      taxis: {
        startFare: 3.75,
        costPerKm: 2.10
      },
      rentalCars: {
        economyWeekly: 170,
        compactWeekly: 210,
        insuranceDaily: 16,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 0.95
      },
      intercity: {
        trainPer100km: 35,
        busPer100km: 18,
        domesticFlight: 130
      },
      usagePatterns: {
        tourist: 180,
        budgetTraveler: 112,
        digitalNomad: 160,
        resident: 130
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 100,
      singleTicket: 2.50,
      dailyCap: 10,
      reliability: 7,
      coverage: 7
    },
    rideSharing: {
      baseFare: 2.50,
      costPerKm: 1.50,
      availability: 9,
      exampleTrip: 15
    },
    taxis: {
      startFare: 3.50,
      costPerKm: 2.00,
      flagFall: 3.50
    },
    rentalCars: {
      economyWeekly: 200,
      compactWeekly: 250,
      insuranceDaily: 15,
      fuelEfficiency: 12
    },
    fuel: {
      gasolinePerLiter: 0.90
    },
    intercity: {
      trainPer100km: 35,
      busPer100km: 20,
      domesticFlight: 150
    },
    usagePatterns: {
      tourist: 200,
      budgetTraveler: 100,
      digitalNomad: 150,
      resident: 120
    }
  }
};