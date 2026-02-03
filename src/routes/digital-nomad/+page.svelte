<!-- src/routes/digital-nomad/+page.svelte - ENHANCED VERSION -->
<script lang="ts">
  import { nomadData } from '$lib/data/nomadData';
  import { selectedCurrency } from '$lib/stores/currency';
  import { globalCoworkingMemberships } from '$lib/data/globalCoworkingMemberships';
  
  import PageWrapper from '$lib/components/PageWrapper.svelte';

  // Import available components
  import MainContent from './components/MainContent.svelte';
  import WorkspaceFinder from './components/WorkspaceFinder.svelte';
  import CoworkingSpacesCard from './components/CoworkingSpacesCard.svelte';
  import CoworkingMemberships from './components/CoworkingMemberships.svelte';
  import GlobalMemberships from './components/GlobalMemberships.svelte';
  import CostSavingTips from './components/CostSavingTips.svelte';
  import FreeWorkOptions from './components/FreeWorkOptions.svelte';
  import BeforeYouStart from './components/BeforeYouStart.svelte';
  import NextSteps from './components/NextSteps.svelte';

  // State
  let selectedCountry = $state('Azerbaijan');
  let selectedCity = $state(''); // Initialize as empty
  let workPreference = $state('already_paid');

  // Derived values
  const currentCurrency = $derived($selectedCurrency);
  const currentCountryData = $derived(nomadData.find(c => c.country === selectedCountry));
  
  // Get all countries for simple selector
  const allCountries = Array.from(new Set(nomadData
    .filter(item => item && item.country)
    .map(item => item.country)
  )).sort();
  
  // Get all cities for selected country (from workspaces)
  function getAllCitiesForCountry(country: string): string[] {
    const countryData = nomadData.find(item => item.country === country);
    if (!countryData) return [];
    
    const cities = new Set<string>();
    
    // Add cities from workspaces
    if (countryData.workspaces) {
      countryData.workspaces.forEach(workspace => {
        if (workspace.city) cities.add(workspace.city);
      });
    }
    
    // Add cities from free workspaces
    if (countryData.freeWorkspaces) {
      countryData.freeWorkspaces.forEach(workspace => {
        if (workspace.city) cities.add(workspace.city);
      });
    }
    
    // Add predefined cities if available
    if (countryData.cities) {
      countryData.cities.forEach(city => cities.add(city));
    }
    
    return Array.from(cities).sort();
  }
  
  // Handle city selection when country changes
  $effect(() => {
    if (selectedCountry) {
      const cities = getAllCitiesForCountry(selectedCountry);
      
      // If current city not in new country's cities, reset or use first city
      if (selectedCity && !cities.includes(selectedCity)) {
        selectedCity = cities.length > 0 ? cities[0] : '';
      }
      
      // If no city selected and country has cities, select first one
      if (!selectedCity && cities.length > 0) {
        selectedCity = cities[0];
      }
    }
  });
  
  // Generate unique IDs for accessibility
  const countrySelectId = 'country-select-' + Math.random().toString(36).substr(2, 9);
  const citySelectId = 'city-select-' + Math.random().toString(36).substr(2, 9);
</script>

<PageWrapper
  title="Digital Nomad Workspace Finder"
  subtitle="Find hostels, hotels, and coworking spaces with great work setups"
  mode="nomad"
>
  <!-- Currency Selector on lib/component/PageWrapper.svelte-->

  <!-- Before You Start Tips -->
  <div class="mb-8">
    <BeforeYouStart />
  </div>

<!-- Remove the city selector section -->
  <!-- Simple Country/City Selector -->
  <div class="mb-12 bg-white rounded-xl border border-gray-200 p-6">
    <div class="grid grid-cols-1 md:grid-cols-1 gap-6"> <!-- Change to 1 column -->
      <div>
        <label for={countrySelectId} class="block text-sm font-medium text-gray-700 mb-2">
          Select Country
        </label>
        <select 
          id={countrySelectId}
          bind:value={selectedCountry}
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {#each allCountries as country}
            <option value={country}>{country}</option>
          {/each}
        </select>
      </div>
      <!-- REMOVE the city selector -->
    </div>
  </div>

  <!-- Main Content -->
  {#if selectedCountry && currentCountryData}
    <div class="space-y-8">
      <!-- Main Overview -->
      <MainContent
        {selectedCountry}
        selectedCity=""
        countryData={currentCountryData}
        visaData={null}
        currency={currentCurrency}
      />

      <!-- Another WorkspaceFinder Creates a duplicate. I wonder where the other one that is on the page is comming from? -->

      <!-- Memberships Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Local Coworking Memberships -->
        {#if currentCountryData.coworkingMemberships?.length}
          <CoworkingMemberships
            {selectedCountry}
            {selectedCity}
            currency={currentCurrency}
            memberships={currentCountryData.coworkingMemberships}
          />
        {/if}
        
        <!-- Cost Saving Tips -->
        <CostSavingTips
          {selectedCountry}
          {selectedCity}
          {workPreference}
          isTouristArea={currentCountryData.touristyCities?.includes(selectedCity) || false}
          currency={currentCurrency}
        />
      </div>

      <!-- Free Work Options -->
      {#if currentCountryData.freeWorkspaces && currentCountryData.freeWorkspaces.length > 0}
        <FreeWorkOptions
          {selectedCountry}
          {selectedCity}
          currency={currentCurrency}
        />
      {/if}

      <!-- Global Memberships -->
      <GlobalMemberships 
        currency={currentCurrency}
        memberships={globalCoworkingMemberships}
      />

      <!-- Next Steps -->
      <NextSteps />
    </div>

  {:else if selectedCountry}
    <!-- No data for selected country -->
    <div class="text-center py-16 bg-blue-50 rounded-xl border border-blue-200">
      <div class="text-4xl mb-6">🏝️</div>
      <h3 class="text-xl font-semibold text-blue-900 mb-3">No Data Available</h3>
      <p class="text-blue-700 max-w-md mx-auto">
        No digital nomad data found for {selectedCountry}. Try selecting a different country.
      </p>
    </div>

  {:else}
    <!-- No country selected -->
    <div class="text-center py-16 bg-blue-50 rounded-xl border border-blue-200">
      <div class="text-6xl mb-8">💻</div>
      <h3 class="text-2xl font-light text-blue-900 mb-4">Select Your Destination</h3>
      <p class="text-blue-700 max-w-md mx-auto mb-8 text-lg leading-relaxed">
        Choose a country to explore digital nomad essentials.
      </p>
    </div>
  {/if}
</PageWrapper>