<!-- src/lib/components/CountrySelector.svelte -->
<script lang="ts">
  import { 
    getAllRegionsUnified,
    getAllOriginCountries,
    getAllOriginRegions,
    getOriginCountriesByRegion,
    getRegionForCountry,
    getDestinationCount
  } from '$lib/utils/region';
  import { visaData } from '$lib/data/visa';

  export interface CountryData {
    country: string;
    region: string;
    subregion?: string;
    cities?: string[];
    averagePrice?: number;
    sweetSpot?: string[];
    cheapestMonths?: string[];
  }

  export type SelectorType = 'destination' | 'origin' | 'passport';
  export type SelectorVariant = 'default' | 'minimal' | 'flight';

  let { 
    selectedCountry = '',
    selectedRegion = 'All Regions',
    countryData = [], // For destination mode
    selectorType = 'destination',
    onCountryChange = () => {},
    onRegionChange,
    variant = 'default',
    mode = 'flight', // For visa mode only
    originCountry = 'United States', // For flight mode only
    // For visa mode only
    selectedPassport = '',
    onPassportChange = () => {}
  } = $props<{
    selectedCountry?: string;
    selectedRegion: string;
    countryData?: CountryData[]; // Only for destination mode
    selectorType?: SelectorType; // 'destination' | 'origin' | 'passport'
    onCountryChange?: (country: string) => void;
    onRegionChange: (region: string) => void;
    variant?: SelectorVariant;
    mode?: 'visa' | 'flight'; // Only for destination type
    originCountry?: string; // Only for flight mode
    // For visa mode
    selectedPassport?: string;
    onPassportChange?: (country: string) => void;
  }>();

  // Get all regions based on selector type
  const allRegions = ['All Regions', ...getAllRegionsUnified()];
  
  // Get countries based on selector type
  function getCountries(): Array<string | CountryData> {
    switch (selectorType) {
      case 'origin':
        // For origin selector, return string array of countries
        const allOrigins = getAllOriginCountries();
        if (selectedRegion === 'All Regions') return allOrigins;
        return getOriginCountriesByRegion(selectedRegion);
      
      case 'passport':
        // For passport selector, return string array of passport countries
        const passportCountries = Object.keys(visaData).sort();
        if (selectedRegion === 'All Regions') return passportCountries;
        return passportCountries.filter((country: string) => 
          getRegionForCountry(country) === selectedRegion
        );
      
      case 'destination':
      default:
        // For destination selector, use provided countryData
        if (!countryData) return [];
        if (selectedRegion === 'All Regions') return countryData;
        return countryData.filter((country: CountryData) => country.region === selectedRegion);
    }
  }

  // Get label based on selector type
  function getLabel(): string {
    switch (selectorType) {
      case 'origin': return 'Select Departure Country';
      case 'passport': return 'Select Passport Country';
      case 'destination': 
      default: 
        return mode === 'flight' ? 'Select Destination Country' : 'Select Country';
    }
  }

  // Get title based on selector type
  function getTitle(): string {
    switch (selectorType) {
      case 'origin': return 'Departure Country';
      case 'passport': return 'Your Passport';
      case 'destination': 
      default: return 'Destination';
    }
  }

  // Handle region change
  function handleRegionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newRegion = target.value;
    
    if (onRegionChange) {
      onRegionChange(newRegion);
    }
    
    // Auto-select first country in new region
    if (newRegion !== 'All Regions' && selectorType !== 'destination') {
      const countries = getCountries();
      if (countries.length > 0 && onCountryChange) {
        const firstCountry = typeof countries[0] === 'string' 
          ? countries[0] 
          : (countries[0] as CountryData).country;
        onCountryChange(firstCountry);
      }
    }
  }

  // Handle country change
  function handleCountryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (onCountryChange) {
      onCountryChange(target.value);
    }
  }

  // Handle passport change (visa mode only)
  function handlePassportChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (onPassportChange) {
      onPassportChange(target.value);
    }
  }

  // Get destination count for origin selector
  function getDestCount(country: string): number {
    return getDestinationCount(country);
  }

  // Format option text based on selector type
  function formatOption(item: string | CountryData): string {
    if (typeof item === 'string') {
      // For origin or passport selector
      if (selectorType === 'origin') {
        return `${item} (${getDestCount(item)} destinations)`;
      }
      return item;
    } else {
      // For destination selector
      const country = item as CountryData;
      return country.averagePrice 
        ? `${country.country} ($${country.averagePrice?.toLocaleString()})`
        : country.country;
    }
  }

  // Get option value based on selector type
  function getOptionValue(item: string | CountryData): string {
    return typeof item === 'string' ? item : item.country;
  }
</script>

<div class="{variant === 'minimal' ? 'space-y-4' : 'bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-xl space-y-6'}">
  {#if variant === 'default'}
    <h2 class="text-xl font-light pb-3 border-b border-white/60">
      {getTitle()}
    </h2>
  {/if}
  
  <!-- For visa mode: Passport country selector -->
  {#if mode === 'visa' && variant !== 'minimal' && selectorType === 'destination'}
    <div>
      <label for="passport-select" class="block text-sm font-medium mb-2 text-gray-700">
        Your Passport Country
      </label>
      <select 
        id="passport-select"
        bind:value={selectedPassport}
        onchange={handlePassportChange}
        class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
      >
        {#each Object.keys(visaData).sort() as country}
          <option value={country}>{country}</option>
        {/each}
      </select>
    </div>
  {/if}
  
  <!-- Region Selection -->
  <div>
    <label for="region-select" class="block text-sm font-medium mb-2 text-gray-700">
      Filter by Region
    </label>
    <select 
      id="region-select"
      bind:value={selectedRegion}
      onchange={handleRegionChange}
      class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
    >
      {#each allRegions as region}
        <option value={region}>{region}</option>
      {/each}
    </select>
  </div>

  <!-- Country Selection -->
  <div>
    <label for="country-select" class="block text-sm font-medium mb-2 text-gray-700">
      {getLabel()}
    </label>
    <select 
      id="country-select"
      bind:value={selectedCountry}
      onchange={handleCountryChange}
      class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
    >
      {#each getCountries() as item}
        <option value={getOptionValue(item)}>
          {formatOption(item)}
        </option>
      {/each}
    </select>
  </div>

  <!-- Statistics -->
  {#if selectedCountry && variant !== 'minimal'}
    <div class="bg-gradient-to-r from-blue-50/60 to-indigo-100/60 rounded-lg p-4 border border-blue-200/50">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-xs text-gray-600">Selected {selectorType === 'origin' ? 'Origin' : 'Country'}</div>
          <div class="font-medium text-blue-800">{selectedCountry}</div>
        </div>
        <div>
          <div class="text-xs text-gray-600">Region</div>
          <div class="font-medium text-indigo-700">{selectedRegion}</div>
        </div>
      </div>
      {#if selectorType === 'origin'}
        <div class="mt-3 pt-3 border-t border-blue-200/50">
          <div class="text-xs text-gray-600">Available Destinations</div>
          <div class="font-medium text-gray-800">
            ✈️ {getDestCount(selectedCountry)} destinations available
          </div>
        </div>
      {:else if mode === 'flight'}
        <div class="mt-3 pt-3 border-t border-blue-200/50">
          <div class="text-xs text-gray-600">Flight Route</div>
          <div class="font-medium text-gray-800">
            ✈️ {originCountry} → {selectedCountry}
          </div>
        </div>
      {:else if mode === 'visa' && selectorType === 'destination'}
        <div class="mt-3 pt-3 border-t border-blue-200/50">
          <div class="text-xs text-gray-600">Visa Check</div>
          <div class="font-medium text-gray-800">
            📘 {selectedPassport || 'Select passport'} → {selectedCountry}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>