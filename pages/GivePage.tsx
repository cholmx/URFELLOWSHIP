
import React, { useState } from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const GivePage: React.FC = () => {
    const [testimonyData, setTestimonyData] = useState({ name: '', email: '', message: '' });
    const [isTestimonySubmitted, setIsTestimonySubmitted] = useState(false);

    const handleTestimonyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTestimonyData({ ...testimonyData, [e.target.name]: e.target.value });
    };

    const handleTestimonySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsTestimonySubmitted(true);
    };

  return (
    <div className="bg-brand-bg min-h-screen">
      <section className="container mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
            <FadeInOnScroll>
                <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Partnership • Worship</p>
                <h1 className="font-accent italic text-brand-ink text-6xl md:text-[9rem] leading-[0.85] tracking-tighter mb-8">
                    Generous <br />
                    <span className="text-brand-primary">Lives.</span>
                </h1>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <p className="font-accent italic text-2xl text-gray-400 mb-8 max-w-md">
                    God loves a cheerful giver. Your generosity fuels our mission to transform lives.
                </p>
            </FadeInOnScroll>
        </div>
      </section>

      <section className="py-32 bg-brand-sand rounded-[4rem]">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <FadeInOnScroll>
                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-4">
                            <h2 className="font-header font-extrabold text-4xl tracking-tighter leading-none mb-6">An Act of <br />Worship.</h2>
                            <div className="w-12 h-1 bg-brand-primary"></div>
                        </div>
                        <div className="md:col-span-8">
                            <div className="text-lg text-gray-500 leading-relaxed space-y-8 font-medium">
                                <p>Through your faithful giving you are partnering with us to create spaces where people can encounter God. We believe in living the Gospel through overwhelming generosity. Just as Jesus gave everything for us we are called to give freely to further His kingdom.</p>
                                <p>We steward every resource with integrity. Our goal is to be good news to our neighbors and our city.</p>
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
            </div>
        </div>
      </section>

      <section className="py-40 bg-brand-bg">
        <div className="container mx-auto px-6">
             <div className="text-center mb-24">
                <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-4">The Impact</p>
                <h2 className="font-accent italic text-5xl md:text-7xl text-brand-ink tracking-tight">Why we give.</h2>
             </div>
             
             <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12">
                 {[
                    { number: "01", title: "Worship God", description: "Honoring Him with our firsts" },
                    { number: "02", title: "Soul Growth", description: "Trusting God's provision" },
                    { number: "03", title: "Local Ministry", description: "Transforming our city" },
                    { number: "04", title: "Gratitude", description: "Reflecting His generosity" },
                    { number: "05", title: "Kingdom Work", description: "Global impact partnerships" },
                 ].map((item, index) => (
                    <FadeInOnScroll key={item.number} style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="text-center group">
                            <div className="h-20 w-20 rounded-full bg-brand-sand text-brand-primary flex items-center justify-center mx-auto mb-8 font-header font-black text-2xl group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                                {item.number}
                            </div>
                            <h3 className="font-header font-extrabold text-lg mb-3 tracking-tight">{item.title}</h3>
                            <p className="text-gray-400 text-[10px] leading-relaxed uppercase font-extrabold tracking-widest">{item.description}</p>
                        </div>
                    </FadeInOnScroll>
                 ))}
             </div>
        </div>
      </section>
      
      <section className="py-40 bg-brand-ink text-white relative overflow-hidden rounded-[5rem] mx-6">
        <div className="container mx-auto px-12 relative z-10">
            <div className="text-center mb-24">
                <h2 className="font-header font-extrabold text-5xl md:text-7xl tracking-tighter">Ways to Give</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                <FadeInOnScroll>
                    <div className="text-center">
                        <h3 className="font-header font-extrabold text-2xl mb-6">Online Giving</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">Make a secure one-time gift or set up recurring donations through our giving platform.</p>
                        <a href="#" className="inline-block bg-brand-primary text-brand-ink font-header font-extrabold uppercase tracking-widest py-5 px-10 rounded-full transition-all hover:bg-white hover:scale-105 shadow-2xl text-[10px]">Give Online Now</a>
                    </div>
                </FadeInOnScroll>
                 <FadeInOnScroll style={{ transitionDelay: '150ms' }}>
                    <div className="text-center">
                        <h3 className="font-header font-extrabold text-2xl mb-6">Text to Give</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">Text urf and the amount to 73256 to give instantly from your mobile device.</p>
                        <div className="text-brand-primary font-accent italic text-4xl">73256</div>
                    </div>
                 </FadeInOnScroll>
                 <FadeInOnScroll style={{ transitionDelay: '300ms' }}>
                    <div className="text-center">
                        <h3 className="font-header font-extrabold text-2xl mb-6">In-Person</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">Place your gift in the offering boxes located at the doors during our Sunday services.</p>
                        <div className="w-12 h-1 bg-brand-primary mx-auto"></div>
                    </div>
                 </FadeInOnScroll>
            </div>
        </div>
      </section>
      
      <section className="py-40 bg-brand-bg">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-5">
                        <FadeInOnScroll>
                            <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-8">Testimony</p>
                            <h2 className="font-header font-extrabold text-5xl md:text-7xl tracking-tighter leading-none mb-8">Share your <br />story.</h2>
                            <p className="text-gray-500 text-xl leading-relaxed font-medium">
                                Your story of generosity can inspire others. We would love to hear how giving has impacted your life.
                            </p>
                        </FadeInOnScroll>
                    </div>
                    <div className="lg:col-span-7">
                        <FadeInOnScroll>
                            <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-gray-100 shadow-2xl relative overflow-hidden">
                                {isTestimonySubmitted ? (
                                    <div className="text-center py-20 animate-reveal">
                                        <div className="w-24 h-24 bg-brand-sand rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                                            <svg className="w-10 h-10 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <h2 className="font-header font-extrabold text-4xl mb-4 tracking-tight">Thank You.</h2>
                                        <p className="text-gray-500 font-medium">Your story has been received with gratitude.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleTestimonySubmit} className="space-y-10">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                                                <input type="text" name="name" value={testimonyData.name} required onChange={handleTestimonyChange} className="w-full bg-brand-sand border-none rounded-2xl p-5 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Email Address</label>
                                                <input type="email" name="email" value={testimonyData.email} required onChange={handleTestimonyChange} className="w-full bg-brand-sand border-none rounded-2xl p-5 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Your Story</label>
                                            <textarea name="message" value={testimonyData.message} required onChange={handleTestimonyChange} rows={6} className="w-full bg-brand-sand border-none rounded-2xl p-5 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold"></textarea>
                                        </div>
                                        <button type="submit" className="w-full bg-brand-ink text-white font-header font-extrabold uppercase tracking-[0.3em] py-6 rounded-2xl hover:bg-brand-primary transition-all shadow-xl text-[10px] mt-6">
                                            Submit Your Story
                                        </button>
                                    </form>
                                )}
                            </div>
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
};

export default GivePage;
