<!-- src/routes/filters/components/FilterSection.svelte -->
<script lang="ts">
  export let selectedMonth: string = '';
  export let maxPrice: number = 2000;
  
  // Add unique IDs for accessibility
  let monthId = 'month-' + Math.random().toString(36).substr(2, 9);
  let priceId = 'price-' + Math.random().toString(36).substr(2, 9);
</script>

<div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
  <h3 class="text-white text-xl font-semibold mb-4">Filter Flights</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <!-- FIX: Add proper label association -->
      <label for={monthId} class="text-white/90 text-sm font-medium mb-2 block">Travel Month</label>
      <select 
        id={monthId}
        class="w-full bg-white/90 rounded-lg px-3 py-2 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
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
      <!-- FIX: Add proper label association -->
      <label for={priceId} class="text-white/90 text-sm font-medium mb-2 block">Max Budget: ${maxPrice}</label>
      <input 
        id={priceId}
        type="range" 
        min="500" 
        max="5000" 
        step="100"
        bind:value={maxPrice}
        class="w-full"
      />
    </div>
  </div>
</div>