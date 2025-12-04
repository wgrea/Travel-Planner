<!-- src/routes/transportation-costs/+page.svelte -->

<!--

🚗 Transportation Costs

Aesthetic: Urban Frutiger Aero
Colors: Amber/orange (from-amber-50 to-orange-50)
Special Elements:

Road/map-inspired subtle background patterns
Vehicle icons with soft shadows
Route visualization


Why: Ground transportation, needs to feel navigable

-->

<script lang="ts">
  import { goto } from '$app/navigation';
  
  // Import components
  import TransportationCountrySelector from './components/TransportationCountrySelector.svelte';
  import TransportationTypeSelector from './components/TransportationTypeSelector.svelte';
  import CostBreakdown from './components/CostBreakdown.svelte';
  import QuickStats from './components/QuickStats.svelte';
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';
  
  // State using $state runes
  let selectedRegion = $state('');
  let selectedCountry = $state('');
  let selectedCity = $state('');
  let usagePattern = $state<'tourist' | 'budgetTraveler' | 'digitalNomad' | 'resident'>('digitalNomad');
  
  // Use store-derived value for currency
  const currentCurrency = $derived($selectedCurrency);
</script>
<div class="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 px-4 py-8 relative overflow-hidden">
  <!-- Road/map-inspired background patterns -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Road lines -->
    <div class="absolute top-1/4 left-0 right-0 h-px bg-amber-300/20"></div>
    <div class="absolute top-1/2 left-0 right-0 h-px bg-amber-300/15"></div>
    <div class="absolute top-3/4 left-0 right-0 h-px bg-amber-300/10"></div>
    
    <!-- Intersection circles -->
    <div class="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border-2 border-amber-300/20"></div>
    <div class="absolute top-1/2 right-1/3 w-12 h-12 rounded-full border-2 border-orange-300/15"></div>
    <div class="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full border-2 border-orange-300/10"></div>
    
    <!-- Route dots -->
    <div class="absolute top-40 left-[15%] w-3 h-3 bg-amber-400/20 rounded-full"></div>
    <div class="absolute top-60 right-[25%] w-2 h-2 bg-orange-400/20 rounded-full"></div>
    <div class="absolute bottom-40 left-[35%] w-3 h-3 bg-amber-400/15 rounded-full"></div>
    <div class="absolute bottom-60 right-[15%] w-2 h-2 bg-orange-400/15 rounded-full"></div>
    
    <!-- Subtle vehicle shadows -->
    <div class="absolute top-32 left-[20%] w-24 h-12 bg-gradient-to-r from-transparent via-amber-300/5 to-transparent 
      rounded-lg animate-vehicle-drift [animation-delay:1s]"></div>
    <div class="absolute bottom-32 right-[30%] w-20 h-10 bg-gradient-to-r from-transparent via-orange-300/5 to-transparent 
      rounded-lg animate-vehicle-drift [animation-delay:2s]"></div>
  </div>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto relative z-20">
    <!-- Back Button - Road sign style -->
    <button 
      onclick={() => goto('/')}
      class="group mb-8 inline-flex items-center gap-3 px-5 py-3 text-amber-900 hover:text-orange-900 
      transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-xl border border-amber-200 
      hover:border-orange-300 hover:shadow-lg hover:scale-105"
    >
      <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
    </button>

    <!-- Currency Selector - Road style -->
    <div class="mb-8 bg-white/90 backdrop-blur-sm rounded-xl border border-amber-200 p-4 inline-block">
      <CurrencySelector />
    </div>

    <!-- Header with road sign aesthetic -->
    <div class="mb-12 text-center">
      <div class="inline-flex items-center gap-4 px-8 py-4 bg-white/90 backdrop-blur-md rounded-2xl 
        border border-amber-300/50 shadow-lg mb-8">
        <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span class="text-lg font-semibold text-amber-900">Transportation Calculator</span>
      </div>
      
      <h1 class="text-6xl font-light mb-6 text-amber-950 tracking-tight">
        Transportation Costs
      </h1>
      <p class="text-xl text-amber-800/80 font-light max-w-3xl mx-auto leading-relaxed">
        Navigate urban mobility with smart cost comparisons and route planning
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-16">
      <!-- Control Panel - Road map style -->
      <div class="xl:col-span-1 space-y-6">
        <!-- Region, Country & City Selector - Route planner style -->
        <div class="bg-white/90 backdrop-blur-md rounded-2xl border border-amber-300/40 shadow-xl 
          hover:shadow-2xl transition-all duration-500 p-6">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h3 class="text-lg font-semibold text-amber-900">Route Planner</h3>
          </div>
          <TransportationCountrySelector 
            bind:selectedRegion
            bind:selectedCountry
            bind:selectedCity
          />
        </div>

        <!-- Usage Pattern - Traffic style -->
        <div class="bg-white/90 backdrop-blur-md rounded-2xl border border-orange-300/40 shadow-xl 
          hover:shadow-2xl transition-all duration-500 p-6">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
            <h3 class="text-lg font-semibold text-amber-900">Travel Style</h3>
          </div>
          <TransportationTypeSelector 
            bind:usagePattern={usagePattern}
          />
        </div>

        <!-- Quick Stats - Speedometer style -->
        {#if selectedCountry}
          <div class="bg-gradient-to-br from-amber-100/90 to-orange-100/90 backdrop-blur-md rounded-2xl 
            border border-orange-300/40 shadow-xl p-6">
            <QuickStats currency={currentCurrency} />
          </div>
        {/if}
      </div>

      <!-- Results Area - Dashboard style -->
      <div class="xl:col-span-3">
        {#if selectedCountry}
          <div class="bg-white/90 backdrop-blur-md rounded-2xl border border-amber-300/40 shadow-xl 
            hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <CostBreakdown 
              country={selectedCountry}
              city={selectedCity}
              {usagePattern}
              currency={currentCurrency} 
            />
          </div>
        {:else}
          <!-- Empty State - Parking lot style -->
          <div class="bg-gradient-to-br from-amber-100/90 to-orange-100/90 backdrop-blur-md rounded-2xl 
            border border-amber-300/40 shadow-xl p-16 text-center">
            <div class="w-40 h-40 mx-auto mb-8 text-amber-400/50">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="opacity-40">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-light text-amber-950 mb-4">Start Your Journey</h3>
            <p class="text-amber-800/80 max-w-md mx-auto mb-8 text-lg leading-relaxed">
              Select a destination to explore transportation routes and calculate mobility costs.
            </p>
            <div class="inline-flex items-center gap-3 px-6 py-3 bg-amber-200/50 rounded-2xl text-amber-900 
              border border-amber-300/50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span class="font-medium">Choose your starting point</span>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Features Grid - Vehicle icons with soft shadows -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {#each [
        { icon: '🚆', title: 'Public Transport', desc: 'Buses, trains, metro systems', color: 'from-amber-400 to-orange-500', shadow: 'shadow-amber-200/50' },
        { icon: '🚗', title: 'Ride Sharing', desc: 'Uber, Grab, local apps', color: 'from-orange-400 to-red-500', shadow: 'shadow-orange-200/50' },
        { icon: '🚕', title: 'Taxis', desc: 'Metered & fixed prices', color: 'from-yellow-400 to-amber-500', shadow: 'shadow-yellow-200/50' },
        { icon: '🛵', title: 'Rentals', desc: 'Cars, scooters, bikes', color: 'from-amber-500 to-orange-600', shadow: 'shadow-amber-300/50' }
      ] as item}
        <div class="group">
          <div class="bg-white/90 backdrop-blur-sm rounded-xl border border-amber-200 p-6 text-center 
            hover:shadow-xl transition-all duration-300 hover:scale-105 h-full relative">
            <!-- Vehicle shadow behind icon -->
            <div class="absolute inset-0 rounded-xl {item.shadow} opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 -z-10"></div>
            
            <div class="w-20 h-20 bg-gradient-to-br {item.color} rounded-2xl flex items-center justify-center 
              text-3xl mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-3 
              transition-all duration-300 shadow-lg">
              {item.icon}
            </div>
            <h3 class="font-semibold text-amber-900 mb-3 text-lg">{item.title}</h3>
            <p class="text-sm text-amber-700/80">{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Additional Navigation -->
    <div class="bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-2xl 
      border border-amber-300/50 p-8 text-center mb-8">
      <p class="text-amber-900 text-lg font-medium mb-6">Continue Your Travel Planning</p>
      <div class="flex gap-4 justify-center flex-wrap">
        <button onclick={() => goto('/flight-costs')}
          class="px-5 py-3 rounded-xl bg-white/90 border border-amber-300 text-amber-800 
          hover:border-orange-400 hover:bg-white hover:shadow-lg hover:scale-105 
          transition-all duration-300 font-medium text-sm flex items-center gap-2">
          ✈️ Flight Costs
        </button>
        <button onclick={() => goto('/living-costs')}
          class="px-5 py-3 rounded-xl bg-white/90 border border-amber-300 text-amber-800 
          hover:border-orange-400 hover:bg-white hover:shadow-lg hover:scale-105 
          transition-all duration-300 font-medium text-sm flex items-center gap-2">
          🏠 Living Costs
        </button>
        <button onclick={() => goto('/travel-essentials')}
          class="px-5 py-3 rounded-xl bg-white/90 border border-amber-300 text-amber-800 
          hover:border-orange-400 hover:bg-white hover:shadow-lg hover:scale-105 
          transition-all duration-300 font-medium text-sm flex items-center gap-2">
          🎒 Packing Essentials
        </button>
      </div>
    </div>
  </div>
</div>
