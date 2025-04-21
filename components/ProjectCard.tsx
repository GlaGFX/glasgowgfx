import Link from 'next/link';

// Updated props to accept gridClasses string directly
interface ProjectCardProps {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  gridClasses?: string; // Accept Tailwind classes for grid layout
  slug: string;
}

export function ProjectCard({
  imageUrl,
  category,
  title,
  description,
  slug,
  gridClasses = 'col-span-1 row-span-1' // Default to standard size if not provided
}: ProjectCardProps) {
  // Removed internal size keyword logic and heightClasses

  return (
    // Apply gridClasses directly, along with base styles
    <Link href={`/portfolio/${slug}`} className="block h-full">
      <div className={`
        project-card rounded-2xl overflow-hidden bg-white dark:bg-gray-900
        transition-all duration-300 ease-in-out hover:-translate-y-1
        hover:shadow-2xl cursor-pointer
        ${gridClasses}
      `}>
      {/* Use a consistent height for the image container */}
      <div
        className={`project-image w-full h-[300px] bg-cover bg-center relative`} // Consistent height
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-40"></div>
      </div>
      <div className="project-content p-6">
        <div className="project-category text-foreground text-sm font-semibold mb-2">{category}</div>
        <h3 className="project-title text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-gray dark:text-gray-200 text-sm">{description}</p>
      </div>
      </div>
    </Link>
  );
}