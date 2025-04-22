'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard'; // Assuming ProjectCard is correctly imported
import { projects } from '@/data/projects'; // Assuming projects data is correctly imported

export function ProjectsSection() {
  // Displaying only the first 3 projects as in the original page
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="container mx-auto px-6 py-20 md:py-32" id="work">
      <motion.h2
        className="section-title text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 md:mb-16 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Selected Projects
      </motion.h2>

      <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.title} // Assuming project has a unique title or id
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}