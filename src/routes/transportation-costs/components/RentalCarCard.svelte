<!-- src/routes/transportation-costs/components/RentalCarCard.svelte -->
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
</script>

<div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200/50 p-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
    <span class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
      🚙
    </span>
    Car Rentals
  </h3>
  
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-gray-50 rounded-xl p-4">
        <div class="text-sm text-gray-600 mb-1">Economy Car</div>
        <div class="font-semibold text-gray-900">
          {formatCost(cityData.rentalCars.economyWeekly)}/week
        </div>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-4">
        <div class="text-sm text-gray-600 mb-1">Compact Car</div>
        <div class="font-semibold text-gray-900">
          {formatCost(cityData.rentalCars.compactWeekly)}/week
        </div>
      </div>
    </div>
    
    <div class="flex justify-between items-center">
      <span class="text-gray-600">Insurance (Daily)</span>
      <span class="font-semibold text-gray-900">
        {formatCost(cityData.rentalCars.insuranceDaily)}/day
      </span>
    </div>
    
    <div class="flex justify-between items-center">
      <span class="text-gray-600">Fuel Efficiency</span>
      <span class="font-semibold text-gray-900">
        {cityData.rentalCars.fuelEfficiency} km/L
      </span>
    </div>
  </div>
</div>