<script lang="ts">
  export let tripLength: number;
  export let totalCost: number;
  export let travelStyle: 'budget' | 'midrange' | 'luxury';
  
  const baseCosts = {
    budget: 40,
    midrange: 80,
    luxury: 200
  };
  
  $: totalCost = baseCosts[travelStyle] * tripLength;
</script>

<div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/30">
  <h2 class="text-2xl font-bold text-white mb-4">📅 Trip Duration & Budget</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label for="trip-length-slider" class="block text-white/90 text-sm font-medium mb-2">
        Trip Length: {tripLength} days
      </label>
      <input 
        id="trip-length-slider"
        type="range" 
        bind:value={tripLength}
        min="7" 
        max="90" 
        step="1"
        class="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
      />
      <div class="flex justify-between text-white/70 text-sm mt-1">
        <span>1 week</span>
        <span>3 months</span>
      </div>
    </div>
    <div class="bg-white/10 rounded-xl p-6 text-center">
      <div class="text-white/80 text-sm mb-1">Estimated Total Cost</div>
      <div class="text-3xl font-bold text-white">${totalCost}</div>
      <div class="text-white/70 text-sm mt-1">for {tripLength} days</div>
    </div>
  </div>
</div>