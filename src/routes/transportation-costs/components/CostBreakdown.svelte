<!-- src/routes/transportation-costs/components/CostBreakdown.svelte -->
<script lang="ts">
  import { getTransportationByCountry } from '$lib/data/transportationData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { TransportationCosts, CityTransportation } from '$lib/types/transportation';
  
  // Use props declaration
  let {
    country = '',
    city = '',
    usagePattern = 'tourist',
    currency = 'USD'
  } = $props();
  
  // Define UsagePattern type locally
  type UsagePatternKey = 'tourist' | 'budgetTraveler' | 'digitalNomad' | 'resident';
  
  // Reactive derived values
  const countryData = $derived(getTransportationByCountry(country));
  const cityData = $derived(countryData?.cities?.[city]);
  
  // ✅ FIX: Use $derived.by() for complex logic
  const monthlyCost = $derived.by(() => {
    if (!cityData?.usagePatterns) return 0;
    
    // Type-safe access
    const patterns = cityData.usagePatterns;
    const patternKey = usagePattern as UsagePatternKey;
    
    // Check if the pattern exists
    if (patternKey in patterns) {
      return patterns[patternKey];
    }
    return 0;
  });
  
  const countryCurrency = $derived(countryData?.currency || 'USD');
  
  // ✅ FIX: Use $derived.by() for calculations that need to react to multiple dependencies
  const monthlyCostUSD = $derived.by(() => convertCurrency(monthlyCost, countryCurrency, 'USD'));
  const monthlyCostConverted = $derived.by(() => convertCurrency(monthlyCostUSD, 'USD', currency));
  
  // Format function
  function formatAmount(amount: number, targetCurrency: string): string {
    const localAmount = convertCurrency(amount, 'USD', targetCurrency);
    return formatCurrency(localAmount, targetCurrency);
  }
  
  // Get formatted cost in local currency
  const formattedMonthlyCost = $derived(formatCurrency(monthlyCostConverted, currency));
  
  // Debug logging
  $effect(() => {
    console.log('🏙️ CostBreakdown updated:', {
      country,
      city,
      usagePattern,
      currency,
      monthlyCost,
      monthlyCostUSD,
      monthlyCostConverted
    });
  });
</script>

<div class="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 p-8">
  <div class="mb-8">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-2xl font-light text-gray-900 mb-2">
          {#if city && country}
            {city}, {country}
          {:else if country}
            {country}
          {:else}
            Select a destination
          {/if}
        </h2>
        <p class="text-gray-600">
          {#if city && country}
            Transportation cost breakdown for {city}
          {:else if country}
            Select a city in {country}
          {/if}
        </p>
      </div>
      <div class="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-medium">
        {formattedMonthlyCost} monthly
      </div>
    </div>
    
    <!-- Transport Details -->
    {#if cityData}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Public Transport -->
        {#if cityData.publicTransport}
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Public Transport
            </h3>
            <div class="space-y-3">
              {#if cityData.publicTransport.monthlyPass}
                <div class="flex justify-between">
                  <span class="text-gray-600">Monthly Pass</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.publicTransport.monthlyPass, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
              {#if cityData.publicTransport.singleTicket}
                <div class="flex justify-between">
                  <span class="text-gray-600">Single Ticket</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.publicTransport.singleTicket, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
            </div>
          </div>
        {/if}
        
        <!-- Ride Sharing -->
        {#if cityData.rideSharing}
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Ride Sharing
            </h3>
            <div class="space-y-3">
              {#if cityData.rideSharing.baseFare}
                <div class="flex justify-between">
                  <span class="text-gray-600">Base Fare</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.rideSharing.baseFare, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
              {#if cityData.rideSharing.costPerKm}
                <div class="flex justify-between">
                  <span class="text-gray-600">Per Kilometer</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.rideSharing.costPerKm, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
            </div>
          </div>
        {/if}
        
        <!-- Taxis -->
        {#if cityData.taxis}
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              Taxis
            </h3>
            <div class="space-y-3">
              {#if cityData.taxis.startFare}
                <div class="flex justify-between">
                  <span class="text-gray-600">Start Fare</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.taxis.startFare, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
              {#if cityData.taxis.costPerKm}
                <div class="flex justify-between">
                  <span class="text-gray-600">Per Kilometer</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.taxis.costPerKm, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
            </div>
          </div>
        {/if}
        
        <!-- Rental Cars -->
        {#if cityData.rentalCars}
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Rental Cars
            </h3>
            <div class="space-y-3">
              {#if cityData.rentalCars.economyWeekly}
                <div class="flex justify-between">
                  <span class="text-gray-600">Economy (Weekly)</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.rentalCars.economyWeekly, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
              {#if cityData.rentalCars.compactWeekly}
                <div class="flex justify-between">
                  <span class="text-gray-600">Compact (Weekly)</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.rentalCars.compactWeekly, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
              {#if cityData.rentalCars.insuranceDaily}
                <div class="flex justify-between">
                  <span class="text-gray-600">Insurance (Daily)</span>
                  <span class="font-medium">
                    {formatAmount(
                      convertCurrency(cityData.rentalCars.insuranceDaily, countryCurrency, 'USD'),
                      currency
                    )}
                  </span>
                </div>
              {/if}
            </div>
          </div>
        {/if}
      </div>
    {:else if country}
      <div class="text-center py-8 text-gray-500">
        <p>Select a city to see detailed transportation costs</p>
      </div>
    {:else}
      <div class="text-center py-8 text-gray-500">
        <p>Select a country to see transportation costs</p>
      </div>
    {/if}
  </div>
</div>