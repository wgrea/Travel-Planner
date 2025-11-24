// src/lib/types/itinerary.ts
export interface TripDay {
  date: string;
  activities: Activity[];
  accommodations?: Accommodation;
  transportation?: Transportation;
  estimatedCost: number;
  notes?: string;
}

export interface Activity {
  id: string;
  name: string;
  type: 'sightseeing' | 'food' | 'relaxation' | 'adventure' | 'shopping' | 'cultural';
  location: string;
  duration: number; // in hours
  cost: number;
  description?: string;
  reservationNeeded?: boolean;
  bestTime?: string; // "morning", "afternoon", "evening"
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'hostel' | 'hotel' | 'airbnb' | 'guesthouse';
  costPerNight: number;
  location: string;
  checkIn: string;
  checkOut: string;
}

export interface Transportation {
  type: 'flight' | 'train' | 'bus' | 'car' | 'walking';
  from: string;
  to: string;
  duration: number; // in minutes
  cost: number;
  bookingReference?: string;
}

export interface TripItinerary {
  id: string;
  name: string;
  destination: string; // country or city ID
  startDate: string;
  endDate: string;
  totalDays: number;
  budget: number;
  travelStyle: 'budget' | 'comfort' | 'luxury';
  days: TripDay[];
  totalCost: number;
  shared: boolean;
  createdAt: string;
}