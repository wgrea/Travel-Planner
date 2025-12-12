<!-- src/routes/digital-nomad/components/FreeWorkOptions.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import { selectedCurrency } from '$lib/stores/currency';
  
  let { selectedCountry, selectedCity, currency = 'USD' } = $props();
  
  // Calculate potential monthly savings
  const coworkingCost = 200; // Average monthly coworking cost
  const convertedCost = convertCurrency(coworkingCost, 'USD', currency);
  const savingsPercentage = 60; // Estimated savings using free options
  
  $effect(() => {
    console.log('💰 FreeWorkOptions currency:', currency);
  });
</script>

<div class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 mb-6 shadow-lg">
  <div class="flex items-center justify-between mb-6">
    <div>
      <h3 class="text-xl font-semibold text-emerald-900 mb-2">💰 Free & Low-Cost Work Options</h3>
      <p class="text-emerald-700">Save up to {savingsPercentage}% on workspace costs in {selectedCity || selectedCountry}</p>
    </div>
    <div class="bg-emerald-100 text-emerald-800 font-bold px-4 py-2 rounded-full text-sm">
      Potential Monthly Savings: {formatCurrency(convertedCost * savingsPercentage/100, currency)}
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <!-- Libraries -->
    <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-100 hover:border-emerald-300 transition-colors">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
          <span class="text-2xl">📚</span>
        </div>
        <div>
          <h4 class="font-semibold text-emerald-800">Public Libraries</h4>
          <p class="text-xs text-emerald-600">Free • Quiet • Reliable</p>
        </div>
      </div>
      <ul class="space-y-2 text-sm">
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-emerald-500 mt-1">✓</span>
          <span>Free Wi-Fi & power outlets</span>
        </li>
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-emerald-500 mt-1">✓</span>
          <span>No time limits typically</span>
        </li>
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-emerald-500 mt-1">✓</span>
          <span>Air conditioned spaces</span>
        </li>
      </ul>
    </div>
    
    <!-- Coffee Shops -->
    <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100 hover:border-amber-300 transition-colors">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
          <span class="text-2xl">☕</span>
        </div>
        <div>
          <h4 class="font-semibold text-amber-800">Coffee Shops</h4>
          <p class="text-xs text-amber-600">Low Cost • Social • Flexible</p>
        </div>
      </div>
      <ul class="space-y-2 text-sm">
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-amber-500 mt-1">✓</span>
          <span>Purchase every 2-3 hours</span>
        </li>
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-amber-500 mt-1">✓</span>
          <span>Good for meetings & calls</span>
        </li>
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-amber-500 mt-1">✓</span>
          <span>Vibrant atmosphere</span>
        </li>
      </ul>
    </div>
    
    <!-- Public Spaces -->
    <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-colors">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <span class="text-2xl">🏛️</span>
        </div>
        <div>
          <h4 class="font-semibold text-blue-800">Public Spaces</h4>
          <p class="text-xs text-blue-600">Free • Scenic • Spacious</p>
        </div>
      </div>
      <ul class="space-y-2 text-sm">
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-blue-500 mt-1">✓</span>
          <span>Parks with public Wi-Fi</span>
        </li>
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-blue-500 mt-1">✓</span>
          <span>Shopping mall food courts</span>
        </li>
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-blue-500 mt-1">✓</span>
          <span>University campuses</span>
        </li>
      </ul>
    </div>
    
    <!-- Community Centers -->
    <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-100 hover:border-purple-300 transition-colors">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
          <span class="text-2xl">🤝</span>
        </div>
        <div>
          <h4 class="font-semibold text-purple-800">Community Hubs</h4>
          <p class="text-xs text-purple-600">Network • Local • Supportive</p>
        </div>
      </div>
      <ul class="space-y-2 text-sm">
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-purple-500 mt-1">✓</span>
          <span>Local meetups & events</span>
        </li>
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-purple-500 mt-1">✓</span>
          <span>Shared workspace days</span>
        </li>
        <li class="text-gray-700 flex items-start gap-2">
          <span class="text-purple-500 mt-1">✓</span>
          <span>Discount referrals</span>
        </li>
      </ul>
    </div>
  </div>
  
  <!-- Quick Tip -->
  <div class="mt-6 pt-6 border-t border-emerald-200">
    <div class="flex items-start gap-3 bg-emerald-100/50 rounded-xl p-4">
      <div class="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0">
        <span class="text-emerald-700 font-bold">💡</span>
      </div>
      <div>
        <p class="font-medium text-emerald-800 mb-1">Pro Tip: The 3-2-2 Strategy</p>
        <p class="text-sm text-emerald-700">
          Work 3 days from free spaces, 2 days from coffee shops, and 2 days from coworking spaces each week. 
          This balance maximizes savings while maintaining productivity and networking opportunities.
        </p>
      </div>
    </div>
  </div>
</div>