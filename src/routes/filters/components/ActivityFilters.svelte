<!-- src/routes/filters/components/ActivityFilters.svelte -->
<script lang="ts">
  export let activities: string[];
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
    <span class="text-2xl">🌊</span> Activities & Interests
  </h2>

  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
    {#each ['Scuba Diving', 'Spa & Wellness', 'Dance & Social', 'Tech Meetups', 'Beach Life', 'Mountain Hiking'] as activity}
      <label class="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-blue-50 hover:border-blue-200">
        <input 
          type="checkbox" 
          bind:group={activities} 
          value={activity}
          class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
        >
        <span class="text-gray-900 text-sm font-medium">
          {activity === 'Scuba Diving' ? '🤿' : activity === 'Spa & Wellness' ? '💆' : activity === 'Dance & Social' ? '💃' : activity === 'Tech Meetups' ? '👨‍💻' : activity === 'Beach Life' ? '🏖️' : '⛰️'} {activity}
        </span>
      </label>
    {/each}
  </div>
</div>