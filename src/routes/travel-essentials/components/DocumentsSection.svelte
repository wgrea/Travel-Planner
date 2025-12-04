<!-- src/routes/travel-essentials/components/DocumentsSection.svelte -->
<script lang="ts">
  export let essentialDocuments: any[];
</script>

<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
  <h2 class="text-2xl font-light text-gray-900 mb-8">Essential Documents</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 class="text-xl font-medium text-gray-900 mb-6">Checklist</h3>
      <div class="space-y-4">
        {#each essentialDocuments as doc}
          <div class="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors">
            <div class="mt-1">
              {#if doc.required}
                <span class="text-red-500 font-medium">●</span>
              {:else}
                <span class="text-blue-500">○</span>
              {/if}
            </div>
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <span class="font-medium text-gray-900">{doc.item}</span>
                {#if doc.required}
                  <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Required</span>
                {:else}
                  <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Optional</span>
                {/if}
              </div>
              <p class="text-sm text-gray-600 mt-1">{doc.notes}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div>
      <h3 class="text-xl font-medium text-gray-900 mb-6">Tips & Recommendations</h3>
      <div class="space-y-6">
        <div class="bg-blue-50 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <div class="text-blue-600 text-xl">📱</div>
            <h4 class="font-medium text-gray-900">Digital Copies</h4>
          </div>
          <p class="text-sm text-gray-700">
            Always keep digital copies of important documents in cloud storage and email them to yourself.
          </p>
        </div>

        <div class="bg-amber-50 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <div class="text-amber-600 text-xl">🕒</div>
            <h4 class="font-medium text-gray-900">Timing Checklist</h4>
          </div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li class="flex items-center gap-2">
              <span class="text-amber-500">•</span>
              <span>Check passport expiry 6 months before travel</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-500">•</span>
              <span>Apply for visas 8-12 weeks in advance</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-500">•</span>
              <span>Purchase travel insurance when booking flights</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>