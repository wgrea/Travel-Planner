<!-- src/routes/digital-nomad/components/DigitalNomadBadge.svelte -->
<script lang="ts">
  // Use $props() only ONCE
  let { touristArea, days, discount, type } = $props();
</script>

{#if touristArea !== undefined}
  <span class="text-xs px-2 py-1 rounded-full {touristArea ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}">
    {touristArea ? '🏖️ Tourist Area' : '🏘️ Local Area'}
  </span>
{/if}

{#if days}
  <span class="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
    🎁 {days} day{days > 1 ? 's' : ''} free trial
  </span>
{/if}

{#if discount}
  <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
    💰 {discount}% long-term discount
  </span>
{/if}

<span class="text-xs px-2 py-1 rounded-full
  {type === 'coworking' ? 'bg-blue-100 text-blue-700' : ''}
  {type === 'cafe' ? 'bg-green-100 text-green-700' : ''}
  {type === 'library' ? 'bg-purple-100 text-purple-700' : ''}
  {type === 'hotel' ? 'bg-amber-100 text-amber-700' : ''}
  {type === 'hostel' ? 'bg-indigo-100 text-indigo-700' : ''}
  {type === 'public_space' ? 'bg-gray-100 text-gray-700' : ''}">
  {type}
</span>
