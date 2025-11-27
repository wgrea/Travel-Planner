<!-- src/routes/living-costs/components/CostDetails.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { LivingCostData, TravelStyle } from './types';
  
  // Import sub-components
  import TravelStyleSelector from './TravelStyleSelector.svelte';
  import CostBreakdown from './CostBreakdown.svelte';
  import TripBudgetCalculator from './TripBudgetCalculator.svelte';
  import MoneySavingTips from './MoneySavingTips.svelte';

  export let currentCountryData: LivingCostData;
  export let selectedCountry: string;
  export let selectedCity: string;
  export let travelStyle: TravelStyle;
  export let tripLength: number;
  export let totalCost: number;
  export let selectedCurrency: string;

  // Events
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{
    travelStyleChange: TravelStyle;
    tripLengthChange: number;
    travelerCountChange: number;
  }>();

  // Provide the setTravelStyle function that TravelStyleSelector expects
  function setTravelStyle(style: TravelStyle) {
    travelStyle = style;
    dispatch('travelStyleChange', style);
  }

  function handleTripLengthChange(e: CustomEvent<number>) {
    dispatch('tripLengthChange', e.detail);
  }

  function handleTravelerCountChange(e: CustomEvent<number>) {
    dispatch('travelerCountChange', e.detail);
  }
</script>

<!-- Travel Style Selector -->
<div class="mb-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg">
  <TravelStyleSelector 
    {travelStyle}
    {setTravelStyle}
    {selectedCurrency}
    livingCostData={currentCountryData}
  />
</div>
  
<!-- Quick Cost Overview -->
<div class="mb-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg">
  <h2 class="text-2xl font-light mb-4 text-gray-900">
    Cost Overview for 
    {#if selectedCity}
      {selectedCity}, {selectedCountry}
    {:else}
      {selectedCountry}
    {/if}
  </h2>
  {#if currentCountryData.baseCosts}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="text-center p-4 bg-emerald-50 rounded-lg">
        <div class="text-2xl font-bold text-emerald-700">
          {formatCurrency(
            convertCurrency(
              currentCountryData.baseCosts.dailyLiving.budget, 
              currentCountryData.currency, 
              selectedCurrency
            ), 
            selectedCurrency
          )}
        </div>
        <div class="text-sm text-gray-600 mt-1">Budget Travel / day</div>
      </div>
      <div class="text-center p-4 bg-blue-50 rounded-lg">
        <div class="text-2xl font-bold text-blue-700">
          {formatCurrency(
            convertCurrency(
              currentCountryData.baseCosts.dailyLiving.midrange, 
              currentCountryData.currency, 
              selectedCurrency
            ), 
            selectedCurrency
          )}
        </div>
        <div class="text-sm text-gray-600 mt-1">Mid-range / day</div>
      </div>
      <div class="text-center p-4 bg-purple-50 rounded-lg">
        <div class="text-2xl font-bold text-purple-700">
          {formatCurrency(
            convertCurrency(
              currentCountryData.baseCosts.dailyLiving.luxury, 
              currentCountryData.currency, 
              selectedCurrency
            ), 
            selectedCurrency
          )}
        </div>
        <div class="text-sm text-gray-600 mt-1">Luxury / day</div>
      </div>
    </div>
  {:else}
    <p class="text-gray-600 text-center py-8">Cost data not available for this destination.</p>
  {/if}
</div>

<!-- Travel Configuration -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
  <TripBudgetCalculator 
    {tripLength}
    {totalCost}
    {travelStyle}
    {selectedCurrency}
    on:tripLengthChange={handleTripLengthChange}
    on:travelerCountChange={handleTravelerCountChange}
  />
</div> 

<!-- Cost Breakdown -->
<div class="mb-12">
  <CostBreakdown 
    livingCostData={currentCountryData}
    {selectedCurrency}
    {travelStyle}
  />
</div>

<!-- Money Saving Tips -->
<div class="mb-12">
  <MoneySavingTips 
    tips={currentCountryData.tips || []}
    country={selectedCountry}
    city={selectedCity}
  />
</div>