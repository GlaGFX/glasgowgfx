'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const HomePageClient: React.FC = () => {
  // Add any necessary client-side logic, state, or effects here if needed later
  // For now, it just renders the sections

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePageClient;