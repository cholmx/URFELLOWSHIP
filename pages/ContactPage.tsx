
import React, { useState } from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const ContactPage: React.FC = () => {
    const [connectData, setConnectData] = useState({
        firstName: '', lastName: '', email: '', phone: '', message: ''
    });
    const [isConnectCardSubmitted, setIsConnectCardSubmitted] = useState(false);

    const handleConnectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setConnectData({ ...connectData, [e.target.name]: e.target.value });
    };
    
    const handleConnectSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsConnectCardSubmitted(true);
    };

  return (
    <div className="bg-brand-bg min-h-screen">
        <section className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-20 items-start">
                <div className="lg:col-span-5">
                    <FadeInOnScroll>
                        <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Connection</p>
                        <h1 className="font-accent italic text-brand-ink text-6xl md:text-8xl tracking-tight mb-8">Say Hello.</h1>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12">
                            Whether you're planning your first visit or you've been part of our family for years, we want to hear from you. 
                        </p>
                        
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-header font-extrabold text-xs uppercase tracking-[0.2em] text-brand-primary mb-3">Visit Us</h3>
                                <p className="font-bold text-lg text-brand-ink leading-tight">500 Sponseller Road<br />Columbiana, OH 44408</p>
                            </div>
                            <div>
                                <h3 className="font-header font-extrabold text-xs uppercase tracking-[0.2em] text-brand-primary mb-3">Email</h3>
                                <p className="font-bold text-lg text-brand-ink">hello@upperroom.church</p>
                            </div>
                            <div>
                                <h3 className="font-header font-extrabold text-xs uppercase tracking-[0.2em] text-brand-primary mb-3">Call</h3>
                                <p className="font-bold text-lg text-brand-ink">(330) 482-1234</p>
                            </div>
                        </div>
                    </FadeInOnScroll>
                </div>

                <div className="lg:col-span-7">
                    <FadeInOnScroll>
                        <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary/20"></div>
                            
                            {isConnectCardSubmitted ? (
                                <div className="text-center py-20 animate-reveal">
                                    <div className="w-20 h-20 bg-brand-sand rounded-full flex items-center justify-center mx-auto mb-8">
                                        <svg className="w-10 h-10 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h2 className="font-header font-extrabold text-3xl mb-4">Message Sent.</h2>
                                    <p className="text-gray-500">Thanks for connecting. We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="font-header font-extrabold text-3xl tracking-tight mb-8">Connect Card</h2>
                                    <form onSubmit={handleConnectSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">First Name</label>
                                                <input type="text" name="firstName" value={connectData.firstName} required onChange={handleConnectChange} className="w-full bg-brand-sand border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Last Name</label>
                                                <input type="text" name="lastName" value={connectData.lastName} required onChange={handleConnectChange} className="w-full bg-brand-sand border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Email Address</label>
                                            <input type="email" name="email" value={connectData.email} required onChange={handleConnectChange} className="w-full bg-brand-sand border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Message</label>
                                            <textarea name="message" value={connectData.message} required onChange={handleConnectChange} rows={4} className="w-full bg-brand-sand border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none font-bold"></textarea>
                                        </div>
                                        <button type="submit" className="w-full bg-brand-ink text-white font-header font-extrabold uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-brand-primary transition-all shadow-xl text-[10px] mt-4">
                                            Send Connection
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ContactPage;
