<!-- src/routes/living-costs/components/ComparisonView.svelte -->
<script lang="ts">
  import ComparisonHeader from '../../../lib/components/comparison/Header.svelte';
  import SelectedCountries from '../../../lib/components/comparison/SelectedCountries.svelte';
  import ComparisonGrid from '../../../lib/components/comparison/Grid.svelte';
  import ComparisonTips from '../../../lib/components/comparison/Tips.svelte';
  import Grid from './Grid.svelte';
  
  export let countries: string[] = [];
  
  // Event handlers
  let oncountryclick: (event: { detail: { country: string } }) => void = () => {};
  let oneditselection: () => void = () => {};
  let onbacktosingle: () => void = () => {};
  let onremovecountry: (event: { detail: { country: string } }) => void = () => {};
</script>

<div class="space-y-8">
  <ComparisonHeader
    {countries}
    mode="living-costs"
    {oneditselection}
    {onbacktosingle}
  />
  
  <SelectedCountries
    countries={countries}
    mode="living-costs"
    onremovecountry={onremovecountry}
  />
  
  <!-- Simple approach: Don't use the Grid wrapper, just render directly -->
  {#if countries.length === 0}
    <div class="bg-white rounded-xl border border-emerald-200 p-8 text-center">
      <p class="text-gray-500">Select countries to compare living costs</p>
      <button
        on:click={oneditselection}
        class="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
        type="button"
      >
        Select Countries
      </button>
    </div>
  {:else}
    <Grid 
      {countries}
      oncountryclick={(country) => oncountryclick({ detail: { country } })}
    />
  {/if}
  
  <ComparisonTips mode="living-costs" />
</div>