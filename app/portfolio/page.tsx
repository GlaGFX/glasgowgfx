'use client'; // Needed for useState

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
// Removed motion import as it wasn't used in the final structure provided by user
import { FiArrowRight } from 'react-icons/fi';
import { projects, categories } from '../../data/projects'; // Import centralized data

// Metadata can't be dynamically generated in 'use client' components easily.
// We'll keep the static one for now, or move it to a parent server component if needed later.
// export const metadata: Metadata = {
//   title: 'Our Work | Glasgow GFX',
//   description: 'Explore our portfolio of digital design, development, and creative projects.',
// };

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
            Our Work
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of digital experiences created with passion, precision, and purpose.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full border transition hover:bg-primary hover:border-primary ${
              activeCategory === 'All'
                ? 'bg-primary border-primary text-white'
                : 'bg-white/10 text-white border-white/20'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition hover:bg-white/10 hover:text-white ${
                activeCategory === category
                  ? 'bg-white/20 text-white border-white/30' // Style for active category
                  : 'bg-white/5 text-gray-300 border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        {/* Ensure Tailwind grid template columns/rows are configured if using arbitrary values like project.size */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(250px,auto)]">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              // Apply dynamic sizing class from project data
              className={`group relative overflow-hidden rounded-2xl ${project.size} transition-transform duration-500 hover:-translate-y-2`}
            >
              {/* Background Image with Gradient Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                {/* Apply dynamic gradient color from project data */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-90`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
                <div>
                  <div className="text-xs font-semibold tracking-wide uppercase mb-2 opacity-80">
                    {project.category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.description}</p>
                </div>

                <div className="mt-4 flex items-center font-medium text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  View Project <FiArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Have a project in mind? We'd love to collaborate with you to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
          >
            Get in Touch <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}