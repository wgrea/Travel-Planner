<!-- src/routes/living-costs/components/MainContent.svelte -->
<script lang="ts">
  import { livingCostsByRegion } from '$lib/data/livingCostData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import { getDailyCostForCity } from '$lib/utils/living-costs';
  import type { TravelStyle, LivingCostData } from '$lib/types/living-costs';
  
  // Import CostDetails component
  import CostDetails from './CostDetails.svelte';
  
  // Props - UPDATE to include seasonalPricing
  let {
    selectedCountry = '',
    selectedCity = '',
    travelStyle = 'midrange',
    tripLength = 30,
    travelerCount = 1,
    selectedCurrency = 'USD',
    seasonalPricing = 'sweet' as 'low' | 'sweet' | 'peak'
  } = $props<{
    selectedCountry: string;
    selectedCity: string;
    travelStyle: TravelStyle;
    tripLength: number;
    travelerCount: number;
    selectedCurrency: string;
    seasonalPricing: 'low' | 'sweet' | 'peak';
  }>();
  
  // Events
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{
    travelStyleChange: TravelStyle;
    tripLengthChange: number;
    travelerCountChange: number;
  }>();

  // Get current country data with proper type handling - FIXED: Use const without arrow function
  const currentCountryData = $derived.by(() => {
    const country = livingCostsByRegion
      .flatMap(region => {
        if (region.subregions) {
          return region.subregions.flatMap(subregion => subregion.countries);
        }
        return region.countries || [];
      })
      .find(country => country?.country === selectedCountry);

    if (country && country.baseCosts) {
      return country as LivingCostData;
    }
    return null;
  });

  // Calculate total cost using the helper function - FIXED: Use const without arrow function
  const totalCost = $derived.by(() => {
    if (!selectedCountry || !tripLength || !travelerCount) return 0;
    
    const dailyCost = getDailyCostForCity(selectedCountry, selectedCity, travelStyle);
    let cost = dailyCost * tripLength * travelerCount;
    
    // Now currentCountryData is a value, not a function
    if (currentCountryData?.currency && currentCountryData.currency !== selectedCurrency) {
      cost = convertCurrency(cost, currentCountryData.currency, selectedCurrency);
    }
    
    return cost;
  });

  function handleTravelStyleChange(e: CustomEvent<TravelStyle>) {
    dispatch('travelStyleChange', e.detail);
  }

  function handleTripLengthChange(e: CustomEvent<number>) {
    dispatch('tripLengthChange', e.detail);
  }

  function handleTravelerCountChange(e: CustomEvent<number>) {
    dispatch('travelerCountChange', e.detail);
  }
</script>

<div class="max-w-6xl mx-auto">
  <!-- Content based on selection -->
  {#if !selectedCountry}
    <!-- Welcome state -->
    <div class="text-center py-12">
      <h2 class="text-2xl font-light text-gray-900 mb-4">Select a destination to see cost details</h2>
      <p class="text-gray-600">Choose a country from the selector above to get started.</p>
    </div>
  {:else if currentCountryData}
    <!-- Cost details - PASS seasonalPricing to CostDetails -->
    <CostDetails 
      currentCountryData={currentCountryData} 
      {selectedCountry}
      {selectedCity}
      {travelStyle}
      {tripLength}
      totalCost={totalCost} 
      {selectedCurrency}
      {seasonalPricing}
      on:travelStyleChange={handleTravelStyleChange}
      on:tripLengthChange={handleTripLengthChange}
      on:travelerCountChange={handleTravelerCountChange}
    />
  {:else}
    <!-- No data state -->
    <div class="text-center py-12 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200">
      <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      </div>
      <h3 class="text-xl font-light text-gray-900 mb-2">Cost Data Unavailable</h3>
      <p class="text-gray-600 max-w-md mx-auto">
        We're currently gathering detailed cost information for {selectedCountry}. 
        Check back soon or explore other destinations.
      </p>
    </div>
  {/if}
</div>