// src/lib/stores/countryStore.ts
import { writable, derived } from 'svelte/store';
import type { CountryOption } from '$lib/components/CountrySelector/CountrySelector.types';

// Load all country data from various sources
import { nomadData } from '$lib/data/nomadData';
import { livingCostData } from '$lib/data/livingCostData';
import { getAllOriginCountries } from '$lib/utils/regionUtils';
import { visaData } from '$lib/data/visa';

// Create unified country data
function createUnifiedCountryData(): CountryOption[] {
  const allCountries: Map<string, CountryOption> = new Map();
  
  // Add nomad countries
  nomadData.forEach(country => {
    allCountries.set(country.id, {
      id: country.id,
      name: country.country,
      region: country.region,
      cities: country.cities,
      nomadScore: country.nomadScore,
      coworkingSpaces: (country.workspaces?.length || 0) + (country.freeWorkspaces?.length || 0)
    });
  });
  
  // Add living cost countries
  livingCostData.forEach(country => {
    const existing = allCountries.get(country.id);
    if (existing) {
      existing.averagePrice = country.averagePrice;
      existing.costRange = [country.budget.low, country.budget.luxury];
    } else {
      allCountries.set(country.id, {
        id: country.id,
        name: country.country,
        region: country.region,
        cities: country.cities,
        averagePrice: country.averagePrice,
        costRange: [country.budget.low, country.budget.luxury]
      });
    }
  });
  
  // Add origin countries
  getAllOriginCountries().forEach(countryName => {
    const id = countryName.toLowerCase().replace(/\s+/g, '-');
    if (!allCountries.has(id)) {
      allCountries.set(id, {
        id,
        name: countryName,
        region: getRegionForCountry(countryName)
      });
    }
  });
  
  return Array.from(allCountries.values()).sort((a, b) => 
    a.name.localeCompare(b.name)
  );
}

// Create store
export const countryStore = writable({
  allCountries: createUnifiedCountryData(),
  selectedCountry: '',
  selectedRegion: '',
  selectedCity: '',
  
  // Actions
  setSelectedCountry: (countryId: string) => {
    countryStore.update(store => ({
      ...store,
      selectedCountry: countryId,
      selectedCity: '' // Reset city when country changes
    }));
  },
  
  setSelectedRegion: (region: string) => {
    countryStore.update(store => ({
      ...store,
      selectedRegion: region
    }));
  },
  
  setSelectedCity: (city: string) => {
    countryStore.update(store => ({
      ...store,
      selectedCity: city
    }));
  }
});

// Derived stores
export const filteredCountries = derived(countryStore, $store => {
  if (!$store.selectedRegion) return $store.allCountries;
  return $store.allCountries.filter(country => 
    country.region === $store.selectedRegion
  );
});

export const currentCountry = derived(countryStore, $store => 
  $store.allCountries.find(c => c.id === $store.selectedCountry)
);

// Helper function
function getRegionForCountry(countryName: string): string {
  // Implement based on your existing region utilities
  return 'Unknown';
}