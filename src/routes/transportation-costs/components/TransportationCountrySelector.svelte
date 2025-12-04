<!-- src/routes/transportation-costs/components/TransportationCountrySelector.svelte -->
<script lang="ts">
  import type { TransportationCosts } from '$lib/types/transportation';
  import { 
    getAllRegions, 
    getSubregionsByRegion, 
    getCountriesByRegion, 
    getCitiesByCountry,
    hasSubregions 
  } from '$lib/utils/transportation';
  
  let {
    selectedRegion = $bindable(''),
    selectedSubregion = $bindable(''),
    selectedCountry = $bindable(''),
    selectedCity = $bindable('')
  } = $props();
  
  // Get available data
  const regions = getAllRegions();
  const subregions = $derived(selectedRegion ? getSubregionsByRegion(selectedRegion) : []);
  const hasSubregionsFlag = $derived(selectedRegion ? hasSubregions(selectedRegion) : false);
  const countries = $derived(
    selectedRegion ? getCountriesByRegion(selectedRegion, selectedSubregion) : []
  );
  const cities = $derived(getCitiesByCountry(selectedCountry));
  
  // Auto-select first region if none selected
  $effect(() => {
    if (!selectedRegion && regions.length > 0) {
      selectedRegion = regions[0];
    }
  });
  
  // Reset subregion when region changes
  $effect(() => {
    if (selectedRegion) {
      selectedSubregion = '';
    }
  });
  
  // Auto-select first country when region/subregion changes
  $effect(() => {
    if (selectedRegion && countries.length > 0 && !selectedCountry) {
      selectedCountry = countries[0].country;
    }
  });
  
  // Auto-select first city when country changes
  $effect(() => {
    if (selectedCountry && cities.length > 0 && !selectedCity) {
      selectedCity = cities[0];
    }
  });
  
  function handleRegionChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedRegion = select.value;
    selectedSubregion = ''; // Reset subregion
    selectedCountry = ''; // Reset country
    selectedCity = ''; // Reset city
  }
  
  function handleSubregionChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedSubregion = select.value;
    selectedCountry = ''; // Reset country
    selectedCity = ''; // Reset city
  }
  
  function handleCountryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedCountry = select.value;
    selectedCity = ''; // Reset city
  }
  
  function handleCityChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedCity = select.value;
  }
  
  function selectCity(city: string) {
    selectedCity = city;
  }
</script>

<div class="space-y-6">
  <!-- Region Selection -->
  <div>
    <label for="region-select" class="block text-sm font-medium text-gray-700 mb-2">
      <span class="flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Select Region
      </span>
    </label>
    <select 
      id="region-select"
      value={selectedRegion}
      onchange={handleRegionChange}
      class="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
    >
      {#each regions as region}
        <option value={region}>{region}</option>
      {/each}
    </select>
  </div>
  
  <!-- Subregion Selection (only show if region has subregions) -->
  {#if selectedRegion && hasSubregionsFlag}
    <div>
      <label for="subregion-select" class="block text-sm font-medium text-gray-700 mb-2">
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Select Subregion
        </span>
      </label>
      <select 
        id="subregion-select"
        value={selectedSubregion}
        onchange={handleSubregionChange}
        class="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
      >
        <option value="">All {selectedRegion}</option>
        {#each subregions as subregion}
          <option value={subregion}>{subregion}</option>
        {/each}
      </select>
      {#if selectedSubregion}
        <p class="text-xs text-gray-500 mt-1">
          Showing countries in {selectedSubregion}, {selectedRegion}
        </p>
      {:else}
        <p class="text-xs text-gray-500 mt-1">
          Showing all countries in {selectedRegion}
        </p>
      {/if}
    </div>
  {/if}
  
  <!-- Country Selection -->
  <div>
    <label for="country-select" class="block text-sm font-medium text-gray-700 mb-2">
      <span class="flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        Select Country
        {#if selectedSubregion}
          <span class="text-xs font-normal text-gray-500">
            (in {selectedSubregion})
          </span>
        {/if}
      </span>
    </label>
    <select 
      id="country-select"
      value={selectedCountry}
      onchange={handleCountryChange}
      disabled={!selectedRegion || countries.length === 0}
      class="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <option value="">Select a country</option>
      {#each countries as country}
        <option value={country.country}>{country.country}</option>
      {/each}
    </select>
  </div>
  
  <!-- City Selection -->
  <div>
    <label for="city-select" class="block text-sm font-medium text-gray-700 mb-2">
      <span class="flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        Select City
      </span>
    </label>
    <select 
      id="city-select"
      value={selectedCity}
      onchange={handleCityChange}
      disabled={!selectedCountry || cities.length === 0}
      class="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
    >
      <option value="">Select a city</option>
      {#each cities as city}
        <option value={city}>{city}</option>
      {/each}
    </select>
    
    <!-- City Grid -->
    {#if selectedCountry && cities.length > 0}
      <div class="grid grid-cols-2 gap-3">
        {#each cities as city}
          <button
            type="button"
            onclick={() => selectCity(city)}
            class="px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl text-left transition-all duration-200 group {selectedCity === city ? 'bg-blue-50 border-blue-300' : ''}"
          >
            <div class="font-medium text-gray-900 group-hover:text-blue-700 {selectedCity === city ? 'text-blue-700' : ''}">
              {city}
            </div>
            <div class="text-sm text-gray-500 group-hover:text-blue-600 {selectedCity === city ? 'text-blue-600' : ''}">
              {selectedCountry}
            </div>
          </button>
        {/each}
      </div>
    {:else if selectedCountry}
      <div class="text-center py-4 text-gray-500">
        No cities available for {selectedCountry}
      </div>
    {/if}
  </div>
</div>