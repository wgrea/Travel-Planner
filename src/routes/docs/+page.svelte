<!-- src/routes/docs/+page.svelte -->
<!--
When I am not busy, I do want to add how I struggled with figuring out how to add the country data.
I also wanted to make sure to use the same reusable components accross pages.
I ended up using the same country files accross the pages.
What caused an error was trying to use filght data inside the same export as the visa data. They had to be two different exports so that caused an error when trying. 



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

      <div>
        <a href="/" class="inline-block mt-8 px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 transition">
          ⬅ Back to Home
        </a>
      </div>
    </main>
  </div>
</div>
