<!-- src/routes/living-costs/components/CitySelector.svelte -->
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
  }>();

  let regions: string[] = [];
  
  $: {
    // EXTENSIVE DEBUGGING
    console.log('=== LIVING COST SELECTOR DEBUG ===');
    console.log('1. Input countryData:', {
      total: countryData.length,
      sample: countryData.slice(0, 5), // Show first 5
      allCountries: countryData.map(c => `${c.country} (${c.region})`),
      uniqueRegions: [...new Set(countryData.map(c => c.region))]
    });
    
    // Calculate regions
    regions = [...new Set(countryData.map(c => c.region))].sort();
    console.log('2. Calculated regions:', regions);
    
    // Show filtered countries
    console.log('3. Filtered countries for selectedRegion:', selectedRegion || '(All Regions)');
    console.log('   - filteredCountries count:', filteredCountries.length);
    console.log('   - filteredCountries:', filteredCountries.map(c => `${c.country} (${c.region})`));
    console.log('===============================');
  }
  
  $: filteredCountries = selectedRegion 
    ? countryData.filter(country => country.region === selectedRegion)
    : countryData;

  // City selection logic
  $: currentCountryData = countryData.find(c => c.country === selectedCountry);
  $: availableCities = currentCountryData?.cities || [];

  function handleCountrySelect(country: string) {
    console.log('handleCountrySelect:', country);
    selectedCountry = country;
    onCountryChange(country);
    selectedCity = ''; // Reset city when country changes
    dispatch('cityChange', '');
  }

  function handleCitySelect(city: string) {
    console.log('handleCitySelect:', city);
    selectedCity = city;
    dispatch('selectCity', { city, country: selectedCountry });
    dispatch('cityChange', city);
  }

  function handleRegionSelect(region: string) {
    console.log('handleRegionSelect:', region || '(All Regions)');
    selectedRegion = region;
    onRegionChange(region);
    
    if (region) {
      const countriesInRegion = filteredCountries;
      if (countriesInRegion.length > 0) {
        handleCountrySelect(countriesInRegion[0].country);
      }
    } else {
      // When switching back to "All Regions", clear country selection
      selectedCountry = '';
      selectedCity = '';
    }
  }

  // Initialize selectedCity when country changes and cities are available
  $: if (selectedCountry && availableCities.length > 0 && !selectedCity) {
    selectedCity = availableCities[0];
    handleCitySelect(selectedCity);
  }
</script>

<div class="space-y-6 p-6">
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
      <option value="">All Regions ({countryData.length} countries)</option>
      {#each regions as region}
        <option value={region}>
          {region} ({countryData.filter(c => c.region === region).length})
        </option>
      {/each}
    </select>
    
    <!-- DEBUG: Show region info -->
    <div class="text-xs text-gray-500 mt-1">
      {regions.length} regions available
    </div>
  </div>

  <!-- Country Selection -->
  <div>
    <label for="country-select" class="block text-sm font-medium text-gray-700 mb-2">
      Select Destination Country
      {#if selectedRegion}
        <span class="text-xs font-normal text-gray-500 ml-1">
          (in {selectedRegion})
        </span>
      {/if}
    </label>
    <select 
      id="country-select"
      bind:value={selectedCountry}
      on:change={() => handleCountrySelect(selectedCountry)}
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
    >
      <option value="">
        {#if selectedRegion}
          Choose a country in {selectedRegion}
        {:else}
          Choose a country ({filteredCountries.length} available)
        {/if}
      </option>
      {#each filteredCountries as country}
        <option value={country.country}>
          {#if !selectedRegion}
            {country.country} ({country.region})
          {:else}
            {country.country}
          {/if}
          {country.cities && country.cities.length > 0 ? ` - ${country.cities.length} cities` : ''}
        </option>
      {/each}
    </select>
    
    <!-- Show count and DEBUG info -->
    {#if filteredCountries.length > 0}
      <div class="text-xs text-gray-500 mt-1 space-y-1">
        <div>
          {#if selectedRegion}
            Showing {filteredCountries.length} countries in {selectedRegion}
          {:else}
            Showing all {filteredCountries.length} countries across all regions
          {/if}
        </div>
        {#if !selectedRegion && filteredCountries.length > 0}
          <div class="text-gray-400">
            Browse destinations across {[...new Set(filteredCountries.map(c => c.region))].length} regions
          </div>
        {/if}
      </div>
    {:else}
      <div class="text-xs text-red-500 mt-1">
        DEBUG: No countries found! Check data filtering.
      </div>
    {/if}
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
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
      >
        <option value="">Select a city (optional)</option>
        {#each availableCities as city}
          <option value={city}>{city}</option>
        {/each}
      </select>
      <p class="text-sm text-gray-500 mt-1">
        {#if selectedCity}
          Showing costs for {selectedCity}, {selectedCountry}
        {:else}
          Showing average costs for {selectedCountry}
        {/if}
      </p>
    </div>
  {:else if selectedCountry}
    <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <p class="text-yellow-700 text-sm">
        No city-specific data available for {selectedCountry}. Showing country averages.
      </p>
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
              {currentCountryData.cities.length} cities available - select a city for specific costs
            </p>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>