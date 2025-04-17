import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
// import { projects } from '@/data/portfolioData'; // Import project data later

// Optional: Add metadata specific to the Portfolio page
export const metadata: Metadata = {
  title: 'Portfolio | Glasgow GFX',
  description: 'Explore the design projects created by Glasgow GFX.',
};

// Placeholder data structure (replace with import from data/portfolioData.ts)
const projects = [
  { id: '1', slug: 'project-1', title: 'Project Alpha', description: 'A stunning web presence.', imageUrl: '/placeholders/project1.jpg' },
  { id: '2', slug: 'project-2', title: 'Project Beta', description: 'Engaging mobile experience.', imageUrl: '/placeholders/project2.jpg' },
  { id: '3', slug: 'project-3', title: 'Project Gamma', description: 'Bold branding identity.', imageUrl: '/placeholders/project3.jpg' },
  { id: '4', slug: 'project-4', title: 'Project Delta', description: 'Innovative UI/UX design.', imageUrl: '/placeholders/project4.jpg' },
];

const PortfolioPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Our Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/portfolio/${project.slug}`} key={project.id} className="group block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border-gray-700">
            {/* Placeholder Image - Replace with actual Image component if using */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
              {/* <Image src={project.imageUrl} alt={project.title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/> */}
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;