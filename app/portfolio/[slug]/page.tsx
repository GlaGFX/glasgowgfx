import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiCalendar, FiTag, FiUsers } from 'react-icons/fi';
import type { Metadata } from 'next';
import { projects } from '../../../data/projects';
import type { Project } from '@/types';


// Dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Glasgow GFX',
      description: 'The requested project could not be found.'
    };
  }

  return {
    title: `${project.title} | Glasgow GFX Portfolio`,
    description: project.description,
    // Add other metadata fields if needed, e.g., open graph images
    // openGraph: {
    //   images: [project.coverImage || project.imageUrl],
    // },
  };
}

// Function to generate static paths if using SSG (optional but good practice)
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return Promise.resolve(
    projects.map((project) => ({
      slug: project.slug,
    }))
  );
}

type PageProps = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function ProjectDetailPage({ params }: PageProps) {
  // Access the slug directly from params
  const { slug } = params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return notFound(); // Trigger 404 page
  }

  // Find next/previous projects for navigation
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;


  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] mb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.coverImage || project.imageUrl})` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-90`}></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              {project.title}
            </h1>
            <div className="text-xl text-white/90 max-w-2xl mb-8">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              {project.date && (
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  {project.date}
                </div>
              )}
              {project.category && (
                <div className="flex items-center">
                  <FiTag className="mr-2" />
                  {project.category}
                </div>
              )}
              {project.client && (
                <div className="flex items-center">
                  <FiUsers className="mr-2" />
                  {project.client}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Back to Portfolio Link */}
        <div className="mb-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-gray-400 hover:text-primary transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to all projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Project Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>

            <div className="space-y-8">
              {project.challenge && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.approach && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              )}

              {project.outcome && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Outcome</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Project Info Sidebar */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-fit">
            <h3 className="text-xl font-semibold mb-6">Project Details</h3>

            <div className="space-y-6">
              {project.client && (
                <div>
                  <h4 className="text-sm uppercase text-gray-400 mb-2">Client</h4>
                  <p className="font-medium">{project.client}</p>
                </div>
              )}

              {project.date && (
                <div>
                  <h4 className="text-sm uppercase text-gray-400 mb-2">Timeline</h4>
                  <p className="font-medium">{project.date}</p>
                </div>
              )}

              {project.services && project.services.length > 0 && (
                <div>
                  <h4 className="text-sm uppercase text-gray-400 mb-2">Services</h4>
                  <ul className="space-y-1">
                    {project.services.map((service, index) => (
                      <li key={index} className="font-medium">{service}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Add a placeholder link or actual link if available */}
              <div>
                <a
                  href="#" // Replace with actual project link if available
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  Visit Live Project <FiExternalLink className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  // Example logic for spanning the last image if odd number
                  className={`rounded-xl overflow-hidden ${project.images && project.images.length % 2 !== 0 && index === project.images.length - 1 ? 'md:col-span-2' : ''}`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy" // Add lazy loading for gallery images
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next/Prev Project Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between">
          <div>
            {prevProject && (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="group flex flex-col items-start"
              >
                <span className="text-sm text-gray-400 mb-1">Previous Project</span>
                <span className="font-medium group-hover:text-primary transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            )}
          </div>

          <div>
            {nextProject && (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group flex flex-col items-end"
              >
                <span className="text-sm text-gray-400 mb-1">Next Project</span>
                <span className="font-medium group-hover:text-primary transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}