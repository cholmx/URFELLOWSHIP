
import React, { useState } from 'react';
import BeliefAccordion from '../components/BeliefAccordion';
import SubNav from '../components/SubNav';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { SMALL_GROUPS } from '../data/mockData';

const MinistrySection: React.FC<{
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt: string;
    imageLeft?: boolean;
    children: React.ReactNode;
}> = ({ title, subtitle, imageUrl, imageAlt, imageLeft = false, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${imageLeft ? 'md:grid-flow-col-dense' : ''}`}>
            <div className={`${imageLeft ? 'md:col-start-2' : ''}`}>
                <p className="font-header uppercase tracking-widest text-sm text-brand-primary font-extrabold">{subtitle}</p>
                <h2 className="font-header font-extrabold text-4xl tracking-tight mt-2">{title}</h2>
                <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
                    {children}
                </div>
            </div>
            <div className={`mt-10 md:mt-0 ${imageLeft ? 'md:col-start-1' : ''}`}>
                <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
        </div>
    </div>
);

const MinistriesPage: React.FC = () => {
    const [groupFilter, setGroupFilter] = useState('All');
    const categories = ['All', 'Families', 'Men', 'Women', 'Young Adults'];

    const pageSections = [
        { label: "Kids", id: "kids" },
        { label: "Youth", id: "youth" },
        { label: "Groups", id: "groups" },
        { label: "Worship", id: "worship" },
        { label: "Sozo", id: "sozo" },
    ];

  return (
    <div className="animate-fade-in">
      <section className="bg-brand-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-header font-extrabold text-5xl md:text-6xl tracking-tight">Ministries</h1>
          <p className="font-accent italic text-2xl mt-2 text-gray-600">Find Your Place to Connect and Serve</p>
        </div>
      </section>

      <SubNav links={pageSections} />

      <section id="kids" className="py-20 bg-brand-light-gray">
        <FadeInOnScroll>
            <MinistrySection title="Upper Room Kids" subtitle="Kids Ministry" imageUrl="https://images.unsplash.com/photo-1516627145400-c8f23351d3a3?q=80&w=2070&auto=format&fit=crop" imageAlt="Children playing">
                <p>Upper Room Kids is where children discovery God's love through age-appropriate teaching and caring relationships.</p>
                <p className="font-bold italic">Sundays: Kids join families for worship, then dismiss for classes.</p>
            </MinistrySection>
        </FadeInOnScroll>
      </section>

      <section id="groups" className="py-24 bg-brand-bg">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">Table Groups</p>
                <h2 className="font-header font-extrabold text-5xl mt-2">Life Happens at the Table</h2>
                <p className="text-gray-600 mt-4">Pursuing healthy relationships starts with showing up authentically. Join a group to share life, study the Word, and grow together.</p>
            </div>

            <div className="flex justify-center gap-2 mb-12">
                {categories.map(c => (
                    <button 
                        key={c} 
                        onClick={() => setGroupFilter(c)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${groupFilter === c ? 'bg-brand-text text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SMALL_GROUPS.filter(g => groupFilter === 'All' || g.category === groupFilter).map((group, idx) => (
                    <FadeInOnScroll key={group.id} style={{ transitionDelay: `${idx * 100}ms` }}>
                        <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all">
                            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">{group.category}</span>
                            <h3 className="font-header font-extrabold text-2xl mt-2">{group.name}</h3>
                            <p className="text-gray-500 text-sm mt-1">Led by {group.leader}</p>
                            <div className="mt-4 flex gap-4 text-xs font-bold text-gray-400">
                                <span>🗓 {group.day}</span>
                                <span>⏰ {group.time}</span>
                            </div>
                            <p className="text-gray-600 mt-4 text-sm leading-relaxed">{group.description}</p>
                            <button className="mt-8 w-full py-3 border-2 border-brand-text font-header font-bold uppercase text-xs tracking-widest rounded-full hover:bg-brand-text hover:text-white transition-all">
                                Request to Join
                            </button>
                        </div>
                    </FadeInOnScroll>
                ))}
            </div>
        </div>
      </section>

       <section id="worship" className="py-20 bg-brand-light-gray">
        <FadeInOnScroll>
            <MinistrySection title="Worship & Production" subtitle="Worship Ministry" imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" imageAlt="Worship" imageLeft={true}>
                <p>Treasuring God's presence through music and art. Our team strives for excellence while remaining focused on Jesus.</p>
            </MinistrySection>
        </FadeInOnScroll>
      </section>

      <section id="sozo" className="py-20 bg-brand-secondary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-header font-extrabold text-5xl tracking-tight">Sozo Ministry</h2>
            <p className="font-accent italic text-2xl mt-4 text-gray-600">A journey to inner healing and freedom.</p>
            <button className="mt-8 bg-brand-text text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest">Request a Session</button>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;
