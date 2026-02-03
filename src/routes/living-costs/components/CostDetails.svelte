<!-- src/routes/living-costs/components/CostDetails.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { LivingCostData, TravelStyle } from '$lib/types/living-costs';
  
  // Import sub-components
  import TravelStyleSelector from './TravelStyleSelector.svelte';
  import CostBreakdown from './CostBreakdown.svelte';
  import TripBudgetCalculator from './TripBudgetCalculator.svelte';
  import MoneySavingTips from './MoneySavingTips.svelte';

  // Props - ADD seasonalPricing
  export let currentCountryData: LivingCostData;
  export let selectedCountry: string;
  export let selectedCity: string;
  export let travelStyle: TravelStyle;
  export let tripLength: number;
  export let totalCost: number;
  export let selectedCurrency: string;
  export let seasonalPricing: 'low' | 'sweet' | 'peak' = 'sweet';

  // Events
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{
    travelStyleChange: TravelStyle;
    tripLengthChange: number;
    travelerCountChange: number;
  }>();

  // Helper function to safely get cost with fallback
  function getSafeDailyCost(costData: LivingCostData, style: TravelStyle): number {
    // Handle 'nomad' style specially
    if (style === 'nomad') {
      const hostelCost = costData.baseCosts?.accommodation?.budget?.hostel || 30;
      const cafeCost = costData.baseCosts?.food?.streetFood || 5;
      return hostelCost + (cafeCost * 2);
    }
    return costData.baseCosts?.dailyLiving?.[style] || 0;
  }

  function getSafeCurrency(costData: LivingCostData): string {
    return costData.currency || 'USD';
  }

  // Provide the setTravelStyle function that TravelStyleSelector expects
  // FIXED: Match the type expected by TravelStyleSelector
  function setTravelStyle(style: 'budget' | 'midrange' | 'luxury' | 'nomad') {
    travelStyle = style as TravelStyle;
    dispatch('travelStyleChange', style as TravelStyle);
  }

  function handleTripLengthChange(e: CustomEvent<number>) {
    dispatch('tripLengthChange', e.detail);
  }

  function handleTravelerCountChange(e: CustomEvent<number>) {
    dispatch('travelerCountChange', e.detail);
  }

  // Helper function to get cost data for current selection (country or city)
  // FIXED: Use type assertion to handle the merged data
  $: currentCostData = (() => {
    if (selectedCity && currentCountryData?.cities?.[selectedCity]) {
      const cityData = currentCountryData.cities[selectedCity];
      // Use city data if available, fall back to country data
      const mergedData = {
        ...currentCountryData,
        ...cityData,
        baseCosts: {
          ...currentCountryData.baseCosts,
          ...cityData.baseCosts
        },
        tips: cityData.tips || currentCountryData.tips
      };
      return mergedData as LivingCostData;
    }
    return currentCountryData;
  })();
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
  {#if currentCostData?.baseCosts?.dailyLiving}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="text-center p-4 bg-emerald-50 rounded-lg">
        <div class="text-2xl font-bold text-emerald-700">
          {formatCurrency(
            convertCurrency(
              getSafeDailyCost(currentCostData, 'budget'), 
              getSafeCurrency(currentCostData), 
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
              getSafeDailyCost(currentCostData, 'midrange'), 
              getSafeCurrency(currentCostData), 
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
              getSafeDailyCost(currentCostData, 'luxury'), 
              getSafeCurrency(currentCostData), 
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
<TripBudgetCalculator 
    {tripLength}
    {totalCost}
    travelStyle={travelStyle as 'budget' | 'midrange' | 'luxury'} 
    {selectedCurrency}
    on:tripLengthChange={handleTripLengthChange}
    on:travelerCountChange={handleTravelerCountChange}
  />

<!-- Cost Breakdown - PASS seasonalPricing -->
<div class="mb-12">
  <CostBreakdown 
    livingCostData={currentCountryData}
    {selectedCurrency}
    {travelStyle}
    {seasonalPricing} 
  />
</div>

<!-- Money Saving Tips -->
<div class="mb-12">
  <MoneySavingTips 
    tips={currentCostData?.tips || currentCountryData?.tips || []}
    country={selectedCountry}
    city={selectedCity}
  />
</div>