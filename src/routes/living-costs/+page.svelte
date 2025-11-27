<!-- src/routes/living-costs/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import LivingCostCountrySelector from './components/LivingCostCountrySelector.svelte';
  import MainContent from './components/MainContent.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';
  import { getAllCountries, getAllRegions } from './components/data-helpers';
  import type { TravelStyle } from './components/types';
  
  // Import reusable components
  import BeforeYouStart from './components/BeforeYouStart.svelte';
import NextSteps from './components/NextSteps.svelte';
import BudgetReminder from './components/BudgetReminder.svelte';

  // State
  let selectedCountry: string = '';
  let selectedRegion: string = '';
  let selectedCity: string = '';
  let travelStyle: TravelStyle = 'midrange';
  let tripLength: number = 30;
  let travelerCount: number = 1;
  let selectedCurrency: string = 'USD';

  // Initialize
  $: if (!selectedRegion && getAllRegions().length > 0) {
    selectedRegion = getAllRegions()[0];
  }

  $: if (!selectedCountry && getAllCountries().length > 0) {
    selectedCountry = getAllCountries()[0].country;
  }

  // Event handlers
  function handleCountryChange(country: string) {
    selectedCountry = country;
    selectedCity = '';
  }

  function handleRegionChange(region: string) {
    selectedRegion = region;
  }

  function handleCitySelect(event: CustomEvent<{ city: string; country: string }>) {
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

  function handleCurrencyChange(event: CustomEvent<string>) {
    selectedCurrency = event.detail;
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 px-4 py-8 relative overflow-hidden">
  <BackgroundElements />
  
  <!-- Back Button -->
  <button on:click={() => goto('/')} class="group mb-8 ml-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
  </button>

  <!-- Before You Start Section -->
  <BeforeYouStart />

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
        countryData={getAllCountries()}
        onCountryChange={handleCountryChange}
        onRegionChange={handleRegionChange}
        on:selectCity={handleCitySelect}
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
    {selectedCurrency}
    on:travelStyleChange={handleTravelStyleChange}
    on:tripLengthChange={handleTripLengthChange}
    on:travelerCountChange={handleTravelerCountChange}
    on:currencyChange={handleCurrencyChange}
  />

  <!-- Next Steps Section -->
  <NextSteps />

  <!-- Budget Planning Reminder -->
  <BudgetReminder />
</div>