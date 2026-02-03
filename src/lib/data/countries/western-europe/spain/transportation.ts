import type { TransportationCosts } from '$lib/types/transportation';

export const spainTransportation: TransportationCosts = {
  country: "Spain",
  region: "Europe",
  currency: "EUR",
  cities: {
    "Madrid": {
      city: "Madrid",
      publicTransport: {
        monthlyPass: 54.60,  // Abono Transportes
        singleTicket: 1.50,
        dailyCap: 8.40,
        reliability: 9,
        coverage: 9,
        notes: "Extensive metro, bus, and cercanías (commuter rail) network"
      },
      rideSharing: {
        baseFare: 2.80,
        costPerKm: 0.75,
        availability: 8,
        exampleTrip: 10
      },
      taxis: {
        startFare: 2.30,
        costPerKm: 1.10,
        flagFall: 2.30
      },
      rentalCars: {
        economyWeekly: 160,
        compactWeekly: 200,
        insuranceDaily: 18,
        fuelEfficiency: 16  // City driving
      },
      fuel: {
        gasolinePerLiter: 1.65,
        dieselPerLiter: 1.55
      },
      intercity: {
        trainPer100km: 20,
        busPer100km: 12,
        domesticFlight: 60
      },
      usagePatterns: {
        tourist: 150,
        budgetTraveler: 60,
        digitalNomad: 100,
        resident: 75
      }
    },
    "Barcelona": {
      city: "Barcelona",
      publicTransport: {
        monthlyPass: 40,     // T-usual
        singleTicket: 2.40,
        dailyCap: 10.50,
        reliability: 8,
        coverage: 8,
        notes: "Metro, buses, trams, and FGC trains. T-casual for 10 trips"
      },
      rideSharing: {
        baseFare: 3.00,
        costPerKm: 0.80,
        availability: 9,
        exampleTrip: 12
      },
      taxis: {
        startFare: 2.10,
        costPerKm: 1.13
      },
      rentalCars: {
        economyWeekly: 170,
        compactWeekly: 210,
        insuranceDaily: 19,
        fuelEfficiency: 15  // Heavy traffic
      },
      fuel: {
        gasolinePerLiter: 1.67,
        dieselPerLiter: 1.57
      },
      intercity: {
        trainPer100km: 18,
        busPer100km: 11
      },
      usagePatterns: {
        tourist: 160,
        budgetTraveler: 65,
        digitalNomad: 110,
        resident: 85
      }
    },
    "Valencia": {
      city: "Valencia",
      publicTransport: {
        monthlyPass: 35,
        singleTicket: 1.50,
        dailyCap: 5.00,
        reliability: 7,
        coverage: 7,
        notes: "Metro, buses, and tram. Bonometro for 10 trips"
      },
      rideSharing: {
        baseFare: 2.50,
        costPerKm: 0.70,
        availability: 7,
        exampleTrip: 9
      },
      taxis: {
        startFare: 2.00,
        costPerKm: 1.00
      },
      rentalCars: {
        economyWeekly: 150,
        compactWeekly: 190,
        insuranceDaily: 17,
        fuelEfficiency: 17  // Less traffic
      },
      fuel: {
        gasolinePerLiter: 1.63,
        dieselPerLiter: 1.53
      },
      intercity: {
        trainPer100km: 15,
        busPer100km: 10
      },
      usagePatterns: {
        tourist: 130,
        budgetTraveler: 55,
        digitalNomad: 90,
        resident: 70
      }
    },
    "Seville": {
      city: "Seville",
      publicTransport: {
        monthlyPass: 33.40,
        singleTicket: 1.40,
        reliability: 6,
        coverage: 6,
        notes: "Metro, buses, and tram. Walking in historic center"
      },
      rideSharing: {
        baseFare: 2.30,
        costPerKm: 0.65,
        availability: 6,
        exampleTrip: 8
      },
      taxis: {
        startFare: 2.00,
        costPerKm: 0.95
      },
      rentalCars: {
        economyWeekly: 140,
        compactWeekly: 180,
        insuranceDaily: 16,
        fuelEfficiency: 18
      },
      fuel: {
        gasolinePerLiter: 1.64,
        dieselPerLiter: 1.54
      },
      intercity: {
        trainPer100km: 14,
        busPer100km: 9
      },
      usagePatterns: {
        tourist: 140,
        budgetTraveler: 60,
        digitalNomad: 100,
        resident: 75
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 40,
      singleTicket: 1.50,
      dailyCap: 7.50,
      reliability: 7,
      coverage: 7
    },
    rideSharing: {
      baseFare: 2.65,
      costPerKm: 0.70,
      availability: 7,
      exampleTrip: 10
    },
    taxis: {
      startFare: 2.10,
      costPerKm: 1.00
    },
    rentalCars: {
      economyWeekly: 155,
      compactWeekly: 195,
      insuranceDaily: 17,
      fuelEfficiency: 17
    },
    fuel: {
      gasolinePerLiter: 1.65,
      dieselPerLiter: 1.55
    },
    intercity: {
      trainPer100km: 17,
      busPer100km: 11,
      domesticFlight: 60
    },
    usagePatterns: {
      tourist: 145,
      budgetTraveler: 60,
      digitalNomad: 100,
      resident: 75
    }
  }
};