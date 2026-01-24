<!-- src/routes/living-costs/components/LivingCostsGrid.svelte -->
<script lang="ts">
  export let countries: string[];
  export let oncountryclick: (country: string) => void;
  
  // Mock data for living costs
  const livingCostsData: Record<string, {
    monthlyBudget: number;
    accommodation: number;
    food: number;
    transportation: number;
    entertainment: number;
  }> = {
    'Thailand': { monthlyBudget: 1200, accommodation: 500, food: 300, transportation: 100, entertainment: 200 },
    'Vietnam': { monthlyBudget: 900, accommodation: 400, food: 250, transportation: 80, entertainment: 150 },
    'Portugal': { monthlyBudget: 1800, accommodation: 800, food: 400, transportation: 150, entertainment: 300 },
    'Mexico': { monthlyBudget: 1400, accommodation: 600, food: 350, transportation: 120, entertainment: 250 },
  };
  
  function formatCurrency(amount: number): string {
    return `$${amount.toFixed(0)}`;
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{Math.min(countries.length, 4)} gap-6">
  {#each countries as country}
    {#if livingCostsData[country]}
      <button
        on:click={() => oncountryclick(country)}
        class="text-left bg-white rounded-xl border border-emerald-200 p-6 hover:shadow-lg transition-shadow w-full group"
        type="button"
      >
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-semibold text-emerald-900">{country}</h3>
          <svg class="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        
        <!-- Living Costs Stats -->
        <div class="space-y-3">
          <div class="p-2 bg-emerald-50 rounded">
            <div class="text-sm text-emerald-600">Monthly Budget</div>
            <div class="text-xl font-bold text-emerald-900">
              {formatCurrency(livingCostsData[country].monthlyBudget)}
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-3">
            <div class="p-2 bg-emerald-50 rounded">
              <div class="text-sm text-emerald-600">Accommodation</div>
              <div class="text-lg font-semibold text-emerald-900">
                {formatCurrency(livingCostsData[country].accommodation)}
              </div>
            </div>
            <div class="p-2 bg-emerald-50 rounded">
              <div class="text-sm text-emerald-600">Food</div>
              <div class="text-lg font-semibold text-emerald-900">
                {formatCurrency(livingCostsData[country].food)}
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-3">
            <div class="p-2 bg-emerald-50 rounded">
              <div class="text-sm text-emerald-600">Transportation</div>
              <div class="text-lg font-semibold text-emerald-900">
                {formatCurrency(livingCostsData[country].transportation)}
              </div>
            </div>
            <div class="p-2 bg-emerald-50 rounded">
              <div class="text-sm text-emerald-600">Entertainment</div>
              <div class="text-lg font-semibold text-emerald-900">
                {formatCurrency(livingCostsData[country].entertainment)}
              </div>
            </div>
          </div>
        </div>
      </button>
    {:else}
      <button
        on:click={() => oncountryclick(country)}
        class="text-left bg-white rounded-xl border border-emerald-200 p-6 hover:shadow-lg transition-shadow w-full"
        type="button"
      >
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-semibold text-emerald-900">{country}</h3>
          <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <div class="text-gray-600">
          Click to view detailed living costs
        </div>
      </button>
    {/if}
  {/each}
</div>