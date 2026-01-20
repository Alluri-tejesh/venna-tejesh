import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import Button from '../components/Button';

const Experience: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-primary-600 mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Work Experience</h2>
        <p className="text-lg text-neutral-600">
          My professional journey in building data products and engineering teams.
        </p>
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((job) => (
          <div key={job.id} className="relative pl-8 border-l border-neutral-200">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary-600 border border-white ring-4 ring-white"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-neutral-900">{job.role}</h3>
              <span className="text-sm font-medium text-neutral-500">{job.duration}</span>
            </div>
            
            <div className="mb-4 text-lg font-medium text-primary-600">{job.company}</div>
            
            <p className="text-neutral-600 mb-4 italic">
              {job.description}
            </p>
            
            <ul className="space-y-2">
              {job.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-neutral-700">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400"></span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-end pt-8 border-t border-neutral-100">
        <Button to="/about" variant="outline" className="group">
          Read About Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default Experience;