
export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  series: string;
  date: string;
  imageUrl: string;
  videoUrl?: string;
  audioUrl?: string;
  youtubeVideoId?: string;
  description: string;
  topics: string[];
  transcript?: string;
  summary?: string;
  discussionQuestions?: string[];
  themes?: string[];
  scriptures?: string[];
  isStudyGuidePublished?: boolean; // New: Flag to show AI tools to public
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Ministry {
  name: string;
  description: string;
  imageUrl: string;
  contact: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string; 
  location: string;
  imageUrl: string;
  description: string;
  category: 'Event' | 'Class';
}

export interface SmallGroup {
  id: string;
  name: string;
  leader: string;
  day: string;
  time: string;
  location: string;
  description: string;
  category: 'Families' | 'Men' | 'Women' | 'Young Adults' | 'General';
}

export interface VolunteerRole {
  id: string;
  title: string;
  ministry: string;
  description: string;
  frequency: string;
  icon: string;
}
