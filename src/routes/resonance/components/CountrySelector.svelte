<!-- src/routes/resonance/components/CountrySelector.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { CityResonanceProfile } from '$lib/types/resonance';
  
  export let allLocations: CityResonanceProfile[] = [];
  export let selectedRegion: string = 'any';
  export let selectedCountry: string = 'any';

  const dispatch = createEventDispatcher<{
    regionChange: string;
    countryChange: string;
  }>();

  // Get unique regions and countries
  $: allRegions = ['any', ...new Set(allLocations.map(loc => loc.region))].sort();
  
  $: availableCountries = selectedRegion === 'any' 
    ? ['any', ...new Set(allLocations.map(loc => loc.country))].sort()
    : ['any', ...new Set(allLocations
        .filter(loc => loc.region === selectedRegion)
        .map(loc => loc.country))
      ].sort();

  // Get sample cities for display
  $: sampleCitiesByCountry = availableCountries
    .filter(country => country !== 'any')
    .reduce((acc, country) => {
      const cities = allLocations
        .filter(loc => loc.country === country)
        .slice(0, 3)
        .map(loc => loc.name);
      acc[country] = cities;
      return acc;
    }, {} as Record<string, string[]>);

  function handleRegionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    selectedRegion = target.value;
    selectedCountry = 'any';
    dispatch('regionChange', selectedRegion);
    dispatch('countryChange', 'any');
  }

  function handleCountryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    selectedCountry = target.value;
    dispatch('countryChange', selectedCountry);
  }

  function clearLocation() {
    selectedRegion = 'any';
    selectedCountry = 'any';
    dispatch('regionChange', 'any');
    dispatch('countryChange', 'any');
  }
</script>

<div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-gray-900">Destination Filter</h3>
    {#if selectedRegion !== 'any' || selectedCountry !== 'any'}
      <button
        on:click={clearLocation}
        class="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
        title="Clear location filter"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        Clear
      </button>
    {/if}
  </div>

  <!-- Alternative simpler fix -->
<div class="space-y-4">

    <!-- Region Selection -->
    <div>
      <label for="resonance-region-select" class="block text-sm font-medium text-gray-700 mb-2">
        Filter by Region
      </label>
      <select 
        id="resonance-region-select"
        bind:value={selectedRegion}
        on:change={handleRegionChange}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
      >
        <option value="any">All Regions</option>
        {#each allRegions.filter(r => r !== 'any') as region}
          <option value={region}>{region}</option>
        {/each}
      </select>
    </div>

    <!-- Country Selection -->
    <div>
      <label for="resonance-country-select" class="block text-sm font-medium text-gray-700 mb-2">
        Select Destination Country
      </label>
      <select 
        id="resonance-country-select"
        bind:value={selectedCountry}
        on:change={handleCountryChange}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
        disabled={availableCountries.length === 1}
      >
        <option value="any">
          {selectedRegion === 'any' ? 'Any Country Worldwide' : `Any Country in ${selectedRegion}`}
        </option>
        {#each availableCountries.filter(c => c !== 'any') as country}
          <option value={country}>{country}</option>
        {/each}
      </select>
      
      <!-- Country details preview -->
      {#if selectedCountry !== 'any'}
        <div class="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div class="flex items-start justify-between">
            <div>
              <h4 class="font-semibold text-blue-800 text-sm">{selectedCountry}</h4>
              {#if sampleCitiesByCountry[selectedCountry] && sampleCitiesByCountry[selectedCountry].length > 0}
                <p class="text-blue-700 text-xs mt-1">
                  Sample cities: {sampleCitiesByCountry[selectedCountry].join(', ')}
                  {#if sampleCitiesByCountry[selectedCountry].length === 3}
                    <span class="text-blue-500"> + more</span>
                  {/if}
                </p>
              {/if}
            </div>
            <div class="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              {allLocations.filter(loc => loc.country === selectedCountry).length} cities
            </div>
          </div>
        </div>
      {:else if selectedRegion !== 'any'}
        <p class="text-xs text-gray-500 mt-1">
          {availableCountries.length - 1} countries available in {selectedRegion}
        </p>
      {:else}
        <p class="text-xs text-gray-500 mt-1">
          {availableCountries.length - 1} countries available worldwide
        </p>
      {/if}
    </div>

    <!-- Active Filter Display -->
    {#if selectedRegion !== 'any' || selectedCountry !== 'any'}
      <div class="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-sm font-medium text-indigo-800">Currently filtering:</span>
            <div class="text-indigo-700 font-semibold text-sm mt-1">
              {#if selectedCountry !== 'any'}
                {selectedCountry}
                {#if selectedRegion !== 'any'}
                  <span class="text-indigo-500 font-normal"> (in {selectedRegion})</span>
                {/if}
              {:else if selectedRegion !== 'any'}
                All countries in {selectedRegion}
              {/if}
            </div>
          </div>
          <div class="text-xs text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
            {#if selectedCountry !== 'any'}
              Specific Country
            {:else}
              Regional Filter
            {/if}
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>