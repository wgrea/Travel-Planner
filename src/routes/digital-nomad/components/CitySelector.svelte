<!-- src/routes/digital-nomad/components/CitySelector.svelte -->
<script lang="ts">
  // Use $props() instead of export let
  let {
    selectedCountry = '',
    countries = []
  } = $props();
  
  // You can also add region filtering if needed
  let selectedRegion = $state('');
  const regions = ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania']; // Example regions
  
  // Generate unique IDs for accessibility
  const regionLabelId = 'region-filter-' + Math.random().toString(36).substr(2, 9);
  const countrySelectId = 'country-select-' + Math.random().toString(36).substr(2, 9);
</script>

<div class="space-y-6 p-6">
  <!-- Region Filter (Optional) - FIXED: Use a div with role instead of label -->
  <div>
    <div id={regionLabelId} class="block text-sm font-medium text-gray-700 mb-2">
      Filter by Region
    </div>
    <div 
      role="radiogroup" 
      aria-labelledby={regionLabelId}
      class="flex flex-wrap gap-2"
    >
      <button
        type="button"
        role="radio"
        aria-checked={!selectedRegion}
        class={`px-3 py-1 text-sm border rounded-full ${!selectedRegion ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
        onclick={() => selectedRegion = ''}
      >
        All Regions
      </button>
      {#each regions as region}
        <button
          type="button"
          role="radio"
          aria-checked={selectedRegion === region}
          class={`px-3 py-1 text-sm border rounded-full ${selectedRegion === region ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          onclick={() => selectedRegion = region}
        >
          {region}
        </button>
      {/each}
    </div>
  </div>

  <!-- Country Selection - FIXED: Proper label association -->
  <div>
    <label for={countrySelectId} class="block text-sm font-medium text-gray-700 mb-2">
      Select Country
    </label>
    <select 
      id={countrySelectId}
      bind:value={selectedCountry}
      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Choose a country</option>
      {#each countries.filter(country => {
        // Filter by region if selected
        // You'd need region data for each country
        if (!selectedRegion) return true;
        // Add region filtering logic here
        return true;
      }) as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>

  <!-- Selected Location Display -->
  {#if selectedCountry}
    <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <span class="font-semibold text-blue-800">Selected:</span>
          <span class="text-blue-700 ml-2">{selectedCountry}</span>
        </div>
      </div>
    </div>
  {/if}
</div>