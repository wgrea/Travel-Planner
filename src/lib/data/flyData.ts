// src/lib/data/flyData.ts
// Doesn't care where you're flying FROM

export interface FlightPattern {
  country: string;
  cities: string[];
  cheapestMonths: string[];
  expensiveMonths: string[];
  sweetSpot: string[];
  averagePrice: number;
  alternativeRoutes?: string;
  planningTips?: string[];
  notes?: string;
}

export interface RegionData {
  region: string;
  description: string;
  countries: FlightPattern[];
}

// Import SOME countries that have flight patterns
import { thailandFlightPattern } from './countries/southeast-asia/thailand';

export const flyDataByRegion: RegionData[] = [
  {
    region: "Southeast Asia", 
    description: "Budget-friendly tropical destinations with rich cultures",
    countries: [
      thailandFlightPattern,  // ← Imported from country file
      {
        country: "Indonesia",
        cities: ["Bali", "Jakarta", "Yogyakarta"],
        cheapestMonths: ["January", "February", "October"],
        expensiveMonths: ["July", "August", "December"],
        sweetSpot: ["April", "May", "September"],
        averagePrice: 900,
        planningTips: ["Domestic flights are very cheap"],
        notes: "Bali is most expensive, other islands more affordable"
      },
      {
        country: "Laos",
        cities: ["Vientiane", "Luang Prabang", "Vang Vieng"],
        cheapestMonths: ["April", "May", "June"],
        expensiveMonths: ["December", "January"],
        sweetSpot: ["October", "November", "December", "January", "February", "March"],
        averagePrice: 800,
        planningTips: ["Often combined with Vietnam and Cambodia trips"],
        notes: "Landlocked country with rich cultural heritage"
      }
    ]
  },
  {
    region: "East Asia",
    description: "Modern cities, ancient traditions, and diverse landscapes",
    countries: [
      {
        country: "Japan",
        cities: ["Tokyo", "Osaka", "Kyoto"],
        cheapestMonths: ["January", "February"],
        expensiveMonths: ["April", "November"],
        sweetSpot: ["May", "October"],
        averagePrice: 1200,
        alternativeRoutes: "Fly to Seoul first, then budget airline to Osaka",
        planningTips: ["Book 3-4 months in advance", "Use Google Flights alerts"],
        notes: "Cherry blossom season (April) is most expensive"
      },
      {
        country: "South Korea",
        cities: ["Seoul", "Busan", "Jeju Island"],
        cheapestMonths: ["January", "February", "November"],
        expensiveMonths: ["April", "August", "October"],
        sweetSpot: ["May", "June", "September"],
        averagePrice: 1100,
        planningTips: ["Spring and fall have the best weather"],
        notes: "Jeju Island is popular for domestic tourism"
      },
      {
        country: "Taiwan",
        cities: ["Taipei", "Kaohsiung", "Taichung"],
        cheapestMonths: ["November", "December", "January", "February"],
        expensiveMonths: ["June", "July", "August"],
        sweetSpot: ["March", "April", "May", "September", "October"],
        averagePrice: 1050,
        planningTips: ["Excellent public transportation system"],
        notes: "Vibrant metropolitan culture with great food scene"
      }
    ]
  },
  {
    region: "Europe",
    description: "Historic cities, diverse cultures, and efficient transportation",
    countries: [
      {
        country: "Italy",
        cities: ["Rome", "Florence", "Venice"],
        cheapestMonths: ["November", "January"],
        expensiveMonths: ["June", "July", "August"],
        sweetSpot: ["April", "May", "September"],
        averagePrice: 900,
        alternativeRoutes: "Fly to Milan instead of Rome for better deals",
        planningTips: ["Train travel is efficient between cities"],
        notes: "Coastal areas crowded in summer, cities hot in August"
      },
      {
        country: "Spain",
        cities: ["Madrid", "Barcelona", "Seville"],
        cheapestMonths: ["January", "February", "November"],
        expensiveMonths: ["July", "August"],
        sweetSpot: ["April", "May", "September", "October"],
        averagePrice: 875,
        planningTips: ["Consider smaller airlines for inter-Europe flights"],
        notes: "Southern Spain very hot in summer"
      },
      {
        country: "Portugal",
        cities: ["Lisbon", "Porto", "Faro"],
        cheapestMonths: ["January", "February", "November"],
        expensiveMonths: ["June", "July", "August"],
        sweetSpot: ["March", "April", "May", "September", "October"],
        averagePrice: 825,
        planningTips: ["Easy train connections between Lisbon and Porto"],
        notes: "Mild climate in spring and fall, great for coastal exploration"
      },
      {
        country: "Greece",
        cities: ["Athens", "Santorini", "Mykonos"],
        cheapestMonths: ["October", "November", "December", "January", "February", "March", "April"],
        expensiveMonths: ["June", "July", "August"],
        sweetSpot: ["May", "September"],
        averagePrice: 925,
        planningTips: ["Island hopping is popular but book ferries in advance"],
        notes: "Noted for islands and Mediterranean climate"
      },
      {
        country: "Turkey",
        cities: ["Istanbul", "Cappadocia", "Antalya"],
        cheapestMonths: ["January", "February"],
        expensiveMonths: ["June", "July", "August"],
        sweetSpot: ["April", "May", "June", "September", "October", "November"],
        averagePrice: 950,
        planningTips: ["Visa may be required depending on nationality"],
        notes: "Crossroads of Europe and Asia with rich history"
      }
    ]
  },
  {
    region: "South America",
    description: "Dramatic landscapes, vibrant cultures, and emerging destinations",
    countries: [
      {
        country: "Colombia",
        cities: ["Bogotá", "Medellín", "Cartagena"],
        cheapestMonths: ["April", "May", "September", "October"],
        expensiveMonths: ["December", "January", "June", "July"],
        sweetSpot: ["February", "March", "August", "November"],
        averagePrice: 650,
        planningTips: ["Domestic flights are affordable"],
        notes: "Weather varies by region and altitude"
      },
      {
        country: "Brazil",
        cities: ["Rio de Janeiro", "São Paulo", "Salvador"],
        cheapestMonths: ["May", "June"],
        expensiveMonths: ["December", "January", "February"],
        sweetSpot: ["March", "April", "July", "August", "September"],
        averagePrice: 1100,
        planningTips: ["Domestic flights can be expensive, book in advance"],
        notes: "Rio and Sao Paulo as main hubs, vast country with diverse climates"
      },
      {
        country: "Argentina",
        cities: ["Buenos Aires", "Mendoza", "Bariloche"],
        cheapestMonths: ["May", "June"],
        expensiveMonths: ["December", "January"],
        sweetSpot: ["March", "April", "September", "October"],
        averagePrice: 1150,
        planningTips: ["Long domestic flights, consider overnight buses"],
        notes: "Diverse climates from Patagonia to Buenos Aires, opposite seasons from Northern Hemisphere"
      },
      {
        country: "Chile",
        cities: ["Santiago", "Valparaíso", "Puerto Natales"],
        cheapestMonths: ["May", "June", "July"],
        expensiveMonths: ["December", "January"],
        sweetSpot: ["March", "April", "September", "October"],
        averagePrice: 1100,
        planningTips: ["Country is very long north to south, plan accordingly"],
        notes: "Famous for Patagonia and deserts, diverse geography"
      },
      {
        country: "Bolivia",
        cities: ["La Paz", "Sucre", "Uyuni"],
        cheapestMonths: ["April", "May", "June", "July", "August", "September", "October"],
        expensiveMonths: ["December", "January"],
        sweetSpot: ["May", "June", "July", "August", "September"],
        averagePrice: 850,
        planningTips: ["Acclimate to high altitude in La Paz"],
        notes: "High altitude travel considerations apply, especially in La Paz"
      },
      {
        country: "Uruguay",
        cities: ["Montevideo", "Punta del Este", "Colonia del Sacramento"],
        cheapestMonths: ["January", "February"],
        expensiveMonths: ["December"],
        sweetSpot: ["March", "April", "May"],
        averagePrice: 950,
        planningTips: ["Easy ferry connections from Buenos Aires"],
        notes: "Less touristy than Argentina or Brazil, relaxed atmosphere"
      },
      {
        country: "Panama",
        cities: ["Panama City", "Bocas del Toro", "David"],
        cheapestMonths: ["May", "June", "September", "October"],
        expensiveMonths: ["December", "January"],
        sweetSpot: ["February", "March", "April"],
        averagePrice: 900,
        planningTips: ["US dollars accepted, no currency exchange needed"],
        notes: "Noted for Panama Canal and tropical climate"
      }
    ]
  },
  {
    region: "South Asia",
    description: "Ancient cultures, diverse landscapes, and spiritual destinations",
    countries: [
      {
        country: "Sri Lanka",
        cities: ["Colombo", "Kandy", "Galle"],
        cheapestMonths: ["May", "June", "September", "October"],
        expensiveMonths: ["December", "January"],
        sweetSpot: ["January", "February", "March"],
        averagePrice: 1000,
        planningTips: ["Train travel is scenic and affordable"],
        notes: "Known for beaches and heritage sites, compact island nation"
      },
      {
        country: "Nepal",
        cities: ["Kathmandu", "Pokhara", "Chitwan"],
        cheapestMonths: ["January", "February", "June", "July", "August"],
        expensiveMonths: ["October"],
        sweetSpot: ["September", "October", "November"],
        averagePrice: 950,
        planningTips: ["Trekking permits required for popular routes"],
        notes: "Popular for trekking, Himalayan views, spring and fall best for hiking"
      }
    ]
  },
  {
    region: "Middle East",
    description: "Ancient history, modern cities, and diverse landscapes",
    countries: [
      {
        country: "Egypt",
        cities: ["Cairo", "Luxor", "Hurghada"],
        cheapestMonths: ["May", "June", "July", "August"],
        expensiveMonths: ["December", "January"],
        sweetSpot: ["October", "November", "December", "January", "February", "March", "April"],
        averagePrice: 750,
        planningTips: ["Domestic flights and trains connect major sites"],
        notes: "Noted for diving in Red Sea and ancient Egyptian sites"
      }
    ]
  },
  {
    region: "Caucasus",
    description: "Crossroads of Europe and Asia with stunning landscapes",
    countries: [
      {
        country: "Georgia",
        cities: ["Tbilisi", "Batumi", "Kutaisi"],
        cheapestMonths: ["January", "February", "November"],
        expensiveMonths: ["July", "August"],
        sweetSpot: ["March", "April", "May", "September", "October"],
        averagePrice: 1200,
        planningTips: ["Wizz Air has good deals from Europe"],
        notes: "Caucasus region, emerging tourist destination, very affordable once you arrive"
      }
    ]
  },
  {
    region: "North America",
    description: "Diverse landscapes and proximity advantages",
    countries: [
      {
        country: "Mexico",
        cities: ["Cozumel", "Cancún", "Mexico City"],
        cheapestMonths: ["May", "June", "September", "October"],
        expensiveMonths: ["December", "January"],
        sweetSpot: ["November", "December", "January", "February", "March", "April"],
        averagePrice: 450,
        planningTips: ["Many budget airlines serve Mexican destinations from US"],
        notes: "Inexpensive from US due to proximity, great for beach vacations"
      }
    ]
  }
];
// Rest of the file
// Helper function to get all countries flat (for backward compatibility)
export const getAllCountries = (): FlightPattern[] => {
  return flyDataByRegion.flatMap(region => region.countries);
};

// Helper to get countries by region
export const getCountriesByRegion = (region: string): FlightPattern[] => {
  const regionData = flyDataByRegion.find(r => r.region === region);
  return regionData ? regionData.countries : [];
};

// Get all unique regions
export const getAllRegions = (): string[] => {
  return flyDataByRegion.map(region => region.region);
};

// Search countries by name
export const findCountry = (countryName: string): FlightPattern | undefined => {
  return getAllCountries().find(country => 
    country.country.toLowerCase() === countryName.toLowerCase()
  );
};

// Get countries by average price range
export const getCountriesByPriceRange = (min: number, max: number): FlightPattern[] => {
  return getAllCountries().filter(country => 
    country.averagePrice >= min && country.averagePrice <= max
  );
};