<script lang="ts">
  export let accommodationType: string;
  
  const accommodationTypes = [
    { value: 'hostel', label: 'Hostel', icon: '🛏️', description: 'Dorm beds, shared facilities' },
    { value: 'guesthouse', label: 'Guesthouse', icon: '🏡', description: 'Private rooms, local vibe' },
    { value: 'airbnb', label: 'Airbnb', icon: '🏠', description: 'Apartments, home experience' },
    { value: 'hotel', label: 'Hotel', icon: '🏨', description: 'Hotels, resorts, amenities' }
  ];
</script>

<div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/30">
  <h2 class="text-2xl font-bold text-white mb-4">🛌 Accommodation Options</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each accommodationTypes as accommodation}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
          accommodationType === accommodation.value 
            ? 'bg-white/30 border-white backdrop-blur-sm' 
            : 'bg-white/10 border-white/20 hover:bg-white/20'
        }`}
        on:click={() => accommodationType = accommodation.value}
      >
        <div class="text-2xl mb-2">{accommodation.icon}</div>
        <div class="text-white font-semibold mb-1">{accommodation.label}</div>
        <div class="text-white/70 text-sm mb-3">{accommodation.description}</div>
        <div class="text-white font-bold">
          {accommodation.value === 'hostel' && '$15-25/night'}
          {accommodation.value === 'guesthouse' && '$25-45/night'}
          {accommodation.value === 'airbnb' && '$45-80/night'}
          {accommodation.value === 'hotel' && '$80-150/night'}
        </div>
      </button>
    {/each}
  </div>
</div>