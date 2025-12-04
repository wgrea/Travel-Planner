<!-- src/routes/resonance/+page.svelte -->

<!--
// Quick visa availability filter
visaFilter: 'any' | 'visa-free' | 'digital-nomad' | 'easy-process'
// Shows users which destinations are accessible
-->

<!--
🔍 Resonance / Destination Finder

Aesthetic: Exploratory Frutiger Aero (the most "aero" page)
Colors: Aqua/cyan/teal gradient (from-cyan-50 via-blue-50 to-teal-50)
Special Elements:

Animated water ripples or waves in background
Glass morphism filter cards
Bubble effects when hovering destinations
Smooth transitions between filter states


Why: This is your flagship feature - make it feel magical and exploratory

svelte Example design direction: 
<div class="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    Animated water ripples
    <div class="absolute top-20 left-20 w-96 zh-96 bg-blue-400/5 rounded-full 
      animate-ping [animation-duration:4s]"></div>
  </div>
</div>

-->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { ResonanceMatcher } from '$lib/utils/resonanceMatcher';
  import { resonanceDataByRegion, activityCategories, getAllActivities, getAllTags, getAllLocations, tagCategories } from '$lib/data/resonanceData';
  import type { ResonancePreferences, ResonanceScore, CityResonanceProfile } from '$lib/types/resonance';
  
  import ResonanceFilters from './components/ResonanceFilters.svelte';
  import ResonanceTabs from './components/ResonanceTabs.svelte';
  import ResonanceResults from './components/ResonanceResults.svelte';
  import CountrySelector from './components/CountrySelector.svelte'; // FIXED: Use CountrySelector

  // Add country and city to preferences
  let preferences: ResonancePreferences = {
    travelStyle: 'slow',
    socialPreference: 'balanced',
    energyLevel: 'medium',
    climate: 'any',
    vibe: 'balanced',
    density: 'mixed',
    activities: [],
    foodScene: 'mixed',
    nightlife: 'moderate',
    budget: 'any',
    internetImportance: 8,
    safetyImportance: 8,
    country: 'any', // NEW
    region: 'any' // NEW: Replace city with region
  };

  let matches: ResonanceScore[] = [];
  let isLoading = false;
  let selectedCategory: string = 'all';
  let selectedTags: string[] = [];
  let activeTab: 'tags' | 'activities' = 'tags';

  // Get all available data
  const allLocations = getAllLocations();
  const allActivities = getAllActivities();
  const allTags = getAllTags();

  // Debug: log available locations
  onMount(() => {
    console.log('=== RESONANCE DEBUG ===');
    console.log('All locations:', allLocations);
    console.log('Total locations count:', allLocations.length);
    console.log('=====================');
  });

  // FIXED: Type-safe activity filtering with proper type assertion
  $: filteredActivities = selectedCategory === 'all' 
    ? allActivities 
    : (activityCategories as Record<string, string[]>)[selectedCategory] || [];

  // Get unique countries from all locations
  $: allCountries = [...new Set(allLocations.map((loc: CityResonanceProfile) => loc.country))].sort();
  
    // FIXED: Update event handlers
  function handleRegionChange(event: { detail: string }) {
    preferences = { ...preferences, region: event.detail };
  }

  function handleCountryChange(event: { detail: string }) {
    preferences = { ...preferences, country: event.detail };
  }

  // FIXED: Make sure findMatches uses region instead of city
  function findMatches() {
    isLoading = true;
    setTimeout(() => {
      let filteredLocations = allLocations.filter((location: CityResonanceProfile) => {
        // Region filter (NOT city)
        if (preferences.region !== 'any' && location.region !== preferences.region) {
          return false;
        }
        
        // Country filter
        if (preferences.country !== 'any' && location.country !== preferences.country) {
          return false;
        }
        
        // FIXED: Complete budget hierarchy
        if (preferences.budget !== 'any') {
          const budgetHierarchy = {
            'budget': ['budget'],
            'midrange': ['midrange'],
            'luxury': ['luxury'],
            'budget-midrange': ['budget', 'midrange'],
            'midrange-luxury': ['midrange', 'luxury'],
            'all-levels': ['budget', 'midrange', 'luxury']
          };
          
          if (!budgetHierarchy[preferences.budget].includes(location.costLevel)) {
            return false;
          }
        }
        
        // Climate filter - only apply if not 'any'
        if (preferences.climate !== 'any' && location.climate !== preferences.climate) return false;
        
        // Internet quality filter (meets minimum)
        if (location.internetQuality < preferences.internetImportance - 2) return false;
        
        // Safety filter (meets minimum)  
        if (location.safetyScore < preferences.safetyImportance - 2) return false;
        
        return true;
      });
      
      // 2. THEN: Filter by selected tags (experience characteristics)
      if (selectedTags.length > 0) {
        filteredLocations = filteredLocations.filter((location: CityResonanceProfile) =>
          selectedTags.some(tag => location.tags.includes(tag))
        );
      }
      
      console.log('=== MATCHING DEBUG ===');
      console.log('Country filter:', preferences.country);
      console.log('Region filter:', preferences.region); // FIXED: Change city to region
      console.log('Budget filter:', preferences.budget);
      console.log('After location filters:', filteredLocations.map((l: CityResonanceProfile) => l.name));
      console.log('Selected tags:', selectedTags);
      
      matches = ResonanceMatcher.findTopMatches(preferences, filteredLocations);
      
      console.log('Final matches:', matches);
      console.log('=====================');
      
      isLoading = false;
    }, 800);
  }

  function toggleActivity(activity: string) {
    if (preferences.activities.includes(activity)) {
      preferences.activities = preferences.activities.filter(a => a !== activity);
    } else {
      preferences.activities = [...preferences.activities, activity];
    }
  }

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  }

  function selectCategory(category: string) {
    selectedCategory = category;
  }

  // FIXED: Update clearAllFilters to use region instead of city
  function clearAllFilters() {
    selectedTags = [];
    preferences.activities = [];
    // FIXED: Use region instead of city
    preferences = { ...preferences, country: 'any', region: 'any' };
    matches = [];
  }

  function updatePreferences(event: { detail: { field: string; value: any } }) {
    preferences = { ...preferences, [event.detail.field]: event.detail.value };
  }

  // FIXED: Update totalFilters - use region instead of city
  $: totalFilters = selectedTags.length + preferences.activities.length + 
    (preferences.country !== 'any' ? 1 : 0) + 
    (preferences.region !== 'any' ? 1 : 0) + // ← This should be region, not city
    (preferences.budget !== 'any' ? 1 : 0) +
    (preferences.climate !== 'any' ? 1 : 0);

  // FIX: Update event handlers to accept the correct parameter types
  function removeTag(event: { detail: string }) {
    selectedTags = selectedTags.filter(t => t !== event.detail);
  }

  function removeActivity(event: { detail: string }) {
    preferences.activities = preferences.activities.filter(a => a !== event.detail);
  }

</script>

<div class="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 px-4 py-8 relative overflow-hidden">
  <!-- Water Ripple Background -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Large animated ripples -->
    <div class="absolute top-20 left-20 w-96 h-96 bg-cyan-400/5 rounded-full 
      animate-ping [animation-duration:8s]"></div>
    <div class="absolute bottom-40 right-40 w-80 h-80 bg-blue-400/5 rounded-full 
      animate-ping [animation-duration:7s] [animation-delay:2s]"></div>
    <div class="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-400/5 rounded-full 
      animate-ping [animation-duration:9s] [animation-delay:1s]"></div>
    
    <!-- Subtle bubbles -->
    <div class="absolute top-32 right-32 w-16 h-16 bg-white/10 rounded-full 
      animate-float-slow"></div>
    <div class="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white/10 rounded-full 
      animate-float-medium [animation-delay:0.5s]"></div>
    <div class="absolute top-1/2 right-1/4 w-8 h-8 bg-white/10 rounded-full 
      animate-float-slow [animation-delay:1s]"></div>
  </div>

  <div class="max-w-7xl mx-auto relative z-10">
    
    <!-- Back Button with glass effect -->
    <button on:click={() => goto('/')} 
      class="group mb-8 ml-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm 
      px-4 py-2 rounded-xl border border-white/30 text-gray-700 hover:text-gray-900 
      hover:bg-white/30 hover:border-white/50 transition-all duration-300">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
    </button>

    <!-- Header with glass effect -->
    <div class="text-center mb-12 bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg">
      <h1 class="text-5xl font-light mb-4 text-gray-900">Destination Resonance Finder</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Discover countries and cities that match your travel personality, interests, and style
      </p>
    </div>

    <!-- Quick Stats with glass cards -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      <div class="bg-white/40 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="text-2xl font-semibold text-cyan-700">{allLocations.length}</div>
        <div class="text-sm text-gray-700">Locations</div>
      </div>
      <div class="bg-white/40 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="text-2xl font-semibold text-teal-700">{allTags.length}</div>
        <div class="text-sm text-gray-700">Tags</div>
      </div>
      <div class="bg-white/40 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="text-2xl font-semibold text-blue-700">{allActivities.length}</div>
        <div class="text-sm text-gray-700">Activities</div>
      </div>
      <div class="bg-white/40 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="text-2xl font-semibold text-purple-700">{totalFilters}</div>
        <div class="text-sm text-gray-700">Filters Active</div>
      </div>
      <div class="bg-white/40 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="text-2xl font-semibold text-indigo-700">{matches.length}</div>
        <div class="text-sm text-gray-700">Matches</div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
      
      <!-- Filters Sidebar with glass effect -->
      <div class="xl:col-span-1 space-y-6">
        <div class="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-lg">
          <CountrySelector
            {allLocations}
            selectedRegion={preferences.region}
            selectedCountry={preferences.country}
            on:regionChange={handleRegionChange}
            on:countryChange={handleCountryChange}
          />
        </div>

        <ResonanceFilters
          {preferences}
          {selectedTags}
          {isLoading}
          on:updatePreferences={updatePreferences}
          on:toggleTag={(e) => toggleTag(e.detail)}
          on:removeTag={removeTag}
          on:removeActivity={removeActivity}
          on:clearAll={clearAllFilters}
          on:findMatches={findMatches}
        />
      </div>

      <!-- Main Content Area -->
      <div class="xl:col-span-3">
        <!-- Tabs with glass effect -->
        <div class="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-lg mb-6">
          <ResonanceTabs
            {preferences}
            {selectedTags}
            {selectedCategory}
            {activeTab}
            {allTags}
            {allActivities}
            {filteredActivities}
            {activityCategories}
            {tagCategories}
            on:toggleTag={(e) => toggleTag(e.detail)}
            on:toggleActivity={(e) => toggleActivity(e.detail)}
            on:selectCategory={(e) => selectCategory(e.detail)}
            on:changeTab={(e) => activeTab = e.detail}
          />
        </div>

        <!-- Results with glass effect -->
        <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg">
          <ResonanceResults
            {matches}
            {isLoading}
            {totalFilters}
          />
        </div>
      </div>
    </div>

    <!-- Next Steps Section with enhanced glass effect -->
    {#if matches.length > 0}
      <div class="mt-16 bg-gradient-to-r from-cyan-50/60 to-blue-50/60 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-lg">
        <h3 class="text-2xl font-light text-gray-900 mb-6 text-center">Next Steps for Your Matches</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Visa Requirements Card -->
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/70 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
            <div class="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Visa Requirements</h4>
            <p class="text-gray-700 text-sm mb-4">Check visa requirements, processing times, and documentation needed for entry.</p>
            <a href="/visa" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
              Check Visa Info
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          <!-- Flight Costs Card -->
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/70 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
            <div class="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Flight Costs</h4>
            <p class="text-gray-700 text-sm mb-4">Check current flight prices and find the best deals for your matched destinations.</p>
            <a href="/flight-costs" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
              Explore Flight Prices
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <!-- Living Costs Card -->
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/70 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
            <div class="text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Living Costs</h4>
            <p class="text-gray-700 text-sm mb-4">Analyze accommodation, food, and daily expenses for your potential destinations.</p>
            <a href="/living-costs" class="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
              Calculate Living Expenses
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>