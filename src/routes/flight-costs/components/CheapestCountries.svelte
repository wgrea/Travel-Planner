<!-- src/routes/flight-costs/components/CheapestCountries.svelte -->
<script lang="ts">
  import type { FlightPattern } from '$lib/data/flightPatternData';
  import { routeCosts } from '$lib/data/routeCosts';
  
  let { filteredData, selectedCountry, originCountry } = $props<{ 
    filteredData: FlightPattern[], 
    selectedCountry: string,
    originCountry: string 
  }>();
  
  // FIX: Use let instead of const for originPricing
  let originPricing: any = $state(null);
  
  // Update pricing when origin or destination changes
  $effect(() => {
    if (routeCosts && originCountry && selectedCountry) {
      const originData = (routeCosts as any)[originCountry];
      if (originData && originData[selectedCountry]) {
        originPricing = originData[selectedCountry];
      } else {
        originPricing = null;
      }
    }
  });
  
  const hasRouteCosts = $derived(!!originPricing);
  const hasPatternData = $derived(filteredData.length > 0 && filteredData[0]);
</script>

<!-- The rest of the template remains the same -->
<div class="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h2 class="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4 flex items-center gap-3">
    <span class="text-amber-500 text-2xl">💰</span> 
    Flight Cost from Origin
  </h2>
  
  {#if hasRouteCosts}
    <div class="space-y-6">
      <!-- Single Origin Pricing -->
      <div class="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-sm">
        <h3 class="font-semibold text-blue-900 mb-4 text-lg flex items-center gap-2">
          <span class="text-blue-600">✈️</span>
          Prices from {originCountry} to {selectedCountry}
        </h3>
        <div class="grid gap-3">
          <div class="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-blue-200/50 backdrop-blur-sm hover:bg-white transition-colors duration-200">
            <div class="flex-1">
              <span class="font-medium text-gray-800 text-sm">From {originCountry}</span>
              {#if originPricing.season}
                <span class="text-xs text-gray-500 ml-2 font-normal">({originPricing.season})</span>
              {/if}
              {#if originPricing.bestTimeToBook}
                <p class="text-xs text-gray-600 mt-1">📅 {originPricing.bestTimeToBook}</p>
              {/if}
            </div>
            <div class="text-right min-w-[120px]">
              <div class="font-bold text-green-700 text-sm">${originPricing.economy} economy</div>
              {#if originPricing.business}
                <div class="text-xs text-gray-500 mt-1">${originPricing.business} business</div>
              {/if}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Seasonal Tips from flightPatternData -->
      {#if hasPatternData}
        <div class="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 shadow-sm">
          <h3 class="font-semibold text-green-900 mb-4 text-lg flex items-center gap-2">
            <span class="text-green-600">📅</span>
            Best Booking Times
          </h3>
          <div class="space-y-4">
            {#if filteredData[0].cheapestMonths && filteredData[0].cheapestMonths.length > 0}
              <div class="bg-white/80 p-3 rounded-lg border border-green-200/50">
                <p class="font-medium text-gray-800 text-sm mb-1">💰 Cheapest Months</p>
                <p class="text-green-700 font-semibold">{filteredData[0].cheapestMonths.join(', ')}</p>
                <p class="text-xs text-green-600 mt-1">Best for budget travelers</p>
              </div>
            {/if}
            
            {#if filteredData[0].sweetSpot}
              <div class="bg-white/80 p-3 rounded-lg border border-purple-200/50">
                <p class="font-medium text-gray-800 text-sm mb-1">⭐ Sweet Spot</p>
                <p class="text-purple-700 font-semibold">{filteredData[0].sweetSpot}</p>
                <p class="text-xs text-purple-600 mt-1">Best balance of price and weather</p>
              </div>
            {/if}
          </div>
        </div>
      {/if}
      
      <!-- Planning Tips -->
      {#if hasPatternData && filteredData[0].planningTips && filteredData[0].planningTips.length > 0}
        <div class="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-100 border border-amber-200 shadow-sm">
          <h4 class="font-semibold text-amber-900 mb-4 text-lg flex items-center gap-2">
            <span class="text-amber-600">💡</span>
            Money-Saving Tips
          </h4>
          <ul class="space-y-3">
            {#each filteredData[0].planningTips as tip}
              <li class="flex items-start gap-3 p-3 bg-white/80 rounded-lg border border-amber-200/50">
                <span class="text-amber-500 mt-0.5 text-lg">•</span>
                <span class="text-gray-800 text-sm leading-relaxed">{tip}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  {:else}
    <div class="text-center py-12">
      <div class="text-4xl mb-4">🌍</div>
      <p class="text-gray-600 font-medium mb-2 text-lg">No flight data available</p>
      <p class="text-sm text-gray-500 max-w-md mx-auto">
        Flight cost data from {originCountry} to {selectedCountry} is currently being updated.
      </p>
    </div>
  {/if}
</div>