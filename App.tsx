
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ResumeData, WorkExperience, Award, Training, Education, SkillCategory, Skill, Tool, ContactInfo } from './types';
import {
  PhoneIcon, EmailIcon, LinkedInIcon, StarIcon, ChevronRightIcon, PlusCircleIcon,
  UserIcon, ChatBubbleLeftEllipsisIcon, AcademicCapIcon, TrophyIcon, BookOpenIcon,
  SparklesIcon, BriefcaseIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, CircleStackIcon,
  DatabricksIcon, AWSIcon, AzureIcon, LangflowIcon
} from './constants';

const resumeData: ResumeData = {
  name: "Venna Venkata Alluri Tejesh",
  title: "Senior Data Analyst",
  motto: "Learn to achieve, Explore to excel",
  profileInitial: "T",
  contactInfo: {
    phone: "+91 9701535231",
    email: "tejeshvenna@gmail.com",
    linkedin: "venna-tejesh", // Store just the vanity name for the badge
  },
  education: [
    {
      institution: "Vardhaman College of Engineering",
      degree: "B.Tech",
      field: "Computer Science & Engineering",
      period: "2018 - 2022" // Example
    }
  ],
  skills: [
    {
      categoryName: "Technical Proficiency",
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "Sql", proficiency: 85 },
        { name: "Data Structures", proficiency: 80 }, // Assuming proficiency
        { name: "React Js", proficiency: 80 },
        { name: "Node Js", proficiency: 75 },
        { name: "Javascript", proficiency: 85 },
        { name: "R", proficiency: 70 }, // Assuming proficiency
        { name: "Object Oriented Programming", proficiency: 85 }, // Assuming proficiency
      ],
    }
  ],
  toolsAndPlatforms: [
    { name: "Databricks", iconSvg: "DatabricksIcon" },
    { name: "AWS", iconSvg: "AWSIcon" },
    { name: "Azure AI Search", iconSvg: "AzureIcon" }, // Using AzureIcon
    { name: "Azure", iconSvg: "AzureIcon" },
    { name: "Langflow", iconSvg: "LangflowIcon" },
    { name: "Phi-data", iconSvg: "CircleStackIcon" }, // Generic data icon
  ],
  workExperience: [
    {
      company: "MassMutual",
      role: "Senior Data Analyst",
      period: "August, 2022 - Present",
      responsibilities: [
        "Developed an AI-powered IT Service Desk Agent using AWS Bedrock integrated with ServiceNow, enabling automated ticket classification, intent detection, and natural language responses—reducing average response time by 40%.",
        "Collaborated with the Data Science team to design and implement complex data transformations.",
        "Developed and optimized Azure AI Search for Virtual Assistance Chatbot integration.",
        "Engineered ETL pipelines using Databricks Delta Live Tables for seamless data orchestration.",
        "Conducted detailed performance analysis for investment teams, delivering actionable insights.",
        "Managed data ingestion processes to streamline integration with affinity platforms.",
        "Developed AI-powered applications by integrating Azure AI Search and Generative AI, significantly improving search relevance, content accessibility, and overall user experience for stakeholders, effectively ingesting large volumes of data by processing HTML and PDF pages into structured chunks.",
        "Designed and implemented a Databricks Ingestion Framework, ensuring scalable and efficient data processing.",
      ],
      tags: ["Databricks", "Azure AI Search", "ETL", "Generative AI", "Python", "SQL","AWS Bedrock"]
    },
  ],
  trainings: [
    {
      name: "Knowledge Graphs and Semantic Web Winter School",
      institution: "Texas A&M Kingsville",
    },
  ],
  awardsAndHonors: [
    { name: "Gen AI Hacakthon Winner", issuer: "MassMutual" },
    { name: "Pat On Back", issuer: "MassMutual" },
  ],
};

const toolIconComponents: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  DatabricksIcon, AWSIcon, AzureIcon, LangflowIcon, CircleStackIcon, CodeBracketIcon
};


// Main Header Component
const ResumeHeader: React.FC<{ name: string, title: string, motto: string, initial: string }> = ({ name, title, motto, initial }) => (
  <header className="bg-brandPurple-dark text-white py-10 sm:py-12 md:py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
        {/* Decorative background elements if desired */}
    </div>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
      <div className="text-center md:text-left mb-10 md:mb-0">
        <p className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-slab font-bold tracking-tight">{name}</p>
        <p className="text-lg sm:text-xl md:text-2xl text-brandPurple-lighter mt-2">{title}</p>
        <p className="text-base sm:text-lg text-brandPurple-lightest italic mt-3">"{motto}"</p>
        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center">
          <a href="#contact" className="w-full sm:w-auto bg-white text-brandPurple-dark font-semibold px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg shadow-md hover:bg-brandPurple-lightest transition-colors duration-300 text-center">
            Contact Me
          </a>
          <a href="#experience" className="w-full sm:w-auto border-2 border-white text-white font-semibold px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg hover:bg-white hover:text-brandPurple-dark transition-colors duration-300 text-center">
            View Experience
          </a>
        </div>
      </div>
      <div className="bg-brandPurple-light w-28 h-28 sm:w-32 md:w-40 lg:w-48 rounded-full flex items-center justify-center shadow-xl mt-6 md:mt-0">
        <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-slab font-bold">{initial}</span>
      </div>
    </div>
  </header>
);

// Work Experience Card
const WorkExperienceCard: React.FC<{ experience: WorkExperience }> = ({ experience }) => (
  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg mb-6 sm:mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
      <div className="mb-2 sm:mb-0">
        <h3 className="text-xl sm:text-2xl font-semibold text-brandPurple-dark">{experience.company}</h3>
        <p className="text-md sm:text-lg font-medium text-brandGray-dark">{experience.role}</p>
      </div>
      <span className="text-xs sm:text-sm text-brandGray-DEFAULT pt-1 sm:pt-0 whitespace-nowrap">{experience.period}</span>
    </div>
    <ul className="space-y-2 mt-3 mb-4">
      {experience.responsibilities.map((resp, index) => (
        <li key={index} className="flex items-start text-sm sm:text-base text-brandGray-dark">
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brandPurple mr-2 mt-1 flex-shrink-0" />
          <span>{resp}</span>
        </li>
      ))}
    </ul>
    {experience.tags && experience.tags.length > 0 && (
      <div className="mt-4">
        {experience.tags.map(tag => (
          <span key={tag} className="inline-block bg-brandPurple-lightest text-brandPurple-dark text-xs font-semibold mr-2 mb-2 px-2.5 py-1 sm:px-3 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

// Skill Proficiency Item
const SkillProgressItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-xs sm:text-sm font-medium text-brandGray-dark">{skill.name}</span>
      <span className="text-xs sm:text-sm font-medium text-brandPurple">{skill.proficiency}%</span>
    </div>
    <div className="w-full bg-brandGray-light rounded-full h-2 sm:h-2.5">
      <div
        className="bg-brandPurple h-2 sm:h-2.5 rounded-full"
        style={{ width: `${skill.proficiency}%` }}
        aria-valuenow={skill.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
      ></div>
    </div>
  </div>
);

// Tool Item
const ToolItem: React.FC<{ tool: Tool }> = ({ tool }) => {
  const IconComponent = tool.iconSvg ? toolIconComponents[tool.iconSvg] : CodeBracketIcon; // Fallback Icon
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-brandPurple mb-1.5 sm:mb-2" />
      <span className="text-xs sm:text-sm font-medium text-brandGray-dark text-center">{tool.name}</span>
    </div>
  );
};

const SectionTitle: React.FC<{ title: string, icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>, titleColorClass?: string, iconColorClass?: string }> = 
  ({ title, icon, titleColorClass = "text-brandGray-dark", iconColorClass = "text-brandPurple" }) => (
  <h2 className={`text-2xl sm:text-3xl font-slab font-bold text-center mb-8 sm:mb-10 flex items-center justify-center ${titleColorClass}`}>
    {icon && <span className={`mr-2 sm:mr-3 ${iconColorClass}`}>{React.cloneElement(icon, { className: "w-7 h-7 sm:w-8 sm:h-8" })}</span>}
    {title}
  </h2>
);


const App: React.FC = () => {
  const { name, title, motto, profileInitial, contactInfo, education, skills, toolsAndPlatforms, workExperience, trainings, awardsAndHonors } = resumeData;

  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setSendSuccess(null);
    setSendError(null);

    // IMPORTANT: Replace with your EmailJS Service ID, Template ID, and User ID (Public Key)
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const USER_ID = 'YOUR_USER_ID'; // This is your Public Key from EmailJS

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target as HTMLFormElement, USER_ID)
      .then((result) => {
        console.log('EmailJS success:', result.text);
        setSendSuccess(true);
        (event.target as HTMLFormElement).reset();
      }, (error) => {
        console.error('EmailJS error:', error.text);
        setSendError('Failed to send message. Please try again later.');
        setSendSuccess(false);
      })
      .finally(() => {
        setIsSending(false);
      });
  };


  return (
    <div className="font-sans text-brandGray-DEFAULT leading-relaxed">
      <ResumeHeader name={name} title={title} motto={motto} initial={profileInitial} />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Work Experience Section */}
        <section id="experience" className="my-10 sm:my-12 md:my-16">
          <SectionTitle title="Work Experience" icon={<BriefcaseIcon />} />
          {workExperience.map((exp, index) => (
            <WorkExperienceCard key={index} experience={exp} />
          ))}
          <div className="text-center mt-6 sm:mt-8">
            <button className="flex items-center mx-auto text-brandPurple hover:text-brandPurple-dark font-medium transition-colors text-sm sm:text-base">
              <PlusCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              More experiences to be added
            </button>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section id="skills" className="my-10 sm:my-12 md:my-16">
          <SectionTitle title="Skills & Expertise" icon={<SparklesIcon />} />
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Technical Proficiency */}
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-brandPurple-dark mb-4 sm:mb-6 text-center">Technical Proficiency</h3>
              {skills.find(s => s.categoryName === "Technical Proficiency")?.skills.map((skill, index) => (
                <SkillProgressItem key={index} skill={skill} />
              ))}
            </div>

            {/* Tools & Platforms */}
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-brandPurple-dark mb-4 sm:mb-6 text-center">Tools & Platforms</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {toolsAndPlatforms.map((tool, index) => (
                  <ToolItem key={index} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards, Training & Education Section */}
        <section id="recognition" className="my-10 sm:my-12 md:my-16">
           <SectionTitle title="Recognition & Learning" icon={<TrophyIcon />} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Awards & Honors */}
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-brandPurple-dark mb-4 flex items-center">
                <TrophyIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-500" />
                Awards & Honors
              </h3>
              <ul className="space-y-3">
                {awardsAndHonors.map((award, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base text-brandGray-dark">
                    <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0" />
                    <div>
                        <p className="font-medium">{award.name}</p>
                        <p className="text-xs sm:text-sm text-brandGray-DEFAULT">{award.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trainings */}
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-brandPurple-dark mb-4 flex items-center">
                <BookOpenIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-brandPurple-light" />
                Trainings
              </h3>
              <ul className="space-y-3">
                {trainings.map((training, index) => (
                  <li key={index} className="text-sm sm:text-base text-brandGray-dark">
                    <p className="font-medium">{training.name}</p>
                    <p className="text-xs sm:text-sm text-brandGray-DEFAULT">{training.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Education */}
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 lg:col-span-1 md:col-span-2"> {/* Spans full width on md if only two columns */}
              <h3 className="text-lg sm:text-xl font-semibold text-brandPurple-dark mb-4 flex items-center">
                <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-brandPurple-light" />
                Education
              </h3>
              <ul className="space-y-3">
                {education.map((edu, index) => (
                  <li key={index} className="text-sm sm:text-base text-brandGray-dark">
                    <p className="font-medium">{edu.degree} in {edu.field}</p>
                    <p className="text-xs sm:text-sm text-brandGray-DEFAULT">{edu.institution}</p>
                    {edu.period && <p className="text-xs text-brandGray-DEFAULT mt-0.5">{edu.period}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Get In Touch Section */}
      <section id="contact" className="bg-brandPurple-dark text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <SectionTitle 
            title="Get In Touch" 
            icon={<EmailIcon />} 
            titleColorClass="text-white" 
            iconColorClass="text-brandPurple-lighter" 
          />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"> {/* Increased gap slightly */}
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8"> {/* Increased spacing slightly */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-5">Contact Information</h3>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center group">
                <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-brandPurple-light group-hover:text-white transition-colors" />
                <span className="text-base sm:text-lg text-brandPurple-lighter group-hover:text-white transition-colors">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center group">
                <EmailIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-brandPurple-light group-hover:text-white transition-colors" />
                <span className="text-base sm:text-lg text-brandPurple-lighter group-hover:text-white transition-colors">{contactInfo.email}</span>
              </a>              

              <p className="text-sm sm:text-base text-brandPurple-lightest mt-4 sm:mt-5 pt-2">Feel free to reach out for any inquiries or opportunities. I'm always open to discussing new projects and collaborations.</p>
            </div>

            {/* Send a Message Form */}
            <div className="bg-brandPurple p-5 sm:p-6 md:p-8 rounded-xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-brandPurple-lightest mb-1.5">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 sm:pl-3.5 flex items-center pointer-events-none">
                      <UserIcon className="h-4 w-4 sm:h-5 sm:w-5 text-brandPurple-light" aria-hidden="true" />
                    </div>
                    <input type="text" name="name" id="name" required className="text-sm sm:text-base bg-brandPurple-darker focus:ring-brandPurple-light focus:border-brandPurple-light block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-brandPurple-dark rounded-md placeholder-brandPurple-lighter text-white" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-brandPurple-lightest mb-1.5">Your Email</label>
                   <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 sm:pl-3.5 flex items-center pointer-events-none">
                      <EmailIcon className="h-4 w-4 sm:h-5 sm:w-5 text-brandPurple-light" aria-hidden="true" />
                    </div>
                  <input type="email" name="email" id="email" required className="text-sm sm:text-base bg-brandPurple-darker focus:ring-brandPurple-light focus:border-brandPurple-light block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-brandPurple-dark rounded-md placeholder-brandPurple-lighter text-white" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-brandPurple-lightest mb-1.5">Message</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 top-3 sm:top-3.5 pl-3 sm:pl-3.5 flex items-start pointer-events-none">
                      <ChatBubbleLeftEllipsisIcon className="h-4 w-4 sm:h-5 sm:w-5 text-brandPurple-light" aria-hidden="true" />
                    </div>
                  <textarea name="message" id="message" rows={4} required className="text-sm sm:text-base bg-brandPurple-darker focus:ring-brandPurple-light focus:border-brandPurple-light block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-brandPurple-dark rounded-md placeholder-brandPurple-lighter text-white" placeholder="Your message..."></textarea>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full bg-white text-brandPurple-dark font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:bg-brandPurple-lightest transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brandPurple-dark focus:ring-white text-sm sm:text-base disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {sendSuccess === true && <p className="text-sm text-green-300 mt-3 text-center">Message sent successfully!</p>}
                {sendSuccess === false && sendError && <p className="text-sm text-red-300 mt-3 text-center">{sendError}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brandPurple-darker text-brandPurple-lighter text-center py-6 sm:py-8 px-4 sm:px-6">
        <p className="text-xs sm:text-sm">© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <p className="text-xs italic mt-1">"{motto}"</p>
      </footer>
    </div>
  );
};

export default App;
