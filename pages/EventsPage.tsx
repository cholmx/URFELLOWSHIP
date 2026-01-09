
import React, { useState, useMemo } from 'react';
import EventCard from '../components/EventCard';
import FadeInOnScroll from '../components/FadeInOnScroll';
import type { ChurchEvent } from '../types';

interface EventsPageProps {
  events: ChurchEvent[];
}

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
  const [filter, setFilter] = useState<'All' | 'Event' | 'Class'>('All');

  const upcomingEvents = useMemo(() => {
    const now = new Date();
    return events
      .filter(event => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events]);

  const filteredEvents = useMemo(() => {
    if (filter === 'All') {
      return upcomingEvents;
    }
    return upcomingEvents.filter(event => event.category === filter);
  }, [filter, upcomingEvents]);

  const FilterButton: React.FC<{ category: 'All' | 'Event' | 'Class', children: React.ReactNode }> = ({ category, children }) => (
    <button
      onClick={() => setFilter(category)}
      className={`px-6 py-2 rounded-full font-header font-extrabold text-sm uppercase tracking-wider transition-colors duration-300
        ${filter === category ? 'bg-brand-primary text-white' : 'bg-white text-brand-text hover:bg-gray-200'}`}
    >
      {children}
    </button>
  );

  return (
    <div className="animate-fade-in">
      <section className="relative py-20 bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7b2f28a727?q=80&w=2070&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-header font-extrabold text-5xl md:text-6xl tracking-tight">Events & Classes</h1>
          <p className="font-accent italic text-2xl mt-2">Join us for what's happening at Upper Room</p>
        </div>
      </section>

      <section className="py-12 bg-brand-light-gray sticky top-20 z-40 shadow-sm">
        <FadeInOnScroll className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-2 sm:space-x-4">
          <FilterButton category="All">All</FilterButton>
          <FilterButton category="Event">Events</FilterButton>
          <FilterButton category="Class">Classes</FilterButton>
        </FadeInOnScroll>
      </section>

      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <FadeInOnScroll key={event.id} style={{ transitionDelay: `${(index % 3) * 150}ms` }}>
                  <EventCard event={event} />
                </FadeInOnScroll>
              ))
            ) : (
              <p className="md:col-span-2 lg:col-span-3 text-center text-gray-500 text-xl py-12">
                No upcoming {filter !== 'All' ? filter.toLowerCase() + 's' : 'events'} scheduled at this time. Please check back soon!
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
