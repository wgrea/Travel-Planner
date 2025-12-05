<!-- src/routes/flight-costs/components/MonthFilter.svelte -->
<script lang="ts">
  interface Props {
    selectedMonth?: string;
  }
  
  let { selectedMonth = 'All Months' }: Props = $props();
  
  const months = [
    'All Months', 'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'
  ];
</script>

<div class="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/70">
  <h3 class="font-medium text-gray-800 mb-3 flex items-center gap-2">
    <span>📅</span> Filter by Month
  </h3>
  <div class="flex flex-wrap gap-2">
    {#each months as month}
      <button
        class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
          {selectedMonth === month 
            ? 'bg-blue-500 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
        onclick={() => selectedMonth = month}
      >
        {month}
      </button>
    {/each}
  </div>
</div>