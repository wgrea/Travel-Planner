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
        <h4 class="font-semibold text-gray-800 mb-4">🚀 What's Next</h4> 
        <div class="space-y-3">
          
          <!-- CURRENT PRIORITY: DX Cleanup -->
          <div class="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-3 border border-amber-200">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center gap-2">
                <span class="text-lg">🛠️</span>
                <span class="font-medium text-gray-700">DX Cleanup</span>
              </div>
            </div>
            <p class="text-xs text-gray-600">
              Standardizing data structures across all pages
            </p>
          </div>
          
          <!-- UP NEXT: Saved Plans -->
          <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center gap-2">
                <span class="text-lg">💾</span>
                <span class="font-medium text-gray-700">Saved Plans</span>
              </div>
            </div>
            <p class="text-xs text-gray-600">
              Save flight & living cost plans (testing on 2 pages first)
            </p>
          </div>
          
          <!-- PLANNED: Digital Nomad Filters -->
          <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-lg">💻</span>
              <span class="font-medium text-gray-700">Smart Nomad Filters</span>
            </div>
            <p class="text-xs text-gray-600">
              Internet-first hostel/coliving filters
            </p>
          </div>
          
          <!-- ROADMAP LINK -->
          <div class="pt-4 text-center">
            <a href="/roadmap" class="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 font-medium group">
              View Full Roadmap
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div> <!-- THIS WAS MISSING: Closing div for grid container -->

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