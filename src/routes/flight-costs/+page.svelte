<!-- src/routes/flight-costs/+page.svelte -->
<script lang="ts">
  import { routeCosts } from '$lib/data/routeCosts';
  import { goto } from '$app/navigation';
  import { flyDataByRegion, getAllRegions, getAllCountries as getAllFlightCountries } from '$lib/data/flightPatternData';
  import type { FlightPattern } from '$lib/data/flightPatternData';
  import CountrySelector, { type CountryData } from '$lib/components/CountrySelector.svelte';
  import CheapestCountries from './components/CheapestCountries.svelte';
  import TipsSection from './components/TipsSection.svelte';
  import IntelligenceItem from './components/IntelligenceItem.svelte';

  // Use $state for reactive variables
  let selectedCountry = $state('Thailand');
  let selectedRegion = $state('Southeast Asia');
  let isLoading = $state(false);
  let origin = '';
  let destination = '';

  // Use $derived for reactive values
  const currentRouteCosts  = $derived(getAllFlightCountries().find(country => country.country === selectedCountry));
  
  // For side effects, use $effect
  $effect(() => {
    if (selectedCountry) {
      isLoading = true;
      const timer = setTimeout(() => isLoading = false, 300);
      return () => clearTimeout(timer);
    }
  });

  // Simplified country data extraction
  function getAllCountries(): CountryData[] {
    const allCountries: CountryData[] = [];
    
    flyDataByRegion.forEach(regionData => {
      if (regionData.subregions) {
        regionData.subregions.forEach(subregion => {
          allCountries.push(...subregion.countries.map(flightData => ({
            country: flightData.country,
            region: subregion.subregion,
            cities: flightData.cities,
            averagePrice: flightData.averagePrice,
            sweetSpot: flightData.sweetSpot,
            cheapestMonths: flightData.cheapestMonths
          })));
        });
      } else if (regionData.countries) {
        allCountries.push(...regionData.countries.map(flightData => ({
          country: flightData.country,
          region: regionData.region,
          cities: flightData.cities,
          averagePrice: flightData.averagePrice,
          sweetSpot: flightData.sweetSpot,
          cheapestMonths: flightData.cheapestMonths
        })));
      }
    });
    
    return allCountries;
  }

  function handleCountryChange(country: string) {
    selectedCountry = country;
    const countryData = getAllCountries().find(c => c.country === country);
    if (countryData?.region) selectedRegion = countryData.region;
  }

  function handleRegionChange(region: string) {
    selectedRegion = region;
    const countriesInRegion = getAllCountries().filter(c => c.region === region);
    if (countriesInRegion.length > 0) selectedCountry = countriesInRegion[0].country;
  }

  // Debug using $effect
  $effect(() => {
    console.log('=== FLIGHT DEBUG ===');
    console.log('All origins:', Object.keys(routeCosts));
    console.log('Canada in origins:', 'Canada' in routeCosts);
    console.log('Canada flight data:', routeCosts.Canada);
    console.log('US in Canada data:', routeCosts.Canada?.['United States']);
  });
</script>

<div class="debug">
  <h3>Debug Info:</h3>
  <p>Canada exists as origin: {'Canada' in routeCosts ? 'YES' : 'NO'}</p>
  <p>US in Canada data: {routeCosts.Canada?.['United States'] ? 'YES' : 'NO'}</p>
  <p>Canada flight keys: {routeCosts.Canada ? Object.keys(routeCosts.Canada).join(', ') : 'None'}</p>
</div>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
  <div class="max-w-6xl mx-auto">
    
    <!-- Navigation -->
    <button onclick={() => goto('/')} class="group mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm">Back to Main Menu</span>
    </button>

    <!-- Quick Links -->
    <div class="mb-12 text-center">
      <p class="text-gray-700 text-sm mb-4">Check these first if you haven't already</p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/visa')} class="btn-secondary">📝 Visa Requirements</button>
        <button onclick={() => goto('/resonance')} class="btn-secondary">🔍 Destination Finder</button>
      </div>
    </div>

    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-light mb-4 text-gray-900">Flight Costs</h1>
      <p class="text-gray-700 text-lg max-w-2xl mx-auto">
        Smart flight planning with seasonal pricing insights
      </p>
    </div>
    
    <!-- Country Selector -->
    <div class="mb-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg">
      <CountrySelector 
        {selectedCountry}
        {selectedRegion}
        countryData={getAllCountries()}
        onDestinationChange={handleCountryChange}
        onRegionChange={handleRegionChange}
        mode="flight"
      />
    </div>

    <!-- In your main page template section for country details -->
    {#if currentRouteCosts && !isLoading}
      <div class="mb-12 grid md:grid-cols-2 gap-8">
        <!-- Price Analysis -->
        <div class="card">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
            <span class="text-amber-500">💰</span> Price Analysis
          </h3>
          <div class="space-y-3">
            {#if currentRouteCosts.cheapestMonths && currentRouteCosts.cheapestMonths.length > 0}
              <div class="info-card bg-green-50 text-green-800 border border-green-200">
                <span class="font-medium">Cheapest Months:</span>
                <span class="font-bold">{currentRouteCosts.cheapestMonths.join(', ')}</span>
              </div>
            {/if}
            {#if currentRouteCosts.averagePrice}
              <div class="info-card bg-amber-50 text-amber-800 border border-amber-200">
                <span class="font-medium">Average Price:</span>
                <span class="font-bold">${currentRouteCosts.averagePrice}</span>
              </div>
            {/if}
          </div>
        </div>

        <!-- Cities & Tips -->
        <div class="card">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
            <span class="text-blue-500">🏙️</span> Popular Cities
          </h3>
          {#if currentRouteCosts.cities && currentRouteCosts.cities.length > 0}
            <div class="flex flex-wrap gap-2 mb-6">
              {#each currentRouteCosts.cities as city}
                <span class="city-tag">{city}</span>
              {/each}
            </div>
          {:else}
            <p class="text-gray-500 text-sm mb-6">No city data available</p>
          {/if}
          
          <!-- FIX: Changed plantingTips to planningTips -->
          {#if currentRouteCosts.planningTips && currentRouteCosts.planningTips.length > 0}
            <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
              <span class="text-green-500">📝</span> Planning Tips
            </h4>
            <ul class="space-y-2">
              {#each currentRouteCosts.planningTips as tip}
                <li class="tip-item">{tip}</li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    {/if}
    
    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Update the CheapestCountries usage line 158 -->
      <div class="card">
        <CheapestCountries 
          filteredData={currentRouteCosts ? [currentRouteCosts] : []} 
          selectedCountry={selectedCountry} 
        />
      </div>
      
      <!-- Travel Intelligence -->
      <div class="card">
        <h2 class="text-xl font-light mb-4 pb-3 border-b border-gray-200">Travel Intelligence</h2>
        <div class="space-y-4">
          <IntelligenceItem emoji="⏱️" title="Optimal Timing" text="Book 6-8 weeks ahead for best value" />
          <IntelligenceItem emoji="💡" title="Smart Routing" text="Consider nearby airports for savings" />
          <IntelligenceItem emoji="📊" title="Data Insights" text="Seasonal trends affect pricing by 20-40%" />
        </div>
      </div>
    </div>

    <!-- Tips Section -->
    <div class="card mb-12">
      <TipsSection />
    </div>

    <!-- Next Steps -->
    <div class="text-center">
      <p class="text-gray-700 text-sm mb-4">Continue your travel planning</p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/living-costs')} class="btn-secondary">🏠 Living Costs</button>
        <button onclick={() => goto('/digital-nomad')} class="btn-secondary">💻 Digital Nomad Essentials</button>
      </div>
    </div>
  </div>
</div>

<!-- In your main page - add these styles -->
<style>
  .btn-secondary {
    @apply px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium text-sm;
  }
  
  .card {
    @apply bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300;
  }
  
  .info-card {
    @apply flex justify-between items-center p-3 rounded-lg font-medium;
  }
  
  .city-tag {
    @apply px-3 py-1 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 text-sm font-medium;
  }
  
  .tip-item {
    @apply flex items-start gap-2 text-gray-700;
  }
  
  .tip-item::before {
    content: "•";
    @apply text-green-500 mt-1;
  }
</style>
