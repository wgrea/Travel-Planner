<!-- src/routes/digital-nomad/+page.svelte -->

<!-- 

Should add libraries next 
Also should help people find the cheapest ways to work
How about showing which countries/cities have certain coworking spot memberships

Should maybe change the name of this page to something more specific

I should add:
Ways to Avoid the “Money Loop”
Use free public spaces like libraries, community centers, or hotel lobbies when possible.​

Look for coworking spaces that offer free trial days or discounted memberships for new users.​

Join remote worker communities or nomad groups that share leads on free or low-cost workspaces.​

If you do pay, choose a flexible plan so you can switch to free options when your budget is tight.​


Also less touristy areas are less likely to be paid libraries and coffee shops. 

Coffee Shops
In less touristy or rural areas, coffee shops often don’t have the same pressure to limit laptop use, so remote workers are usually welcome and Wi-Fi is often free.​

In tourist hotspots, many coffee shops restrict laptop use, charge for Wi-Fi, or ban laptops altogether to prioritize short-stay customers and maintain atmosphere.​

Libraries
Libraries, whether urban or rural, are generally free and open to everyone for remote work, but rural libraries may have fewer resources or amenities compared to large city libraries.​

In less touristy areas, libraries are often the main free workspace option and tend to be more relaxed about remote work, while in tourist cities, libraries may be busier or have stricter rules due to higher demand.​


Don't forget to include what memberships one can have and what countries they a good for (can be put in the resonance page)
-->

<!-- src/routes/digital-nomad/+page.svelte -->

<!--  I wonder what can be added as to be shown in the first version vs what is for the second version?
I want users to know where they can work for free or a lower cost

Should add libraries next 
Also should help people find the cheapest ways to work
How about showing which countries/cities have certain coworking spot memberships

Should maybe change the name of this page to something more specific

I should add:
Ways to Avoid the “Money Loop”
Use free public spaces like libraries, community centers, or hotel lobbies when possible.​

Look for coworking spaces that offer free trial days or discounted memberships for new users.​

Join remote worker communities or nomad groups that share leads on free or low-cost workspaces.​

If you do pay, choose a flexible plan so you can switch to free options when your budget is tight.​


Also less touristy areas are less likely to be paid libraries and coffee shops. 

Coffee Shops
In less touristy or rural areas, coffee shops often don’t have the same pressure to limit laptop use, so remote workers are usually welcome and Wi-Fi is often free.​

In tourist hotspots, many coffee shops restrict laptop use, charge for Wi-Fi, or ban laptops altogether to prioritize short-stay customers and maintain atmosphere.​

Libraries
Libraries, whether urban or rural, are generally free and open to everyone for remote work, but rural libraries may have fewer resources or amenities compared to large city libraries.​

In less touristy areas, libraries are often the main free workspace option and tend to be more relaxed about remote work, while in tourist cities, libraries may be busier or have stricter rules due to higher demand.​


Don't forget to include what memberships one can have and what countries they a good for (can be put in the resonance page)
-->

<script lang="ts">
  import { goto } from '$app/navigation';
  import { nomadData, nomadDataByRegion, getAllRegions, getSubregionsByRegion, type Workspace } from '$lib/data/nomadData';
  import { minimalData } from '$lib/data/minimalData';
  
  // Import components
  import DigitalNomadCountrySelector from './components/DigitalNomadCountrySelector.svelte';
  import MainContent from './components/MainContent.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';
  
  // Import reusable components
  import BeforeYouStart from './components/BeforeYouStart.svelte';
  import NextSteps from './components/NextSteps.svelte';
  import WorkPreferenceSelector from './components/WorkPreferenceSelector.svelte';

  // === ADD CURRENCY IMPORTS ===
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';

  // State using $state runes
  let selectedCountry = $state('Thailand');
  let selectedRegion = $state('');
  let selectedCity = $state('Bangkok');
  let workPreference = $state('coworking');
  let isLoading = $state(false);

  // === ADD REACTIVE CURRENCY ===
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
    console.log('Found cities for', country, ':', cities); // Debug log
    return cities;
  }

  // Get regions for the selector
  function getRegions(): string[] {
    return getAllRegions();
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

  function handleWorkPreferenceChange(event: CustomEvent<string>) {
    console.log('🔄 Work preference change event received:', event.detail);
    workPreference = event.detail;
    console.log('🔄 Work preference set to:', workPreference);
  }

  function handleSelectCity(event: CustomEvent<{ city: string; country: string }>) {
    selectedCity = event.detail.city;
    selectedCountry = event.detail.country;
  }

  // === CONVERT REACTIVE DECLARATIONS TO RUNES ===
  
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

  // Get current city data
  function getCurrentCityData() {
    const countryData = getCurrentCountryData();
    const workspaceData = getCurrentWorkspaceData();
    
    return {
      internet: countryData?.internet,
      coworkingSpaces: workspaceData,
      community: countryData?.community,
      safety: countryData?.community?.safety
    };
  }

  function getCurrentWorkspaceData(): Workspace[] {
    console.log('🚨 getCurrentWorkspaceData() CALLED with country:', selectedCountry, 'city:', selectedCity, 'workPref:', workPreference);
    if (!selectedCountry) return [];
    
    // Force fresh lookup every time
    const countryData = nomadData.find(item => item.country === selectedCountry);
    console.log('🔍 Fresh country data lookup:', countryData?.country, 'workspaces:', countryData?.workspaces?.length);
    
    let workspaces = countryData?.workspaces || [];
    console.log('Workspaces for', selectedCountry, ':', workspaces);
    
    console.log('=== FILTERING DEBUG ===');
    console.log('Before filtering - All workspaces:', workspaces.map(w => `${w.name} (${w.city}, ${w.type})`));
    
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
    
    // Filter by work preference
    if (workPreference === 'coworking') {
      workspaces = workspaces.filter((space: Workspace) => space.type === 'coworking');
    } else if (workPreference === 'cafe') {
      workspaces = workspaces.filter((space: Workspace) => space.type === 'cafe');
    } else if (workPreference === 'hostel') {
      workspaces = workspaces.filter((space: Workspace) => space.type === 'hostel');
    } else if (workPreference === 'hotel') {
      workspaces = workspaces.filter((space: Workspace) => space.type === 'hotel');
    }
    
    console.log('After work preference filter:', workspaces.map(w => `${w.name} (${w.type})`));
    console.log('=====================');
    
    return workspaces;
  }

  // Use $derived for computed values
  const countryData = $derived(getAllCountries());
  const currentCountryData = $derived(getCurrentCountryData());
  const currentVisaData = $derived(selectedCountry ? minimalData.countries[selectedCountry.toLowerCase()] : null);
  const currentWorkspaceData = $derived(getCurrentWorkspaceData());

  // Use $effect for debugging and side effects
  $effect(() => {
    console.log('🔄 currentWorkspaceData UPDATED:', currentWorkspaceData.length, 'Country:', selectedCountry, 'City:', selectedCity, 'WorkPref:', workPreference);
  });

  $effect(() => {
    console.log('📢 workPreference REACTIVE UPDATE:', workPreference);
  });

  $effect(() => {
    console.log('🔄 PAGE DATA CHANGED - Country:', selectedCountry, 'City:', selectedCity, 'WorkPref:', workPreference, 'Workspaces:', currentWorkspaceData.length);
  });

  // Add this to debug workspace types
  function debugWorkspaceTypes() {
    const countryData = nomadData.find(item => item.country === selectedCountry);
    const workspaces = countryData?.workspaces || [];
    
    console.log('=== WORKSPACE DEBUG ===');
    console.log('Selected country:', selectedCountry);
    console.log('Selected city:', selectedCity);
    console.log('Work preference:', workPreference);
    
    // Group workspaces by type and city - FIXED: Properly type the object
    const byType: Record<string, string[]> = {};
    workspaces.forEach(space => {
      if (!byType[space.type]) byType[space.type] = [];
      byType[space.type].push(`${space.name} (${space.city})`);
    });
    
    console.log('Workspaces by type:', byType);
    console.log('All workspaces:', workspaces);
    console.log('=====================');
  }

  // Call it when relevant data changes
  $effect(() => {
    if (selectedCountry) {
      debugWorkspaceTypes();
    }
  });

  // VIETNAM DEBUG CODE using $effect
  $effect(() => {
    if (selectedCountry === 'Vietnam') {
      console.log('🔍 === VIETNAM DEBUG ===');
      
      // Check what's in nomadData
      const allCountries = nomadData.map(item => item.country);
      console.log('All countries in nomadData:', allCountries);
      
      const vietnamData = nomadData.find(item => item.country === 'Vietnam');
      console.log('Vietnam data found:', vietnamData);
      console.log('Vietnam workspaces:', vietnamData?.workspaces?.map(w => `${w.name} (${w.city})`));
      
      // Check current workspace data
      console.log('Current workspaceData:', currentWorkspaceData.map(w => `${w.name} (${w.city}, ${w.type})`));
      
      console.log('🔍 =====================');
    }
  });

  // I don't think this is necessary but the whole page stops working when I comment this entire function out
  function getVisaData() {
    return selectedCountry ? minimalData.countries[selectedCountry.toLowerCase()] : null;
  } 

  // Add debug logging for currency changes
  $effect(() => {
    console.log('🌍 Main page currency changed:', currentCurrency);
  });

  // Add debug logging for workspace data
  $effect(() => {
    console.log('🌍 Workspace data updated:', currentWorkspaceData.length, 'items');
  });
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
    
    <!-- Back Button - Tech glass effect -->
    <button onclick={() => goto('/')} 
      class="group mb-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm 
      px-4 py-2.5 rounded-xl border border-indigo-200/50 text-indigo-800 hover:text-indigo-900 
      hover:bg-white/30 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm">Back to Main Menu</span>
    </button>

    <!-- Currency Selector - Tech style -->
    <div class="mb-8 bg-white/30 backdrop-blur-sm rounded-xl border border-indigo-200/50 p-4 inline-block">
      <CurrencySelector />
    </div>

    <!-- Navigation - Tech badge style -->
    <div class="mb-8 flex gap-3 justify-center flex-wrap">
      <button onclick={() => goto('/digital-nomad/support')}
        class="px-5 py-2.5 bg-white/30 backdrop-blur-sm rounded-lg border border-indigo-200/50 
        text-indigo-700 hover:border-indigo-300 hover:bg-white/50 hover:shadow-md hover:scale-105 
        transition-all duration-300 font-medium text-sm">
        📋 Support
      </button>
      <button onclick={() => goto('/digital-nomad/how-to-work-from-anywhere')}
        class="px-5 py-2.5 bg-white/30 backdrop-blur-sm rounded-lg border border-indigo-200/50 
        text-indigo-700 hover:border-indigo-300 hover:bg-white/50 hover:shadow-md hover:scale-105 
        transition-all duration-300 font-medium text-sm">
        💼 How to Work From Anywhere
      </button>
      <button onclick={() => goto('/transportation-costs')}
        class="px-5 py-2.5 bg-white/30 backdrop-blur-sm rounded-lg border border-indigo-200/50 
        text-indigo-700 hover:border-indigo-300 hover:bg-white/50 hover:shadow-md hover:scale-105 
        transition-all duration-300 font-medium text-sm flex items-center gap-2">
        🚗 Transportation Costs
      </button>
    </div>

    <!-- Before You Start - Tech card -->
    <div class="mb-8 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 backdrop-blur-sm 
      rounded-xl border border-indigo-200/50 p-5 max-w-2xl mx-auto">
      <BeforeYouStart />
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
      
      <!-- Work Preference Section - Tech toggle -->
      <div class="mb-12 max-w-4xl mx-auto">
        <div class="bg-white/30 backdrop-blur-md rounded-2xl border border-indigo-200/50 p-6">
          <WorkPreferenceSelector 
            {workPreference}
            on:workPreferenceChange={handleWorkPreferenceChange}
          />
        </div>
      </div>

      <!-- Debug panel (keep but style tech) -->
      <div class="fixed top-4 right-4 bg-gradient-to-br from-yellow-100 to-amber-100 backdrop-blur-sm 
        p-4 rounded-xl border-2 border-yellow-400/50 z-50 max-w-xs shadow-xl">
        <h3 class="font-bold text-amber-800 text-sm flex items-center gap-2">
          <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
          LIVE DEBUG
        </h3>
        <div class="space-y-1 mt-2 text-xs">
          <div class="flex justify-between">
            <span class="text-amber-700">Work Preference:</span>
            <span class="font-bold text-amber-900">{workPreference}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-amber-700">Workspaces:</span>
            <span class="font-bold text-amber-900">{currentWorkspaceData.length}</span>
          </div>
          <div class="mt-2 max-h-20 overflow-y-auto">
            {#each currentWorkspaceData as space}
              <div class="bg-amber-200/30 p-1.5 mb-1 rounded text-amber-800 text-xs">
                • {space.name} ({space.type})
              </div>
            {:else}
              <div class="text-amber-600 italic text-xs">No matches</div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Main Content - Tech cards -->
      <div class="bg-white/30 backdrop-blur-md rounded-2xl border border-indigo-200/50 
        shadow-xl overflow-hidden mb-8">
        <MainContent
          {selectedCountry}
          {selectedCity}
          {workPreference}
          countryData={currentCountryData}
          workspaceData={currentWorkspaceData}
          visaData={currentVisaData}
          currency={currentCurrency}
        />
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

    <!-- Next Steps Section - Tech call-to-action -->
    <div class="mt-8 bg-gradient-to-r from-indigo-100/60 to-purple-100/60 backdrop-blur-sm 
      rounded-2xl border border-indigo-200/50 p-8">
      <div class="text-center">
        <div class="flex items-center justify-center gap-4 mb-6">
          <div class="w-8 h-1 bg-indigo-400 rounded-full"></div>
          <h3 class="text-lg font-semibold text-indigo-900">Continue Your Journey</h3>
          <div class="w-8 h-1 bg-purple-400 rounded-full"></div>
        </div>
        <NextSteps />
      </div>
    </div>

    <!-- Remote Work Tips - Tech insight card -->
    <div class="mt-8 p-6 bg-gradient-to-br from-white/40 to-indigo-50/40 backdrop-blur-md 
      rounded-2xl border border-indigo-200/50 max-w-2xl mx-auto">
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

    <!-- Tech Tools Grid -->
    <div class="mt-12 pt-8 border-t border-indigo-200/50">
      <p class="text-indigo-700 text-sm font-medium text-center mb-6 uppercase tracking-wider">
        Essential Tech Tools
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {#each [
          { icon: '📡', name: 'Hotspot', desc: 'Portable WiFi' },
          { icon: '🔋', name: 'Power Bank', desc: 'Portable charging' },
          { icon: '🔌', name: 'Adapters', desc: 'Universal plugs' },
          { icon: '🎧', name: 'Headphones', desc: 'Noise canceling' }
        ] as tool}
          <div class="p-4 bg-white/30 backdrop-blur-sm rounded-xl border border-indigo-200/50 
            hover:border-indigo-300/70 hover:bg-white/50 hover:shadow-sm transition-all duration-200 text-center">
            <div class="text-2xl mb-2">{tool.icon}</div>
            <div class="text-sm font-medium text-indigo-800">{tool.name}</div>
            <div class="text-xs text-indigo-600/80 mt-1">{tool.desc}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

