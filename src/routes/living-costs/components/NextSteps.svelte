<!-- src/routes/living-costs/components/NextSteps.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<div class="mt-12 text-center">
  <p class="text-gray-700 text-sm font-light mb-4 tracking-wide">
    Continue planning your perfect trip
  </p>
  <div class="flex gap-3 justify-center flex-wrap">
    <button on:click={() => goto('/digital-nomad')} 
            class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
      💻 Digital Nomad Essentials
    </button>
    <button on:click={() => goto('/planning')} 
            class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
      📅 Trip Planning
    </button>
    <button on:click={() => goto('/quick-plan')} 
            class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
      ⚡ Quick Plan
    </button>
  </div>
</div>