<!-- src/routes/filters/+page.svelte -->
<script lang="ts">
  import ConnectedFilters from './components/ConnectedFilters.svelte';
  import { goto } from '$app/navigation';
  import BudgetFilters from './components/BudgetFilters.svelte';
  import ActivityFilters from './components/ActivityFilters.svelte';
  import SocialLifestyleFilters from './components/SocialLifestyleFilters.svelte';
  import TransportationFilters from './components/TransportationFilters.svelte';
  import FoodHealthFilters from './components/FoodHealthFilters.svelte';
  import ResultsSection from './components/ResultsSection.svelte';
  import RecommendedDestinations from './components/RecommendedDestinations.svelte';
  import QuickDecisionHelper from './components/QuickDecisionHelper.svelte';

  // Shared state
  export let monthlyBudget: [number, number] = [1000, 2000];
  export let travelStyle: string = 'Slow Travel';
  export let transportationPriority: string = 'Walkable Cities';
  export let flightAccess: string = 'Direct from Chicago';
  export let foodPreferences: string[] = ['Street Food', 'Vegan Options'];
  export let socialEnvironment: string[] = ['Hug Culture', 'Touch-Friendly', 'Meetups Like Parties'];
  export let activities: string[] = ['Scuba Diving', 'Spa & Wellness', 'Dance & Social'];
  export let legalPreferences: string[] = ['Freelancer Visa', 'Low Tax', 'Crypto Legal'];
  
  // Original filters state
  export let isCheap: boolean = true;
  export let isVisaFree: boolean = true;
  export let isWarmWeather: boolean = false;
  export let maxDays: number = 90;
  export let minInternetSpeed: number = 50;
  export let safetyScore: number = 4;

  // Computed result
  $: filteredResultText = `Searching for ${isCheap ? 'affordable' : 'premium'} destinations with ${activities?.join(', ') || ''} that fit $${monthlyBudget[0]}-$${monthlyBudget[1]}/month...`;

  function navigate(path: string) {
    goto(path);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-4 py-8 relative overflow-hidden">
  <!-- Simple Background Elements -->
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <div class="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-indigo-50/80 border border-indigo-100 shadow-sm"></div>
    <div class="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-purple-50/80 border border-purple-100 shadow-sm"></div>
    <div class="absolute top-1/2 right-[8%] text-4xl opacity-20">🎛️</div>
    <div class="absolute bottom-1/4 left-[12%] text-3xl opacity-15">🗺️</div>
  </div>
  
  <div class="max-w-4xl mx-auto relative z-10">
    
    <!-- Back Button -->
    <button
      on:click={() => navigate('/')}
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
        Narrow down your perfect destination with personalized filters
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button on:click={() => goto('/living-costs')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          🏠 Living Costs
        </button>
        <button on:click={() => goto('/digital-nomad')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          💻 Digital Nomad
        </button>
        <button on:click={() => goto('/visa')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          📝 Visa Requirements
        </button>
      </div>
    </div>

    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-light mb-4 text-gray-900 tracking-tight">Destination Finder</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Find destinations that match your budget, lifestyle, and travel preferences
      </p>
    </div>

    <!-- Connected Filters Section -->
    <div class="mb-8">
      <ConnectedFilters />
    </div>

    <!-- Quick Decision Helper -->
    <div class="mb-8">
      <QuickDecisionHelper />
    </div>

    <!-- Main Content Card -->
    <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
      
      <!-- Budget Filters -->
      <div class="mb-8">
        <BudgetFilters 
          bind:monthlyBudget 
          bind:travelStyle 
        />
      </div>
      
      <!-- Activity Filters -->
      <div class="mb-8">
        <ActivityFilters 
          bind:activities 
        />
      </div>
      
      <!-- Social & Lifestyle Filters -->
      <div class="mb-8">
        <SocialLifestyleFilters 
          bind:socialEnvironment 
          bind:legalPreferences 
          bind:isCheap
          bind:isVisaFree
          bind:isWarmWeather
          bind:maxDays
          bind:minInternetSpeed
          bind:safetyScore
        />
      </div>
      
      <!-- Transportation Filters -->
      <div class="mb-8">
        <TransportationFilters 
          bind:transportationPriority 
          bind:flightAccess 
        />
      </div>
      
      <!-- Food & Health Filters -->
      <div class="mb-8">
        <FoodHealthFilters 
          bind:foodPreferences 
        />
      </div>
      
      <!-- Results Section -->
      <div class="mb-8">
        <ResultsSection 
          {filteredResultText}
          {activities}
          {monthlyBudget}
          {isCheap}
          {isVisaFree}
        />
      </div>
      
    </div>

    <!-- Recommended Destinations -->
    <div class="mt-8">
      <RecommendedDestinations />
    </div>

    <!-- Next Steps Section -->
    <div class="mt-12 text-center">
      <p class="text-gray-700 text-sm font-light mb-4 tracking-wide">
        Ready to explore your matches?
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button on:click={() => goto('/living-costs')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          💰 Calculate Costs
        </button>
        <button on:click={() => goto('/digital-nomad')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          💻 Remote Work Info
        </button>
        <button on:click={() => goto('/quick-plan')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          ⚡ Quick Plan
        </button>
      </div>
    </div>

    <!-- Filter Tips -->
    <div class="mt-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-indigo-200 max-w-2xl mx-auto">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
        </div>
        <div class="text-left">
          <p class="font-medium text-gray-900">Smart Filtering</p>
          <p class="text-sm text-gray-600 mt-1">
            Start with 2-3 key preferences, then refine based on your matches
          </p>
        </div>
      </div>
    </div>
  </div>
</div>