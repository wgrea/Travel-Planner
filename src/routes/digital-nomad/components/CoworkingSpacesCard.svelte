<!-- src/routes/digital-nomad/components/CoworkingSpacesCard.svelte -->
<script lang="ts">
  import { nomadData } from '$lib/data/nomadData';
  
  export let selectedCountry: string;
  export let selectedCity: string; // ADD THIS
  
  $: countryData = nomadData.find(item => item.country === selectedCountry);
  $: costsData = countryData?.costs;
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">💼 Costs & Workspaces {#if selectedCity}in {selectedCity}{/if}</h3>
  
  {#if costsData}
    <div class="space-y-3">
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div>
          <div class="text-gray-900 font-medium">Coworking Space</div>
          <div class="text-gray-600 text-sm">Monthly membership</div>
        </div>
        <div class="text-blue-600 font-semibold">${costsData.coworkingMonthly}</div>
      </div>
      
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div>
          <div class="text-gray-900 font-medium">Mobile Data</div>
          <div class="text-gray-600 text-sm">Monthly SIM card</div>
        </div>
        <div class="text-blue-600 font-semibold">${costsData.simCardMonthly}</div>
      </div>
      
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div>
          <div class="text-gray-900 font-medium">Coffee Shop Work</div>
          <div class="text-gray-600 text-sm">Average daily spend</div>
        </div>
        <div class="text-blue-600 font-semibold">${costsData.coffeeShopWork}</div>
      </div>
    </div>
  {:else}
    <div class="text-center py-4 text-gray-500">
      No cost data available for {selectedCountry}
    </div>
  {/if}
</div>