<!-- src/routes/filters/components/FoodHealthFilters.svelte -->
<script lang="ts">
  export let foodPreferences: string[];
</script>

<h2 class="text-3xl font-bold mt-8 mb-6 border-b border-white/50 pb-3 flex items-center gap-2">
  <span class="text-3xl">🍜</span> Food & Health
</h2>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
  {#each ['Street Food', 'Vegan Options', 'Drinkable Tap Water', 'Good Hospitals'] as pref}
    <label class="flex items-center space-x-2 p-3 rounded-xl bg-white/20 border border-white/40 cursor-pointer transition-colors duration-200 hover:bg-white/30">
      <input 
        type="checkbox" 
        bind:group={foodPreferences} 
        value={pref}
        class="w-5 h-5 form-checkbox text-orange-500 bg-white/40 border-white/60 rounded-md focus:ring-orange-400"
      >
      <span class="text-lg">{pref.includes('Street') ? '🍢' : pref.includes('Vegan') ? '🌱' : pref.includes('Water') ? '💧' : '🏥'} {pref}</span>
    </label>
  {/each}
</div>