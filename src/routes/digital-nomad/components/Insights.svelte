<!-- src/routes/digital-nomad/components/NomadInsights.svelte -->
<script lang="ts">
  import type { NomadData } from '$lib/data/nomadData';
  import type { BudgetCategory } from '$lib/types/digital-nomad';
  
  let { 
    countryData,
    selectedBudget 
  } = $props<{
    countryData?: NomadData;
    selectedBudget: BudgetCategory;
  }>();
  
  const budgetTips: Record<BudgetCategory, string[]> = {
    zero_spend: [
      'Check library hours in advance',
      'Bring a power bank for public spaces',
      'Look for parks with free WiFi'
    ],
    already_paid: [
      'Ask about dedicated work areas',
      'Check WiFi speed before booking',
      'Look for hostels with co-working spaces'
    ],
    small_purchase: [
      'Order during off-peak hours',
      'Tip well if staying long',
      'Check outlet availability before settling'
    ],
    direct_payment: [
      'Ask about weekly/monthly discounts',
      'Use free trial days first',
      'Check for networking events included'
    ]
  };
  
  // Get tips for current budget category - FIXED: Type assertion
  const currentTips = $derived(budgetTips[selectedBudget as BudgetCategory] || []);
</script>

<div class="bg-white rounded-xl border border-blue-200 p-6">
  <h3 class="text-lg font-semibold text-blue-900 mb-6">📊 Insights & Tips</h3>
  
  {#if countryData}
    <div class="space-y-6">
      <!-- Budget-Specific Tips -->
      <div>
        <h4 class="font-medium text-gray-900 mb-3">Tips for {selectedBudget.replace('_', ' ')}</h4>
        <ul class="space-y-2">
          {#each currentTips as tip}
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <span class="text-green-500 mt-0.5">✓</span>
              <span>{tip}</span>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Quick Stats -->
      <div>
        <h4 class="font-medium text-gray-900 mb-3">Quick Stats</h4>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Internet Speed</span>
            <span class="font-medium">{countryData.internet?.speed || 0} Mbps</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Safety Score</span>
            <span class="font-medium">{countryData.community?.safety || 0}/10</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Expat Community</span>
            <span class="font-medium">{countryData.community?.expatSize || 0}/10</span>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="text-center py-8 text-gray-500">
      <p>Select a country to see insights and tips</p>
    </div>
  {/if}
</div>