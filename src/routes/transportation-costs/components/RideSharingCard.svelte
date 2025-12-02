<!-- src/routes/transportation-costs/components/RideSharingCard.svelte -->
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

  // Get availability text
  function getAvailabilityText(score: number): string {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Moderate';
    if (score >= 20) return 'Limited';
    return 'Poor';
  }
</script>

<div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200/50 p-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
    <span class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
      🚗
    </span>
    Ride Sharing & Taxis
  </h3>
  
  <div class="space-y-6">
    <!-- Ride Sharing -->
    <div>
      <div class="flex items-center gap-2 mb-3">
        <h4 class="font-medium text-gray-900">Ride Sharing</h4>
        <span class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
          {getAvailabilityText(cityData.rideSharing.availability)}
        </span>
      </div>
      
      <div class="space-y-2">
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-600">Base Fare</span>
          <span class="font-medium">
            {formatCost(cityData.rideSharing.baseFare)}
          </span>
        </div>
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-600">Per Kilometer</span>
          <span class="font-medium">
            {formatCost(cityData.rideSharing.costPerKm)}/km
          </span>
        </div>
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-600">Example Trip (10km)</span>
          <span class="font-medium">
            {formatCost(
              cityData.rideSharing.baseFare + 
              (cityData.rideSharing.costPerKm * 10)
            )}
          </span>
        </div>
      </div>
    </div>

    <!-- Taxis -->
    <div>
      <h4 class="font-medium text-gray-900 mb-3">Taxis</h4>
      <div class="space-y-2">
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-600">Start Fare</span>
          <span class="font-medium">
            {formatCost(cityData.taxis.startFare)}
          </span>
        </div>
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-600">Per Kilometer</span>
          <span class="font-medium">
            {formatCost(cityData.taxis.costPerKm)}/km
          </span>
        </div>
        {#if cityData.taxis.flagFall}
          <div class="flex justify-between items-center text-sm">
            <span class="text-gray-600">Flag Fall</span>
            <span class="font-medium">
              {formatCost(cityData.taxis.flagFall)}
            </span>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>