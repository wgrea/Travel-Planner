<!-- src/routes/visa/components/VisaMatrix.svelte -->
<script lang="ts">
  let { destinations, onDestinationSelect, passportCountry } = $props<{
    destinations: any[];
    onDestinationSelect: (country: string) => void;
    passportCountry: string;
  }>();
</script>

<div class="space-y-6">
  <!-- Results Header with Clear Context -->
  <div class="text-center p-8 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-2xl border border-blue-100">
    <div class="text-5xl mb-4">🌍</div>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">
      {destinations.length} Destinations for {passportCountry} Passport Holders
    </h3>
    <p class="text-gray-600 mb-4">
      All destinations shown based on <span class="font-semibold text-blue-700">{passportCountry}</span> passport requirements
    </p>
    <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full border border-blue-200">
      <span class="text-blue-600">📘</span>
      <span class="text-sm font-medium text-gray-700">Passport: {passportCountry}</span>
    </div>
  </div>
  
  <!-- Destinations Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each destinations as dest}
      <button
        type="button"
        onclick={() => onDestinationSelect(dest.country)}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onDestinationSelect(dest.country);
          }
        }}
        class="group w-full border rounded-xl p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        aria-label={`View visa details for ${dest.country} from ${passportCountry}`}
      >
        <div class="flex items-start justify-between mb-3">
          <div>
            <h4 class="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
              {dest.country}
            </h4>
            <div class="flex items-center gap-1 mt-1">
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                {dest.category}
              </span>
              {#if dest.nomadFriendly}
                <span class="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                  💻 Remote Work
                </span>
              {/if}
            </div>
          </div>
          <span class="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">{dest.flag || '🌐'}</span>
        </div>
        
        <div class="space-y-2 text-xs">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Processing:</span>
            <span class="font-medium">{dest.processingTime}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Cost:</span>
            <span class="font-medium">{dest.cost}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Visa-Free:</span>
            <span class="font-medium">{dest.visaInfo?.freeLength || 'N/A'}</span>
          </div>
        </div>
        
        <!-- Passport context reminder -->
        <div class="mt-3 pt-3 border-t border-gray-100 group-hover:border-blue-100 transition-colors">
          <div class="flex items-center gap-1 text-xs text-gray-500">
            <span>📘</span>
            <span>From {passportCountry}</span>
          </div>
        </div>
      </button>
    {:else}
      <div class="col-span-full text-center py-12">
        <div class="text-4xl mb-4">🔍</div>
        <h3 class="text-lg font-semibold text-gray-700 mb-2">
          No destinations found for {passportCountry} passport
        </h3>
        <p class="text-gray-600">Try adjusting your filters or select a different passport country</p>
      </div>
    {/each}
  </div>
</div>