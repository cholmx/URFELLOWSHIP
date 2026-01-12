
import React from 'react';
import type { Page } from '../App';
import FadeInOnScroll from '../components/FadeInOnScroll';

interface NewHerePageProps {
  setCurrentPage?: (page: Page) => void;
}

const NewHerePage: React.FC<NewHerePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="bg-brand-bg">
      {/* Editorial Page Header */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll>
                <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Connect • Join • Belong</p>
                <h1 className="font-accent italic text-brand-ink text-6xl md:text-8xl leading-tight mb-8">
                    A Place to <br />
                    <span className="text-brand-primary">Belong</span> <br />
                    Before You Believe.
                </h1>
                <p className="font-header text-gray-500 text-lg md:text-xl max-w-md leading-relaxed">
                    Visiting a new place can be intimidating. We have designed our Sunday experience to be warm and clear and full of life.
                </p>
            </FadeInOnScroll>
            <FadeInOnScroll className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                        className="w-full h-full object-cover" 
                        alt="Welcome" 
                    />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-ink p-8 rounded-2xl shadow-2xl max-w-xs text-white">
                    <p className="font-header text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-2">Service Time</p>
                    <p className="text-2xl font-bold">Sundays at 10.30AM</p>
                </div>
            </FadeInOnScroll>
        </div>
      </section>

      {/* The Sunday Rhythm */}
      <section className="py-40 bg-brand-sand rounded-[4rem] mx-6 mb-32 border border-gray-100/50 shadow-inner">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-32">
                <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-4">The Rhythm</p>
                <h2 className="font-accent italic text-5xl md:text-7xl text-brand-ink tracking-tighter">What to expect.</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-24">
                <FadeInOnScroll>
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] h-full shadow-sm border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-700 group">
                        <span className="font-accent italic text-4xl text-brand-primary opacity-30 mb-8 block group-hover:opacity-100 transition-opacity">01</span>
                        <h3 className="font-header font-extrabold text-3xl mb-8 tracking-tight text-brand-ink">Family Worship Together</h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-lg">
                            Our Sunday gatherings begin with everyone worshiping together. Adults and children of all ages participate as one community. We believe there is something powerful about families experiencing God's presence as one community. You will hear contemporary worship music with lyrics projected on screens so everyone can follow along easily. Scripture readings are also displayed. Do not worry if you did not bring a Bible. Feel free to participate however you are comfortable. This includes standing or sitting or raising your hands.
                        </p>
                    </div>
                </FadeInOnScroll>

                <FadeInOnScroll>
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] h-full shadow-sm border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-700 group">
                        <span className="font-accent italic text-4xl text-brand-primary opacity-30 mb-8 block group-hover:opacity-100 transition-opacity">02</span>
                        <h3 className="font-header font-extrabold text-3xl mb-8 tracking-tight text-brand-ink">Coffee & Connection Break</h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-lg">
                            After worship we take a short break to grab coffee and greet each other. This casual time helps everyone feel welcome and connected. This is a perfect opportunity to meet someone new or catch up with friends. We never single out visitors or ask you to stand up and introduce yourself. We want you to feel relaxed and at home from the moment you walk through the doors.
                        </p>
                    </div>
                </FadeInOnScroll>

                <FadeInOnScroll>
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] h-full shadow-sm border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-700 group">
                        <span className="font-accent italic text-4xl text-brand-primary opacity-30 mb-8 block group-hover:opacity-100 transition-opacity">03</span>
                        <h3 className="font-header font-extrabold text-3xl mb-8 tracking-tight text-brand-ink">Message & Kids Programs</h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-lg mb-8">
                            Following our break adults and youth remain in the sanctuary for the message while children from birth through 5th grade are dismissed to age appropriate programs. Our nursery is open throughout the entire service for parents to use for infants and toddlers if needed.
                        </p>
                        <p className="text-gray-500 leading-relaxed font-medium text-lg">
                            Our messages are practical and Bible based and designed to help you live out your faith in everyday life. Each week we explore how to know God more deeply and build healthy relationships and discover our purpose.
                        </p>
                    </div>
                </FadeInOnScroll>

                <FadeInOnScroll>
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] h-full shadow-sm border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-700 group">
                        <span className="font-accent italic text-4xl text-brand-primary opacity-30 mb-8 block group-hover:opacity-100 transition-opacity">04</span>
                        <h3 className="font-header font-extrabold text-3xl mb-8 tracking-tight text-brand-ink">Atmosphere & Accessibility</h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-lg mb-8">
                            Do not worry about what to wear. Come as you are. You will see people in everything from jeans to business casual. We are more interested in meeting you than what you are wearing. Our building is fully wheelchair accessible with designated seating areas.
                        </p>
                        <p className="text-brand-ink leading-relaxed font-bold text-lg italic">
                            For those with hearing needs we offer the Listen Everywhere app that streams our audio directly to your smartphone or tablet. Just bring your own headphones. The free app is available in both the Apple App Store and Google Play.
                        </p>
                    </div>
                </FadeInOnScroll>
            </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4">
                    <FadeInOnScroll>
                        <h2 className="font-header font-extrabold text-5xl tracking-tighter mb-8">Come as <br />you are.</h2>
                        <div className="space-y-6 text-gray-500 mb-10">
                            <p className="font-bold text-brand-ink text-xl">500 Sponseller Road<br />Columbiana, OH 44408</p>
                            <p className="font-medium font-header">We are located just south of Main Street. Our space is designed for connection and peace. If you have other specific needs please let us know so we can better serve you.</p>
                        </div>
                        <a 
                            href="https://www.google.com/maps/dir/?api=1&destination=500+Sponseller+Road,+Columbiana,+OH+44408"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex bg-brand-primary text-brand-ink font-header font-bold uppercase tracking-widest text-[10px] py-5 px-10 rounded-full hover:bg-brand-ink hover:text-white transition-all shadow-xl"
                        >
                            Open in Maps
                        </a>
                    </FadeInOnScroll>
                </div>
                <div className="lg:col-span-8">
                    <FadeInOnScroll>
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[500px]">
                            <iframe
                                src="https://maps.google.com/maps?q=500%20Sponseller%20Rd%2C%20Columbiana%2C%20OH%2044408&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Church Location Map">
                            </iframe>
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default NewHerePage;
