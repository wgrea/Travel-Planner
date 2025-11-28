<!-- src/routes/filters/components/ResonanceTabs.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ResonancePreferences } from '$lib/types/resonance';
  
  export let preferences: ResonancePreferences;
  export let selectedTags: string[] = [];
  export let selectedCategory: string = 'all';
  export let activeTab: 'tags' | 'activities' = 'tags';
  
  export let allTags: string[] = [];
  export let allActivities: string[] = [];
  export let filteredActivities: string[] = [];
  export let activityCategories: Record<string, string[]> = {};
  export let tagCategories: Record<string, string[]> = {}; // ADD THIS

  const dispatch = createEventDispatcher<{
    toggleTag: string;
    toggleActivity: string;
    selectCategory: string;
    changeTab: 'tags' | 'activities';
  }>();
</script>

<!-- Tabs -->
<div class="flex border-b border-gray-200 mb-6 bg-white rounded-2xl p-2 shadow-sm">
  <button
    class="flex-1 px-4 py-3 font-medium rounded-lg transition-all {activeTab === 'tags' ? 'text-indigo-600 bg-indigo-50 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}"
    on:click={() => dispatch('changeTab', 'tags')}
  >
    <div class="text-center">
      <div class="text-lg">🏷️</div>
      <div>Location Vibes</div>
      <div class="text-xs text-gray-400 mt-1">{allTags.length} tags</div>
    </div>
  </button>
  <button
    class="flex-1 px-4 py-3 font-medium rounded-lg transition-all {activeTab === 'activities' ? 'text-indigo-600 bg-indigo-50 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}"
    on:click={() => dispatch('changeTab', 'activities')}
  >
    <div class="text-center">
      <div class="text-lg">🎯</div>
      <div>Things to Do</div>
      <div class="text-xs text-gray-400 mt-1">{allActivities.length} activities</div>
    </div>
  </button>
</div>

<!-- Tags Tab - ORGANIZED BY CATEGORIES -->
{#if activeTab === 'tags'}
  <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg mb-6">
    <h2 class="text-xl font-semibold mb-4 text-gray-900">
      Start with Tags to Narrow Down
    </h2>
    <p class="text-gray-600 mb-6">Select tags that describe the kind of experience you're looking for:</p>
    
    <!-- Organized Tag Categories -->
    <div class="space-y-8">
      {#each Object.entries(tagCategories) as [category, tags]}
        <div class="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
          <h3 class="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
            {#if category === 'experience'}
              <span>🎯</span> Experience Types
            {:else if category === 'vibe'}
              <span>🌡️</span> Vibe & Atmosphere
            {:else if category === 'geography'}
              <span>🗺️</span> Geography & Setting
            {:else if category === 'culture'}
              <span>🎭</span> Culture & Activities
            {:else if category === 'specific'}
              <span>⭐</span> Unique Features
            {/if}
          </h3>
          <p class="text-sm text-gray-600 mb-3">
            {#if category === 'experience'}
              What kind of trip are you looking for?
            {:else if category === 'vibe'}
              How do you want it to feel?
            {:else if category === 'geography'}
              What setting appeals to you?
            {:else if category === 'culture'}
              What cultural aspects interest you?
            {:else if category === 'specific'}
              Any specific interests or features?
            {/if}
          </p>
          <div class="flex flex-wrap gap-2">
            {#each tags as tag}
              <button
                class="px-4 py-2 rounded-full border-2 transition-all duration-200 hover:scale-105 {selectedTags.includes(tag) 
                  ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md' 
                  : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50/50'}"
                on:click={() => dispatch('toggleTag', tag)}
              >
                #{tag.replace('-', ' ')}
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}

<!-- Activities Tab -->
{#if activeTab === 'activities'}
  <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg mb-6">
    <h2 class="text-xl font-semibold mb-4 text-gray-900">
      Select Your Favorite Activities
    </h2>
    
    <!-- Activity Categories -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        class="px-4 py-2 rounded-full text-sm font-medium {selectedCategory === 'all' 
          ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
        on:click={() => dispatch('selectCategory', 'all')}
      >
        All Activities
      </button>
      {#each Object.entries(activityCategories) as [category, activities]}
        <button
          class="px-4 py-2 rounded-full text-sm font-medium {selectedCategory === category 
            ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
          on:click={() => dispatch('selectCategory', category)}
        >
          {category} ({activities.length})
        </button>
      {/each}
    </div>

    <!-- Activities Grid -->
    <div class="flex flex-wrap gap-3">
      {#each filteredActivities as activity}
        <button
          class="px-5 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105 {preferences.activities.includes(activity) 
            ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md' 
            : 'border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-purple-50/50'}"
          on:click={() => dispatch('toggleActivity', activity)}
        >
          {activity}
        </button>
      {/each}
    </div>
  </div>
{/if}