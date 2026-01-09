
import React, { useState, useEffect } from 'react';
import type { ChurchEvent } from '../types';

interface EventFormModalProps {
  event: Omit<ChurchEvent, 'id'> | ChurchEvent | null;
  onSave: (event: Omit<ChurchEvent, 'id'> | ChurchEvent) => void;
  onClose: () => void;
}

const initialFormData: Omit<ChurchEvent, 'id'> = {
    title: '',
    date: '',
    location: '',
    imageUrl: 'https://images.unsplash.com/photo-1517866345380-189BC54e5246?q=80&w=2070&auto=format&fit=crop',
    description: '',
    category: 'Event',
};

const EventFormModal: React.FC<EventFormModalProps> = ({ event, onSave, onClose }) => {
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (event) {
            // Format date for datetime-local input which needs 'YYYY-MM-DDTHH:mm'
            const formattedDate = event.date ? new Date(event.date).toISOString().slice(0, 16) : '';
            setFormData({ ...event, date: formattedDate });
        } else {
             // Set default time to 7 PM for new events
            const defaultDate = new Date();
            defaultDate.setHours(19, 0, 0, 0);
            setFormData({...initialFormData, date: defaultDate.toISOString().slice(0,16)});
        }
    }, [event]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Convert local datetime string back to full ISO string for consistency
        const eventToSave = {
            ...formData,
            date: new Date(formData.date).toISOString(),
        };
        onSave(eventToSave);
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-brand-bg rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                 <div className="p-6 border-b">
                    <h2 className="font-header font-extrabold text-2xl tracking-tight">{event && 'id' in event ? 'Edit Event' : 'Add New Event'}</h2>
                </div>
                <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto p-6">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-bold text-gray-700">Title</label>
                            <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <div>
                                <label htmlFor="date" className="block text-sm font-bold text-gray-700">Date & Time</label>
                                <input type="datetime-local" name="date" id="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-bold text-gray-700">Category</label>
                                <select name="category" id="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary">
                                    <option value="Event">Event</option>
                                    <option value="Class">Class</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-bold text-gray-700">Location</label>
                            <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div>
                            <label htmlFor="imageUrl" className="block text-sm font-bold text-gray-700">Image URL</label>
                            <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-bold text-gray-700">Description</label>
                            <textarea name="description" id="description" value={formData.description} onChange={handleChange} required rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
                        </div>
                    </div>
                </form>
                <div className="flex justify-end gap-4 p-6 border-t bg-gray-50 rounded-b-lg">
                    <button type="button" onClick={onClose} className="py-2 px-6 border border-gray-300 rounded-full shadow-sm text-sm font-header font-extrabold uppercase tracking-widest text-gray-700 bg-white hover:bg-gray-50">Cancel</button>
                    <button type="submit" onClick={handleSubmit} className="py-2 px-6 border border-transparent rounded-full shadow-sm text-sm font-header font-extrabold uppercase tracking-widest text-white bg-brand-primary hover:bg-opacity-90">
                        Save Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventFormModal;
