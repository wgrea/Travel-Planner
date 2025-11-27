<!-- src/routes/living-costs/components/MoneySavingTips.svelte -->
<!-- src/routes/living-costs/components/MoneySavingTips.svelte -->
<script lang="ts">
  export let tips: string[] = [];
  export let country: string = '';
  export let city: string = '';
</script>

<div class="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
  <div class="p-6">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h2 class="text-xl font-light text-gray-900">
        Money Saving Tips {#if city}in {city}{:else}for {country}{/if}
      </h2>
    </div>
    
    {#if tips.length > 0}
      <div class="space-y-3">
        {#each tips as tip, i}
          <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-medium flex-shrink-0 mt-0.5">
              {i + 1}
            </div>
            <p class="text-gray-700 text-sm leading-relaxed">{tip}</p>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-8 text-gray-500">
        <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <p>No specific tips available yet.</p>
        <p class="text-sm mt-1">Check back soon for money-saving advice!</p>
      </div>
    {/if}
  </div>
</div>