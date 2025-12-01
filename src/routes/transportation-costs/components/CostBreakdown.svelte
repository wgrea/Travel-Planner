<!-- src/routes/transportation-costs/components/CostBreakdown.svelte -->
<script lang="ts">
  import { getTransportationByCountry } from '$lib/data/transportationData';
  import { convertCurrency, formatCurrency, currencySymbols } from '$lib/utils/currency';
  import type { TransportationCosts, CityTransportation } from '$lib/types/transportation';
  
  export let country: string;
  export let city: string;
  export let usagePattern: 'tourist' | 'budgetTraveler' | 'digitalNomad' | 'resident';
  export let currency: string;
  
  // COMPREHENSIVE DEBUGGING
  $: console.log('🎯 CostBreakdown PROPS:', {
    country,
    city, 
    usagePattern,
    currency,
    currencySymbol: currencySymbols[currency]
  });
  
  $: transportationData = getTransportationByCountry(country);
  $: cityData = transportationData && city ? transportationData.cities[city] : null;
  $: displayData = cityData || transportationData?.nationalAverage;
  $: originalCurrency = transportationData?.currency || 'USD';
  $: monthlyCost = displayData?.usagePatterns?.[usagePattern] || 0;
  
  $: console.log('🎯 DATA FLOW:', {
    hasTransportationData: !!transportationData,
    hasCityData: !!cityData,
    hasDisplayData: !!displayData,
    originalCurrency,
    monthlyCost
  });

  // Test conversion immediately
  $: if (displayData && originalCurrency && currency) {
    const testAmount = 100;
    const converted = convertCurrency(testAmount, originalCurrency, currency);
    console.log('🧪 IMMEDIATE CONVERSION TEST:', {
      testAmount,
      from: originalCurrency,
      to: currency,
      converted,
      expected: (100 / 35.50) * 7.18 // Manual calculation for THB→CNY
    });
  }
  
  function getConvertedAmount(amount: number): string {
    console.log('💰 getConvertedAmount CALLED:', { 
      amount, 
      from: originalCurrency, 
      to: currency 
    });
    
    if (!amount || amount === 0) {
      console.log('💰 Zero amount, returning zero');
      return formatCurrency(0, currency);
    }
    
    // Handle same currency
    if (originalCurrency === currency) {
      console.log('💰 Same currency, no conversion');
      return formatCurrency(amount, currency);
    }
    
    const converted = convertCurrency(amount, originalCurrency, currency);
    console.log('💰 Conversion completed:', { original: amount, converted });
    
    const formatted = formatCurrency(converted, currency);
    console.log('💰 Final formatted result:', formatted);
    
    return formatted;
  }
  
  // ADD THIS MISSING FUNCTION
  function getOriginalAmount(amount: number): string {
    console.log('📄 getOriginalAmount:', { amount, currency: originalCurrency });
    return formatCurrency(amount, originalCurrency);
  }
</script>

{#if transportationData && displayData}
  <div class="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/60 shadow-xl p-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-gray-900">
        Transportation in {city || country}
        <span class="text-lg font-normal text-gray-600 ml-2">({usagePattern})</span>
      </h2>
      <div class="flex items-center gap-4">
        <div class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          {city ? `${city} specific` : 'Country average'}
        </div>
        <div class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
          <span>Display: {currency}</span>
          {#if originalCurrency !== currency}
            <span class="text-xs opacity-75">(from {originalCurrency})</span>
          {/if}
        </div>
      </div>
    </div>
    
    <!-- Monthly Cost Summary -->
    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
      <div class="text-center">
        <div class="text-sm text-blue-600 font-medium mb-1">Estimated Monthly Cost</div>
        <div class="text-3xl font-bold text-blue-800">
          {getConvertedAmount(monthlyCost)}
        </div>
        <div class="text-sm text-blue-600 mt-1">
          Based on {usagePattern} usage pattern
          {#if originalCurrency !== currency}
            <div class="text-xs opacity-75 mt-1">
              Original: {getOriginalAmount(monthlyCost)}
            </div>
          {/if}
        </div>
      </div>
    </div>
    
    <!-- SIMPLIFIED Cost Breakdown for Testing -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Public Transport -->
      <div class="border border-gray-200 rounded-xl p-4">
        <h3 class="font-semibold text-lg mb-3">🚆 Public Transport</h3>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span>Single Ticket:</span>
            <span class="font-medium">{getConvertedAmount(displayData.publicTransport.singleTicket)}</span>
          </div>
          {#if displayData.publicTransport.monthlyPass > 0}
            <div class="flex justify-between">
              <span>Monthly Pass:</span>
              <span class="font-medium">{getConvertedAmount(displayData.publicTransport.monthlyPass)}</span>
            </div>
          {:else}
            <div class="flex justify-between text-gray-500">
              <span>Monthly Pass:</span>
              <span class="font-medium">Not available</span>
            </div>
          {/if}
        </div>
      </div>
      
      <!-- Ride Sharing -->
      <div class="border border-gray-200 rounded-xl p-4">
        <h3 class="font-semibold text-lg mb-3">🚗 Ride Sharing</h3>
        <div class="space-y-2 text-sm">
          {#if displayData.rideSharing.exampleTrip > 0}
            <div class="flex justify-between">
              <span>5km Trip:</span>
              <span class="font-medium">{getConvertedAmount(displayData.rideSharing.exampleTrip)}</span>
            </div>
          {:else}
            <div class="flex justify-between text-gray-500">
              <span>Ride Sharing:</span>
              <span class="font-medium">Not available</span>
            </div>
          {/if}
        </div>
      </div>
    </div>
    
    <!-- Currency Note -->
    {#if originalCurrency !== currency}
      <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
        <p class="text-sm text-yellow-700 text-center">
          💡 Prices converted from {originalCurrency} to {currency}. Original prices in {originalCurrency}.
        </p>
      </div>
    {/if}
  </div>
{:else if country}
  <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center">
    <p class="text-yellow-700">No transportation data available for {country}{city ? ` - ${city}` : ''}</p>
  </div>
{/if}