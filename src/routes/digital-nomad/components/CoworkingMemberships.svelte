<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { CoworkingMembership } from '$lib/data/nomadData';
  
  // Use $props() instead of export let in Svelte 5 runes mode
  const { 
    selectedCountry,
    selectedCity,
    currency = 'USD',
    memberships = []
  } = $props<{
    selectedCountry: string;
    selectedCity: string;
    currency?: string;
    memberships?: CoworkingMembership[];
  }>();
</script>

<div class="bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 rounded-2xl p-6">
  <div class="flex items-center gap-3 mb-6">
    <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
      <span class="text-white text-lg">🌍</span>
    </div>
    <div>
      <h3 class="text-lg font-semibold text-gray-900">Coworking Memberships</h3>
      <p class="text-sm text-gray-600">
        {selectedCity ? `Available in ${selectedCity}, ${selectedCountry}` : `Available in ${selectedCountry}`}
      </p>
    </div>
  </div>
  
  {#if memberships && memberships.length > 0}
    <div class="space-y-4">
      {#each memberships as membership}
        <div class="bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-300 transition-all hover:shadow-sm">
          <div class="flex justify-between items-start mb-3">
            <div>
              <h4 class="font-semibold text-gray-900">{membership.name}</h4>
              <p class="text-xs text-gray-500 mt-1">
                {#if membership.coverage.length <= 3}
                  Coverage: {membership.coverage.join(', ')}
                {:else}
                  Coverage: {membership.coverage.length} locations
                {/if}
              </p>
            </div>
            <div class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              {formatCurrency(convertCurrency(membership.monthlyPrice, 'USD', currency), currency)}/mo
            </div>
          </div>
          
          <p class="text-sm text-gray-700 mb-3">{membership.bestFor}</p>
          
          {#if membership.benefits && membership.benefits.length > 0}
            <div class="mb-3">
              <div class="flex flex-wrap gap-2">
                {#each membership.benefits.slice(0, 3) as benefit}
                  <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {benefit}
                  </span>
                {/each}
                {#if membership.benefits.length > 3}
                  <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
                    +{membership.benefits.length - 3} more
                  </span>
                {/if}
              </div>
            </div>
          {/if}
          
          <div class="flex gap-4 mt-3 pt-3 border-t border-gray-100">
            {#if membership.dayPassAvailable}
              <div class="text-center">
                <p class="text-xs text-gray-500">Day Pass</p>
                <p class="text-sm font-medium text-gray-700">
                  {#if membership.dayPassPrice}
                    {formatCurrency(convertCurrency(membership.dayPassPrice, 'USD', currency), currency)}
                  {:else}
                    Available
                  {/if}
                </p>
              </div>
            {/if}
            
            <div class="text-center">
              <p class="text-xs text-gray-500">Free Trial</p>
              <p class="text-sm font-medium text-gray-700">
                {membership.trialDays > 0 ? membership.trialDays + ' days' : 'No trial'}
              </p>
            </div>
          </div>
          
          {#if membership.website}
            <div class="mt-3">
              <a 
                href={membership.website} 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
              >
                Visit website
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          {/if}
        </div>
      {/each}
    </div>
    
    <div class="mt-6 pt-6 border-t border-gray-200">
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
        <p class="text-sm text-indigo-800 font-medium mb-1 flex items-center gap-2">
          <span class="text-lg">💡</span> Local Tip
        </p>
        <p class="text-xs text-indigo-700">
          {#if selectedCity}
            In {selectedCity}, ask about local coworking networks that might offer reciprocal access to other spaces in {selectedCountry}.
          {:else}
            In {selectedCountry}, many coworking spaces offer discounts for long-term commitments or bundled packages.
          {/if}
        </p>
      </div>
    </div>
    
  {:else}
    <div class="text-center py-8">
      <div class="w-16 h-16 mx-auto mb-4 text-gray-300">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="opacity-50">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h4 class="text-lg font-medium text-gray-700 mb-2">
        No Coworking Memberships
      </h4>
      <p class="text-gray-500 text-sm max-w-md mx-auto">
        {#if selectedCity}
          No specific coworking membership data available for {selectedCity}, {selectedCountry}. 
          Check individual workspace listings for local options.
        {:else}
          No specific coworking membership data available for {selectedCountry}. 
          Check individual workspace listings for local options.
        {/if}
      </p>
    </div>
  {/if}
</div>