import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import Button from '@/components/Button';

const Projects: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-primary-600 mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Selected Work</h2>
        <p className="text-lg text-neutral-600 max-w-2xl">
          A collection of projects ranging from data infrastructure migrations to cutting-edge GenAI applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>


      <div className="mt-16 flex justify-end pt-8 border-t border-neutral-100">
        <Button to="/contact" variant="outline" className="group">
          Get in Touch<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      
    </div>
  );
};

export default Projects;