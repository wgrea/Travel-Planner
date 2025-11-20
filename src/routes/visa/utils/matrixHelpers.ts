// src/routes/visa/utils/matrixHelpers.ts
import type { VisaInfo } from '$lib/types/visa';
import type { Country } from '$lib/types/minimalData'; // Changed from MinimalCountry

export interface MatrixItem {
  label: string;
  value: string;
  category: 'visa' | 'cost' | 'lifestyle' | 'logistics';
  importance: 'high' | 'medium' | 'low';
}

export function getVisaMatrixItems(visaInfo: VisaInfo, countryData?: Country): MatrixItem[] { 
  const items: MatrixItem[] = [
    {
      label: 'Visa Type',
      value: visaInfo.category,
      category: 'visa',
      importance: 'high'
    },
    {
      label: 'Income Required',
      value: visaInfo.incomeReq,
      category: 'visa', 
      importance: 'high'
    },
    {
      label: 'Digital Nomad Visa',
      value: visaInfo.nomadVisa ? 'Available' : 'Not available',
      category: 'visa',
      importance: 'high'
    },
    {
      label: 'Visa-Free Stay',
      value: visaInfo.freeLength,
      category: 'visa',
      importance: 'medium'
    },
    {
      label: 'Work Policy',
      value: visaInfo.workPolicy,
      category: 'visa',
      importance: 'medium'
    }
  ];

  // Add country-specific items if available
  if (countryData) {
    items.push(
      {
        label: 'Cost of Living',
        value: countryData.costs?.tier ? `${countryData.costs.tier} cost` : 'Unknown',
        category: 'cost',
        importance: 'high'
      },
      {
        label: 'Visa Difficulty', 
        value: countryData.visa?.difficulty ? `${countryData.visa.difficulty}` : 'Unknown',
        category: 'visa',
        importance: 'medium'
      },
      {
        label: 'Best Time to Visit',
        value: getBestTimeToVisit(countryData),
        category: 'lifestyle',
        importance: 'medium'
      },
      {
        label: 'Popular Activities',
        value: getPopularActivities(countryData),
        category: 'lifestyle',
        importance: 'low'
      }
    );
  }

  // Add general logistics items
  items.push(
    {
      label: 'Documents Required',
      value: 'Passport + Proof of income',
      category: 'logistics',
      importance: 'high'
    },
    {
      label: 'Tax Implications',
      value: 'Foreign income often exempt',
      category: 'logistics',
      importance: 'medium'
    },
    {
      label: 'Housing Availability',
      value: 'Easy to find',
      category: 'logistics', 
      importance: 'medium'
    }
  );

  return items;
}

function getBestTimeToVisit(countryData: Country): string {
  if (!countryData.seasonality?.bestMonths) return 'Year-round';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const bestMonths = countryData.seasonality.bestMonths.map((month: number) => months[month - 1]);
  return bestMonths.join(', ');
}

function getPopularActivities(countryData: Country): string {
  if (!countryData.filters?.activities) return 'Various';
  return countryData.filters.activities.slice(0, 2).join(', ') + 
    (countryData.filters.activities.length > 2 ? '...' : '');
}

export function getMatrixItemsByCategory(items: MatrixItem[], category: MatrixItem['category']): MatrixItem[] {
  return items.filter(item => item.category === category);
}