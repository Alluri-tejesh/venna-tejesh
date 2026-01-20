import React from 'react';
import { ArrowRight, Download, Award, Briefcase, Code } from 'lucide-react';
import Button from '../components/Button';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
            Building intelligent <br className="hidden md:block" />
            <span className="text-primary-600">data systems</span> & AI agents.
          </h1>
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl">
            I'm {PERSONAL_INFO.name}, a {PERSONAL_INFO.role}. {PERSONAL_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/experience">
              View Experience <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" href={PERSONAL_INFO.resumeLink}>
              Download Resume <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-t border-neutral-200 pt-12">
        <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
          Key Highlights
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start">
            <div className="p-2 bg-blue-50 rounded-lg mr-4">
              <Briefcase className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Associate Developer @ MassMutual</h3>
              <p className="text-sm text-neutral-600">Building enterprise GenAI & Data solutions.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="p-2 bg-blue-50 rounded-lg mr-4">
              <Award className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Hackathon Winner</h3>
              <p className="text-sm text-neutral-600">1st Place GenAI Hackathon 2025.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="p-2 bg-blue-50 rounded-lg mr-4">
              <Code className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Data Engineer & GenAI Developer</h3>
              <p className="text-sm text-neutral-600">AWS Bedrock, Databricks, RAG pipelines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;