<!-- src/routes/filters/components/FoodHealthFilters.svelte -->
<script lang="ts">
  export let foodPreferences: string[];
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
    <span class="text-2xl">🍜</span> Food & Health
  </h2>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    {#each ['Street Food', 'Vegan Options', 'Drinkable Tap Water', 'Good Hospitals'] as pref}
      <label class="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-orange-50 hover:border-orange-200">
        <input 
          type="checkbox" 
          bind:group={foodPreferences} 
          value={pref}
          class="w-5 h-5 text-orange-600 bg-white border-gray-300 rounded focus:ring-orange-500"
        >
        <span class="text-gray-900 text-sm font-medium">
          {pref.includes('Street') ? '🍢' : pref.includes('Vegan') ? '🌱' : pref.includes('Water') ? '💧' : '🏥'} {pref}
        </span>
      </label>
    {/each}
  </div>
</div>
