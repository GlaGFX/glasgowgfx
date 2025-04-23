'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { projects, categories } from '../../data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export default function PortfolioContent() {
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
        <div className="mb-16">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-4">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300/80 dark:border-gray-700/80 bg-gray-100/80 dark:bg-gray-800/80 text-gray-700/90 dark:text-gray-300/90"
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 rounded-full border transition-colors ${
                activeCategory === 'All'
                  ? 'bg-primary/90 border-primary text-white'
                  : 'bg-gray-100/80 dark:bg-gray-800/80 border-gray-300/80 dark:border-gray-700/80 text-gray-700/90 dark:text-gray-300/90 hover:bg-gray-200/80 dark:hover:bg-gray-700/80'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  activeCategory === category
                    ? 'bg-primary/15 dark:bg-primary/25 border-primary/40 text-primary/90 dark:text-primary-light/90'
                    : 'bg-gray-100/80 dark:bg-gray-800/80 border-gray-300/80 dark:border-gray-700/80 text-gray-700/90 dark:text-gray-300/90 hover:bg-gray-200/80 dark:hover:bg-gray-700/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <ProjectCard
                imageUrl={project.imageUrl}
                category={project.category}
                title={project.title}
                description={project.description}
                gridClasses={project.size}
                slug={project.slug}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to start your project?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
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