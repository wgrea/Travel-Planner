<!-- src/routes/filters/components/BudgetFilters.svelte -->
<script lang="ts">
  export let monthlyBudget: [number, number];
  export let travelStyle: string;
</script>

<h2 class="text-3xl font-bold mb-6 border-b border-white/50 pb-3 flex items-center gap-2">
  <span class="text-3xl">💰</span> Budget & Core Requirements
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  <!-- Monthly Budget Range -->
  <div>
    <label for="min-budget" class="block text-lg font-medium mb-3">
      💸 Monthly Budget: <span class="text-lime-300 font-bold">${monthlyBudget[0]} - ${monthlyBudget[1]}</span>
    </label>
    <div class="space-y-2">
      <input 
        id="min-budget"
        type="range"
        min="500"
        max="3000"
        step="100"
        bind:value={monthlyBudget[0]}
        class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/50"
      >
      <input 
        id="max-budget"
        type="range"
        min="500"
        max="3000"
        step="100"
        bind:value={monthlyBudget[1]}
        class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/50"
      >
    </div>
  </div>

  <!-- Travel Style -->
  <div>
    <label for="travel-style" class="block text-lg font-medium mb-2">🚶 Travel Style</label>
    <select 
      id="travel-style"
      bind:value={travelStyle}
      class="w-full p-3 rounded-xl bg-white/25 backdrop-blur-sm border-2 border-white/40 text-white focus:outline-none focus:border-white/80"
    >
      <option value="Slow Travel" class="text-gray-800">Slow Travel (1+ months)</option>
      <option value="Fast Travel" class="text-gray-800">Fast Travel (2-4 weeks)</option>
      <option value="Base + Explore" class="text-gray-800">Base + Explore</option>
    </select>
  </div>
</div>