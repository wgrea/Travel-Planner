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

<div class="season-filter">
  <h3 class="text-lg font-semibold mb-3 text-white">🗓️ When are you traveling?</h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {#each seasons as season}
      <button
        class:active={selectedSeason === season.value}
        on:click={() => selectedSeason = season.value}
        class="p-3 text-left rounded-lg border-2 transition-all duration-200 text-white bg-white/10 border-white/20 hover:border-cyan-400/50 hover:bg-cyan-500/20"
        class:active="border-cyan-400 bg-cyan-500/30"
      >
        <div class="font-medium">{season.label}</div>
        <div class="text-sm opacity-80">{season.description}</div>
      </button>
    {/each}
  </div>
</div>

<style>
  .active {
    border-color: rgb(34 211 238) !important;
    background-color: rgba(34, 211, 238, 0.3) !important;
  }
</style>