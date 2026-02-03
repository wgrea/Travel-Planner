// src/lib/data/transportationData.ts
import type { 
  TransportationCosts, 
  RegionTransportationData, 
  SubregionTransportationData 
} from '../types/transportation';

// Import from country modules following your pattern
// In your transportation data file
import { thailandTransportation } from './countries/southeast-asia/thailand/index';
import { vietnamTransportation } from './countries/southeast-asia/vietnam/index';
import { indonesiaTransportation } from './countries/southeast-asia/indonesia/index';
import { portugalTransportation } from './countries/western-europe/portugal/index';
import { spainTransportation } from './countries/western-europe/spain/index';
import { georgiaTransportation } from './countries/caucasus/georgia/index';
import { mexicoTransportation } from './countries/north-america/mexico/index';
import { brazilTransportation } from './countries/south-america/brazil/index';
import { azerbaijanTransportation } from './countries/caucasus/azerbaijan/index';
import { argentinaTransportation } from './countries/south-america/argentina/index';
import { turkeyTransportation } from './countries/southern-europe/turkey/index';
import { unitedStatesTransportation } from './countries/north-america/united-states/index';
import { greeceTransportation } from './countries/southern-europe/greece/index';
import { panamaTransportation } from './countries/central-america/panama/index';
// Countries we've completed (add these to your imports):
import { japanTransportation } from './countries/east-asia/japan/index';
import { italyTransportation } from './countries/southern-europe/italy/index';
import { franceTransportation } from './countries/western-europe/france/index';
import { laosTransportation} from './countries/southeast-asia/laos/index';
import { indiaTransportation } from './countries/south-asia/india/index';
import { bangladeshTransportation} from './countries/south-asia/bangladesh/index';
import { nepalTransportation } from './countries/south-asia/nepal/index';
import { moroccoTransportation} from './countries/northern-africa/morocco/index';
import { ukTransportation } from './countries/western-europe/united-kingdom/index';

export const transportationDataByRegion: RegionTransportationData[] = [
  {
    region: "East Asia",
    countries: [
      japanTransportation,
    ]
  },
  {
    region: "South Asia",
    countries: [
      indiaTransportation,
      bangladeshTransportation,
      nepalTransportation
    ]
  },
  {
    region: "Southeast Asia",
    countries: [
      thailandTransportation,
      vietnamTransportation,
      indonesiaTransportation,
      laosTransportation
    ]
  },
  {
    region: "Europe",
    subregions: [
      {
        subregion: "Southern Europe",
        countries: [
          turkeyTransportation,
          greeceTransportation,
          italyTransportation
        ]
      },
      {
        subregion: "Western Europe",
        countries: [
          portugalTransportation,
          spainTransportation,
          franceTransportation,
          ukTransportation,
        ]
      },
      {
        subregion: "Caucasus",
        countries: [
          georgiaTransportation,
          azerbaijanTransportation
        ]
      }
    ]
  },
  {
    region: "Central America",
    countries: [
      panamaTransportation,
    ]
  },
  {
    region: "North Africa",
    countries: [
      moroccoTransportation,

    ]
  },
  {
    region: "North America",
    countries: [
      mexicoTransportation,
      unitedStatesTransportation
    ]
  },
  {
    region: "South America",
    countries: [
      argentinaTransportation,
      brazilTransportation,
      // colombiaTransportation,
    ]
  }
];


// Above is just the countries
function normalizeTransportationData(data: TransportationCosts[]): TransportationCosts[] {
  return data.map(country => ({
    ...country,
    cities: Object.fromEntries(
      Object.entries(country.cities).map(([cityName, city]) => [
        cityName,
        {
          ...city,
          publicTransport: {
            ...city.publicTransport,
            reliability: city.publicTransport.reliability * 10,
            coverage: city.publicTransport.coverage * 10
          },
          rideSharing: {
            ...city.rideSharing,
            availability: city.rideSharing.availability * 10
          }
        }
      ])
    )
  }));
}

// Use it like this:
export const transportationData: TransportationCosts[] = normalizeTransportationData(
  transportationDataByRegion.flatMap(region => {
    if (region.subregions) {
      return region.subregions.flatMap((subregion: SubregionTransportationData) => subregion.countries);
    } else if (region.countries) {
      return region.countries;
    }
    return [];
  })
);

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