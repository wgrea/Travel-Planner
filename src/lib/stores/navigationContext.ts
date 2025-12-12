// src/lib/stores/navigationContext.ts
import { writable, derived, get } from 'svelte/store';
import { page } from '$app/stores';
import { selectedCurrency } from './currency';

export interface NavigationStep {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: string;
  priority: 'high' | 'medium' | 'low';
  prerequisites?: string[]; // IDs of required steps
  isCompleted: boolean;
  category: 'planning' | 'costs' | 'info' | 'logistics';
  currencyRelevant: boolean; // Whether currency affects this step
}

export interface UserProgress {
  completedSteps: string[];
  startedSteps: string[];
  lastVisited: string;
  userCurrency: string;
}

// Create navigation context store
function createNavigationContext() {
  const { subscribe, set, update } = writable<UserProgress>({
    completedSteps: [],
    startedSteps: [],
    lastVisited: '/',
    userCurrency: 'USD'
  });

  return {
    subscribe,
    
    // Mark step as completed
    completeStep: (stepId: string) => {
      update(progress => {
        if (!progress.completedSteps.includes(stepId)) {
          return {
            ...progress,
            completedSteps: [...progress.completedSteps, stepId],
            startedSteps: progress.startedSteps.filter(id => id !== stepId)
          };
        }
        return progress;
      });
    },
    
    // Start a step
    startStep: (stepId: string) => {
      update(progress => {
        if (!progress.startedSteps.includes(stepId) && !progress.completedSteps.includes(stepId)) {
          return {
            ...progress,
            startedSteps: [...progress.startedSteps, stepId]
          };
        }
        return progress;
      });
    },
    
    // Update last visited page
    updateLastVisited: (path: string) => {
      update(progress => ({
        ...progress,
        lastVisited: path
      }));
    },
    
    // Sync currency with currency store
    syncCurrency: () => {
      const currency = get(selectedCurrency);
      update(progress => ({
        ...progress,
        userCurrency: currency
      }));
    }
  };
}

export const navigationContext = createNavigationContext();

// All available navigation steps
export const allSteps: NavigationStep[] = [
  // Destination Discovery
  {
    id: 'find-destination',
    title: 'Find Your Perfect Destination',
    description: 'Match with destinations based on your preferences',
    path: '/resonance',
    icon: '❤️',
    priority: 'high',
    prerequisites: [],
    isCompleted: false,
    category: 'planning',
    currencyRelevant: false
  },
  
  // Visa Check
  {
    id: 'check-visa',
    title: 'Check Visa Requirements',
    description: 'Verify entry requirements and documents needed',
    path: '/visa',
    icon: '🛂',
    priority: 'high',
    prerequisites: ['find-destination'],
    isCompleted: false,
    category: 'info',
    currencyRelevant: true
  },
  
  // Flight Planning
  {
    id: 'plan-flights',
    title: 'Plan Flights',
    description: 'Find best flight deals and timing',
    path: '/flight-costs',
    icon: '✈️',
    priority: 'high',
    prerequisites: ['find-destination'],
    isCompleted: false,
    category: 'costs',
    currencyRelevant: true
  },
  
  // Accommodation & Living Costs
  {
    id: 'calculate-living',
    title: 'Calculate Living Costs',
    description: 'Estimate daily expenses and accommodation',
    path: '/living-costs',
    icon: '🏠',
    priority: 'medium',
    prerequisites: ['find-destination'],
    isCompleted: false,
    category: 'costs',
    currencyRelevant: true
  },
  
  // Transportation
  {
    id: 'plan-transportation',
    title: 'Plan Local Transportation',
    description: 'Calculate local transport costs and options',
    path: '/transportation-costs',
    icon: '🚗',
    priority: 'medium',
    prerequisites: ['find-destination'],
    isCompleted: false,
    category: 'logistics',
    currencyRelevant: true
  },
  
  // Digital Nomad Setup
  {
    id: 'digital-nomad',
    title: 'Digital Nomad Essentials',
    description: 'Workspaces, internet, and remote work setup',
    path: '/digital-nomad',
    icon: '💻',
    priority: 'low',
    prerequisites: ['find-destination'],
    isCompleted: false,
    category: 'logistics',
    currencyRelevant: true
  },
  
  // Packing
  {
    id: 'packing',
    title: 'Travel Essentials',
    description: 'Packing lists and travel documents',
    path: '/travel-essentials',
    icon: '🎒',
    priority: 'low',
    prerequisites: [],
    isCompleted: false,
    category: 'logistics',
    currencyRelevant: false
  },
  
  // Complete Planning
  {
    id: 'complete-plan',
    title: 'Complete Trip Planning',
    description: 'Full trip itinerary and booking',
    path: '/planning',
    icon: '📋',
    priority: 'high',
    prerequisites: ['check-visa', 'plan-flights', 'calculate-living'],
    isCompleted: false,
    category: 'planning',
    currencyRelevant: true
  }
];

// Derived store for recommended next steps
export const recommendedSteps = derived(
  [navigationContext, page],
  ([$context, $page]) => {
    const currentPath = $page.url.pathname;
    
    // Get current step
    const currentStep = allSteps.find(step => step.path === currentPath);
    
    // Filter available steps (not completed, prerequisites met)
    const availableSteps = allSteps.filter(step => {
      // Skip if completed
      if ($context.completedSteps.includes(step.id)) return false;
      
      // Check prerequisites
      if (step.prerequisites?.length) {
        return step.prerequisites.every(prereq => 
          $context.completedSteps.includes(prereq)
        );
      }
      
      return true;
    });
    
    // Sort by priority and relevance to current page
    const sortedSteps = availableSteps.sort((a, b) => {
      // Prioritize steps related to current page's category
      const aRelevant = currentStep?.category === a.category ? 1 : 0;
      const bRelevant = currentStep?.category === b.category ? 1 : 0;
      
      if (aRelevant !== bRelevant) return bRelevant - aRelevant;
      
      // Then by priority
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    // Return top 3 recommendations
    return sortedSteps.slice(0, 3);
  }
);

// Derived store for user's progress percentage
export const progressPercentage = derived(
  navigationContext,
  $context => {
    const completed = $context.completedSteps.length;
    const total = allSteps.length;
    return Math.round((completed / total) * 100);
  }
);