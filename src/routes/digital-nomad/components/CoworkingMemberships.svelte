<!-- src/routes/digital-nomad/components/CoworkingMemberships.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import type { CoworkingMembership } from '$lib/data/nomadData';
  
  // Add memberships to props
  let { 
    selectedCountry, 
    selectedCity, 
    currency = 'USD',
    memberships = [] 
  } = $props();
  
  // Membership data with proper typing
  const coworkingMemberships: (CoworkingMembership & { color?: string })[] = [
    {
      name: "WeWork All Access",
      coverage: ["US", "UK", "Germany", "Japan", "Australia", "India", "Singapore", "Canada"],
      monthlyPrice: 299,
      dayPassAvailable: true,
      dayPassPrice: 35,
      trialDays: 1,
      benefits: ["Global access", "Meeting rooms", "High-speed internet", "Community events"],
      bestFor: "Frequent global travelers needing consistent quality",
      website: "https://www.wework.com",
      color: "purple" // Added color as an optional property
    },
    {
      name: "Regus / IWG",
      coverage: ["120+ countries worldwide"],
      monthlyPrice: 199,
      dayPassAvailable: true,
      dayPassPrice: 30,
      trialDays: 0,
      benefits: ["Widest coverage", "Business address", "24/7 access"],
      bestFor: "Business travelers needing official addresses",
      website: "https://www.regus.com",
      color: "blue"
    },
    {
      name: "Local Coworking Networks",
      coverage: ["Regional coverage varies"],
      monthlyPrice: 120,
      dayPassAvailable: true,
      dayPassPrice: 15,
      trialDays: 3,
      benefits: ["Local community", "Lower cost", "Authentic experience"],
      bestFor: "Long-term stays in one region",
      website: "",
      color: "green"
    },
    {
      name: "Hotel Chain Partnerships",
      coverage: ["Global (major hotel brands)"],
      monthlyPrice: 0,
      dayPassAvailable: false,
      trialDays: 0,
      benefits: ["Free with hotel stay", "Lobby workspace", "Professional environment"],
      bestFor: "Hotel guests wanting convenient workspace access",
      website: "",
      color: "amber"
    }
  ];
  
  // Check which memberships are relevant for selected country
  function isRelevantForCountry(membership: CoworkingMembership, country: string): boolean {
    if (membership.coverage.includes("worldwide") || membership.coverage.includes("120+")) return true;
    
    const countryLower = country.toLowerCase();
    return membership.coverage.some((cov: string) => {
      const coverageLower = cov.toLowerCase();
      if (coverageLower === "us" && (countryLower.includes("united states") || countryLower.includes("usa"))) return true;
      if (coverageLower === "uk" && (countryLower.includes("united kingdom") || countryLower.includes("britain"))) return true;
      
      return coverageLower === countryLower || countryLower.includes(coverageLower);
    });
  }
</script>

<div class="bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 rounded-2xl p-6 h-full">
  <h3 class="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-3">
    <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
      <span class="text-indigo-600">🌍</span>
    </div>
    Global Coworking Memberships
  </h3>
  
  <p class="text-sm text-gray-600 mb-6">
    Compare memberships that work across multiple countries. {isRelevantForCountry(coworkingMemberships[0], selectedCountry) ? '✅ Available in ' + selectedCountry : '⚠️ Check availability for ' + selectedCountry}
  </p>
  
  <div class="space-y-4">
    {#each coworkingMemberships as membership}
      <div class="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
        <div class="flex justify-between items-start mb-3">
          <div>
            <h4 class="font-semibold text-gray-900">{membership.name}</h4>
            <p class="text-xs text-gray-500 mt-1">
              {#each membership.coverage as country, index}
                {country}{index < membership.coverage.length - 1 ? ', ' : ''}
              {/each}
            </p>
          </div>
          <div class={`px-3 py-1 rounded-full text-sm font-medium
            ${membership.color === 'purple' ? 'bg-purple-100 text-purple-800' : ''}
            ${membership.color === 'blue' ? 'bg-blue-100 text-blue-800' : ''}
            ${membership.color === 'green' ? 'bg-green-100 text-green-800' : ''}
            ${membership.color === 'amber' ? 'bg-amber-100 text-amber-800' : ''}
          `}>
            {formatCurrency(convertCurrency(membership.monthlyPrice, 'USD', currency), currency) + '/mo'}
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-3 mb-3">
          <div class="flex items-center gap-2">
            <div class={`w-8 h-8 rounded-lg flex items-center justify-center
              ${membership.color === 'purple' ? 'bg-purple-50 text-purple-600' : ''}
              ${membership.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
              ${membership.color === 'green' ? 'bg-green-50 text-green-600' : ''}
              ${membership.color === 'amber' ? 'bg-amber-50 text-amber-600' : ''}
            `}>
              {membership.dayPassAvailable ? '✓' : '–'}
            </div>
            <div>
              <p class="text-xs text-gray-500">Daily Pass</p>
              <p class="text-sm font-medium text-gray-700">{membership.dayPassAvailable ? 'Available' : 'Not available'}</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <div class={`w-8 h-8 rounded-lg flex items-center justify-center
              ${membership.color === 'purple' ? 'bg-purple-50 text-purple-600' : ''}
              ${membership.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
              ${membership.color === 'green' ? 'bg-green-50 text-green-600' : ''}
              ${membership.color === 'amber' ? 'bg-amber-50 text-amber-600' : ''}
            `}>
              {membership.trialDays > 0 ? membership.trialDays : '–'}
            </div>
            <div>
              <p class="text-xs text-gray-500">Free Trial</p>
              <p class="text-sm font-medium text-gray-700">
                {membership.trialDays > 0 ? membership.trialDays + ' days' : 'No trial'}
              </p>
            </div>
          </div>
        </div>
        
        <p class="text-sm text-gray-700 italic">Best for: {membership.bestFor}</p>
        
        {#if isRelevantForCountry(membership, selectedCountry)}
          <div class="mt-3 pt-3 border-t border-gray-100">
            <p class="text-xs text-green-600 font-medium flex items-center gap-1">
              <span>✅</span> Available in {selectedCountry}
            </p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
  
  <!-- Regional Tip -->
  <div class="mt-6 pt-6 border-t border-gray-200">
    <div class="bg-indigo-50 rounded-xl p-4">
      <p class="text-sm text-indigo-800 font-medium mb-1">💡 Regional Membership Tip</p>
      <p class="text-xs text-indigo-700">
        In {selectedCountry}, ask about local coworking alliances. Many cities have networks where one membership gives access to multiple spaces.
      </p>
    </div>
  </div>
</div>
