<!-- src/routes/travel-essentials/components/Header.svelte -->
<script lang="ts">
  // Remove the import since we don't need it anymore
</script>

<div class="flex items-center justify-between mb-8">
  <button
    on:click
    class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
  >
    <span class="text-xl group-hover:-translate-x-1 transition-transform">←</span>
    <span class="font-medium">Back to Home</span>
  </button>
  
  <div class="text-center flex-1">
    <div class="text-4xl mb-2">🎒</div>
    <h1 class="text-4xl font-light text-gray-900">Travel Essentials</h1>
    <p class="text-gray-600 mt-2">Never forget important items again</p>
  </div>
  
  <div class="w-24"></div> <!-- Spacer for alignment -->
</div>