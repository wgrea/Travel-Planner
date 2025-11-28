<!-- src/routes/resonance/+page.svelte -->

<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { ResonanceMatcher } from '$lib/utils/resonanceMatcher';
  import { resonanceDataByRegion, activityCategories, getAllActivities, getAllTags, getAllLocations, tagCategories } from '$lib/data/resonanceData';
  import type { ResonancePreferences, ResonanceScore, CityResonanceProfile } from '$lib/types/resonance';
  
  // FIX: Import as named export
  import ResonanceFilters from './components/ResonanceFilters.svelte';
  import ResonanceTabs from './components/ResonanceTabs.svelte';
  import ResonanceResults from './components/ResonanceResults.svelte';

  // FIXED: Now 'any' is valid for both budget and climate
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
    budget: 'any', // Now valid
    internetImportance: 8,
    safetyImportance: 8
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

  function findMatches() {
    isLoading = true;
    setTimeout(() => {
      let filteredLocations = allLocations.filter((location: CityResonanceProfile) => {
        // FIXED: Complete budget hierarchy
        if (preferences.budget !== 'any') {
          const budgetHierarchy = {
            'budget': ['budget'], // Only budget
            'midrange': ['midrange'], // Only comfortable
            'luxury': ['luxury'], // Only luxury
            'budget-midrange': ['budget', 'midrange'], // Budget + comfortable
            'midrange-luxury': ['midrange', 'luxury'], // Comfortable + luxury
            'all-levels': ['budget', 'midrange', 'luxury'] // All levels
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
      console.log('Budget filter:', preferences.budget);
      console.log('Climate filter:', preferences.climate);
      console.log('After practical filters:', filteredLocations.map((l: CityResonanceProfile) => l.name));
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

  function clearAllFilters() {
    selectedTags = [];
    preferences.activities = [];
    matches = [];
  }

  function updatePreferences(event: { detail: { field: string; value: any } }) {
    preferences = { ...preferences, [event.detail.field]: event.detail.value };
  }

  // Auto-update matches count when filters change
  $: totalFilters = selectedTags.length + preferences.activities.length;

  // FIX: Update event handlers to accept the correct parameter types
  function removeTag(event: { detail: string }) {
    selectedTags = selectedTags.filter(t => t !== event.detail);
  }

  function removeActivity(event: { detail: string }) {
    preferences.activities = preferences.activities.filter(a => a !== event.detail);
  }

</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-4 py-8">
  <div class="max-w-7xl mx-auto">
    
  <!-- Back Button -->
  <button on:click={() => goto('/')} class="group mb-8 ml-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
  </button>

    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-light mb-4 text-gray-900">Destination Resonance Finder</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Discover countries and cities that match your travel personality, interests, and style
      </p>
    </div>


    <!-- Quick Stats -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
        <div class="text-2xl font-semibold text-indigo-600">{allLocations.length}</div>
        <div class="text-sm text-gray-600">Locations</div>
      </div>
      <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
        <div class="text-2xl font-semibold text-green-600">{allTags.length}</div>
        <div class="text-sm text-gray-600">Tags</div>
      </div>
      <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
        <div class="text-2xl font-semibold text-purple-600">{allActivities.length}</div>
        <div class="text-sm text-gray-600">Activities</div>
      </div>
      <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
        <div class="text-2xl font-semibold text-orange-600">{totalFilters}</div>
        <div class="text-sm text-gray-600">Filters Active</div>
      </div>
      <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
        <div class="text-2xl font-semibold text-red-600">{matches.length}</div>
        <div class="text-sm text-gray-600">Matches</div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
      
      <!-- Filters Sidebar -->
      <div class="xl:col-span-1">
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

        <ResonanceResults
          {matches}
          {isLoading}
          {totalFilters}
        />
      </div>
    </div>
  </div>
</div>
