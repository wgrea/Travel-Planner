<!-- src/routes/filters/components/ActivityFilters.svelte -->
<script lang="ts">
  export let activities: string[];
</script>

<h2 class="text-3xl font-bold mt-8 mb-6 border-b border-white/50 pb-3 flex items-center gap-2">
  <span class="text-3xl">🌊</span> Activities & Interests
</h2>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
  {#each ['Scuba Diving', 'Spa & Wellness', 'Dance & Social', 'Tech Meetups', 'Beach Life', 'Mountain Hiking'] as activity}
    <label class="flex items-center space-x-2 p-3 rounded-xl bg-white/20 border border-white/40 cursor-pointer transition-colors duration-200 hover:bg-white/30">
      <input 
        type="checkbox" 
        bind:group={activities} 
        value={activity}
        class="w-5 h-5 form-checkbox text-blue-500 bg-white/40 border-white/60 rounded-md focus:ring-blue-400"
      >
      <span class="text-lg">{activity === 'Scuba Diving' ? '🤿' : activity === 'Spa & Wellness' ? '💆' : activity === 'Dance & Social' ? '💃' : activity === 'Tech Meetups' ? '👨‍💻' : activity === 'Beach Life' ? '🏖️' : '⛰️'} {activity}</span>
    </label>
  {/each}
</div>