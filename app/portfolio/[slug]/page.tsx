import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  content: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    category: "Branding",
    description: "Sample project description",
    imageUrl: "/project1.jpg",
    content: "Detailed content about Project 1..."
  },
  // Add other projects matching the slugs from portfolio page
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug);
  
  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <ProjectDetail project={project} />
    </div>
  );
}