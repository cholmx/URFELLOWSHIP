
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
      className={`px-8 py-2.5 rounded-full font-header font-extrabold text-[10px] uppercase tracking-[0.2em] transition-all duration-300
        ${filter === category ? 'bg-brand-ink text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:text-brand-ink'}`}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-brand-bg min-h-screen">
      <section className="container mx-auto px-6 mb-20 text-center">
          <FadeInOnScroll>
              <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">The Calendar</p>
              <h1 className="font-accent italic text-brand-ink text-6xl md:text-8xl tracking-tight">Gatherings.</h1>
              <p className="font-header text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed">
                  Community happens when we prioritize being together. Find a gathering, a class, or an event to join our story.
              </p>
          </FadeInOnScroll>
      </section>

      <section className="sticky top-24 md:top-28 z-30 mb-20 flex justify-center items-center gap-3">
        <FadeInOnScroll className="flex gap-2 bg-white/50 backdrop-blur-md p-2 rounded-full border border-white/50 shadow-xl">
          <FilterButton category="All">All</FilterButton>
          <FilterButton category="Event">Events</FilterButton>
          <FilterButton category="Class">Classes</FilterButton>
        </FadeInOnScroll>
      </section>

      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <FadeInOnScroll key={event.id} style={{ transitionDelay: `${(index % 3) * 100}ms` }}>
                  <EventCard event={event} />
                </FadeInOnScroll>
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                 <p className="font-accent italic text-3xl text-gray-300">No gatherings currently scheduled in this category.</p>
              </div>
            )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
