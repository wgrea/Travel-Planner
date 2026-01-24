<!-- src/routes/living-costs/components/Layout.svelte -->
<script lang="ts">
  import BackgroundElements from './BackgroundElements.svelte';
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  
  export let title = 'Living Costs Calculator';
  export let subtitle = 'Precise budgeting with clean data visualization and detailed breakdowns';
</script>

<div class="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 px-4 py-8 relative overflow-hidden">
  <BackgroundElements />
  
  <div class="max-w-6xl mx-auto relative z-10">
    <!-- Currency Selector -->
    <div class="mb-8 bg-white/90 backdrop-blur-sm rounded-xl border border-emerald-200 p-4 inline-block">
      <CurrencySelector />
    </div>

    <!-- Header -->
    <div class="mb-8 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white 
        border border-emerald-200 mb-6 shadow-sm">
        <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      </div>
      
      <h1 class="text-4xl font-light mb-3 text-emerald-900 tracking-tight">
        {title}
      </h1>
      <p class="text-emerald-700 text-base font-light max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>

    <!-- Content Slot -->
    <slot />
  </div>
</div>