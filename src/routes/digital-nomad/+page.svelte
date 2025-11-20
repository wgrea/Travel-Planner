<!-- src/routes/digital-nomad/+page.svelte -->
<!-- 
Notes for improvement:
- Where are these hostels?
- Which country has cheaper hostels?
- Which cities have good coffee shops for working, but also are not too crowded? What travlers do NOT want to experience if not being able to find a seat when they need to get work done.
- Coworking Spaces and memberships are important to list here.
- Notes I am taking for this is kind of the same as others: connect data together for filtering and make sure the buttons are doing something. 

Wait until later:
- links to the site. I am more worried about the site being helpful and saying where you will go to but finding the links may also need to have me edit some things.
- Page that shows what files to fill in like not paying the taxes from your home country/state

Wait until (way) later:
- Hotel Workspace

-->

<script lang="ts">
  import { goto } from '$app/navigation';
  import LocationSelector from './components/LocationSelector.svelte';
  import WorkPreferenceSelector from './components/WorkPreferenceSelector.svelte';
  import InternetQualityCard from './components/InternetQualityCard.svelte';
  import CoworkingSpacesCard from './components/CoworkingSpacesCard.svelte';
  import VisaInfoCard from './components/VisaInfoCard.svelte';
  import CommunitySafetyCard from './components/CommunitySafetyCard.svelte';
  import PopularCoworkingSpaces from './components/PopularCoworkingSpaces.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';
  
  let selectedCountry: string = 'Thailand';
  let selectedCity: string = 'Bangkok';
  let workPreference: string = 'coworking';

  // Add city options for each country
  const cityOptions: Record<string, string[]> = {
    'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket', 'Koh Samui'],
    'Vietnam': ['Ho Chi Minh', 'Hanoi', 'Da Nang'],
    'Indonesia': ['Bali', 'Jakarta'],
    'Portugal': ['Lisbon', 'Porto'],
    'Colombia': ['Medellin', 'Bogota']
  };

  function navigate(path: string) {
    goto(path);
  }

  // Update cities when country changes
  $: availableCities = cityOptions[selectedCountry] || ['Bangkok'];
  $: if (!availableCities.includes(selectedCity)) {
    selectedCity = availableCities[0];
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-300 px-4 py-12 relative overflow-hidden">
  <BackgroundElements />

  <div class="max-w-6xl mx-auto relative z-10">
    <button
      on:click={() => navigate('/')}
      class="group mb-10 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200"
    >
      <span class="text-3xl">👈</span>
      <span class="font-semibold text-lg drop-shadow-md">Back to Main Menu</span>
    </button>
    
    <div class="mb-12 text-center">
      <div class="inline-block mb-6 relative">
        <div class="absolute inset-0 bg-white/20 blur-2xl"></div>
        <div class="relative text-7xl filter drop-shadow-lg">💻</div>
      </div>
      
      <h1 class="text-6xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] tracking-tight">
        Digital Nomad
      </h1>
      
      <p class="text-white/95 text-xl font-light tracking-wide drop-shadow-md">
        Workspaces, internet quality, and remote work essentials for productive travel.
      </p>
    </div>

    <!-- Component Sections -->
    <LocationSelector 
      bind:selectedCountry 
      bind:selectedCity 
      {availableCities}
    />
    
    <WorkPreferenceSelector bind:workPreference />
    
    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <InternetQualityCard />
      <CoworkingSpacesCard />
      <VisaInfoCard />
      <CommunitySafetyCard />
    </div>

    <PopularCoworkingSpaces />
  </div>
</div>