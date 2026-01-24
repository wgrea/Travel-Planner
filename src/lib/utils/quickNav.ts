// src/lib/utils/quickNav.ts
export const QUICK_NAV_LINKS = {
  // Edit incomplete countries
  incomplete: '/admin#incomplete',
  
  // Batch edit by region
  regions: {
    'southeast-asia': '/admin?region=southeast-asia',
    'europe': '/admin?region=europe',
    'americas': '/admin?region=americas',
  },
  
  // Most recently edited
  recent: '/admin?filter=recent',
  
  // Needs review (staging countries)
  staging: '/admin?status=staging'
};