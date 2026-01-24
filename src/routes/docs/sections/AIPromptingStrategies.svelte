<!-- src/routes/docs/sections/AIPromptingStrategies.svelte -->
<script>
  // Document how to work effectively with AI
</script>

<article class="prose prose-lg max-w-none">
  <h2>AI Prompting Strategies</h2>
  
  <h3>The "Blue Button" Insight</h3>
  <blockquote class="border-l-4 border-purple-500 pl-4 italic my-4">
    "A blue button just looks frontend prototyped, and not UX prototyped."
  </blockquote>
  <p>When AI suggests pure blue buttons (#2563eb), it's using generic defaults. 
  Professional sites use brand colors, not default blue.</p>
  
  <h3>Prompting Anti-Patterns</h3>
  <div class="bg-red-50 p-4 rounded my-4">
    <p class="font-bold text-red-800">❌ "Make this better UI/UX"</p>
    <p class="text-sm">AI defaults to generic improvements without context</p>
  </div>
  
  <div class="bg-green-50 p-4 rounded my-4">
    <p class="font-bold text-green-800">✅ "This is a patient intake form for medical receptionists. 
    Goal: Enter patient info as quickly as possible. Problems: Too many required fields upfront..."</p>
    <p class="text-sm">Specific context yields targeted improvements</p>
  </div>
  
  <h3>AI-Assisted Refactoring Protocol</h3>
  <pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto">
# When renaming files with AI help:
1. First: `grep -r "import.*OldName" src/`  # Find all references
2. Then: Ask AI for sed command to update imports
3. Example: `sed -i 's/OldName/NewName/g' src/routes/**/*.svelte`
4. Move file after imports updated
5. Test one component at a time</pre>
</article>