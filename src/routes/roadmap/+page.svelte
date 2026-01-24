<script lang="ts">
  interface RoadmapItem {
    name: string;

    note?: string;
  }

  interface RoadmapPhase {
    name: string;
    description: string;
    items: RoadmapItem[];
  }

  const phases: RoadmapPhase[] = [
    {
      name: "🛠️ DX Foundation",
      description: "Improving code structure and maintainability before adding features",
      items: [
        { 
          name: "Standardize data structures across all pages", 
        },
        { 
          name: "Improve file consistency (Living Costs first)", 
        },
        { 
          name: "Create reusable filter components", 
        },
        { 
          name: "Setup shared country/city data utilities", 
        },
        { 
          name: "Clean up Digital Nomad page data structure", 
        }
      ]
    },
    {
      name: "🚀 Core Feature Enhancement",
      description: "Key user-facing improvements with thorough testing",
      items: [
        { 
          name: "Saved Plans & Itineraries system", 
          note: "Testing with two pages first"
        },
        { 
          name: "Smart Digital Nomad filters (internet-first)", 
          note: "Party vs quiet, hostel vs coliving"
        },
        { 
          name: "Seasonal price insights", 
        },
        { 
          name: "Enhanced visa browsing by type", 
        },
        { 
          name: "Event type filtering (debug to feature)", 
        }
      ]
    },
    {
      name: "✨ Advanced Features",
      description: "Major feature additions and strategy pages",
      items: [
        { 
          name: "Hostel & accommodation system", 
        },
        { 
          name: "Traveler strategy pages", 
        },
        { 
          name: "Event discovery system", 
        },
        { 
          name: "Travel essentials revamp", 
        }
      ]
    }
  ];
</script>

<div class="max-w-6xl mx-auto px-4 py-8">
  <!-- Header -->
  <div class="text-center mb-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-3">Project Roadmap</h1>
    <p class="text-gray-600 max-w-2xl mx-auto">
      A high-level overview of planned improvements and features.
      Focused on improving Developer Experience (DX) first, then rolling out user-facing features.
    </p>
  </div>

  <!-- Roadmap Phases -->
  <div class="space-y-10">
    {#each phases as phase, phaseIdx}
      <div class="border border-gray-200 rounded-xl overflow-hidden">
        <!-- Phase Header -->
        <div class="bg-gray-50 p-6 border-b border-gray-200">
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 text-lg font-medium">
              {phaseIdx + 1}
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-900 mb-1">{phase.name}</h2>
              <p class="text-gray-600">{phase.description}</p>
            </div>
          </div>
        </div>

        <!-- Phase Items -->
        <div class="divide-y divide-gray-100">
          {#each phase.items as item, idx}
            <div class="p-6 hover:bg-gray-50 transition-colors">
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                      {idx + 1}
                    </div>
                    <h3 class="font-medium text-gray-900">{item.name}</h3>
                  </div>
                  
                  <div class="flex flex-wrap items-center gap-4 ml-9">
                    
                    <!-- Note if exists -->
                    {#if item.note}
                      <div class="flex items-center gap-2 text-sm text-gray-500">
                        <span class="text-xs">📝</span>
                        <span>{item.note}</span>
                      </div>
                    {/if}
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <!-- Last Updated -->
  <div class="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
    <p>Roadmap last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
    <p class="mt-1">Follow progress in the app footer for current focus →</p>
  </div>
</div>