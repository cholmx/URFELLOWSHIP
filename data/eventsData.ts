
import type { ChurchEvent } from '../types';

export const EVENTS: ChurchEvent[] = [
  {
    id: 'event-1',
    title: 'Summer Picnic & Baptism',
    date: '2024-08-24T18:00:00.000Z',
    location: 'Firestone Park, Columbiana',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    description: 'Join us for our annual church-wide summer picnic! We\'ll have food, games, and a special baptism service at the lake. It\'s a great time for fellowship and fun.',
    category: 'Event',
  },
  {
    id: 'event-2',
    title: 'Foundations of Faith Class',
    date: '2024-09-08T10:30:00.000Z',
    location: 'Fellowship Hall',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
    description: 'A 4-week class covering the essential beliefs of Christianity and the core values of our church. Perfect for new believers or those looking for a refresher.',
    category: 'Class',
  },
  {
    id: 'event-3',
    title: 'Men\'s Breakfast',
    date: '2024-09-14T08:00:00.000Z',
    location: 'Student Center',
    imageUrl: 'https://images.unsplash.com/photo-1604299388338-52758272a819?q=80&w=1974&auto=format&fit=crop',
    description: 'All men are invited for a time of great food, connection, and a powerful message to start your weekend right.',
    category: 'Event',
  },
  {
    id: 'event-4',
    title: 'Worship Night',
    date: '2024-09-27T19:00:00.000Z',
    location: 'Main Sanctuary',
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
    description: 'An extended evening of worship, prayer, and treasuring His presence. Come expecting to encounter God in a powerful way.',
    category: 'Event',
  },
   {
    id: 'event-5',
    title: 'Financial Peace University',
    date: '2024-10-02T18:30:00.000Z',
    location: 'Room 101',
    imageUrl: 'https://images.unsplash.com/photo-1579621970795-87f54f5945c3?q=80&w=2070&auto=format&fit=crop',
    description: 'Learn how to manage your finances God\'s way with this 9-week course. Gain practical skills for budgeting, saving, and giving generously.',
    category: 'Class',
  },
  // Example of a past event that should not be displayed
  {
    id: 'event-past-1',
    title: 'Youth Summer Camp',
    date: '2024-07-15T09:00:00.000Z',
    location: 'Camp Gideon',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
    description: 'An incredible week of fun, friends, and spiritual growth for students in 6th-12th grade.',
    category: 'Event',
  },
];
