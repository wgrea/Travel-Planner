<!-- src/routes/digital-nomad/components/WorkPreferenceSelector.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let workPreference: string;
  
  // UPDATED: New realistic budget categories
  const workOptions = [
    { 
      value: 'zero_spend', 
      label: 'No Spend Today', 
      icon: '🎯', 
      category: 'free-now',
      description: 'Truly free options, no purchase needed'
    },
    { 
      value: 'already_paid', 
      label: 'Already Paid', 
      icon: '🏠', 
      category: 'included',
      description: 'Use workspace at your accommodation'
    },
    { 
      value: 'small_purchase', 
      label: 'Small Purchase', 
      icon: '☕', 
      category: 'low-cost',
      description: 'Buy a drink or snack to work'
    },
    { 
      value: 'direct_payment', 
      label: 'Pay for Workspace', 
      icon: '💻', 
      category: 'paid',
      description: 'Dedicated workspaces with day passes'
    }
  ];

  function handlePreferenceChange(preference: string) {
    console.log('🔘 Work preference changed to:', preference);
    workPreference = preference;
    dispatch('workPreferenceChange', preference);
  }
</script>
<!-- src/routes/digital-nomad/components/WorkPreferenceSelector.svelte -->
<div class="tech-card p-6 mb-8">  <!-- Changed to tech-card class -->
  <h2 class="tech-h3 mb-4">💰 Workspace Budget Style</h2>
  <p class="tech-small mb-6">
    Choose based on how much you want to spend <em>today</em>. "Already Paid" shows workspaces included with accommodation you're already paying for.
  </p>
  
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each workOptions as option}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center text-center space-y-2 ${
          workPreference === option.value 
            ? option.category === 'free-now' 
              ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-sm ring-2 ring-green-100' 
              : option.category === 'included'
              ? 'bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200 shadow-sm ring-2 ring-blue-100'
              : option.category === 'low-cost'
              ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 shadow-sm ring-2 ring-yellow-100'
              : 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-sm ring-2 ring-purple-100'
            : 'bg-white/80 border-indigo-100 hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-md'
        }`}
        on:click={() => handlePreferenceChange(option.value)}
        title={option.description}
      >
        <div class="text-2xl">{option.icon}</div>
        <div class="font-medium text-sm text-slate-900">{option.label}</div>
        <div class="text-xs text-slate-500 leading-tight">{option.description}</div>
      </button>
    {/each}
  </div>
</div>