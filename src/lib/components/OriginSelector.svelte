<!-- src/lib/components/OriginSelector.svelte -->
<script lang="ts">
  import { 
    getAllOriginCountries, 
    getAllOriginRegions, 
    getOriginCountriesByRegion,
    getRegionForCountry 
  } from '$lib/utils/regionUtils';
  
  let { 
    selectedOrigin,
    onOriginChange 
  } = $props<{
    selectedOrigin: string;
    onOriginChange: (country: string) => void;
  }>();
  
  // State for filtering
  let selectedRegion = $state('All Regions');
  
  // Get all possible origin countries
  const allOrigins = $derived(() => getAllOriginCountries());
  
  // Get unique regions from available origins
  const allRegions = $derived(() => ['All Regions', ...getAllOriginRegions()]);
  
  // Filter origins based on region
  const filteredOrigins = $derived(() => {
    if (selectedRegion === 'All Regions') return allOrigins();
    return getOriginCountriesByRegion(selectedRegion);
  });
  
  // Get destination count from routeCosts
  import { routeCosts } from '$lib/data/routeCosts';
  function getDestinationCount(country: string): number {
    return Object.keys(routeCosts[country] || {}).length;
  }
</script>

<div class="origin-selector space-y-4">
  <!-- Region Filter -->
  <div>
    <label for="origin-region-select" class="block text-sm font-medium mb-2 text-gray-700">
      Filter by Region
    </label>
    <select
      id="origin-region-select"
      bind:value={selectedRegion}
      class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
    >
      {#each allRegions() as region}
        <option value={region}>{region}</option>
      {/each}
    </select>
  </div>
  
  <!-- Country Selector -->
  <div>
    <label for="origin-country-select" class="block text-sm font-medium mb-2 text-gray-700">
      Select Departure Country
    </label>
    <select
      id="origin-country-select"
      bind:value={selectedOrigin}
      class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
    >
      {#each filteredOrigins() as country}
        <option value={country}>
          {country} ({getDestinationCount(country)} destinations)
        </option>
      {/each}
    </select>
  </div>
  
  <!-- Quick Stats -->
  <div class="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-4 border border-blue-200 mt-4">
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div class="text-center">
        <div class="text-lg font-bold text-blue-700">{getDestinationCount(selectedOrigin)}</div>
        <div class="text-xs text-blue-600">Available Destinations</div>
      </div>
      <div class="text-center">
        <div class="text-lg font-bold text-indigo-700">
          {getRegionForCountry(selectedOrigin)}
        </div>
        <div class="text-xs text-indigo-600">Region</div>
      </div>
    </div>
    <p class="text-xs text-gray-600 mt-3 text-center">
      Switching departure country updates all flight prices
    </p>
  </div>
</div>