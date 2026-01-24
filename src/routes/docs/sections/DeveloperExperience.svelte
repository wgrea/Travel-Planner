<!-- src/routes/docs/sections/DeveloperExperience.svelte -->
<script>
  // DX Principles for frequent reference
</script>

<article class="prose prose-lg max-w-none">
  <h2>Developer Experience (DX) Principles</h2>
  
  <div class="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
    <h3 class="text-amber-800 mb-3">⚠️ Most Frequently Referenced Principles</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded border">
        <h4 class="font-bold mb-2">File Consistency</h4>
        <ul class="text-sm space-y-1">
          <li>• Standardize data structures across all pages</li>
          <li>• Use same patterns for similar features</li>
          <li>• Living Costs page is the reference implementation</li>
        </ul>
      </div>
      <div class="bg-white p-4 rounded border">
        <h4 class="font-bold mb-2">Naming Rules</h4>
        <ul class="text-sm space-y-1">
          <li>• No duplicate terms in same folder</li>
          <li>• Avoid "main" or vague terms</li>
          <li>• Contextual naming in specific folders</li>
        </ul>
      </div>
    </div>
  </div>

  <h3>Development Priorities (Current)</h3>
  <div class="bg-blue-50 p-4 rounded border border-blue-200 my-4">
    <p><strong>Phase 1: DX Foundation</strong> → Fix structure before adding features</p>
    <p><strong>Phase 2: Core Features</strong> → Add features with thorough testing</p>
    <p><strong>Phase 3: Advanced Features</strong> → Expand functionality</p>
  </div>
  
  <h3>Core DX Philosophy</h3>
  <ul>
    <li><strong>DX First, Then Features</strong>: Fix structure before adding functionality</li>
    <li><strong>AI-Compatible Design</strong>: Files under 300 lines for better AI analysis</li>
    <li><strong>Human-Scale Cognition</strong>: Components should fit in working memory</li>
  </ul>
  
  <h3>File Structure Principles</h3>
  <pre class="bg-gray-50 p-4 rounded"><code>✅ Discoverable: Can find things without searching
✅ Predictable: Follows established patterns  
✅ Hierarchical: Clear parent-child relationships
✅ Minimal: No unnecessary nesting/depth
✅ Revealing: Structure tells you about the system</code></pre>
  
  <h3>Naming Conventions</h3>
  <div class="border-l-4 border-blue-500 pl-4 my-4">
    <p class="font-semibold">Anti-pattern:</p>
    <p><code>featurename/component/featurename-component.svelte</code> (redundant)</p>
    <p class="font-semibold mt-2">Better pattern:</p>
    <p><code>featurename/component/function.svelte</code></p>
    <p class="text-sm text-gray-600 mt-1">Reason: Less visual noise, clearer purpose in context</p>
  </div>
  
  <!-- Add your specific principles from README -->
  <h3>DX To-Do Checklist</h3>
  <div class="bg-gray-50 p-4 rounded my-4">
    <h4 class="font-bold mb-2">File Consistency</h4>
    <ul class="space-y-1">
      <li class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Living Costs page - reference implementation</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-amber-600">→</span>
        <span>Digital Nomad page - in progress</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-gray-600">○</span>
        <span>Flight Costs page - needs standardization</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-gray-600">○</span>
        <span>Visa page - needs standardization</span>
      </li>
    </ul>
  </div>
  
  <h3>Fundamental Principles</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
    <!-- DX Column -->
    <div class="border rounded-lg p-4">
      <h4 class="font-bold text-blue-700 mb-3">Developer Experience (DX)</h4>
      <ul class="space-y-2 text-sm">
        <li><strong>Cognitive Load Management</strong> - Keep files small and focused</li>
        <li><strong>Flow State</strong> - Minimize context switching</li>
        <li><strong>Development Ergonomics</strong> - Fast feedback loops</li>
        <li><strong>Error Messages</strong> - Clear and actionable</li>
        <li><strong>Ecosystem Integration</strong> - Works with existing tools</li>
      </ul>
    </div>
    
    <!-- UX/DX Shared Column -->
    <div class="border rounded-lg p-4">
      <h4 class="font-bold text-purple-700 mb-3">UX/DX Shared</h4>
      <ul class="space-y-2 text-sm">
        <li><strong>User-Centered Design</strong> - Solve real problems</li>
        <li><strong>Usability</strong> - Intuitive interfaces</li>
        <li><strong>Information Architecture</strong> - Logical organization</li>
        <li><strong>Accessibility</strong> - Works for everyone</li>
        <li><strong>Consistency</strong> - Predictable patterns</li>
        <li><strong>Reducing Friction</strong> - Smooth workflows</li>
      </ul>
    </div>
  </div>
</article>