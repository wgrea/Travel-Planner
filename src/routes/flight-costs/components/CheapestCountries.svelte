<!-- src/routes/flight-costs/components/CheapestCountries.svelte -->
<script lang="ts">
  import type { FlightPattern } from '$lib/data/flightPatternData';
  import type { FlightInfo } from '$lib/types/flight';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import { routeCosts } from '$lib/data/routeCosts';

  interface CheapestDestination {
    country: string;
    economy: number;
    business: number;
    season?: string;
  }

  let { 
    filteredData, 
    selectedCountry,
    originCountry, 
    selectedCurrency = 'USD',
    flightCostData 
  } = $props<{ 
    filteredData: FlightPattern[], 
    selectedCountry: string,
    originCountry: string,
    selectedCurrency?: string,
    flightCostData?: FlightInfo 
  }>();
  
  // Use reactive variables with $state
  let cheapestDestinations = $state<CheapestDestination[]>([]);
  let selectedRank = $state<number | null>(null);
  
  // Update when dependencies change
  $effect(() => {
    if (!routeCosts[originCountry]) {
      cheapestDestinations = [];
      selectedRank = null;
      return;
    }
    
    const destinations = Object.entries(routeCosts[originCountry])
      .map(([country, data]) => ({
        country,
        economy: data.economy,
        business: data.business,
        season: data.season
      }))
      .sort((a, b) => a.economy - b.economy)
      .slice(0, 5);
    
    cheapestDestinations = destinations;
    
    // Update selected rank
    if (selectedCountry && destinations.length > 0) {
      const index = destinations.findIndex(d => d.country === selectedCountry);
      selectedRank = index >= 0 ? index + 1 : null;
    } else {
      selectedRank = null;
    }
  });
  
  const hasPatternData = $derived(filteredData.length > 0 && filteredData[0]);
</script>

<!-- Template remains the same as before -->
<div class="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h2 class="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4 flex items-center gap-3">
    <span class="text-amber-500 text-2xl">💰</span> 
    Cheapest Destinations from {originCountry}
  </h2>
  
  {#if cheapestDestinations.length > 0}
    <div class="space-y-6">
      <!-- Top 5 Cheapest -->
      <div class="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-sm">
        <h3 class="font-semibold text-blue-900 mb-4 text-lg flex items-center gap-2">
          <span class="text-blue-600">🏆</span>
          Top 5 Cheapest from {originCountry}
        </h3>
        <div class="space-y-3">
          {#each cheapestDestinations as dest, index (dest.country)}
            <div class="flex justify-between items-center p-3 bg-white/80 rounded-lg border border-blue-200/50 hover:bg-white transition-colors duration-200 {selectedCountry === dest.country ? 'ring-2 ring-blue-400' : ''}">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                <div>
                  <p class="font-medium text-gray-800">
                    {dest.country} 
                    {#if selectedCountry === dest.country}
                      <span class="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Selected</span>
                    {/if}
                  </p>
                  {#if dest.season}
                    <p class="text-xs text-gray-500">{dest.season}</p>
                  {/if}
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-green-700">
                  {formatCurrency(
                    convertCurrency(dest.economy, 'USD', selectedCurrency),
                    selectedCurrency
                  )}
                </div>
                <div class="text-xs text-gray-500">
                  {formatCurrency(
                    convertCurrency(dest.business, 'USD', selectedCurrency),
                    selectedCurrency
                  )} business
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Current Selection Highlight -->
      {#if flightCostData}
        <div class="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 shadow-sm">
          <h3 class="font-semibold text-green-900 mb-4 text-lg flex items-center gap-2">
            <span class="text-green-600">🎯</span>
            Your Selection: {selectedCountry}
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/80 p-4 rounded-lg border border-green-200/50 text-center">
              <p class="text-sm text-gray-600 mb-1">Economy</p>
              <p class="text-2xl font-bold text-green-700">
                {formatCurrency(
                  convertCurrency(flightCostData.economy, 'USD', selectedCurrency),
                  selectedCurrency
                )}
              </p>
            </div>
            <div class="bg-white/80 p-4 rounded-lg border border-green-200/50 text-center">
              <p class="text-sm text-gray-600 mb-1">Business</p>
              <p class="text-2xl font-bold text-purple-700">
                {formatCurrency(
                  convertCurrency(flightCostData.business, 'USD', selectedCurrency),
                  selectedCurrency
                )}
              </p>
            </div>
          </div>
          {#if selectedRank}
            <div class="mt-4 text-center text-sm text-gray-600">
              Ranked #{selectedRank} of {cheapestDestinations.length} destinations
            </div>
          {/if}
        </div>
      {/if}

      <!-- Cheapest Months Info -->
      {#if filteredData[0]?.cheapestMonths && filteredData[0].cheapestMonths.length > 0}
        <div class="p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-100 border border-indigo-200 shadow-sm">
          <h4 class="font-semibold text-indigo-900 mb-4 text-lg flex items-center gap-2">
            <span class="text-indigo-600">📅</span>
            Best Time to Visit {selectedCountry}
          </h4>
          
          <div class="space-y-4">
            <!-- Cheapest Months -->
            <div>
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                <p class="text-sm font-medium text-indigo-800">Cheapest Months</p>
              </div>
              <div class="flex flex-wrap gap-2">
                {#each filteredData[0].cheapestMonths as month}
                  <span class="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm rounded-full">
                    {month}
                  </span>
                {/each}
              </div>
              <p class="text-xs text-gray-600 mt-2">
                Save 20-40% on flights during these months
              </p>
            </div>
            
            <!-- Sweet Spot (if available) -->
            {#if filteredData[0]?.sweetSpot && filteredData[0].sweetSpot.length > 0}
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  <p class="text-sm font-medium text-emerald-800">Sweet Spot Months</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  {#each filteredData[0].sweetSpot as month}
                    <span class="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm rounded-full">
                      {month}
                    </span>
                  {/each}
                </div>
                <p class="text-xs text-gray-600 mt-2">
                  Best balance of price, weather, and crowds
                </p>
              </div>
            {/if}
          </div>
        </div>
      {/if}
      
      <!-- Seasonal Tips -->
      {#if hasPatternData && filteredData[0].planningTips && filteredData[0].planningTips.length > 0}
        <div class="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-100 border border-amber-200 shadow-sm">
          <h4 class="font-semibold text-amber-900 mb-4 text-lg flex items-center gap-2">
            <span class="text-amber-600">💡</span>
            Money-Saving Tips for {selectedCountry}
          </h4>
          <ul class="space-y-2">
            {#each filteredData[0].planningTips.slice(0, 3) as tip}
              <li class="flex items-start gap-2 text-sm text-gray-800">
                <span class="text-amber-500 mt-1">•</span>
                <span>{tip}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  {:else}
    <div class="text-center py-12">
      <div class="text-4xl mb-4">🌍</div>
      <p class="text-gray-600 font-medium mb-2 text-lg">No comparison data available</p>
      <p class="text-sm text-gray-500 max-w-md mx-auto">
        Flight cost data from {originCountry} is currently being updated.
      </p>
    </div>
  {/if}
</div>