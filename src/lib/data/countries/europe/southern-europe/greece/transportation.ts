import type { TransportationCosts } from '$lib/types/transportation';

export const greeceTransportation: TransportationCosts = {
  country: "Greece",
  region: "Southern Europe",
  currency: "EUR",
  cities: {
    "Athens": {
      city: "Athens",
      publicTransport: {
        monthlyPass: 30,
        singleTicket: 1.20,
        dailyCap: 4.50,
        reliability: 7,
        coverage: 8,
        notes: "Metro, buses, trams, and trolleys cover most of Athens"
      },
      rideSharing: {
        baseFare: 1.00,
        costPerKm: 0.90,
        availability: 7,
        exampleTrip: 8
      },
      taxis: {
        startFare: 3.50,
        costPerKm: 0.74,
        flagFall: 3.50
      },
      rentalCars: {
        economyWeekly: 150,
        compactWeekly: 180,
        insuranceDaily: 10,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.80
      },
      intercity: {
        trainPer100km: 10,
        busPer100km: 8,
        domesticFlight: 50
      },
      usagePatterns: {
        tourist: 80,
        budgetTraveler: 30,
        digitalNomad: 50,
        resident: 40
      }
    },
    "Thessaloniki": {
      city: "Thessaloniki",
      publicTransport: {
        monthlyPass: 25,
        singleTicket: 1.00,
        dailyCap: 3.50,
        reliability: 6,
        coverage: 7,
        notes: "Buses and trolleys serve the city, limited metro"
      },
      rideSharing: {
        baseFare: 1.00,
        costPerKm: 0.85,
        availability: 6,
        exampleTrip: 7
      },
      taxis: {
        startFare: 3.20,
        costPerKm: 0.70
      },
      rentalCars: {
        economyWeekly: 140,
        compactWeekly: 170,
        insuranceDaily: 9,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.78
      },
      intercity: {
        trainPer100km: 9,
        busPer100km: 7,
        domesticFlight: 45
      },
      usagePatterns: {
        tourist: 60,
        budgetTraveler: 25,
        digitalNomad: 45,
        resident: 35
      }
    },
    "Heraklion": {
      city: "Heraklion",
      publicTransport: {
        monthlyPass: 20,
        singleTicket: 1.50,
        dailyCap: 4.00,
        reliability: 5,
        coverage: 5,
        notes: "Limited city buses, rental car or scooter recommended for exploration"
      },
      rideSharing: {
        baseFare: 1.20,
        costPerKm: 1.00,
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
        insuranceDaily: 8,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 1.85  // Higher on islands
      },
      intercity: {
        busPer100km: 10,
        domesticFlight: 60
      },
      usagePatterns: {
        tourist: 100,
        budgetTraveler: 40,
        digitalNomad: 80,
        resident: 50
      }
    },
    "Rhodes": {
      city: "Rhodes",
      publicTransport: {
        monthlyPass: 15,
        singleTicket: 2.00,
        dailyCap: 5.00,
        reliability: 4,
        coverage: 4,
        notes: "Limited public transport, taxis and scooters main options"
      },
      rideSharing: {
        baseFare: 1.50,
        costPerKm: 1.10,
        availability: 4,
        exampleTrip: 12
      },
      taxis: {
        startFare: 4.50,
        costPerKm: 1.00
      },
      rentalCars: {
        economyWeekly: 130,
        compactWeekly: 160,
        insuranceDaily: 8,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.88  // Higher on islands
      },
      intercity: {},
      usagePatterns: {
        tourist: 120,
        budgetTraveler: 50,
        digitalNomad: 90,
        resident: 60
      }
    },
    "Santorini": {
      city: "Santorini",
      publicTransport: {
        monthlyPass: 0,
        singleTicket: 2.50,
        dailyCap: 8.00,
        reliability: 3,
        coverage: 3,
        notes: "Limited bus service between main towns, taxis expensive, ATV rentals popular"
      },
      rideSharing: {
        baseFare: 2.00,
        costPerKm: 1.50,
        availability: 3,
        exampleTrip: 15
      },
      taxis: {
        startFare: 5.00,
        costPerKm: 1.20
      },
      rentalCars: {
        economyWeekly: 160,  // Higher in peak season
        compactWeekly: 200,
        insuranceDaily: 12,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 1.90  // Highest on tourist islands
      },
      intercity: {},
      usagePatterns: {
        tourist: 150,
        budgetTraveler: 60,
        digitalNomad: 120,
        resident: 80
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 25,
      singleTicket: 1.50,
      dailyCap: 4.50,
      reliability: 5,
      coverage: 5
    },
    rideSharing: {
      baseFare: 1.20,
      costPerKm: 1.00,
      availability: 5,
      exampleTrip: 10
    },
    taxis: {
      startFare: 4.00,
      costPerKm: 0.90,
      flagFall: 4.00
    },
    rentalCars: {
      economyWeekly: 140,
      compactWeekly: 175,
      insuranceDaily: 10,
      fuelEfficiency: 14
    },
    fuel: {
      gasolinePerLiter: 1.85
    },
    intercity: {
      trainPer100km: 9,
      busPer100km: 8,
      domesticFlight: 50
    },
    usagePatterns: {
      tourist: 100,
      budgetTraveler: 40,
      digitalNomad: 80,
      resident: 50
    }
  }
};