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