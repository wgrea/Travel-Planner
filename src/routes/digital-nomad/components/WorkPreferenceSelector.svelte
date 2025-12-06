<!-- src/routes/digital-nomad/components/WorkPreferenceSelector.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let workPreference: string;
  
  // UPDATED: Added library and free options
  const workOptions = [
    { value: 'coworking', label: 'Coworking Space', icon: '💻', category: 'paid' },
    { value: 'cafe', label: 'Coffee Shops', icon: '☕', category: 'low-cost' },
    { value: 'library', label: 'Public Libraries', icon: '📚', category: 'free' },
    { value: 'free', label: 'Free Spots', icon: '🎯', category: 'free' },
    { value: 'hostel', label: 'Hostel Workspace', icon: '🏠', category: 'budget' },
    { value: 'hotel', label: 'Hotel Workspace', icon: '🏨', category: 'luxury' }
  ];

  // Helper to get category badge
  function getCategoryBadge(category: string) {
    switch(category) {
      case 'free': return '🆓 Free';
      case 'low-cost': return '💰 Low Cost';
      case 'budget': return '💸 Budget';
      case 'paid': return '💳 Paid';
      case 'luxury': return '⭐ Luxury';
      default: return '';
    }
  }

  function handlePreferenceChange(preference: string) {
    console.log('🔘 Button clicked:', preference);
    workPreference = preference;
    dispatch('workPreferenceChange', preference);
    console.log('🔘 Event dispatched:', preference);
  }
</script>

<div class="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-4">🏢 Work Style Preference</h2>
  <p class="text-sm text-gray-600 mb-6">
    Choose your preferred work environment. "Free Spots" shows completely free public spaces like parks, community centers, and other non-commercial options.
  </p>
  
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {#each workOptions as option}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center ${
          workPreference === option.value 
            ? option.category === 'free' 
              ? 'bg-green-50 border-green-200 shadow-sm' 
              : option.category === 'paid'
              ? 'bg-blue-50 border-blue-200 shadow-sm'
              : 'bg-purple-50 border-purple-200 shadow-sm'
            : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
        }`}
        on:click={() => handlePreferenceChange(option.value)}
      >
        <div class="text-2xl mb-2">{option.icon}</div>
        <div class="text-gray-900 font-medium text-sm mb-1">{option.label}</div>
        <div class={`text-xs px-2 py-0.5 rounded-full ${
          option.category === 'free' ? 'bg-green-100 text-green-700' :
          option.category === 'low-cost' ? 'bg-yellow-100 text-yellow-700' :
          option.category === 'budget' ? 'bg-blue-100 text-blue-700' :
          option.category === 'paid' ? 'bg-indigo-100 text-indigo-700' :
          'bg-purple-100 text-purple-700'
        }`}>
          {getCategoryBadge(option.category)}
        </div>
      </button>
    {/each}
  </div>

  <!-- Explanation -->
  <div class="mt-6 pt-6 border-t border-gray-200">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-green-500"></span>
        <span class="text-gray-600">Free: No purchase required</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span class="text-gray-600">Low-cost: Small purchase needed</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-blue-500"></span>
        <span class="text-gray-600">Paid: Membership or daily fee</span>
      </div>
    </div>
  </div>
</div>
