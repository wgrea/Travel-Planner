<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { GlobalCoworkingMembership } from '$lib/data/globalCoworkingMemberships';

  // Use $props() instead of export let in Svelte 5 runes mode
  const { 
    currency = 'USD', 
    memberships = [] 
  } = $props<{
    currency?: string;
    memberships?: GlobalCoworkingMembership[];
  }>();
  
  // Add expand/collapse state
  let isExpanded = $state(false);
  
  // Use $state for reactive DOM element reference
  let contentRef = $state<HTMLDivElement | null>(null);
</script>

<div class="bg-gradient-to-br from-white/30 to-purple-50/30 backdrop-blur-md rounded-2xl border border-purple-200/50 p-6">
  <!-- Header with toggle -->
  <!-- Just update the button styles to make it stand out -->
  <button 
    class="w-full flex items-center justify-between gap-4 p-4 bg-white hover:bg-gray-50 rounded-xl border-2 border-purple-300 hover:border-purple-400 shadow-md hover:shadow-lg transition-all duration-200 mb-6"
    onclick={() => isExpanded = !isExpanded}
  >
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg">
        <span class="text-white text-xl">🌐</span>
      </div>
      <div class="text-left">
        <h3 class="text-xl font-bold text-gray-900">Global Coworking Memberships</h3>
        <p class="text-sm text-gray-600">
          Click to view {memberships.length} global membership programs
        </p>
      </div>
    </div>
    
    <div class="flex items-center gap-2">
      <span class="text-sm font-semibold text-purple-700">
        {isExpanded ? 'Hide' : 'Show'}
      </span>
      <div class="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
        <svg 
          class="w-5 h-5 text-purple-600 transition-transform duration-300" 
          style="transform: rotate({isExpanded ? '180deg' : '0deg'})"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </button>
  
  <!-- Expandable content -->
  <div 
    id="global-memberships-content"
    bind:this={contentRef}
    class="overflow-hidden transition-all duration-300 ease-in-out"
    style="max-height: {isExpanded ? `${contentRef?.scrollHeight || 5000}px` : '0px'}"
  >
    {#if isExpanded}
      <!-- Summary stats when collapsed -->
      <div class="mb-6 p-4 bg-purple-50/50 rounded-xl border border-purple-100/50">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center">
            <p class="text-sm text-purple-600 font-medium">{memberships.length}</p>
            <p class="text-xs text-purple-500">Providers</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-purple-600 font-medium">
              {formatCurrency(
                convertCurrency(
                  Math.min(...memberships.map((m: GlobalCoworkingMembership) => m.monthlyPrice)), 
                  'USD', 
                  currency
                ), 
                currency
              )}
            </p>
            <p class="text-xs text-purple-500">From /mo</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-purple-600 font-medium">
              {memberships.filter((m: GlobalCoworkingMembership) => m.dayPassAvailable).length}
            </p>
            <p class="text-xs text-purple-500">Day Passes</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-purple-600 font-medium">
              {memberships.filter((m: GlobalCoworkingMembership) => m.trialDays > 0).length}
            </p>
            <p class="text-xs text-purple-500">Free Trials</p>
          </div>
        </div>
      </div>
      
      <!-- Global Memberships Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each memberships as membership (membership.name)}
          <div class="bg-white/70 backdrop-blur-sm border border-purple-100 rounded-xl p-5 hover:border-purple-300 hover:shadow-md transition-all duration-300">
            <div class="flex justify-between items-start mb-3">
              <div class="flex-1">
                <h4 class="font-bold text-gray-900 text-lg mb-1">{membership.name}</h4>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                    {formatCurrency(convertCurrency(membership.monthlyPrice, 'USD', currency), currency)}/mo
                  </span>
                  {#if membership.trialDays > 0}
                    <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      {membership.trialDays} day{membership.trialDays !== 1 ? 's' : ''} trial
                    </span>
                  {/if}
                </div>
              </div>
            </div>
            
            <!-- Coverage -->
            <div class="mb-4">
              <p class="text-xs text-gray-500 mb-1 flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                Coverage
              </p>
              <div class="space-y-1">
                {#each membership.coverage as location}
                  <p class="text-sm text-gray-700">{location}</p>
                {/each}
              </div>
            </div>
            
            <!-- Benefits -->
            <div class="mb-4">
              <p class="text-xs text-gray-500 mb-2 flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Key Benefits
              </p>
              <div class="flex flex-wrap gap-1.5">
                {#each membership.benefits.slice(0, 3) as benefit}
                  <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                    {benefit}
                  </span>
                {/each}
                {#if membership.benefits.length > 3}
                  <span class="px-2 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs">
                    +{membership.benefits.length - 3} more
                  </span>
                {/if}
              </div>
            </div>
            
            <!-- Best For & Pricing -->
            <div class="mb-4">
              <p class="text-xs text-gray-500 mb-1">Best For</p>
              <p class="text-sm text-gray-700 font-medium">{membership.bestFor}</p>
            </div>
            
            <!-- Day Pass -->
            {#if membership.dayPassAvailable}
              <div class="mb-4 p-3 bg-gray-50 rounded-lg">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Day Pass Available</span>
                  <span class="text-sm font-semibold text-gray-800">
                    {#if membership.dayPassPrice}
                      {formatCurrency(convertCurrency(membership.dayPassPrice, 'USD', currency), currency)}
                    {:else}
                      Available
                    {/if}
                  </span>
                </div>
              </div>
            {/if}
            
            <!-- Website Link -->
            <a 
              href={membership.website} 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full block text-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg mt-2"
            >
              Visit Website
              <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        {/each}
      </div>
      
      <!-- Comparison Info -->
      <div class="mt-8 pt-6 border-t border-purple-200/50">
        <div class="bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl p-4 border border-purple-100/50">
          <p class="text-sm font-semibold text-purple-800 mb-2 flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            Global Membership Tips
          </p>
          <ul class="text-xs text-purple-700 space-y-1">
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-0.5">•</span>
              <span>Check coverage in your target destinations before committing</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-0.5">•</span>
              <span>Many offer trial periods - test before long-term commitment</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-0.5">•</span>
              <span>Combine with local memberships for maximum flexibility</span>
            </li>
          </ul>
        </div>
      </div>
    {:else}
      <!-- Quick preview when collapsed -->
      <div class="pt-2">
        <p class="text-sm text-gray-600 italic">Click to view {memberships.length} global coworking memberships</p>
      </div>
    {/if}
  </div>
</div>