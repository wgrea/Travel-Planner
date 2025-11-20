<!-- src/routes/filters/+page.svelte -->
<!-- 
- Which food is cheaper in certain cities/countries: street food, grocery stories, restaurants?
- got to use the files to connect filters to countries and cities
- goes for the site: I want to add a country first, then select a city. 
- If something is grey area or yellow, how about include an explanation instead of numbers?

-->


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

<div class="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-500 to-sky-300 px-4 py-12 relative overflow-hidden">
  <!-- Background elements (unchanged) -->
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <!-- ... your existing background elements ... -->
  </div>

  <div class="max-w-4xl mx-auto relative z-10">
    <!-- Back Button -->
    <button
      on:click={() => navigate('/')}
      class="group mb-10 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200"
    >
      <span class="text-3xl">👈</span>
      <span class="font-semibold text-lg drop-shadow-md">Back to Main Menu</span>
    </button>
    
    <!-- Title Section -->
    <div class="mb-12 text-center">
      <div class="inline-block mb-6 relative">
        <div class="absolute inset-0 bg-white/20 blur-2xl"></div>
        <div class="relative text-7xl filter drop-shadow-lg">🎛️</div> 
      </div>
      
      <h1 class="text-6xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] tracking-tight">
        Will's International Living Filter
      </h1>
      
      <p class="text-white/95 text-xl font-light tracking-wide drop-shadow-md">
        Find destinations that match your budget, lifestyle, and digital nomad needs
      </p>
    </div>

    <!-- Connected Filters Section -->
    <div class="mb-8">
      <ConnectedFilters />
    </div>

    <QuickDecisionHelper />

    <!-- Main Content Card -->
    <div class="bg-white/15 backdrop-blur-xl rounded-[28px] p-8 border-2 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-white">
      
      <BudgetFilters bind:monthlyBudget bind:travelStyle />
      
      <ActivityFilters bind:activities />
      
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
      
      <TransportationFilters bind:transportationPriority bind:flightAccess />
      
      <FoodHealthFilters bind:foodPreferences />
      
      <ResultsSection 
        {filteredResultText}
        {activities}
        {monthlyBudget}
        {isCheap}
        {isVisaFree}
      />
      
    </div>

    <RecommendedDestinations />
    
  </div>
</div>