<!-- src/routes/filters/components/BudgetFilters.svelte -->
<script lang="ts">
  export let monthlyBudget: [number, number];
  export let travelStyle: string;
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
    <span class="text-2xl">💰</span> Budget & Core Requirements
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Monthly Budget Range -->
    <div>
      <div class="text-gray-700 font-medium mb-3">
        💸 Monthly Budget: <span class="text-emerald-600 font-bold">${monthlyBudget[0]} - ${monthlyBudget[1]}</span>
      </div>
      <div class="space-y-4">
        <div>
          <label for="min-budget" class="block text-sm text-gray-600 mb-1">Min: ${monthlyBudget[0]}</label>
          <input 
            id="min-budget"
            type="range"
            min="500"
            max="3000"
            step="100"
            bind:value={monthlyBudget[0]}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          >
        </div>
        <div>
          <label for="max-budget" class="block text-sm text-gray-600 mb-1">Max: ${monthlyBudget[1]}</label>
          <input 
            id="max-budget"
            type="range"
            min="500"
            max="3000"
            step="100"
            bind:value={monthlyBudget[1]}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          >
        </div>
      </div>
    </div>

    <!-- Travel Style -->
    <div>
      <label for="travel-style" class="block text-gray-700 font-medium mb-2">🚶 Travel Style</label>
      <select 
        id="travel-style"
        bind:value={travelStyle}
        class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="Slow Travel">Slow Travel (1+ months)</option>
        <option value="Fast Travel">Fast Travel (2-4 weeks)</option>
        <option value="Base + Explore">Base + Explore</option>
      </select>
    </div>
  </div>
</div>

<style>
  .slider::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #10b981;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .slider::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #10b981;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
</style>