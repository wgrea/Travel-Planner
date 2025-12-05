<!-- src/routes/visa/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { 
    getVisaInfo, 
    getPassportCountries,
    getVisaTypeDetails,
    getNomadDestinations,
    getVisaFreeDestinations,
    filterDestinationsByVisa,
    type VisaFilter as VisaFilterType,
    type VisaCategory,
    createDefaultVisaFilter // Add this import
  } from '$lib/utils/visa';
  import { minimalData } from '$lib/data/minimalData';
  import { getVisaCountries } from '$lib/utils/visa';
  
  // Import components
  import VisaResults from './components/VisaResults.svelte';
  import DocumentChecklist from './components/DocumentChecklist.svelte';
  import PassportBanner from './components/PassportBanner.svelte';
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import VisaTypeDetails from './components/VisaTypeDetails.svelte';
  import VisaFilter from './components/VisaFilter.svelte';
  import { selectedCurrency } from '$lib/stores/currency';
  
  // State
  let homeCountry = $state('United States');
  let destinationCountry = $state('Thailand');
  let selectedRegion = $state('');
  let isLoading = $state(false);
  let error = $state('');
  let showMatrix = $state(false);
  
  // Filter state - use the helper function
  let visaFilter: VisaFilterType = $state(createDefaultVisaFilter());
  
  // Get country data for CountrySelector
  const countryData = getVisaCountries();
  
  // Current currency from store
  const currentCurrency = $derived($selectedCurrency);
  
  // Derived values that depend on currency
  const currentVisaInfo = $derived(getVisaInfo(homeCountry, destinationCountry));
  const destinationCountryData = $derived(minimalData.countries[destinationCountry.toLowerCase()]);
  
  // Visa type details with currency
  const visaDetails = $derived(getVisaTypeDetails(homeCountry, destinationCountry, currentCurrency));
  
  // Filtered destinations for matrix view with currency
  const filteredDestinations = $derived(
    homeCountry ? filterDestinationsByVisa(homeCountry, visaFilter, currentCurrency) : []
  );
  
  // Quick stats
  const nomadCount = $derived(homeCountry ? getNomadDestinations(homeCountry).length : 0);
  const visaFreeCount = $derived(homeCountry ? getVisaFreeDestinations(homeCountry).length : 0);
  
  // Available passport countries
  const passportCountries = getPassportCountries();
  
  // Load saved passport
  $effect(() => {
    const saved = localStorage.getItem('selectedPassport');
    if (saved && passportCountries.includes(saved)) {
      homeCountry = saved;
    }
  });
  
  function handlePassportChange(country: string) {
    homeCountry = country;
    localStorage.setItem('selectedPassport', country);
  }
  
  function handleDestinationChange(country: string) {
    destinationCountry = country;
  }
  
  function handleRegionChange(region: string) {
    selectedRegion = region;
  }
</script>

<!-- The rest of your template remains exactly the same -->
<div class="min-h-screen bg-gradient-to-b from-stone-50 to-slate-50 px-4 py-8 md:py-12">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-10">
      <div class="flex items-center justify-between mb-6">
        <button
          onclick={() => goto('/')}
          class="group inline-flex items-center gap-2 text-stone-600 hover:text-stone-800"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="font-medium text-sm">Back</span>
        </button>
        <CurrencySelector />
      </div>
      
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-light mb-3 text-stone-900">
          Visa Requirements for Digital Nomads
        </h1>
        <p class="text-stone-600 max-w-3xl mx-auto">
          Check visa options, processing times, costs, and find remote-work friendly destinations
        </p>
        <div class="mt-4 text-sm text-stone-500">
          All prices shown in <span class="font-semibold text-stone-700">{currentCurrency}</span>
        </div>
      </div>
    </div>
    
    <!-- Main Card -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <!-- Passport Banner & Quick Stats -->
      <div class="mb-6">
        <PassportBanner passportCountry={homeCountry} />
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <div class="text-2xl font-bold text-purple-600">{nomadCount}</div>
            <div class="text-sm text-purple-700">Digital Nomad Visas</div>
          </div>
          <div class="bg-green-50 p-4 rounded-xl border border-green-200">
            <div class="text-2xl font-bold text-green-600">{visaFreeCount}</div>
            <div class="text-sm text-green-700">Visa-Free Destinations</div>
          </div>
        </div>
      </div>
      
      <!-- Toggle View -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-gray-900">
          {showMatrix ? 'Browse Destinations' : 'Check Specific Country'}
        </h2>
        <button
          onclick={() => showMatrix = !showMatrix}
          class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition"
        >
          {showMatrix ? 'Check Single Country' : 'Browse All Destinations'}
        </button>
      </div>
      
      {#if showMatrix}
        <!-- Matrix View -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Filters Sidebar -->
          <div class="lg:col-span-1">
            <VisaFilter passportCountry={homeCountry} bind:filter={visaFilter} />
          </div>
          
          <!-- Results -->
          <div class="lg:col-span-3">
            <div class="mb-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">
                  {filteredDestinations.length} Destinations Found
                </h3>
                <div class="text-sm text-gray-500">
                  Costs in {currentCurrency}
                </div>
              </div>
              
              <div class="space-y-4">
                {#each filteredDestinations as dest}
                  <div class="border rounded-lg p-4 hover:border-blue-300 transition">
                    <div class="flex items-center justify-between mb-3">
                      <div>
                        <h4 class="font-semibold text-gray-900">{dest.country}</h4>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {dest.category}
                          </span>
                          {#if dest.nomadFriendly}
                            <span class="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                              💻 Remote Work
                            </span>
                          {/if}
                        </div>
                      </div>
                      <button
                        onclick={() => {
                          destinationCountry = dest.country;
                          showMatrix = false;
                        }}
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                      >
                        View Details
                      </button>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div class="text-gray-500">Processing</div>
                        <div class="font-medium">{dest.processingTime}</div>
                      </div>
                      <div>
                        <div class="text-gray-500">Cost</div>
                        <div class="font-medium">{dest.cost}</div>
                      </div>
                      <div>
                        <div class="text-gray-500">Visa-Free</div>
                        <div class="font-medium">{dest.visaInfo.freeLength}</div>
                      </div>
                    </div>
                  </div>
                {:else}
                  <div class="text-center py-12">
                    <div class="text-4xl mb-4">🌍</div>
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">
                      No destinations found
                    </h3>
                    <p class="text-gray-600">Try adjusting your filters</p>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {:else}
        <!-- Single Country View -->
        <div class="space-y-6">
          <!-- Country Selector -->
          <div class="rounded-lg border border-stone-200 bg-white">
            <CountrySelector 
              selectedPassport={homeCountry}
              selectedDestination={destinationCountry}
              selectedRegion={selectedRegion}
              {countryData}
              onPassportChange={handlePassportChange}
              onDestinationChange={handleDestinationChange}
              onRegionChange={handleRegionChange}
              showInsights={true}
            />
          </div>
          
          <!-- Results -->
          {#if destinationCountry}
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Left Column: Visa Info -->
              <div class="lg:col-span-2 space-y-8">
                <VisaResults 
                  {homeCountry}
                  {destinationCountry}
                  visaInfo={currentVisaInfo}
                  countryData={destinationCountryData}
                  {error}
                />
                
                <!-- Visa Type Details -->
                {#if visaDetails.length > 0}
                  <div class="bg-white rounded-xl p-6 border border-stone-200">
                    <VisaTypeDetails {visaDetails} />
                  </div>
                {/if}
                
                <DocumentChecklist 
                  visaInfo={currentVisaInfo}
                />
              </div>
              
              <!-- Right Column: Quick Info & Actions -->
              <div class="space-y-8">
                <!-- Quick Actions -->
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 class="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div class="space-y-3">
                    <button
                      onclick={() => showMatrix = true}
                      class="w-full px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition text-left"
                    >
                      <div class="font-medium">Browse Similar Destinations</div>
                      <div class="text-sm text-blue-600">Find other countries with similar visa requirements</div>
                    </button>
                    <button
                      onclick={() => goto('/flight-costs')}
                      class="w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition text-left"
                    >
                      <div class="font-medium">Check Flight Costs</div>
                      <div class="text-sm text-gray-600">Find cheap flights from {homeCountry} to {destinationCountry}</div>
                    </button>
                  </div>
                </div>
                
                <!-- Digital Nomad Info -->
                {#if currentVisaInfo?.nomadVisa || visaDetails.some(d => d.nomadFriendly)}
                  <div class="bg-purple-50 rounded-xl p-6 border border-purple-100">
                    <h3 class="font-semibold text-purple-900 mb-3">💻 Digital Nomad Info</h3>
                    <div class="space-y-2 text-sm">
                      <div class="flex items-center gap-2">
                        <span>✅</span>
                        <span>Remote work allowed</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span>📋</span>
                        <span>Special visa available</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span>💰</span>
                        <span>Income requirement: {currentVisaInfo.incomeReq}</span>
                      </div>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          {:else}
            <!-- Prompt to select a destination -->
            <div class="text-center py-12">
              <div class="text-6xl mb-4">🌍</div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">
                Select a destination country
              </h3>
              <p class="text-gray-600">
                Choose a country above to see detailed visa information
              </p>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>