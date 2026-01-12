
import React from 'react';
import { LEADERSHIP } from '../data/mockData';
import type { LeadershipMember } from '../types';
import BeliefAccordion from '../components/BeliefAccordion';
import SubNav from '../components/SubNav';
import FadeInOnScroll from '../components/FadeInOnScroll';

const LeadershipCard: React.FC<{ member: LeadershipMember }> = ({ member }) => (
    <div className="text-center group">
        <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-brand-primary rounded-full translate-x-3 translate-y-3 -z-10 opacity-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <img src={member.imageUrl} alt={member.name} className="w-48 h-48 rounded-full object-cover shadow-xl grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <h3 className="font-header font-bold text-2xl text-brand-ink">{member.name}</h3>
        <p className="font-accent italic text-brand-primary text-lg mb-4">{member.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
    </div>
);

const AboutUsPage: React.FC = () => {
    const beliefs = [
        { 
            title: "The Trinity", 
            content: "We believe in one personal God who created the universe and exists eternally in three distinct persons. Father, Son, and Holy Spirit. They are equal in power and authority and glory. They are so pure and so united they operate as one. God is a being of unimaginably wonderful power and goodness and love. This relational God invites us into community that reflects His nature. The Trinity models perfect relationship where each person honors the others while maintaining distinct identity. This is a pattern for how we engage with one another authentically and with strength." 
        },
        { 
            title: "Jesus Christ", 
            content: "We believe Jesus Christ is the Son of God who laid aside His divine privileges to become human. Born of a virgin, He lived a perfect life of love. He brought the kingdom of heaven to earth. Jesus died on the cross to pay for the sins of the world. He was buried and rose again bodily on the third day. He ascended to heaven and is seated at the right hand of the Father. Jesus is our master and teacher and savior and friend who now reigns forever. Through His finished work complete salvation and healing and deliverance become available to every believer. He paid for everything we need, opening the way for wholeness in every area of life." 
        },
        { 
            title: "The Holy Spirit", 
            content: "We believe in the Holy Spirit who constitutes the third person of the Trinity. He is fully God and co-equal with the Father and Son. The Holy Spirit invites us into authentic partnership rather than demanding religious performance. The Spirit regenerates and indwells every believer in Jesus. He reveals Jesus and guides us into truth and empowers us for daily living. We believe in a distinct experience of Spirit baptism available to all believers which is separate from salvation yet essential for empowered witness. The same power that raised Jesus from the dead is available to believers today making the miraculous normal." 
        },
        { 
            title: "Scripture", 
            content: "We believe that the scriptures of the Old and New Testaments are the inspired written expression of God and are authoritative. The Bible reveals who God is and is intended to bring us into relationship with Him. Scripture stands as the ultimate authority in all matters of faith and practice. We believe God divinely inspired the original authors through the Holy Spirit making Scripture both true and authoritative. Scripture serves as a guardrail for us to know the will of God and test the veracity of all things. All teaching must be firmly rooted in sound biblical study." 
        },
        {
            title: "Humanity & The Fall",
            content: "We believe all people were created in the image of God to enjoy fellowship with Him. This gives every person inherent dignity and worth beyond measure. Inherent in every person is great value and destiny. Yet humanity willfully rejected the Lordship and glory of God by attempting to be our own gods. Because of this fall into sin, sickness and death and judgment entered the world. Human beings are now estranged from God and from each other. This brokenness affects every area of life spiritually and emotionally and physically and relationally creating the need for complete restoration."
        },
        {
            title: "Salvation",
            content: "We believe the blood of Jesus Christ provides the only way for the forgiveness of sin and restoration with God. God freely grants salvation to all who place their faith in Jesus. Salvation cannot be earned. This gift of grace enables wholeness in every area of life. We understand salvation as a past and present and future reality. We have been saved by grace. We are being saved as the Holy Spirit transforms us. We will be saved as God completes His work of redemption in the resurrection of our bodies."
        },
        {
            title: "The Gospel",
            content: "The Gospel represents the good news that God himself has come to rescue us from sin and renew all things in and through the work of Jesus Christ. This good news encompasses the great story of Scripture in four movements. Creation is God's original design for flourishing. The Fall is humanity's rebellion and corruption. Redemption is God's rescue plan culminating in Jesus. Renewal is God's promise to restore all creation under Christ's lordship. We model and share the life of Christ through servanthood and bold generosity."
        },
        {
            title: "The Church",
            content: "We believe in the universal Church which is a diverse assembly of individuals who have faith in Jesus. The Church represents the community through which God wants to bring love and healing and growth to the human race. The Church functions as the body of Christ with Jesus as its head. We believe in the spiritual unity of believers and the holy universal church. We choose reconciliation over division. The Church operates under Spirit-led leadership where a plurality of qualified leaders provides spiritual oversight and protection."
        },
        {
            title: "The Kingdom Of God",
            content: "We believe God does not intend for sin and suffering to get the last word but is at work to redeem and reconcile what He has made. We live in the tension of the Kingdom 'now and not yet'. We pray for His Kingdom to come on earth as it is in heaven. The Kingdom operates through believers who serve with God in their unique and personal way. Each person carries God-given purpose that impacts the kingdom. We engage culture as creative makers rather than mere critics."
        },
        {
            title: "The Return Of Christ",
            content: "We believe in the personal and visible return of Jesus to establish His Kingdom on earth. Upon His return He will bring judgment and separate the righteous from the unrighteous. He will renew the earth and reign as King forever. We believe in the resurrection of both the saved and the lost. God is creating a New Heaven and a New Earth where humans will dwell forever with God. This hope inspires godly living and commitment to the Gospel mission."
        },
        {
            title: "Women In Leadership",
            content: "We believe God gifts both women and men to serve in ministry. This includes exercising leadership gifts as elder and pastor and teacher and other ministry roles. We embrace an egalitarian approach that values the contributions of all believers according to their calling and gifting. Both women and men can and should lead and preach and pastor. Their partnership results in robust ministry that reflects the diverse ways God's image is expressed."
        },
        {
            title: "Marriage & Sexuality",
            content: "We believe in the historically Christian view of marriage as a lifelong one-flesh covenant union between two sexually different persons. We believe all sexual practice outside of marriage constitutes sin. However we express this belief with the heart of Jesus. We welcome all people regardless of sexual practice or orientation to worship with us. Our doors and arms remain open. We seek to be a community where everyone can belong before they believe. We lead with love and compassion."
        },
        {
            title: "Spiritual Formation & Discipleship",
            content: "We believe spiritual formation represents the primary focus of the Christian life. Through daily interaction with God in worship and prayer and reading the Word we forge a kingdom mindset. Discipleship functions as apprenticeship to Jesus in kingdom living. It emphasizes character transformation over religious activity. The Holy Spirit transforms character through divine enablement rather than human effort. This requires moment-by-moment partnership with the Spirit."
        },
        {
            title: "Supernatural Ministry & Spiritual Gifts",
            content: "We believe all spiritual gifts remain active and necessary for the contemporary church. The gifts of the Spirit operate as the Spirit wills for the common good. Partnership with the Holy Spirit enables believers to break free from religious bondage and live supernaturally. We expect God to work in ways that exceed natural explanation. We pray boldly for healing and miracles and breakthrough while balancing supernatural expectation with biblical wisdom."
        },
        {
            title: "Cultural Engagement & Mission",
            content: "We believe the Holy Spirit empowers bold evangelism and confirms the Gospel through supernatural demonstrations. We engage culture as creative makers rather than mere critics. We serve our neighborhoods and workplaces and city with decisive acts of service and generous giving. The good news extends beyond Sunday gatherings into everyday life. We are committed to demonstrating God's love in practical ways while sharing the hope of the Gospel."
        },
        {
            title: "Our Historic Creeds",
            content: "We affirm our unity with the broader Body of Christ through the historic creeds. These include the Apostles' Creed and the Nicene Creed and the National Association of Evangelicals Statement of Faith. These historic statements anchor us in essential Christian doctrine while allowing liberty in non-essential matters. We maintain theological clarity on essentials while extending charity in non-essentials all bound together by love."
        }
    ];
    
    const pageSections = [
        { label: 'Our Story', id: 'story' },
        { label: 'Our Beliefs', id: 'beliefs' },
        { label: 'Leadership', id: 'leadership' },
    ];

  return (
    <div className="bg-brand-bg">
      <section className="container mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
            <FadeInOnScroll>
                <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Our History</p>
                <h1 className="font-accent italic text-brand-ink text-6xl md:text-8xl leading-[0.9] tracking-tight mb-8">
                    Fifty Years of <br />
                    <span className="text-brand-primary">Faithfulness.</span>
                </h1>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <p className="font-header text-gray-500 text-lg md:text-xl leading-relaxed mb-2">
                    The Upper Room Fellowship began in 1971 when believers gathered in an upper room above a veterinarian's office in Columbiana, Ohio.
                </p>
                <p className="text-gray-400 text-sm">United by hunger for God's presence and authentic Christianity.</p>
            </FadeInOnScroll>
        </div>
      </section>

      <SubNav links={pageSections} />

      {/* Story Section */}
      <section id="story" className="py-40 bg-brand-bg scroll-mt-32">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-6 relative">
                    <FadeInOnScroll>
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                            <img src="https://images.unsplash.com/photo-1595183781333-31b0e1a53957?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="History" />
                        </div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-brand-primary/20 -z-10"></div>
                    </FadeInOnScroll>
                </div>
                <div className="lg:col-span-6">
                    <FadeInOnScroll>
                        <h2 className="font-header font-extrabold text-4xl mb-8 tracking-tighter">Rooted in the Spirit.</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
                            <p>Hunger for God's presence drove our first gathering. We wanted to build a community where people could encounter God and build meaningful relationships. For over five decades we have remained committed to being a church that transforms lives through the power of the Holy Spirit.</p>
                            <p>What started as a small gathering has grown into a thriving community. We help people discover their God-given purpose. We help them experience the freedom and fullness Jesus promised. God is calling us to greater impact as we serve Columbiana with the love and power of Jesus Christ.</p>
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section id="beliefs" className="py-40 bg-brand-sand scroll-mt-32 rounded-[5rem]">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-4">Foundation</p>
                    <h2 className="font-accent italic text-5xl text-brand-ink">Our Core Beliefs.</h2>
                    <p className="mt-8 text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Certain truths within Scripture form the essential foundation that unites God's people. We seek to be a living expression of what Jesus embodied.
                    </p>
                </div>
                <div className="bg-white rounded-[4rem] p-12 md:p-16 shadow-xl border border-gray-100">
                    {beliefs.map(belief => (
                        <BeliefAccordion key={belief.title} title={belief.title}>
                            <p className="text-gray-500 font-medium leading-relaxed">{belief.content}</p>
                        </BeliefAccordion>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-40 bg-brand-bg scroll-mt-32">
        <div className="container mx-auto px-6">
            <div className="text-center mb-24">
                <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-4">Our Team</p>
                <h2 className="font-header font-bold text-5xl text-brand-ink tracking-tight">Servant Leaders</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 max-w-4xl mx-auto">
                {LEADERSHIP.map((member, index) => (
                    <FadeInOnScroll key={member.name} style={{ transitionDelay: `${index * 150}ms` }}>
                        <LeadershipCard member={member} />
                    </FadeInOnScroll>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
