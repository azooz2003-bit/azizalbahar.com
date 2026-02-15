export interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconDark?: string;
  links: {
    github?: string;
    website?: string;
    appStore?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  icon: string;
}

export interface WritingEntry {
  id: string;
  title?: string;
  excerpt: string;
  content: string;
  category: "thought" | "article";
  date: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  youtubeId: string;
  thumbnail?: string;
}
