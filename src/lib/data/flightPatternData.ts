// src/lib/data/flightPatternData.ts
// Doesn't care where you're flying FROM
// I want to change the file to flightPatternData.ts

export interface FlightPattern {
  country: string;
  cities: string[];
  cheapestMonths: string[];
  expensiveMonths: string[];
  sweetSpot: string[];
  averagePrice: number;
  alternativeRoutes?: string;
  planningTips?: string[];
  notes?: string;
}

export interface SubRegionData {
  subregion: string;
  countries: FlightPattern[];
}

export interface RegionData {
  region: string;
  subregions?: SubRegionData[]; // Make subregions optional for non-European regions
  countries?: FlightPattern[]; // Make countries optional for European regions
}

// In flyData.ts - Update European imports to use subdirectories
import { thailandFlightPattern } from './countries/southeast-asia/thailand';
import { indonesiaFlightPattern } from './countries/southeast-asia/indonesia';

// Europe imports - now in subdirectories
import { spainFlightPattern } from './countries/europe/western-europe/spain';
import { portugalFlightPattern } from './countries/europe/western-europe/portugal';

// Add the new European country imports
// import { germanyFlightPattern } from './countries/europe/western-europe/germany';
import { azerbaijanFlightPattern } from './countries/europe/caucasus/azerbaijan';
import { georgiaFlightPattern } from './countries/europe/caucasus/georgia';

// Other regions
import { brazilFlightPattern } from './countries/south-america/brazil';
import { argentinaFlightPattern } from './countries/south-america/argentina';
import { mexicoFlightPattern } from './countries/north-america/mexico';
import { belizeFlightPattern } from './countries/central-america/belize';
import { costaRicaFlightPattern } from './countries/central-america/costaRica';
import { guatemalaFlightPattern } from './countries/central-america/guatemala';
import { panamaFlightPattern } from './countries/central-america/panama';
import { greeceFlightPattern } from './countries/europe/southern-europe/greece';
import { turkeyFlightPattern } from './countries/europe/southern-europe/turkey';
import { unitedStatesFlightPattern } from './countries/north-america/united-states';
// Countries we've completed (add these to your imports):
import { japanFlightPattern } from './countries/east-asia/japan';
import { italyFlightPattern } from './countries/europe/southern-europe/italy';
import { franceFlightPattern } from './countries/europe/western-europe/france';
import { laosFlightPattern } from './countries/southeast-asia/laos';
import { indiaFlightPattern } from './countries/south-asia/india';
import { bangladeshFlightPattern } from './countries/south-asia/bangladesh';
import { nepalFlightPattern } from './countries/south-asia/nepal';
import { moroccoFlightPattern } from './countries/northern-africa/morocco';
import { ukFlightPattern } from './countries/europe/western-europe/united-kingdom';


export const flyDataByRegion: RegionData[] = [
  {
    region: "Southeast Asia",
    countries: [
      thailandFlightPattern,
      indonesiaFlightPattern,
      laosFlightPattern
    ]
  },
  {
    region: "East Asia", 
    countries: [
      japanFlightPattern,
      // southKoreaFlightPattern,
      // taiwanFlightPattern
    ]
  },
  {
  region: "Europe",
  subregions: [
    {
      subregion: "Western Europe",
      countries: [
        franceFlightPattern,
        // germanyFlightPattern,
        portugalFlightPattern,
        spainFlightPattern,
        ukFlightPattern,
        // irelandFlightPattern  // Add Ireland separately here
      ]
    },
    {
      subregion: "Southern Europe", 
      countries: [
        // croatiaFlightPattern,
        greeceFlightPattern,
        italyFlightPattern,
        turkeyFlightPattern 
      ]
    },
    {
      subregion: "Eastern Europe",
      countries: [
        // czechRepublicFlightPattern,
        // polandFlightPattern,
        // romaniaFlightPattern,
        // sloveniaFlightPattern
      ]
    },
    {
      subregion: "Northern Europe",
      countries: [
        // estoniaFlightPattern,
        // norwayFlightPattern,
        // swedenFlightPattern
      ]
    },
    {
      subregion: "Caucasus",
      countries: [
        // armeniaFlightPattern,
        azerbaijanFlightPattern,
        georgiaFlightPattern
      ]
    }
  ]
  },
  {
    region: "South America",
    countries: [
      // colombiaFlightPattern,
      brazilFlightPattern,
      argentinaFlightPattern,
      // chileFlightPattern,
      // boliviaFlightPattern,
      // uruguayFlightPattern
    ]
  },
  {
    region: "North America",
    countries: [
      // canadaFlightPattern,
      mexicoFlightPattern,
      unitedStatesFlightPattern
    ]
  },
    {
    region: "North Africa",
    countries: [
      moroccoFlightPattern,
      // algeriaFlightPattern,
    ]
  },
  {
    region: "Central America",
    countries: [
      belizeFlightPattern,
      costaRicaFlightPattern,
      guatemalaFlightPattern,
      panamaFlightPattern
    ]
  },
  {
    region: "South Asia",
    countries: [
      bangladeshFlightPattern,
      nepalFlightPattern,
      indiaFlightPattern,
      // sriLankaFlightPattern,
    ]
  },
  {
    region: "Middle East",
    countries: [
      // egyptFlightPattern
    ]
  }
];
// Rest of the file
// Helper function to get all countries flat (for backward compatibility)
export const getAllCountries = (): FlightPattern[] => {
  return flyDataByRegion.flatMap(region => {
    if (region.subregions) {
      return region.subregions.flatMap(subregion => subregion.countries);
    }
    return region.countries || [];
  });
};

export const getCountriesByRegion = (regionName: string): FlightPattern[] => {
  // First check if it's a European subregion
  for (const region of flyDataByRegion) {
    if (region.region === "Europe" && region.subregions) {
      const subregion = region.subregions.find(sr => sr.subregion === regionName);
      if (subregion) {
        return subregion.countries;
      }
    }
    
    // Check regular regions
    if (region.region === regionName && region.countries) {
      return region.countries;
    }
  }
  
  return [];
};

export const getAllRegions = (): string[] => {
  const regions: string[] = [];
  
  flyDataByRegion.forEach(region => {
    if (region.region === "Europe" && region.subregions) {
      // For Europe, add all subregions instead of just "Europe"
      region.subregions.forEach(subregion => {
        regions.push(subregion.subregion);
      });
    } else {
      // For all other regions, add the region name
      regions.push(region.region);
    }
  });
  
  return regions;
};

export const findCountry = (countryName: string): FlightPattern | undefined => {
  return getAllCountries().find(country => 
    country.country.toLowerCase() === countryName.toLowerCase()
  );
};

export const getCountriesByPriceRange = (min: number, max: number): FlightPattern[] => {
  return getAllCountries().filter(country => 
    country.averagePrice >= min && country.averagePrice <= max
  );
};