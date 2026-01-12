
import React, { useState } from 'react';
import type { Sermon } from '../types';
import { generateSermonInsights, AiSermonInsights } from '../ai';

interface SermonDetailModalProps {
    sermon: Sermon;
    onClose: () => void;
    onUpdateSermon: (sermon: Sermon) => void;
    onEdit: (sermon: Sermon) => void;
    onDelete: (sermonId: string) => void;
    isAdmin: boolean;
}

const SermonDetailModal: React.FC<SermonDetailModalProps> = ({ sermon, onClose, onUpdateSermon, onEdit, onDelete, isAdmin }) => {
    const [activeTab, setActiveTab] = useState<'video' | 'guide'>(sermon.isStudyGuidePublished ? 'guide' : 'video');
    const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
    const hasInitialAiContent = sermon.summary && sermon.discussionQuestions && sermon.themes && sermon.scriptures;
    
    const [aiContent, setAiContent] = useState<AiSermonInsights | null>(
        hasInitialAiContent ? {
            summary: sermon.summary!,
            discussionQuestions: sermon.discussionQuestions!,
            themes: sermon.themes!,
            scriptures: sermon.scriptures!
        } : null
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateInsights = async () => {
        if (!sermon.transcript) {
            setError("Sorry, a transcript for this sermon is not available to generate insights.");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const insights = await generateSermonInsights(sermon.transcript);
            setAiContent(insights);
            onUpdateSermon({ ...sermon, ...insights });
        } catch (err) {
            setError("Couldn't generate insights. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleTogglePublish = () => {
        onUpdateSermon({ ...sermon, isStudyGuidePublished: !sermon.isStudyGuidePublished });
    };

    const handleActualDelete = () => {
        onDelete(sermon.id);
        setIsConfirmingDelete(false);
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-brand-bg rounded-[3rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="p-12 md:p-16">
                     <div className="flex justify-between items-start">
                        <div>
                            <p className="font-header uppercase tracking-[0.4em] text-[10px] text-brand-primary font-extrabold mb-4">{sermon.series}</p>
                            <h2 className="font-header font-extrabold text-4xl md:text-5xl tracking-tighter leading-none mb-4">{sermon.title}</h2>
                            <p className="font-accent italic text-2xl text-gray-500">{sermon.speaker}</p>
                             <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mt-6">{new Date(sermon.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-brand-ink transition-colors">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="mt-12 flex gap-8 border-b border-gray-100">
                        <button 
                            onClick={() => setActiveTab('video')}
                            className={`pb-4 font-header font-extrabold uppercase tracking-[0.2em] text-[10px] transition-all relative group ${activeTab === 'video' ? 'text-brand-ink' : 'text-gray-400 hover:text-brand-ink'}`}
                        >
                            Watch
                            {activeTab === 'video' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary"></span>}
                        </button>
                        {sermon.isStudyGuidePublished && (
                            <button 
                                onClick={() => setActiveTab('guide')}
                                className={`pb-4 font-header font-extrabold uppercase tracking-[0.2em] text-[10px] transition-all relative group ${activeTab === 'guide' ? 'text-brand-ink' : 'text-gray-400 hover:text-brand-ink'}`}
                            >
                                Study Guide
                                {activeTab === 'guide' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary"></span>}
                            </button>
                        )}
                    </div>

                    <div className="mt-12">
                        {activeTab === 'video' ? (
                            <div className="aspect-video bg-brand-sand rounded-[2rem] overflow-hidden shadow-inner border border-gray-100">
                                {sermon.youtubeVideoId ? (
                                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${sermon.youtubeVideoId}`} frameBorder="0" allowFullScreen></iframe>
                                ) : (
                                     <div className="w-full h-full flex items-center justify-center text-gray-400 font-accent italic text-2xl">Video Coming Soon</div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-inner border border-gray-100 animate-reveal">
                                <h3 className="font-header font-extrabold text-xs uppercase tracking-[0.4em] text-brand-primary mb-8">Message Summary</h3>
                                <p className="text-gray-500 text-lg leading-relaxed mb-16 font-medium">{sermon.summary}</p>
                                <h3 className="font-header font-extrabold text-xs uppercase tracking-[0.4em] text-brand-primary mb-8">Discussion Questions</h3>
                                <ul className="space-y-6">
                                    {sermon.discussionQuestions?.map((q, i) => (
                                        <li key={i} className="flex gap-6">
                                            <span className="font-accent italic text-brand-primary text-2xl opacity-40">0{i+1}</span>
                                            <span className="text-gray-500 text-lg font-medium leading-relaxed">{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="mt-16">
                        <h3 className="font-header font-extrabold text-xs uppercase tracking-[0.4em] text-brand-primary mb-8">Description</h3>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">{sermon.description}</p>
                    </div>
                     
                    {isAdmin && (
                        <div className="mt-20 pt-16 border-t border-gray-100 bg-brand-sand/50 -mx-16 -mb-16 p-16">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="font-header font-extrabold text-xl tracking-widest uppercase text-brand-ink">AI Admin Tools</h3>
                                <div className="flex gap-4">
                                     {!isConfirmingDelete ? (
                                         <>
                                            <button onClick={() => onEdit(sermon)} className="text-[10px] bg-brand-ink text-white px-6 py-3 rounded-full font-extrabold uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-lg">Edit</button>
                                            <button onClick={() => setIsConfirmingDelete(true)} className="text-[10px] bg-white border border-gray-100 text-red-600 px-6 py-3 rounded-full font-extrabold uppercase tracking-widest hover:bg-red-50 transition-colors">Delete</button>
                                         </>
                                     ) : (
                                         <div className="flex items-center gap-4">
                                             <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-widest">Confirm?</span>
                                             <button onClick={handleActualDelete} className="text-[10px] bg-red-600 text-white px-6 py-3 rounded-full font-extrabold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-xl">Yes</button>
                                             <button onClick={() => setIsConfirmingDelete(false)} className="text-[10px] bg-gray-400 text-white px-6 py-3 rounded-full font-extrabold uppercase tracking-widest hover:bg-gray-500 transition-colors">No</button>
                                         </div>
                                     )}
                                </div>
                            </div>

                            {!aiContent && !isLoading && (
                                <button onClick={handleGenerateInsights} disabled={!sermon.transcript} className="bg-brand-ink text-white font-header font-extrabold uppercase tracking-widest text-[10px] py-4 px-10 rounded-full shadow-xl hover:bg-brand-primary hover:scale-105 transition-all disabled:opacity-50">
                                    Generate Study Tools
                                </button>
                            )}

                            {isLoading && (
                                <div className="text-center py-8">
                                    <div className="w-8 h-8 border-2 border-brand-sand border-t-brand-primary rounded-full animate-spin mx-auto mb-4"></div>
                                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Analyzing Content</p>
                                </div>
                            )}

                            {aiContent && (
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100">
                                        <div>
                                            <p className="font-header font-extrabold text-sm text-brand-ink mb-1">Study Guide Status</p>
                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{sermon.isStudyGuidePublished ? 'Visible to Public' : 'Private (Admin Only)'}</p>
                                        </div>
                                        <button 
                                            onClick={handleTogglePublish}
                                            className={`px-8 py-3 rounded-full font-header font-extrabold uppercase tracking-widest text-[10px] transition-all shadow-md ${sermon.isStudyGuidePublished ? 'bg-brand-sand text-brand-ink hover:bg-white' : 'bg-brand-primary text-white hover:bg-brand-ink'}`}
                                        >
                                            {sermon.isStudyGuidePublished ? 'Unpublish' : 'Publish'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                     )}
                </div>
            </div>
        </div>
    );
};

export default SermonDetailModal;
