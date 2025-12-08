<!-- src/routes/visa/components/VisaMatrix.svelte -->
<script lang="ts">
  let { destinations, onDestinationSelect } = $props<{
    destinations: any[];
    onDestinationSelect: (country: string) => void;
  }>();
</script>

<div class="space-y-4">
  <!-- Results Summary -->
  <div class="text-center p-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl border border-blue-100">
    <div class="text-4xl mb-3">🌍</div>
    <h3 class="text-lg font-semibold text-gray-700 mb-2">
      {destinations.length} Destinations Found
    </h3>
    <p class="text-gray-600">
      Filter results based on your preferences
    </p>
  </div>
  
  <!-- Destinations Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each destinations as dest}
      <button
        type="button"
        onclick={() => onDestinationSelect(dest.country)}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onDestinationSelect(dest.country);
          }
        }}
        class="w-full border rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition cursor-pointer text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        aria-label={`View visa details for ${dest.country}`}
      >
        <div class="flex items-start justify-between mb-3">
          <div>
            <h4 class="font-semibold text-gray-900 text-sm">{dest.country}</h4>
            <div class="flex items-center gap-1 mt-1">
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                {dest.category}
              </span>
              {#if dest.nomadFriendly}
                <span class="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                  💻
                </span>
              {/if}
            </div>
          </div>
          <span class="text-2xl">{dest.flag || '🌐'}</span>
        </div>
        
        <div class="space-y-2 text-xs">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Processing:</span>
            <span class="font-medium">{dest.processingTime}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Cost:</span>
            <span class="font-medium">{dest.cost}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Visa-Free:</span>
            <span class="font-medium">{dest.visaInfo?.freeLength || 'N/A'}</span>
          </div>
        </div>
      </button>
    {:else}
      <div class="col-span-full text-center py-12">
        <div class="text-4xl mb-4">🔍</div>
        <h3 class="text-lg font-semibold text-gray-700 mb-2">
          No destinations found
        </h3>
        <p class="text-gray-600">Try adjusting your filters</p>
      </div>
    {/each}
  </div>
</div>