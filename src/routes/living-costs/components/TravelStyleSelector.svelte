<!-- src/routes/living-costs/components/TravelStyleSelector.svelte -->
<script lang="ts">
  import type { LivingCostData } from '$lib/types/living-costs';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';

  // Use $props() for Svelte 5
  let {
    travelStyle = 'budget',
    setTravelStyle,
    selectedCurrency = 'USD',
    livingCostData
  } = $props<{
    travelStyle: 'budget' | 'midrange' | 'luxury' | 'nomad';
    setTravelStyle: (style: 'budget' | 'midrange' | 'luxury' | 'nomad') => void;
    selectedCurrency: string;
    livingCostData: any;
  }>();

  const travelStyles = [
    { value: 'budget' as const, label: 'Budget Traveler', icon: '🎒' },
    { value: 'nomad' as const, label: 'Digital Nomad', icon: '💻' },
    { value: 'midrange' as const, label: 'Comfort Traveler', icon: '🏨' },
    { value: 'luxury' as const, label: 'Luxury Traveler', icon: '🌟' }
  ];

  // Function to get formatted daily cost
  function getDailyCost(style: 'budget' | 'midrange' | 'luxury' | 'nomad'): string {
    if (!livingCostData) return 'Check overview for prices';
    
    // For nomad style, calculate differently
    if (style === 'nomad') {
      const hostelCost = livingCostData.baseCosts.accommodation.budget.hostel || 30;
      const cafeCost = livingCostData.baseCosts.food.streetFood || 5;
      const total = convertCurrency(hostelCost + cafeCost, livingCostData.currency, selectedCurrency);
      return `${formatCurrency(Math.round(total), selectedCurrency)}/day`;
    }
    
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
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each travelStyles as style}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 ${
          travelStyle === style.value 
            ? style.value === 'budget' 
              ? 'bg-emerald-50 border-emerald-200 shadow-sm' 
              : style.value === 'nomad'
              ? 'bg-indigo-50 border-indigo-200 shadow-sm'
              : style.value === 'midrange'
              ? 'bg-amber-50 border-amber-200 shadow-sm'
              : 'bg-purple-50 border-purple-200 shadow-sm'
            : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
        }`}
        onclick={() => setTravelStyle(style.value)}
      >
        <div class="text-2xl mb-2">{style.icon}</div>
        <div class="text-gray-900 font-medium mb-1">{style.label}</div>
        <div class="text-xs text-gray-500">{getDailyCost(style.value)}</div>
      </button>
    {/each}
  </div>
</div>