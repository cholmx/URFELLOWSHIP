
import React, { useState, useMemo } from 'react';
import type { Sermon } from '../types';
import SermonCard from '../components/SermonCard';
import SermonDetailModal from '../components/SermonDetailModal';
import SermonFormModal from '../components/SermonFormModal';
import type { SermonFormData } from '../components/SermonFormModal';
import FadeInOnScroll from '../components/FadeInOnScroll';

interface MessagesPageProps {
    isAdmin: boolean;
    sermons: Sermon[];
    onSaveSermon: (sermonData: SermonFormData, id?: string) => Promise<void>;
    onDeleteSermon: (sermonId: string) => void;
    onUpdateSermon: (sermon: Sermon) => void;
}

const MessagesPage: React.FC<MessagesPageProps> = ({ isAdmin, sermons, onSaveSermon, onDeleteSermon, onUpdateSermon }) => {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [editingSermon, setEditingSermon] = useState<Sermon | null>(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpeaker, setSelectedSpeaker] = useState('All');
    const [selectedSeries, setSelectedSeries] = useState('All');
    const [selectedTheme, setSelectedTheme] = useState('All');
    const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

    const speakers = useMemo(() => ['All', ...new Set(sermons.map(s => s.speaker))], [sermons]);
    const series = useMemo(() => ['All', ...new Set(sermons.map(s => s.series))], [sermons]);
    const themes = useMemo(() => ['All', ...new Set(sermons.flatMap(s => s.themes || []).filter(Boolean))], [sermons]);

    const filteredSermons = useMemo(() => {
        return [...sermons]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .filter(sermon => (selectedSpeaker === 'All' || sermon.speaker === selectedSpeaker))
            .filter(sermon => (selectedSeries === 'All' || sermon.series === selectedSeries))
            .filter(sermon => (selectedTheme === 'All' || sermon.themes?.includes(selectedTheme)))
            .filter(sermon => {
                const searchLower = searchTerm.toLowerCase();
                return sermon.title.toLowerCase().includes(searchLower) ||
                sermon.speaker.toLowerCase().includes(searchLower) ||
                sermon.series.toLowerCase().includes(searchLower) ||
                sermon.topics.some(topic => topic.toLowerCase().includes(searchLower)) ||
                sermon.themes?.some(theme => theme.toLowerCase().includes(searchLower))
            });
    }, [sermons, searchTerm, selectedSpeaker, selectedSeries, selectedTheme]);

    const handleOpenAddForm = () => {
        setEditingSermon(null);
        setIsFormModalOpen(true);
    };

    const handleEditSermon = (sermon: Sermon) => {
        setEditingSermon(sermon);
        setSelectedSermon(null); // Close detail modal
        setIsFormModalOpen(true);
    };

    const handleDeleteAndCloseModal = (sermonId: string) => {
        // Deletion is confirmed in the App component's handler
        onDeleteSermon(sermonId);
        setSelectedSermon(null);
    };
    
    const handleSaveAndCloseModal = async (sermonData: SermonFormData, id?: string) => {
        await onSaveSermon(sermonData, id);
        setIsFormModalOpen(false);
    };

    return (
        <>
            {selectedSermon && (
                <SermonDetailModal 
                    sermon={selectedSermon} 
                    onClose={() => setSelectedSermon(null)}
                    onUpdateSermon={onUpdateSermon}
                    onEdit={handleEditSermon}
                    onDelete={handleDeleteAndCloseModal}
                    isAdmin={isAdmin}
                />
            )}
            {isFormModalOpen && (
                <SermonFormModal
                    sermon={editingSermon}
                    onSubmit={handleSaveAndCloseModal}
                    onCancel={() => setIsFormModalOpen(false)}
                />
            )}
            <div className="animate-fade-in">
                <section className="bg-brand-secondary py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="font-header font-extrabold text-5xl md:text-6xl tracking-tight">Messages</h1>
                        <p className="font-accent italic text-2xl mt-2 text-gray-600">It's not about religious knowledge—it's about transformation.</p>
                    </div>
                </section>

                <section className="py-20 bg-brand-bg">
                    <FadeInOnScroll className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                        <div className="flex justify-between items-center">
                             <h2 className="font-header font-extrabold text-4xl tracking-tight">Subscribe to Our Podcast</h2>
                             {isAdmin && (
                                <button onClick={handleOpenAddForm} className="bg-brand-primary text-white font-header font-extrabold uppercase tracking-widest py-2 px-5 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-md text-sm">Add New Sermon</button>
                             )}
                        </div>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        Never miss a message! Subscribe to our podcast on Apple Podcasts, Spotify, or your favorite podcast platform to receive our latest teachings automatically. Perfect for commutes, workouts, or whenever you want to engage with biblical teaching on the go.
                        </p>
                        <div className="mt-8 flex justify-center items-center space-x-4">
                            <a href="#" className="bg-brand-text text-white font-header font-extrabold uppercase tracking-widest py-3 px-6 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-md text-sm sm:text-base">Apple Podcasts</a>
                            <a href="#" className="bg-brand-text text-white font-header font-extrabold uppercase tracking-widest py-3 px-6 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-md text-sm sm:text-base">Spotify</a>
                        </div>
                    </FadeInOnScroll>
                </section>

                <section className="py-12 bg-white sticky top-20 z-40 shadow-sm">
                    <FadeInOnScroll className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-center font-header font-extrabold text-3xl tracking-tight mb-6">Find a Message</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <input
                                type="text"
                                placeholder="Search by keyword..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary"
                                aria-label="Search sermons"
                            />
                            <select
                                value={selectedSpeaker}
                                onChange={(e) => setSelectedSpeaker(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary bg-white"
                                aria-label="Filter by speaker"
                            >
                                {speakers.map(speaker => <option key={speaker} value={speaker}>{speaker === 'All' ? 'All Speakers' : speaker}</option>)}
                            </select>
                            <select
                                value={selectedSeries}
                                onChange={(e) => setSelectedSeries(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary bg-white"
                                aria-label="Filter by series"
                            >
                                {series.map(s => <option key={s} value={s}>{s === 'All' ? 'All Series' : s}</option>)}
                            </select>
                             <select
                                value={selectedTheme}
                                onChange={(e) => setSelectedTheme(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary bg-white"
                                aria-label="Filter by theme"
                            >
                                {themes.map(theme => <option key={theme} value={theme}>{theme === 'All' ? 'All Themes' : theme}</option>)}
                            </select>
                        </div>
                    </FadeInOnScroll>
                </section>
                
                <section className="py-20 bg-brand-light-gray">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredSermons.length > 0 ? (
                                filteredSermons.map((sermon, index) => (
                                    <FadeInOnScroll key={sermon.id} style={{ transitionDelay: `${(index % 3) * 150}ms` }}>
                                        <SermonCard sermon={sermon} onSelect={() => setSelectedSermon(sermon)} />
                                    </FadeInOnScroll>
                                ))
                            ) : (
                                <p className="md:col-span-2 lg:col-span-3 text-center text-gray-500 text-xl py-12">No sermons found matching your criteria.</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MessagesPage;
