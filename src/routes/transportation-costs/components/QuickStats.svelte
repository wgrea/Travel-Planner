<!-- src/routes/transportation-costs/components/QuickStats.svelte -->
<script lang="ts">
  import { transportationData } from '$lib/data/transportationData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { TransportationCosts, CityTransportation } from '$lib/types/transportation';
  
  // Use $props() instead of export let
  let {
    currency = 'USD'
  } = $props();

  // Reactive state variables
  let avgMonthlyTransport = $state(0);
  let avgTaxi5km = $state(0);
  let totalCities = $state(0);

  // Calculate global averages in an effect
  $effect(() => {
    if (transportationData.length === 0) return;
    
    let totalMonthly = 0;
    let totalTaxi = 0;
    let count = 0;
    
    // Loop through all countries and cities
    transportationData.forEach((country: TransportationCosts) => {
      Object.values(country.cities).forEach((city: CityTransportation) => {
        // Get monthly cost (use tourist pattern as reference)
        if (city.usagePatterns?.tourist) {
          totalMonthly += city.usagePatterns.tourist;
        }
        
        // Get taxi cost (5km example)
        if (city.taxis?.startFare && city.taxis?.costPerKm) {
          // Estimate 5km taxi ride: startFare + (costPerKm * 5)
          const taxi5km = city.taxis.startFare + (city.taxis.costPerKm * 5);
          totalTaxi += taxi5km;
        }
        
        count++;
      });
    });
    
    if (count === 0) return;
    
    // Update reactive state
    avgMonthlyTransport = Math.round(totalMonthly / count);
    avgTaxi5km = Math.round(totalTaxi / count);
    totalCities = count;
  });

  function formatCost(amount: number): string {
    if (!amount) return 'N/A';
    return formatCurrency(convertCurrency(amount, 'USD', currency), currency);
  }

  // Debug: check if we have data
  $effect(() => {
    console.log('QuickStats calculated:', { avgMonthlyTransport, avgTaxi5km, totalCities });
  });
</script>

<div class="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 p-8">
  <h3 class="text-lg font-medium text-gray-900 mb-4">Global Averages</h3>
  
  {#if totalCities > 0}
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <span class="text-gray-600">Avg. Monthly Transport</span>
        <span class="font-semibold text-gray-900">
          {formatCost(avgMonthlyTransport)}
        </span>
      </div>
      
      <div class="flex items-center justify-between">
        <span class="text-gray-600">Avg. 5km Taxi Ride</span>
        <span class="font-semibold text-gray-900">
          {formatCost(avgTaxi5km)}
        </span>
      </div>
      
      <div class="flex items-center justify-between">
        <span class="text-gray-600">Cities in Database</span>
        <span class="font-semibold text-gray-900">
          {totalCities}
        </span>
      </div>
    </div>
  {:else}
    <div class="text-center py-4 text-gray-500">
      No data available
    </div>
  {/if}
</div>