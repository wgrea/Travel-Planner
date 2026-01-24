<!-- src/routes/digital-nomad/components/BudgetStyleSelector.svelte -->
<script lang="ts">
  import type { BudgetCategory } from '$lib/types/digital-nomad';
  
  let { 
    selectedBudget,
    onBudgetChange = (budget: BudgetCategory) => {}
  } = $props<{ 
    selectedBudget: BudgetCategory;
    onBudgetChange?: (budget: BudgetCategory) => void;
  }>();
  
  const budgetOptions = [
    {
      id: 'zero_spend' as BudgetCategory,
      title: '🎯 No Spend Today',
      description: 'Truly free options, no purchase needed'
    },
    {
      id: 'already_paid' as BudgetCategory,
      title: '🏠 Already Paid',
      description: 'Use workspace at your accommodation'
    },
    {
      id: 'small_purchase' as BudgetCategory,
      title: '☕ Small Purchase',
      description: 'Buy a drink or snack to work'
    },
    {
      id: 'direct_payment' as BudgetCategory,
      title: '💻 Pay for Workspace',
      description: 'Dedicated workspaces with day passes'
    }
  ];
</script>

<div class="bg-white rounded-xl border border-blue-200 p-6">
  <h2 class="text-lg font-semibold text-blue-900 mb-4">💰 Workspace Budget Style</h2>
  <p class="text-gray-600 mb-6 text-sm">
    Choose based on how much you want to spend today.
  </p>
  
  <div class="space-y-3">
    {#each budgetOptions as option}
      <button
        class={`w-full text-left p-4 rounded-lg border transition-colors ${
          selectedBudget === option.id
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
        }`}
        onclick={() => onBudgetChange(option.id)}
      >
        <div class="flex items-center gap-3">
          <div class="text-2xl">{option.title.split(' ')[0]}</div>
          <div class="flex-1">
            <div class="font-medium text-gray-900">{option.title}</div>
            <div class="text-sm text-gray-600">{option.description}</div>
          </div>
          {#if selectedBudget === option.id}
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>