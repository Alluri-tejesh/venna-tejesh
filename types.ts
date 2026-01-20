export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}