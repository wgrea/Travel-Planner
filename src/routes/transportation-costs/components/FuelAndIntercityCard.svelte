<!-- src/routes/transportation-costs/components/FuelAndIntercityCard.svelte -->
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
    <span class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
      ⛽
    </span>
    Fuel & Intercity Travel
  </h3>
  
  <div class="space-y-6">
    <!-- Fuel -->
    <div>
      <h4 class="font-medium text-gray-900 mb-3">Fuel Prices</h4>
      <div class="space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Gasoline (95 RON)</span>
          <span class="font-semibold text-gray-900">
            {formatCost(cityData.fuel.gasolinePerLiter)}/L
          </span>
        </div>
        {#if cityData.fuel.dieselPerLiter}
          <div class="flex justify-between items-center">
            <span class="text-gray-600">Diesel</span>
            <span class="font-semibold text-gray-900">
              {formatCost(cityData.fuel.dieselPerLiter)}/L
            </span>
          </div>
        {/if}
      </div>
    </div>

    <!-- Intercity -->
    {#if cityData.intercity && (cityData.intercity.trainPer100km || cityData.intercity.busPer100km)}
      <div>
        <h4 class="font-medium text-gray-900 mb-3">Intercity Travel (per 100km)</h4>
        <div class="space-y-2">
          {#if cityData.intercity.trainPer100km}
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Train</span>
              <span class="font-semibold text-gray-900">
                {formatCost(cityData.intercity.trainPer100km)}
              </span>
            </div>
          {/if}
          
          {#if cityData.intercity.busPer100km}
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Bus</span>
              <span class="font-semibold text-gray-900">
                {formatCost(cityData.intercity.busPer100km)}
              </span>
            </div>
          {/if}
          
          {#if cityData.intercity.domesticFlight}
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Domestic Flight</span>
              <span class="font-semibold text-gray-900">
                {formatCost(cityData.intercity.domesticFlight)}
              </span>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>