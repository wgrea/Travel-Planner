<!-- src/routes/visa/components/VisaStatsBanner.svelte -->
<script lang="ts">
  let { selectedRegion, selectedSubregion, visaCounts } = $props<{
    selectedRegion: string;
    selectedSubregion: string;
    visaCounts: { totalVisas: number; visaFree: number; nomadVisas: number };
  }>();
</script>

<div class="mb-6 p-4 bg-gradient-to-r from-blue-50/60 to-indigo-100/60 rounded-xl border border-blue-200/50">
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <h3 class="font-medium text-gray-900">Visa Availability</h3>
      <p class="text-sm text-gray-600">
        {selectedRegion === 'All Regions' 
          ? 'Worldwide destinations' 
          : selectedSubregion === 'All Subregions'
            ? `Destinations in ${selectedRegion}`
            : `Destinations in ${selectedSubregion}, ${selectedRegion}`}
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="text-center">
        <div class="text-xl font-bold text-blue-600">{visaCounts.totalVisas}</div>
        <div class="text-xs text-blue-700">Total Destinations</div>
      </div>
      <div class="text-center">
        <div class="text-xl font-bold text-green-600">{visaCounts.visaFree}</div>
        <div class="text-xs text-green-700">Visa-Free</div>
      </div>
      <div class="text-center">
        <div class="text-xl font-bold text-purple-600">{visaCounts.nomadVisas}</div>
        <div class="text-xs text-purple-700">Nomad Visas</div>
      </div>
    </div>
  </div>
</div>