<!-- src/lib/components/CountrySelector.svelte -->
<script lang="ts">
  // We'll make this more generic - not tied to FlightData
  export interface CountryData {
    country: string;
    region: string;
    cities?: string[];
    // Add other common fields that might be useful
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
    showInsights?: boolean; // Optional: show/hide the insights section
  }
  
  let { 
    selectedCountry, 
    selectedRegion, 
    countryData, 
    onCountryChange, 
    onRegionChange,
    showInsights = true 
  }: Props = $props();

  // Helper functions - now self-contained
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
  let bestMonth = $derived(selectedCountryData?.sweetSpot?.[0] || 'Not available');
  let cheapestMonth = $derived(selectedCountryData?.cheapestMonths?.[0] || 'Not available');

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

<div class="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg text-gray-900 mb-8">
  <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-300 pb-3">Select Destination</h2>
  
  <!-- Region Selection -->
  <div class="mb-4">
    <label for="region-select" class="block text-lg font-semibold mb-2 text-gray-800">🌍 Filter by Region:</label>
    <select 
      id="region-select"
      value={selectedRegion}
      onchange={handleRegionChange}
      class="w-full p-3 rounded-lg bg-white border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors duration-200"
    >
      <option value="" class="text-gray-500">All Regions</option>
      {#each regions as region}
        <option value={region} class="text-gray-900">{region}</option>
      {/each}
    </select>
  </div>

  <!-- Country Selection -->
  <div class="mb-6">
    <label for="country-select" class="block text-lg font-semibold mb-2 text-gray-800">🇺🇳 Select a Destination:</label>
    <select 
      id="country-select"
      value={selectedCountry}
      onchange={handleCountryChange}
      class="w-full p-3 rounded-lg bg-white border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors duration-200"
    >
      {#each filteredCountries as country}
        <option value={country.country} class="text-gray-900">{country.country}</option>
      {/each}
    </select>
  </div>

  <!-- Quick Region Buttons -->
  <div class="mb-6">
    <p class="text-sm font-medium text-gray-700 mb-2">Quick region filters:</p>
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
          class="px-3 py-1 bg-blue-100 hover:bg-blue-200 border border-blue-300 rounded-lg text-blue-800 text-sm font-medium transition-all duration-200"
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
        class="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium transition-all duration-200"
      >
        Clear Filter
      </button>
    </div>
  </div>

  <!-- Country Insights - Conditionally rendered -->
  {#if showInsights && selectedCountryData}
    <div class="space-y-4">
      <h3 class="text-2xl font-semibold mt-6 mb-4 text-gray-900">Insights for {selectedCountry}</h3>
      
      {#if selectedCountryData.sweetSpot}
        <div class="p-4 rounded-xl bg-blue-50 border border-blue-200 flex justify-between items-center">
          <span class="text-lg font-medium flex items-center gap-2 text-blue-900">⭐ Sweet Spot Month:</span>
          <span class="text-xl font-bold text-blue-700">{bestMonth}</span>
        </div>
      {/if}

      {#if selectedCountryData.cheapestMonths}
        <div class="p-4 rounded-xl bg-green-50 border border-green-200 flex justify-between items-center">
          <span class="text-lg font-medium flex items-center gap-2 text-green-900">💸 Cheapest Month:</span>
          <span class="text-xl font-bold text-green-700">{cheapestMonth}</span>
        </div>
      {/if}

      {#if selectedCountryData.averagePrice}
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 flex justify-between items-center">
          <span class="text-lg font-medium flex items-center gap-2 text-amber-900">💰 Average Flight Price:</span>
          <span class="text-xl font-bold text-amber-700">${selectedCountryData.averagePrice}</span>
        </div>
      {/if}

      {#if selectedCountryData.cities}
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
          <span class="text-lg font-medium flex items-center gap-2 mb-2 text-gray-900">🏙️ Popular Cities:</span>
          <div class="flex flex-wrap gap-2">
            {#each selectedCountryData.cities as city}
              <span class="px-3 py-1 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm font-medium">
                {city}
              </span>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>