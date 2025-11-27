<!-- src/routes/living-costs/components/MainContent.svelte -->
<script lang="ts">
  import { livingCostsByRegion } from '$lib/data/livingCostData';
  import { convertCurrency, formatCurrency, currencySymbols } from '$lib/utils/currency';
  import type { TravelStyle } from './types';
  
  // Import CostDetails component
  import CostDetails from './CostDetails.svelte';
  
  // Props
  export let selectedCountry: string = '';
  export let selectedCity: string = '';
  export let travelStyle: TravelStyle = 'midrange';
  export let tripLength: number = 30;
  export let travelerCount: number = 1;
  export let selectedCurrency: string = 'USD';
  
  // Events
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{
    travelStyleChange: TravelStyle;
    tripLengthChange: number;
    travelerCountChange: number;
    currencyChange: string;
  }>();

  // Data
  const availableCurrencies = Object.keys(currencySymbols);

  // Get current country data
  $: currentCountryData = livingCostsByRegion
    .flatMap(region => {
      if (region.subregions) {
        return region.subregions.flatMap(subregion => subregion.countries);
      }
      return region.countries || [];
    })
    .find(country => country.country === selectedCountry);

  // Calculate total cost
  $: totalCost = (() => {
    if (!currentCountryData?.baseCosts || !tripLength || !travelerCount) return 0;
    
    const dailyCost = currentCountryData.baseCosts.dailyLiving[travelStyle];
    let cost = dailyCost * tripLength * travelerCount;
    
    if (currentCountryData.currency !== selectedCurrency) {
      cost = convertCurrency(cost, currentCountryData.currency, selectedCurrency);
    }
    
    return cost;
  })();

  // Event handlers
  function handleCurrencyChange(event: Event) {
    const currency = (event.target as HTMLSelectElement).value;
    dispatch('currencyChange', currency);
    localStorage.setItem('preferred-currency', currency);
  }

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
  <!-- Currency Selector -->
  <div class="mb-6 flex justify-center">
    <div class="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 p-4 shadow-lg">
      <label for="currency-select" class="mr-3 font-medium text-gray-700">Display prices in:</label>
      <select 
        id="currency-select" 
        bind:value={selectedCurrency}
        on:change={handleCurrencyChange}
        class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
      >
        {#each availableCurrencies as currency}
          <option value={currency}>{currency} ({currencySymbols[currency]})</option>
        {/each}
      </select>
    </div>
  </div>

  <!-- Content based on selection -->
  {#if !selectedCountry}
    <!-- Welcome state -->
    <div class="text-center py-12">
      <h2 class="text-2xl font-light text-gray-900 mb-4">Select a destination to see cost details</h2>
      <p class="text-gray-600">Choose a country from the selector above to get started.</p>
    </div>
  {:else if currentCountryData}
    <!-- Cost details -->
    <!-- In MainContent.svelte, fix the CostDetails usage -->
    <CostDetails 
    {currentCountryData}
        {selectedCountry}
        {selectedCity}
        {travelStyle}
        {tripLength}
        {totalCost}
        {selectedCurrency}
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