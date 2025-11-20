<!-- src/routes/docs/+page.svelte -->
<!-- This is for documentation of how the project was built, not for filling forms -->
<div class="min-h-screen bg-gray-50 text-gray-900">
  <div class="flex flex-col lg:flex-row">
    <!-- Sidebar Navigation -->
    <aside class="w-full lg:w-1/4 border-r border-gray-200 bg-white p-6 space-y-4 min-h-screen">
      <h2 class="text-2xl font-semibold text-gray-700">Contents</h2>
      <nav class="space-y-2">
        <a href="#overview" class="block text-gray-600 hover:text-gray-900 transition">Overview</a>
        <a href="#setup" class="block text-gray-600 hover:text-gray-900 transition">Setup</a>
        <a href="#design" class="block text-gray-600 hover:text-gray-900 transition">Design Choices</a>
        <a href="#ux" class="block text-gray-600 hover:text-gray-900 transition">UX Goals</a>
      </nav>
    </aside>

    <!-- Main Documentation Content -->
    <main class="flex-1 p-8 space-y-10">
      <section id="overview">
        <h1 class="text-4xl font-bold mb-4 text-gray-900">📚 Project Documentation</h1>
        <p class="text-gray-800">This page documents the reasoning and creative process for the travel planning app, built using SvelteKit and Tailwind CSS.</p>
      </section>
      <section id="setup">
        <h2 class="text-2xl font-semibold mb-2 text-gray-800">Setup</h2>
        <ul class="list-disc ml-6 text-gray-700 space-y-2">
          <li>Downloaded and initialized SvelteKit using CLI.</li>
          <li>Integrated Tailwind CSS for styling.</li>
          <li>Structured files with smaller components for modularity.</li>
        </ul>
      </section>
      <section id="design">
        <h2 class="text-2xl font-semibold mb-2 text-gray-800">Design Choices</h2>
        <p class="text-gray-700 mb-2">
          Chose practical, modern UI conventions using Tailwind for utility and quick layout adjustments.
        </p>
      </section>
      <section id="ux">
        <h2 class="text-2xl font-semibold mb-2 text-gray-800">UX and Future Development</h2>
        <ul class="list-disc ml-6 text-gray-700 space-y-2">
          <li>Start with personalized data (e.g., countries you plan to visit).</li>
          <li>Gradually transform it for general users.</li>
          <li>Develop intuitive filters without overcomplicating user input.</li>
          <li>Highlight remote workspaces and travel essentials.</li>
        </ul>
      </section>
      <div>
        <a href="/" class="inline-block mt-8 px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 transition">
          ⬅ Back to Home
        </a>
      </div>
    </main>
  </div>
</div>
