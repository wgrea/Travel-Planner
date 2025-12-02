<!-- src/routes/transportation-costs/components/CostBreakdown.svelte -->
<script lang="ts">
  import { transportationData } from '$lib/data/transportationData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { TransportationCosts, CityTransportation } from '$lib/types/transportation';
  
    // ✅ Use props declaration
  let {
    country = '',
    city = '',
    usagePattern = 'tourist',
    currency = 'USD'  // ✅ This will automatically update when parent passes new value
  } = $props();

  // Find country data
  const countryData = transportationData.find(c => 
    c.country.toLowerCase() === country.toLowerCase()
  );

  // Find city data
  const cityData: CityTransportation | null = (() => {
    if (!countryData) return null;
    
    if (!city) {
      if (countryData.nationalAverage) {
        return { ...countryData.nationalAverage, city: `${country} Average` };
      }
      return Object.values(countryData.cities)[0] || null;
    }
    
    return Object.values(countryData.cities).find(c => 
      c.city.toLowerCase() === city.toLowerCase()
    ) || null;
  })();

  // Get monthly cost
  const monthlyCost = cityData ? cityData.usagePatterns?.[usagePattern as keyof typeof cityData.usagePatterns] || 0 : 0;
  const countryCurrency = countryData?.currency || 'USD';

  // Helper function
  function format(amount: number): string {
    return formatCurrency(convertCurrency(amount, countryCurrency, currency), currency);
  }
</script>

<div class="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/60 shadow-xl overflow-hidden">
  <!-- Header -->
  <div class="p-8 border-b border-gray-200/60">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div>
        <h2 class="text-2xl font-light text-gray-900 mb-2">
          {cityData?.city || 'Select a city'}
        </h2>
        <div class="flex items-center gap-4 text-gray-600">
          <span class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            {country} • {countryData?.region || 'N/A'}
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full text-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
            </svg>
            {usagePattern.replace(/([A-Z])/g, ' $1').trim()}
          </span>
        </div>
      </div>
      
      <!-- Monthly Cost Display -->
      <div class="text-right">
        <div class="text-sm text-gray-500 mb-1">Monthly Estimate</div>
        <div class="text-4xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {format(monthlyCost)}
        </div>
        <div class="text-sm text-gray-500 mt-2">
          Based on {usagePattern.replace(/([A-Z])/g, ' $1').toLowerCase()} usage
        </div>
      </div>
    </div>
  </div>

  {#if cityData}
    <!-- Main Content -->
    <div class="p-8">
      <!-- Quick Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 text-center border border-blue-200/30">
          <div class="text-2xl mb-2">🚕</div>
          <div class="text-sm text-gray-600 mb-1">Taxi (5km)</div>
          <div class="text-xl font-semibold text-gray-900">
            {format(cityData.taxis?.startFare + (cityData.taxis?.costPerKm * 5) || 0)}
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 text-center border border-green-200/30">
          <div class="text-2xl mb-2">🚗</div>
          <div class="text-sm text-gray-600 mb-1">Ride-Share (5km)</div>
          <div class="text-xl font-semibold text-gray-900">
            {format(cityData.rideSharing?.baseFare + (cityData.rideSharing?.costPerKm * 5) || 0)}
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-6 text-center border border-yellow-200/30">
          <div class="text-2xl mb-2">🎫</div>
          <div class="text-sm text-gray-600 mb-1">Monthly Pass</div>
          <div class="text-xl font-semibold text-gray-900">
            {format(cityData.publicTransport.monthlyPass)}
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 text-center border border-purple-200/30">
          <div class="text-2xl mb-2">⛽</div>
          <div class="text-sm text-gray-600 mb-1">Fuel/Liter</div>
          <div class="text-xl font-semibold text-gray-900">
            {format(cityData.fuel.gasolinePerLiter)}
          </div>
        </div>
      </div>

      <!-- Simple message for now -->
      <div class="text-center p-8">
        <p class="text-gray-600">Detailed breakdown components are being refactored...</p>
      </div>
    </div>
  {:else}
    <!-- No Data State -->
    <div class="p-16 text-center">
      <div class="w-24 h-24 mx-auto mb-8 text-gray-300">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="opacity-50">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="text-xl font-light text-gray-900 mb-4">No Data Available</h3>
      <p class="text-gray-600 max-w-md mx-auto mb-8">
        Transportation data for this location is not yet available. Please select another city.
      </p>
    </div>
  {/if}
</div>