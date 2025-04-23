import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects'; // Import project data
import type { Metadata } from 'next';

const SITE_URL = 'https://glasgowgfx.com';
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL);

export const metadata: Metadata = {
  title: 'Gallery | Nexus',
  description: 'Explore our visual portfolio showcasing our best design and development work across various industries and project types.',
  openGraph: {
    title: 'Gallery | Nexus',
    description: 'Explore our visual portfolio showcasing our best design and development work across various industries and project types.',
    url: new URL('/gallery', SITE_URL),
    siteName: "Nexus",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Nexus Design Collective - Our Work Gallery",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Gallery | Nexus',
    description: 'Explore our visual portfolio showcasing our best design and development work across various industries and project types.',
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Nexus Design Collective - Our Work Gallery"
    }],
    creator: "@glasgowgfx"
  },
  metadataBase: new URL(SITE_URL)
};

const GalleryPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
            Gallery
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Browse our collection of work through images
          </p>
        </div>

      {/* Bento Grid Container - Adjust columns and rows as needed */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[minmax(250px,auto)]">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 ${project.size} block`} // Use project.size for grid placement, added block
            passHref
          >
            <Image
              src={project.imageUrl || '/api/placeholder/400/400?text=Placeholder'} // Use imageUrl, provide fallback
              alt={project.title}
              fill // Use fill to cover the container
              sizes="(max-width: 768px) 50vw, 25vw" // Provide sizes for optimization
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Zoom effect on hover
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
              <h3 className="text-lg md:text-xl font-semibold text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-100">
                {project.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  );
};

export default GalleryPage;