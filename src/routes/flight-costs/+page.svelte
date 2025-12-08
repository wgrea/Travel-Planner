<!-- src/routes/flight-costs/+page.svelte -->

<!--
Flight Costs Page Improvements
Monthly price filtering: Show cheapest/sweet spot/expensive countries for selected month

Enhance existing: Make month filter actually filter the results

Visual improvements: Better data visualization for seasonal patterns
-->

<!-- src/routes/flight-costs/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';
  
  // Components - make sure these exist and have proper exports
  import FlightCostSection from './components/FlightCostSection.svelte';
  import PriceAnalysisSection from './components/PriceAnalysisSection.svelte';
  import CitiesTipsSection from './components/CitiesTipsSection.svelte';
  import CheapestCountries from './components/CheapestCountries.svelte';
  import TipsSection from './components/TipsSection.svelte';
  import IntelligenceItem from './components/IntelligenceItem.svelte';
  
  // New components
  import SweetSpotSection from './components/SweetSpotSection.svelte';
  import MonthFilter from './components/MonthFilter.svelte';
  import BookingTimeline from './components/BookingTimeline.svelte';
  import BaggageOptions from './components/BaggageOptions.svelte';
  
  // Utils
  import { getAllCountries, getCurrentFlightData } from '$lib/utils/flightUtils';
  import type { CountryData } from '$lib/utils/flightUtils';
  
  // Data
  import { routeCosts } from '$lib/data/routeCosts';
  import type { FlightInfo } from '$lib/types/flight';
  import type { FlightPattern } from '$lib/data/flightPatternData';
  import { getAllOriginCountries } from '$lib/utils/regionUtils';
  import FlightControlPanel from './components/FlightControlPanel.svelte';
  
  // State
  let selectedCountry = $state('Thailand');
  let selectedRegion = $state('Southeast Asia');
  let selectedSubregion = $state('');
  let selectedMonth = $state('All Months');
  let originCountry = $state('United States');
  const currentCurrency = $derived($selectedCurrency);
  
  // Derived data
  const flightPatternData = $derived(
    getCurrentFlightData(selectedCountry)
  );
  
  const flightCostData = $derived(
    // Use the new bidirectional check
    routeCosts[originCountry]?.[selectedCountry] || 
    routeCosts[selectedCountry]?.[originCountry]
  );
  
  // Event handlers
  function handleCountryChange(country: string) {
    selectedCountry = country;
    const countryData = getAllCountries().find(c => c.country === country);
    if (countryData?.region) selectedRegion = countryData.region;
  }

  function handleRegionChange(region: string) {
    selectedRegion = region;
    const countriesInRegion = getAllCountries().filter(c => c.region === region);
    if (countriesInRegion.length > 0) {
      selectedCountry = countriesInRegion[0].country;
    }
  }

  // Add this to handle origin change
  function handleOriginChange(country: string) {
    originCountry = country;
    // You might want to reset destination when origin changes
    // or keep the current destination if it's available from new origin
  }
  
  function handleSubregionChange(subregion: string) {
    selectedSubregion = subregion;
    const countryData = getAllCountries();
    const countriesInSubregion = countryData.filter(
      c => c.region === selectedRegion && c.subregion === subregion
    );
    if (countriesInSubregion.length > 0) selectedCountry = countriesInSubregion[0].country;
  }

  // Fix: Remove $derived from these and make them functions or computed values
  const filteredCountryData = $derived.by(() => {
    let data = getAllCountries();
    
    if (selectedRegion) {
      data = data.filter(c => c.region === selectedRegion);
    }
    
    if (selectedSubregion) {
      data = data.filter(c => c.subregion === selectedSubregion);
    }
    
    return data;
  });
  
  const flightPatternForDisplay = $derived.by(() => {
    if (flightPatternData) {
      return {
        country: flightPatternData.country || selectedCountry,
        cities: flightPatternData.cities || [],
        cheapestMonths: flightPatternData.cheapestMonths || [],
        expensiveMonths: flightPatternData.expensiveMonths || [],
        sweetSpot: flightPatternData.sweetSpot || [],
        averagePrice: flightPatternData.averagePrice || 0,
        alternativeRoutes: flightPatternData.alternativeRoutes || '',
        planningTips: flightPatternData.planningTips || [],
        notes: flightPatternData.notes || ''
      };
    }
    return {
      country: selectedCountry,
      cities: [],
      cheapestMonths: [],
      expensiveMonths: [],
      sweetSpot: [],
      averagePrice: 0,
      alternativeRoutes: '',
      planningTips: [],
      notes: ''
    };
  });

  // Update formatPrice to use current currency
  function formatPrice(price?: number): string {
    if (!price) return '';
    
    const currency = $selectedCurrency;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(price);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 px-4 py-8 relative overflow-hidden">
  <!-- Cloud Background -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Cloud shapes -->
    <div class="absolute top-10 left-[10%] w-64 h-24 bg-white/30 rounded-full 
      blur-xl animate-cloud-drift [animation-duration:60s]"></div>
    <div class="absolute top-40 right-[15%] w-80 h-20 bg-white/25 rounded-full 
      blur-xl animate-cloud-drift [animation-duration:45s] [animation-delay:10s]"></div>
    <div class="absolute bottom-32 left-[20%] w-72 h-28 bg-white/20 rounded-full 
      blur-xl animate-cloud-drift [animation-duration:50s] [animation-delay:5s]"></div>
    
    <!-- Subtle airplane trails -->
    <div class="absolute top-1/4 right-[30%] w-48 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent
      animate-plane-trail"></div>
    <div class="absolute top-1/3 left-[25%] w-64 h-px bg-gradient-to-r from-transparent via-sky-300/15 to-transparent
      animate-plane-trail [animation-delay:2s]"></div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">
    
    <!-- Navigation & Header -->
    <button onclick={() => goto('/')} 
      class="group mb-8 flex items-center gap-2 bg-white/30 backdrop-blur-sm 
      px-4 py-2 rounded-xl border border-white/40 text-gray-700 hover:text-gray-900 
      hover:bg-white/40 hover:border-white/60 transition-all duration-300">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm">Back to Main Menu</span>
    </button>

    <div class="mb-6">
      <CurrencySelector />
    </div>

    <!-- Quick Links with cloud cards -->
    <div class="mb-12 text-center">
      <p class="text-gray-700 text-sm mb-4">Check these first if you haven't already</p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/visa')} 
          class="px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 
          text-gray-800 hover:bg-white/60 hover:shadow-md hover:scale-105 
          transition-all duration-300 font-medium text-sm flex items-center gap-2">
          <span>📝</span> Visa Requirements
        </button>
        <button onclick={() => goto('/resonance')} 
          class="px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 
          text-gray-800 hover:bg-white/60 hover:shadow-md hover:scale-105 
          transition-all duration-300 font-medium text-sm flex items-center gap-2">
          <span>🔍</span> Destination Finder
        </button>
        <button onclick={() => goto('/travel-essentials')} 
          class="px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 
          text-gray-800 hover:bg-white/60 hover:shadow-md hover:scale-105 
          transition-all duration-300 font-medium text-sm flex items-center gap-2">
          <span>🎒</span> Packing Lists
        </button>
      </div>
    </div>

    <!-- Header with floating effect -->
    <div class="mb-12 text-center bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg">
      <h1 class="text-5xl font-light mb-4 text-gray-900">Flight Costs</h1>
      <p class="text-gray-700 text-lg max-w-2xl mx-auto">
        Smart flight planning with seasonal pricing insights
      </p>
    </div>
    
    <!-- In +page.svelte, update this section: -->
    <div class="mb-12">
      <FlightControlPanel 
        originCountry={originCountry}
        selectedCountry={selectedCountry}
        selectedRegion={selectedRegion}
        onOriginChange={handleOriginChange}
        onDestinationChange={handleCountryChange}
        onRegionChange={handleRegionChange}
      />
    </div>

    <!-- Flight Selection Debug - as a cloud card -->
    <div class="mb-6 p-6 bg-gradient-to-r from-white/40 to-blue-50/40 backdrop-blur-sm 
      border border-white/50 rounded-xl shadow-lg">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-bold text-blue-800 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Flight Selection Debug
        </h4>
        <span class="text-xs bg-blue-100/50 text-blue-800 px-2 py-1 rounded-full backdrop-blur-sm">
          {selectedCountry}
        </span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <div class="bg-white/60 p-3 rounded-lg border border-white/70">
          <div class="text-blue-600 font-medium">From</div>
          <div class="font-bold">{originCountry}</div>
        </div>
        <div class="bg-white/60 p-3 rounded-lg border border-white/70">
          <div class="text-blue-600 font-medium">To</div>
          <div class="font-bold">{selectedCountry}</div>
        </div>
        <div class="bg-white/60 p-3 rounded-lg border border-white/70">
          <div class="text-blue-600 font-medium">Region</div>
          <div class="font-bold">{selectedRegion || 'All'}</div>
        </div>
        <div class="bg-white/60 p-3 rounded-lg border border-white/70">
          <div class="text-blue-600 font-medium">Data Status</div>
          <div class="font-bold">
            {flightPatternData ? '✅ Pattern' : '❌ No Pattern'}
            {flightCostData ? ' ✅ Cost' : ' ❌ No Cost'}
          </div>
        </div>
      </div>
    </div>

    <!-- Flight Cost Section with floating effect -->
    <FlightCostSection 
      {originCountry}
      {selectedCountry}
      flightCostData={flightCostData}
      {currentCurrency}
    />

    <!-- After the Price Analysis Section -->
    {#if flightPatternData}
      <!-- In +page.svelte -->
      <div class="mb-8">
        <SweetSpotSection 
          sweetSpot={flightPatternData.sweetSpot}
          expensiveMonths={flightPatternData.expensiveMonths}
        />
      </div>
      
      <!-- In your +page.svelte, update the MonthFilter usage: -->
      {#if flightPatternData}
        <div class="mb-8">
          <MonthFilter 
            selectedMonth={selectedMonth}
            onMonthChange={(month) => selectedMonth = month}
            cheapestMonths={flightPatternData.cheapestMonths || []}
            sweetSpotMonths={flightPatternData.sweetSpot || []}
            expensiveMonths={flightPatternData.expensiveMonths || []}
          />
        </div>
      {/if}
      
      <!-- Booking Timeline -->
      <div class="mb-8">
        <BookingTimeline 
          averagePrice={flightPatternData.averagePrice}
          {currentCurrency}
        />
      </div>
      
      <!-- Baggage Options -->
        <div class="mb-8">
          <BaggageOptions 
            basePrice={flightPatternData.averagePrice}
            currentCurrency={currentCurrency}
          />
        </div>
      {/if}
    
    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Cheapest Countries with elevation shadow -->
      <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-6 shadow-xl 
        hover:shadow-2xl transition-all duration-300">
        <CheapestCountries 
          filteredData={[flightPatternForDisplay]} 
          {selectedCountry}
          {originCountry}
          selectedCurrency={currentCurrency}
          flightCostData={flightCostData}
        />
      </div>
      
      <!-- Travel Intelligence - as a floating card -->
      <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-6 shadow-xl 
        hover:shadow-2xl transition-all duration-300">
        <h2 class="text-xl font-light mb-4 pb-3 border-b border-white/60">Travel Intelligence</h2>
        <div class="space-y-4">
          <div class="bg-white/60 p-4 rounded-xl border border-white/70 hover:bg-white/80 
            transition-colors duration-200">
            <div class="flex items-center gap-3">
              <div class="text-2xl">⏱️</div>
              <div>
                <h3 class="font-medium text-gray-900">Optimal Timing</h3>
                <p class="text-gray-700 text-sm mt-1">Book 6-8 weeks ahead for best value</p>
              </div>
            </div>
          </div>
          <div class="bg-white/60 p-4 rounded-xl border border-white/70 hover:bg-white/80 
            transition-colors duration-200">
            <div class="flex items-center gap-3">
              <div class="text-2xl">💡</div>
              <div>
                <h3 class="font-medium text-gray-900">Smart Routing</h3>
                <p class="text-gray-700 text-sm mt-1">Consider nearby airports for savings</p>
              </div>
            </div>
          </div>
          <div class="bg-white/60 p-4 rounded-xl border border-white/70 hover:bg-white/80 
            transition-colors duration-200">
            <div class="flex items-center gap-3">
              <div class="text-2xl">📊</div>
              <div>
                <h3 class="font-medium text-gray-900">Data Insights</h3>
                <p class="text-gray-700 text-sm mt-1">Seasonal trends affect pricing by 20-40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tips Section as cloud card -->
    <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-6 shadow-xl 
      mb-12 hover:shadow-2xl transition-shadow duration-300">
      <TipsSection />
    </div>

    <!-- Next Steps with floating buttons -->
    <div class="text-center">
      <p class="text-gray-700 text-sm mb-4">Continue your travel planning</p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/living-costs')} 
          class="px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 
          text-gray-800 hover:bg-white/60 hover:shadow-md hover:scale-105 
          transition-all duration-300 font-medium text-sm flex items-center gap-2">
          <span>🏠</span> Living Costs
        </button>
        <button onclick={() => goto('/digital-nomad')} 
          class="px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 
          text-gray-800 hover:bg-white/60 hover:shadow-md hover:scale-105 
          transition-all duration-300 font-medium text-sm flex items-center gap-2">
          <span>💻</span> Digital Nomad Essentials
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  /* Add these animations to your app.css */
  @keyframes cloud-drift {
    0% { transform: translateX(-100px) translateY(0px); }
    50% { transform: translateX(100px) translateY(10px); }
    100% { transform: translateX(-100px) translateY(0px); }
  }
  
  @keyframes plane-trail {
    0% { transform: translateX(-100%) scaleX(0.5); opacity: 0; }
    50% { transform: translateX(0%) scaleX(1); opacity: 0.3; }
    100% { transform: translateX(100%) scaleX(0.5); opacity: 0; }
  }
  
  .animate-cloud-drift {
    animation: cloud-drift linear infinite;
  }
  
  .animate-plane-trail {
    animation: plane-trail 10s ease-in-out infinite;
  }
</style>