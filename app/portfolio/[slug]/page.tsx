import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
// import { projects } from '@/data/portfolioData'; // Import project data later

// Placeholder data structure (replace with import from data/portfolioData.ts)
const projects = [
  { id: '1', slug: 'project-1', title: 'Project Alpha', description: 'A stunning web presence.', details: 'Detailed description about Project Alpha...', imageUrl: '/placeholders/project1.jpg', gallery: ['/placeholders/alpha1.jpg', '/placeholders/alpha2.jpg'] },
  { id: '2', slug: 'project-2', title: 'Project Beta', description: 'Engaging mobile experience.', details: 'Detailed description about Project Beta...', imageUrl: '/placeholders/project2.jpg', gallery: ['/placeholders/beta1.jpg', '/placeholders/beta2.jpg'] },
  { id: '3', slug: 'project-3', title: 'Project Gamma', description: 'Bold branding identity.', details: 'Detailed description about Project Gamma...', imageUrl: '/placeholders/project3.jpg', gallery: ['/placeholders/gamma1.jpg', '/placeholders/gamma2.jpg'] },
  { id: '4', slug: 'project-4', title: 'Project Delta', description: 'Innovative UI/UX design.', details: 'Detailed description about Project Delta...', imageUrl: '/placeholders/project4.jpg', gallery: ['/placeholders/delta1.jpg', '/placeholders/delta2.jpg'] },
];

// Function to get project data by slug (replace with actual data fetching logic)
async function getProject(slug: string) {
  // In a real app, fetch this from your data source (CMS, database, file)
  const project = projects.find((p) => p.slug === slug);
  return project;
}

// Define props type including params
type Props = {
  params: { slug: string };
};

// Generate dynamic metadata for SEO
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Glasgow GFX',
    };
  }

  return {
    title: `${project.title} | Portfolio | Glasgow GFX`,
    description: project.description,
    // openGraph: { // Optional: Add Open Graph images
    //   images: [project.imageUrl],
    // },
  };
}

// Generate static paths for SSG (Optional but recommended for performance)
export async function generateStaticParams() {
  // Fetch all project slugs from your data source
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// The actual page component
const ProjectDetailPage = async ({ params }: Props) => {
  const project = await getProject(params.slug);

  // Handle case where project is not found
  if (!project) {
    notFound(); // Triggers the 404 page
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{project.description}</p>

      {/* Main Project Image Placeholder */}
      <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-96 flex items-center justify-center">
        <span className="text-gray-500">Main Image Placeholder ({project.imageUrl})</span>
        {/* <Image src={project.imageUrl} alt={project.title} width={800} height={600} className="w-full h-auto object-contain rounded-lg shadow-md"/> */}
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        {/* Render detailed project description (potentially markdown) */}
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        <p>{project.details}</p>
      </div>

      {/* Image Gallery Placeholder */}
      {project.gallery && project.gallery.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((imgUrl, index) => (
              <div key={index} className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center rounded">
                <span className="text-gray-500 text-sm">Gallery Image Placeholder ({imgUrl})</span>
                {/* <Image src={imgUrl} alt={`${project.title} gallery image ${index + 1}`} width={400} height={300} className="w-full h-full object-cover rounded shadow"/> */}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetailPage;