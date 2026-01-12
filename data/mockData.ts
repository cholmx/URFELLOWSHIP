
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
    summary: "In this message we explore Psalm 23 to discover that God doesn't promise an absence of valleys but his presence within them. By focusing on the Shepherd's character we find the restoration and security needed to face any shadow.",
    discussionQuestions: [
        "What valleys are you currently walking through and how does the metaphor of a shadow change your perspective?",
        "David says I shall not want. What is the difference between having our whims met and having our needs provided for by the Shepherd?",
        "How can we practically lie down in green pastures in our busy modern lives?",
        "The rod and staff are tools of protection and correction. How do both bring you comfort?"
    ],
    themes: ["Hope", "Trust", "God's Presence", "Restoration"],
    scriptures: ["Psalm 23", "Matthew 11:28"],
    transcript: `(Intro Music fades)
Good morning church...`
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
    }
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
    {
        id: 'v-1',
        title: 'Greeter / Host',
        ministry: 'Hospitality',
        description: 'Be the first face people see. Create an invitational atmosphere by welcoming guests at the door.',
        frequency: '1-2 times per month',
        icon: '01'
    },
    {
        id: 'v-2',
        title: 'Tech & Production',
        ministry: 'Worship',
        description: 'Help manage sound or lyrics or the live stream to help others treasure His presence.',
        frequency: 'Every 3 weeks',
        icon: '02'
    },
    {
        id: 'v-3',
        title: 'Kids Small Group Leader',
        ministry: 'Kids',
        description: 'Invest in the next generation by teaching and playing with our Upper Room Kids.',
        frequency: 'Weekly or Bi-Weekly',
        icon: '03'
    }
];

export const LEADERSHIP: LeadershipMember[] = [
    {
        name: 'Dr. James Richards',
        role: 'Senior Pastor',
        bio: 'Pastor James has been leading Upper Room for over 15 years with a passion for biblical teaching and authentic community.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    },
    {
        name: 'Sarah Chen',
        role: 'Worship Pastor',
        bio: 'Sarah leads our congregation in worship each week. She crafts services that are both musically excellent and spiritually deep.',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    }
];
