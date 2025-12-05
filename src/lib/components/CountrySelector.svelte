<!-- src/lib/components/CountrySelector.svelte -->
<script lang="ts">
  import { visaData } from '$lib/data/visa';
  import { routeCosts } from '$lib/data/routeCosts';
  
  export interface CountryData {
    country: string;
    region: string;
    cities?: string[];
    averagePrice?: number;
    sweetSpot?: string[];
    cheapestMonths?: string[];
  }

  interface Props {
    selectedPassport?: string;
    selectedDestination?: string;
    selectedCountry?: string;
    selectedRegion: string;
    countryData: CountryData[];
    onPassportChange?: (country: string) => void;
    onDestinationChange?: (country: string) => void;
    onCountryChange?: (country: string) => void;
    onRegionChange: (region: string) => void;
    showInsights?: boolean;
    variant?: 'default' | 'minimal' | 'flight';
    mode?: 'visa' | 'flight';
    originCountry?: string;
    showOriginSelector?: boolean;
    onOriginChange?: (country: string) => void; // NEW: Add this prop
  }
  
  let { 
    selectedPassport = '', 
    selectedDestination = '',
    selectedCountry = '',
    selectedRegion, 
    countryData, 
    onPassportChange = () => {},
    onDestinationChange = () => {},
    onCountryChange = () => {},
    onOriginChange = () => {}, // NEW: Add with default
    onRegionChange,
    showInsights = true,
    variant = 'default',
    mode = 'visa',
    originCountry = 'United States',
    showOriginSelector = false
  }: Props = $props();

  // Determine which country to use based on mode
  const effectiveCountry = mode === 'flight' ? selectedCountry : selectedDestination;
  const onEffectiveCountryChange = mode === 'flight' ? onCountryChange : onDestinationChange;

  // Get available passport countries from visaData
  const passportCountries = Object.keys(visaData);
  
  // Get available origin countries from routeCosts (for flight mode)
  const originCountries = $derived(Object.keys(routeCosts).sort());
  
  // Helper functions
  function getAllRegions(): string[] {
    const regions = new Set(countryData.map(item => item.region));
    return Array.from(regions).sort();
  }

  function getCountriesByRegion(region: string): CountryData[] {
    return countryData.filter(item => item.region === region);
  }

  let regions = $derived(getAllRegions());
  let filteredDestinations = $derived(
    selectedRegion 
      ? getCountriesByRegion(selectedRegion)
      : countryData
  );

  // Handler functions
  function handlePassportChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    onPassportChange(target.value);
  }

  function handleOriginChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    onOriginChange(target.value);
  }

  function handleRegionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newRegion = target.value;
    onRegionChange(newRegion);
    
    if (newRegion) {
      const countriesInRegion = getCountriesByRegion(newRegion);
      if (countriesInRegion.length > 0) {
        onEffectiveCountryChange(countriesInRegion[0].country);
      }
    }
  }

  function handleDestinationChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    onEffectiveCountryChange(target.value);
  }
</script>

<div class="text-stone-900 {variant === 'minimal' ? '' : 'bg-white rounded-2xl p-8 border border-stone-200 shadow-sm'}">
  {#if variant === 'default'}
    <h2 class="text-2xl font-light mb-8 text-stone-900 pb-4 border-b border-stone-200">
      {mode === 'flight' ? 'Find Your Flight' : 'Select Your Journey'}
    </h2>
  {/if}
  
  <!-- If in flight mode AND showOriginSelector is true, show origin selector -->
  {#if mode === 'flight' && showOriginSelector}
    <div class="mb-6">
      <label for="origin-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
        Flying From
      </label>
      <select 
        id="origin-select"
        value={originCountry}
        onchange={handleOriginChange}
        class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
      >
        {#each originCountries as country}
          <option value={country} class="text-stone-800">
            {country} 
            {routeCosts[country] ? ` (${Object.keys(routeCosts[country]).length} destinations)` : ''}
          </option>
        {/each}
      </select>
      <p class="text-xs text-stone-500 mt-2">
        Select your departure country. Prices will update based on this selection.
      </p>
    </div>
  {:else if mode === 'visa'}
    <!-- Original passport selector for visa mode -->
    <div class="mb-6">
      <label for="passport-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
        Your Passport Country
      </label>
      <select 
        id="passport-select"
        value={selectedPassport}
        onchange={handlePassportChange}
        class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
      >
        {#each passportCountries as country}
          <option value={country} class="text-stone-800">{country}</option>
        {/each}
      </select>
    </div>
  {/if}

  <!-- Region Selection -->
  <div class="mb-6">
    <label for="region-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
      Filter Destination by Region
    </label>
    <select 
      id="region-select"
      value={selectedRegion}
      onchange={handleRegionChange}
      class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      <option value="" class="text-stone-500">All Regions</option>
      {#each regions as region}
        <option value={region} class="text-stone-800">{region}</option>
      {/each}
    </select>
  </div>

  <!-- Destination Country Selection -->
  <div class="mb-6">
    <label for="destination-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
      Select Destination Country
    </label>
    <select 
      id="destination-select"
      value={effectiveCountry}
      onchange={handleDestinationChange}
      class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      {#each filteredDestinations as country}
        <option value={country.country} class="text-stone-800">
          {country.country}
          {country.averagePrice ? ` ($${country.averagePrice?.toLocaleString() || 'N/A'})` : ''}
        </option>
      {/each}
    </select>
  </div>
</div>