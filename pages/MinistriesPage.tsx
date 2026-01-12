
import React, { useState } from 'react';
import SubNav from '../components/SubNav';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { SMALL_GROUPS } from '../data/mockData';
import BeliefAccordion from '../components/BeliefAccordion';

const MinistriesPage: React.FC = () => {
    const [groupFilter, setGroupFilter] = useState('All');
    const categories = ['All', 'Families', 'Men', 'Women', 'Young Adults'];

    const pageSections = [
        { label: "Kids", id: "kids" },
        { label: "Youth", id: "youth" },
        { label: "Groups", id: "groups" },
        { label: "Worship", id: "worship" },
        { label: "Outreach", id: "outreach" },
        { label: "Sozo", id: "sozo" },
    ];

    const sozoFaqs = [
        { q: "Can one Sozo session actually heal a lie that has been believed for many years?", a: "Yes. Once the Lord heals the lie that settled into your spirit, the rest of your life experiences based on this lie will realign to His truth. Many people report significant breakthroughs in just one session, though some may benefit from additional sessions." },
        { q: "Is Sozo counseling?", a: "No, Sozo is a prayer ministry focused on interacting with the Godhead. It is not traditional psychotherapy or psychological counseling." },
        { q: "How long does a Sozo session last?", a: "Sessions typically last approximately 2 hours. This provides ample time to hear from the Holy Spirit without rushing the process." },
        { q: "Do I need to be a member of this church to receive Sozo ministry?", a: "No. We believe healing should be accessible to everyone. Our doors and our Sozo ministry are open to the entire community." },
        { q: "Is what I share confidential?", a: "Yes. Our team adheres to strict confidentiality standards. Your story and your session are held with the utmost respect and privacy." }
    ];

  return (
    <div className="bg-brand-bg">
      <section className="container mx-auto px-6 mb-24">
          <FadeInOnScroll>
              <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Our Community</p>
              <h1 className="font-accent italic text-brand-ink text-6xl md:text-[9rem] leading-none tracking-tighter">Ministries.</h1>
              <p className="font-header text-gray-500 text-lg md:text-xl max-w-2xl mt-12 leading-relaxed">
                  Ministry isn't just something we do—it's how we live out our faith together. Find a space where you can connect with God and build meaningful relationships.
              </p>
          </FadeInOnScroll>
      </section>

      <SubNav links={pageSections} />

      {/* Kids Ministry */}
      <section id="kids" className="py-40 bg-brand-bg scroll-mt-48">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <FadeInOnScroll className="relative">
                    <div className="aspect-square rounded-[5rem] overflow-hidden shadow-2xl z-10 relative">
                        <img src="https://images.unsplash.com/photo-1516627145400-c8f23351d3a3?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Kids" />
                    </div>
                    <div className="absolute -top-16 -right-16 text-[200px] font-accent italic text-brand-sand select-none -z-10 uppercase">KIDS</div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-8">Upper Room Kids</p>
                    <h2 className="font-header font-extrabold text-5xl md:text-7xl text-brand-text mb-10 tracking-tighter leading-tight">Future Generations.</h2>
                    <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium">
                        <p>Upper Room Kids is a vibrant, exciting environment where children from birth through 5th grade discover God's love through age-appropriate teaching, fun activities, and caring relationships.</p>
                        <p>We believe children aren't just the church of tomorrow; they're part of the church today. Our team creates experiences that help kids build a strong spiritual foundation and understand they have God-given purpose.</p>
                        <p className="font-bold text-brand-ink text-xl italic">Sundays: Children join their families for worship, then are dismissed to age-appropriate classes during the message.</p>
                    </div>
                </FadeInOnScroll>
            </div>
        </div>
      </section>

      {/* Youth Ministry */}
      <section id="youth" className="py-40 bg-brand-sand scroll-mt-48 rounded-[5rem] mx-6">
        <div className="container mx-auto px-12 md:px-24">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-7">
                    <FadeInOnScroll>
                        <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-8">Upper Room Youth</p>
                        <h2 className="font-header font-extrabold text-5xl md:text-7xl text-brand-ink mb-10 tracking-tighter leading-none">Own a Supernatural Lifestyle.</h2>
                        <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium">
                            <p>Upper Room Youth creates a safe, engaging space where 6th-12th graders build authentic friendships, ask tough questions, and develop a faith that lasts. We're passionate about helping students own a supernatural lifestyle.</p>
                            <p>We challenge students to go deeper in their relationship with Jesus and equip them to live out their faith in school, at home, and in their community. <strong>Wednesdays: 6:30–8:00 PM in the Student Center.</strong></p>
                        </div>
                    </FadeInOnScroll>
                </div>
                <div className="lg:col-span-5 relative">
                    <FadeInOnScroll>
                        <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Youth" />
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
      </section>

      {/* Table Groups Section */}
      <section id="groups" className="py-40 bg-brand-bg scroll-mt-48">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                <div className="max-w-2xl">
                    <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Table Groups</p>
                    <h2 className="font-accent italic text-5xl md:text-[9rem] text-brand-ink leading-none tracking-tighter">Share life.</h2>
                    <p className="mt-10 text-gray-500 text-lg leading-relaxed font-medium">Life is better together. Our Table Groups meet throughout the week in homes across the community. These are spaces where you can show up authentically, with kindness and with honor.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    {categories.map(c => (
                        <button 
                            key={c} 
                            onClick={() => setGroupFilter(c)}
                            className={`px-8 py-3 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all ${groupFilter === c ? 'bg-brand-ink text-white shadow-xl' : 'bg-white text-gray-400 hover:text-brand-ink'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {SMALL_GROUPS.filter(g => groupFilter === 'All' || g.category === groupFilter).map((group, idx) => (
                    <FadeInOnScroll key={group.id} style={{ transitionDelay: `${idx * 100}ms` }}>
                        <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group flex flex-col h-full">
                            <span className="text-[10px] font-extrabold text-brand-primary uppercase tracking-[0.3em] block mb-8">{group.category}</span>
                            <h3 className="font-header font-extrabold text-3xl text-brand-ink group-hover:text-brand-primary transition-colors leading-tight mb-4">{group.name}</h3>
                            <p className="text-gray-400 text-[10px] font-extrabold uppercase tracking-widest mb-8">Led by {group.leader}</p>
                            <p className="text-gray-500 text-base leading-relaxed mb-12 flex-grow">{group.description}</p>
                            <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{group.day} • {group.time}</span>
                                <button className="text-brand-primary font-black text-2xl group-hover:translate-x-3 transition-all">→</button>
                            </div>
                        </div>
                    </FadeInOnScroll>
                ))}
            </div>
        </div>
      </section>

      {/* Worship Section */}
      <section id="worship" className="py-40 bg-brand-bg scroll-mt-48">
        <div className="container mx-auto px-6 text-center">
            <FadeInOnScroll>
                <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-8">Worship Ministry</p>
                <h2 className="font-accent italic text-6xl md:text-[9rem] leading-none text-brand-ink mb-16 tracking-tighter">Treasure His Presence.</h2>
                <div className="max-w-6xl mx-auto rounded-[5rem] overflow-hidden shadow-2xl group mb-20 relative">
                    <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" className="w-full h-[600px] object-cover transition-transform duration-[2000ms] group-hover:scale-105" alt="Worship" />
                    <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                    Worship is a lifestyle of honoring God in everything we do. Our team creates Spirit-led environments where people can personally encounter God's presence through music, art, and technology.
                </p>
            </FadeInOnScroll>
        </div>
      </section>

      {/* Outreach Section */}
      <section id="outreach" className="py-40 bg-brand-ink text-white scroll-mt-48 rounded-[5rem] mx-6">
        <div className="container mx-auto px-12 md:px-24">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <FadeInOnScroll>
                    <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-8">Outreach & Missions</p>
                    <h2 className="font-header font-extrabold text-5xl md:text-8xl mb-12 tracking-tighter leading-none">Living the Gospel.</h2>
                    <div className="space-y-8 text-white/50 text-xl leading-relaxed font-medium">
                        <p>We extend God's love beyond our walls. This is how we live the Gospel—modeling and sharing the life of Christ through servanthood and overwhelming generosity in our neighborhood and beyond.</p>
                        <p>We are committed to demonstrating God's love in practical ways while sharing the hope of the Gospel, partnering with local organizations and global mission efforts to rescue and restore.</p>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl mt-12">
                            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Local Outreach" />
                        </div>
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1542601906970-1419703219ee?q=80&w=1932&auto=format&fit=crop" className="w-full h-full object-cover" alt="Global Missions" />
                        </div>
                    </div>
                </FadeInOnScroll>
            </div>
        </div>
      </section>

      {/* Sozo Ministry Section */}
      <section id="sozo" className="py-40 bg-brand-bg scroll-mt-48">
        <div className="container mx-auto px-6">
            <div className="text-center mb-32">
                <FadeInOnScroll>
                    <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-8">Inner Healing</p>
                    <h2 className="font-accent italic text-6xl md:text-[9rem] leading-none text-brand-ink mb-12 tracking-tighter">Sozo Ministry.</h2>
                    <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-12 italic">
                        "Daughter, take courage. Your faith has made you well (sozo)."
                    </p>
                    <p className="text-gray-400 text-sm uppercase tracking-widest font-extrabold">Matthew 9.22</p>
                </FadeInOnScroll>
            </div>

            <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
                <FadeInOnScroll>
                    <h3 className="font-header font-extrabold text-4xl mb-10 tracking-tight">Complete Wholeness</h3>
                    <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium">
                        <p>Sozo is a Greek word meaning "to save, deliver, make whole, restore, and heal." It reflects God's desire for our complete wholeness spiritually, emotionally, and relationally.</p>
                        <p>A Sozo session is not a counseling session, but rather a time of interacting with Father, Son, and Holy Spirit to identify and remove barriers hindering your relationship with God and your identity.</p>
                        <p className="text-brand-ink font-bold">Our trained Sozo team members walk you through the process of freedom in a gentle, Spirit-led way.</p>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div className="bg-brand-sand p-16 rounded-[4rem] border border-gray-100 shadow-inner">
                        <h4 className="font-header font-extrabold text-[10px] uppercase tracking-[0.4em] text-brand-primary mb-10">Our Approach</h4>
                        <div className="space-y-8">
                            {[
                                "Experience freedom from emotional wounds and pain",
                                "Break unhealthy ties and thought patterns",
                                "Identify and remove barriers to your relationship with God",
                                "Replace lies with God's truth",
                                "Discover your true identity in Christ",
                                "Walk in the destiny God has called you to"
                            ].map((text, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-white border border-brand-primary flex-shrink-0 flex items-center justify-center">
                                        <div className="h-2 w-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <p className="text-brand-ink font-bold leading-tight">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInOnScroll>
            </div>

            {/* Sozo Tools */}
            <div className="mb-40">
                <FadeInOnScroll>
                    <div className="text-center mb-24">
                        <h3 className="font-accent italic text-5xl text-brand-ink">Tools for Freedom</h3>
                    </div>
                </FadeInOnScroll>
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { 
                            title: "The Father Ladder", 
                            subtitle: "Restoring Divine Connections", 
                            desc: "Early relationships shape your perception of God. We identify and heal areas where past experiences may have distorted your view of the Father, Jesus, or Holy Spirit." 
                        },
                        { 
                            title: "The Wall", 
                            subtitle: "Breaking Through Barriers", 
                            desc: "Obstacles often form from past hurts and false beliefs. As each brick is identified, you'll have the opportunity to invite Jesus into these areas for healing." 
                        },
                        { 
                            title: "Presenting Jesus", 
                            subtitle: "Healing in His Presence", 
                            desc: "This powerful tool invites Jesus into painful memories to bring His healing perspective. Many report seeing past events from a new perspective as Jesus reveals His truth." 
                        }
                    ].map((tool, idx) => (
                        <FadeInOnScroll key={tool.title} style={{ transitionDelay: `${idx * 150}ms` }}>
                            <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 h-full flex flex-col group hover:shadow-2xl transition-all duration-700">
                                <h5 className="font-header font-extrabold text-2xl text-brand-ink mb-2 leading-tight group-hover:text-brand-primary transition-colors">{tool.title}</h5>
                                <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-8">{tool.subtitle}</p>
                                <p className="text-gray-500 leading-relaxed font-medium">{tool.desc}</p>
                            </div>
                        </FadeInOnScroll>
                    ))}
                </div>
            </div>

            {/* Sozo Journey Steps */}
            <div className="mb-40 py-24 bg-brand-sand rounded-[5rem] px-12">
                <div className="text-center mb-20">
                    <h3 className="font-accent italic text-4xl text-brand-ink">Begin Your Journey</h3>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Prepare", text: "Reflect on areas where you desire freedom. Come with an open heart." },
                        { step: "02", title: "Reach Out", text: "Email us at info@urfellowship.com with your name and request." },
                        { step: "03", title: "Schedule", text: "We'll match you with a team for a 2-hour session that fits your needs." },
                        { step: "04", title: "Partner", text: "A suggested $40 donation supports the ministry and helps others receive care." }
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-brand-ink text-white flex items-center justify-center font-bold mb-6 shadow-xl">{s.step}</div>
                            <h4 className="font-header font-extrabold text-lg mb-4 uppercase tracking-widest">{s.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sozo FAQ Section */}
            <div className="max-w-4xl mx-auto mb-40">
                <div className="text-center mb-16">
                    <h3 className="font-accent italic text-4xl text-brand-ink">Frequently Asked Questions</h3>
                </div>
                <div className="bg-white rounded-[4rem] p-12 md:p-16 shadow-xl border border-gray-100">
                    {sozoFaqs.map(faq => (
                        <BeliefAccordion key={faq.q} title={faq.q}>
                            <p className="text-gray-500 font-medium leading-relaxed">{faq.a}</p>
                        </BeliefAccordion>
                    ))}
                </div>
            </div>

            {/* Start Journey CTA */}
            <FadeInOnScroll>
                <div className="bg-brand-ink text-white p-20 md:p-32 rounded-[5rem] text-center relative overflow-hidden">
                    <h3 className="font-accent italic text-5xl md:text-8xl mb-10 leading-none tracking-tighter">Begin your <br />healing journey.</h3>
                    <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed mb-16 font-medium">Taking the first step toward inner healing is a courageous decision. Reach out today to schedule a session.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a href="mailto:info@urfellowship.com" className="bg-brand-primary text-brand-ink px-16 py-6 rounded-full font-header font-extrabold uppercase tracking-widest text-[10px] shadow-2xl hover:bg-white hover:scale-105 transition-all">Schedule a Session</a>
                        <div className="flex items-center justify-center gap-4 text-white/40 text-[10px] font-extrabold uppercase tracking-[0.2em]">
                            Sessions last approximately 2 hours
                        </div>
                    </div>
                </div>
            </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;
