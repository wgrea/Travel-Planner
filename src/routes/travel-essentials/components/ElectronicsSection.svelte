<!-- src/routes/travel-essentials/components/ElectronicsSection.svelte -->
<script lang="ts">
  // Accept any type to avoid TypeScript errors
  export let techEssentials: any[];
</script>

<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
  <h2 class="text-2xl font-light text-gray-900 mb-8">Tech & Electronics</h2>
  
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Tech Essentials Grid -->
    <div class="lg:col-span-2">
      <h3 class="text-xl font-medium text-gray-900 mb-6">Essential Tech Items</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each techEssentials as item}
          <div class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-purple-200 transition-colors">
            <div class="text-2xl text-purple-600">⚡</div>
            <div class="flex-1">
              <span class="font-medium text-gray-900">{item.item}</span>
              <div class="mt-1">
                {#if item.priority === 'high'}
                  <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">High Priority</span>
                {:else if item.priority === 'medium'}
                  <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Medium Priority</span>
                {:else}
                  <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Low Priority</span>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Adapter Guide -->
    <div class="bg-purple-50 rounded-xl p-6">
      <h3 class="text-xl font-medium text-gray-900 mb-6">Adapter Guide</h3>
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="text-2xl">🔌</div>
          <div>
            <p class="font-medium text-gray-900">Type A/B</p>
            <p class="text-sm text-gray-600">USA, Canada, Japan</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-2xl">🔌</div>
          <div>
            <p class="font-medium text-gray-900">Type C/E/F</p>
            <p class="text-sm text-gray-600">Europe, Asia</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-2xl">🔌</div>
          <div>
            <p class="font-medium text-gray-900">Type G</p>
            <p class="text-sm text-gray-600">UK, Ireland</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-2xl">🔌</div>
          <div>
            <p class="font-medium text-gray-900">Type I</p>
            <p class="text-sm text-gray-600">Australia, China</p>
          </div>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t border-purple-200">
        <p class="text-sm text-gray-700">
          <span class="font-medium">Tip:</span> Get a universal adapter that covers all plug types and includes USB ports.
        </p>
      </div>
    </div>
  </div>
</div>