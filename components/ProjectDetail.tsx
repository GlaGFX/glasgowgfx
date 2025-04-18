interface ProjectDetailProps {
  project: {
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    content: string;
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="text-primary text-sm font-semibold mb-2">
          {project.category}
        </div>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{project.description}</p>
      </div>

      <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden">
        <img 
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose max-w-none">
        {project.content}
      </div>
    </div>
  );
}