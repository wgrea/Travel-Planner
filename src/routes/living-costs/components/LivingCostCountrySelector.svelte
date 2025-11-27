<!-- src/routes/living-costs/components/LivingCostCountrySelector.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  
  export let selectedCountry: string = '';
  export let selectedRegion: string = '';
  export let countryData: { country: string; region: string; cities: string[] }[] = [];
  export let onCountryChange: (country: string) => void = () => {};
  export let onRegionChange: (region: string) => void = () => {};

  // Add city selection state
  let selectedCity: string = '';
  let showCitySelection = false;
  let citySearchQuery = '';
  
  const dispatch = createEventDispatcher<{
    selectCity: { city: string; country: string };
  }>();

  let regions: string[] = [];
  
  $: regions = [...new Set(countryData.map(c => c.region))].sort();
  $: filteredCountries = selectedRegion 
    ? countryData.filter(country => country.region === selectedRegion)
    : countryData;

  // City selection logic
  $: currentCountryData = countryData.find(c => c.country === selectedCountry);
  $: availableCities = currentCountryData?.cities || [];
  $: filteredCities = citySearchQuery 
    ? availableCities.filter(city => 
        city.toLowerCase().includes(citySearchQuery.toLowerCase())
      )
    : availableCities;

  function handleCountrySelect(country: string) {
    selectedCountry = country;
    onCountryChange(country);
    
    // Show city selection if the country has cities
    const countryInfo = countryData.find(c => c.country === country);
    if (countryInfo?.cities && countryInfo.cities.length > 0) {
      showCitySelection = true;
      selectedCity = ''; // Reset city selection
    } else {
      showCitySelection = false;
      selectedCity = '';
    }
  }

  function handleCitySelect(city: string) {
    selectedCity = city;
    dispatch('selectCity', { city, country: selectedCountry });
  }

  function handleBackToCountries() {
    showCitySelection = false;
    selectedCity = '';
    citySearchQuery = '';
  }

  function handleRegionSelect(region: string) {
    selectedRegion = region;
    onRegionChange(region);
    
    if (region) {
      const countriesInRegion = filteredCountries;
      if (countriesInRegion.length > 0) {
        handleCountrySelect(countriesInRegion[0].country);
      }
    }
  }
</script>

<div class="space-y-6 p-6">
  {#if showCitySelection && selectedCountry}
    <!-- CITY SELECTION MODE -->
    <div class="city-selection-mode">
      <!-- Back to Country Selection -->
      <div class="mb-6">
        <button
          on:click={handleBackToCountries}
          class="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors mb-4"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to countries
        </button>
        <h2 class="text-xl font-semibold text-gray-800">
          Select a city in <span class="text-emerald-600">{selectedCountry}</span>
        </h2>
        <p class="text-gray-600 text-sm mt-1">
          {availableCities.length} {availableCities.length === 1 ? 'city' : 'cities'} available
        </p>
      </div>

      <!-- City Search -->
      <div class="mb-6">
        <label for="city-search" class="block text-sm font-medium text-gray-700 mb-2">
          Search Cities
        </label>
        <input
          id="city-search"
          type="text"
          bind:value={citySearchQuery}
          placeholder="Type to search cities..."
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      <!-- Cities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each filteredCities as city (city)}
          <button
            class="city-card p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all duration-200 text-left {selectedCity === city ? 'border-emerald-500 bg-emerald-50' : 'bg-white'}"
            on:click={() => handleCitySelect(city)}
            in:fade={{ duration: 200 }}
          >
            <h3 class="font-medium text-gray-800 mb-2">{city}</h3>
            <div class="text-sm text-gray-600">
              <span class="font-medium text-emerald-600">{selectedCountry}</span>
            </div>
          </button>
        {/each}
      </div>

      {#if filteredCities.length === 0}
        <div class="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
          {citySearchQuery 
            ? `No cities found matching "${citySearchQuery}"`
            : 'No cities available for this country'
          }
        </div>
      {/if}

      <!-- Selected City Display -->
      {#if selectedCity}
        <div class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-semibold text-emerald-800">Selected City</h3>
              <p class="text-emerald-700">{selectedCity}, {selectedCountry}</p>
            </div>
            <button
              on:click={() => handleCitySelect('')}
              class="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
            >
              Change
            </button>
          </div>
        </div>
      {/if}
    </div>

  {:else}
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
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
              class="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition-colors {selectedRegion === region ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-white text-gray-700'}"
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

    <!-- Selected Country Info -->
    {#if selectedCountry && currentCountryData}
      <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-semibold text-blue-800">Selected Country</h3>
            <p class="text-blue-700">{selectedCountry}</p>
            {#if currentCountryData.cities && currentCountryData.cities.length > 0}
              <p class="text-blue-600 text-sm mt-1">
                {currentCountryData.cities.length} cities available - 
                <button 
                  on:click={() => showCitySelection = true}
                  class="underline hover:text-blue-800 ml-1"
                >
                  Select a city
                </button>
              </p>
            {/if}
          </div>
          {#if currentCountryData.cities && currentCountryData.cities.length > 0}
            <button
              on:click={() => showCitySelection = true}
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Choose City
            </button>
          {/if}
        </div>
      </div>
    {/if}
  {/if}
</div>