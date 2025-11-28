<!-- src/routes/filters/components/FilterSection.svelte -->
<script lang="ts">
  export let selectedMonth: string = '';
  export let maxPrice: number = 2000;
  
  let monthId = 'month-' + Math.random().toString(36).substr(2, 9);
  let priceId = 'price-' + Math.random().toString(36).substr(2, 9);
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-gray-900 text-lg font-semibold mb-4">Filter Flights</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label for={monthId} class="text-gray-700 text-sm font-medium mb-2 block">Travel Month</label>
      <select 
        id={monthId}
        class="w-full bg-white rounded-lg px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        bind:value={selectedMonth}
      >
        <option value="">Any Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
    
    <div>
      <label for={priceId} class="text-gray-700 text-sm font-medium mb-2 block">Max Budget: ${maxPrice}</label>
      <input 
        id={priceId}
        type="range" 
        min="500" 
        max="5000" 
        step="100"
        bind:value={maxPrice}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
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
