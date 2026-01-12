
import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const coreValues = [
    {
        title: "Pursuing Healthy Relationships",
        description: "We thrive through relationships with others as we show up authentically with kindness and with honor. Living this way creates invitational and nurturing communities that love genuinely and risk vulnerability and communicate effectively. When conflicts arise we choose reconciliation over division. We celebrate diversity and create spaces where everyone can belong before they believe. By pursuing healthy relationships we reflect the heart of God who is relational at His core.",
        practices: [
            "We create a culture of honor where we call out the gold in each other",
            "We develop listening skills that seek understanding before resolution",
            "We establish clear boundaries that protect our hearts without building walls",
            "We risk vulnerability that leads to genuine connection",
            "We extend grace that reflects how God has been gracious to us",
        ]
    },
    {
        title: "Accessing Abundant Wholeness",
        description: "We thrive in complete joy and are able to live from abundance because Jesus loves us. He paid for everything we need by His work on the cross. This opened the way for our complete salvation and healing and deliverance. We believe God's desire is for His people to experience wholeness in every area of life. This fullness isn't just for a select few but is available to everyone who follows Jesus.",
        practices: [
            "We approach life from a position of having what we need rather than lack",
            "We receive God's healing for past wounds and present struggles",
            "We embrace both divine intervention and wise stewardship of our bodies and minds",
            "We live with an inheritance mindset rather than an orphan mentality",
            "We extend the wholeness we have received to others around us",
        ]
    },
    {
        title: "Knowing Our Greatness",
        description: "We thrive as we serve with God by ministering in our unique and personal way to the world around us with excellence. We believe there is no spectator Christianity and that inherent in every person is great value and destiny. We help people discover their spiritual gifts and natural talents. We provide opportunities for them to use these gifts to serve others. Each person has a God-given purpose that brings deep satisfaction.",
        practices: [
            "We discover and develop the unique gifts God has given each of us",
            "We serve from a place of identity rather than to earn approval",
            "We pursue excellence without succumbing to perfectionism",
            "We create pathways for everyone to contribute meaningfully",
            "We celebrate the diverse ways God's image is reflected through each person",
        ]
    },
    {
        title: "Owning A Supernatural Lifestyle",
        description: "We thrive in risk and faith and miracles as we partner with the Holy Spirit. We are freed to live a supernatural life instead of living in the brokenness of sin and religious bondage. The same power that raised Jesus from the dead is available to believers today. We create space for God to move supernaturally through prayer for healing and worship. The supernatural should be normal for Christians.",
        practices: [
            "We expect God to work in ways that exceed natural explanation",
            "We develop spiritual sensitivity to hear God's voice and respond to His leading",
            "We pray boldly for healing and miracles and breakthrough",
            "We take faith-filled risks when God prompts us to step out",
            "We balance supernatural expectation with biblical wisdom and character",
        ]
    },
    {
        title: "Treasuring His Presence",
        description: "We thrive in a growing relationship with God through daily interaction with Him in worship and prayer and reading the Word. This relationship brings about a kingdom mindset that allows us to live loved and causes us to be fully alive. When we experience God's presence transformation happens naturally. We prioritize creating environments where people can encounter God personally in corporate worship or private devotion.",
        practices: [
            "We cultivate daily rhythms that create space to connect with God",
            "We approach worship as relationship rather than religious duty",
            "We prioritize God's presence over programs and performance",
            "We create environments where encountering God is accessible to all",
            "We allow His presence to transform us from the inside out",
        ]
    },
    {
        title: "Living the Gospel",
        description: "We thrive as we model and share the life of Christ through a life of servanthood and overwhelming generosity. We want our friends and families and communities to know the amazing love and salvation of Jesus. The good news isn't just for Sundays. It is for everyday life. We demonstrate God's love through practical acts of service and generous giving and sharing our faith in natural relational ways.",
        practices: [
            "We serve others with no strings attached",
            "We give generously of our time and talent and treasure",
            "We share our faith through both words and actions",
            "We advocate for justice and stand with the marginalized",
            "We are good news to our neighborhoods and workplaces and city",
        ]
    }
];

const CoreValuesPage: React.FC = () => {
  return (
    <div className="bg-brand-bg">
      <section className="container mx-auto px-6 mb-24">
        <FadeInOnScroll>
          <p className="font-header text-brand-primary uppercase tracking-[0.4em] text-[10px] font-extrabold mb-6">Foundational DNA</p>
          <h1 className="font-accent italic text-brand-ink text-6xl md:text-[9rem] leading-none tracking-tighter">Core Values.</h1>
          <p className="font-accent italic text-xl md:text-3xl mt-12 text-gray-400 max-w-3xl leading-relaxed">
            When what is important to God becomes precious to us transformation happens naturally.
          </p>
        </FadeInOnScroll>
      </section>

      <section className="py-20 bg-brand-sand rounded-[4rem] mx-6 mb-32">
        <div className="container mx-auto px-12 md:px-24">
            <FadeInOnScroll>
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="font-header font-extrabold text-4xl mb-8 tracking-tight">Living from the Inside Out</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
                            <p>Values shape who we are at our core. They guide our decisions and relationships and daily choices. At Upper Room Fellowship we believe transformation happens when our hearts align with God's heart.</p>
                            <p>As we embrace what matters to God we begin experiencing the freedom and fullness He designed for us. We don't focus on achieving perfection but welcome God's work changing us from within.</p>
                        </div>
                    </div>
                    <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
                        <p>When God's priorities become our own we naturally reflect more of Jesus in our everyday lives. We become carriers of His love and light wherever we go. This includes our homes and workplaces and throughout our community.</p>
                        <p className="text-brand-ink font-bold">The following core values drive everything we do at Upper Room Fellowship.</p>
                    </div>
                </div>
            </FadeInOnScroll>
        </div>
      </section>

      <section className="py-20">
          <div className="container mx-auto px-6">
              {coreValues.map((value, index) => (
                <FadeInOnScroll key={value.title} className="mb-12 last:mb-0">
                    <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-12 md:gap-24 hover:shadow-2xl transition-all duration-700 group">
                        <div className="md:w-1/3">
                            <span className="font-accent italic text-brand-primary text-5xl md:text-8xl mb-8 block opacity-30 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                            <h3 className="font-header font-extrabold text-4xl tracking-tight text-brand-ink mb-8 leading-tight">{value.title}</h3>
                            <div className="w-12 h-1 bg-brand-primary"></div>
                        </div>
                        <div className="md:w-2/3">
                            <div className="text-gray-500 text-lg leading-relaxed space-y-6 font-medium">
                                {value.description.split('\n\n').map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                            </div>
                            <div className="mt-16 pt-12 border-t border-gray-100">
                                <h4 className="font-header font-extrabold text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-8">In Practice</h4>
                                <ul className="grid sm:grid-cols-2 gap-6">
                                    {value.practices.map((practice, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg className="flex-shrink-0 h-4 w-4 text-brand-primary mt-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-400 text-sm font-bold tracking-tight leading-tight">{practice}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
              ))}
          </div>
      </section>

      <section className="py-40 bg-brand-ink text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
             <FadeInOnScroll>
                <h2 className="font-accent italic text-5xl md:text-8xl mb-12 leading-tight">Living from the inside out.</h2>
                <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                    Jesus showed us what these values look like in action and we are doing our best to follow His example. 
                </p>
                <p className="text-brand-primary font-accent italic text-3xl">"There truly is a reward for those who live for God"</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-4">Psalm 58.11b NLT</p>
             </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
};

export default CoreValuesPage;
