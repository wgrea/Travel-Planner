<!-- src/routes/flight-costs/components/FlightCostSection.svelte -->
<script lang="ts">
  import type { FlightInfo } from '$lib/types/flight';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  
  let { 
    originCountry = '',
    selectedCountry = '',
    flightCostData = null,
    currentCurrency = 'USD'
  } = $props<{
    originCountry?: string;
    selectedCountry?: string;
    flightCostData?: FlightInfo | null;
    currentCurrency?: string;
  }>();
</script>

{#if flightCostData}
<div class="mb-12">
  <div class="card">
    <h3 class="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
      <span class="text-purple-500">✈️</span> Flight Cost from Origin
    </h3>
    
    <div class="space-y-6">
      <!-- Flight details header -->
      <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
        <h4 class="font-bold text-lg mb-2 text-gray-800">
          Prices from {originCountry} to {selectedCountry}
        </h4>
        {#if flightCostData.season}
          <p class="text-gray-600 text-sm mb-3">
            <span class="font-medium">From {originCountry} ({flightCostData.season})</span>
          </p>
        {/if}
        {#if flightCostData.bestTimeToBook}
          <p class="text-gray-600 text-sm">
            <span class="font-medium">📅 {flightCostData.bestTimeToBook}</span>
          </p>
        {/if}
      </div>
      
      <!-- Price cards -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold text-blue-800">Economy</span>
            <span class="text-2xl font-bold text-blue-900">
              {formatCurrency(
                convertCurrency(flightCostData.economy, 'USD', currentCurrency),
                currentCurrency
              )}
            </span>
          </div>
          <p class="text-blue-700 text-sm">Standard seating, checked bag extra</p>
        </div>
        
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold text-purple-800">Business</span>
            <span class="text-2xl font-bold text-purple-900">
              {formatCurrency(
                convertCurrency(flightCostData.business, 'USD', currentCurrency),
                currentCurrency
              )}
            </span>
          </div>
          <p class="text-purple-700 text-sm">Premium seating, included amenities</p>
        </div>
      </div>
      
      <!-- Additional flight info -->
      {#if flightCostData.airports || flightCostData.airlines}
      <div class="grid md:grid-cols-2 gap-6 mt-6">
        {#if flightCostData.airports && flightCostData.airports.length > 0}
        <div>
          <h5 class="font-semibold mb-2 text-gray-800">🏢 Main Airports</h5>
          <div class="flex flex-wrap gap-2">
            {#each flightCostData.airports as airport}
              <span class="px-3 py-1 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 text-sm">
                {airport}
              </span>
            {/each}
          </div>
        </div>
        {/if}
        
        {#if flightCostData.airlines && flightCostData.airlines.length > 0}
        <div>
          <h5 class="font-semibold mb-2 text-gray-800">✈️ Airlines</h5>
          <div class="flex flex-wrap gap-2">
            {#each flightCostData.airlines as airline}
              <span class="px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm">
                {airline}
              </span>
            {/each}
          </div>
        </div>
        {/if}
      </div>
      {/if}
    </div>
  </div>
</div>
{:else if originCountry && selectedCountry}
<div class="mb-12">
  <div class="card bg-yellow-50 border-yellow-200">
    <div class="flex items-center gap-3 text-yellow-800">
      <span class="text-xl">⚠️</span>
      <div>
        <p class="font-semibold">Flight cost data not available</p>
        <p class="text-sm text-yellow-700">We don't have flight pricing data from {originCountry} to {selectedCountry} yet.</p>
      </div>
    </div>
  </div>
</div>
{/if}

<style>
  .card {
    @apply bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300;
  }
</style>