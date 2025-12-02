<!-- src/routes/transportation-costs/components/MonthlyCostSummary.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { CityTransportation } from '$lib/types/transportation';
  
  // Use props runes syntax for Svelte 5
  let {
    cityData,
    usagePattern = 'digitalNomad', // Keep it even if unused for future use
    baseCurrency = 'USD',
    displayCurrency = 'USD'
  } = $props<{
    cityData: CityTransportation;
    usagePattern: string;
    baseCurrency: string;
    displayCurrency: string;
  }>();

  // Calculate costs as regular variables, not derived
  const taxi5km = cityData.taxis?.startFare + (cityData.taxis?.costPerKm * 5) || 0;
  const rideShare5km = cityData.rideSharing?.baseFare + (cityData.rideSharing?.costPerKm * 5) || 0;

  function formatCost(amount: number): string {
    if (!amount) return 'N/A';
    const converted = convertCurrency(amount, baseCurrency, displayCurrency);
    return formatCurrency(converted, displayCurrency);
  }
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
  <div class="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 text-center border border-blue-200/30">
    <div class="text-2xl mb-2">🚕</div>
    <div class="text-sm text-gray-600 mb-1">Taxi (5km)</div>
    <div class="text-xl font-semibold text-gray-900">
      {formatCost(taxi5km)}
    </div>
  </div>
  
  <div class="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 text-center border border-green-200/30">
    <div class="text-2xl mb-2">🚗</div>
    <div class="text-sm text-gray-600 mb-1">Ride-Share (5km)</div>
    <div class="text-xl font-semibold text-gray-900">
      {formatCost(rideShare5km)}
    </div>
  </div>
  
  <div class="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-6 text-center border border-yellow-200/30">
    <div class="text-2xl mb-2">🎫</div>
    <div class="text-sm text-gray-600 mb-1">Monthly Pass</div>
    <div class="text-xl font-semibold text-gray-900">
      {formatCost(cityData.publicTransport.monthlyPass)}
    </div>
  </div>
  
  <div class="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 text-center border border-purple-200/30">
    <div class="text-2xl mb-2">⛽</div>
    <div class="text-sm text-gray-600 mb-1">Fuel/Liter</div>
    <div class="text-xl font-semibold text-gray-900">
      {formatCost(cityData.fuel.gasolinePerLiter)}
    </div>
  </div>
</div>