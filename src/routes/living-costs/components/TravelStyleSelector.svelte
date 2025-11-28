<!-- src/routes/living-costs/components/TravelStyleSelector.svelte -->
<script lang="ts">
  import type { LivingCostData } from '$lib/types/living-costs';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';

  export let travelStyle: 'budget' | 'midrange' | 'luxury';
  export let setTravelStyle: (style: 'budget' | 'midrange' | 'luxury') => void;
  export let selectedCurrency: string = 'USD';
  export let livingCostData: any; // Your LivingCostData type

  const travelStyles = [
    { 
      value: 'budget' as const, 
      label: 'Budget Traveler', 
      icon: '🎒' 
    },
    { 
      value: 'midrange' as const, 
      label: 'Comfort Traveler', 
      icon: '🏨' 
    },
    { 
      value: 'luxury' as const, 
      label: 'Luxury Traveler', 
      icon: '🌟' 
    }
  ];

  // Function to get formatted daily cost
  function getDailyCost(style: 'budget' | 'midrange' | 'luxury'): string {
    if (!livingCostData) return 'Check overview for prices';
    
    const baseCosts = livingCostData.baseCosts.dailyLiving[style];
    
    // If you have range data in your structure
    if (typeof baseCosts === 'object' && baseCosts.min && baseCosts.max) {
      const min = convertCurrency(baseCosts.min, livingCostData.currency, selectedCurrency);
      const max = convertCurrency(baseCosts.max, livingCostData.currency, selectedCurrency);
      return `${formatCurrency(min, selectedCurrency)}-${formatCurrency(max, selectedCurrency)}/day`;
    }
    
    // Single value fallback
    const convertedCost = convertCurrency(baseCosts, livingCostData.currency, selectedCurrency);
    return `${formatCurrency(Math.round(convertedCost), selectedCurrency)}/day`;
  }
</script>

<div class="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-4">💰 Travel Style</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each travelStyles as style}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 ${
          travelStyle === style.value 
            ? 'bg-emerald-50 border-emerald-200 shadow-sm' 
            : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
        }`}
        on:click={() => setTravelStyle(style.value)}
      >
        <div class="text-2xl mb-2">{style.icon}</div>
        <div class="text-gray-900 font-medium mb-1">{style.label}</div>
      </button>
    {/each}
  </div>
</div>
