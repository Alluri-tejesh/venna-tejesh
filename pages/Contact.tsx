import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Button from '../components/Button';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Assumes backend is running on port 5000
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-primary-600 mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Get in Touch</h2>
        <p className="text-lg text-neutral-600">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-100 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="h-16 w-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-2">
            <Mail size={32} />
          </div>
          
          <h3 className="text-xl font-semibold text-neutral-900">Email Me</h3>
          <p className="text-neutral-600">
            The best way to reach me is via email.
          </p>
          
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <a 
          href={PERSONAL_INFO.linkedin}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 bg-white border border-neutral-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group"
        >
          <Linkedin className="mr-3 text-neutral-500 group-hover:text-[#0077b5] transition-colors" />
          <span className="font-medium text-neutral-700">Connect on LinkedIn</span>
        </a>
        
        <a 
          href={PERSONAL_INFO.github}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 hover:shadow-sm transition-all group"
        >
          <Github className="mr-3 text-neutral-500 group-hover:text-black transition-colors" />
          <span className="font-medium text-neutral-700">Follow on GitHub</span>
        </a>
      </div>

      <div className="mt-16 border-t border-neutral-200 pt-10">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Send a Message</h3>
        
        {status === 'success' ? (
          <div className="rounded-lg bg-green-50 p-6 flex flex-col items-center justify-center text-center border border-green-100">
            <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
            <h4 className="text-lg font-medium text-green-900">Message Sent!</h4>
            <p className="text-green-700 mt-1">Thanks for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-medium text-green-700 hover:text-green-800 underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 disabled:bg-neutral-50 disabled:text-neutral-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 disabled:bg-neutral-50 disabled:text-neutral-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'submitting'}
                className="w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 disabled:bg-neutral-50 disabled:text-neutral-500"
                placeholder="Hi, I'd like to discuss a project..."
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="rounded-md bg-red-50 p-4 flex items-start">
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3" />
                <p className="text-sm text-red-700">
                  Failed to connect to the server. Please ensure the backend is running, or use the direct email link above.
                </p>
              </div>
            )}

            <Button className="w-full md:w-auto" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;