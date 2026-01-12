
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import FadeInOnScroll from '../components/FadeInOnScroll';

const EncouragementModal: React.FC<{ encouragement: string, onClose: () => void }> = ({ encouragement, onClose }) => (
    <div className="fixed inset-0 bg-brand-ink/90 z-50 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
        <div className="bg-white rounded-[3rem] shadow-2xl max-w-lg w-full p-12 relative overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sand rounded-bl-[100%] -z-10"></div>
            <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-brand-ink">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="font-accent italic text-3xl text-brand-ink mb-6">An encouragement for you.</h3>
            <div className="bg-brand-sand/50 p-8 rounded-[2rem] text-gray-700 whitespace-pre-wrap font-header font-medium leading-relaxed italic border border-gray-100">
                "{encouragement}"
            </div>
            <div className="mt-10 flex justify-center">
                <button onClick={onClose} className="bg-brand-ink text-white font-header font-extrabold uppercase tracking-widest text-[10px] py-4 px-10 rounded-full hover:bg-brand-primary transition-all shadow-xl">
                    Thank You
                </button>
            </div>
        </div>
    </div>
);


const PrayerPage: React.FC = () => {
    const [prayerData, setPrayerData] = useState({ name: '', request: '' });
    const [isPrayerSubmitted, setIsPrayerSubmitted] = useState(false);
    const [generateEncouragement, setGenerateEncouragement] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedEncouragement, setGeneratedEncouragement] = useState<string | null>(null);

    const handlePrayerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPrayerData({ ...prayerData, [e.target.name]: e.target.value });
    };

    const handlePrayerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPrayerSubmitted(true);
        if (prayerData.request && generateEncouragement) {
            setIsGenerating(true);
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                const prompt = `You are a caring assistant for Upper Room Fellowship. Provide a brief, warm encouragement and a bible verse for this request: "${prayerData.request}" from ${prayerData.name || 'a friend'}.`;
                const response = await ai.models.generateContent({
                    model: 'gemini-3-flash-preview',
                    contents: prompt,
                });
                setGeneratedEncouragement(response.text);
            } catch (error) {
                setGeneratedEncouragement("We are lifting you up. God is with you.");
            } finally {
                setIsGenerating(false);
            }
        }
    };
    
    const closeEncouragementModal = () => {
        setGeneratedEncouragement(null);
        setPrayerData({ name: '', request: '' });
        setGenerateEncouragement(false);
        setIsPrayerSubmitted(false);
    };

  return (
    <div className="bg-brand-bg min-h-screen">
      {isGenerating && (
        <div className="fixed inset-0 bg-white/90 z-50 flex justify-center items-center backdrop-blur-sm">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-brand-sand border-t-brand-primary rounded-full animate-spin mx-auto mb-6"></div>
                <p className="font-header font-bold text-xs uppercase tracking-widest text-brand-ink">Listening to the Spirit...</p>
            </div>
        </div>
      )}
      {generatedEncouragement && !isGenerating && <EncouragementModal encouragement={generatedEncouragement} onClose={closeEncouragementModal} />}
      
      <section className="container mx-auto px-6 mb-20 text-center">
          <FadeInOnScroll>
              <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Intercession</p>
              <h1 className="font-accent italic text-brand-ink text-6xl md:text-8xl tracking-tight">Prayer.</h1>
              <p className="font-header text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed italic">
                  "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God."
              </p>
          </FadeInOnScroll>
      </section>

      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-3xl mx-auto">
            <FadeInOnScroll>
                <div className="bg-brand-sand p-12 md:p-20 rounded-[4rem] relative overflow-hidden border border-gray-100">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/50 rounded-full -z-0"></div>
                    
                    <div className="relative z-10">
                        {isPrayerSubmitted && !generatedEncouragement && !isGenerating ? (
                            <div className="text-center py-20 animate-reveal">
                                <h2 className="font-accent italic text-4xl mb-4">We've received your heart.</h2>
                                <p className="text-gray-500 max-w-md mx-auto">Our team will be lifting this specific request up during our corporate and private prayer times this week.</p>
                                <button onClick={() => setIsPrayerSubmitted(false)} className="mt-12 text-[10px] font-extrabold uppercase tracking-widest border-b-2 border-brand-primary pb-1">Submit Another Request</button>
                            </div>
                        ) : (
                            <>
                                <h2 className="font-header font-extrabold text-3xl mb-12 tracking-tight">Share a burden or a praise.</h2>
                                <form onSubmit={handlePrayerSubmit} className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Name (Optional)</label>
                                        <input type="text" name="name" value={prayerData.name} onChange={handlePrayerChange} className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Your Request</label>
                                        <textarea name="request" value={prayerData.request} required onChange={handlePrayerChange} rows={5} className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold" placeholder="How can we stand with you?"></textarea>
                                    </div>
                                    
                                    <label className="flex items-center gap-4 cursor-pointer group">
                                        <input type="checkbox" checked={generateEncouragement} onChange={(e) => setGenerateEncouragement(e.target.checked)} className="w-6 h-6 rounded-lg border-none bg-white text-brand-primary focus:ring-brand-primary" />
                                        <span className="text-sm font-bold text-brand-ink group-hover:text-brand-primary transition-colors">I'd like a brief word of encouragement now.</span>
                                    </label>

                                    <button type="submit" className="w-full bg-brand-ink text-white font-header font-extrabold uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-brand-primary transition-all shadow-xl text-[10px] mt-6">
                                        Commit to Prayer
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
};

export default PrayerPage;
