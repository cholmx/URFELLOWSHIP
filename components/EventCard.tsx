
import React from 'react';
import type { ChurchEvent } from '../types';

interface EventCardProps {
  event: ChurchEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = new Date(event.date);

  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="group bg-brand-bg rounded-2xl border border-gray-100 p-4 hover:border-brand-primary/30 transition-all duration-500">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={event.imageUrl} alt={event.title} />
        <div className="absolute bottom-4 left-4 bg-brand-text text-white p-3 rounded-lg flex flex-col items-center justify-center min-w-[60px] shadow-2xl">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 leading-none mb-1">{eventDate.toLocaleDateString('en-US', { month: 'short' })}</span>
            <span className="text-2xl font-header font-black leading-none">{eventDate.getDate()}</span>
        </div>
      </div>
      <div className="pt-6 px-2 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${event.category === 'Class' ? 'bg-blue-50 text-blue-600' : 'bg-brand-sand text-brand-primary'}`}>{event.category}</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{formattedTime}</span>
        </div>
        <h3 className="font-header font-bold text-xl text-brand-text mb-3 tracking-tight group-hover:text-brand-primary transition-colors">{event.title}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{event.location}</p>
        <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text group-hover:text-brand-primary flex items-center gap-2 transition-all">
            RSVP Details <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
