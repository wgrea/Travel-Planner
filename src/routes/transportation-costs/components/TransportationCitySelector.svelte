<!-- src/routes/transportation-costs/components/TransportationCitySelector.svelte -->
<!-- src/routes/transportation-costs/components/TransportationCitySelector.svelte -->
<script lang="ts">
  import type { TransportationCosts } from '$lib/types/transportation';
  
  export let selectedCountry: string = '';
  export let selectedCity: string = '';
  export let countries: TransportationCosts[];
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  $: countryList = countries.map(c => c.country).filter((value, index, self) => self.indexOf(value) === index);
  
  $: currentCountry = countries.find(c => c.country === selectedCountry);
  $: cityList = currentCountry ? Object.keys(currentCountry.cities) : [];
  
  // Generate unique IDs for accessibility
  let countrySelectId = `country-select-${Math.random().toString(36).substr(2, 9)}`;
  let citySelectId = `city-select-${Math.random().toString(36).substr(2, 9)}`;
  
  function handleCountryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newCountry = target.value;
    selectedCountry = newCountry;
    selectedCity = '';
    dispatch('countryChange', newCountry);
    dispatch('cityChange', '');
  }
  
  function handleCityChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newCity = target.value;
    selectedCity = newCity;
    dispatch('cityChange', newCity);
  }
</script>

<div>
  <h2 class="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    Select Destination
  </h2>
  
  <div class="space-y-4">
    <!-- Country Selector with proper label association -->
    <div>
      <label for={countrySelectId} class="block text-sm font-medium text-gray-700 mb-2">
        Country
      </label>
      <select 
        id={countrySelectId}
        value={selectedCountry}
        on:change={handleCountryChange}
        class="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white"
      >
        <option value="">Choose a country...</option>
        {#each countryList as country}
          <option value={country}>{country}</option>
        {/each}
      </select>
    </div>

    <!-- City Selector with proper label association -->
    {#if selectedCountry && cityList.length > 0}
      <div>
        <label for={citySelectId} class="block text-sm font-medium text-gray-700 mb-2">
          City (Optional)
        </label>
        <select 
          id={citySelectId}
          value={selectedCity}
          on:change={handleCityChange}
          class="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white"
        >
          <option value="">All cities (country average)</option>
          {#each cityList as city}
            <option value={city}>{city}</option>
          {/each}
        </select>
      </div>
    {/if}
  </div>
  
  {#if selectedCountry}
    <div class="mt-4 p-4 bg-green-50/80 rounded-xl border border-green-200">
      <p class="text-sm text-green-700 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        Selected: <strong>{selectedCountry}</strong>
        {#if selectedCity}
          <span class="text-green-600">→ {selectedCity}</span>
        {:else}
          <span class="text-green-600">(Country Average)</span>
        {/if}
      </p>
    </div>
  {/if}
</div>