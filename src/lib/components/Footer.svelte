<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  // Simple footer component
</script>

<footer class="border-t border-gray-200 bg-white/50 py-8 mt-12">
  <!-- WIDER CONTAINER: Changed from max-w-7xl to max-w-screen-2xl -->
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="text-3xl">🌍</div>
          <span class="font-semibold text-gray-800 text-xl">Echotrip</span>
        </div>
        <p class="text-gray-600 text-sm">
          Your complete guide to planning trips, managing costs, and finding perfect destinations.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-semibold text-gray-800 mb-4">Quick Links</h4>
        <div class="space-y-2">
          <a href="/docs" class="block text-gray-600 hover:text-blue-600 text-sm">Documentation</a>
          <a href="/digital-nomad/support" class="block text-gray-600 hover:text-blue-600 text-sm">Digital Nomad Support</a>
          <a href="/digital-nomad/how-to-work-from-anywhere" class="block text-gray-600 hover:text-blue-600 text-sm">Work From Anywhere Guide</a>
        </div>
      </div>

      <!-- Coming Soon -->
      <div>
        <h4 class="font-semibold text-gray-800 mb-4">Future Updates</h4>
        <div class="space-y-3">
          <div class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-lg">💾</span>
              <span class="font-medium text-gray-700">Saved Plans</span>
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Planned</span>
            </div>
            <p class="text-xs text-gray-600">
              Save, organize, and share your travel plans.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-200 mt-8 pt-6 text-center">
      <div class="text-sm text-gray-600">
        © {new Date().getFullYear()} Echotrip
      </div>
      <div class="text-xs text-gray-500 mt-2">
        Saved Trips feature coming soon!
      </div>
    </div>
  </div>
</footer>