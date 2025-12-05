<!-- src/routes/flight-costs/components/MonthFilter.svelte -->
<script lang="ts">
  let { 
    selectedMonth = 'All Months',
    onMonthChange = (month: string) => { selectedMonth = month; },
    cheapestMonths = [],
    sweetSpotMonths = [],
    expensiveMonths = []
  } = $props<{
    selectedMonth?: string;
    onMonthChange?: (month: string) => void;
    cheapestMonths?: string[];
    sweetSpotMonths?: string[];
    expensiveMonths?: string[];
  }>();
  
  const allMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Function to determine month category
  function getMonthCategory(month: string): 'cheapest' | 'sweet-spot' | 'expensive' | 'normal' {
    if (cheapestMonths.includes(month)) return 'cheapest';
    if (sweetSpotMonths.includes(month)) return 'sweet-spot';
    if (expensiveMonths.includes(month)) return 'expensive';
    return 'normal';
  }
  
  // Function to get button class based on category
  function getMonthButtonClass(month: string): string {
    const category = getMonthCategory(month);
    const isSelected = selectedMonth === month;
    
    const baseClasses = 'px-3 py-2 rounded-lg border transition-all duration-200 text-sm font-medium';
    
    if (isSelected) {
      // Selected state - more prominent
      switch (category) {
        case 'cheapest':
          return `${baseClasses} bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-blue-700 ring-2 ring-offset-1 ring-blue-400`;
        case 'sweet-spot':
          return `${baseClasses} bg-gradient-to-r from-green-600 to-emerald-700 text-white border-emerald-700 ring-2 ring-offset-1 ring-green-400`;
        case 'expensive':
          return `${baseClasses} bg-gradient-to-r from-red-600 to-rose-700 text-white border-rose-700 ring-2 ring-offset-1 ring-red-400`;
        default:
          return `${baseClasses} bg-gradient-to-r from-gray-600 to-gray-700 text-white border-gray-700 ring-2 ring-offset-1 ring-gray-400`;
      }
    } else {
      // Unselected state
      switch (category) {
        case 'cheapest':
          return `${baseClasses} bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800 border-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-indigo-300`;
        case 'sweet-spot':
          return `${baseClasses} bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 border-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-emerald-300`;
        case 'expensive':
          return `${baseClasses} bg-gradient-to-r from-red-100 to-rose-200 text-red-800 border-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-rose-300`;
        default:
          return `${baseClasses} bg-white/80 text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-white`;
      }
    }
  }
</script>

<div class="month-filter p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
    <div>
      <h3 class="text-lg font-medium text-gray-900 flex items-center gap-2 mb-1">
        <span class="text-xl">📅</span> Filter by Month
      </h3>
      <p class="text-sm text-gray-600">
        Color-coded by price category for {selectedMonth !== 'All Months' ? selectedMonth : 'your destination'}
      </p>
    </div>
    
    <!-- Legend -->
    <div class="flex flex-wrap gap-3 text-xs">
      <div class="flex items-center gap-1">
        <div class="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        <span class="text-gray-700">Cheapest</span>
      </div>
      <div class="flex items-center gap-1">
        <div class="w-3 h-3 rounded bg-gradient-to-r from-green-500 to-emerald-600"></div>
        <span class="text-gray-700">Sweet Spot</span>
      </div>
      <div class="flex items-center gap-1">
        <div class="w-3 h-3 rounded bg-gradient-to-r from-red-500 to-rose-600"></div>
        <span class="text-gray-700">Peak Season</span>
      </div>
      <div class="flex items-center gap-1">
        <div class="w-3 h-3 rounded bg-gray-300"></div>
        <span class="text-gray-700">Normal</span>
      </div>
    </div>
  </div>
  
  <!-- All Months Button -->
  <div class="mb-4">
    <button
      onclick={() => onMonthChange('All Months')}
      class={`w-full px-4 py-3 rounded-lg border transition-all duration-200 font-medium ${selectedMonth === 'All Months' ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-blue-700' : 'bg-white/80 text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-white'}`}
    >
      {selectedMonth === 'All Months' ? '✓ Showing All Months' : 'Show All Months'}
    </button>
  </div>
  
  <!-- Month Grid -->
  <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
    {#each allMonths as month}
      <button
        onclick={() => onMonthChange(month)}
        class={getMonthButtonClass(month)}
      >
        {month.slice(0, 3)}
      </button>
    {/each}
  </div>
  
  <!-- Selected Month Info -->
  {#if selectedMonth !== 'All Months'}
    <div class="mt-6 p-4 rounded-lg border bg-gradient-to-r from-blue-50 to-indigo-100 border-blue-200">
      <div class="flex items-center gap-3">
        <div class="text-2xl">ℹ️</div>
        <div>
          <h4 class="font-medium text-blue-900 mb-1">Viewing: {selectedMonth}</h4>
          <p class="text-sm text-blue-700">
            {#if getMonthCategory(selectedMonth) === 'cheapest'}
              This is typically one of the <strong>cheapest months</strong> to fly here. Expect savings of 20-40% compared to peak season.
            {:else if getMonthCategory(selectedMonth) === 'sweet-spot'}
              This is a <strong>sweet spot month</strong> - great balance of price, weather, and smaller crowds.
            {:else if getMonthCategory(selectedMonth) === 'expensive'}
              This is <strong>peak season</strong> with higher prices and more crowds. Book well in advance.
            {:else}
              This month has <strong>average pricing</strong>. Check specific dates for best deals.
            {/if}
          </p>
        </div>
      </div>
    </div>
  {:else if cheapestMonths.length > 0}
    <!-- Summary when viewing all months -->
    <div class="mt-6 space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {#if cheapestMonths.length > 0}
          <div class="p-4 rounded-lg border bg-gradient-to-r from-blue-50 to-indigo-100 border-blue-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 rounded-full bg-blue-500"></div>
              <h4 class="font-medium text-blue-900">Cheapest Months</h4>
            </div>
            <p class="text-sm text-blue-700">{cheapestMonths.join(', ')}</p>
          </div>
        {/if}
        
        {#if sweetSpotMonths.length > 0}
          <div class="p-4 rounded-lg border bg-gradient-to-r from-green-50 to-emerald-100 border-green-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              <h4 class="font-medium text-green-900">Sweet Spot</h4>
            </div>
            <p class="text-sm text-green-700">{sweetSpotMonths.join(', ')}</p>
          </div>
        {/if}
        
        {#if expensiveMonths.length > 0}
          <div class="p-4 rounded-lg border bg-gradient-to-r from-red-50 to-rose-100 border-red-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 rounded-full bg-red-500"></div>
              <h4 class="font-medium text-red-900">Peak Season</h4>
            </div>
            <p class="text-sm text-red-700">{expensiveMonths.join(', ')}</p>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>