<!-- src/lib/components/CitySelector.svelte -->
<script lang="ts">
  import { getCitiesByCountry, getCityDetails } from '$lib/data/cityData';
  
  export let selectedCountry: string = '';
  export let selectedRegion: string = '';
  export let selectedCity: string = '';
  export let countryData: { country: string; region: string; cities?: string[] }[] = [];
  export let onCountryChange: (country: string) => void = () => {};
  export let onRegionChange: (region: string) => void = () => {};
  export let onCityChange: (city: string) => void = () => {};
  export let showQuickFilters: boolean = true;
  export let showCityInfo: boolean = true;
  export let variant: 'default' | 'minimal' = 'default';

  $: regions = [...new Set(countryData.map(c => c.region))].sort();
  $: filteredCountries = selectedRegion 
    ? countryData.filter(country => country.region === selectedRegion)
    : countryData;
  $: availableCities = selectedCountry ? getCitiesByCountry(selectedCountry) : [];
  $: cityDetails = selectedCountry && selectedCity ? getCityDetails(selectedCity, selectedCountry) : null;

  function handleRegionChange(region: string) {
    selectedRegion = region;
    onRegionChange(region);
    
    // Auto-select first country when region changes
    if (region && filteredCountries.length > 0) {
      selectedCountry = filteredCountries[0].country;
      handleCountryChange(selectedCountry);
    } else if (!region && countryData.length > 0) {
      selectedCountry = countryData[0].country;
      handleCountryChange(selectedCountry);
    }
  }

  function handleCountryChange(country: string) {
    selectedCountry = country;
    onCountryChange(country);
    
    // Auto-set region when country changes
    if (country) {
      const countryInfo = countryData.find(c => c.country === country);
      if (countryInfo && countryInfo.region !== selectedRegion) {
        selectedRegion = countryInfo.region;
        onRegionChange(countryInfo.region);
      }
      
      // Auto-select first city when country changes
      if (availableCities.length > 0 && !availableCities.includes(selectedCity)) {
        selectedCity = availableCities[0];
        onCityChange(selectedCity);
      }
    }
  }

  function handleCityChange(city: string) {
    selectedCity = city;
    onCityChange(city);
  }
</script>

<div class="space-y-6 {variant === 'minimal' ? 'p-0' : 'p-6'}">
  <!-- Region Filter -->
  <div>
    <label for="region-select" class="block text-sm font-medium text-gray-700 mb-2">
      {variant === 'minimal' ? 'Region' : 'Filter by Region'}
    </label>
    <select 
      id="region-select"
      bind:value={selectedRegion}
      on:change={() => handleRegionChange(selectedRegion)}
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
      {variant === 'minimal' ? 'Country' : 'Select Destination Country'}
    </label>
    <select 
      id="country-select"
      bind:value={selectedCountry}
      on:change={() => handleCountryChange(selectedCountry)}
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
    >
      <option value="">Choose a country</option>
      {#each filteredCountries as country}
        <option value={country.country}>{country.country}</option>
      {/each}
    </select>
  </div>

  <!-- City Selection -->
  <div>
    <label for="city-select" class="block text-sm font-medium text-gray-700 mb-2">
      {variant === 'minimal' ? 'City' : 'Select Your Base City'}
    </label>
    <select 
      id="city-select"
      bind:value={selectedCity}
      on:change={() => handleCityChange(selectedCity)}
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
      disabled={!selectedCountry || availableCities.length === 0}
    >
      <option value="">Select a city</option>
      {#each availableCities as city}
        <option value={city}>{city}</option>
      {/each}
    </select>
  </div>

  <!-- Quick Region Filters -->
  {#if showQuickFilters && regions.length > 0 && variant !== 'minimal'}
    <div>
      <span class="block text-sm font-medium text-gray-700 mb-2">
        Quick region filters:
      </span>
      <div class="flex flex-wrap gap-2">
        {#each regions as region}
          <button
            type="button"
            class="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition-colors {selectedRegion === region ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-white text-gray-700'}"
            on:click={() => handleRegionChange(selectedRegion === region ? '' : region)}
          >
            {region}
          </button>
        {/each}
        {#if selectedRegion}
          <button
            type="button"
            class="px-3 py-1 text-sm border border-gray-300 rounded-full bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            on:click={() => handleRegionChange('')}
          >
            Clear Filter
          </button>
        {/if}
      </div>
    </div>
  {/if}

  <!-- City Info Card -->
  {#if showCityInfo && selectedCountry && selectedCity && cityDetails}
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-blue-800 font-medium">{selectedCity}</div>
          <div class="text-blue-600 text-sm">
            Digital Nomad Score: {cityDetails.digitalNomadScore}/10
          </div>
          <div class="flex gap-2 mt-2">
            {#if cityDetails.hasCoworkingSpaces}
              <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Coworking</span>
            {/if}
            {#if cityDetails.isPopular}
              <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Popular</span>
            {/if}
            {#each cityDetails.vibe.slice(0, 2) as vibe}
              <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full capitalize">{vibe}</span>
            {/each}
          </div>
        </div>
        {#if cityDetails.costOfLiving}
          <div class="text-right">
            <div class="text-lg font-semibold text-blue-700">
              ${cityDetails.costOfLiving.accommodation.midrange + (cityDetails.costOfLiving.dailyLiving.midrange * 30)}
            </div>
            <div class="text-sm text-blue-600">monthly est.</div>
          </div>
        {/if}
      </div>
    </div>
  {:else if showCityInfo && selectedCountry && selectedCity}
    <div class="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
      <div class="text-gray-800 font-medium">Exploring {selectedCity}</div>
      <div class="text-gray-600 text-sm">Digital nomad hotspot in {selectedCountry}</div>
    </div>
  {/if}
</div>