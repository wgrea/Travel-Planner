<!-- src/routes/transportation-costs/components/ReactiveDebug.svelte -->
<script lang="ts">
  import { selectedCurrency } from '$lib/stores/currency';
  
  let currency = $state('');
  let updateCount = $state(0);
  
  $effect(() => {
    selectedCurrency.subscribe(value => {
      currency = value;
      updateCount++;
      console.log('🔁 ReactiveDebug: Currency updated to', value, 'count:', updateCount);
    });
  });
</script>

<div class="fixed bottom-4 right-4 bg-gray-900 text-white p-2 rounded text-xs opacity-75">
  Currency: {currency} | Updates: {updateCount}
</div>