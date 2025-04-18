interface ProjectCardProps {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  size?: 'standard' | 'wide' | 'tall' | 'xwide' | 'xtall' | 'large';
}

export default function ProjectCard({
  imageUrl,
  category,
  title,
  description,
  size = 'standard'
}: ProjectCardProps) {
  const heightClasses = {
    standard: 'h-[300px]',
    wide: 'h-[350px]',
    tall: 'h-[500px]',
    xwide: 'h-[350px]',
    xtall: 'h-[500px]',
    large: 'h-[500px]'
  };

  return (
    <div className={`
      project-card rounded-2xl overflow-hidden bg-white/5
      transition-all duration-300 ease-in-out hover:-translate-y-1
      hover:shadow-2xl cursor-pointer
      ${size === 'wide' ? 'md:col-span-2' : ''}
      ${size === 'tall' ? 'md:row-span-2' : ''}
      ${size === 'xwide' ? 'md:col-span-2 lg:col-span-3' : ''}
      ${size === 'xtall' ? 'md:row-span-2 lg:row-span-3' : ''}
      ${size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
    `}>
      <div
        className={`project-image w-full ${heightClasses[size]} bg-cover bg-center relative`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-40"></div>
      </div>
      <div className="project-content p-6">
        <div className="project-category text-primary text-sm font-semibold mb-2">{category}</div>
        <h3 className="project-title text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray text-sm">{description}</p>
      </div>
    </div>
  );
}