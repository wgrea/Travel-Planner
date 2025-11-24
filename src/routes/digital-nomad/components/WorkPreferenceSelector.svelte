<!-- src/routes/digital-nomad/components/WorkPreferenceSelector.svelte -->
<script lang="ts">
  export let workPreference: string;
  
  const workOptions = [
    { value: 'coworking', label: 'Coworking Space', icon: '💻' },
    { value: 'cafe', label: 'Coffee Shops', icon: '☕' },
    { value: 'hostel', label: 'Hostel Workspace', icon: '🏠' },
    { value: 'hotel', label: 'Hotel Workspace', icon: '🏨' }
  ];
</script>

<div class="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-4">🏢 Work Style Preference</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each workOptions as option}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 ${
          workPreference === option.value 
            ? 'bg-blue-50 border-blue-200 shadow-sm' 
            : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
        }`}
        on:click={() => workPreference = option.value}
      >
        <div class="text-2xl mb-2">{option.icon}</div>
        <div class="text-gray-900 font-medium text-sm">{option.label}</div>
      </button>
    {/each}
  </div>
</div>