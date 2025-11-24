<!-- src/routes/filters/components/SeasonFilter.svelte -->
<script lang="ts">
  export let selectedSeason = '';
  
  const seasons = [
    { value: 'any', label: '🌍 Any Time', description: 'No season preference' },
    { value: 'peak', label: '🏄 Peak Season', description: 'Best weather, most crowded' },
    { value: 'shoulder', label: '🌤️ Shoulder Season', description: 'Good balance of weather and crowds' },
    { value: 'offpeak', label: '💸 Off-Peak', description: 'Fewer crowds, better prices' },
    { value: 'summer', label: '☀️ Summer (Jun-Aug)', description: 'Northern hemisphere summer' },
    { value: 'winter', label: '⛄ Winter (Dec-Feb)', description: 'Northern hemisphere winter' }
  ];
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">🗓️ When are you traveling?</h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {#each seasons as season}
      <button
        class="p-3 text-left rounded-lg border-2 transition-all duration-200 bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-900 {selectedSeason === season.value ? 'border-blue-500 bg-blue-50' : ''}"
        on:click={() => selectedSeason = season.value}
      >
        <div class="font-medium text-sm">{season.label}</div>
        <div class="text-xs text-gray-600 mt-1">{season.description}</div>
      </button>
    {/each}
  </div>
</div>