<!-- src/routes/docs/+page.svelte -->

<!-- Add:

Wait until everything is working and then worry about the structure
page files do not need to be 500 pages long
Start with/modify what is working instead of going into creating a new page

For the digital nomad page, it was hard to test. Have live debug shown in front of me really helped. I ended up putting a lot of debug messages. I may keep the live debug in for now even if I share my site publicly.

-->

<!-- This is for documentation of how the project was built, not for filling forms -->
<div class="min-h-screen bg-gray-50 text-gray-900">
  <div class="flex flex-col lg:flex-row">
    <!-- Sidebar Navigation -->
    <aside class="w-full lg:w-1/4 border-r border-gray-200 bg-white p-6 space-y-4 min-h-screen">
      <h2 class="text-2xl font-semibold text-gray-700">Contents</h2>
      <nav class="space-y-2">
        <a href="#overview" class="block text-gray-600 hover:text-gray-900 transition">Overview</a>
        <a href="#setup" class="block text-gray-600 hover:text-gray-900 transition">Setup</a>
        <a href="#architecture" class="block text-gray-600 hover:text-gray-900 transition">Architecture</a>
        <a href="#data-structure" class="block text-gray-600 hover:text-gray-900 transition">Data Structure</a>
        <a href="#design" class="block text-gray-600 hover:text-gray-900 transition">Design Choices</a>
        <a href="#ux" class="block text-gray-600 hover:text-gray-900 transition">UX Goals</a>
        <a href="#lessons" class="block text-gray-600 hover:text-gray-900 transition">Lessons Learned</a>
        <a href="#expansion" class="block text-gray-600 hover:text-gray-900 transition">Project Expansion</a>
      </nav>
    </aside>

    <!-- Main Documentation Content -->
    <main class="flex-1 p-8 space-y-10">
      <section id="overview">
        <h1 class="text-4xl font-bold mb-4 text-gray-900">📚 Project Documentation</h1>
        <p class="text-gray-800 text-lg">This page documents the reasoning, creative process, and technical journey for the travel planning app, built using SvelteKit and Tailwind CSS.</p>
      </section>

      <section id="setup">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">🚀 Setup & Foundation</h2>
        <ul class="list-disc ml-6 text-gray-700 space-y-2">
          <li>Downloaded and initialized SvelteKit using CLI</li>
          <li>Integrated Tailwind CSS for styling and rapid prototyping</li>
          <li>Structured files with smaller components for modularity and reusability</li>
          <li>Set up TypeScript for type safety and better developer experience</li>
        </ul>
      </section>

      <section id="architecture">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">🏗️ Architecture Evolution</h2>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">Initial Approach</h3>
            <p class="text-gray-700">Started with flat data structures and simple components</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">Scalability Realization</h3>
            <p class="text-gray-700">Recognized need for organized country data as project grew beyond flight costs</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">Current Structure</h3>
            <p class="text-gray-700">Modular country files with region-based organization supporting multiple data types</p>
          </div>
        </div>
      </section>

      <section id="data-structure">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">💾 Data Structure Breakthrough</h2>
        <div class="space-y-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 class="font-semibold text-green-800">Key Insight</h3>
            <p class="text-green-700"><strong>Data structure ≠ Page structure</strong> - The same country data can power multiple pages with different views and filters</p>
          </div>
          <ul class="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Country-based organization</strong>: Each country file contains all relevant data (flight patterns, living costs, visa info)</li>
            <li><strong>Region hierarchy</strong>: Supports main regions and European subregions for flexible filtering</li>
            <li><strong>TypeScript interfaces</strong>: Ensures data consistency across the application</li>
            <li><strong>Gradual enhancement</strong>: Can add new data types to countries without breaking existing features</li>
          </ul>
        </div>
      </section>

      <section id="design">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">🎨 Design Choices</h2>
        <p class="text-gray-700 mb-4">
          Chose practical, modern UI conventions using Tailwind for utility and quick layout adjustments.
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">Clean Aesthetic</h3>
            <p class="text-gray-700">Sophisticated retro-futuristic design with clear information hierarchy</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">Component-Based</h3>
            <p class="text-gray-700">Reusable components like CountrySelector reduce duplication and ensure consistency</p>
          </div>
        </div>
      </section>

      <section id="ux">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">🤔 UX Goals & Philosophy</h2>
        <ul class="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Start personalized</strong>: Begin with countries you plan to visit, then generalize</li>
          <li><strong>Progressive disclosure</strong>: Show relevant information without overwhelming users</li>
          <li><strong>Flexible journeys</strong>: Support both destination-first and criteria-first discovery</li>
          <li><strong>Optional features</strong>: Digital nomad sections that vacationers can skip</li>
          <li><strong>Actionable insights</strong>: Provide practical tips rather than abstract ratings</li>
        </ul>
      </section>

           <section id="lessons">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">💡 Lessons Learned & Challenges</h2>
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 class="font-semibold text-blue-800">Early Worries</h3>
            <ul class="list-disc ml-6 text-blue-700 space-y-1">
              <li>"Do I need to create duplicate data for different pages?" → No, same data different views</li>
              <li>"Should I add all countries at once?" → No, focus on data quality over quantity</li>
              <li>"How to handle complex filtering?" → Build flexible data structure first</li>
            </ul>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 class="font-semibold text-purple-800">Technical Breakthroughs</h3>
            <ul class="list-disc ml-6 text-purple-700 space-y-1">
              <li>TypeScript interfaces prevent data inconsistency</li>
              <li>Reactive declarations in Svelte simplify state management</li>
              <li>Modular imports make scaling manageable</li>
              <li>Region/subregion pattern enables sophisticated filtering</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 class="font-semibold text-green-800">Living Costs Page Breakthroughs</h3>
            <ul class="list-disc ml-6 text-green-700 space-y-1">
              <li><strong>Specialized components</strong> beat one-size-fits-all solutions</li>
              <li><strong>Currency conversion</strong> must be handled at the data level, not display level</li>
              <li><strong>Reactive statements</strong> in Svelte make complex state changes manageable</li>
              <li><strong>Debugging with console.log</strong> quickly reveals data flow issues</li>
              <li><strong>NaN errors</strong> usually mean missing data or currency rates</li>
            </ul>
          </div>
        </div>
      </section>

      

      <section id="expansion">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">🚀 Project Expansion Strategy</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">Immediate Next Steps</h3>
            <ul class="list-disc ml-6 text-gray-700 space-y-1">
              <li>Add living costs data to existing countries</li>
              <li>Build digital nomad page using same data structure</li>
              <li>Implement criteria-first filtering page</li>
              <li>Enhance country data with safety notes and local tips</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">Future Vision</h3>
            <ul class="list-disc ml-6 text-gray-700 space-y-1">
              <li>User preference saving and comparison features</li>
              <li>Integration with local event APIs</li>
              <li>Community-driven content and reviews</li>
              <li>Personalized travel itinerary generation</li>
            </ul>
          </div>
        </div>
        <div class="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 class="font-semibold text-yellow-800">Core Philosophy</h3>
          <p class="text-yellow-700">"Build a flexible foundation that can grow with user needs, not a rigid structure that limits possibilities."</p>
        </div>
      </section>

            <section id="european-subregions">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">🇪🇺 European Subregions Challenge</h2>
        <div class="space-y-4">
          <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 class="font-semibold text-orange-800">The Problem</h3>
            <p class="text-orange-700"><strong>Europe is too diverse</strong> - Treating all European countries as one region made filtering useless for users looking for specific experiences</p>
          </div>
          
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">The Solution: Nested Region Structure</h3>
            <div class="bg-gray-100 p-4 rounded text-sm font-mono">
              <p>Europe uses nested subregions (Western, Southern, Eastern, Northern, Caucasus)</p>
              <p>Other regions use flat country lists (Southeast Asia, South Asia, etc.)</p>
              <p class="mt-2 text-gray-600">// Flexible data structure supports both patterns</p>
            </div>
          </div>

          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 class="font-semibold text-green-800">Component-Based Breakthrough</h3>
            <p class="text-green-700"><strong>LivingCostCountrySelector</strong> - Created a dedicated component when generic CountrySelector became too complex</p>
            <ul class="list-disc ml-6 text-green-700 space-y-1 mt-2">
              <li><strong>Simplified interface</strong>: No need for flight-specific properties like sweetSpot and cheapestMonths</li>
              <li><strong>Better UX</strong>: Cleaner design focused on living costs use case</li>
              <li><strong>Maintainable</strong>: Easier to update without breaking other pages</li>
              <li><strong>Currency integration</strong>: Built-in currency conversion display</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 class="font-semibold text-blue-800">Key Technical Insight</h3>
            <p class="text-blue-700"><strong>Different pages need different component variations</strong> - What works for visa requirements might not work for living costs, even with the same underlying data</p>
            <p class="text-blue-600 mt-2">The solution wasn't forcing one component to handle all cases, but creating specialized components that share the same data structure.</p>
          </div>
        </div>
      </section>

      <section id="currency-integration">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">💱 Currency Conversion Implementation</h2>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-800">The Challenge</h3>
            <p class="text-gray-700">Living costs data comes in local currencies, but users want to see prices in their preferred currency</p>
          </div>
          
          <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 class="font-semibold text-purple-800">Solution Architecture</h3>
            <ul class="list-disc ml-6 text-purple-700 space-y-2">
              <li><strong>Centralized currency utilities</strong>: Single source of truth for exchange rates</li>
              <li><strong>Reactive conversion</strong>: Costs update automatically when currency changes</li>
              <li><strong>Fallback handling</strong>: Graceful degradation when currencies are missing</li>
              <li><strong>Local storage</strong>: Remember user's currency preference</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 class="font-semibold text-green-800">Code Pattern</h3>
            <div class="bg-gray-100 p-4 rounded text-sm font-mono">
              <p>// Reactive conversion in +page.svelte</p>
              <p>$: convertedDailyLiving = currentLivingCostData ? {'{'}</p>
              <p class="ml-4">budget: convertCurrency(currentLivingCostData.baseCosts.dailyLiving.budget, </p>
              <p class="ml-8">currentLivingCostData.currency, selectedCurrency),</p>
              <p class="ml-4">midrange: convertCurrency(...),</p>
              <p class="ml-4">luxury: convertCurrency(...)</p>
              <p>{'}'} : null;</p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <a href="/" class="inline-block mt-8 px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 transition">
          ⬅ Back to Home
        </a>
      </div>
    </main>
  </div>
</div>
