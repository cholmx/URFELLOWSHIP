
import React, { useState, useMemo } from 'react';
import type { ChurchEvent } from '../types';
import EventFormModal from '../components/EventFormModal';

interface EventsAdminPageProps {
  events: ChurchEvent[];
  onSave: (eventData: Omit<ChurchEvent, 'id'> | ChurchEvent) => void;
  onDelete: (eventId: string) => void;
}

const EventsAdminPage: React.FC<EventsAdminPageProps> = ({ events, onSave, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<ChurchEvent | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [events]);

  const handleAddNew = () => {
    setCurrentEvent(null);
    setIsModalOpen(true);
  };

  const handleEdit = (event: ChurchEvent) => {
    setCurrentEvent(event);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = (eventId: string) => {
    onDelete(eventId);
    setDeletingId(null);
  };
  
  const handleSave = (eventData: Omit<ChurchEvent, 'id'> | ChurchEvent) => {
    onSave(eventData);
    setIsModalOpen(false);
  };

  const EventRow: React.FC<{ event: ChurchEvent }> = ({ event }) => {
    const eventDate = new Date(event.date);
    const isPast = eventDate < new Date();
    const isConfirming = deletingId === event.id;

    return (
      <tr className={isPast ? 'bg-gray-100 text-gray-500' : 'bg-white'}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium">{event.title}</div>
          <div className="text-xs font-bold text-brand-primary uppercase">{event.category}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
          {eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          <div className="text-xs text-gray-400">{eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">{event.location}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          {!isConfirming ? (
            <>
              <button onClick={() => handleEdit(event)} className="text-brand-primary hover:text-brand-text mr-4 font-bold uppercase text-xs">Edit</button>
              <button onClick={() => setDeletingId(event.id)} className="text-red-600 hover:text-red-900 font-bold uppercase text-xs">Delete</button>
            </>
          ) : (
            <div className="flex justify-end items-center gap-2">
              <span className="text-[10px] text-red-600 font-bold uppercase">Confirm?</span>
              <button onClick={() => handleConfirmDelete(event.id)} className="text-white bg-red-600 px-2 py-1 rounded text-[10px] font-bold uppercase hover:bg-red-700">Yes</button>
              <button onClick={() => setDeletingId(null)} className="text-gray-500 px-2 py-1 rounded text-[10px] font-bold uppercase hover:bg-gray-200">No</button>
            </div>
          )}
        </td>
      </tr>
    );
  };

  return (
    <>
      {isModalOpen && <EventFormModal event={currentEvent} onSave={handleSave} onClose={() => setIsModalOpen(false)} />}
      <div className="animate-fade-in">
        <section className="bg-brand-secondary py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="font-header font-extrabold text-5xl tracking-tight text-brand-text">Manage Events</h1>
                    <p className="font-accent italic text-xl mt-1 text-gray-600">Administrative Dashboard</p>
                </div>
                <button
                    onClick={handleAddNew}
                    className="bg-brand-primary text-white font-header font-extrabold uppercase tracking-widest py-3 px-6 rounded-full transition-all transform hover:scale-105 duration-300 shadow-lg">
                    + Add New Event
                </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-white p-2 rounded-xl shadow-xl border border-gray-100">
                 <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title / Category</th>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Location</th>
                          <th scope="col" className="relative px-6 py-4"><span className="sr-only">Actions</span></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {sortedEvents.length > 0 ? (
                            sortedEvents.map(event => <EventRow key={event.id} event={event} />)
                        ) : (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-500 italic">No events found. Start by adding one above!</td>
                            </tr>
                        )}
                      </tbody>
                    </table>
                 </div>
             </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventsAdminPage;
