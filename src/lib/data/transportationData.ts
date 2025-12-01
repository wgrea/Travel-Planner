// src/lib/data/transportationData.ts
import type { 
  TransportationCosts, 
  RegionTransportationData, 
  SubregionTransportationData 
} from '../types/transportation';

// Import from country modules following your pattern
import { thailandTransportation } from './countries/southeast-asia/thailand';
// import { vietnamTransportation } from './countries/southeast-asia/vietnam';
// import { indonesiaTransportation } from './countries/southeast-asia/indonesia';
// import { portugalTransportation } from './countries/europe/western-europe/portugal';
// import { spainTransportation } from './countries/europe/western-europe/spain';
// import { georgiaTransportation } from './countries/europe/caucasus/georgia';
// import { mexicoTransportation } from './countries/north-america/mexico';
// import { colombiaTransportation } from './countries/south-america/colombia';

export const transportationDataByRegion: RegionTransportationData[] = [
  {
    region: "Southeast Asia",
    countries: [
      thailandTransportation,
      // vietnamTransportation,
      // indonesiaTransportation,
    ]
  },
  {
    region: "Europe",
    subregions: [
      {
        subregion: "Western Europe",
        countries: [
          // portugalTransportation,
          // spainTransportation,
        ]
      },
      {
        subregion: "Caucasus",
        countries: [
          // georgiaTransportation,
        ]
      }
    ]
  },
  {
    region: "North America",
    countries: [
      // mexicoTransportation,
    ]
  },
  {
    region: "South America",
    countries: [
      // colombiaTransportation,
    ]
  }
];


// FLAT ARRAY FOR EASY ACCESS - FIXED VERSION
export const transportationData: TransportationCosts[] = transportationDataByRegion.flatMap(region => {
  if (region.subregions) {
    return region.subregions.flatMap((subregion: SubregionTransportationData) => subregion.countries);
  } else if (region.countries) {
    return region.countries;
  }
  return [];
});

// HELPER FUNCTIONS
export function getTransportationByCountry(countryName: string): TransportationCosts | undefined {
  return transportationData.find(country => 
    country.country.toLowerCase() === countryName.toLowerCase()
  );
}

export function getTransportationByRegion(regionName: string): TransportationCosts[] {
  const region = transportationDataByRegion.find(r => r.region === regionName);
  if (!region) return [];
  
  if (region.subregions) {
    return region.subregions.flatMap((subregion: SubregionTransportationData) => subregion.countries);
  }
  return region.countries || [];
}

export function getAllTransportationRegions(): string[] {
  return transportationDataByRegion.map(region => region.region);
}