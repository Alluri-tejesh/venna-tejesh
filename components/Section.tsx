// This component is no longer actively used in the new design.
// Sections are styled more specifically within App.tsx.
// Keeping the file for historical purposes or future refactoring if needed, but it can be deleted.
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, icon, children, className = '', titleClassName = '' }) => {
  return (
    <section className={`my-10 md:my-16 ${className}`}>
      {title && (
        <h2 className={`text-3xl font-slab font-bold text-brandGray-dark text-center mb-8 md:mb-12 flex items-center justify-center ${titleClassName}`}>
          {icon && <span className="mr-3 text-brandPurple-DEFAULT text-3xl">{icon}</span>}
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
