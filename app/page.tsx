'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// Import the new section components
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  // useEffect for smooth scrolling removed - will be handled later or via CSS

  return (
    <main className="relative">
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
