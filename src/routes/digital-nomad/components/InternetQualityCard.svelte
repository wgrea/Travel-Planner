<!-- src/routes/digital-nomad/components/InternetQualtyCard.svelte -->
<script lang="ts">
  import { nomadData } from '$lib/data/nomadData';
  import { getCityDetails } from '$lib/data/cityData';
  
  export let selectedCountry: string;
  export let selectedCity: string; // ADD THIS
  
  $: countryData = nomadData.find(item => item.country === selectedCountry);
  $: cityData = selectedCountry && selectedCity ? getCityDetails(selectedCity, selectedCountry) : null;
  $: internetData = countryData?.internet; // FIXED: Use country data for now since city data doesn't have internet
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">🌐 Internet Quality {#if selectedCity}in {selectedCity}{/if}</h3>
  
  {#if internetData}
    <div class="space-y-4">
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span class="text-gray-700">Average Speed</span>
        <span class="text-blue-600 font-semibold">{internetData.speed} Mbps</span>
      </div>
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span class="text-gray-700">Reliability</span>
        <span class="text-blue-600 font-semibold">{internetData.reliability}/10</span>
      </div>
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span class="text-gray-700">Coworking Spaces</span>
        <span class="text-blue-600 font-semibold">{internetData.coworkingSpaces}+ spaces</span>
      </div>
    </div>
  {:else}
    <div class="text-center py-4 text-gray-500">
      No internet data available for {selectedCountry}
    </div>
  {/if}
</div>