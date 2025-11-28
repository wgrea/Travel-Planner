<!-- src/routes/filters/components/RecommendedDestinations.svelte -->
<script lang="ts">
  const preferredDestinations = {
    scuba: ['Egypt (Red Sea)', 'Thailand', 'Vietnam', 'Mexico (Cozumel)'],
    spa: ['Bali, Indonesia', 'Budapest, Hungary', 'Turkey'],
    dance: ['Colombia', 'Georgia', 'Portugal']
  };
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
    <span class="text-xl">🌟</span> Recommended Destinations
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each preferredDestinations.scuba.slice(0, 3) as destination}
      <div class="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-blue-50 transition-colors duration-200">
        <div class="text-md font-semibold text-gray-900 mb-2">🤿 {destination}</div>
        <div class="text-sm text-gray-600">Budget: $800-1500 • Visa: 30-90 days</div>
      </div>
    {/each}
  </div>
</div>
