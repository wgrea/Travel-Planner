<!-- src/routes/living-costs/components/BeforeYouStart.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<div class="mb-12 text-center">
  <p class="text-gray-700 text-sm font-light mb-4 tracking-wide">
    Before planning your budget, make sure you've checked these essentials
  </p>
  <div class="flex gap-3 justify-center flex-wrap">
    <button on:click={() => goto('/visa')} 
            class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
      📝 Visa Requirements
    </button>
    <button on:click={() => goto('/flight-costs')} 
            class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
      ✈️ Flight Costs
    </button>
    <button on:click={() => goto('/resonance')} 
            class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
      🔍 Destination Finder
    </button>
  </div>
</div>
