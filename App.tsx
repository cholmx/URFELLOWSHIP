
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewHerePage from './pages/NewHerePage';
import AboutUsPage from './pages/AboutUsPage';
import CoreValuesPage from './pages/CoreValuesPage';
import MinistriesPage from './pages/MinistriesPage';
import MessagesPage from './pages/MessagesPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import PrayerPage from './pages/PrayerPage';
import GivePage from './pages/GivePage';
import EventsAdminPage from './pages/EventsAdminPage';
import AdminSettingsPage from './pages/AdminSettingsPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import AdminLoginModal from './components/AdminLoginModal';
import { EVENTS } from './data/eventsData';
import { SERMONS } from './data/mockData';
import type { ChurchEvent, Sermon } from './types';
import { generateSermonInsights } from './ai';
import type { SermonFormData } from './components/SermonFormModal';

export type Page = 'Home' | 'New Here?' | 'About Us' | 'Core Values' | 'Ministries' | 'Messages' | 'Events' | 'Contact' | 'Prayer' | 'Give' | 'EventsAdmin' | 'AdminSettings';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const [events, setEvents] = useState<ChurchEvent[]>(EVENTS);
  const [sermons, setSermons] = useState<Sermon[]>(SERMONS);

  const hasUpcomingEvents = useMemo(() => {
    const now = new Date();
    return events.some(event => new Date(event.date) >= now);
  }, [events]);

  useEffect(() => {
    // Check session storage on initial load to maintain admin state
    if (sessionStorage.getItem('isAdminAuthenticated') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    sessionStorage.setItem('isAdminAuthenticated', 'true');
    setIsLoginModalOpen(false);
  };
  
  const handleLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('isAdminAuthenticated');
    setCurrentPage('Home'); // Redirect to home on logout
  };

  const handleSaveEvent = (eventData: Omit<ChurchEvent, 'id'> | ChurchEvent) => {
    if ('id' in eventData) {
      // Editing existing event
      setEvents(prevEvents => prevEvents.map(e => e.id === eventData.id ? eventData : e));
    } else {
      // Adding new event
      const newEvent: ChurchEvent = { ...eventData, id: `event-${Date.now()}` };
      setEvents(prevEvents => [newEvent, ...prevEvents]);
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    if (window.confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
      setEvents(prevEvents => prevEvents.filter(e => e.id !== eventId));
    }
  };

  const handleSaveSermon = async (sermonData: SermonFormData, id?: string) => {
    if (id) {
        // Editing sermon - AI insights are not regenerated on edit for now
        const updatedSermon: Sermon = {
            ...sermons.find(s => s.id === id)!,
            ...sermonData,
        };
        setSermons(prev => prev.map(s => s.id === id ? updatedSermon : s));
    } else {
        // Adding new sermon
        const insights = await generateSermonInsights(sermonData.transcript);
        const newSermon: Sermon = {
            id: `sermon-${Date.now()}`,
            ...sermonData,
            topics: [...new Set(insights.themes)], // Using themes as topics for now
            ...insights
        };
        setSermons(prev => [newSermon, ...prev]);
    }
  };

  const handleDeleteSermon = (sermonId: string) => {
    setSermons(prev => prev.filter(s => s.id !== sermonId));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage setCurrentPage={setCurrentPage} events={events} sermons={sermons} />;
      case 'New Here?':
        return <NewHerePage />;
      case 'About Us':
        return <AboutUsPage />;
      case 'Core Values':
        return <CoreValuesPage />;
      case 'Ministries':
        return <MinistriesPage />;
      case 'Messages':
        return <MessagesPage isAdmin={isAdmin} sermons={sermons} onSaveSermon={handleSaveSermon} onDeleteSermon={handleDeleteSermon} onUpdateSermon={(s) => setSermons(prev => prev.map(ps => ps.id === s.id ? s : ps))} />;
      case 'Events':
        return <EventsPage events={events} />;
      case 'Contact':
        return <ContactPage />;
      case 'Prayer':
        return <PrayerPage />;
      case 'Give':
        return <GivePage />;
      case 'EventsAdmin':
        return isAdmin ? <EventsAdminPage events={events} onSave={handleSaveEvent} onDelete={handleDeleteEvent} /> : <HomePage setCurrentPage={setCurrentPage} events={events} sermons={sermons} />;
      case 'AdminSettings':
        return isAdmin ? <AdminSettingsPage /> : <HomePage setCurrentPage={setCurrentPage} events={events} sermons={sermons} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} events={events} sermons={sermons} />;
    }
  };

  return (
    <div className="bg-brand-bg text-brand-text font-body font-medium min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isAdmin={isAdmin} onLogout={handleLogout} hasUpcomingEvents={hasUpcomingEvents} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} onAdminLoginClick={() => setIsLoginModalOpen(true)} hasUpcomingEvents={hasUpcomingEvents} />
      <ScrollToTopButton />
      {isLoginModalOpen && <AdminLoginModal onLoginSuccess={handleLoginSuccess} onClose={() => setIsLoginModalOpen(false)} />}
    </div>
  );
};

export default App;
