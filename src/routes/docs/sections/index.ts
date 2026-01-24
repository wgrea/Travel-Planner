// Export all documentation sections from a single barrel file
// This keeps imports clean and maintainable

// Core sections
export { default as Overview } from './Overview.svelte';
export { default as UserResearch } from './UserResearch.svelte';
export { default as DecisionRationale } from './DecisionRationale.svelte';
export { default as IterationLog } from './IterationLog.svelte';
export { default as Accessibility } from './Accessibility.svelte';
export { default as TechnicalChallenges } from './TechnicalChallenges.svelte';
export { default as Setup } from './Setup.svelte';
export { default as Architecture } from './Architecture.svelte';
export { default as DataStructure } from './DataStructure.svelte';
export { default as Design } from './Design.svelte';
export { default as UXGoals } from './UXGoals.svelte';
export { default as UserFeedback } from './UserFeedback.svelte';
export { default as AICollaboration } from './AICollaboration.svelte';
export { default as DevNotes } from './DevNotes.svelte';
export { default as LessonsLearned } from './LessonsLearned.svelte';
export { default as ProjectExpansion } from './ProjectExpansion.svelte';

// New DX-focused sections (create these files)
export { default as DeveloperExperience } from './DeveloperExperience.svelte';
export { default as AIPromptingStrategies } from './AIPromptingStrategies.svelte';

// Optional sections
export { default as CurrencyIntegration } from './CurrencyIntegration.svelte';