<!-- src/routes/digital-nomad/components/CommunitySafetyCard.svelte -->
<script lang="ts">
  import { nomadData } from '$lib/data/nomadData';
  import type { NomadData } from '$lib/data/nomadData';
  
  export let selectedCountry: string;
  export let selectedCity: string;
  export let countryData: NomadData | undefined; // Remove cityData prop
  
  $: communityData = countryData?.community;  
  $: countryData = nomadData.find(item => item.country === selectedCountry);

  
  function getRatingLabel(rating: number): string {
    if (rating >= 8) return 'Excellent';
    if (rating >= 6) return 'Good';
    if (rating >= 4) return 'Fair';
    return 'Poor';
  }
  
  function getRatingColor(rating: number): string {
    if (rating >= 8) return 'text-green-600';
    if (rating >= 6) return 'text-blue-600';
    if (rating >= 4) return 'text-yellow-600';
    return 'text-red-600';
  }
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">👥 Community & Safety {#if selectedCity}in {selectedCity}{/if}</h3>
  
  {#if communityData}
    <div class="space-y-3">
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span class="text-gray-700">Expat Community</span>
        <div class="text-right">
          <div class="font-semibold {getRatingColor(communityData.expatSize)}">
            {getRatingLabel(communityData.expatSize)}
          </div>
          <div class="text-xs text-gray-500">{communityData.expatSize}/10</div>
        </div>
      </div>
      
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span class="text-gray-700">English Level</span>
        <div class="text-right">
          <div class="font-semibold {getRatingColor(communityData.englishLevel)}">
            {getRatingLabel(communityData.englishLevel)}
          </div>
          <div class="text-xs text-gray-500">{communityData.englishLevel}/10</div>
        </div>
      </div>
      
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span class="text-gray-700">Safety Rating</span>
        <div class="text-right">
          <div class="font-semibold {getRatingColor(communityData.safety)}">
            {getRatingLabel(communityData.safety)}
          </div>
          <div class="text-xs text-gray-500">{communityData.safety}/10</div>
        </div>
      </div>
    </div>
  {:else}
    <div class="text-center py-4 text-gray-500">
      No community data available for {selectedCountry}
    </div>
  {/if}
</div>
