
import React, { useState } from 'react';

interface BeliefAccordionProps {
  title: string;
  children: React.ReactNode;
}

const BeliefAccordion: React.FC<BeliefAccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <h3>
        <button
          type="button"
          className="flex justify-between items-center w-full py-8 font-header font-extrabold text-xl md:text-2xl text-left text-brand-text hover:text-brand-primary transition-colors group"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
        >
          <span className="px-2">{title}</span>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-ink text-white' : 'bg-brand-sand text-brand-primary group-hover:bg-brand-primary group-hover:text-white'}`}>
              <svg
                className={`w-5 h-5 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
          </div>
        </button>
      </h3>
      <div
        id={`accordion-content-${title.replace(/\s+/g, '-')}`}
        role="region"
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pt-2 pb-10 px-4 text-gray-500 font-body text-lg space-y-4 leading-relaxed font-medium max-w-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BeliefAccordion;
