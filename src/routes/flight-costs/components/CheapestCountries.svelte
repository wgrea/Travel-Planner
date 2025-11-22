<!-- src/routes/flight-costs/components/CheapestCountries.svelte -->
<script lang="ts">
    import type { FlightData } from '$lib/data/flyData';
  let { filteredData } = $props();
</script>

<div class="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg text-gray-900">
  <h2 class="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-300 pb-2 flex items-center gap-2">
    <span class="text-amber-500">💰</span> Best Times for {filteredData[0]?.country || 'Selected Country'}
  </h2>
  
  {#if filteredData.length > 0}
    <div class="space-y-4">
      <!-- Cities Information -->
      {#if filteredData[0].cities && filteredData[0].cities.length > 0}
        <div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
          <h3 class="font-semibold text-blue-900 mb-2">🏙️ Popular Destinations:</h3>
          <div class="flex flex-wrap gap-2">
            {#each filteredData[0].cities as city}
              <span class="px-3 py-1 bg-white border border-blue-300 rounded-lg text-blue-800 text-sm font-medium">
                {city}
              </span>
            {/each}
          </div>
        </div>
      {/if}
      
      <div class="p-4 rounded-xl bg-green-50 border border-green-200">
        <h3 class="font-semibold text-green-900 mb-1">💰 Cheapest Months:</h3>
        <p class="text-gray-800 font-medium">{filteredData[0]?.cheapestMonths?.join(', ') || ''}</p>
        <p class="text-sm text-green-700 mt-1">Best for budget travelers</p>
      </div>
      
      <div class="p-4 rounded-xl bg-purple-50 border border-purple-200">
        <h3 class="font-semibold text-purple-900 mb-1">⭐ Sweet Spot Months:</h3>
        <p class="text-gray-800 font-medium">{filteredData[0]?.sweetSpot?.join(', ') || ''}</p>
        <p class="text-sm text-purple-700 mt-1">Best balance of price and weather</p>
      </div>
      
      <div class="p-4 rounded-xl bg-red-50 border border-red-200">
        <h3 class="font-semibold text-red-900 mb-1">💸 Avoid These Months:</h3>
        <p class="text-gray-800 font-medium">{filteredData[0]?.expensiveMonths?.join(', ') || ''}</p>
        <p class="text-sm text-red-700 mt-1">Highest prices and crowds</p>
      </div>
      
      {#if filteredData[0].alternativeRoutes}
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <h4 class="font-semibold text-amber-900 mb-1">💡 Cheaper Route Tip:</h4>
          <p class="text-gray-800 font-medium">{filteredData[0].alternativeRoutes}</p>
          <p class="text-sm text-amber-700 mt-1">Consider nearby airports or connecting flights</p>
        </div>
      {/if}

      {#if filteredData[0].planningTips && filteredData[0].planningTips.length > 0}
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
          <h4 class="font-semibold text-emerald-900 mb-2">📝 Planning Tips:</h4>
          <ul class="text-gray-800 space-y-2">
            {#each filteredData[0].planningTips as tip}
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 mt-1">•</span>
                <span class="font-medium">{tip}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  {:else}
    <p class="text-gray-600 text-center py-8 font-medium">Select a country to see pricing data</p>
  {/if}
</div>