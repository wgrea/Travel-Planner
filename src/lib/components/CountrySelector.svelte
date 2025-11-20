<!-- src/lib/components/CountrySelector.svelte -->
<script lang="ts">
  export interface CountryData {
    country: string;
    region: string;
    cities?: string[];
    averagePrice?: number;
    sweetSpot?: string[];
    cheapestMonths?: string[];
  }

  interface Props {
    selectedCountry: string;
    selectedRegion: string;
    countryData: CountryData[];
    onCountryChange: (country: string) => void;
    onRegionChange: (region: string) => void;
    showInsights?: boolean;
    variant?: 'default' | 'minimal'; // Add variant prop for different contexts
  }
  
  let { 
    selectedCountry, 
    selectedRegion, 
    countryData, 
    onCountryChange, 
    onRegionChange,
    showInsights = true,
    variant = 'default'
  }: Props = $props();

  // Helper functions
  function getAllRegions(): string[] {
    const regions = new Set(countryData.map(item => item.region));
    return Array.from(regions).sort();
  }

  function getCountriesByRegion(region: string): CountryData[] {
    return countryData.filter(item => item.region === region);
  }

  let regions = $derived(getAllRegions());
  let filteredCountries = $derived(
    selectedRegion 
      ? getCountriesByRegion(selectedRegion)
      : countryData
  );

  let selectedCountryData = $derived(countryData.find((item: CountryData) => item.country === selectedCountry));

  function handleRegionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newRegion = target.value;
    onRegionChange(newRegion);
    
    if (newRegion) {
      const countriesInRegion = getCountriesByRegion(newRegion);
      if (countriesInRegion.length > 0) {
        onCountryChange(countriesInRegion[0].country);
      }
    }
  }

  function handleCountryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    onCountryChange(target.value);
  }
</script>

<div class="text-stone-900 {variant === 'minimal' ? '' : 'bg-white rounded-2xl p-8 border border-stone-200 shadow-sm'}">
  {#if variant === 'default'}
    <h2 class="text-2xl font-light mb-8 text-stone-900 pb-4 border-b border-stone-200">
      Select Destination
    </h2>
  {/if}
  
  <!-- Region Selection -->
  <div class="mb-6">
    <label for="region-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
      Filter by Region
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

  <!-- Country Selection -->
  <div class="mb-6">
    <label for="country-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
      Select Destination Country
    </label>
    <select 
      id="country-select"
      value={selectedCountry}
      onchange={handleCountryChange}
      class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      {#each filteredCountries as country}
        <option value={country.country} class="text-stone-800">{country.country}</option>
      {/each}
    </select>
  </div>

  <!-- Quick Region Buttons - More subtle -->
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
              onCountryChange(countriesInRegion[0].country);
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
          onCountryChange(countryData[0]?.country || '');
        }}
        class="px-3 py-1.5 bg-stone-50 border border-stone-200 hover:border-stone-300 rounded-lg text-stone-600 text-xs font-medium tracking-wide transition-all duration-200"
      >
        Clear Filter
      </button>
    </div>
  </div>

  <!-- Country Insights - Much more subtle styling -->
  {#if showInsights && selectedCountryData && variant === 'default'}
    <div class="space-y-4 mt-8 pt-6 border-t border-stone-200">
      <h3 class="text-lg font-light mb-4 text-stone-900">
        Insights for {selectedCountry}
      </h3>
      
      {#if selectedCountryData.sweetSpot}
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
          <span class="text-sm font-medium text-stone-700">Best Time to Visit</span>
          <span class="text-sm font-light text-stone-900">{selectedCountryData.sweetSpot[0]}</span>
        </div>
      {/if}

      {#if selectedCountryData.cheapestMonths}
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
          <span class="text-sm font-medium text-stone-700">Most Affordable</span>
          <span class="text-sm font-light text-stone-900">{selectedCountryData.cheapestMonths[0]}</span>
        </div>
      {/if}

      {#if selectedCountryData.averagePrice}
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
          <span class="text-sm font-medium text-stone-700">Average Flight Price</span>
          <span class="text-sm font-light text-stone-900">${selectedCountryData.averagePrice}</span>
        </div>
      {/if}

      {#if selectedCountryData.cities}
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
          <span class="text-sm font-medium text-stone-700 mb-3 block">Popular Cities</span>
          <div class="flex flex-wrap gap-2">
            {#each selectedCountryData.cities as city}
              <span class="px-2.5 py-1 bg-white border border-stone-200 rounded text-stone-700 text-xs font-light">
                {city}
              </span>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>