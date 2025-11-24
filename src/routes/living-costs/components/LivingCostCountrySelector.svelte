<!-- src/routes/living-costs/components/LivingCostCountrySelector.svelte -->
<script lang="ts">
  export let selectedCountry: string = '';
  export let selectedRegion: string = '';
  export let countryData: { country: string; region: string; cities: string[] }[] = [];
  export let onCountryChange: (country: string) => void = () => {};
  export let onRegionChange: (region: string) => void = () => {};

  let regions: string[] = [];
  
  $: regions = [...new Set(countryData.map(c => c.region))].sort();
  $: filteredCountries = selectedRegion 
    ? countryData.filter(country => country.region === selectedRegion)
    : countryData;
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
      on:change={() => onCountryChange(selectedCountry)}
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
    >
      <option value="">Choose a country</option>
      {#each filteredCountries as country}
        <option value={country.country}>{country.country}</option>
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
              selectedRegion = selectedRegion === region ? '' : region;
              onRegionChange(selectedRegion);
              if (selectedRegion) {
                const firstCountry = countryData.find(c => c.region === selectedRegion);
                if (firstCountry) {
                  selectedCountry = firstCountry.country;
                  onCountryChange(selectedCountry);
                }
              }
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
              selectedRegion = '';
              onRegionChange('');
            }}
          >
            Clear Filter
          </button>
        {/if}
      </div>
    </div>
  {/if}
</div>