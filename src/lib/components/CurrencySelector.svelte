<!-- src/lib/components/CurrencySelector.svelte -->
<script lang="ts">
  import { currencySymbols } from '$lib/utils/currency';
  import { selectedCurrency } from '$lib/stores/currency'; // Add this import
  import { createEventDispatcher } from 'svelte';

  // Remove: export let selectedCurrency: string = 'USD';
  // Use the store instead
  $: currentCurrency = $selectedCurrency;
  
  const dispatch = createEventDispatcher<{
    currencyChange: string;
  }>();

  const availableCurrencies = Object.keys(currencySymbols);

  function handleCurrencyChange(event: Event) {
    const currency = (event.target as HTMLSelectElement).value;
    selectedCurrency.set(currency); // Update the store
    dispatch('currencyChange', currency);
  }
</script>

<div class="mb-6 flex justify-center">
  <div class="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 p-4 shadow-lg">
    <label for="currency-select" class="mr-3 font-medium text-gray-700">Display prices in:</label>
    <select 
      id="currency-select" 
      bind:value={currentCurrency}
      on:change={handleCurrencyChange}
      class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
    >
      {#each availableCurrencies as currency}
        <option value={currency}>{currency} ({currencySymbols[currency]})</option>
      {/each}
    </select>
  </div>
</div>