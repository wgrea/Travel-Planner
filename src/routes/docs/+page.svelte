<script lang="ts">
  // Clean import using barrel file - 1 line instead of 16!
  import * as Sections from './sections/index.js';
</script>

<!-- Navigation sidebar -->
<aside class="fixed left-0 top-0 h-screen w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto p-6 hidden md:block">
  <nav class="space-y-2">
    <h3 class="font-semibold text-gray-800 mb-3">Documentation</h3>
    {#each [
      { id: 'overview', label: 'Overview' },
      { id: 'user-research', label: 'User Research' },
      { id: 'decision-rationale', label: 'Decision Rationale' },
      { id: 'developer-experience', label: 'Developer Experience' },
      { id: 'ai-prompting', label: 'AI Prompting Strategies' },
      { id: 'iteration-log', label: 'Iteration Log' },
      { id: 'accessibility', label: 'Accessibility' },
      { id: 'technical-challenges', label: 'Technical Challenges' },
      { id: 'architecture', label: 'Architecture' },
      { id: 'data-structure', label: 'Data Structure' },
      { id: 'design', label: 'Design' },
      { id: 'ux-goals', label: 'UX Goals' },
      { id: 'ai-collaboration', label: 'AI Collaboration' },
      { id: 'dev-notes', label: 'Developer Notes' },
      { id: 'lessons-learned', label: 'Lessons Learned' },
      { id: 'project-expansion', label: 'Project Expansion' }
    ] as item}
      <a 
        href={`#${item.id}`} 
        class="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors"
        on:click|preventDefault={() => {
          const el = document.getElementById(item.id);
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {item.label}
      </a>
    {/each}
  </nav>
</aside>

<!-- Main content -->
<main class="md:ml-64 p-6">
  <div class="max-w-4xl mx-auto space-y-12">
    <!-- Add IDs for navigation -->
    <div id="overview">
      <Sections.Overview />
    </div>
    
    <div id="user-research">
      <Sections.UserResearch />
    </div>
    
    <div id="decision-rationale">
      <Sections.DecisionRationale />
    </div>
    
    <!-- NEW: Developer Experience Section -->
    <div id="developer-experience">
      <Sections.DeveloperExperience />
    </div>
    
    <!-- NEW: AI Prompting Strategies -->
    <div id="ai-prompting">
      <Sections.AIPromptingStrategies />
    </div>
    
    <div id="iteration-log">
      <Sections.IterationLog />
    </div>
    
    <div id="accessibility">
      <Sections.Accessibility />
    </div>
    
    <div id="technical-challenges">
      <Sections.TechnicalChallenges />
    </div>
    
    <div id="architecture">
      <Sections.Architecture />
    </div>
    
    <div id="data-structure">
      <Sections.DataStructure />
    </div>
    
    <div id="design">
      <Sections.Design />
    </div>
    
    <div id="ux-goals">
      <Sections.UXGoals />
    </div>
    
    <div id="ai-collaboration">
      <Sections.AICollaboration />
    </div>
    
    <div id="dev-notes">
      <Sections.DevNotes />
    </div>
    
    <div id="lessons-learned">
      <Sections.LessonsLearned />
    </div>
    
    <div id="project-expansion">
      <Sections.ProjectExpansion />
    </div>
  </div>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
  }
  
  /* Highlight current section in sidebar */
  :global(.active-section) {
    background-color: #3b82f6;
    color: white;
  }
</style>