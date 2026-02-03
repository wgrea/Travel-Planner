<!-- src/routes/living-costs/components/SingleCountryView.svelte -->
<script lang="ts">
  import { getAllCountries } from '$lib/utils/living-costs';
  import LivingCostCountrySelector from './CitySelector.svelte';
  import MainContent from './MainContent.svelte';
  import BudgetReminder from './BudgetReminder.svelte';
  import type { TravelStyle } from '$lib/types/living-costs';
  import { createEventDispatcher } from 'svelte';
  
  // Use $props() instead of export let
  let {
    currentCurrency = '',
    seasonalPricing = 'sweet' as 'low' | 'sweet' | 'peak'
  } = $props();
  
  const dispatch = createEventDispatcher();
  
  // FIX: Add $state for reactive variables
  let selectedCountry = $state('');
  let selectedRegion = $state('');
  let selectedCity = $state('');
  let travelStyle = $state<TravelStyle>('midrange');
  let tripLength = $state(30);
  let travelerCount = $state(1);
  
  // Event handlers
  function handleCountryChange(country: string) {
    selectedCountry = country;
    selectedCity = '';
  }
  
  function handleRegionChange(region: string) {
    selectedRegion = region;
  }
  
  function handleCityChange(event: CustomEvent<string>) {
    selectedCity = event.detail;
  }
  
  function handleSelectCity(event: CustomEvent<{ city: string; country: string }>) {
    selectedCity = event.detail.city;
  }
  
  function handleTravelStyleChange(event: CustomEvent<TravelStyle>) {
    travelStyle = event.detail;
  }
  
  function handleTripLengthChange(event: CustomEvent<number>) {
    tripLength = event.detail;
  }
  
  function handleTravelerCountChange(event: CustomEvent<number>) {
    travelerCount = event.detail;
  }
  
  function handleShowComparison() {
    dispatch('showcomparison');
  }
</script>

<div class="space-y-8">
  <!-- Country & City Selector -->
  <div class="bg-white rounded-xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    <div class="p-6 border-b border-emerald-100 bg-emerald-50/30">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-2 h-6 bg-emerald-500 rounded-full"></div>
          <h2 class="text-lg font-medium text-emerald-900">Destination Selection</h2>
        </div>
        <button
          onclick={handleShowComparison}
          class="text-emerald-600 hover:text-emerald-800 text-sm font-medium flex items-center gap-1"
          type="button"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          View a Variety of Countries
        </button>
      </div>
    </div>
    
    <div class="p-6">
      <LivingCostCountrySelector 
        {selectedCountry}
        {selectedRegion}
        {selectedCity}
        countryData={getAllCountries()}
        onCountryChange={handleCountryChange}
        onRegionChange={handleRegionChange}
        on:selectCity={handleSelectCity}
        on:cityChange={handleCityChange}
      />
    </div>
  </div>

  <!-- Main Content -->
  {#if selectedCountry}
    <div class="bg-white rounded-xl border border-emerald-200 shadow-sm overflow-hidden">
      <div class="p-6 border-b border-emerald-100 bg-emerald-50/30">
        <div class="flex items-center gap-3">
          <div class="w-2 h-6 bg-teal-500 rounded-full"></div>
          <h2 class="text-lg font-medium text-emerald-900">Cost Breakdown for {selectedCountry}</h2>
        </div>
      </div>
      
      <div class="p-6">
        <MainContent
          {selectedCountry}
          {selectedCity}
          {travelStyle}
          {tripLength}
          {travelerCount}
          selectedCurrency={currentCurrency}
          {seasonalPricing}
          on:travelStyleChange={handleTravelStyleChange}
          on:tripLengthChange={handleTripLengthChange}
          on:travelerCountChange={handleTravelerCountChange}
        />
      </div>
    </div>
  {:else}
    <!-- Empty state -->
    <div class="bg-white rounded-xl border border-emerald-200 p-8 text-center">
      <svg class="w-16 h-16 text-emerald-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
      <h3 class="text-lg font-medium text-emerald-900 mb-2">Select a Destination</h3>
      <p class="text-emerald-600 mb-4">Choose a country to see detailed cost breakdown</p>
      <button
        onclick={handleShowComparison}
        class="text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-2 justify-center mx-auto"
        type="button"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Or compare multiple countries
      </button>
    </div>
  {/if}

  <!-- Budget Planning Reminder -->
  <div class="bg-white rounded-xl border border-emerald-200 p-6">
    <BudgetReminder />
  </div>
</div>
<!-- REMOVE any extra closing </div> tags that might be at the end -->