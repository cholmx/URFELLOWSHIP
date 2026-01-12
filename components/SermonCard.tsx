
import React from 'react';
import type { Sermon } from '../types';

interface SermonCardProps {
  sermon: Sermon;
  onSelect: () => void;
  isFeatured?: boolean;
}

const SermonCard: React.FC<SermonCardProps> = ({ sermon, onSelect, isFeatured = false }) => {
    if (isFeatured) {
        return (
             <div className="relative group overflow-hidden rounded-[4rem] bg-white border border-gray-100 transition-all duration-700 hover:shadow-2xl" onClick={onSelect}>
                <div className="md:flex min-h-[550px]">
                    <div className="md:w-3/5 overflow-hidden">
                        <img 
                            className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                            src={sermon.imageUrl} 
                            alt={sermon.title} 
                        />
                    </div>
                    <div className="p-16 md:w-2/5 flex flex-col justify-center bg-white relative">
                        <div className="absolute -top-10 -right-10 text-[180px] font-accent font-black text-brand-sand/50 pointer-events-none select-none">
                            NEW
                        </div>
                        <div className="relative z-10">
                          <p className="font-header uppercase tracking-[0.4em] text-[10px] text-brand-primary font-extrabold mb-6">{sermon.series}</p>
                          <h3 className="font-header font-extrabold text-5xl leading-tight text-brand-ink mb-6 tracking-tighter">{sermon.title}</h3>
                          <p className="font-accent italic text-2xl text-gray-500 mb-8">{sermon.speaker}</p>
                          <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">{sermon.description.substring(0, 180)}...</p>
                          
                          <button className="flex items-center gap-4 font-header font-extrabold text-xs uppercase tracking-[0.2em] text-brand-ink group-hover:gap-8 transition-all duration-500">
                              Watch the Message <span className="text-2xl">→</span>
                          </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:border-brand-primary transition-all duration-500 hover:shadow-xl" onClick={onSelect}>
      <div className="relative overflow-hidden aspect-[16/11]">
        <img className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" src={sermon.imageUrl} alt={sermon.title} />
        <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-transparent transition-colors duration-700"></div>
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-ink">{sermon.series}</p>
        </div>
      </div>
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="font-header font-extrabold text-2xl text-brand-ink group-hover:text-brand-primary transition-colors mb-3 tracking-tight">{sermon.title}</h3>
        <p className="text-gray-500 font-accent italic text-lg mb-6">{sermon.speaker}</p>
        <div className="mt-auto pt-8 flex items-center justify-between border-t border-gray-50">
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
            <span className="text-brand-primary text-xl font-black group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
};

export default SermonCard;
