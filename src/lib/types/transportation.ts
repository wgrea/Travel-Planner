// src/lib/types/transportation.ts

// First define the base interfaces
export interface CityTransportation {
  city: string;
  publicTransport: {
    monthlyPass: number;
    singleTicket: number;
    dailyCap?: number;
    reliability: number;  // Accepting 0-10 scale temporarily
    coverage: number;     // Accepting 0-10 scale temporarily
    notes?: string;
  };
  rideSharing: {
    baseFare: number;
    costPerKm: number;
    availability: number; // Accepting 0-10 scale temporarily
    exampleTrip: number;
  };
  taxis: {
    startFare: number;
    costPerKm: number;
    flagFall?: number;
  };
  rentalCars: {
    economyWeekly: number;
    compactWeekly: number;
    insuranceDaily: number;
    fuelEfficiency: number;
  };
  fuel: {
    gasolinePerLiter: number;
    dieselPerLiter?: number;
  };
  intercity: {
    trainPer100km?: number;
    busPer100km?: number;
    domesticFlight?: number;
  };
  usagePatterns: {
    tourist: number;
    budgetTraveler: number;
    digitalNomad: number;
    resident: number;
  };
}

export interface TransportationCosts {
  country: string;
  region: string;
  currency: string;
  cities: {
    [cityName: string]: CityTransportation;
  };
  nationalAverage?: Omit<CityTransportation, 'city'>;
}

// Then define the region/subregion structures
export interface SubregionTransportationData {
  subregion: string;
  countries: TransportationCosts[];
}

export interface RegionTransportationData {
  region: string;
  subregions?: SubregionTransportationData[];
  countries?: TransportationCosts[];
}