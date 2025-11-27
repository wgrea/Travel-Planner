<!-- src/routes/digital-nomad/components/VisaInfoCard.svelte -->
<!-- src/routes/digital-nomad/components/VisaInfoCard.svelte -->
<script lang="ts">
  import { minimalData } from '$lib/data/minimalData';
  
  export let selectedCountry: string;
  
  $: countryData = minimalData.countries[selectedCountry?.toLowerCase()];
  $: visaDifficulty = countryData?.visa?.difficulty;
  
  function getVisaColor(difficulty: string): string {
    switch(difficulty) {
      case 'very-easy': return 'text-green-600';
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-600';
      case 'hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  }
  
  function getVisaLabel(difficulty: string): string {
    switch(difficulty) {
      case 'very-easy': return 'Very Easy';
      case 'easy': return 'Easy';
      case 'medium': return 'Medium';
      case 'hard': return 'Hard';
      default: return 'Unknown';
    }
  }
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">📝 Visa Information</h3>
  
  {#if visaDifficulty}
    <div class="space-y-3">
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span class="text-gray-700">Visa Difficulty</span>
        <span class="font-semibold {getVisaColor(visaDifficulty)}">
          {getVisaLabel(visaDifficulty)}
        </span>
      </div>
      
      <div class="p-3 bg-gray-50 rounded-lg">
        <div class="text-gray-700 font-medium mb-2">Visa Details:</div>
        <p class="text-sm text-gray-600">
          Check the <a href="/visa" class="text-blue-600 hover:underline">Visa Requirements page</a> 
          for detailed information based on your passport.
        </p>
      </div>
    </div>
  {:else}
    <div class="text-center py-4 text-gray-500">
      No visa data available for {selectedCountry}
    </div>
  {/if}
</div>