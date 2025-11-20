<!-- src/routes/visa/components/VisaMatrix.svelte -->
<script lang="ts">
  import type { VisaInfo } from '$lib/types/visa';

  export let visaInfo: VisaInfo;
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {#each [
    { label: 'Visa Type', value: visaInfo.category },
    { label: 'Income Required', value: visaInfo.incomeReq },
    { label: 'Documents', value: 'Passport + Proof of income' },
    { label: 'Emotional Fit', value: 'High' },
    { label: 'Housing', value: 'Easy to find' },
    { label: 'Tax Implications', value: 'Foreign income often exempt' },
    { label: 'Digital Nomad Visa', value: visaInfo.nomadVisa ? 'Available' : 'Not available' }
  ] as item}
    <div class="text-center p-4 rounded-lg bg-stone-50 border border-stone-200">
      <div class="font-medium text-xs mb-2 text-stone-500 uppercase tracking-wider">{item.label}</div>
      <div class="text-stone-900 text-sm font-light">{item.value}</div>
    </div>
  {/each}
</div>