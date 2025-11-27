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

// SINGLE INTERFACE DECLARATIONS
export interface NomadData {
  country: string;
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

// FLAT ARRAY FOR EASY ACCESS
export const nomadData: NomadData[] = nomadDataByRegion.flatMap(region => 
  region.subregions 
    ? region.subregions.flatMap((subregion: SubregionNomadData) => subregion.countries)
    : (region.countries || [])
);

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