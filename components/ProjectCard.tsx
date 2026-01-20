import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
        
        <p className="text-neutral-600 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;