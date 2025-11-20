<!-- src/routes/visa/components/VisaMatrix.svelte -->
<script lang="ts">
  import type { VisaInfo } from '$lib/types/visa';
  import type { Country } from '$lib/types/minimalData';

  // Define both props
  export let visaInfo: VisaInfo;
  export let countryData: Country | undefined;

  // Use the matrixHelpers if you have them, or define locally:
  const matrixItems = [
    { label: 'Visa Type', value: visaInfo.category },
    { label: 'Income Required', value: visaInfo.incomeReq },
    { label: 'Documents', value: 'Passport + Proof of income' },
    { label: 'Cost of Living', value: countryData?.costs?.tier ? `${countryData.costs.tier} cost` : 'Unknown' },
    { label: 'Digital Nomad Visa', value: visaInfo.nomadVisa ? 'Available' : 'Not available' },
    { label: 'Best Time to Visit', value: getBestTimeToVisit() },
    { label: 'Visa Difficulty', value: countryData?.visa?.difficulty ? `${countryData.visa.difficulty}` : 'Unknown' },
    { label: 'Work Policy', value: visaInfo.workPolicy }
  ];

  function getBestTimeToVisit(): string {
    if (!countryData?.seasonality?.bestMonths) return 'Year-round';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const bestMonths = countryData.seasonality.bestMonths.map((month: number) => months[month - 1]);
    return bestMonths.join(', ');
  }
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {#each matrixItems as item}
    <div class="text-center p-4 rounded-lg bg-stone-50 border border-stone-200">
      <div class="font-medium text-xs mb-2 text-stone-500 uppercase tracking-wider">{item.label}</div>
      <div class="text-stone-900 text-sm font-light">{item.value}</div>
    </div>
  {/each}
</div>