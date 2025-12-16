<!-- src/routes/flight-costs/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';
  
  // Core Components
  import FlightControlPanel from './components/FlightControlPanel.svelte';
  import FlightCostSection from './components/FlightCostSection.svelte';
  
  // Country Analysis Components
  import SweetSpotSection from './components/SweetSpotSection.svelte';
  import MonthFilter from './components/MonthFilter.svelte';
  import BookingTimeline from './components/BookingTimeline.svelte';
  import BaggageOptions from './components/BaggageOptions.svelte';
  import TipsSection from './components/TipsSection.svelte';
  import { convertCurrency } from '$lib/utils/currency'; // ADD THIS

  // Month Analysis Component
  import MonthAnalysis from './components/MonthAnalysis.svelte';
  
  // Utils & Data
  import { getAllCountries, getCurrentFlightData } from '$lib/utils/flightUtils';
  import { routeCosts } from '$lib/data/routeCosts';
  import type { CountryData } from '$lib/utils/flightUtils';

  // State Management
  let selectedCountry = $state('Thailand');
  let selectedRegion = $state('Southeast Asia');
  let selectedSubregion = $state('');
  let selectedMonth = $state('January'); // Set default month instead of 'All Months'
  let originCountry = $state('United States');
  let analysisView = $state<'country' | 'month'>('country');
  
  // Derived State
  const currentCurrency = $derived($selectedCurrency);
  const flightPatternData = $derived(getCurrentFlightData(selectedCountry));
  const flightCostData = $derived(
    routeCosts[originCountry]?.[selectedCountry] || 
    routeCosts[selectedCountry]?.[originCountry]
  );
  
  // Flight Pattern Display
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

  // Event Handlers
  function handleDestinationChange(country: string) {
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

  function handleOriginChange(country: string) {
    originCountry = country;
  }
  
  function handleSubregionChange(subregion: string) {
    selectedSubregion = subregion;
    const countryData = getAllCountries();
    const countriesInSubregion = countryData.filter(
      c => c.region === selectedRegion && c.subregion === subregion
    );
    if (countriesInSubregion.length > 0) selectedCountry = countriesInSubregion[0].country;
  }

  function formatPrice(price: number): string {
    // Convert from USD to selected currency
    const convertedPrice = convertCurrency(price, 'USD', $selectedCurrency);
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: $selectedCurrency
    }).format(convertedPrice);
  }

  function getFlightCounts() {
    const directFlights = routeCosts[originCountry] ? Object.keys(routeCosts[originCountry]).length : 0;
    
    let reverseFlights = 0;
    Object.entries(routeCosts).forEach(([country, routes]) => {
      if (routes[originCountry] && country !== originCountry) {
        reverseFlights++;
      }
    });
    
    const totalFlights = directFlights + reverseFlights;
    
    return { totalFlights, directFlights, reverseFlights };
  }
  
  const flightCounts = $derived.by(() => getFlightCounts());
</script>

<div class="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 px-4 py-8 relative overflow-hidden">
  <!-- Animated Background -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 left-[10%] w-64 h-24 bg-white/30 rounded-full blur-xl animate-cloud-drift [animation-duration:60s]"></div>
    <div class="absolute top-40 right-[15%] w-80 h-20 bg-white/25 rounded-full blur-xl animate-cloud-drift [animation-duration:45s] [animation-delay:10s]"></div>
    <div class="absolute bottom-32 left-[20%] w-72 h-28 bg-white/20 rounded-full blur-xl animate-cloud-drift [animation-duration:50s] [animation-delay:5s]"></div>
    
    <div class="absolute top-1/4 right-[30%] w-48 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent animate-plane-trail"></div>
    <div class="absolute top-1/3 left-[25%] w-64 h-px bg-gradient-to-r from-transparent via-sky-300/15 to-transparent animate-plane-trail [animation-delay:2s]"></div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">
    
    <!-- Currency Selector -->
    <div class="mb-8">
      <CurrencySelector />
    </div>

    <!-- Header Section -->
    <header class="mb-12 text-center">
      <div class="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg">
        <h1 class="text-5xl font-light mb-4 text-gray-900">✈️ Flight Intelligence</h1>
        <p class="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          Smart flight planning with seasonal pricing insights
        </p>
        
        <!-- Analysis Mode Toggle - Mobile Responsive -->
        <div class="inline-flex flex-col sm:flex-row bg-white/40 rounded-2xl sm:rounded-xl p-1 border border-white/50 shadow-lg w-full max-w-md sm:max-w-none">
          <button
            class="px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl transition-all flex items-center justify-center sm:justify-start gap-2 sm:gap-3 w-full sm:w-auto {analysisView === 'country' ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-white/60'}"
            onclick={() => analysisView = 'country'}
          >
            <div class="text-xl sm:text-2xl">📍</div>
            <div class="text-center sm:text-left">
              <div class="font-bold text-sm sm:text-base">By Country</div>
              <div class="text-xs sm:text-sm opacity-90 hidden sm:block">Pick destination, see best months</div>
            </div>
          </button>
          
          <div class="hidden sm:block w-px bg-white/50 mx-1"></div>
          <div class="sm:hidden my-1 h-px bg-white/30 w-full"></div>
          
          <button
            class="px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl transition-all flex items-center justify-center sm:justify-start gap-2 sm:gap-3 w-full sm:w-auto {analysisView === 'month' ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-white/60'}"
            onclick={() => analysisView = 'month'}
          >
            <div class="text-xl sm:text-2xl">📅</div>
            <div class="text-center sm:text-left">
              <div class="font-bold text-sm sm:text-base">By Month</div>
              <div class="text-xs sm:text-sm opacity-90 hidden sm:block">Pick month, see best destinations</div>
            </div>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
<main class="space-y-8">
  
  {#if analysisView === 'country'}
    <!-- COUNTRY ANALYSIS MODE -->
    
    <!-- Flight Control Panel -->
    <FlightControlPanel 
      originCountry={originCountry}
      selectedDestination={selectedCountry}
      selectedRegion={selectedRegion}
      flightCounts={flightCounts}
      onOriginChange={handleOriginChange}
      onDestinationChange={handleDestinationChange}
      onRegionChange={handleRegionChange}
    />

    <!-- Debug Connection Status -->
    <div class="bg-white/40 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-lg">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-gray-800">Flight Connection</h3>
            <p class="text-sm text-gray-600">Debug checking flight data and patterns</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="bg-white/60 px-4 py-2 rounded-lg border border-white/70">
            <span class="text-sm text-gray-600">From</span>
            <div class="font-bold text-blue-800">{originCountry}</div>
          </div>
          <div class="text-gray-400">→</div>
          <div class="bg-white/60 px-4 py-2 rounded-lg border border-white/70">
            <span class="text-sm text-gray-600">To</span>
            <div class="font-bold text-blue-800">{selectedCountry}</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white/60 p-4 rounded-lg border border-white/70">
          <div class="text-sm text-gray-600">Flight Pattern</div>
          <div class="font-bold text-green-700 flex items-center gap-2">
            {flightPatternData ? '✅ Available' : '❌ Not Available'}
          </div>
        </div>
        <div class="bg-white/60 p-4 rounded-lg border border-white/70">
          <div class="text-sm text-gray-600">Price Data</div>
          <div class="font-bold text-green-700 flex items-center gap-2">
            {flightCostData ? '✅ Available' : '❌ Not Available'}
          </div>
        </div>
        <div class="bg-white/60 p-4 rounded-lg border border-white/70">
          <div class="text-sm text-gray-600">Region</div>
          <div class="font-bold text-gray-800">{selectedRegion || 'Global'}</div>
        </div>
      </div>
    </div>

    <!-- Flight Cost Section -->
    <FlightCostSection 
      {originCountry}
      {selectedCountry}
      flightCostData={flightCostData}
      {currentCurrency}
    />

    <!-- Country Analysis Content -->
    <div class="space-y-8">
      <!-- Month Analysis -->
      {#if flightPatternData}
        <div class="space-y-8">
          <!-- Month Filter -->
          <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-6 shadow-xl">
            <MonthFilter 
              selectedMonth={selectedMonth}
              onMonthChange={(month) => selectedMonth = month}
              cheapestMonths={flightPatternData.cheapestMonths || []}
              sweetSpotMonths={flightPatternData.sweetSpot || []}
              expensiveMonths={flightPatternData.expensiveMonths || []}
            />
          </div>

          <!-- Booking Tools -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-6 shadow-xl">
              <BookingTimeline 
                averagePrice={flightPatternData.averagePrice}
                {currentCurrency}
              />
            </div>
            
            <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-6 shadow-xl">
              <BaggageOptions 
                basePrice={flightPatternData.averagePrice}
                currentCurrency={currentCurrency}
              />
            </div>
          </div>
        </div>
      {/if}

      <!-- Money-Saving Tips -->
      <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-6 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
            <span class="text-2xl text-white">💡</span>
          </div>
          <div>
            <h2 class="text-xl font-bold text-gray-800">Money-Saving Tips for {selectedCountry}</h2>
            <p class="text-gray-600 text-sm">Country-specific flight strategies</p>
          </div>
        </div>
        
        <div class="space-y-4">
          {#if flightPatternData?.planningTips && flightPatternData.planningTips.length > 0}
            {#each flightPatternData.planningTips as tip}
              <div class="bg-white/60 p-4 rounded-xl border border-green-200 hover:bg-white/80 transition-colors group">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-200 transition-colors">
                    <span class="text-green-600 font-bold text-sm">•</span>
                  </div>
                  <p class="text-gray-700">{tip}</p>
                </div>
              </div>
            {/each}
          {:else}
            <!-- Fallback tips -->
            <div class="bg-white/60 p-4 rounded-xl border border-blue-200">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-blue-600 font-bold text-sm">💡</span>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 mb-1">General Travel Tips</h3>
                  <p class="text-gray-700 text-sm">
                    Consider flexible dates and nearby airports for potential savings when flying to {selectedCountry}.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/60 p-4 rounded-xl border border-amber-200">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-amber-600 font-bold text-sm">✈️</span>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 mb-1">Booking Strategy</h3>
                  <p class="text-gray-700 text-sm">
                    Book flights 6-8 weeks in advance and consider combining with nearby destinations for multi-city deals.
                  </p>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>

      <!-- Tips Section -->
      <div class="bg-gradient-to-r from-blue-50/40 to-sky-50/40 backdrop-blur-md rounded-2xl border border-white/50 p-8 shadow-xl">
        <TipsSection />
      </div>
    </div>
    
  {:else}
    <!-- MONTH ANALYSIS MODE - Clean and focused -->
    

    
    <!-- Month Analysis Results -->
    <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-6 shadow-xl">
      {#if selectedMonth === 'All Months'}
        <div class="text-center py-12">
          <div class="text-4xl mb-4">📊</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Select a Month</h3>
          <p class="text-gray-600">Choose any month in 'By Country' to see a list of months here.</p>
        </div>
      {:else}
        <MonthAnalysis 
          {selectedMonth}
          {originCountry}
        />
      {/if}
    </div>
  {/if}
</main>
  </div>
</div>

<style>
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
  
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-cloud-drift {
    animation: cloud-drift linear infinite;
  }
  
  .animate-plane-trail {
    animation: plane-trail 10s ease-in-out infinite;
  }
</style>
