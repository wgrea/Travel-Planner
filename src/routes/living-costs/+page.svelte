<!-- src/routes/living-costs/+page.svelte -->
<!-- 
Make sure you know how you will improve this page instead of jumping right into "fixing/improving"



- Select country first, then city
- show living costs: accommodation, food, daily expenses
- travel style: budget, midrange, luxury
- I want to filter then see results. I may need to connect countries to filters
- I should learn how to filter and connect data. 
- filters go to 0? Then maybe add things that are closer.
-->
<script lang="ts">
  import { goto } from '$app/navigation';
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import TravelStyleSelector from './components/TravelStyleSelector.svelte';
  import AccommodationSelector from './components/AccommodationSelector.svelte';
  import TripBudgetCalculator from './components/TripBudgetCalculator.svelte';
  import CostBreakdown from './components/CostBreakdown.svelte';
  import MoneySavingTips from './components/MoneySavingTips.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';
  
  let selectedCountry: string = 'Thailand';
  let selectedRegion: string = '';
  let travelStyle: 'budget' | 'midrange' | 'luxury' = 'budget';
  let accommodationType: string = 'hostel';
  let tripLength: number = 30;
  let totalCost: number = 0;

  // Simple country data for living costs
  const livingCostCountries = [
    { country: 'Thailand', region: 'Asia' },
    { country: 'Japan', region: 'Asia' },
    { country: 'Spain', region: 'Europe' },
    { country: 'USA', region: 'North America' },
    { country: 'Italy', region: 'Europe' },
    { country: 'France', region: 'Europe' },
    { country: 'Germany', region: 'Europe' },
    { country: 'UK', region: 'Europe' },
  ];

  function navigate(path: string) {
    goto(path);
  }

  function setTravelStyle(style: 'budget' | 'midrange' | 'luxury'): void {
    travelStyle = style;
  }

  function handleCountryChange(country: string): void {
    selectedCountry = country;
  }

  function handleRegionChange(region: string): void {
    selectedRegion = region;
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-300 px-4 py-12 relative overflow-hidden">
  <BackgroundElements />

  <div class="max-w-6xl mx-auto relative z-10">
    <button
      on:click={() => navigate('/')}
      class="group mb-10 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200"
    >
      <span class="text-3xl">👈</span>
      <span class="font-semibold text-lg drop-shadow-md">Back to Main Menu</span>
    </button>
    
    <div class="mb-12 text-center">
      <div class="inline-block mb-6 relative">
        <div class="absolute inset-0 bg-white/20 blur-2xl"></div>
        <div class="relative text-7xl filter drop-shadow-lg">🏠</div>
      </div>
      
      <h1 class="text-6xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] tracking-tight">
        Living Costs
      </h1>
      
      <p class="text-white/95 text-xl font-light tracking-wide drop-shadow-md">
        Accommodation, food, and daily expenses for your perfect stay.
      </p>
    </div>

    <!-- Country Selection - Your added section -->
    <div class="mb-8">
      <label for="destination-country-selector" class="block text-sm font-medium mb-4 text-white tracking-wide">
        Destination Country
      </label>
      <div id="destination-country-selector" class="p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
        <CountrySelector 
          selectedCountry={selectedCountry}
          selectedRegion={selectedRegion}
          countryData={livingCostCountries}
          onCountryChange={handleCountryChange}
          onRegionChange={handleRegionChange}
          showInsights={false}
        />
      </div>
    </div>

    <!-- Rest of your existing components -->
    <TravelStyleSelector {travelStyle} {setTravelStyle} />
    <AccommodationSelector bind:accommodationType />
    <TripBudgetCalculator bind:tripLength {totalCost} {travelStyle} />
    <CostBreakdown />
    <MoneySavingTips />
  </div>
</div>