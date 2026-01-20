import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS, SKILLS } from '../constants';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-primary-600 mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* About Me */}
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Me</h2>
            <div className="prose prose-neutral text-neutral-600 leading-relaxed space-y-4">
              <p>
                I am a Data Engineer and GenAI-focused Software Engineer with 3+ years of experience building 
                production-grade data pipelines, automation systems, and AI-powered internal tools.
              </p>
              <p>
                My expertise lies in architecting solutions using AWS, Databricks, and Large Language Models (LLMs). 
                I focus on reliability, ownership, and creating measurable business impact, from reducing manual 
                support triage times to optimizing large-scale data ingestion pipelines.
              </p>
              <p>
                Currently, I'm solving complex enterprise problems at MassMutual, where I've led initiatives in 
                Service Desk automation and RAG-based knowledge retrieval.
              </p>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Achievements & Awards</h2>
            <div className="space-y-8">
              {ACHIEVEMENTS.map((award) => (
                <div key={award.id} className="p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-white rounded-lg border border-neutral-100 shadow-sm text-primary-600">
                        <Award size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{award.title}</h3>
                        <div className="text-sm text-neutral-500 mb-2">{award.organization} • {award.date}</div>
                        <p className="text-neutral-600 text-sm">{award.description}</p>
                      </div>
                    </div>
                    {award.link && award.link !== '#' && (
                        <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-600 transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-8 flex justify-start border-t border-neutral-100">
            <Button to="/projects" className="group">
              Dive in to Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>

        {/* Sidebar / Skills */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Technical Skills</h2>
            <div className="space-y-8">
              {SKILLS.map((category) => (
                <div key={category.category}>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="inline-block px-3 py-1 bg-white border border-neutral-200 rounded-md text-sm text-neutral-700 hover:border-primary-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default About;