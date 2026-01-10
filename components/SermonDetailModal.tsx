
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
            <div className="bg-brand-bg rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="p-8">
                     <div className="flex justify-between items-start">
                        <div>
                            <p className="font-header uppercase tracking-widest text-sm text-brand-primary font-extrabold">{sermon.series}</p>
                            <h2 className="font-header font-extrabold text-4xl tracking-tight mt-1">{sermon.title}</h2>
                            <p className="font-accent italic text-2xl text-gray-600 mt-1">{sermon.speaker}</p>
                             <p className="text-sm text-gray-400 mt-1">{new Date(sermon.date).toLocaleDateString()}</p>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="mt-6 flex border-b border-gray-200">
                        <button 
                            onClick={() => setActiveTab('video')}
                            className={`px-6 py-2 font-header font-bold uppercase tracking-wider text-sm transition-colors ${activeTab === 'video' ? 'border-b-2 border-brand-primary text-brand-primary' : 'text-gray-500 hover:text-brand-text'}`}
                        >
                            Watch / Listen
                        </button>
                        {sermon.isStudyGuidePublished && (
                            <button 
                                onClick={() => setActiveTab('guide')}
                                className={`px-6 py-2 font-header font-bold uppercase tracking-wider text-sm transition-colors ${activeTab === 'guide' ? 'border-b-2 border-brand-primary text-brand-primary' : 'text-gray-500 hover:text-brand-text'}`}
                            >
                                Study Guide
                            </button>
                        )}
                    </div>

                    <div className="mt-6">
                        {activeTab === 'video' ? (
                            <div className="aspect-video bg-black rounded-md overflow-hidden">
                                {sermon.youtubeVideoId ? (
                                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${sermon.youtubeVideoId}`} frameBorder="0" allowFullScreen></iframe>
                                ) : (
                                     <div className="w-full h-full flex items-center justify-center text-white">Video Coming Soon</div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white p-6 rounded-lg shadow-inner animate-fade-in">
                                <h3 className="font-header font-extrabold text-2xl mb-4">Message Summary</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">{sermon.summary}</p>
                                <h3 className="font-header font-extrabold text-2xl mb-4">Discussion Questions</h3>
                                <ul className="space-y-3">
                                    {sermon.discussionQuestions?.map((q, i) => (
                                        <li key={i} className="flex gap-3 text-gray-700">
                                            <span className="text-brand-primary font-bold">{i+1}.</span>
                                            <span>{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed">{sermon.description}</p>
                     
                    {isAdmin && (
                        <div className="mt-12 pt-8 border-t-2 border-brand-secondary bg-gray-50 -mx-8 -mb-8 p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-header font-extrabold text-3xl tracking-tight text-brand-text">AI Admin Tools ✨</h3>
                                <div className="flex gap-4">
                                     {!isConfirmingDelete ? (
                                         <>
                                            <button onClick={() => onEdit(sermon)} className="text-xs bg-blue-600 text-white px-4 py-2 rounded-full font-bold uppercase hover:bg-blue-700 transition-colors">Edit</button>
                                            <button onClick={() => setIsConfirmingDelete(true)} className="text-xs bg-red-600 text-white px-4 py-2 rounded-full font-bold uppercase hover:bg-red-700 transition-colors">Delete</button>
                                         </>
                                     ) : (
                                         <div className="flex items-center gap-2 animate-pulse">
                                             <span className="text-xs font-bold text-red-600 uppercase">Confirm Delete?</span>
                                             <button onClick={handleActualDelete} className="text-xs bg-red-700 text-white px-4 py-2 rounded-full font-bold uppercase hover:bg-red-800 transition-colors shadow-lg">Yes, Delete</button>
                                             <button onClick={() => setIsConfirmingDelete(false)} className="text-xs bg-gray-400 text-white px-4 py-2 rounded-full font-bold uppercase hover:bg-gray-500 transition-colors">Cancel</button>
                                         </div>
                                     )}
                                </div>
                            </div>

                            {!aiContent && !isLoading && (
                                <button onClick={handleGenerateInsights} disabled={!sermon.transcript} className="bg-brand-primary text-white font-header font-extrabold uppercase py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform disabled:opacity-50">
                                    Generate Study Tools
                                </button>
                            )}

                            {isLoading && (
                                <div className="text-center py-4">
                                    <svg className="animate-spin h-6 w-6 text-brand-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    <p className="mt-2 text-sm font-bold">Analyzing sermon content...</p>
                                </div>
                            )}

                            {aiContent && (
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-white rounded shadow-sm border border-brand-primary/20">
                                        <div>
                                            <p className="font-bold">Study Guide Status</p>
                                            <p className="text-sm text-gray-500">{sermon.isStudyGuidePublished ? 'Visible to Public' : 'Private (Admin Only)'}</p>
                                        </div>
                                        <button 
                                            onClick={handleTogglePublish}
                                            className={`px-6 py-2 rounded-full font-bold uppercase text-xs transition-all ${sermon.isStudyGuidePublished ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' : 'bg-green-600 text-white hover:bg-green-700'}`}
                                        >
                                            {sermon.isStudyGuidePublished ? 'Unpublish' : 'Publish to Public'}
                                        </button>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8 opacity-60">
                                        <div className="text-xs bg-white p-3 rounded italic">Summary: {aiContent.summary.substring(0, 100)}...</div>
                                        <div className="text-xs bg-white p-3 rounded italic">Questions: {aiContent.discussionQuestions.length} generated questions ready.</div>
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
