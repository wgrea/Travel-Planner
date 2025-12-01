<!-- src/lib/components/CountrySelector.svelte -->
<script lang="ts">
  import { visaData } from '$lib/data/visaData';
  
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
    originCountry?: string; // Add this line
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
    onRegionChange,
    showInsights = true,
    variant = 'default',
    mode = 'visa',
    originCountry = 'United States' // Add this with default value
  }: Props = $props();

  // Determine which country to use based on mode
  const effectiveCountry = mode === 'flight' ? selectedCountry : selectedDestination;
  const onEffectiveCountryChange = mode === 'flight' ? onCountryChange : onDestinationChange;

  // Get available passport countries from visaData
  const passportCountries = Object.keys(visaData);
  
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

  let selectedDestinationData = $derived(
    countryData.find((item: CountryData) => item.country === selectedDestination)
  );

  // Get visa info for the selected combination
  let visaInfo = $derived(
    visaData[selectedPassport]?.[selectedDestination] || null
  );

  function handleRegionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newRegion = target.value;
    onRegionChange(newRegion);
    
    if (newRegion) {
      const countriesInRegion = getCountriesByRegion(newRegion);
      if (countriesInRegion.length > 0) {
        onDestinationChange(countriesInRegion[0].country);
      }
    }
  }

  function handleDestinationChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    onDestinationChange(target.value);
  }

  function handlePassportChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    onPassportChange(target.value);
  }
</script>

<div class="text-stone-900 {variant === 'minimal' ? '' : 'bg-white rounded-2xl p-8 border border-stone-200 shadow-sm'}">
  {#if variant === 'default'}
    <h2 class="text-2xl font-light mb-8 text-stone-900 pb-4 border-b border-stone-200">
      Select Your Journey
    </h2>
  {/if}
  
  <!-- Passport Country Selection -->
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
      value={selectedDestination}
      onchange={handleDestinationChange}
      class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      {#each filteredDestinations as country}
        <option value={country.country} class="text-stone-800">{country.country}</option>
      {/each}
    </select>
  </div>

  <!-- Quick Region Buttons -->
  <div class="mb-6">
    <p class="text-xs text-stone-500 mb-3 font-light tracking-wide">Quick region filters:</p>
    <div class="flex flex-wrap gap-2">
      {#each regions as region}
        <button
          type="button"
          onclick={() => {
            onRegionChange(region);
            const countriesInRegion = getCountriesByRegion(region);
            if (countriesInRegion.length > 0) {
              onDestinationChange(countriesInRegion[0].country);
            }
          }}
          class="px-3 py-1.5 bg-white border border-stone-200 hover:border-stone-300 rounded-lg text-stone-700 text-xs font-medium tracking-wide transition-all duration-200 hover:shadow-sm"
        >
          {region}
        </button>
      {/each}
      <button
        type="button"
        onclick={() => {
          onRegionChange('');
          onDestinationChange(countryData[0]?.country || '');
        }}
        class="px-3 py-1.5 bg-stone-50 border border-stone-200 hover:border-stone-300 rounded-lg text-stone-600 text-xs font-medium tracking-wide transition-all duration-200"
      >
        Clear Filter
      </button>
    </div>
  </div>
</div>