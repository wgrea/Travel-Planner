<!-- src/routes/visa/components/PassportBanner.svelte -->
<div class="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-6 h-6 mt-0.5">
      <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    </div>
    <div>
      <h3 class="text-lg font-medium text-amber-900 mb-2">Passport Check Required</h3>
      <div class="text-amber-800 text-sm space-y-2">
        <p class="font-medium">Before you proceed, ensure you have:</p>
        <ul class="list-disc list-inside space-y-1 ml-2">
          <li>A valid passport (most countries require 6 months validity beyond your travel dates)</li>
          <li>At least 2-4 blank pages for visa stamps</li>
          <li>Your passport is not damaged or tampered with</li>
        </ul>
        <p class="text-amber-700 font-medium mt-3">No passport yet? Allow 8-12 weeks for standard processing.</p>
      </div>
    </div>
  </div>
</div>
