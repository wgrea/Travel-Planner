<!-- src/routes/filters/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { ResonanceMatcher } from '$lib/utils/resonanceMatcher';
  import { resonanceDataByRegion, activityCategories, getAllActivities, getAllTags, getAllCountries, getAllBestFor } from '$lib/data/filterData';
  import type { ResonancePreferences, ResonanceScore } from '$lib/types/resonance';
  
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
  let selectedBestFor: string[] = [];
  let activeTab: 'tags' | 'activities' | 'bestFor' = 'tags';

  // Get all available data
  const allCountries = getAllCountries();
  const allActivities = getAllActivities();
  const allTags = getAllTags();
  const allBestFor = getAllBestFor();

  // Filter activities by category
  $: filteredActivities = selectedCategory === 'all' 
    ? allActivities 
    : allActivities.filter(activity => 
        Object.values(activityCategories).flat().includes(activity)
      );

  function findMatches() {
    isLoading = true;
    setTimeout(() => {
      // Filter countries by selected tags first, then run resonance matching
      let filteredCountries = allCountries;
      
      if (selectedTags.length > 0) {
        filteredCountries = filteredCountries.filter(country => 
          selectedTags.some(tag => country.tags.includes(tag))
        );
      }
      
      if (selectedBestFor.length > 0) {
        filteredCountries = filteredCountries.filter(country => 
          selectedBestFor.some(category => country.bestFor.includes(category))
        );
      }
      
      matches = ResonanceMatcher.findTopMatches(preferences, filteredCountries);
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

  function toggleBestFor(category: string) {
    if (selectedBestFor.includes(category)) {
      selectedBestFor = selectedBestFor.filter(b => b !== category);
    } else {
      selectedBestFor = [...selectedBestFor, category];
    }
  }

  function selectCategory(category: string) {
    selectedCategory = category;
  }

  function clearAllFilters() {
    selectedTags = [];
    selectedBestFor = [];
    preferences.activities = [];
    matches = [];
  }

  function updatePreferences(event: { detail: { field: string; value: any } }) {
    preferences = { ...preferences, [event.detail.field]: event.detail.value };
  }

  // Auto-update matches count when filters change
  $: totalFilters = selectedTags.length + selectedBestFor.length + preferences.activities.length;
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-4 py-8">
  <div class="max-w-7xl mx-auto">
    
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-light mb-4 text-gray-900">Destination Resonance Finder</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Discover countries that match your travel personality, interests, and style
      </p>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
      <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
        <div class="text-2xl font-semibold text-indigo-600">{allCountries.length}</div>
        <div class="text-sm text-gray-600">Countries</div>
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
        <div class="text-2xl font-semibold text-blue-600">{allBestFor.length}</div>
        <div class="text-sm text-gray-600">Categories</div>
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
          {selectedBestFor}
          {totalFilters}
          {isLoading}
          on:updatePreferences={updatePreferences}
          on:toggleTag={(e) => toggleTag(e.detail)}
          on:toggleBestFor={(e) => toggleBestFor(e.detail)}
          on:clearAll={clearAllFilters}
          on:findMatches={findMatches}
        />
      </div>

      <!-- Main Content Area -->
      <div class="xl:col-span-3">
        <ResonanceTabs
          {preferences}
          {selectedTags}
          {selectedBestFor}
          {selectedCategory}
          {activeTab}
          {allTags}
          {allBestFor}
          {allActivities}
          {filteredActivities}
          {activityCategories}
          on:toggleTag={(e) => toggleTag(e.detail)}
          on:toggleBestFor={(e) => toggleBestFor(e.detail)}
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