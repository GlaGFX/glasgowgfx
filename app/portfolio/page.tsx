import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: 1,
    imageUrl: "/project1.jpg",
    category: "Branding",
    title: "Project 1",
    description: "Sample project description",
    size: "xwide",
    slug: "project-1"
  },
  {
    id: 2,
    imageUrl: "/project2.jpg",
    category: "Web Design",
    title: "Project 2",
    description: "Sample project description",
    size: "xtall",
    slug: "project-2"
  },
  {
    id: 3,
    imageUrl: "/project3.jpg",
    category: "Illustration",
    title: "Project 3",
    description: "Sample project description",
    size: "square",
    slug: "project-3"
  },
  {
    id: 4,
    imageUrl: "/project4.jpg",
    category: "Animation",
    title: "Project 4",
    description: "Sample project description",
    size: "wide",
    slug: "project-4"
  },
  {
    id: 5,
    imageUrl: "/project5.jpg",
    category: "Print",
    title: "Project 5",
    description: "Sample project description",
    size: "tall",
    slug: "project-5"
  },
  {
    id: 6,
    imageUrl: "/project6.jpg",
    category: "Photography",
    title: "Project 6",
    description: "Sample project description",
    size: "square",
    slug: "project-6"
  },
  {
    id: 7,
    imageUrl: "/project7.jpg",
    category: "UI/UX",
    title: "Project 7",
    description: "Sample project description",
    size: "wide",
    slug: "project-7"
  },
  {
    id: 8,
    imageUrl: "/project8.jpg",
    category: "3D Design",
    title: "Project 8",
    description: "Sample project description",
    size: "tall",
    slug: "project-8"
  },
  {
    id: 9,
    imageUrl: "/project9.jpg",
    category: "Motion Graphics",
    title: "Project 9",
    description: "Sample project description",
    size: "xwide",
    slug: "project-9"
  },
  {
    id: 10,
    imageUrl: "/project10.jpg",
    category: "Packaging",
    title: "Project 10",
    description: "Sample project description",
    size: "xtall",
    slug: "project-10"
  }
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[minmax(200px,auto)] grid-auto-flow-dense">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className={`
              ${project.size === 'wide' ? 'lg:col-span-2' : ''}
              ${project.size === 'tall' ? 'lg:row-span-2' : ''}
              ${project.size === 'square' ? 'lg:col-span-1 lg:row-span-1' : ''}
              ${project.size === 'xwide' ? 'sm:col-span-2 lg:col-span-3' : ''}
              ${project.size === 'xtall' ? 'sm:row-span-2 lg:row-span-3' : ''}
              transition-transform duration-300 hover:scale-[1.02] hover:z-10
            `}
          >
            <ProjectCard
              imageUrl={project.imageUrl}
              category={project.category}
              title={project.title}
              description={project.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}