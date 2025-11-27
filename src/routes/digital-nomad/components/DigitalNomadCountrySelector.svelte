<!-- src/routes/digital-nomad/components/DigitalNomadCountrySelector.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let selectedCountry: string = '';
  export let selectedRegion: string = '';
  export let selectedCity: string = '';
  export let countryData: { country: string; region: string; cities: string[] }[] = [];
  export let onCountryChange: (country: string) => void = () => {};
  export let onRegionChange: (region: string) => void = () => {};

  const dispatch = createEventDispatcher<{
    selectCity: { city: string; country: string };
    cityChange: string;
    countryChange: string;
    regionChange: string;
  }>();

  let regions: string[] = [];
  
  $: regions = [...new Set(countryData.map(c => c.region))].sort();
  $: filteredCountries = selectedRegion 
    ? countryData.filter(country => country.region === selectedRegion)
    : countryData;

  // City selection logic
  $: currentCountryData = countryData.find(c => c.country === selectedCountry);
  $: availableCities = currentCountryData?.cities || [];

  function handleCountrySelect(country: string) {
    selectedCountry = country;
    onCountryChange(country);
    dispatch('countryChange', country);
    selectedCity = ''; // Reset city when country changes
    dispatch('cityChange', '');
  }

  function handleCitySelect(city: string) {
    selectedCity = city;
    dispatch('selectCity', { city, country: selectedCountry });
    dispatch('cityChange', city);
  }

  function handleRegionSelect(region: string) {
    selectedRegion = region;
    onRegionChange(region);
    dispatch('regionChange', region);
    
    if (region) {
      const countriesInRegion = filteredCountries;
      if (countriesInRegion.length > 0) {
        handleCountrySelect(countriesInRegion[0].country);
      }
    }
  }

  // Initialize selectedCity when country changes and cities are available
  $: if (selectedCountry && availableCities.length > 0 && !selectedCity) {
    selectedCity = availableCities[0];
    handleCitySelect(selectedCity);
  }
</script>

<div class="space-y-6 p-6">
  <!-- COUNTRY SELECTION MODE -->
  <!-- Region Filter -->
  <div>
    <label for="region-select" class="block text-sm font-medium text-gray-700 mb-2">
      Filter by Region
    </label>
    <select 
      id="region-select"
      bind:value={selectedRegion}
      on:change={() => handleRegionSelect(selectedRegion)}
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">All Regions</option>
      {#each regions as region}
        <option value={region}>{region}</option>
      {/each}
    </select>
  </div>

  <!-- Country Selection -->
  <div>
    <label for="country-select" class="block text-sm font-medium text-gray-700 mb-2">
      Select Destination Country
    </label>
    <select 
      id="country-select"
      bind:value={selectedCountry}
      on:change={() => handleCountrySelect(selectedCountry)}
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">Choose a country</option>
      {#each filteredCountries as country}
        <option value={country.country}>
          {country.country} 
          {country.cities && country.cities.length > 0 ? `(${country.cities.length} cities)` : ''}
        </option>
      {/each}
    </select>
  </div>

  <!-- City Selection Dropdown -->
  {#if selectedCountry && availableCities.length > 0}
    <div>
      <label for="city-select" class="block text-sm font-medium text-gray-700 mb-2">
        Select City
      </label>
      <select 
        id="city-select"
        bind:value={selectedCity}
        on:change={() => handleCitySelect(selectedCity)}
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Select a city (optional)</option>
        {#each availableCities as city}
          <option value={city}>{city}</option>
        {/each}
      </select>
      <p class="text-sm text-gray-500 mt-1">
        {#if selectedCity}
          Showing digital nomad info for {selectedCity}, {selectedCountry}
        {:else}
          Showing average digital nomad info for {selectedCountry}
        {/if}
      </p>
    </div>
  {:else if selectedCountry}
    <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <p class="text-yellow-700 text-sm">
        No city-specific digital nomad data available for {selectedCountry}. Showing country averages.
      </p>
    </div>
  {/if}

  <!-- Quick Region Filters -->
  {#if regions.length > 0}
    <div>
      <span class="block text-sm font-medium text-gray-700 mb-2">
        Quick region filters:
      </span>
      <div class="flex flex-wrap gap-2">
        {#each regions as region}
          <button
            type="button"
            class="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition-colors {selectedRegion === region ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white text-gray-700'}"
            on:click={() => {
              handleRegionSelect(selectedRegion === region ? '' : region);
            }}
          >
            {region}
          </button>
        {/each}
        {#if selectedRegion}
          <button
            type="button"
            class="px-3 py-1 text-sm border border-gray-300 rounded-full bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            on:click={() => {
              handleRegionSelect('');
            }}
          >
            Clear Filter
          </button>
        {/if}
      </div>
    </div>
  {/if}

  <!-- Selected Location Info -->
  {#if selectedCountry}
    <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-semibold text-blue-800">Selected Location</h3>
          <p class="text-blue-700">
            {#if selectedCity}
              {selectedCity}, {selectedCountry}
            {:else}
              {selectedCountry} (country average)
            {/if}
          </p>
          {#if currentCountryData?.cities && currentCountryData.cities.length > 0 && !selectedCity}
            <p class="text-blue-600 text-sm mt-1">
              {currentCountryData.cities.length} cities available - select a city for specific digital nomad info
            </p>
          {/if}
        </div>
        <div class="flex items-center space-x-2 text-blue-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-sm font-medium">Digital Nomad</span>
        </div>
      </div>
    </div>
  {/if}
</div>