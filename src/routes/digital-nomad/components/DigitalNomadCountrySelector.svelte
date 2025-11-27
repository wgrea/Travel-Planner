<!-- src/routes/digital-nomad/components/DigitalNomadCountrySelector.svelte -->
<script lang="ts">
  import { nomadDataByRegion, getAllRegions, getSubregionsByRegion, getNomadDataByRegion } from '$lib/data/nomadData';
  
  export let selectedRegion: string = '';
  export let selectedSubregion: string = '';
  export let selectedCountry: string = '';
  
  $: availableRegions = getAllRegions();
  $: availableSubregions = selectedRegion ? getSubregionsByRegion(selectedRegion) : [];
  $: availableCountries = selectedRegion ? getNomadDataByRegion(selectedRegion) : [];
</script>

<div class="space-y-6">
  <!-- Region Selector -->
  <div>
    <label for="region-select" class="block text-gray-700 text-sm font-medium mb-2">Filter by Region</label>
    <select 
      id="region-select"
      bind:value={selectedRegion}
      class="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
    >
      <option value="">All Regions</option>
      {#each availableRegions as region}
        <option value={region}>{region}</option>
      {/each}
    </select>
  </div>
  
  <!-- Subregion Selector (only show if region has subregions) -->
  {#if availableSubregions.length > 0}
    <div>
      <label for="subregion-select" class="block text-gray-700 text-sm font-medium mb-2">Filter by Subregion</label>
      <select 
        id="subregion-select"
        bind:value={selectedSubregion}
        class="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
      >
        <option value="">All Subregions</option>
        {#each availableSubregions as subregion}
          <option value={subregion}>{subregion}</option>
        {/each}
      </select>
    </div>
  {/if}
  
  <!-- Country Selector -->
  <div>
    <label for="country-select" class="block text-gray-700 text-sm font-medium mb-2">Select Destination Country</label>
    <select 
      id="country-select"
      bind:value={selectedCountry}
      class="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
    >
      <option value="">Select a country</option>
      {#each availableCountries as countryData}
        <option value={countryData.country}>{countryData.country}</option>
      {/each}
    </select>
  </div>
</div>