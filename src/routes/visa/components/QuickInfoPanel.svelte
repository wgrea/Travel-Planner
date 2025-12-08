<!-- src/routes/visa/components/QuickInfoPanel.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  
  let { 
    homeCountry,
    selectedDestination,
    onBrowseSimilar
  } = $props<{
    homeCountry: string;
    selectedDestination: string;
    onBrowseSimilar: () => void;
  }>();
</script>

<div class="space-y-4">
  <!-- Quick Actions -->
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
    <h3 class="font-semibold text-gray-900 mb-4">Quick Actions</h3>
    <div class="space-y-3">
      <button
        type="button"
        onclick={onBrowseSimilar}
        class="w-full px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <div class="font-medium">Browse Similar Destinations</div>
        <div class="text-sm text-blue-600">Find other countries with similar visa requirements</div>
      </button>
      
      <button
        type="button"
        onclick={() => goto('/flight-costs')}
        class="w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition text-left focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      >
        <div class="font-medium">Check Flight Costs</div>
        <div class="text-sm text-gray-600">Find cheap flights from {homeCountry} to {selectedDestination}</div>
      </button>
    </div>
  </div>
</div>