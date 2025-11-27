<!-- src/routes/digital-nomad/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { nomadData } from '$lib/data/nomadData';
  import CitySelector from '$lib/components/CitySelector.svelte';
  import type { CountryData } from '$lib/components/CountrySelector.svelte';
  
  // Import components
  import WorkPreferenceSelector from './components/WorkPreferenceSelector.svelte';
  import InternetQualityCard from './components/InternetQualityCard.svelte';
  import CoworkingSpacesCard from './components/CoworkingSpacesCard.svelte';
  import VisaInfoCard from './components/VisaInfoCard.svelte';
  import CommunitySafetyCard from './components/CommunitySafetyCard.svelte';
  import PopularCoworkingSpaces from './components/PopularCoworkingSpaces.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';
  
  // ADD THE MISSING VARIABLES
  let selectedCountry: string = 'Thailand';
  let selectedRegion: string = '';
  let selectedCity: string = 'Bangkok';
  let workPreference: string = 'coworking';
  let isLoading = false;

  // Get country data for selector from nomadData
  function getAllCountries(): { country: string; region: string; cities?: string[] }[] {
    return nomadData.map(item => ({
      country: item.country,
      region: '' // We don't have regions in nomadData, so leave empty
    })).sort((a, b) => a.country.localeCompare(b.country));
  }

  // ADD THE MISSING FUNCTIONS
  function handleCountryChange(country: string) {
    // Optional: Add any country-specific logic here
    console.log('Country changed to:', country);
  }

  function handleRegionChange(region: string) {
    // Optional: Add any region-specific logic here  
    console.log('Region changed to:', region);
  }

  function handleCityChange(city: string) {
    // Optional: Add any city-specific logic here
    console.log('City changed to:', city);
  }

  // Load initial data
  $: if (selectedCountry) {
    isLoading = true;
    setTimeout(() => isLoading = false, 500);
  }
</script>

<!-- I need to know where to put this code. This was on the very top for some reason. 

Rest of your template remains the same, just use the new CitySelector 
<div class="mb-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
  <CitySelector 
    bind:selectedCountry
    bind:selectedRegion
    bind:selectedCity
    countryData={getAllCountries()}
    onCountryChange={handleCountryChange}
    onRegionChange={handleRegionChange}
    onCityChange={handleCityChange}
    showQuickFilters={true}
    showCityInfo={true}
    variant="default"
  />
</div>

Update all components to also receive selectedCity
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
  <InternetQualityCard {selectedCountry} {selectedCity} />
  <CoworkingSpacesCard {selectedCountry} {selectedCity} />
  <VisaInfoCard {selectedCountry} />
  <CommunitySafetyCard {selectedCountry} {selectedCity} />
</div>

<PopularCoworkingSpaces 
  {selectedCountry}
  {selectedCity}
  {workPreference}
/>

-->

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
    <!-- Now just one component does everything! -->
    <div class="mb-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CitySelector 
        bind:selectedCountry
        bind:selectedRegion
        bind:selectedCity
        countryData={getAllCountries()}
        onCountryChange={handleCountryChange}
        onRegionChange={handleRegionChange}
        onCityChange={handleCityChange}
        showQuickFilters={true}
        showCityInfo={true}
        variant="default"
      />
    </div>

    {#if isLoading}
      <div class="text-center py-12">
        <div class="inline-block w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p class="mt-4 text-gray-600">Loading digital nomad data...</p>
      </div>
    {:else if selectedCountry}
      
      <!-- Work Preference Section -->
      <div class="mb-12">
        <WorkPreferenceSelector 
          bind:workPreference
        />
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <InternetQualityCard {selectedCountry} {selectedCity} />
        <CoworkingSpacesCard {selectedCountry} {selectedCity} />
        <VisaInfoCard {selectedCountry} />
        <CommunitySafetyCard {selectedCountry} {selectedCity} />
      </div>

      <!-- Popular Coworking Spaces -->
      <div class="mb-12">
        <PopularCoworkingSpaces 
          {selectedCountry}
          {selectedCity}
          {workPreference}
        />
      </div>

    {:else}
      <div class="text-center py-12 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200">
        <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-xl font-light text-gray-900 mb-2">Select a Country</h3>
        <p class="text-gray-600 max-w-md mx-auto">
          Choose a country from the dropdown above to see digital nomad information.
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