
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
    className={`font-header font-extrabold tracking-normal uppercase transition-colors duration-300 ${
      currentPage === page ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'
    } ${className}`}
  >
    {children}
  </button>
);

const baseNavLinks: ({ name: string; page: Page; children?: undefined; } | { name: string; children: { name: string; page: Page; }[]; page?: undefined; })[] = [
    { name: 'Home', page: 'Home' },
    {
        name: 'About',
        children: [
            { name: 'About Us', page: 'About Us' },
            { name: 'Core Values', page: 'Core Values' },
        ],
    },
    {
        name: 'Connect',
        children: [
            { name: 'New Here?', page: 'New Here?' },
            { name: 'Ministries', page: 'Ministries' },
            { name: 'Serve', page: 'Serve' }, // New Page
            { name: 'Prayer', page: 'Prayer' },
            { name: 'Contact', page: 'Contact' },
        ],
    },
    { name: 'Messages', page: 'Messages' },
    { name: 'Events', page: 'Events' },
    { name: 'Give', page: 'Give' },
];


const Header: React.FC<{ currentPage: Page; setCurrentPage: (page: Page) => void; isAdmin: boolean; onLogout: () => void; hasUpcomingEvents: boolean; }> = ({ currentPage, setCurrentPage, isAdmin, onLogout, hasUpcomingEvents }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [isSundayMorning, setIsSundayMorning] = useState(false);

  useEffect(() => {
    const checkTime = () => {
        const now = new Date();
        const day = now.getDay(); // 0 is Sunday
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentTime = hour + minute / 60;
        // Sunday 10:15am - 12:15pm
        if (day === 0 && currentTime >= 10.25 && currentTime <= 12.25) {
            setIsSundayMorning(true);
        } else {
            setIsSundayMorning(false);
        }
    };
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = hasUpcomingEvents ? baseNavLinks : baseNavLinks.filter(link => link.name !== 'Events');

  return (
    <>
      {isSundayMorning && (
          <div className="bg-brand-text text-white py-2 px-4 text-center font-header font-bold text-xs uppercase tracking-widest animate-pulse">
              <span className="mr-2">🔴 Join us Live right now!</span>
              <a href="https://youtube.com/@urfellowship" target="_blank" className="underline hover:text-brand-primary">Watch Stream &rarr;</a>
          </div>
      )}
      <header className="bg-brand-bg/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
                <button onClick={() => setCurrentPage('Home')} className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-brand-text text-white flex items-center justify-center rounded-md font-header font-extrabold text-lg">UR</div>
                <span className="font-header font-extrabold text-2xl tracking-tight">UPPER ROOM</span>
                </button>
            </div>
            <nav className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-2">
                {navLinks.map((item) => (
                    item.children ? (
                    <div key={item.name} className="relative group">
                        <button className="px-4 py-2 font-header font-extrabold tracking-normal uppercase text-brand-text hover:text-brand-primary flex items-center gap-1">
                        <span>{item.name}</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-1">
                            {item.children.map((child) => (
                            <button key={child.name} onClick={() => setCurrentPage(child.page)} className={`block w-full text-left px-4 py-2 text-sm ${currentPage === child.page ? 'text-brand-primary font-bold' : 'text-brand-text'} hover:bg-gray-100`}>
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
                    <div className="relative group">
                        <button className="px-4 py-2 font-header font-extrabold tracking-normal uppercase text-red-600 hover:text-red-800 flex items-center gap-1">
                        <span>Admin</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-1">
                            <button onClick={() => setCurrentPage('EventsAdmin')} className="block w-full text-left px-4 py-2 text-sm text-brand-text hover:bg-gray-100">Manage Events</button>
                            <button onClick={() => setCurrentPage('AdminSettings')} className="block w-full text-left px-4 py-2 text-sm text-brand-text hover:bg-gray-100">Settings</button>
                            <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
                        </div>
                        </div>
                    </div>
                )}
                </div>
            </nav>
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-brand-text">
                {isMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
                </button>
            </div>
            </div>
        </div>
        {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-y-auto max-h-[80vh]">
            <div className="px-4 pt-4 pb-8 space-y-2">
                {navLinks.map((item) => (
                item.children ? (
                    <div key={item.name}>
                    <button onClick={() => setOpenMobileMenu(openMobileMenu === item.name ? null : item.name)} className="w-full text-left py-3 text-xl font-header font-extrabold uppercase text-brand-text flex justify-between items-center border-b border-gray-50">
                        <span>{item.name}</span>
                        <svg className={`w-5 h-5 transition-transform duration-300 ${openMobileMenu === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {openMobileMenu === item.name && (
                        <div className="pl-4 py-2 space-y-2 bg-gray-50">
                        {item.children.map((child) => (
                            <button key={child.name} onClick={() => { setCurrentPage(child.page); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-lg font-header font-bold text-gray-600">
                                {child.name}
                            </button>
                        ))}
                        </div>
                    )}
                    </div>
                ) : (
                    <button onClick={() => { setCurrentPage(item.page!); setIsMenuOpen(false); }} className="w-full text-left py-4 text-xl font-header font-extrabold uppercase text-brand-text border-b border-gray-50">
                        {item.name}
                    </button>
                )
                ))}
            </div>
            </div>
        )}
      </header>
    </>
  );
};

export default Header;
