<!-- src/routes/filters/+page.svelte -->

<!--
No countries show up when I filter luxury and budget. Just comfort shows up.

Still need to categorize Things to Do. there are categories but they don't do anything.

We should make sure All Climates is the default and also make an "any budget level" filter and make that a default.
-->

<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { ResonanceMatcher } from '$lib/utils/resonanceMatcher';
  import { resonanceDataByRegion, activityCategories, getAllActivities, getAllTags, getAllLocations, tagCategories } from '$lib/data/resonanceData'; // CHANGED: filterData → resonanceData
  import type { ResonancePreferences, ResonanceScore, CityResonanceProfile } from '$lib/types/resonance'; // ADDED: CityResonanceProfile
  
  import ResonanceFilters from './components/ResonanceFilters.svelte';
  import ResonanceTabs from './components/ResonanceTabs.svelte';
  import ResonanceResults from './components/ResonanceResults.svelte';

  // Resonance state
  let preferences: ResonancePreferences = {
    travelStyle: 'slow',
    socialPreference: 'balanced',
    energyLevel: 'medium',
    climate: 'temperate',
    vibe: 'balanced',
    density: 'mixed',
    activities: [],
    foodScene: 'mixed',
    nightlife: 'moderate',
    budget: 'midrange',
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

  // Filter activities by category
  $: filteredActivities = selectedCategory === 'all' 
    ? allActivities 
    : allActivities.filter((activity: string) =>  // ADDED type annotation
        Object.values(activityCategories).flat().includes(activity)
      );

  function findMatches() {
    isLoading = true;
    setTimeout(() => {
      // 1. FIRST: Apply sidebar practical filters (OVERRIDE everything)
      let filteredLocations = allLocations.filter((location: CityResonanceProfile) => {  // ADDED type annotation
        // Budget filter (exact match required)
        if (location.costLevel !== preferences.budget) return false;
        
        // Climate filter (if not 'any')
        if (preferences.climate !== 'any' && location.climate !== preferences.climate) return false;
        
        // Internet quality filter (meets minimum)
        if (location.internetQuality < preferences.internetImportance - 2) return false;
        
        // Safety filter (meets minimum)  
        if (location.safetyScore < preferences.safetyImportance - 2) return false;
        
        return true;
      });
      
      // 2. THEN: Filter by selected tags (experience characteristics)
      if (selectedTags.length > 0) {
        filteredLocations = filteredLocations.filter((location: CityResonanceProfile) =>  // ADDED type annotation
          selectedTags.some(tag => location.tags.includes(tag))
        );
      }
      
      console.log('=== MATCHING DEBUG ===');
      console.log('After practical filters:', filteredLocations.map((l: CityResonanceProfile) => l.name));  // ADDED type annotation
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
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-4 py-8">
  <div class="max-w-7xl mx-auto">
    
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
          {totalFilters}
          {isLoading}
          on:updatePreferences={updatePreferences}
          on:toggleTag={(e) => toggleTag(e.detail)}
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