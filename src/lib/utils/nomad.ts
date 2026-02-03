// src/lib/utils/nomad.ts
import { nomadDataByRegion, nomadData, type NomadData, type Workspace } from '$lib/data/nomadData';
import type { BudgetCategory, BudgetFilteredWorkspace } from '$lib/types/digital-nomad';
import type { RegionNomadData, SubregionNomadData } from '$lib/data/nomadData';

// Get all countries with nomad data
export function getAllNomadCountries(): Array<{
  country: string;
  region: string;
  subregion?: string;
  internetSpeed: number;
  coworkingCost: number;
  safety: number;
  expatSize: number;
}> {
  const countries: Array<any> = [];
  
  nomadDataByRegion.forEach((region: RegionNomadData) => {
    if (region.subregions) {
      region.subregions.forEach((subregion: SubregionNomadData) => {
        subregion.countries.forEach(country => {
          countries.push({
            country: country.country,
            region: region.region,
            subregion: subregion.subregion,
            internetSpeed: country.internet.speed || 0,
            coworkingCost: country.costs.coworkingMonthly || 0,
            safety: country.community.safety || 0,
            expatSize: country.community.expatSize || 0
          });
        });
      });
    } else if (region.countries) {
      region.countries.forEach(country => {
        countries.push({
          country: country.country,
          region: region.region,
          internetSpeed: country.internet.speed || 0,
          coworkingCost: country.costs.coworkingMonthly || 0,
          safety: country.community.safety || 0,
          expatSize: country.community.expatSize || 0
        });
      });
    }
  });
  
  return countries;
}

// Filter workspaces by budget category - FIXED VERSION
export function filterWorkspacesByBudget(
  countryName: string,
  budgetCategory: BudgetCategory
): BudgetFilteredWorkspace[] {
  const country = nomadData.find(c => c.country === countryName);
  if (!country) return [];
  
  const allSpaces: BudgetFilteredWorkspace[] = [];
  
  // Add regular workspaces
  if (country.workspaces) {
    for (const w of country.workspaces) {
      allSpaces.push({
        name: w.name,
        type: w.type,
        budgetCategory: (w.budgetCategory || 'direct_payment') as BudgetCategory,
        price: w.dayPassPrice || w.monthlyPrice,
        includedWithStay: w.includedWithStay,
        minimumPurchase: w.minimumPurchase,
        notes: w.notes
      });
    }
  }
  
  // Add free workspaces
  if (country.freeWorkspaces) {
    for (const w of country.freeWorkspaces) {
      let bc: BudgetCategory = 'zero_spend';
      if (w.cost === 'purchase_required') {
        bc = 'small_purchase';
      }
      
      allSpaces.push({
        name: w.name,
        type: w.type,
        budgetCategory: bc,
        price: 0,
        includedWithStay: false,
        notes: w.notes
      });
    }
  }
  
  return allSpaces.filter(space => space.budgetCategory === budgetCategory);
}

// Compare multiple countries
export function compareCountries(countryNames: string[], comparisonType: 'costs' | 'internet' | 'community' | 'workspaces') {
  const countries = nomadData.filter(c => countryNames.includes(c.country));
  
  switch (comparisonType) {
    case 'costs':
      return countries.map(c => ({
        country: c.country,
        coworkingMonthly: c.costs.coworkingMonthly,
        simCardMonthly: c.costs.simCardMonthly,
        coffeeShopWork: c.costs.coffeeShopWork
      }));
      
    case 'internet':
      return countries.map(c => ({
        country: c.country,
        speed: c.internet.speed,
        reliability: c.internet.reliability,
        freePublicWifiSpots: c.internet.freePublicWifiSpots
      }));
      
    case 'community':
      return countries.map(c => ({
        country: c.country,
        expatSize: c.community.expatSize,
        englishLevel: c.community.englishLevel,
        safety: c.community.safety,
        nomadGroups: c.community.nomadGroups?.length || 0
      }));
      
    case 'workspaces':
      return countries.map(c => ({
        country: c.country,
        totalWorkspaces: (c.workspaces?.length || 0) + (c.freeWorkspaces?.length || 0),
        coworkingSpaces: c.workspaces?.filter(w => w.type === 'coworking').length || 0,
        cafes: c.workspaces?.filter(w => w.type === 'cafe').length || 0,
        freeSpaces: c.freeWorkspaces?.length || 0
      }));
  }
}

// Get regions with nomad data
export function getNomadRegions(): Array<{
  region: string;
  subregions?: string[];
  countryCount: number;
}> {
  return nomadDataByRegion.map(region => ({
    region: region.region,
    subregions: region.subregions?.map(s => s.subregion),
    countryCount: region.subregions 
      ? region.subregions.reduce((sum, s) => sum + s.countries.length, 0)
      : (region.countries?.length || 0)
  }));
}

// Find countries by filter criteria
export function findCountriesByFilters(filters: {
  maxCoworkingCost?: number;
  minInternetSpeed?: number;
  minSafety?: number;
  region?: string;
}): NomadData[] {
  return nomadData.filter(country => {
    if (filters.maxCoworkingCost && country.costs.coworkingMonthly > filters.maxCoworkingCost) {
      return false;
    }
    if (filters.minInternetSpeed && country.internet.speed < filters.minInternetSpeed) {
      return false;
    }
    if (filters.minSafety && country.community.safety < filters.minSafety) {
      return false;
    }
    if (filters.region) {
      // Find if country is in the specified region
      const inRegion = nomadDataByRegion.some(region => {
        if (region.region === filters.region && region.countries?.some(c => c.country === country.country)) {
          return true;
        }
        if (region.subregions?.some(subregion => 
          subregion.countries.some(c => c.country === country.country)
        )) {
          return true;
        }
        return false;
      });
      if (!inRegion) return false;
    }
    return true;
  });
}

// NEW: Country summary (no cities)
export function getCountryWorkspaces(countryName: string): Workspace[] {
  const country = nomadData.find(c => c.country === countryName);
  return country?.workspaces || [];
}

