// src/lib/data/countries/south-america/argentina/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const argentinaTransportation: TransportationCosts = {
  country: "Argentina",
  region: "South America",
  currency: "ARS",
  cities: {
    "Buenos Aires": {
      city: "Buenos Aires",
      publicTransport: {
        monthlyPass: 25000,  // SUBE card monthly pass
        singleTicket: 150,
        dailyCap: 600,
        reliability: 85,     // Good coverage in city center
        coverage: 85,        // Extensive bus and subway network
        notes: "SUBE card works on all public transport. Subte (subway) covers central areas, buses go everywhere"
      },
      rideSharing: {
        baseFare: 200,
        costPerKm: 180,
        availability: 95,    // Uber, Cabify, and local apps widely available
        exampleTrip: 1200    // Example: Palermo to Recoleta
      },
      taxis: {
        startFare: 150,
        costPerKm: 160,
        flagFall: 150
      },
      rentalCars: {
        economyWeekly: 120000,
        compactWeekly: 160000,
        insuranceDaily: 4000,
        fuelEfficiency: 12   // City traffic
      },
      fuel: {
        gasolinePerLiter: 650  // Premium gasoline price
      },
      intercity: {
        trainPer100km: 2000,
        busPer100km: 1500,
        domesticFlight: 50000
      },
      usagePatterns: {
        tourist: 40000,
        budgetTraveler: 25000,
        digitalNomad: 35000,
        resident: 28000
      }
    },
    "Córdoba": {
      city: "Córdoba",
      publicTransport: {
        monthlyPass: 18000,
        singleTicket: 120,
        dailyCap: 500,
        reliability: 75,
        coverage: 70,
        notes: "Bus system covers most areas, Red Bus card system"
      },
      rideSharing: {
        baseFare: 180,
        costPerKm: 160,
        availability: 85,
        exampleTrip: 1000
      },
      taxis: {
        startFare: 130,
        costPerKm: 150
      },
      rentalCars: {
        economyWeekly: 100000,
        compactWeekly: 140000,
        insuranceDaily: 3500,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 630
      },
      intercity: {
        busPer100km: 1400
      },
      usagePatterns: {
        tourist: 25000,
        budgetTraveler: 18000,
        digitalNomad: 22000,
        resident: 20000
      }
    },
    "Mendoza": {
      city: "Mendoza",
      publicTransport: {
        monthlyPass: 15000,
        singleTicket: 100,
        dailyCap: 400,
        reliability: 70,
        coverage: 65,
        notes: "Buses serve city and wine region routes"
      },
      rideSharing: {
        baseFare: 170,
        costPerKm: 150,
        availability: 80,
        exampleTrip: 900
      },
      taxis: {
        startFare: 120,
        costPerKm: 140
      },
      rentalCars: {
        economyWeekly: 110000,
        compactWeekly: 150000,
        insuranceDaily: 3800,
        fuelEfficiency: 15  // Less traffic than BA
      },
      fuel: {
        gasolinePerLiter: 640
      },
      intercity: {
        busPer100km: 1300
      },
      usagePatterns: {
        tourist: 22000,
        budgetTraveler: 15000,
        digitalNomad: 19000,
        resident: 17000
      }
    },
    "Bariloche": {
      city: "Bariloche",
      publicTransport: {
        monthlyPass: 12000,
        singleTicket: 80,
        dailyCap: 300,
        reliability: 60,
        coverage: 50,
        notes: "Limited public transport, mainly buses between center and ski resorts"
      },
      rideSharing: {
        baseFare: 200,
        costPerKm: 200,
        availability: 65,
        exampleTrip: 1500
      },
      taxis: {
        startFare: 150,
        costPerKm: 180
      },
      rentalCars: {
        economyWeekly: 130000,
        compactWeekly: 180000,
        insuranceDaily: 4500,
        fuelEfficiency: 16  // Highway and mountain driving
      },
      fuel: {
        gasolinePerLiter: 680  // Higher in tourist areas
      },
      intercity: {},
      usagePatterns: {
        tourist: 35000,
        budgetTraveler: 20000,
        digitalNomad: 28000,
        resident: 23000
      }
    },
    "Salta": {
      city: "Salta",
      publicTransport: {
        monthlyPass: 14000,
        singleTicket: 90,
        dailyCap: 350,
        reliability: 65,
        coverage: 60,
        notes: "Buses cover city center and main attractions"
      },
      rideSharing: {
        baseFare: 160,
        costPerKm: 140,
        availability: 70,
        exampleTrip: 800
      },
      taxis: {
        startFare: 110,
        costPerKm: 130
      },
      rentalCars: {
        economyWeekly: 90000,
        compactWeekly: 130000,
        insuranceDaily: 3200,
        fuelEfficiency: 17  // Road trips common
      },
      fuel: {
        gasolinePerLiter: 620
      },
      intercity: {},
      usagePatterns: {
        tourist: 20000,
        budgetTraveler: 14000,
        digitalNomad: 18000,
        resident: 16000
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 20000,
      singleTicket: 130,
      dailyCap: 500,
      reliability: 75,
      coverage: 70
    },
    rideSharing: {
      baseFare: 180,
      costPerKm: 170,
      availability: 80,
      exampleTrip: 1100
    },
    taxis: {
      startFare: 140,
      costPerKm: 155,
      flagFall: 140
    },
    rentalCars: {
      economyWeekly: 110000,
      compactWeekly: 150000,
      insuranceDaily: 3800,
      fuelEfficiency: 14
    },
    fuel: {
      gasolinePerLiter: 650
    },
    intercity: {
      trainPer100km: 2000,
      busPer100km: 1500,
      domesticFlight: 50000
    },
    usagePatterns: {
      tourist: 30000,
      budgetTraveler: 20000,
      digitalNomad: 25000,
      resident: 22000
    }
  }
};