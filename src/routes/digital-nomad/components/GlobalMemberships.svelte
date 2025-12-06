<!-- src/routes/digital-nomad/components/GlobalMemberships.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  
  // Use $props() instead of export let
  let {
    currency = 'USD'
  } = $props();
  
  // Global membership data with website property
  const globalMemberships = [
    {
      name: "WeWork All Access",
      priceUSD: 299,
      coverage: ["US", "UK", "Germany", "Japan", "Australia", "India", "Singapore", "Canada", "France", "Spain", "Netherlands", "UAE", "Brazil", "Mexico"],
      notCovered: ["Thailand", "Vietnam", "Indonesia", "Philippines", "Morocco", "Georgia", "Azerbaijan", "Colombia", "Argentina"],
      benefits: ["24/7 global access", "Meeting rooms", "High-speed internet"],
      bestFor: "Frequent global travelers",
      color: "purple",
      website: "https://www.wework.com"
    },
    {
      name: "Regus / IWG",
      priceUSD: 199,
      coverage: ["120+ countries worldwide"],
      notCovered: [], // Covers almost everywhere
      benefits: ["Largest network", "Business address", "24/7 access"],
      bestFor: "Business travelers needing official addresses",
      color: "blue",
      website: "https://www.regus.com"
    },
    {
      name: "Local Networks",
      priceUSD: 80,
      coverage: ["Regional coverage varies"],
      notCovered: ["Check each country individually"],
      benefits: ["Local community", "Lower cost", "Authentic experience"],
      bestFor: "Long-term stays in specific regions",
      color: "green",
      website: "" // No global website
    }
  ];
  
  $effect(() => {
    console.log('🌍 GlobalMemberships currency:', currency);
  });
</script>

<div class="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
  <h3 class="text-lg font-semibold text-indigo-900 mb-4 flex items-center gap-2">
    <span class="text-xl">🌍</span> Global Coworking Memberships
  </h3>
  
  <p class="text-sm text-indigo-700 mb-6">
    Compare memberships that work across multiple countries. Green = Available, Red = Not Available
  </p>
  
  <div class="space-y-4">
    {#each globalMemberships as membership}
      <div class="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
        <div class="flex justify-between items-start mb-3">
          <div>
            <h4 class="font-semibold text-gray-900">{membership.name}</h4>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm font-medium text-indigo-700">
                {formatCurrency(convertCurrency(membership.priceUSD, 'USD', currency), currency)}/month
              </span>
              <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                {membership.coverage.length > 3 ? membership.coverage[0] : 'Multiple countries'}
              </span>
            </div>
          </div>
          <div class={`px-3 py-1 rounded-full text-sm font-medium
            ${membership.color === 'purple' ? 'bg-purple-100 text-purple-800' : ''}
            ${membership.color === 'blue' ? 'bg-blue-100 text-blue-800' : ''}
            ${membership.color === 'green' ? 'bg-green-100 text-green-800' : ''}
          `}>
            {membership.bestFor.split(' ')[0]}
          </div>
        </div>
        
        <!-- Coverage Summary -->
        <div class="mb-3">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-medium text-gray-600">Coverage:</span>
            <div class="flex-1 flex items-center gap-1 flex-wrap">
              {#each membership.coverage.slice(0, 3) as country}
                <span class="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded">
                  {country}
                </span>
              {/each}
              {#if membership.coverage.length > 3}
                <span class="text-xs text-gray-500">
                  +{membership.coverage.length - 3} more
                </span>
              {/if}
            </div>
          </div>
          
          {#if membership.notCovered.length > 0}
            <div class="flex items-center gap-2">
              <span class="text-xs font-medium text-gray-600">Not Covered:</span>
              <div class="flex-1 flex items-center gap-1 flex-wrap">
                {#each membership.notCovered.slice(0, 3) as country}
                  <span class="text-xs px-2 py-0.5 bg-red-100 text-red-800 rounded">
                    {country}
                  </span>
                {/each}
                {#if membership.notCovered.length > 3}
                  <span class="text-xs text-gray-500">
                    +{membership.notCovered.length - 3} more
                  </span>
                {/if}
              </div>
            </div>
          {/if}
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            {#each membership.benefits.slice(0, 2) as benefit, index}
              <div class="flex items-center gap-1">
                <span class="text-xs text-gray-700">✓ {benefit}</span>
                {#if index < 1}
                  <span class="text-gray-400">•</span>
                {/if}
              </div>
            {/each}
          </div>
          <button 
            onclick={() => {
              if (membership.website) {
                window.open(membership.website, '_blank');
              } else {
                // Show more info in a tooltip or modal
                console.log('More info about', membership.name);
              }
            }}
            class="text-xs text-indigo-600 font-medium hover:text-indigo-800 hover:underline cursor-pointer"
            title={membership.website ? `Visit ${membership.name} website` : 'More information'}
          >
            {membership.website ? 'Visit site →' : 'Learn more →'}
          </button>
        </div>
      </div>
    {/each}
  </div>
  
  <!-- Usage Tip -->
  <div class="mt-6 pt-6 border-t border-indigo-200">
    <div class="flex items-start gap-3 bg-indigo-100/50 rounded-xl p-4">
      <div class="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0">
        <span class="text-indigo-700 font-bold">💡</span>
      </div>
      <div>
        <p class="text-sm font-medium text-indigo-800 mb-1">Membership Strategy</p>
        <p class="text-xs text-indigo-700">
          For Southeast Asia trips: Use local networks (cheaper). For global trips: Consider WeWork/Regus. 
          Always check if your destinations are covered before buying.
        </p>
      </div>
    </div>
  </div>
</div>
