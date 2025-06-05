export interface ContactInfo {
  phone?: string;
  email?: string;
  linkedin?: string; // e.g., "linkedin.com/in/yourprofile"
}

export interface Skill {
  name: string;
  proficiency: number; // Percentage 0-100
}

export interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export interface Tool {
  name: string;
  iconSvg?: string; // SVG string for the icon
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  tags?: string[]; // Optional: skills/tools used in this role
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period?: string; // Optional: Graduation year or period
}

export interface Award {
  name: string;
  issuer: string;
}

export interface Training {
  name: string;
  institution: string;
}

export interface ResumeData {
  name: string;
  title: string; // e.g., "Senior Data Analyst"
  motto: string; // e.g., "Learn to achieve, Explore to excel"
  profileInitial: string; // e.g., "T"
  contactInfo: ContactInfo;
  education: Education[];
  skills: SkillCategory[];
  toolsAndPlatforms: Tool[];
  workExperience: WorkExperience[];
  trainings: Training[];
  awardsAndHonors: Award[];
  // Projects are omitted from the UI based on the new design image
}