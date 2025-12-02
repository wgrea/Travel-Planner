<!-- src/routes/transportation-costs/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { transportationData } from '$lib/data/transportationData';
  
  // Import components - ensure they exist
  import TransportationCitySelector from './components/TransportationCitySelector.svelte';
  import TransportationTypeSelector from './components/TransportationTypeSelector.svelte';
  import CostBreakdown from './components/CostBreakdown.svelte';
  import QuickStats from './components/QuickStats.svelte';
  
  import type { TransportationCosts } from '$lib/types/transportation';
  
  // === ADD CURRENCY IMPORTS ===
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';
  
  // State using $state runes
  let selectedCountry: string = $state('');
  let selectedCity: string = $state('');
  let usagePattern = $state<'tourist' | 'budgetTraveler' | 'digitalNomad' | 'resident'>('digitalNomad');
  
  // Use store-derived value for currency
  const currentCurrency = $derived($selectedCurrency);
  
  // Constants
  const countries: TransportationCosts[] = transportationData;
  const featuredCountries = ['Thailand', 'Portugal', 'Mexico', 'Colombia', 'Vietnam', 'Spain'];
  
  // Event handlers
  function handleCountryChange(event: CustomEvent<string>) {
    selectedCountry = event.detail;
    selectedCity = ''; // Reset city when country changes
  }
  
  function handleCityChange(event: CustomEvent<string>) {
    selectedCity = event.detail;
  }
  
  // Auto-select first country using $effect
  $effect(() => {
    if (!selectedCountry && countries.length > 0) {
      selectedCountry = countries[0].country;
    }
  });
  
  // Debug logging
  $effect(() => {
    console.log('🚗 Transportation page state:', { 
      selectedCountry, 
      selectedCity, 
      usagePattern, 
      currentCurrency 
    });
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 px-4 py-8 relative overflow-hidden">
  <!-- Background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
    <div class="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
  </div>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto relative z-20">
    <!-- Back Button -->
    <button 
      onclick={() => goto('/')}
      class="group mb-8 inline-flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-gray-300 hover:shadow-lg"
    >
      <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
    </button>

    <!-- === CURRENCY SELECTOR === -->
    <CurrencySelector />

    <!-- Header -->
    <div class="mb-8 text-center">
      <div class="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-sm mb-6">
        <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <span class="text-sm font-medium text-gray-700">Transportation Calculator</span>
      </div>
      
      <h1 class="text-6xl font-light mb-6 text-gray-900 tracking-tight bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
        Transportation Costs
      </h1>
      <p class="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
        Smart comparisons for public transport, ride-sharing, taxis, and rentals across global destinations
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-16">
      <!-- Control Panel -->
      <div class="xl:col-span-1 space-y-6">
        <!-- Country & City Selector -->
        <div class="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 p-8">
          <TransportationCitySelector 
            selectedCountry={selectedCountry}
            selectedCity={selectedCity}
            {countries}
            on:countryChange={handleCountryChange}
            on:cityChange={handleCityChange}
          />
        </div>

        <!-- Usage Pattern -->
        <div class="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 p-8">
          <TransportationTypeSelector 
            bind:usagePattern={usagePattern}
          />
        </div>

        <!-- Quick Stats -->
        {#if selectedCountry}
          <QuickStats currency={currentCurrency} />
        {/if}
      </div>

      <!-- Results Area -->
      <div class="xl:col-span-3">
        {#if selectedCountry}
          <CostBreakdown 
            country={selectedCountry}
            city={selectedCity}
            {usagePattern}
            currency={currentCurrency} 
          />
        {:else}
          <!-- Empty State -->
          <div class="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/60 shadow-xl p-16 text-center">
            <div class="w-32 h-32 mx-auto mb-8 text-gray-300">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="opacity-50">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 class="text-2xl font-light text-gray-900 mb-4">Explore Transportation Costs</h3>
            <p class="text-gray-600 max-w-md mx-auto mb-8 text-lg leading-relaxed">
              Select a destination to compare transportation options and plan your travel budget with detailed cost breakdowns.
            </p>
            <div class="inline-flex items-center gap-3 px-6 py-3 bg-gray-100/80 rounded-2xl text-gray-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span class="font-medium">Choose a country to begin</span>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {#each [
        { icon: '🚆', title: 'Public Transport', desc: 'Buses, trains, metro systems', color: 'from-green-500 to-emerald-600' },
        { icon: '🚗', title: 'Ride Sharing', desc: 'Uber, Grab, local apps', color: 'from-blue-500 to-cyan-600' },
        { icon: '🚕', title: 'Taxis', desc: 'Metered & fixed prices', color: 'from-yellow-500 to-orange-600' },
        { icon: '🛵', title: 'Rentals', desc: 'Cars, scooters, bikes', color: 'from-purple-500 to-pink-600' }
      ] as item}
        <div class="group">
          <div class="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/60 p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
            <div class="w-16 h-16 bg-gradient-to-br {item.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p class="text-sm text-gray-600">{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>