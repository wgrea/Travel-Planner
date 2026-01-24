<!-- src/lib/components/comparison/Tips.svelte -->
<script lang="ts">
  let { mode = 'living-costs' as 'living-costs' | 'nomad' | 'flights' | 'visa' } = $props();
  
  const modeTips = $derived({
    'living-costs': [
      'Consider seasonal variations in accommodation prices',
      'Local transportation can significantly impact monthly budgets',
      'Eating at local markets vs restaurants affects food costs',
      'Check if utilities are included in accommodation prices'
    ],
    'nomad': [
      'Coworking spaces often offer weekly/monthly discounts',
      'Check internet reliability in different neighborhoods',
      'Some cafes expect minimum purchases for all-day work',
      'Look for coliving spaces that include workspace access'
    ],
    'flights': [
      'Book 6-8 weeks in advance for best prices',
      'Consider nearby airports for cheaper options',
      'Tuesday/Wednesday flights are often cheaper',
      'Check luggage fees when comparing airlines'
    ],
    'visa': [
      'Processing times can vary seasonally',
      'Some visas require proof of onward travel',
      'Check if you can extend visas within the country',
      'Digital nomad visas often require proof of income'
    ]
  });
  
  const modeColors = $derived({
    'living-costs': {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      bullet: 'text-emerald-600'
    },
    'nomad': {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      bullet: 'text-blue-600'
    },
    'flights': {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-900',
      bullet: 'text-purple-600'
    },
    'visa': {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      bullet: 'text-amber-600'
    }
  });
  
  const colors = $derived(modeColors[mode]);
</script>

<div class="bg-white rounded-xl border p-6 {colors.border}">
  <h3 class="text-lg font-semibold mb-4 {colors.text}">
    Comparison Tips
  </h3>
  <ul class="space-y-2">
    {#each modeTips[mode] as tip}
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 mt-0.5 flex-shrink-0 {colors.bullet}" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-gray-700">{tip}</span>
      </li>
    {/each}
  </ul>
</div>