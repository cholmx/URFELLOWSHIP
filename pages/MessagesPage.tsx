
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
        onDeleteSermon(sermonId);
        setSelectedSermon(null);
    };
    
    const handleSaveAndCloseModal = async (sermonData: SermonFormData, id?: string) => {
        await onSaveSermon(sermonData, id);
        setIsFormModalOpen(false);
    };

    return (
        <div className="bg-brand-bg min-h-screen">
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
            
            <section className="container mx-auto px-6 mb-20 pt-12 md:pt-24">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 pb-16">
                    <div className="max-w-3xl">
                        <FadeInOnScroll>
                            <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Sermon Finder & Archive</p>
                            <h1 className="font-accent italic text-brand-ink text-6xl md:text-[9.5rem] leading-[0.8] tracking-tighter">Messages.</h1>
                        </FadeInOnScroll>
                    </div>
                    {isAdmin && (
                        <FadeInOnScroll>
                            <button onClick={handleOpenAddForm} className="bg-brand-ink text-white font-header font-extrabold uppercase tracking-widest py-4 px-10 rounded-full transition-transform hover:scale-105 duration-300 shadow-xl text-[10px]">
                                + Add Sermon
                            </button>
                        </FadeInOnScroll>
                    )}
                </div>
            </section>

            {/* Editorial Filter Bar */}
            <section className="sticky top-24 md:top-28 z-30 mb-24">
                <div className="container mx-auto px-6">
                    <div className="glass rounded-[2rem] border border-gray-100/50 p-3 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full h-14 pl-14 pr-4 bg-white/50 rounded-full border border-gray-100 text-[10px] font-bold uppercase tracking-widest focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all shadow-inner"
                                />
                                <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <select
                                value={selectedSpeaker}
                                onChange={(e) => setSelectedSpeaker(e.target.value)}
                                className="w-full h-14 px-8 bg-white/50 rounded-full border border-gray-100 text-[10px] font-bold uppercase tracking-widest appearance-none outline-none focus:ring-1 focus:ring-brand-primary cursor-pointer hover:bg-white transition-colors"
                            >
                                {speakers.map(speaker => <option key={speaker} value={speaker}>{speaker === 'All' ? 'All Speakers' : speaker}</option>)}
                            </select>
                            <select
                                value={selectedSeries}
                                onChange={(e) => setSelectedSeries(e.target.value)}
                                className="w-full h-14 px-8 bg-white/50 rounded-full border border-gray-100 text-[10px] font-bold uppercase tracking-widest appearance-none outline-none focus:ring-1 focus:ring-brand-primary cursor-pointer hover:bg-white transition-colors"
                            >
                                {series.map(s => <option key={s} value={s}>{s === 'All' ? 'All Series' : s}</option>)}
                            </select>
                            <select
                                value={selectedTheme}
                                onChange={(e) => setSelectedTheme(e.target.value)}
                                className="w-full h-14 px-8 bg-white/50 rounded-full border border-gray-100 text-[10px] font-bold uppercase tracking-widest appearance-none outline-none focus:ring-1 focus:ring-brand-primary cursor-pointer hover:bg-white transition-colors"
                            >
                                {themes.map(theme => <option key={theme} value={theme}>{theme === 'All' ? 'All Themes' : theme}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {filteredSermons.length > 0 ? (
                        filteredSermons.map((sermon, index) => (
                            <FadeInOnScroll key={sermon.id} style={{ transitionDelay: `${(index % 3) * 100}ms` }}>
                                <SermonCard sermon={sermon} onSelect={() => setSelectedSermon(sermon)} />
                            </FadeInOnScroll>
                        ))
                    ) : (
                        <div className="col-span-full py-48 text-center">
                            <p className="font-accent italic text-4xl text-gray-300">No messages found matching your search.</p>
                            <button onClick={() => { setSearchTerm(''); setSelectedSpeaker('All'); setSelectedSeries('All'); setSelectedTheme('All'); }} className="mt-8 text-[10px] font-extrabold uppercase tracking-widest text-brand-primary border-b border-brand-primary pb-1">Clear all filters</button>
                        </div>
                    )}
                </div>
            </section>

            {/* Podcast Section */}
            <section className="bg-brand-sand py-40">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <FadeInOnScroll>
                            <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-8">Podcast Network</p>
                            <h2 className="font-header font-extrabold text-5xl md:text-7xl tracking-tighter mb-10 leading-none">Take the word <br />with you.</h2>
                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-16 font-medium">
                                Never miss a message. Subscribe to our podcast to receive every teaching automatically on your favorite platform. Perfect for commutes, workouts, or personal study.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <a href="#" className="bg-brand-ink text-white font-header font-extrabold uppercase tracking-widest text-[10px] py-5 px-12 rounded-full hover:bg-brand-primary transition-all shadow-2xl">Apple Podcasts</a>
                                <a href="#" className="bg-white text-brand-ink font-header font-extrabold uppercase tracking-widest text-[10px] py-5 px-12 rounded-full hover:bg-brand-sand transition-all border border-gray-100 shadow-lg">Spotify</a>
                            </div>
                        </FadeInOnScroll>
                        <FadeInOnScroll>
                            <div className="relative group overflow-hidden rounded-[4rem] shadow-2xl border-8 border-white">
                                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop" className="w-full h-[500px] object-cover grayscale transition-transform duration-[2000ms] group-hover:scale-110" alt="Podcast" />
                                <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
                            </div>
                        </FadeInOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MessagesPage;
