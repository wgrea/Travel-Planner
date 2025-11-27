// src/lib/data/nomadData.ts

// Import nomad data from all countries
import { thailandNomadData } from './countries/southeast-asia/thailand';
import { vietnamNomadData } from './countries/southeast-asia/vietnam';
import { indonesiaNomadData } from './countries/southeast-asia/indonesia';
import { portugalNomadData } from './countries/europe/western-europe/portugal';
import { spainNomadData } from './countries/europe/western-europe/spain';
import { georgiaNomadData } from './countries/europe/caucasus/georgia';
import { mexicoNomadData } from './countries/north-america/mexico';
import { colombiaNomadData } from './countries/south-america/colombia';
import { argentinaNomadData } from './countries/south-america/argentina';

export const nomadDataByRegion: RegionNomadData[] = [
  {
    region: "Southeast Asia",
    countries: [
      thailandNomadData,
      vietnamNomadData,
      indonesiaNomadData,
      // Add other SEA countries as you create them...
    ]
  },
  {
    region: "Europe",
    subregions: [
      {
        subregion: "Western Europe",
        countries: [
          portugalNomadData,
          spainNomadData,
        ]
      },
      {
        subregion: "Caucasus", 
        countries: [
          georgiaNomadData,
        ]
      }
    ]
  },
  {
    region: "North America",
    countries: [
      mexicoNomadData,
      // Add other North American countries...
    ]
  },
  {
    region: "South America", 
    countries: [
      colombiaNomadData,
      argentinaNomadData,
      // Add other South American countries...
    ]
  }
  // Add more regions as needed...
];

// src/lib/data/nomadData.ts - Update the interface
export interface Workspace {
  name: string;
  city: string;
  country: string;
  type: 'coworking' | 'cafe' | 'hostel' | 'hotel' | 'library' | 'public_space'  // Add 'cafe_coworking'
  dayPassPrice?: number;
  monthlyPrice?: number;
  hourlyRate?: number;
  rating: number;
  amenities: string[];
  bestFor: string[];
  wifiSpeed: number; // Mbps
  powerOutlets: number; // 1-5 scale
  noiseLevel: number; // 1-5 scale (1=quiet, 5=loud)
  hours?: string;
  address?: string;
  website?: string;
}

export interface NomadData {
  country: string;
  cities?: string[]; // Add this line
  internet: {
    speed: number;
    reliability: number;
    coworkingSpaces: number;
  };
  costs: {
    coworkingMonthly: number;
    simCardMonthly: number;
    coffeeShopWork: number;
  };
  community: {
    expatSize: number;
    englishLevel: number;
    safety: number;
  };
  workspaces?: Workspace[]; // Add this line
}

export interface SubregionNomadData {
  subregion: string;
  countries: NomadData[];
}

export interface RegionNomadData {
  region: string;
  subregions?: SubregionNomadData[];
  countries?: NomadData[];
}

// FLAT ARRAY FOR EASY ACCESS - FIXED VERSION
export const nomadData: NomadData[] = nomadDataByRegion.flatMap(region => {
  if (region.subregions) {
    // Regions with subregions (like Europe)
    return region.subregions.flatMap((subregion: SubregionNomadData) => subregion.countries);
  } else if (region.countries) {
    // Regions without subregions (like Southeast Asia) - THIS WAS MISSING!
    return region.countries;
  }
  return [];
});

// HELPER FUNCTIONS
export function getNomadDataByCountry(countryName: string): NomadData | undefined {
  return nomadData.find(country => country.country.toLowerCase() === countryName.toLowerCase());
}

export function getNomadDataByRegion(regionName: string): NomadData[] {
  const region = nomadDataByRegion.find(r => r.region === regionName);
  if (!region) return [];
  
  if (region.subregions) {
    return region.subregions.flatMap((subregion: SubregionNomadData) => subregion.countries);
  }
  return region.countries || [];
}

export function getNomadDataBySubregion(regionName: string, subregionName: string): NomadData[] {
  const region = nomadDataByRegion.find(r => r.region === regionName);
  if (!region || !region.subregions) return [];
  
  const subregion = region.subregions.find((s: SubregionNomadData) => s.subregion === subregionName);
  return subregion ? subregion.countries : [];
}

export function getAllRegions(): string[] {
  return nomadDataByRegion.map(region => region.region);
}

export function getSubregionsByRegion(regionName: string): string[] {
  const region = nomadDataByRegion.find(r => r.region === regionName);
  if (!region || !region.subregions) return [];
  return region.subregions.map((subregion: SubregionNomadData) => subregion.subregion);
}