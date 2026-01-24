<section id="dev-notes">
  <h2 class="text-2xl font-semibold mb-4 text-gray-800">🔧 Development Notes & Process</h2>
  <div class="space-y-6">
    <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <h3 class="font-semibold text-blue-800">Development Philosophy</h3>
      <ul class="list-disc ml-6 text-blue-700 space-y-2">
        <li><strong>Wait until everything is working</strong> before worrying about perfect structure</li>
        <li><strong>Page files do not need to be 500 pages long</strong> - keep them focused</li>
        <li><strong>Start with what's working</strong> and modify rather than creating new pages from scratch</li>
        <li>Cleanup of early files (flight costs, visa pages) showed improvement: "Seeing a rough version does really show how much you have improved"</li>
      </ul>
    </div>
    
    <div class="bg-green-50 p-4 rounded-lg border border-green-200">
      <h3 class="font-semibold text-green-800">Debugging & Testing Strategies</h3>
      <ul class="list-disc ml-6 text-green-700 space-y-2">
        <li><strong>Digital nomad page</strong>: "It was hard to test. Have live debug shown in front of me really helped. I ended up putting a lot of debug messages. I may keep the live debug in for now even if I share my site publicly."</li>
        <li><strong>Flight page origin filter</strong>: "It was tough to only show one origin country. That was a silly problem to have and I showed DeepSeek my component/CheapestCountry.svelte file and it took a few rounds of debugging to finally show just one country. Rediculous."</li>
        <li><strong>Currency conversion</strong>: "It was a nightmare just to move the working function of changing the currencies to the other pages."</li>
      </ul>
    </div>
    
    <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
      <h3 class="font-semibold text-purple-800">Quick Wins vs. Challenges</h3>
      <ul class="list-disc ml-6 text-purple-700 space-y-2">
        <li><strong>Resonance filters page</strong>: "The resonance filters page was the quickest and easiest to make. I filtered by cities just for any yellow area filters."</li>
        <li><strong>AI collaboration</strong>: "I need to show the chatbot two files of the resonance filters to make sure I don't need to look back over it and not need to fix that much."</li>
        <li><strong>Show more functionality</strong>: "Make sure 'show more' works"</li>
      </ul>
    </div>
    
    <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
      <h3 class="font-semibold text-yellow-800">AI Collaboration Protocol</h3>
      <p class="text-yellow-700 mb-2">When asking a chatbot to add resonance data for new countries:</p>
      <ul class="list-disc ml-6 text-yellow-700 space-y-1">
        <li>Show <strong>data structure</strong> (the resonance.ts files)</li>
        <li>Include <strong>type definitions</strong> (ResonancePreferences, CityResonanceProfile)</li>
        <li>Share <strong>tag and activity categories</strong> from resonanceData.ts</li>
        <li>Provide <strong>existing country examples</strong> (Thailand, Brazil, Argentina)</li>
        <li>"Before asking a bot to add resonance data for another country, make sure you show these files"</li>
      </ul>
    </div>
    
    <div class="bg-red-50 p-4 rounded-lg border border-red-200">
      <h3 class="font-semibold text-red-800">Deployment & Maintenance Notes</h3>
      <ul class="list-disc ml-6 text-red-700 space-y-2">
        <li>"I ended up having to update a few files at a time but had to remind myself to make sure I save the country files when I deploy the app"</li>
        <li>Incremental updates are safer than bulk changes</li>
        <li>Keep backup of country data files before deployment</li>
      </ul>
    </div>
  </div>
</section>