
import React, { useState } from 'react';
import { VOLUNTEER_ROLES } from '../data/mockData';
import type { VolunteerRole } from '../types';
import FadeInOnScroll from '../components/FadeInOnScroll';

const ServePage: React.FC = () => {
    const [selectedMinistry, setSelectedMinistry] = useState('All');
    const ministries = ['All', ...new Set(VOLUNTEER_ROLES.map(r => r.ministry))];

    const filteredRoles = VOLUNTEER_ROLES.filter(r => 
        selectedMinistry === 'All' || r.ministry === selectedMinistry
    );

    return (
        <div className="bg-brand-bg">
            <section className="container mx-auto px-6 mb-24">
                <FadeInOnScroll>
                    <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Service • Purpose • Destiny</p>
                    <h1 className="font-accent italic text-brand-ink text-6xl md:text-9xl leading-none tracking-tighter mb-12">Serve.</h1>
                    <p className="font-header text-gray-500 text-lg md:text-2xl max-w-3xl leading-relaxed">
                        There is no spectator Christianity. You carry a unique greatness meant to impact the world. Discover where your gifts meet the need.
                    </p>
                </FadeInOnScroll>
            </section>

            <section className="sticky top-24 md:top-32 z-30 mb-24 flex justify-center">
                <div className="glass px-6 rounded-full border border-gray-100/50 shadow-2xl inline-flex items-center h-14 gap-2 overflow-x-auto whitespace-nowrap max-w-full no-scrollbar">
                    {ministries.map(m => (
                        <button
                            key={m}
                            onClick={() => setSelectedMinistry(m)}
                            className={`px-8 h-9 rounded-full font-header font-extrabold text-[10px] uppercase tracking-widest transition-all ${selectedMinistry === m ? 'bg-brand-ink text-white shadow-lg' : 'text-gray-400 hover:text-brand-ink'}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredRoles.map((role, idx) => (
                            <FadeInOnScroll key={role.id} style={{ transitionDelay: `${idx * 100}ms` }}>
                                <div className="bg-white p-12 rounded-[4rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 group h-full flex flex-col">
                                    <div className="font-accent italic text-5xl text-brand-primary opacity-20 mb-12 group-hover:opacity-100 transition-opacity">{role.icon}</div>
                                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-brand-primary mb-6">{role.ministry}</p>
                                    <h3 className="font-header font-extrabold text-3xl mb-6 text-brand-ink group-hover:text-brand-primary transition-colors leading-tight">{role.title}</h3>
                                    <p className="text-gray-500 text-base leading-relaxed mb-12 flex-grow font-medium">{role.description}</p>
                                    <div className="pt-10 border-t border-gray-50 flex items-center justify-between">
                                        <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{role.frequency}</p>
                                        <button className="text-brand-primary font-black text-2xl hover:translate-x-3 transition-all">
                                            →
                                        </button>
                                    </div>
                                </div>
                            </FadeInOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-40 bg-brand-bg">
                <div className="container mx-auto px-6">
                    <div className="bg-brand-ink p-20 md:p-32 rounded-[5rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] -z-0"></div>
                        <FadeInOnScroll className="relative z-10">
                            <h2 className="font-accent italic text-white text-5xl md:text-8xl mb-10 leading-none tracking-tighter">Not sure where <br />you fit?</h2>
                            <p className="text-white/50 text-xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">Our Growth Track helps you discover your unique gifts. Learn how they can be used to serve others. Reach your God-given destiny.</p>
                            <button className="bg-brand-primary text-brand-ink px-16 py-6 rounded-full font-header font-extrabold uppercase tracking-widest text-[10px] shadow-2xl hover:bg-white hover:scale-105 transition-all">Start Growth Track</button>
                        </FadeInOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServePage;
