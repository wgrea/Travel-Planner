<!-- src/routes/digital-nomad/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { nomadData, nomadDataByRegion, getAllRegions, getSubregionsByRegion, type Workspace } from '$lib/data/nomadData';
  import { minimalData } from '$lib/data/minimalData';
  import { globalCoworkingMemberships } from '$lib/data/globalCoworkingMemberships';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  
  // Import components
  import DigitalNomadCountrySelector from './components/DigitalNomadCountrySelector.svelte';
  import MainContent from './components/MainContent.svelte';
  
  // Import reusable components
  import NextSteps from './components/NextSteps.svelte';

  // Currency imports
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';

  // Digital nomad components
  import CostSavingTips from './components/CostSavingTips.svelte';
  import FreeWorkOptions from './components/FreeWorkOptions.svelte';
  import CoworkingMemberships from './components/CoworkingMemberships.svelte';
  import GlobalMemberships from './components/GlobalMemberships.svelte';

  // State using $state runes
  let selectedCountry = $state('Thailand');
  let workPreference = $state('zero_spend'); // Default
  let selectedRegion = $state('');
  let selectedCity = $state('Bangkok');
  let isLoading = $state(false);

  // Reactive currency
  const currentCurrency = $derived($selectedCurrency);

  // Get country data for selector
  function getAllCountries(): { country: string; region: string; cities: string[] }[] {
    const countries: { country: string; region: string; cities: string[] }[] = [];
    
    // Process nomadDataByRegion to get countries with regions
    nomadDataByRegion.forEach(regionData => {
      if (regionData.subregions) {
        regionData.subregions.forEach(subregion => {
          subregion.countries.forEach(country => {
            if (country && country.country) {
              countries.push({
                country: country.country,
                region: `${regionData.region} - ${subregion.subregion}`,
                cities: getCitiesForCountry(country.country)
              });
            }
          });
        });
      } else if (regionData.countries) {
        regionData.countries.forEach(country => {
          if (country && country.country) {
            countries.push({
              country: country.country,
              region: regionData.region,
              cities: getCitiesForCountry(country.country)
            });
          }
        });
      }
    });
    
    // FIX: Also add countries from the flat nomadData array as fallback
    nomadData.forEach(country => {
      if (country && country.country) {
        const exists = countries.find(c => c.country === country.country);
        if (!exists) {
          countries.push({
            country: country.country,
            region: 'Unknown', // Default region
            cities: getCitiesForCountry(country.country)
          });
        }
      }
    });
    
    return countries.sort((a, b) => a.country.localeCompare(b.country));
  }

  // Get cities for selected country
  function getCitiesForCountry(country: string): string[] {
    const fromNomadData = nomadData.find(item => item.country === country);
    const cities = fromNomadData?.cities || [];
    return cities;
  }

  // Event handlers
  function handleCountryChange(event: CustomEvent<string>) {
    selectedCountry = event.detail;
    const cities = getCitiesForCountry(selectedCountry);
    
    console.log('Country changed to:', selectedCountry, 'Available cities:', cities);
    
    if (cities.length > 0) {
      // Don't use setTimeout - set directly but ignore any empty city events
      selectedCity = cities[0];
      console.log('City set to first available:', selectedCity);
    } else {
      selectedCity = '';
      console.log('No cities available for country');
    }
  }

  function handleRegionChange(event: CustomEvent<string>) {
    selectedRegion = event.detail;
  }

  function handleCityChange(event: CustomEvent<string>) {
    // Ignore empty city values
    if (!event.detail || event.detail.trim() === '') {
      console.log('Ignoring empty city change');
      return;
    }
    
    console.log('City change event received:', event.detail);
    selectedCity = event.detail;
    console.log('Selected city set to:', selectedCity);
  }

  function handleSelectCity(event: CustomEvent<{ city: string; country: string }>) {
    selectedCity = event.detail.city;
    selectedCountry = event.detail.country;
  }

  // Use $effect for side effects
  $effect(() => {
    if (selectedCountry) {
      isLoading = true;
      const timer = setTimeout(() => isLoading = false, 500);
      return () => clearTimeout(timer);
    }
  });

  // Get current country data from nomadData
  function getCurrentCountryData() {
    return nomadData.find(item => item && item.country === selectedCountry);
  }

  // Get current workspace data
  function getCurrentWorkspaceData(): Workspace[] {
    console.log('🚨 getCurrentWorkspaceData() CALLED with country:', selectedCountry, 'city:', selectedCity, 'workPref:', workPreference);
    if (!selectedCountry) return [];
    
    // Force fresh lookup every time
    const countryData = nomadData.find(item => item.country === selectedCountry);

    let workspaces = countryData?.workspaces || [];

    // Filter by city if selected
    if (selectedCity) {
      console.log('Filtering by city:', selectedCity);
      workspaces = workspaces.filter((space: Workspace) => {
        const matches = space.city === selectedCity;
        console.log(`  ${space.name} (${space.city}) matches ${selectedCity}: ${matches}`);
        return matches;
      });
    }
    
    console.log('After city filter:', workspaces.map(w => `${w.name} (${w.type})`));
    
    // REMOVE OLD WORK PREFERENCE FILTERING - MainContent will handle budget filtering
    // We'll pass all workspaces and let MainContent filter by budget category
    
    console.log('Returning workspaces:', workspaces.length);
    console.log('=====================');
    
    return workspaces;
  }

  // Use $derived for computed values
  const countryData = $derived(getAllCountries());
  const currentCountryData = $derived(getCurrentCountryData());
  const currentVisaData = $derived(selectedCountry ? minimalData.countries[selectedCountry.toLowerCase()] : null);

</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-4 py-8 relative overflow-hidden">
  <!-- Subtle grid pattern overlay (tech vibe) -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Grid pattern -->
    <div class="absolute inset-0" style="
      background-image: 
        linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
    "></div>
    
    <!-- Tech nodes/connection points -->
    <div class="absolute top-32 left-[20%] w-4 h-4 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 
      rounded-full animate-pulse-tech [animation-delay:0s]"></div>
    <div class="absolute top-48 right-[25%] w-3 h-3 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 
      rounded-full animate-pulse-tech [animation-delay:1s]"></div>
    <div class="absolute bottom-40 left-[35%] w-4 h-4 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 
      rounded-full animate-pulse-tech [animation-delay:2s]"></div>
    
    <!-- Wifi signal arcs -->
    <div class="absolute top-1/4 right-[15%]">
      <div class="w-24 h-12 border-t-2 border-r-2 border-indigo-300/20 rounded-tr-full"></div>
    </div>
    <div class="absolute bottom-1/3 left-[10%]">
      <div class="w-20 h-10 border-t-2 border-l-2 border-purple-300/20 rounded-tl-full"></div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto relative z-10">

    <!-- Currency Selector - Tech style -->
    <div class="mb-8 bg-white/30 backdrop-blur-sm rounded-xl border border-indigo-200/50 p-4 inline-block">
      <CurrencySelector />
    </div>

    <!-- Header - Tech-forward typography -->
    <div class="mb-12 text-center">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br 
        from-indigo-400/20 to-purple-400/20 backdrop-blur-sm border border-indigo-300/30 mb-6">
        <div class="text-4xl">💻</div>
      </div>
      
      <h1 class="text-5xl font-light mb-4 text-indigo-950 tracking-tight">
        Digital Nomad Toolkit
      </h1>
      <p class="text-indigo-700/80 text-lg font-light max-w-2xl mx-auto">
        Workspaces, connectivity, and remote work essentials for the modern tech professional
      </p>
    </div>

    <!-- Country & Location Selector - Tech dashboard -->
    <div class="mb-12 bg-white/30 backdrop-blur-md rounded-2xl border border-indigo-200/50 
      shadow-xl hover:shadow-2xl transition-shadow duration-500 max-w-4xl mx-auto overflow-hidden">
      <div class="p-8">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
          <h2 class="text-xl font-semibold text-indigo-900">Location Dashboard</h2>
        </div>
        
        <DigitalNomadCountrySelector 
          {countryData}
          on:countryChange={handleCountryChange}
          on:cityChange={handleCityChange}
          on:selectCity={handleSelectCity}
        />
      </div>
    </div>

    {#if isLoading}
      <div class="text-center py-12">
        <div class="inline-block w-8 h-8 border-2 border-indigo-300 border-t-indigo-600 rounded-full animate-spin"></div>
        <p class="mt-4 text-indigo-600 font-light">Loading digital nomad insights...</p>
      </div>
    {:else if selectedCountry && currentCountryData}  

  <!-- Main Content Card -->
  <div class="tech-card mb-8">
    <MainContent
      {selectedCountry}
      {selectedCity}
      countryData={currentCountryData}
      visaData={currentVisaData}
      currency={currentCurrency}
    />
  </div>

  <!-- Space between sections - add this wrapper -->
  <div class="space-y-8">
    
    <!-- Country-specific Coworking Memberships -->
    <div class="tech-card">
      <CoworkingMemberships
        {selectedCountry}
        {selectedCity}
        currency={currentCurrency}
        memberships={currentCountryData?.coworkingMemberships || []} 
      />
    </div>

    <!-- Global Coworking Memberships -->
    <div class="tech-card">
      <GlobalMemberships 
        currency={currentCurrency}
        memberships={globalCoworkingMemberships} 
      />
    </div>

    <!-- Cost Saving Tips -->
    <div class="tech-card">
      <CostSavingTips
        {selectedCountry}
        {selectedCity}
        {workPreference}
        isTouristArea={currentCountryData.touristyCities?.includes(selectedCity)}
        currency={currentCurrency}
      />
    </div>
    
    <!-- Free Work Options -->
    {#if currentCountryData.freeWorkspaces && currentCountryData.freeWorkspaces.length > 0}
      <div class="tech-card border-emerald-200/50">
        <FreeWorkOptions
          {selectedCountry}
          {selectedCity}
          currency={currentCurrency}
        />
      </div>
    {/if}

    <!-- Remote Work Tips - Tech insight card -->
    <div class="tech-card max-w-2xl mx-auto">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-xl 
          flex items-center justify-center text-indigo-600 flex-shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div class="text-left">
          <p class="font-semibold text-indigo-900">Productivity Protocol</p>
          <p class="text-sm text-indigo-700/80 mt-2 leading-relaxed">
            Connect with local tech communities through platforms like Meetup, Nomad List, or dedicated Slack channels. 
            Regular coworking sessions and networking events can significantly boost productivity and professional growth.
          </p>
        </div>
      </div>
    </div>
  </div>

    {:else if selectedCountry}
      <!-- No data state - Tech info card -->
      <div class="text-center py-12 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 
        backdrop-blur-md rounded-2xl border border-indigo-200/50 max-w-2xl mx-auto">
        <div class="w-20 h-20 mx-auto mb-6 text-indigo-400/50">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="opacity-60">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-xl font-light text-indigo-900 mb-3">Data Loading</h3>
        <p class="text-indigo-700/80 max-w-md mx-auto font-light">
          Gathering digital nomad insights for {selectedCountry}. Data may be limited for this location.
        </p>
      </div>
    {:else}
      <!-- Select country state - Tech welcome card -->
      <div class="text-center py-16 bg-gradient-to-br from-white/40 to-indigo-50/40 backdrop-blur-md 
        rounded-2xl border border-indigo-200/50 max-w-2xl mx-auto">
        <div class="w-24 h-24 mx-auto mb-8 text-indigo-300">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="opacity-40">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-2xl font-light text-indigo-900 mb-4">Select Your Base</h3>
        <p class="text-indigo-700/80 max-w-md mx-auto mb-8 text-lg leading-relaxed">
          Choose a country to explore digital nomad essentials: internet quality, coworking spaces, visa requirements, and local communities.
        </p>
        <div class="inline-flex items-center gap-3 px-6 py-3 bg-indigo-200/30 rounded-2xl 
          text-indigo-700 border border-indigo-300/50 backdrop-blur-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <span class="font-medium">Choose a destination to begin</span>
        </div>
      </div>
    {/if}
  </div>
</div>