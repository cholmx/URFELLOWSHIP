
import React from 'react';
import type { ChurchEvent } from '../types';

interface EventCardProps {
  event: ChurchEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = new Date(event.date);

  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img className="h-48 w-full object-cover" src={event.imageUrl} alt={event.title} />
        <span
          className={`absolute top-2 right-2 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white
            ${event.category === 'Class' ? 'bg-blue-600' : 'bg-brand-primary'}`}
        >
          {event.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-header font-extrabold text-xl tracking-normal text-brand-text">{event.title}</h3>
        <p className="mt-2 font-semibold text-brand-primary text-sm">{formattedDate}</p>
        <p className="text-gray-500 text-sm">{formattedTime}</p>
        <p className="mt-2 text-sm text-gray-600">{event.location}</p>
        <p className="mt-3 text-sm text-gray-700 flex-grow">{event.description.substring(0, 100)}{event.description.length > 100 ? '...' : ''}</p>
        <div className="mt-auto pt-4 border-t border-gray-200">
           <button className="w-full bg-gray-200 text-gray-800 font-header font-extrabold uppercase tracking-widest py-2 px-2 rounded-full transition-colors hover:bg-gray-300 text-xs">
                Learn More
            </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
