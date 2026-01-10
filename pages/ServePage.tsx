
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
        <div className="animate-fade-in">
            <section className="bg-brand-bg py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-header font-extrabold text-5xl md:text-7xl tracking-tight">Discover Your Purpose</h1>
                    <p className="font-accent italic text-2xl mt-4 text-gray-600 max-w-2xl mx-auto">
                        There is no spectator Christianity. You carry a unique greatness meant to impact the world.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-white sticky top-20 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex justify-center gap-2 overflow-x-auto pb-2">
                    {ministries.map(m => (
                        <button
                            key={m}
                            onClick={() => setSelectedMinistry(m)}
                            className={`px-6 py-2 rounded-full font-header font-bold text-xs uppercase tracking-widest transition-colors ${selectedMinistry === m ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-brand-light-gray">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredRoles.map((role, idx) => (
                            <FadeInOnScroll key={role.id} style={{ transitionDelay: `${idx * 100}ms` }}>
                                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
                                    <div className="text-4xl mb-4">{role.icon}</div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">{role.ministry}</p>
                                    <h3 className="font-header font-extrabold text-2xl mb-2">{role.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">{role.description}</p>
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-400 mb-4">Frequency: {role.frequency}</p>
                                        <button className="w-full bg-brand-text text-white font-header font-bold uppercase py-3 rounded-full text-xs hover:bg-brand-primary transition-colors">
                                            I'm Interested
                                        </button>
                                    </div>
                                </div>
                            </FadeInOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand-bg">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-header font-extrabold text-3xl mb-4">Not Sure Where You Fit?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">Our Growth Track is designed to help you discover your unique gifts and how they can be used to serve others.</p>
                    <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-header font-bold uppercase tracking-widest shadow-xl">Start Growth Track</button>
                </div>
            </section>
        </div>
    );
};

export default ServePage;
