// src/lib/data/coworkingSpaces.ts
export interface Workspace {
  name: string;
  city: string;
  country: string;
  type: 'coworking' | 'cafe' | 'library' | 'hotel' | 'public_space';
  dayPassPrice?: number;
  monthlyPrice?: number;
  hourlyRate?: number;
  rating: number;
  amenities: string[];
  bestFor: string[];
  wifiSpeed: number; // Mbps
  powerOutlets: number; // 1-5 scale
  noiseLevel: number; // 1-5 scale (1=quiet, 5=loud)
  hours?: string;
  address?: string;
  website?: string;
}

export const popularWorkspaces: Record<string, Workspace[]> = {
  'Argentina': [
    // Coworking Spaces
    {
      name: 'Urban Station',
      city: 'Buenos Aires',
      country: 'Argentina',
      type: 'coworking',
      dayPassPrice: 15,
      monthlyPrice: 180,
      rating: 4.5,
      wifiSpeed: 85,
      powerOutlets: 5,
      noiseLevel: 3,
      amenities: ['High-speed WiFi', 'Meeting Rooms', 'Coffee', 'Printing', 'Event Space'],
      bestFor: ['Professional meetings', 'Team work', 'Networking'],
      hours: '24/7',
      address: 'Multiple locations in Palermo and Microcentro'
    },
    {
      name: 'La Maquinita Co.',
      city: 'Buenos Aires', 
      country: 'Argentina',
      type: 'coworking',
      dayPassPrice: 12,
      monthlyPrice: 150,
      rating: 4.3,
      wifiSpeed: 75,
      powerOutlets: 4,
      noiseLevel: 2,
      amenities: ['24/7 Access', 'Event Space', 'Kitchen', 'Phone Booths', 'Lockers'],
      bestFor: ['Focused work', 'Long hours', 'Privacy'],
      hours: '24/7'
    },
    
    // Coffee Shops
    {
      name: 'Starbucks - Alto Palermo',
      city: 'Buenos Aires',
      country: 'Argentina',
      type: 'cafe',
      hourlyRate: 3, // Estimated spend per hour
      rating: 4.0,
      wifiSpeed: 45,
      powerOutlets: 3,
      noiseLevel: 4,
      amenities: ['Free WiFi', 'Power Outlets', 'Coffee', 'Food'],
      bestFor: ['Casual work', 'Short sessions', 'Coffee breaks'],
      hours: '7:00 AM - 11:00 PM'
    },
    {
      name: 'Café Tortoni',
      city: 'Buenos Aires',
      country: 'Argentina',
      type: 'cafe',
      hourlyRate: 5,
      rating: 4.2,
      wifiSpeed: 35,
      powerOutlets: 2,
      noiseLevel: 4,
      amenities: ['Historic ambiance', 'WiFi', 'Traditional food'],
      bestFor: ['Inspiration', 'Short work sessions', 'Cultural experience'],
      hours: '8:00 AM - 1:00 AM'
    },
    
    // Libraries
    {
      name: 'Biblioteca Nacional',
      city: 'Buenos Aires',
      country: 'Argentina',
      type: 'library',
      rating: 4.1,
      wifiSpeed: 25,
      powerOutlets: 2,
      noiseLevel: 1,
      amenities: ['Free WiFi', 'Quiet study areas', 'Research materials'],
      bestFor: ['Focused study', 'Research', 'Quiet work'],
      hours: '8:00 AM - 9:00 PM',
      address: 'Agüero 2502, C1425 Buenos Aires'
    },
    
    // Hotel Workspaces
    {
      name: 'Alvear Icon Hotel - Lobby Lounge',
      city: 'Buenos Aires',
      country: 'Argentina',
      type: 'hotel',
      hourlyRate: 8, // Minimum spend
      rating: 4.6,
      wifiSpeed: 60,
      powerOutlets: 4,
      noiseLevel: 2,
      amenities: ['Luxury ambiance', 'Comfortable seating', 'Hotel WiFi', 'Food service'],
      bestFor: ['Client meetings', 'Luxury work environment', 'Comfort'],
      hours: '6:00 AM - 12:00 AM'
    }
  ],
  
  'Thailand': [
    // Add similar structure for Thailand
    {
      name: 'Hubba Thailand',
      city: 'Bangkok',
      country: 'Thailand',
      type: 'coworking',
      dayPassPrice: 20,
      monthlyPrice: 250,
      rating: 4.4,
      wifiSpeed: 90,
      powerOutlets: 5,
      noiseLevel: 3,
      amenities: ['High-speed WiFi', 'Meeting Rooms', 'Coffee', 'Events'],
      bestFor: ['Networking', 'Startup culture', 'Community'],
      hours: '24/7'
    }
    // Add more Thailand workspaces...
  ]
  // Add more countries...
};