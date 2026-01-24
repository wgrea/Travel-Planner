<section id="ai-collaboration">
  <h2 class="text-2xl font-semibold mb-4 text-gray-800">🤖 AI Collaboration Challenges</h2>
  <div class="space-y-6">
    <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
      <h3 class="font-semibold text-orange-800">The Communication Gap</h3>
      <p class="text-orange-700 mb-3 italic">
        "I think this is really stupid, but it seems like I have to explicitly say 'lets do what I did from the other files' for the ai bot to know that is what I am trying to do instead of just showing what I have done consistently"
      </p>
      <ul class="list-disc ml-6 text-orange-700 space-y-2">
        <li><strong>Context blindness</strong>: AI doesn't automatically infer patterns from previously shown code</li>
        <li><strong>Explicit instruction needed</strong>: Must verbally state intent to follow existing patterns</li>
        <li><strong>Consistency maintenance</strong>: Requires active effort to ensure new code follows established conventions</li>
      </ul>
    </div>
    
    <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <h3 class="font-semibold text-blue-800">Resonance Data Protocol</h3>
      <p class="text-blue-700 mb-2"><strong>When asking AI to add resonance data for new countries:</strong></p>
      <div class="bg-gray-100 p-4 rounded text-sm font-mono mb-3">
        <p class="text-gray-800">// Required files to show the AI assistant</p>
        <p class="text-blue-600">1. data structure (the resonance.ts files)</p>
        <p class="text-blue-600">2. type definitions (ResonancePreferences, CityResonanceProfile)</p>
        <p class="text-blue-600">3. tag and activity categories from resonanceData.ts</p>
        <p class="text-blue-600">4. existing country examples (Thailand, Brazil, Argentina)</p>
      </div>
      <p class="text-blue-600 italic">"Before asking a bot to add resonance data for another country, make sure you show these files"</p>
    </div>
    
    <div class="bg-green-50 p-4 rounded-lg border border-green-200">
      <h3 class="font-semibold text-green-800">Debugging Protocol</h3>
      <ul class="list-disc ml-6 text-green-700 space-y-2">
        <li><strong>Digital nomad page testing</strong>: "It was hard to test. Have live debug shown in front of me really helped. I ended up putting a lot of debug messages. I may keep the live debug in for now even if I share my site publicly."</li>
        <li><strong>Flight page origin filter</strong>: "It was tough to only show one origin country. That was a silly problem to have and I showed DeepSeek my component/CheapestCountry.svelte file and it took a few rounds of debugging to finally show just one country. Rediculous."</li>
        <li><strong>Currency conversion</strong>: "It was a nightmare just to move the working function of changing the currencies to the other pages."</li>
      </ul>
    </div>
    
    <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
      <h3 class="font-semibold text-purple-800">Effective AI Collaboration Patterns</h3>
      <ul class="list-disc ml-6 text-purple-700 space-y-2">
        <li><strong>Show two files minimum</strong>: "I need to show the chatbot two files of the resonance filters to make sure I don't need to look back over it and not need to fix that much."</li>
        <li><strong>Specific over general</strong>: Asking for "show more functionality" works better than "add pagination"</li>
        <li><strong>Component reference</strong>: Showing existing working components (CheapestCountry.svelte) as reference yields better results</li>
        <li><strong>Resonance filters example</strong>: "The resonance filters page was the quickest and easiest to make. I filtered by cities just for any yellow area filters."</li>
      </ul>
    </div>
    
    <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
      <h3 class="font-semibold text-yellow-800">Workflow Insights</h3>
      <ul class="list-disc ml-6 text-yellow-700 space-y-2">
        <li><strong>Incremental deployment</strong>: "I ended up having to update a few files at a time but had to remind myself to make sure I save the country files when I deploy the app"</li>
        <li><strong>Pattern recognition</strong>: AI works best when shown consistent patterns across multiple files</li>
        <li><strong>Explicit continuity</strong>: Must state "do what I did in the other files" to maintain consistency</li>
        <li><strong>Documentation as reference</strong>: This documentation itself helps both human and AI understanding of project patterns</li>
      </ul>
    </div>
  </div>
</section>