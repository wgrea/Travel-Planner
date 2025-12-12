<!-- src/routes/visa/components/VisaHeader.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';
  
  let { title, description } = $props<{
    title: string;
    description: string;
  }>();
</script>

<div class="mb-10">
  <div class="flex items-center justify-between mb-6">
    <CurrencySelector />
  </div>
  
  <div class="text-center mb-8">
    <h1 class="text-4xl md:text-5xl font-light mb-3 text-stone-900">
      {title}
    </h1>
    <p class="text-stone-600 max-w-3xl mx-auto">
      {description}
    </p>
    <div class="mt-4 text-sm text-stone-500">
      All prices shown in <span class="font-semibold text-stone-700">{$selectedCurrency}</span>
    </div>
  </div>
</div>