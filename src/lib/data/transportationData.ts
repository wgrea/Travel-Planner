// src/lib/data/transportationData.ts
import type { 
  TransportationCosts, 
  RegionTransportationData, 
  SubregionTransportationData 
} from '../types/transportation';

// Import from country modules following your pattern
// In your transportation data file
import { thailandTransportation } from './countries/southeast-asia/thailand';
import { vietnamTransportation } from './countries/southeast-asia/vietnam';
import { indonesiaTransportation } from './countries/southeast-asia/indonesia';
import { portugalTransportation } from './countries/europe/western-europe/portugal';
import { spainTransportation } from './countries/europe/western-europe/spain';
import { georgiaTransportation } from './countries/europe/caucasus/georgia';
import { mexicoTransportation } from './countries/north-america/mexico';
import { brazilTransportation } from './countries/south-america/brazil';
import { azerbaijanTransportation } from './countries/europe/caucasus/azerbaijan';
import { argentinaTransportation } from './countries/south-america/argentina';
import { turkeyTransportation } from './countries/europe/southern-europe/turkey';
import { unitedStatesTransportation } from './countries/north-america/united-states';
import { greeceTransportation } from './countries/europe/southern-europe/greece';
import { panamaTransportation } from './countries/central-america/panama';
// Countries we've completed (add these to your imports):
import { japanTransportation } from './countries/east-asia/japan';
import { italyTransportation } from './countries/europe/southern-europe/italy';
import { franceTransportation } from './countries/europe/western-europe/france';
import { laosTransportation} from './countries/southeast-asia/laos';
import { indiaTransportation } from './countries/south-asia/india';
import { bangladeshTransportation} from './countries/south-asia/bangladesh';
import { nepalTransportation } from './countries/south-asia/nepal';
import { moroccoTransportation} from './countries/northern-africa/morocco';
import { ukTransportation } from './countries/europe/western-europe/united-kingdom';

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