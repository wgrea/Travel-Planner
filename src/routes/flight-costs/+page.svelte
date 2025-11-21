<!-- src/routes/flight-costs/+page.svelte -->
<!-- Clean Girl x Outrun - Sophisticated retro-futuristic aesthetic -->

<!--
Improve the country selection. Should be immediate now that the data is sorted out. 
-->

<script lang="ts">
  import { goto } from '$app/navigation';
  import { flyDataByRegion, type FlightData, type RegionData } from './data/flyData';
  import CountrySelector, { type CountryData } from '$lib/components/CountrySelector.svelte';
  import CheapestCountries from './components/CheapestCountries.svelte';
  import TipsSection from './components/TipsSection.svelte';

  let selectedCountry: string = 'Thailand';
  let selectedRegion: string = 'Southeast Asia';
  let isLoading = false;

  // Convert your region-based data to flat country data for the selector
  function getAllCountries(): CountryData[] {
    const allCountries: CountryData[] = [];
    
    flyDataByRegion.forEach((regionData: RegionData) => {
      regionData.countries.forEach((flightData: FlightData) => {
        allCountries.push({
          country: flightData.country,
          region: regionData.region, // Add region from the parent
          cities: flightData.cities,
          averagePrice: flightData.averagePrice,
          sweetSpot: flightData.sweetSpot,
          cheapestMonths: flightData.cheapestMonths
        });
      });
    });
    
    return allCountries;
  }

  // Get all unique regions for filtering
  function getAllRegions(): string[] {
    return [...new Set(flyDataByRegion.map(region => region.region))];
  }

  // Get countries by region
  function getCountriesByRegion(region: string): FlightData[] {
    const regionData = flyDataByRegion.find(r => r.region === region);
    return regionData ? regionData.countries : [];
  }

  function handleCountryChange(country: string) {
    selectedCountry = country;
    // Find the region for the selected country to keep them in sync
    const countryData = getAllCountries().find(c => c.country === country);
    if (countryData && countryData.region) {
      selectedRegion = countryData.region;
    }
  }

  function handleRegionChange(region: string) {
    selectedRegion = region;
    
    if (region) {
      const countriesInRegion = getCountriesByRegion(region);
      if (countriesInRegion.length > 0) {
        selectedCountry = countriesInRegion[0].country;
      }
    } else {
      // If no region selected, choose first country from all data
      selectedCountry = getAllCountries()[0]?.country || '';
    }
  }

  // Get current country data for display
  $: currentCountryData = getAllCountries().find(country => country.country === selectedCountry);
  $: currentFlightData = flyDataByRegion
    .flatMap(region => region.countries)
    .find(country => country.country === selectedCountry);

  // For CheapestCountries component
  $: filteredData = getAllCountries();

  // Load initial data
  $: if (selectedCountry) {
    isLoading = true;
    // Simulate loading
    setTimeout(() => isLoading = false, 500);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
  <div class="max-w-6xl mx-auto">
    
    <!-- Back Button -->
    <button
      onclick={() => goto('/')}
      class="group mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
    </button>

    <!-- Before You Start Section -->
    <div class="mb-12 text-center">
      <p class="text-gray-700 text-sm font-light mb-4 tracking-wide">
        Before you check flight costs, make sure you check these out first if you haven't already
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/visa')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          📝 Visa Requirements
        </button>
        <button onclick={() => goto('/filters')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          🔍 Destination Finder
        </button>
        <button onclick={() => goto('/resonance')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          🌊 Resonance
        </button>
      </div>
    </div>

    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-light mb-4 text-gray-900 tracking-tight">Flight Costs</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Smart flight planning with seasonal pricing insights and destination intelligence
      </p>
    </div>
    
    <!-- Country Selector Section -->
    <div class="mb-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CountrySelector 
        selectedCountry={selectedCountry}
        selectedRegion={selectedRegion}
        countryData={getAllCountries()}
        onCountryChange={handleCountryChange}
        onRegionChange={handleRegionChange}
      />
    </div>

    <!-- Country Details Section -->
    {#if currentFlightData && !isLoading}
      <div class="mb-12">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Price Analysis -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">💰 Price Analysis</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span class="font-medium text-green-800">Cheapest Months:</span>
                <span class="font-bold text-green-900">{currentFlightData?.cheapestMonths?.join(', ') || ''}</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span class="font-medium text-red-800">Expensive Months:</span>
                <span class="font-bold text-red-900">{currentFlightData?.expensiveMonths?.join(', ') || ''}</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span class="font-medium text-blue-800">Sweet Spot:</span>
                <span class="font-bold text-blue-900">{currentFlightData?.sweetSpot?.join(', ') || ''}</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                <span class="font-medium text-amber-800">Average Price:</span>
                <span class="font-bold text-amber-900">${currentFlightData.averagePrice}</span>
              </div>
            </div>
          </div>

          <!-- Cities & Tips -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">🏙️ Popular Cities</h3>
            <div class="flex flex-wrap gap-2 mb-6">
              {#each currentFlightData.cities as city}
                <span class="px-3 py-1 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 text-sm font-medium">
                  {city}
                </span>
              {/each}
            </div>
            
            {#if currentFlightData.planningTips}
              <h4 class="text-lg font-semibold mb-3 text-gray-800">📝 Planning Tips</h4>
              <ul class="space-y-2">
                {#each currentFlightData.planningTips as tip}
                  <li class="flex items-start gap-2 text-gray-700">
                    <span class="text-green-500 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        </div>

        {#if currentFlightData.alternativeRoutes}
          <div class="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">🛫 Alternative Routes</h3>
            <p class="text-gray-700">{currentFlightData.alternativeRoutes}</p>
          </div>
        {/if}
      </div>
    {:else if isLoading}
      <div class="text-center py-12">
        <div class="inline-block w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p class="mt-4 text-gray-600">Loading flight data...</p>
      </div>
    {/if}
    
    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div class="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CheapestCountries {filteredData} />
      </div>
      
      <!-- Additional clean info panel -->
      <div class="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 class="text-xl font-light text-gray-900 mb-4 pb-3 border-b border-gray-200">Travel Intelligence</h2>
        <div class="space-y-4 text-gray-800">
          <div class="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200">
            <span class="text-blue-600 mt-0.5">⏱️</span>
            <div>
              <p class="font-medium text-gray-900">Optimal Timing</p>
              <p class="text-sm text-gray-700 mt-1">Book 6-8 weeks ahead for best value</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200">
            <span class="text-cyan-600 mt-0.5">💡</span>
            <div>
              <p class="font-medium text-gray-900">Smart Routing</p>
              <p class="text-sm text-gray-700 mt-1">Consider nearby airports for savings</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200">
            <span class="text-gray-600 mt-0.5">📊</span>
            <div>
              <p class="font-medium text-gray-900">Data Insights</p>
              <p class="text-sm text-gray-700 mt-1">Seasonal trends affect pricing by 20-40%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <TipsSection />
    </div>

    <!-- Next Steps Section -->
    <div class="mt-12 text-center">
      <p class="text-gray-700 text-sm font-light mb-4 tracking-wide">
        Once you've got your destination planned, check out one of these
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/living-costs')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          🏠 Living Costs
        </button>
        <button onclick={() => goto('/digital-nomad')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          💻 Essentials
        </button>
        <button onclick={() => goto('/flight-costs#tips')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          💡 More Tips
        </button>
      </div>
    </div>
  </div>
</div>