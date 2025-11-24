<!-- src/routes/digital-nomad/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { minimalData } from '$lib/data/minimalData';
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import type { CountryData } from '$lib/components/CountrySelector.svelte';
  
  // Import components
  import LocationSelector from './components/LocationSelector.svelte';
  import WorkPreferenceSelector from './components/WorkPreferenceSelector.svelte';
  import InternetQualityCard from './components/InternetQualityCard.svelte';
  import CoworkingSpacesCard from './components/CoworkingSpacesCard.svelte';
  import VisaInfoCard from './components/VisaInfoCard.svelte';
  import CommunitySafetyCard from './components/CommunitySafetyCard.svelte';
  import PopularCoworkingSpaces from './components/PopularCoworkingSpaces.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';
  
  let selectedCountry: string = 'Thailand';
  let selectedRegion: string = 'Southeast Asia';
  let selectedCity: string = 'Bangkok';
  let workPreference: string = 'coworking';
  let isLoading = false;

  // Add city options for each country
  const cityOptions: Record<string, string[]> = {
    'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket', 'Koh Samui'],
    'Vietnam': ['Ho Chi Minh', 'Hanoi', 'Da Nang'],
    'Indonesia': ['Bali', 'Jakarta'],
    'Portugal': ['Lisbon', 'Porto'],
    'Colombia': ['Medellin', 'Bogota'],
    'Spain': ['Barcelona', 'Madrid', 'Valencia'],
    'Mexico': ['Mexico City', 'Playa del Carmen', 'Tulum']
  };

  // Get country data for selector
  function getAllCountries(): CountryData[] {
    const allCountries: CountryData[] = [];
    
    Object.entries(minimalData.countries).forEach(([countryCode, countryData]) => {
      allCountries.push({
        country: countryData.name,
        region: countryData.region
      });
    });
    
    return allCountries.sort((a, b) => a.country.localeCompare(b.country));
  }

  function getCountriesByRegion(regionName: string): CountryData[] {
    return getAllCountries().filter(country => country.region === regionName);
  }

  function handleCountryChange(country: string) {
    selectedCountry = country;
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
      selectedCountry = getAllCountries()[0]?.country || '';
    }
  }

  // Get current country data
  $: currentCountryData = minimalData.countries[selectedCountry.toLowerCase()];
  
  // Update cities when country changes
  $: availableCities = cityOptions[selectedCountry] || ['Bangkok'];
  $: if (!availableCities.includes(selectedCity)) {
    selectedCity = availableCities[0];
  }
  
  // Load initial data
  $: if (selectedCountry) {
    isLoading = true;
    setTimeout(() => isLoading = false, 500);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8 relative overflow-hidden">
  <!-- Background Elements -->
  <BackgroundElements />
  
  <div class="max-w-6xl mx-auto relative z-10">
    
    <!-- Back Button -->
    <button
      on:click={() => goto('/')}
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
        Essential tools and resources for remote work
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button on:click={() => goto('/living-costs')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          🏠 Living Costs
        </button>
        <button on:click={() => goto('/visa')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          📝 Visa Requirements
        </button>
        <button on:click={() => goto('/filters')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          🔍 Destination Finder
        </button>
      </div>
    </div>

    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-light mb-4 text-gray-900 tracking-tight">Digital Nomad</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Workspaces, internet quality, and remote work essentials for productive travel
      </p>
    </div>

    <!-- Country & Location Selector Section -->
    <div class="mb-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CountrySelector 
        selectedDestination={selectedCountry}
        selectedRegion={selectedRegion}
        countryData={getAllCountries()}
        onDestinationChange={handleCountryChange}
        onRegionChange={handleRegionChange}
      />
      
      <div class="mt-6">
        <LocationSelector 
          bind:selectedCountry
          bind:selectedCity
          {availableCities}
        />
      </div>
    </div>

    {#if isLoading}
      <div class="text-center py-12">
        <div class="inline-block w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p class="mt-4 text-gray-600">Loading digital nomad data...</p>
      </div>
    {:else if currentCountryData}
      
      <!-- Work Preference Section -->
      <div class="mb-12">
        <WorkPreferenceSelector 
          bind:workPreference
        />
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <InternetQualityCard />
        <CoworkingSpacesCard />
        <VisaInfoCard />
        <CommunitySafetyCard />
      </div>

      <!-- Popular Coworking Spaces -->
      <div class="mb-12">
        <PopularCoworkingSpaces />
      </div>

    {:else}
      <div class="text-center py-12 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200">
        <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-xl font-light text-gray-900 mb-2">Digital Nomad Data Unavailable</h3>
        <p class="text-gray-600 max-w-md mx-auto">
          We're currently gathering digital nomad information for {selectedCountry}. 
          Check back soon or explore other destinations.
        </p>
      </div>
    {/if}

    <!-- Next Steps Section -->
    <div class="mt-12 text-center">
      <p class="text-gray-700 text-sm font-light mb-4 tracking-wide">
        Continue planning your remote work journey
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button on:click={() => goto('/living-costs')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          💰 Cost Calculator
        </button>
        <button on:click={() => goto('/planning')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          📅 Trip Planning
        </button>
        <button on:click={() => goto('/quick-plan')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          ⚡ Quick Plan
        </button>
      </div>
    </div>

    <!-- Remote Work Tips -->
    <div class="mt-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-blue-200 max-w-2xl mx-auto">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div class="text-left">
          <p class="font-medium text-gray-900">Productivity Tip</p>
          <p class="text-sm text-gray-600 mt-1">
            Join local digital nomad communities for networking and coworking opportunities
          </p>
        </div>
      </div>
    </div>
  </div>
</div>