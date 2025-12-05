<!-- src/routes/visa/components/VisaTypeDetails.svelte -->
<script lang="ts">
  import type { VisaTypeDetails } from '$lib/utils/visa';
  import { selectedCurrency } from '$lib/stores/currency';
  
  // Use $props() for runes mode
  let { visaDetails, showAll = false } = $props<{
    visaDetails: VisaTypeDetails[];
    showAll?: boolean;
  }>();
  
  // Get color for visa type
  function getVisaColor(type: string): string {
    if (type.includes('Visa-Free')) return 'text-green-600 bg-green-50 border-green-200';
    if (type.includes('Visa on Arrival')) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (type.includes('e-Visa')) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (type.includes('Digital Nomad') || type.includes('Freelance')) return 'text-purple-600 bg-purple-50 border-purple-200';
    if (type.includes('Tourist')) return 'text-cyan-600 bg-cyan-50 border-cyan-200';
    if (type.includes('Business')) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  }
</script>

<div class="space-y-4">
  <h3 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
    <span>📋</span>
    Visa Options & Details
  </h3>
  
  {#each visaDetails.slice(0, showAll ? visaDetails.length : 3) as detail}
    <div class="border rounded-lg p-4 {getVisaColor(detail.type)}">
      <div class="flex items-start justify-between mb-3">
        <div>
          <span class="font-semibold">{detail.type}</span>
          {#if detail.nomadFriendly}
            <span class="ml-2 text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
              💻 Remote Work
            </span>
          {/if}
        </div>
        <div class="text-right">
          <div class="font-bold">{detail.cost}</div>
          <div class="text-xs text-gray-500">{detail.processingTime}</div>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-3">
        <div>
          <div class="text-xs text-gray-500">Duration</div>
          <div class="font-medium">{detail.duration}</div>
        </div>
        <div>
          <div class="text-xs text-gray-500">Work Allowed</div>
          <div class="font-medium">
            {detail.workAllowed ? '✅ Yes' : '❌ No'}
          </div>
        </div>
      </div>
      
      <div>
        <div class="text-xs text-gray-500 mb-2">Requirements:</div>
        <ul class="space-y-1">
          {#each detail.requirements.slice(0, 3) as req}
            <li class="text-sm flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
              {req}
            </li>
          {/each}
          {#if detail.requirements.length > 3}
            <li class="text-sm text-gray-500">
              + {detail.requirements.length - 3} more requirements
            </li>
          {/if}
        </ul>
      </div>
    </div>
  {/each}
  
  {#if visaDetails.length > 3 && !showAll}
    <button
      onclick={() => showAll = true}
      class="text-sm text-blue-600 hover:text-blue-800 w-full text-center py-2"
    >
      Show {visaDetails.length - 3} more visa options
    </button>
  {/if}
</div>