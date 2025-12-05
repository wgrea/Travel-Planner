<!-- src/routes/visa/components/VisaFilter.svelte -->
<script lang="ts">
  import type { VisaFilter, VisaCategory } from '$lib/utils/visa';
  import { getAvailableVisaCategories } from '$lib/utils/visa';
  
  // Use $props() for runes mode - make filter bindable
  let { passportCountry = '', filter = $bindable() } = $props<{
    passportCountry?: string;
    filter: VisaFilter;
  }>();
  
  // Get available categories for this passport
  const availableCategories = $derived(
    passportCountry ? getAvailableVisaCategories(passportCountry) : []
  );
  
  const categoryLabels: Record<VisaCategory, { label: string; emoji: string }> = {
    'Visa-Free': { label: 'Visa Free', emoji: '✅' },
    'Visa on Arrival': { label: 'Visa on Arrival', emoji: '🛬' },
    'e-Visa': { label: 'e-Visa', emoji: '💻' },
    'Digital Nomad Visa': { label: 'Digital Nomad', emoji: '💼' },
    'Freelance Visa': { label: 'Freelance', emoji: '👨‍💻' },
    'Tourist Visa': { label: 'Tourist', emoji: '🏖️' },
    'Business Visa': { label: 'Business', emoji: '💼' },
    'Work Visa': { label: 'Work', emoji: '👷' },
    'Visa Required': { label: 'Visa Required', emoji: '📋' },
    'Transit Visa': { label: 'Transit', emoji: '🛫' },
    'Other': { label: 'Other', emoji: '📄' }
  };
  
  function toggleCategory(category: VisaCategory) {
    if (filter.categories.includes(category)) {
      filter.categories = filter.categories.filter((c: VisaCategory) => c !== category);
    } else {
      filter.categories = [...filter.categories, category];
    }
  }
  
  function applyQuickFilter(type: 'nomad' | 'visaFree' | 'evisa') {
    if (type === 'nomad') {
      filter.categories = ['Digital Nomad Visa', 'Freelance Visa'];
      filter.workAllowed = true;
      filter.nomadFriendly = true;
    } else if (type === 'visaFree') {
      filter.categories = ['Visa-Free', 'Visa on Arrival'];
      filter.workAllowed = false;
      filter.nomadFriendly = false;
    } else if (type === 'evisa') {
      filter.categories = ['e-Visa'];
    }
  }
  
  function clearFilters() {
    filter.categories = [];
    filter.workAllowed = false;
    filter.nomadFriendly = false;
  }
</script>

<div class="space-y-4">
  <!-- Quick Filters -->
  <div class="flex flex-wrap gap-2">
    <button
      onclick={() => applyQuickFilter('nomad')}
      class="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition text-sm font-medium flex items-center gap-2"
    >
      <span>💻</span>
      <span>Digital Nomad</span>
    </button>
    <button
      onclick={() => applyQuickFilter('visaFree')}
      class="px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition text-sm font-medium flex items-center gap-2"
    >
      <span>✅</span>
      <span>Visa-Free</span>
    </button>
    <button
      onclick={() => applyQuickFilter('evisa')}
      class="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm font-medium flex items-center gap-2"
    >
      <span>💻</span>
      <span>e-Visa</span>
    </button>
  </div>
  
  <!-- Visa Type Filters -->
  <div>
    <h4 class="text-sm font-medium text-gray-700 mb-2">Visa Types</h4>
    <div class="flex flex-wrap gap-2">
      {#each availableCategories as category}
        <button
          onclick={() => toggleCategory(category)}
          class={`px-3 py-1.5 rounded-lg text-sm font-medium transition flex items-center gap-2
            ${filter.categories.includes(category)
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <span>{categoryLabels[category]?.emoji || '📄'}</span>
          <span>{categoryLabels[category]?.label || category}</span>
        </button>
      {/each}
    </div>
  </div>
  
  <!-- Work Filters -->
  <div class="space-y-2">
    <label class="flex items-center gap-2">
      <input 
        type="checkbox" 
        bind:checked={filter.workAllowed}
        class="rounded border-gray-300"
      />
      <span class="text-sm text-gray-700">Work allowed</span>
    </label>
    <label class="flex items-center gap-2">
      <input 
        type="checkbox" 
        bind:checked={filter.nomadFriendly}
        class="rounded border-gray-300"
      />
      <span class="text-sm text-gray-700">Remote work friendly</span>
    </label>
  </div>
  
  <!-- Clear Button -->
  {#if filter.categories.length > 0 || filter.workAllowed || filter.nomadFriendly}
    <button
      onclick={clearFilters}
      class="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-sm"
    >
      Clear Filters
    </button>
  {/if}
</div>