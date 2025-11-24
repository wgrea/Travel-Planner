<!-- src/routes/living-costs/components/TripBudgetCalculator.svelte -->
<script lang="ts">
  export let tripLength: number;
  export let totalCost: number;
  export let selectedCurrency: string = 'USD';
  
  // Remove travelStyle if not used, or use it
  // If you want to show which style the budget is for:
  export let travelStyle: 'budget' | 'midrange' | 'luxury';
</script>

<div class="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-4">📅 Trip Duration & Budget</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label for="trip-length-slider" class="block text-gray-700 text-sm font-medium mb-2">
        Trip Length: {tripLength} days
      </label>
      <input 
        id="trip-length-slider"
        type="range" 
        bind:value={tripLength}
        min="7" 
        max="90" 
        step="1"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div class="flex justify-between text-gray-500 text-sm mt-1">
        <span>1 week</span>
        <span>3 months</span>
      </div>
      <!-- Show which travel style this budget is for -->
      <div class="mt-4 text-sm text-gray-600">
        <span class="font-medium">Travel Style:</span> {travelStyle}
      </div>
    </div>
    <div class="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-200">
      <div class="text-gray-600 text-sm mb-1">Estimated Total Cost</div>
      <div class="text-3xl font-bold text-gray-900">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: selectedCurrency
        }).format(totalCost)}
      </div>
      <div class="text-gray-500 text-sm mt-1">for {tripLength} days</div>
      <div class="text-xs text-gray-400 mt-2">{travelStyle} style</div>
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