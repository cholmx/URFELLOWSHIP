
import React, { useState, useEffect } from 'react';
import type { Page } from '../App';

interface NavLinkProps {
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  className?: string;
}

const SimpleNavLink: React.FC<NavLinkProps> = ({ page, currentPage, setCurrentPage, children, className }) => (
  <button
    onClick={() => setCurrentPage(page)}
    className={`font-header font-extrabold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative group ${
      currentPage === page ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'
    } ${className}`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full ${currentPage === page ? 'w-full' : ''}`}></span>
  </button>
);

const baseNavLinks = [
    { name: 'Home', page: 'Home' as Page },
    {
        name: 'About',
        children: [
            { name: 'About Us', page: 'About Us' as Page },
            { name: 'Core Values', page: 'Core Values' as Page },
        ],
    },
    {
        name: 'Connect',
        children: [
            { name: 'New Here?', page: 'New Here?' as Page },
            { name: 'Ministries', page: 'Ministries' as Page },
            { name: 'Serve', page: 'Serve' as Page },
            { name: 'Prayer', page: 'Prayer' as Page },
            { name: 'Contact', page: 'Contact' as Page },
        ],
    },
    { name: 'Messages', page: 'Messages' as Page },
    { name: 'Events', page: 'Events' as Page },
    { name: 'Give', page: 'Give' as Page },
];

const Header: React.FC<{ currentPage: Page; setCurrentPage: (page: Page) => void; isAdmin: boolean; onLogout: () => void; hasUpcomingEvents: boolean; }> = ({ currentPage, setCurrentPage, isAdmin, onLogout, hasUpcomingEvents }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = hasUpcomingEvents ? baseNavLinks : baseNavLinks.filter(link => link.name !== 'Events');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 pt-6`}>
        <div className={`container mx-auto max-w-7xl transition-all duration-700 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
            <div className={`glass rounded-[1.5rem] transition-all duration-700 border ${scrolled ? 'border-gray-100 shadow-xl' : 'border-transparent shadow-none'} px-8 h-16 md:h-20 flex items-center justify-between`}>
                <button onClick={() => setCurrentPage('Home')} className="flex items-center space-x-4 group">
                    <div className="h-10 w-10 bg-brand-ink text-white flex items-center justify-center rounded-xl font-header font-black text-xs transition-transform group-hover:rotate-6 group-hover:scale-110 shadow-lg">UR</div>
                    <div className="flex flex-col text-left">
                      <span className="font-header font-extrabold text-sm tracking-[0.1em] group-hover:text-brand-primary transition-colors leading-none uppercase">Upper Room</span>
                      <span className="font-accent italic text-[10px] text-gray-400 leading-tight">Fellowship</span>
                    </div>
                </button>

                <nav className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((item) => (
                        item.children ? (
                            <div key={item.name} className="relative group">
                                <button className="px-4 py-2 font-header font-extrabold text-[10px] uppercase tracking-[0.2em] text-brand-text hover:text-brand-primary flex items-center gap-2 transition-colors">
                                    <span>{item.name}</span>
                                    <svg className="w-2.5 h-2.5 transition-transform duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div className="absolute left-0 mt-2 w-56 rounded-2xl shadow-2xl bg-white border border-gray-100 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 z-50 overflow-hidden">
                                    <div className="py-2">
                                        {item.children.map((child) => (
                                            <button 
                                                key={child.name} 
                                                onClick={() => setCurrentPage(child.page)} 
                                                className={`block w-full text-left px-6 py-4 text-[10px] uppercase font-extrabold tracking-widest ${currentPage === child.page ? 'text-brand-primary bg-brand-sand' : 'text-gray-600'} hover:bg-brand-sand hover:text-brand-primary transition-colors`}
                                            >
                                                {child.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <SimpleNavLink key={item.name} page={item.page!} currentPage={currentPage} setCurrentPage={setCurrentPage} className="px-4 py-2">{item.name}</SimpleNavLink>
                        )
                    ))}
                    {isAdmin && (
                        <div className="ml-6 pl-6 border-l border-gray-100 flex gap-4">
                             <button onClick={() => setCurrentPage('EventsAdmin')} className="font-header font-extrabold text-[10px] uppercase tracking-[0.2em] text-red-500 hover:text-red-700 transition-colors">Admin</button>
                             <button onClick={onLogout} className="font-header font-extrabold text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-brand-ink transition-colors">Logout</button>
                        </div>
                    )}
                </nav>

                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-brand-ink hover:bg-brand-sand rounded-xl transition-colors">
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        )}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-6 top-28 z-50 transition-all duration-700 origin-top ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 overflow-y-auto max-h-[70vh]">
                <div className="space-y-2">
                    {navLinks.map((item) => (
                        <div key={item.name} className="border-b border-gray-50 last:border-0">
                            {item.children ? (
                                <>
                                    <button onClick={() => setOpenMobileMenu(openMobileMenu === item.name ? null : item.name)} className="w-full text-left py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-ink flex justify-between items-center">
                                        <span>{item.name}</span>
                                        <svg className={`w-4 h-4 transition-transform duration-500 ${openMobileMenu === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    <div className={`transition-all duration-500 overflow-hidden ${openMobileMenu === item.name ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
                                        {item.children.map((child) => (
                                            <button key={child.name} onClick={() => { setCurrentPage(child.page); setIsMenuOpen(false); }} className="block w-full text-left py-3.5 pl-6 text-[10px] font-extrabold uppercase tracking-widest text-gray-500 hover:text-brand-primary">
                                                {child.name}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <button onClick={() => { setCurrentPage(item.page!); setIsMenuOpen(false); }} className="w-full text-left py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-ink">
                                    {item.name}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
