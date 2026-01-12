
import React, { useMemo } from 'react';
import type { Page } from '../App';
import type { ChurchEvent, Sermon } from '../types';
import SermonCard from '../components/SermonCard';
import FadeInOnScroll from '../components/FadeInOnScroll';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
  events: ChurchEvent[];
  sermons: Sermon[];
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, events, sermons }) => {
  const latestSermon = useMemo(() => {
    if (!sermons || sermons.length === 0) return null;
    return [...sermons].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  }, [sermons]);

  return (
    <div className="bg-brand-bg">
      {/* Editorial Hero */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-brand-primary"></div>
                <span className="font-header uppercase tracking-[0.4em] text-[10px] font-extrabold text-brand-primary">Since 1971 • Columbiana, Ohio</span>
              </div>
              
              <h1 className="text-brand-ink leading-[0.8] mb-12 select-none">
                <span className="block font-header font-black uppercase text-5xl md:text-[8rem] tracking-tighter animate-reveal">
                  Know God.
                </span>
                <span className="block font-header font-black uppercase text-5xl md:text-[8rem] tracking-tighter animate-reveal [animation-delay:200ms]">
                  Share life.
                </span>
                <span className="block font-header font-black uppercase text-5xl md:text-[8rem] tracking-tighter animate-reveal [animation-delay:400ms]">
                  Serve Others.
                </span>
              </h1>

              <FadeInOnScroll>
                <p className="font-header text-gray-500 text-lg md:text-xl max-w-md leading-relaxed mb-10">
                  Transforming lives that transform communities.
                </p>
                <div className="flex items-center gap-8">
                  <button 
                    onClick={() => setCurrentPage('New Here?')}
                    className="group bg-brand-ink text-white font-header font-extrabold uppercase tracking-[0.2em] py-5 px-10 rounded-full transition-all hover:bg-brand-primary hover:scale-105 shadow-2xl text-[10px]"
                  >
                    Visit This Sunday
                  </button>
                  <button 
                    onClick={() => setCurrentPage('About Us')}
                    className="font-header font-bold text-brand-ink uppercase tracking-widest text-[10px] border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors"
                  >
                    Our Philosophy
                  </button>
                </div>
              </FadeInOnScroll>
            </div>

            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <FadeInOnScroll className="relative z-10">
                 <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover" 
                      alt="Sacred Community" 
                    />
                    <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
                 </div>
                 <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-right-2 border-brand-primary/20 -z-10"></div>
                 <div className="absolute -bottom-10 -left-10 text-[120px] font-accent italic text-brand-sand select-none -z-10 leading-none">URF</div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Discipleship Goals */}
      <section className="py-40 bg-brand-bg overflow-hidden border-t border-gray-100/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-24">
            <div className="max-w-xl">
               <FadeInOnScroll>
                <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-4">Foundation</p>
                <h2 className="font-accent italic text-5xl md:text-7xl text-brand-ink leading-tight">Everything we do advances discipleship.</h2>
               </FadeInOnScroll>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
            {[
              { num: '01', title: 'Be With Jesus', desc: 'Abide in His presence. Learn to maintain ongoing awareness of God throughout daily life.', color: 'bg-brand-sand' },
              { num: '02', title: 'Become Like Jesus', desc: 'Formation of character. Break destructive patterns and develop Christ-like responses.', color: 'bg-white' },
              { num: '03', title: 'Do What Jesus Did', desc: 'Live on mission. Discipleship that leads to kingdom work in every everyday context.', color: 'bg-brand-sand' }
            ].map((p, i) => (
              <FadeInOnScroll key={p.title} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className={`p-12 rounded-[3rem] ${p.color} border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full`}>
                   <span className="font-accent italic text-4xl text-brand-primary/40 block mb-6">{p.num}</span>
                   <h3 className="font-header font-extrabold text-2xl mb-4 tracking-tight">{p.title}</h3>
                   <p className="text-gray-500 leading-relaxed font-medium">{p.desc}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Sermon */}
      <section className="py-40 bg-brand-bg">
        <div className="container mx-auto px-6">
           <div className="mb-20">
              <FadeInOnScroll>
                <div className="flex justify-between items-end border-b border-gray-100 pb-12">
                  <div>
                    <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-4">Latest Teaching</p>
                    <h2 className="font-header font-extrabold text-5xl tracking-tighter">Current Series</h2>
                  </div>
                  <button onClick={() => setCurrentPage('Messages')} className="hidden md:flex items-center gap-4 font-header font-bold text-xs uppercase tracking-widest text-brand-ink group">
                    Full Archive <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </FadeInOnScroll>
           </div>
           
           <FadeInOnScroll>
              {latestSermon && (
                  <div className="cursor-pointer" onClick={() => setCurrentPage('Messages')}>
                      <SermonCard sermon={latestSermon} isFeatured={true} onSelect={() => setCurrentPage('Messages')} />
                  </div>
              )}
           </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
