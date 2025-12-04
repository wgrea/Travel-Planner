<!-- src/routes/flight-costs/components/CitiesTipsSection.svelte -->
<script lang="ts">
  interface CitiesTipsData {
    cities?: string[];
    planningTips?: string[];
  }
  
  let { 
    data = {} 
  } = $props<{
    data?: CitiesTipsData;
  }>();
</script>

<div class="card">
  <h3 class="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
    <span class="text-blue-500">🏙️</span> Popular Cities
  </h3>
  {#if data.cities && data.cities.length > 0}
    <div class="flex flex-wrap gap-2 mb-6">
      {#each data.cities as city}
        <span class="city-tag">{city}</span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500 text-sm mb-6">No city data available</p>
  {/if}
  
  {#if data.planningTips && data.planningTips.length > 0}
    <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
      <span class="text-green-500">📝</span> Planning Tips
    </h4>
    <ul class="space-y-2">
      {#each data.planningTips as tip}
        <li class="tip-item">{tip}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .card {
    @apply bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300;
  }
  
  .city-tag {
    @apply px-3 py-1 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 text-sm font-medium;
  }
  
  .tip-item {
    @apply flex items-start gap-2 text-gray-700;
  }
  
  .tip-item::before {
    content: "•";
    @apply text-green-500 mt-1;
  }
</style>