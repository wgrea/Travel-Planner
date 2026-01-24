export type SelectorMode = 
  | 'destination' 
  | 'origin' 
  | 'passport' 
  | 'digital-nomad'
  | 'living-costs'
  | 'transportation'
  | 'visa';

export type SelectorVariant = 
  | 'default' 
  | 'minimal' 
  | 'compact' 
  | 'card'
  | 'inline';

export interface CountryOption {
  id: string;
  name: string;
  region: string;
  subregion?: string;
  cities?: string[];
  
  // Mode-specific data
  nomadScore?: number;
  averagePrice?: number;
  visaOnArrival?: boolean;
  internetSpeed?: number;
  coworkingSpaces?: number;
  
  // Stats
  workspaces?: number;
  destinations?: number;
  costRange?: [number, number];
}

export interface CountrySelectorProps {
  mode?: SelectorMode;
  variant?: SelectorVariant;
  selectedCountry?: string;
  selectedRegion?: string;
  selectedCity?: string;
  
  // Event handlers
  onCountryChange?: (country: string, data?: CountryOption) => void;
  onRegionChange?: (region: string) => void;
  onCityChange?: (city: string) => void;
  
  // Mode-specific props
  originCountry?: string;
  selectedPassport?: string;
  onPassportChange?: (country: string) => void;
  
  // Data sources
  countries?: CountryOption[];
  showStats?: boolean;
  showQuickFilters?: boolean;
  autoSelectFirst?: boolean;
  
  // Customization
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
}

export interface ModeConfig {
  title: string;
  countryLabel: string;
  description: string;
  icon: string;
}