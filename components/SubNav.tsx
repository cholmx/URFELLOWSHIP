
import React, { useState, useEffect, useRef } from 'react';

interface SubNavLink {
  label: string;
  id: string;
}

interface SubNavProps {
  links: SubNavLink[];
}

const SubNav: React.FC<SubNavProps> = ({ links }) => {
  const [activeLink, setActiveLink] = useState<string>(links[0]?.id || '');
  const observer = useRef<IntersectionObserver | null>(null);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 180; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };
    
    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-200px 0px -50% 0px',
      threshold: 0
    });

    const elements = links.map(link => document.getElementById(link.id)).filter(el => el);
    elements.forEach(el => observer.current?.observe(el!));

    return () => {
        elements.forEach(el => {
            if (observer.current && el) {
                observer.current.unobserve(el);
            }
        });
    };
  }, [links]);

  return (
    <nav className="sticky top-24 md:top-32 z-30 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
            <div className="glass px-4 rounded-full border border-gray-100/50 shadow-xl inline-flex items-center h-12 gap-1 overflow-x-auto whitespace-nowrap max-w-full no-scrollbar">
                {links.map(link => (
                    <button
                        key={link.id}
                        onClick={() => handleScroll(link.id)}
                        className={`px-6 h-8 rounded-full font-header font-bold text-[10px] uppercase tracking-widest transition-all
                            ${activeLink === link.id
                                ? 'bg-brand-ink text-white shadow-sm'
                                : 'text-gray-400 hover:text-brand-ink'
                            }`}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
