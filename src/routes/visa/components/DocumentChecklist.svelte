<!-- src/routes/visa/components/DocumentChecklist.svelte -->
<script lang="ts">
  // Import the VisaInfo type
  import type { VisaInfo } from '$lib/types/visa';
  
  export let visaInfo: VisaInfo;
  
  const getDocuments = (hasNomadVisa: boolean) => {
    const baseDocs = [
      'Passport scan + expiration check',
      'Proof of income template', 
      'Health insurance policy',
      'Bank statements (3 months)',
      'Resume + portfolio links'
    ];
    
    if (hasNomadVisa) {
      return [...baseDocs, 'Digital nomad visa application', 'Background check (if needed)'];
    }
    
    return baseDocs;
  };
</script>

<div class="space-y-3">
  {#each getDocuments(visaInfo.nomadVisa) as item}
    <div class="flex items-center justify-between p-4 rounded-lg bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors">
      <span class="text-sm text-stone-700 font-light">{item}</span>
      <button class="text-xs bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-full transition-colors font-medium">
        Prepare
      </button>
    </div>
  {/each}
</div>