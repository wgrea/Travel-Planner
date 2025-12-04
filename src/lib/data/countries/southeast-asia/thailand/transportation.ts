// src/lib/data/countries/southeast-asia/thailand/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const thailandTransportation: TransportationCosts = {
  country: "Thailand",
  region: "Southeast Asia",
  currency: "THB",
  cities: {
    "Bangkok": {
      city: "Bangkok",
      publicTransport: {
        monthlyPass: 1400,  // BTS/MRT monthly pass
        singleTicket: 25,
        dailyCap: 140,
        reliability: 80,    // CHANGED: 8 → 80 (0-100 scale)
        coverage: 80,       // CHANGED: 8 → 80 (0-100 scale)
        notes: "BTS Skytrain and MRT subway cover most central areas"
      },
      rideSharing: {
        baseFare: 25,
        costPerKm: 8,
        availability: 90,   // CHANGED: 9 → 90 (0-100 scale)
        exampleTrip: 65
      },
      taxis: {
        startFare: 35,
        costPerKm: 7,
        flagFall: 35
      },
      rentalCars: {
        economyWeekly: 5500,
        compactWeekly: 7500,
        insuranceDaily: 250,
        fuelEfficiency: 14  // Lower due to traffic
      },
      fuel: {
        gasolinePerLiter: 42
      },
      intercity: {
        trainPer100km: 150,
        busPer100km: 120,
        domesticFlight: 1500
      },
      usagePatterns: {
        tourist: 3000,
        budgetTraveler: 1400,
        digitalNomad: 2000,
        resident: 1800
      }
    },
    "Chiang Mai": {
      city: "Chiang Mai",
      publicTransport: {
        monthlyPass: 800,
        singleTicket: 20,
        dailyCap: 100,
        reliability: 60,    // CHANGED: 6 → 60
        coverage: 50,       // CHANGED: 5 → 50
        notes: "Songthaews (red trucks) are the main public transport"
      },
      rideSharing: {
        baseFare: 30,
        costPerKm: 10,
        availability: 70,   // CHANGED: 7 → 70
        exampleTrip: 80
      },
      taxis: {
        startFare: 40,
        costPerKm: 8
      },
      rentalCars: {
        economyWeekly: 3500,
        compactWeekly: 5000,
        insuranceDaily: 150,
        fuelEfficiency: 16  // Better due to less traffic
      },
      fuel: {
        gasolinePerLiter: 41
      },
      intercity: {
        busPer100km: 100
      },
      usagePatterns: {
        tourist: 1800,
        budgetTraveler: 800,
        digitalNomad: 1200,
        resident: 1000
      }
    },
    "Phuket": {
      city: "Phuket",
      publicTransport: {
        monthlyPass: 0,
        singleTicket: 40,
        reliability: 40,    // CHANGED: 4 → 40
        coverage: 30,       // CHANGED: 3 → 30
        notes: "Limited public transport, tuk-tuks and taxis are primary options"
      },
      rideSharing: {
        baseFare: 40,
        costPerKm: 12,
        availability: 60,   // CHANGED: 6 → 60
        exampleTrip: 100
      },
      taxis: {
        startFare: 50,
        costPerKm: 12
      },
      rentalCars: {
        economyWeekly: 4500,
        compactWeekly: 6000,
        insuranceDaily: 200,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 43  // Slightly higher on islands
      },
      intercity: {},
      usagePatterns: {
        tourist: 3500,
        budgetTraveler: 1500,
        digitalNomad: 2500,
        resident: 2000
      }
    },
    "Koh Phangan": {
      city: "Koh Phangan",
      publicTransport: {
        monthlyPass: 0,
        singleTicket: 50,
        reliability: 30,    // CHANGED: 3 → 30
        coverage: 20,       // CHANGED: 2 → 20
        notes: "Motorbike taxis are main transport, scooter rentals recommended"
      },
      rideSharing: {
        baseFare: 0,
        costPerKm: 0,
        availability: 10,   // CHANGED: 1 → 10
        exampleTrip: 0
      },
      taxis: {
        startFare: 60,      // Pickup truck taxis
        costPerKm: 15
      },
      rentalCars: {
        economyWeekly: 0,   // Few car rentals
        compactWeekly: 0,
        insuranceDaily: 0,
        fuelEfficiency: 0
      },
      fuel: {
        gasolinePerLiter: 45  // Higher on islands
      },
      intercity: {},
      usagePatterns: {
        tourist: 2000,      // Mostly scooter rentals
        budgetTraveler: 800,
        digitalNomad: 1500,
        resident: 1200
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 1200,
      singleTicket: 25,
      dailyCap: 140,
      reliability: 70,      // CHANGED: 7 → 70
      coverage: 60          // CHANGED: 6 → 60
    },
    rideSharing: {
      baseFare: 25,
      costPerKm: 8,
      availability: 70,     // CHANGED: 7 → 70
      exampleTrip: 65
    },
    taxis: {
      startFare: 35,
      costPerKm: 7,
      flagFall: 35
    },
    rentalCars: {
      economyWeekly: 5000,
      compactWeekly: 7000,
      insuranceDaily: 200,
      fuelEfficiency: 15
    },
    fuel: {
      gasolinePerLiter: 40
    },
    intercity: {
      trainPer100km: 150,
      busPer100km: 120,
      domesticFlight: 1500
    },
    usagePatterns: {
      tourist: 2500,
      budgetTraveler: 1200,
      digitalNomad: 1800,
      resident: 1500
    }
  }
};