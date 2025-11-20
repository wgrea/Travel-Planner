<!-- src/routes/filters/components/RecommendedDestinations.svelte -->
<script lang="ts">
  const preferredDestinations = {
    scuba: ['Egypt (Red Sea)', 'Thailand', 'Vietnam', 'Mexico (Cozumel)'],
    spa: ['Bali, Indonesia', 'Budapest, Hungary', 'Turkey'],
    dance: ['Colombia', 'Georgia', 'Portugal']
  };
</script>

<div class="mt-8 bg-white/15 backdrop-blur-xl rounded-[28px] p-6 border-2 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-white">
  <h3 class="text-2xl font-bold mb-4 flex items-center gap-2">
    <span class="text-2xl">🌟</span> Recommended Destinations
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each preferredDestinations.scuba.slice(0, 3) as destination}
      <div class="p-4 rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition-colors duration-200">
        <div class="text-lg font-semibold mb-2">🤿 {destination}</div>
        <div class="text-sm text-white/70">Budget: $800-1500 • Visa: 30-90 days</div>
      </div>
    {/each}
  </div>
</div>