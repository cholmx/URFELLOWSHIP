
import type { Sermon, LeadershipMember, Ministry, SmallGroup, VolunteerRole } from '../types';

export const SERMONS: Sermon[] = [
  {
    id: 'sermon-1',
    title: 'Hope in the Valley',
    speaker: 'John Piper',
    series: 'Psalms: Songs of the Heart',
    date: '2024-07-21',
    imageUrl: 'https://images.unsplash.com/photo-1454418243875-2423b473d063?q=80&w=2070&auto=format&fit=crop',
    youtubeVideoId: '2_92k6tG-o0',
    description: 'Discovering unwavering hope and the presence of God even in life\'s darkest moments, through the lens of Psalm 23.',
    topics: ['hope', 'psalm 23', 'trust', 'suffering'],
    isStudyGuidePublished: true,
    summary: "In this message, we explore Psalm 23 to discover that God doesn't promise an absence of valleys, but his presence within them. By focusing on the Shepherd's character, we find the restoration and security needed to face any shadow.",
    discussionQuestions: [
        "What 'valleys' are you currently walking through, and how does the metaphor of a 'shadow' change your perspective?",
        "David says 'I shall not want.' What is the difference between having our whims met and having our needs provided for by the Shepherd?",
        "How can we practically 'lie down in green pastures' in our busy modern lives?",
        "The rod and staff are tools of protection and correction. How do both bring you comfort?"
    ],
    themes: ["Hope", "Trust", "God's Presence", "Restoration"],
    scriptures: ["Psalm 23", "Matthew 11:28"],
    transcript: `(Intro Music fades)
Good morning, church...`
  },
  {
    id: 'sermon-2',
    title: 'The Prodigal God',
    speaker: 'Tim Keller',
    series: 'Parables of Jesus',
    date: '2024-07-14',
    imageUrl: 'https://images.unsplash.com/photo-1594755397851-32d182fe8852?q=80&w=2070&auto=format&fit=crop',
    description: 'A deep dive into the parable of the Prodigal Son, revealing the radical nature of God\'s grace for both the rebellious and the religious.',
    topics: ['grace', 'forgiveness', 'parables', 'luke 15']
  },
  {
    id: 'sermon-3',
    title: 'Love Your Neighbor',
    speaker: 'Jane Smith',
    series: 'Living Out the Gospel',
    date: '2024-07-07',
    imageUrl: 'https://images.unsplash.com/photo-1521404926927-417c83c57564?q=80&w=1974&auto=format&fit=crop',
    description: 'What does it practically mean to love our neighbors as ourselves in our modern, complex world?',
    topics: ['love', 'community', 'service']
  }
];

export const SMALL_GROUPS: SmallGroup[] = [
    {
        id: 'group-1',
        name: 'The Sponseller Group',
        leader: 'Mark & Sarah Sponseller',
        day: 'Tuesdays',
        time: '6:30 PM',
        location: 'Columbiana',
        description: 'A casual group for families and couples focusing on biblical parenting and life rhythms.',
        category: 'Families'
    },
    {
        id: 'group-2',
        name: 'Young Adult Collective',
        leader: 'Ben Miller',
        day: 'Thursdays',
        time: '7:30 PM',
        location: 'Firestone Park / Various',
        description: 'Building community for 20-30s. We talk about faith, career, and living supernaturally.',
        category: 'Young Adults'
    },
    {
        id: 'group-3',
        name: 'Iron & Honor Men',
        leader: 'Dave Richards',
        day: 'Saturdays',
        time: '8:00 AM',
        location: 'Church Cafe',
        description: 'Men gathering to study the Word and encourage one another in our roles as leaders.',
        category: 'Men'
    }
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
    {
        id: 'v-1',
        title: 'Greeter / Host',
        ministry: 'Hospitality',
        description: 'Be the first face people see! Create an invitational atmosphere by welcoming guests at the door.',
        frequency: '1-2 times per month',
        icon: '👋'
    },
    {
        id: 'v-2',
        title: 'Tech & Production',
        ministry: 'Worship',
        description: 'Help manage sound, lyrics, or the live stream to help others treasure His presence.',
        frequency: 'Every 3 weeks',
        icon: '💻'
    },
    {
        id: 'v-3',
        title: 'Kids Small Group Leader',
        ministry: 'Kids',
        description: 'Invest in the next generation by teaching and playing with our Upper Room Kids.',
        frequency: 'Weekly or Bi-Weekly',
        icon: '🎨'
    }
];

export const LEADERSHIP: LeadershipMember[] = [
    {
        name: 'Dr. James Richards',
        role: 'Senior Pastor',
        bio: 'Pastor James has been leading Gracehill for over 15 years with a passion for biblical teaching and authentic community.',
        imageUrl: 'https://picsum.photos/400/400?random=1'
    },
    {
        name: 'Sarah Chen',
        role: 'Worship Pastor',
        bio: 'Sarah leads our congregation in worship each week, crafting services that are both musically excellent and spiritually deep.',
        imageUrl: 'https://picsum.photos/400/400?random=2'
    }
];

export const MINISTRIES: Ministry[] = [
    {
        name: 'Gracehill Kids',
        description: 'A fun and safe environment for children (birth-5th grade) to learn about Jesus on their level.',
        imageUrl: 'https://picsum.photos/800/600?random=21',
        contact: 'Contact: children@gracehill.church'
    }
];
