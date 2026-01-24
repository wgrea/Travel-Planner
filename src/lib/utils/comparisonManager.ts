// src/lib/utils/comparisonManager.ts
import { getAllCountries as getAllLivingCountries } from './living-costs';
import { getAllNomadCountries } from './nomadUtils';
import type { CountryData } from '$lib/types/living-costs';

export interface ComparisonCountry {
  id: string;
  name: string;
  region: string;
  subregion?: string;
  
  // Living costs data
  livingCosts?: {
    monthlyBudget: number;
    dailyCost: number;
    accommodation: number;
    hasData: boolean;
  };
  
  // Nomad data
  nomadData?: {
    coworkingCost: number;
    internetSpeed: number;
    safety: number;
    expatSize: number;
    hasData: boolean;
  };
  
  // Combined score for sorting
  combinedScore?: number;
}

export class ComparisonManager {
  private static instance: ComparisonManager;
  private countries: ComparisonCountry[] = [];
  
  private constructor() {
    this.initializeCountries();
  }
  
  static getInstance(): ComparisonManager {
    if (!ComparisonManager.instance) {
      ComparisonManager.instance = new ComparisonManager();
    }
    return ComparisonManager.instance;
  }
  
  private initializeCountries() {
    const livingCountries = getAllLivingCountries();
    const nomadCountries = getAllNomadCountries();
    
    const countryMap = new Map<string, ComparisonCountry>();
    
    // Add living cost countries
    livingCountries.forEach(lc => {
      const id = lc.country.toLowerCase().replace(/\s+/g, '-');
      countryMap.set(lc.country, {
        id,
        name: lc.country,
        region: lc.region,
        livingCosts: {
          monthlyBudget: lc.averagePrice || 0,
          dailyCost: 0, // Would need calculation
          accommodation: 0, // Would need calculation
          hasData: true
        }
      });
    });
    
    // Add/update nomad data
    nomadCountries.forEach(nc => {
      const existing = countryMap.get(nc.country);
      if (existing) {
        existing.nomadData = {
          coworkingCost: nc.coworkingCost,
          internetSpeed: nc.internetSpeed,
          safety: nc.safety,
          expatSize: nc.expatSize,
          hasData: true
        };
        existing.subregion = nc.subregion;
      } else {
        const id = nc.country.toLowerCase().replace(/\s+/g, '-');
        countryMap.set(nc.country, {
          id,
          name: nc.country,
          region: nc.region,
          subregion: nc.subregion,
          nomadData: {
            coworkingCost: nc.coworkingCost,
            internetSpeed: nc.internetSpeed,
            safety: nc.safety,
            expatSize: nc.expatSize,
            hasData: true
          }
        });
      }
    });
    
    // Calculate combined scores
    this.countries = Array.from(countryMap.values()).map(country => {
      const livingScore = country.livingCosts?.hasData ? 1 : 0;
      const nomadScore = country.nomadData?.hasData ? 1 : 0;
      const dataCompleteness = (livingScore + nomadScore) / 2;
      
      // Simple scoring algorithm - can be enhanced
      const costScore = country.nomadData ? 10 - (country.nomadData.coworkingCost / 100) : 5;
      const internetScore = country.nomadData ? country.nomadData.internetSpeed / 10 : 5;
      const safetyScore = country.nomadData ? country.nomadData.safety : 5;
      
      country.combinedScore = (
        (costScore * 0.4) + 
        (internetScore * 0.3) + 
        (safetyScore * 0.2) +
        (dataCompleteness * 0.1)
      );
      
      return country;
    });
    
    // Sort by combined score
    this.countries.sort((a, b) => (b.combinedScore || 0) - (a.combinedScore || 0));
  }
  
  // Get all countries for comparison
  getAllCountries(): ComparisonCountry[] {
    return this.countries;
  }
  
  // Get countries by region
  getCountriesByRegion(region: string): ComparisonCountry[] {
    return this.countries.filter(c => c.region === region);
  }
  
  // Compare multiple countries
  compareCountries(countryNames: string[]): ComparisonCountry[] {
    return this.countries.filter(c => countryNames.includes(c.name));
  }
  
  // Find similar countries (recommendations)
  findSimilarCountries(countryName: string, count: number = 3): ComparisonCountry[] {
    const target = this.countries.find(c => c.name === countryName);
    if (!target) return [];
    
    return this.countries
      .filter(c => c.name !== countryName)
      .map(c => ({
        country: c,
        similarity: this.calculateSimilarity(target, c)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, count)
      .map(item => item.country);
  }
  
  private calculateSimilarity(a: ComparisonCountry, b: ComparisonCountry): number {
    let score = 0;
    let criteriaCount = 0;
    
    if (a.livingCosts?.hasData && b.livingCosts?.hasData) {
      const budgetDiff = Math.abs((a.livingCosts.monthlyBudget - b.livingCosts.monthlyBudget) / Math.max(a.livingCosts.monthlyBudget, 1));
      score += 1 - Math.min(budgetDiff, 1);
      criteriaCount++;
    }
    
    if (a.nomadData?.hasData && b.nomadData?.hasData) {
      const coworkingDiff = Math.abs((a.nomadData.coworkingCost - b.nomadData.coworkingCost) / Math.max(a.nomadData.coworkingCost, 1));
      const internetDiff = Math.abs((a.nomadData.internetSpeed - b.nomadData.internetSpeed) / Math.max(a.nomadData.internetSpeed, 1));
      const safetyDiff = Math.abs((a.nomadData.safety - b.nomadData.safety) / 10);
      
      score += (1 - Math.min(coworkingDiff, 1)) * 0.4;
      score += (1 - Math.min(internetDiff, 1)) * 0.3;
      score += (1 - safetyDiff) * 0.3;
      criteriaCount++;
    }
    
    if (a.region === b.region) {
      score += 0.5;
      criteriaCount++;
    }
    
    return criteriaCount > 0 ? score / criteriaCount : 0;
  }
}