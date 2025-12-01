<!-- src/routes/living-costs/+page.svelte -->

<!-- I should also show the different currencies on other pages like I do on this page -->
<!-- Trip Duration & Budget is squeezed when the page is in full screen -->

<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import LivingCostCountrySelector from './components/LivingCostCountrySelector.svelte';
  import MainContent from './components/MainContent.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';
  import { getAllCountries, getAllRegions } from '$lib/utils/living-costs';
  import type { TravelStyle } from '$lib/types/living-costs';
  
  // Import reusable components
  import BeforeYouStart from './components/BeforeYouStart.svelte';
  import NextSteps from './components/NextSteps.svelte';
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

  // Use $effect for initialization
  $effect(() => {
    const regions = getAllRegions();
    const countries = getAllCountries();
    
    if (regions.length > 0 && !selectedRegion) {
      selectedRegion = regions[0];
    }
    
    if (countries.length > 0 && !selectedCountry) {
      selectedCountry = countries[0].country;
    }
  });

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

<div class="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 px-4 py-8 relative overflow-hidden">
  <BackgroundElements />
  
  <!-- Back Button - Fixed onclick -->
  <button onclick={() => goto('/')} class="group mb-8 ml-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
  </button>

  <!-- Currency Selector -->
  <CurrencySelector />

  <!-- Before You Start Section -->
  <BeforeYouStart />

  <!-- Navigation - Fixed onclick -->
  <div class="mb-8 flex gap-4 justify-center">
    <button
      onclick={() => goto('/transportation-costs')}
      class="px-6 py-3 bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white text-gray-700 font-medium flex items-center gap-2"
    >
      🚗 Transportation Costs
    </button>
  </div>

  <!-- Header -->
  <div class="mb-8 text-center">
    <h1 class="text-5xl font-light mb-4 text-gray-900 tracking-tight">Living Costs</h1>
    <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
      Plan your budget with detailed cost breakdowns
    </p>
  </div>

  <!-- Country & City Selector -->
  <div class="mb-8 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
    <div class="rounded-lg border border-gray-200 bg-white overflow-hidden">
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

  <!-- Next Steps Section -->
  <NextSteps />

  <!-- Budget Planning Reminder -->
  <BudgetReminder />
</div>