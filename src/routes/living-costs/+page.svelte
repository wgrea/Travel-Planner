<!-- src/routes/living-costs/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import LivingCostCountrySelector from './components/LivingCostCountrySelector.svelte';
  import MainContent from './components/MainContent.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';
  import { getAllCountries, getAllRegions } from '$lib/utils/living-costs';
  import type { TravelStyle } from '$lib/types/living-costs';
  import BudgetReminder from './components/BudgetReminder.svelte';

  // Import the CurrencySelector
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  
  // Import currency store
  import { selectedCurrency } from '$lib/stores/currency';

  // Use $state for reactive variables
  let selectedCountry = $state('');
  let selectedRegion = $state('');
  let selectedCity = $state('');
  let travelStyle = $state<TravelStyle>('midrange');
  let tripLength = $state(30);
  let travelerCount = $state(1);
  
  // Use $derived for the store value in runes mode
  const currentCurrency = $derived($selectedCurrency);

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
</script>
<div class="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 px-4 py-8 relative overflow-hidden">
  <!-- Very subtle grid pattern for data feel -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Data grid lines (very subtle) -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/5 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-teal-100/3 to-transparent"></div>
    
    <!-- Clean graph-like dots -->
    <div class="absolute top-1/4 left-[15%] w-1 h-1 bg-emerald-400/10 rounded-full"></div>
    <div class="absolute top-1/2 right-[25%] w-1 h-1 bg-teal-400/10 rounded-full"></div>
    <div class="absolute bottom-1/3 left-[35%] w-1 h-1 bg-emerald-400/10 rounded-full"></div>
    
    <!-- Progress bar style lines -->
    <div class="absolute top-40 left-[10%] right-[10%] h-1 bg-gradient-to-r from-emerald-200/5 via-teal-200/10 to-emerald-200/5 rounded-full"></div>
    <div class="absolute bottom-40 left-[15%] right-[15%] h-1 bg-gradient-to-r from-teal-200/5 via-emerald-200/10 to-teal-200/5 rounded-full"></div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">

    <!-- Currency Selector - Calculator style -->
    <div class="mb-8 bg-white/90 backdrop-blur-sm rounded-xl border border-emerald-200 p-4 inline-block">
      <CurrencySelector />
    </div>

    <!-- Header - Clean typography -->
    <div class="mb-8 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white 
        border border-emerald-200 mb-6 shadow-sm">
        <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      </div>
      
      <h1 class="text-4xl font-light mb-3 text-emerald-900 tracking-tight">
        Living Costs Calculator
      </h1>
      <p class="text-emerald-700 text-base font-light max-w-2xl mx-auto">
        Precise budgeting with clean data visualization and detailed breakdowns
      </p>
    </div>

    <!-- Country & City Selector - Calculator card -->
    <div class="mb-8 bg-white rounded-xl border border-emerald-200 shadow-sm 
      hover:shadow-md transition-shadow duration-300 max-w-4xl mx-auto overflow-hidden">
      <div class="p-6 border-b border-emerald-100 bg-emerald-50/30">
        <div class="flex items-center gap-3">
          <div class="w-2 h-6 bg-emerald-500 rounded-full"></div>
          <h2 class="text-lg font-medium text-emerald-900">Destination Selection</h2>
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

    <!-- Main Content - Clean data visualization -->
    <div class="bg-white rounded-xl border border-emerald-200 shadow-sm mb-8 overflow-hidden">
      <div class="p-6 border-b border-emerald-100 bg-emerald-50/30">
        <div class="flex items-center gap-3">
          <div class="w-2 h-6 bg-teal-500 rounded-full"></div>
          <h2 class="text-lg font-medium text-emerald-900">Cost Breakdown</h2>
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
          on:travelStyleChange={handleTravelStyleChange}
          on:tripLengthChange={handleTripLengthChange}
          on:travelerCountChange={handleTravelerCountChange}
        />
      </div>
    </div>

    <!-- Budget Planning Reminder - Clean info card -->
    <div class="bg-white rounded-xl border border-emerald-200 p-6 max-w-lg mx-auto">
      <BudgetReminder />
    </div>
  </div>
</div>
