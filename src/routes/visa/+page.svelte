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
    createDefaultVisaFilter,
    type VisaTypeDetails as VisaTypeDetailsType
  } from '$lib/utils/visa';
  import { minimalData } from '$lib/data/minimalData';
  import { visaData } from '$lib/data/visa';
  import { getRegionForCountry } from '$lib/utils/regionUtils';
  
  // Import your existing components
  import VisaResults from './components/VisaResults.svelte';
  import DocumentChecklist from './components/DocumentChecklist.svelte';
  import PassportBanner from './components/PassportBanner.svelte';
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import OriginSelector from '$lib/components/OriginSelector.svelte'; // ← Add this!
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import VisaTypeDetails from './components/VisaTypeDetails.svelte';
  import VisaFilter from './components/VisaFilter.svelte';
  import { selectedCurrency } from '$lib/stores/currency';

  // State
  let homeCountry = $state('United States');
  let selectedPassport = $state('United States');
  let selectedDestination = $state('Thailand');
  let selectedRegion = $state('All Regions');
  let isLoading = $state(false);
  let error = $state('');
  let showMatrix = $state(false);
  
  // Filter state
  let visaFilter: VisaFilterType = $state(createDefaultVisaFilter());
  
  // Get visa countries function
  function getAvailableVisaCountries() {
    const destinations = Object.keys(visaData);
    return destinations.map((country: string) => ({
      country,
      region: getRegionForCountry(country) || 'Global'
    }));
  }
  
  // Current currency from store
  const currentCurrency = $derived($selectedCurrency);
  
  // Current visa info
  const currentVisaInfo = $derived(getVisaInfo(homeCountry, selectedDestination));
  
  // Destination country data
  const destinationCountryData = $derived.by(() => {
    const key = selectedDestination.toLowerCase();
    return minimalData.countries[key] || null;
  });
  
  // Visa type details with currency
  const visaDetails = $derived.by(() => 
    getVisaTypeDetails(homeCountry, selectedDestination, currentCurrency)
  );
  
  // Filtered destinations for matrix view with currency
  const filteredDestinations = $derived.by(() =>
    homeCountry ? filterDestinationsByVisa(homeCountry, visaFilter, currentCurrency) : []
  );
  
  // Quick stats
  const nomadCount = $derived.by(() => 
    homeCountry ? getNomadDestinations(homeCountry).length : 0
  );
  
  const visaFreeCount = $derived.by(() => 
    homeCountry ? getVisaFreeDestinations(homeCountry).length : 0
  );
  
  // Available passport countries
  const passportCountries = getPassportCountries();
  
  // Load saved passport
  $effect(() => {
    const saved = localStorage.getItem('selectedPassport');
    if (saved && passportCountries.includes(saved)) {
      homeCountry = saved;
      selectedPassport = saved;
    }
  });
  
  // Event handlers
  function handlePassportChange(country: string) {
    homeCountry = country;
    selectedPassport = country;
    localStorage.setItem('selectedPassport', country);
  }
  
  function handleDestinationChange(country: string) {
    selectedDestination = country;
  }
  
  function handleRegionChange(region: string) {
    selectedRegion = region;
  }
</script>

<!-- Complete visa page with proper structure -->
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
      
      <div class="text-center mb-12">
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
    
    <!-- Dual Selector Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Passport Card -->
      <div class="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl 
        hover:shadow-2xl transition-shadow duration-500">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-full bg-blue-100/80 flex items-center justify-center">
            <span class="text-2xl">📘</span>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900">Your Passport</h3>
            <p class="text-sm text-gray-600">Select your passport country</p>
          </div>
        </div>
        
        <div class="origin-selector space-y-4">
          <!-- Region Filter for Passport Countries -->
          <div>
            <label for="passport-region-select" class="block text-sm font-medium mb-2 text-gray-700">
              Filter by Region
            </label>
            <select
              id="passport-region-select"
              bind:value={selectedRegion}
              class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm 
                text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 
                focus:ring-blue-100 transition-all duration-200"
            >
              <option value="All Regions">All Regions</option>
              {#each ['North America', 'Europe', 'Asia', 'Oceania', 'South America'] as region}
                <option value={region}>{region}</option>
              {/each}
            </select>
          </div>
          
          <!-- Passport Country Selector -->
          <div>
            <label for="passport-country-select" class="block text-sm font-medium mb-2 text-gray-700">
              Select Passport Country
            </label>
            <select
              id="passport-country-select"
              bind:value={homeCountry}
              onchange={(e) => {
                const target = e.target as HTMLSelectElement;
                handlePassportChange(target.value);
              }}
              class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm 
                text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 
                focus:ring-blue-100 transition-all duration-200"
            >
              {#each passportCountries as country}
                <option value={country}>{country}</option>
              {/each}
            </select>
          </div>
          
          <!-- Quick Stats for Passport -->
          <div class="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-4 border border-blue-200">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="text-center">
                <div class="text-lg font-bold text-purple-600">{nomadCount}</div>
                <div class="text-xs text-purple-700">Digital Nomad Visas</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-green-600">{visaFreeCount}</div>
                <div class="text-xs text-green-700">Visa-Free Destinations</div>
              </div>
            </div>
            <p class="text-xs text-gray-600 mt-3 text-center">
              Benefits for {homeCountry} passport holders
            </p>
          </div>
        </div>
      </div>
      
      <!-- Destination Card -->
      <div class="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl 
        hover:shadow-2xl transition-shadow duration-500">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-full bg-green-100/80 flex items-center justify-center">
            <span class="text-2xl">🏁</span>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900">Destination</h3>
            <p class="text-sm text-gray-600">Select your destination country</p>
          </div>
        </div>
        
        <CountrySelector 
          selectedCountry={selectedDestination}
          selectedRegion={selectedRegion}
          countryData={getAvailableVisaCountries()}
          onCountryChange={handleDestinationChange}
          onRegionChange={handleRegionChange}
          mode="visa"
          selectedPassport={selectedPassport}
          onPassportChange={handlePassportChange}
          variant="minimal"
        />
      </div>
    </div>
    
    <!-- MAIN CONTENT CARD - This is what you were missing! -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <!-- Toggle View -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-xl font-semibold text-gray-900">
          {showMatrix ? 'Browse Destinations' : 'Visa Details for ' + selectedDestination}
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
                          selectedDestination = dest.country;
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
        {#if selectedDestination}
          <div class="space-y-8">
            <!-- Visa Results -->
            <VisaResults 
              homeCountry={homeCountry}
              destinationCountry={selectedDestination}
              visaInfo={currentVisaInfo}
              countryData={destinationCountryData}
              error={error}
            />
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Left Column: Details & Documents -->
              <div class="lg:col-span-2 space-y-8">
                <!-- Visa Type Details -->
                {#if visaDetails.length > 0}
                  <div class="bg-white rounded-xl p-6 border border-stone-200">
                    <VisaTypeDetails visaDetails={visaDetails} />
                  </div>
                {/if}
                
                <!-- Document Checklist -->
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
                      <div class="text-sm text-gray-600">Find cheap flights from {homeCountry} to {selectedDestination}</div>
                    </button>
                  </div>
                </div>
                
                <!-- Digital Nomad Info -->
                {#if currentVisaInfo?.nomadVisa || visaDetails.some((d: VisaTypeDetailsType) => d.nomadFriendly)}
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
                
                <!-- Passport Requirements -->
                <div class="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <h3 class="font-semibold text-amber-900 mb-3">📋 Passport Requirements</h3>
                  <div class="space-y-2 text-sm text-amber-800">
                    <div class="flex items-center gap-2">
                      <span>✅</span>
                      <span>6+ months validity beyond travel dates</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span>✅</span>
                      <span>2-4 blank pages for visa stamps</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span>✅</span>
                      <span>No damage or tampering</span>
                    </div>
                  </div>
                </div>
              </div>
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
              Choose a destination above to see detailed visa information
            </p>
          </div>
        {/if}
      {/if}
    </div>
    <!-- END MAIN CONTENT CARD -->
  </div>
</div>