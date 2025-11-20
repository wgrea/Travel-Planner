<script lang="ts">
  export let workPreference: string;
  
  const workOptions = [
    { value: 'coworking', label: 'Coworking Space', icon: '💻' },
    { value: 'cafe', label: 'Coffee Shops', icon: '☕' },
    { value: 'hostel', label: 'Hostel Workspace', icon: '🏠' },
    { value: 'hotel', label: 'Hotel Workspace', icon: '🏨' }
  ];
</script>

<div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/30">
  <h2 class="text-2xl font-bold text-white mb-4">🏢 Work Style Preference</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each workOptions as option}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 ${
          workPreference === option.value 
            ? 'bg-white/30 border-white backdrop-blur-sm' 
            : 'bg-white/10 border-white/20 hover:bg-white/20'
        }`}
        on:click={() => workPreference = option.value}
      >
        <div class="text-2xl mb-2">{option.icon}</div>
        <div class="text-white font-semibold text-sm">{option.label}</div>
      </button>
    {/each}
  </div>
</div>