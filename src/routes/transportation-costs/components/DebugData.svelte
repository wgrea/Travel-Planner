<!-- src/routes/transportation-costs/components/DebugData.svelte -->
<script lang="ts">
  import { transportationData } from '$lib/data/transportationData';
  
  $effect(() => {
    console.log('=== DEBUG: Transportation Data ===');
    console.log('Total countries:', transportationData.length);
    
    transportationData.forEach((country, index) => {
      console.log(`Country ${index + 1}:`, country.country);
      console.log('Cities:', Object.keys(country.cities));
      console.log('First city data:', Object.values(country.cities)[0]);
    });
  });
</script>

<!-- Empty component, just for debugging -->