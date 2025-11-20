<!-- src/routes/admin/+page.svelte -->
<script lang="ts">
  import { updateCountryData } from '$lib/utils/dataUpdater';
  
  let updateJson = '';
  
  function applyUpdate() {
    try {
      const update = JSON.parse(updateJson);
      updateCountryData(update);
      updateJson = '';
      alert('Update applied successfully!');
    } catch (error) {
      alert('Invalid JSON format');
    }
  }
</script>

<div class="admin-panel">
  <h2>Update Country Data</h2>
  <textarea
    bind:value={updateJson}
    placeholder="Paste update JSON here..."
    rows="10"
  ></textarea>
  <button on:click={applyUpdate}>Apply Update</button>
</div>