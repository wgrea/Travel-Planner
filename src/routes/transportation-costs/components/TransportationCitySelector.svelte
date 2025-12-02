<!-- src/routes/transportation-costs/components/TransportationCitySelector.svelte -->
<script lang="ts">
  import type { TransportationCosts } from '$lib/types/transportation';
  
  // Props using old syntax for compatibility
  export let selectedCountry = '';
  export let selectedCity = '';
  export let countries: TransportationCosts[] = [];
  
  // Get available cities
  const availableCities = () => {
    if (!selectedCountry) return [];
    const country = countries.find(c => c.country === selectedCountry);
    return country ? Object.keys(country.cities) : [];
  };
  
  // Find country for national average check
  const currentCountry = () => {
    return countries.find(c => c.country === selectedCountry);
  };
  
  // Event dispatching
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{
    countryChange: string;
    cityChange: string;
  }>();
  
  // Auto-select first city when country changes
  import { onMount } from 'svelte';
  onMount(() => {
    if (selectedCountry && availableCities().length > 0 && !selectedCity) {
      selectedCity = availableCities()[0];
      dispatch('cityChange', selectedCity);
    }
  });
</script>

<div class="space-y-6">
  <!-- Country Selector -->
  <div>
    <label for="country-select" class="block text-sm font-medium text-gray-700 mb-2">
      Select Destination
    </label>
    <div class="relative">
      <select 
        id="country-select"
        bind:value={selectedCountry}
        onchange={() => dispatch('countryChange', selectedCountry)}
        class="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none"
      >
        <option value="">Choose a country...</option>
        {#each countries as country}
          <option value={country.country}>
            {country.country} • {country.region}
          </option>
        {/each}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>

  <!-- City Selector -->
  {#if selectedCountry && availableCities().length > 0}
    <div>
      <label for="city-select" class="block text-sm font-medium text-gray-700 mb-2">
        Select City
      </label>
      <div class="relative">
        <select 
          id="city-select"
          bind:value={selectedCity}
          onchange={() => dispatch('cityChange', selectedCity)}
          class="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none"
        >
          <option value="">Select a city...</option>
          {#each availableCities() as city}
            <option value={city}>{city}</option>
          {/each}
          {#if currentCountry()?.nationalAverage}
            <option value="">{selectedCountry} (Country Average)</option>
          {/if}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  {/if}

  <!-- Selected Display -->
  {#if selectedCountry}
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
      <div class="text-sm text-gray-600 mb-1">Selected:</div>
      <div class="font-semibold text-gray-900">
        {selectedCountry}
        {#if selectedCity}
          <span class="text-blue-600"> • {selectedCity}</span>
        {:else}
          <span class="text-gray-500"> • (Country Average)</span>
        {/if}
      </div>
    </div>
  {/if}
</div>