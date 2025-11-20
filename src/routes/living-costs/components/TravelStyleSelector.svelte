<script lang="ts">
  export let travelStyle: 'budget' | 'midrange' | 'luxury';
  export let setTravelStyle: (style: 'budget' | 'midrange' | 'luxury') => void;

  const travelStyles = [
    { value: 'budget' as const, label: 'Budget Traveler', dailyBudget: '$30-50', icon: '🎒' },
    { value: 'midrange' as const, label: 'Comfort Traveler', dailyBudget: '$60-100', icon: '🏨' },
    { value: 'luxury' as const, label: 'Luxury Traveler', dailyBudget: '$150+', icon: '🌟' }
  ];
</script>

<div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/30">
  <h2 class="text-2xl font-bold text-white mb-4">💰 Travel Style</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each travelStyles as style}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 ${
          travelStyle === style.value 
            ? 'bg-white/30 border-white backdrop-blur-sm' 
            : 'bg-white/10 border-white/20 hover:bg-white/20'
        }`}
        on:click={() => setTravelStyle(style.value)}
      >
        <div class="text-2xl mb-2">{style.icon}</div>
        <div class="text-white font-semibold mb-1">{style.label}</div>
        <div class="text-white/80 text-sm">{style.dailyBudget}/day</div>
      </button>
    {/each}
  </div>
</div>