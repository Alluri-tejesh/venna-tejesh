import { Project, Experience, Achievement, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Tejesh",
  role: "Associate Developer @ MassMutual",
  tagline: "Data Engineer & GenAI Developer. Building production-grade data pipelines and intelligent AI automation systems.",
  email: "tejeshvenna@gmail.com",
  github: "https://github.com/Alluri-tejesh", 
  linkedin: "https://www.linkedin.com/in/venna-tejesh/",
  resumeLink: "pages/src/TejeshAIE.pdf" 
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'GenAI Service Desk Agent',
    description: 'Automated IT Service Desk agent using AWS Bedrock and ServiceNow APIs. Reduces manual ticket triage and improves resolution time for recurring issues.',
    techStack: ['AWS Bedrock', 'ServiceNow API', 'Python', 'LangChain'],
    link: 'https://www.linkedin.com/posts/venna-tejesh_after-a-whirlwind-week-im-thrilled-to-announce-activity-7328622098157854723-35Be',
    featured: true
  },
  {
    id: '2',
    title: 'HR AI Assistant',
    description: 'Conversational agent for HR Service Delivery. Answers employee queries and intelligently escalates unresolved cases to the correct teams.',
    techStack: ['GenAI', 'RAG', 'Python', 'Azure AI Search'],
    link: 'https://www.linkedin.com/posts/venna-tejesh_hackathon-runnerup-massmutualindia-activity-7154907967128064001-5iwU',
    featured: true
  },
  {
    id: '3',
    title: 'Rice Price Calculator',
    description: 'Lightweight web tool helping farmers estimate production costs, selling prices, and profit margins, replacing manual Excel calculations.',
    techStack: ['Web Development', 'JavaScript', 'Calculator Logic'],
    link: 'https://alluri-tejesh.github.io/rice-price/',
    featured: true
  },
  {
    id: '4',
    title: 'Enterprise RAG Pipelines',
    description: 'Built retrieval-augmented generation systems using Azure AI Search and vector databases to ground LLM responses in internal knowledge.',
    techStack: ['Azure AI Search', 'Vector DB', 'LLMs', 'Python'],
    link: '#'
  },
  {
    id: '5',
    title: 'Investment Data Pipeline',
    description: 'Integrated external Crunchbase data into Affinity by building validation and routing logic, enabling clean, structured data for investment dashboards.',
    techStack: ['Data Engineering', 'Validation', 'API Integration'],
    link: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    company: 'MassMutual',
    role: 'Associate Developer',
    duration: 'Aug 2022 - Present',
    description: 'Developing GenAI automation tools and robust data pipelines for enterprise systems.',
    achievements: [
      'Owned development of a GenAI-powered IT Service Desk automation using AWS Bedrock, reducing manual ticket triage.',
      'Designed and deployed an HR Service Delivery AI agent that answers employee queries and escalates unresolved cases.',
      'Built RAG pipelines using Azure AI Search and vector databases to ground LLM responses in internal knowledge.',
      'Developed and monitored production data pipelines using Databricks, Delta Live Tables, and Airflow.',
      'Partnered with DevOps teams to containerize and deploy GenAI microservices using Docker and Terraform.'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Trailblazer Award',
    organization: 'MassMutual',
    date: '2025',
    description: 'Recognized for driving automation and engineering innovation across multiple enterprise platforms.',
    link: 'https://www.linkedin.com/posts/venna-tejesh_ending-the-year-on-a-high-trailblazer-award-activity-7405131660582780928-c9Tu'
  },
  {
    id: 'a2',
    title: 'GenAI Hackathon Winner',
    organization: 'MassMutual Hackathon',
    date: '2025',
    description: 'Secured 1st place among 50+ teams for building a scalable AI-powered IT Service Desk agent.',
    link: 'https://www.linkedin.com/posts/venna-tejesh_after-a-whirlwind-week-im-thrilled-to-announce-activity-7328622098157854723-35Be'
  },
  {
    id: 'a3',
    title: 'MMI Hackathon Runner-up',
    organization: 'MassMutual India',
    date: '2024',
    description: 'Achieved 2nd place among 40+ teams for developing an HR Service Delivery AI automation solution.',
    link: 'https://www.linkedin.com/posts/venna-tejesh_hackathon-runnerup-massmutualindia-activity-7154907967128064001-5iwU'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Data Engineering',
    skills: ['Databricks', 'Delta Live Tables', 'Apache Airflow', 'ETL/ELT', 'Data Modeling', 'SQL']
  },
  {
    category: 'Generative AI',
    skills: ['AWS Bedrock', 'RAG Pipelines', 'Vector Search', 'Langflow', 'Prompt Engineering', 'Azure AI Search']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (S3, Lambda, IAM)', 'Terraform', 'Docker', 'CI/CD', 'Serverless']
  },
  {
    category: 'Languages & Backend',
    skills: ['Python', 'FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'JavaScript']
  }
];