<!-- src/routes/transportation-costs/components/PublicTransportCard.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { CityTransportation } from '$lib/types/transportation';
  
  let {
    cityData,
    baseCurrency = 'USD',
    displayCurrency = 'USD'
  } = $props<{
    cityData: CityTransportation;
    baseCurrency: string;
    displayCurrency: string;
  }>();

  function formatCost(amount: number): string {
    if (!amount) return 'N/A';
    const converted = convertCurrency(amount, baseCurrency, displayCurrency);
    return formatCurrency(converted, displayCurrency);
  }

  // Get reliability rating as stars
  function getReliabilityStars(rating: number): string {
    const stars = Math.round(rating / 20); // Convert 0-100 to 0-5 stars
    return '★'.repeat(stars) + '☆'.repeat(5 - stars);
  }
</script>

<div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200/50 p-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
    <span class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
      🚆
    </span>
    Public Transport
  </h3>
  
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <span class="text-gray-600">Monthly Pass</span>
      <span class="font-semibold text-gray-900">
        {formatCost(cityData.publicTransport.monthlyPass)}
      </span>
    </div>
    
    <div class="flex justify-between items-center">
      <span class="text-gray-600">Single Ticket</span>
      <span class="font-semibold text-gray-900">
        {formatCost(cityData.publicTransport.singleTicket)}
      </span>
    </div>
    
    {#if cityData.publicTransport.dailyCap}
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Daily Cap</span>
        <span class="font-semibold text-gray-900">
          {formatCost(cityData.publicTransport.dailyCap)}
        </span>
      </div>
    {/if}
    
    <div class="flex justify-between items-center">
      <span class="text-gray-600">Reliability</span>
      <div class="flex items-center gap-2">
        <span class="text-yellow-500">
          {getReliabilityStars(cityData.publicTransport.reliability)}
        </span>
        <span class="text-sm text-gray-500">({cityData.publicTransport.reliability}%)</span>
      </div>
    </div>
    
    <div class="flex justify-between items-center">
      <span class="text-gray-600">Coverage</span>
      <span class="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
        {cityData.publicTransport.coverage}%
      </span>
    </div>
    
    {#if cityData.publicTransport.notes}
      <div class="mt-4 pt-4 border-t border-gray-200">
        <div class="text-sm text-gray-600">{cityData.publicTransport.notes}</div>
      </div>
    {/if}
  </div>
</div>