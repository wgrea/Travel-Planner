<!-- src/routes/transportation-costs/components/QuickStats.svelte -->
<script lang="ts">
  import { transportationData } from '$lib/data/transportationData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { TransportationCosts, CityTransportation } from '$lib/types/transportation';
  
  // ✅ FIX: Use prop declaration with $props()
  let { currency = 'USD' } = $props();
  
  // Reactive state
  let avgMonthlyTransport = $state(0);
  let avgTaxi5km = $state(0);
  let totalCities = $state(0);
  
  // ✅ FIX: Remove the store subscription - use prop only
  // This effect will run whenever the 'currency' prop changes
  $effect(() => {
    console.log('🔄 QuickStats recalculating for currency:', currency);
    
    if (transportationData.length === 0) {
      avgMonthlyTransport = 0;
      avgTaxi5km = 0;
      totalCities = 0;
      return;
    }
    
    let totalMonthlyUSD = 0;
    let totalTaxiUSD = 0;
    let count = 0;
    
    // Loop through all countries and cities
    transportationData.forEach((country: TransportationCosts) => {
      const countryCurrency = country.currency;
      
      Object.values(country.cities).forEach((city: CityTransportation) => {
        // Convert monthly cost to USD for averaging
        const monthlyCost = city.usagePatterns?.tourist || 0;
        const monthlyUSD = convertCurrency(monthlyCost, countryCurrency, 'USD');
        totalMonthlyUSD += monthlyUSD;
        
        // Convert taxi cost to USD
        if (city.taxis?.startFare && city.taxis?.costPerKm) {
          const taxi5km = city.taxis.startFare + (city.taxis.costPerKm * 5);
          const taxiUSD = convertCurrency(taxi5km, countryCurrency, 'USD');
          totalTaxiUSD += taxiUSD;
        }
        
        count++;
      });
    });
    
    if (count === 0) {
      avgMonthlyTransport = 0;
      avgTaxi5km = 0;
      totalCities = 0;
      return;
    }
    
    // Store USD averages (we'll convert in formatCost)
    avgMonthlyTransport = Math.round(totalMonthlyUSD / count);
    avgTaxi5km = Math.round(totalTaxiUSD / count);
    totalCities = count;
    
    console.log('📊 QuickStats calculated:', { 
      avgMonthlyTransport, 
      avgTaxi5km, 
      totalCities,
      currency 
    });
  });

  // This function will automatically re-run when 'currency' prop changes
  function formatCost(amountUSD: number): string {
    if (!amountUSD) return 'N/A';
    // Convert from USD to target currency
    return formatCurrency(convertCurrency(amountUSD, 'USD', currency), currency);
  }
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