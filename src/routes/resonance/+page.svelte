<!-- src/routes/resonance/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { ResonanceMatcher } from '$lib/utils/resonanceMatcher';
  import { resonanceDataByRegion, activityCategories, getAllActivities, getAllTags, getAllLocations, tagCategories } from '$lib/data/resonanceData';
  import type { ResonancePreferences, ResonanceScore, CityResonanceProfile } from '$lib/types/resonance';
  
  import ResonanceFilters from './components/ResonanceFilters.svelte';
  import ResonanceTabs from './components/ResonanceTabs.svelte';
  import ResonanceResults from './components/ResonanceResults.svelte';
  import CountrySelector from './components/CountrySelector.svelte';

  let preferences: ResonancePreferences = {
    pace: 'medium',
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
    country: 'any',
    region: 'any',
    interests: []
  };

  let matches: ResonanceScore[] = [];
  let isLoading = false;
  let selectedCategory: string = 'all';
  let selectedTags: string[] = [];
  let activeTab: 'tags' | 'activities' = 'tags';
  let hasSearched = false;

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

  // Type-safe activity filtering with proper type assertion
  $: filteredActivities = selectedCategory === 'all' 
    ? allActivities 
    : (activityCategories as Record<string, string[]>)[selectedCategory] || [];

  // Get unique countries from all locations
  $: allCountries = [...new Set(allLocations.map((loc: CityResonanceProfile) => loc.country))].sort();
  
  // Update event handlers
  function handleRegionChange(event: { detail: string }) {
    preferences = { ...preferences, region: event.detail };
  }

  function handleCountryChange(event: { detail: string }) {
    preferences = { ...preferences, country: event.detail };
  }

  // Debug function to show tag connections
  function debugTagConnections(tag: string) {
    const matchingLocations = allLocations.filter(l => l.tags && l.tags.includes(tag));
    console.log(`=== DEBUG: Tag "${tag}" ===`);
    console.log(`Total matches: ${matchingLocations.length}`);
    console.log('Countries:', [...new Set(matchingLocations.map(l => l.country))]);
    console.log('Sample cities:', matchingLocations.slice(0, 3).map(l => `${l.name}, ${l.country}`));
    if (matchingLocations.length === 0) {
      console.warn(`⚠️ WARNING: Tag "${tag}" has NO connected locations!`);
    }
    console.log('=====================');
  }

  // In +page.svelte, update the findMatches function:
  function findMatches() {
    hasSearched = true;
    isLoading = true;
    setTimeout(() => {
      let filteredLocations = allLocations.filter((location: CityResonanceProfile) => {
        // Region filter
        if (preferences.region !== 'any' && location.region !== preferences.region) {
          return false;
        }
        
        // Country filter
        if (preferences.country !== 'any' && location.country !== preferences.country) {
          return false;
        }
        
        // Budget filter
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
        
        // Climate filter
        if (preferences.climate !== 'any' && location.climate !== preferences.climate) return false;
        
        // Internet quality filter
        if (location.internetQuality < preferences.internetImportance - 2) return false;
        
        // Safety filter  
        if (location.safetyScore < preferences.safetyImportance - 2) return false;
        
        return true;
      });
      
      // Debug: Log what filters we're applying
      console.log('=== MATCHING DEBUG ===');
      console.log('Selected tags:', selectedTags);
      console.log('Selected activities:', preferences.activities);
      console.log('Initial filtered locations:', filteredLocations.length);
      
      // Filter by selected tags
      if (selectedTags.length > 0) {
        filteredLocations = filteredLocations.filter((location: CityResonanceProfile) =>
          selectedTags.some(tag => location.tags && location.tags.includes(tag))
        );
        console.log('After tag filter:', filteredLocations.length);
      }
      
      // Filter by selected activities - FIXED: Use popularActivities
      if (preferences.activities.length > 0) {
        filteredLocations = filteredLocations.filter((location: CityResonanceProfile) =>
          preferences.activities.some(activity => 
            location.popularActivities && 
            location.popularActivities.some(a => a.toLowerCase().includes(activity.toLowerCase()))
          )
        );
        console.log('After activity filter:', filteredLocations.length);
      }
      
      // If we have no filters at all, show all locations
      if (selectedTags.length === 0 && preferences.activities.length === 0 && 
          preferences.budget === 'any' && preferences.climate === 'any' &&
          preferences.country === 'any' && preferences.region === 'any') {
        console.log('No filters selected, showing all locations');
        filteredLocations = allLocations;
      }
      
      matches = ResonanceMatcher.findTopMatches(preferences, filteredLocations);
      
      console.log('Final matches:', matches.length);
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
      console.log(`Removed tag: ${tag}. Current tags:`, selectedTags);
    } else {
      selectedTags = [...selectedTags, tag];
      debugTagConnections(tag);
    }
  }

  function selectCategory(category: string) {
    selectedCategory = category;
  }

  // Update clearAllFilters to use region instead of city
  function clearAllFilters() {
    selectedTags = [];
    preferences.activities = [];
    preferences = { ...preferences, country: 'any', region: 'any' };
    matches = [];
    hasSearched = false;
  }

  function updatePreferences(event: { detail: { field: string; value: any } }) {
    preferences = { ...preferences, [event.detail.field]: event.detail.value };
  }

  // Update totalFilters - use region instead of city
  $: totalFilters = selectedTags.length + preferences.activities.length + 
    (preferences.country !== 'any' ? 1 : 0) + 
    (preferences.region !== 'any' ? 1 : 0) +
    (preferences.budget !== 'any' ? 1 : 0) +
    (preferences.climate !== 'any' ? 1 : 0);

  // Update event handlers to accept the correct parameter types
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
    <!-- Header with glass effect -->
    <div class="text-center mb-8 bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg">
      <h1 class="text-5xl font-light mb-4 text-gray-900">Destination Resonance Finder</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Discover countries and cities that match your travel personality, interests, and style
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
      <!-- Filters Sidebar with glass effect -->
      <!-- Update the Main Content Area section -->
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

        <!-- Resonance Filters -->
        <div class="mb-6">
          <ResonanceFilters
            {preferences}
            {selectedTags}
            {isLoading}
            {allLocations}
            on:updatePreferences={updatePreferences}
            on:toggleTag={(e) => toggleTag(e.detail)}
            on:removeTag={removeTag}
            on:removeActivity={removeActivity}
            on:clearAll={clearAllFilters}
            on:findMatches={findMatches}
          />
        </div>

        <!-- Results with glass effect -->
        <div class="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg">
          <ResonanceResults
            {matches}
            {isLoading}
            {totalFilters}
            {hasSearched} 
          />
        </div>
      </div>
    </div>
  </div>
</div>