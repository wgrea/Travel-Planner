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

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8 relative overflow-hidden">
  <!-- Background Elements -->
  <BackgroundElements />
  
  <div class="max-w-7xl mx-auto relative z-10">
    
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

    <!-- === ADD CURRENCY SELECTOR HERE === -->
    <CurrencySelector />

    <!-- Navigation to new pages -->
    <div class="mb-8 flex gap-4 justify-center">
      <button
        onclick={() => goto('/digital-nomad/support')}
        class="px-6 py-3 bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white text-gray-700 font-medium"
      >
        📋 Support
      </button>
      <button
        onclick={() => goto('/digital-nomad/how-to-work-from-anywhere')}
        class="px-6 py-3 bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white text-gray-700 font-medium"
      >
        💼 How to Work From Anywhere
      </button>

      <!-- ADD THIS BUTTON -->
      <button
        onclick={() => goto('/transportation-costs')}
        class="px-6 py-3 bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white text-gray-700 font-medium flex items-center gap-2"
      >
        🚗 Transportation Costs
      </button>
    </div>

    <!-- Before You Start Section -->
    <BeforeYouStart />

    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-light mb-4 text-gray-900 tracking-tight">Digital Nomad</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Workspaces, internet quality, and remote work essentials for productive travel
      </p>
    </div>

    <!-- Country & Location Selector -->
    <div class="mb-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
      <DigitalNomadCountrySelector 
        {countryData}
        on:countryChange={handleCountryChange}
        on:cityChange={handleCityChange}
        on:selectCity={handleSelectCity}
      />
    </div>

    {#if isLoading}
      <div class="text-center py-12">
        <div class="inline-block w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p class="mt-4 text-gray-600">Loading digital nomad data...</p>
      </div>
    {:else if selectedCountry && currentCountryData}
      
      <!-- Work Preference Section -->
      <div class="mb-12 max-w-4xl mx-auto">
        <WorkPreferenceSelector 
          {workPreference}
          on:workPreferenceChange={handleWorkPreferenceChange}
        />
      </div>

      <!-- Add this fixed debug panel -->
      <div class="fixed top-4 right-4 bg-yellow-100 p-4 rounded-lg border-2 border-yellow-400 z-50 max-w-xs">
        <h3 class="font-bold text-yellow-800 text-sm">🛠️ LIVE DEBUG</h3>
        <p class="text-xs">Work Preference: <strong>{workPreference}</strong></p>
        <p class="text-xs">Workspaces: <strong>{currentWorkspaceData.length}</strong></p>
        <div class="text-xs mt-1 max-h-20 overflow-y-auto">
          {#each currentWorkspaceData as space}
            <div class="bg-yellow-200 p-1 mb-1 rounded">• {space.name} ({space.type})</div>
          {:else}
            <div class="text-yellow-600 italic">No matches</div>
          {/each}
        </div>
      </div>

      <MainContent
        {selectedCountry}
        {selectedCity}
        {workPreference}
        countryData={currentCountryData}
        workspaceData={currentWorkspaceData}
        visaData={currentVisaData}
        currency={currentCurrency}
      />

    {:else if selectedCountry}
      <!-- Show message when country is selected but no data available -->
      <div class="text-center py-12 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 max-w-2xl mx-auto">
        <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-xl font-light text-gray-900 mb-2">Limited Data Available</h3>
        <p class="text-gray-600 max-w-md mx-auto">
          We have limited digital nomad information for {selectedCountry}. Some features may not be available.
        </p>
      </div>
    {:else}
      <div class="text-center py-12 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 max-w-2xl mx-auto">
        <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-xl font-light text-gray-900 mb-2">Select a Country</h3>
        <p class="text-gray-600 max-w-md mx-auto">
          Choose a country from the dropdown above to see digital nomad information including internet quality, coworking spaces, visa requirements, and community insights.
        </p>
      </div>
    {/if}

    <!-- Next Steps Section -->
    <NextSteps />

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
            Join local digital nomad communities for networking and coworking opportunities. Use apps like Meetup, Nomad List, or local Facebook groups to connect with other remote workers.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>