// src/routes/visa/utils/documentHelpers.ts
import type { VisaInfo } from '$lib/types/visa';
import type { Country } from '$lib/types/minimalData'; // Changed from MinimalCountry

export interface Document {
  name: string;
  priority: 'high' | 'medium' | 'low';
  description?: string;
  category: 'required' | 'recommended' | 'optional';
}

export function getDocuments(visaInfo: VisaInfo, countryData?: Country): Document[] { 
  const baseDocs: Document[] = [
    { 
      name: 'Valid Passport (6+ months validity)', 
      priority: 'high', 
      category: 'required',
      description: 'Most countries require passport valid for 6 months beyond travel dates'
    },
    { 
      name: 'Passport scan + expiration check', 
      priority: 'medium', 
      category: 'required',
      description: 'Digital copy for applications'
    },
    { 
      name: 'Proof of income template', 
      priority: 'medium', 
      category: 'required',
      description: 'Bank statements, employment letter, or client contracts'
    }
  ];

  // Add documents based on visa type
  if (visaInfo.nomadVisa) {
    baseDocs.push(
      { 
        name: 'Digital nomad visa application', 
        priority: 'high', 
        category: 'required',
        description: 'Official application form for digital nomad visa'
      },
      { 
        name: 'Resume + portfolio links', 
        priority: 'medium', 
        category: 'recommended',
        description: 'For digital nomad visa applications'
      }
    );
  }

  // Add documents based on visa difficulty
  const visaDifficulty = countryData?.visa?.difficulty;
  if (visaDifficulty === 'hard') {
    baseDocs.push(
      { 
        name: 'Background check', 
        priority: 'medium', 
        category: 'required',
        description: 'Required for long-term stays in some countries'
      },
      { 
        name: 'Travel itinerary', 
        priority: 'low', 
        category: 'recommended',
        description: 'Detailed travel plans for visa application'
      }
    );
  }

  if (visaDifficulty === 'medium' || visaDifficulty === 'hard') {
    baseDocs.push(
      { 
        name: 'Return flight ticket', 
        priority: 'medium', 
        category: 'required',
        description: 'Proof of onward travel'
      },
      { 
        name: 'Hotel reservations', 
        priority: 'low', 
        category: 'recommended',
        description: 'Accommodation proof for visa application'
      }
    );
  }

  // Always include these
  baseDocs.push(
    { 
      name: 'Health insurance policy', 
      priority: 'medium', 
      category: 'required',
      description: 'International coverage required for many visas'
    },
    { 
      name: 'Bank statements (3 months)', 
      priority: 'medium', 
      category: 'required',
      description: 'Proof of sufficient funds'
    }
  );

  return baseDocs;
}

export function getDocumentsByCategory(documents: Document[], category: 'required' | 'recommended' | 'optional'): Document[] {
  return documents.filter(doc => doc.category === category);
}

export function getPriorityColor(priority: 'high' | 'medium' | 'low'): string {
  return {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-amber-100 text-amber-800 border-amber-200',
    low: 'bg-stone-100 text-stone-800 border-stone-200'
  }[priority];
}