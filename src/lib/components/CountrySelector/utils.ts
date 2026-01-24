// src/lib/components/CountrySelector/utils.ts
import type { SelectorMode, CountryOption, ModeConfig } from './types';

export function getModeConfig(mode: SelectorMode): ModeConfig {
  const configs: Record<SelectorMode, ModeConfig> = {
    'destination': {
      title: 'Destination Country',
      countryLabel: 'Select Destination',
      description: 'Choose where you want to travel',
      icon: '🌍'
    },
    'origin': {
      title: 'Departure Country',
      countryLabel: 'Select Departure Country',
      description: 'Where are you flying from?',
      icon: '✈️'
    },
    'passport': {
      title: 'Passport Country',
      countryLabel: 'Select Your Passport',
      description: 'Choose your passport nationality',
      icon: '📘'
    },
    'digital-nomad': {
      title: 'Digital Nomad Destination',
      countryLabel: 'Select Nomad Destination',
      description: 'Find the perfect place to work remotely',
      icon: '💼'
    },
    'living-costs': {
      title: 'Cost of Living Destination',
      countryLabel: 'Select Country for Cost Analysis',
      description: 'Compare living expenses',
      icon: '💰'
    },
    'transportation': {
      title: 'Transportation Costs',
      countryLabel: 'Select Country',
      description: 'Analyze local transportation costs',
      icon: '🚗'
    },
    'visa': {
      title: 'Visa Requirements',
      countryLabel: 'Select Destination Country',
      description: 'Check visa requirements for your passport',
      icon: '🛂'
    }
  };
  
  return configs[mode];
}

export function formatCountryOption(country: CountryOption, mode: SelectorMode): string {
  const base = country.name;
  
  switch (mode) {
    case 'origin':
      return country.destinations 
        ? `${base} (${country.destinations} destinations)`
        : base;
    
    case 'digital-nomad':
      return country.nomadScore 
        ? `${base} (${country.nomadScore}/10)`
        : base;
    
    case 'living-costs':
      return country.averagePrice 
        ? `${base} ($${country.averagePrice.toLocaleString()})`
        : base;
    
    default:
      return base;
  }
}

export function getUniqueSortedRegions(countries: CountryOption[]): string[] {
  const regions = new Set<string>();
  countries.forEach((country: CountryOption) => {
    if (country.region) regions.add(country.region);
  });
  return Array.from(regions).sort();
}