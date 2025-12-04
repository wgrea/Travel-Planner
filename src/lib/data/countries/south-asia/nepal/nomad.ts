// src/lib/data/countries/south-asia/nepal/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const nepalWorkspaces: Workspace[] = [
  {
    name: 'Karma Coffee & Cowork',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'coworking',
    dayPassPrice: 800,
    monthlyPrice: 12000,
    rating: 4.5,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Coffee Shop', 'Quiet Work Area', 'Meeting Room', 'Garden Terrace', 'Local Community'],
    bestFor: ['Digital Nomads', 'Trekking Planners', 'Quiet Work'],
    hours: '7:00-20:00',
    address: 'Boudha, Kathmandu'
  },
  {
    name: 'Himalayan Java',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'cafe',
    hourlyRate: 150,
    rating: 4.3,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Nepali Coffee', 'Western Food', 'WiFi', 'Power Outlets', 'Multiple Locations'],
    bestFor: ['Casual Work', 'Meetings', 'Reliable Chain'],
    hours: '7:00-21:00',
    address: 'Thamel, Kathmandu'
  },
  {
    name: 'Pokhara Digital Nomads Hub',
    city: 'Pokhara',
    country: 'Nepal',
    type: 'coworking',
    dayPassPrice: 600,
    monthlyPrice: 9000,
    rating: 4.4,
    wifiSpeed: 40,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Lake Views', 'Mountain Views', 'Community Events', 'Coffee/Tea', 'Trekking Advice'],
    bestFor: ['Digital Nomads', 'Trekkers', 'Nature Lovers'],
    hours: '8:00-19:00',
    address: 'Lakeside, Pokhara'
  },
  {
    name: 'Red Mud Coffee',
    city: 'Pokhara',
    country: 'Nepal',
    type: 'cafe',
    hourlyRate: 120,
    rating: 4.2,
    wifiSpeed: 30,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Organic Food', 'Garden Seating', 'WiFi', 'Local Atmosphere'],
    bestFor: ['Coffee Lovers', 'Health Conscious', 'Relaxed Work'],
    hours: '7:00-20:00',
    address: 'Lakeside East, Pokhara'
  },
  {
    name: 'Boudha Stupa Cafe',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'cafe',
    hourlyRate: 100,
    rating: 4.5,
    wifiSpeed: 20,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Stupa Views', 'Traditional Atmosphere', 'Tibetan Food', 'Spiritual Environment', 'Basic WiFi'],
    bestFor: ['Spiritual Seekers', 'Budget Work', 'Cultural Experience'],
    hours: '6:00-19:00',
    address: 'Boudhanath Stupa, Kathmandu'
  },
  {
    name: 'Kathmandu Coworking Space',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'coworking',
    dayPassPrice: 1000,
    monthlyPrice: 15000,
    rating: 4.1,
    wifiSpeed: 45,
    powerOutlets: 6,
    noiseLevel: 3,
    amenities: ['High-speed Internet', 'Business Services', 'Meeting Rooms', 'Printing', 'UPS Backup'],
    bestFor: ['Professionals', 'Business Meetings', 'Reliable Connection'],
    hours: '8:00-20:00',
    address: 'Durbar Marg, Kathmandu'
  },
  {
    name: 'Trekker\'s Hub',
    city: 'Pokhara',
    country: 'Nepal',
    type: 'cafe',
    hourlyRate: 100,
    rating: 4.3,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Trekking Community', 'Guide Services', 'Maps & Information', 'Basic WiFi', 'Budget Friendly'],
    bestFor: ['Trekkers', 'Adventure Planners', 'Budget Travelers'],
    hours: '7:00-21:00',
    address: 'Lakeside Main Street, Pokhara'
  }
];

export const nepalNomadData: NomadData = {
  country: "Nepal",
  cities: ["Kathmandu", "Pokhara", "Chitwan", "Lumbini", "Nagarkot", "Dhulikhel"],
  internet: {
    speed: 30,
    reliability: 5,
    coworkingSpaces: 15
  },
  costs: {
    coworkingMonthly: 12000,
    simCardMonthly: 500,
    coffeeShopWork: 120
  },
  community: {
    expatSize: 5,
    englishLevel: 6,
    safety: 7
  },
  workspaces: nepalWorkspaces
};