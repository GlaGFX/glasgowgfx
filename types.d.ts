/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types" />

// Type for dynamic route page props
// Wildcard type declarations for components
declare module '@/components/layout/*' {
  import { FC, ReactNode } from 'react';
  const Component: FC<{children?: ReactNode}>;
  export default Component;
}

declare module '@/components/FeatureCard' {
  import { FC } from 'react';
  interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
  }
  const FeatureCard: FC<FeatureCardProps>;
  export default FeatureCard;
}

declare module '@/components/ProjectCard' {
  import { FC } from 'react';
  interface ProjectCardProps {
    imageUrl: string;
    category: string;
    title: string;
    description: string;
  }
  const ProjectCard: FC<ProjectCardProps>;
  export default ProjectCard;
}

// Type definition for Portfolio Projects
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  client?: string; // Optional for overview, required for detail
  date?: string; // Optional for overview, required for detail
  services?: string[]; // Optional for overview, required for detail
  challenge?: string; // Detail page only
  approach?: string; // Detail page only
  outcome?: string; // Detail page only
  imageUrl: string;
  coverImage?: string; // Detail page hero
  images?: string[]; // Detail page gallery
  color: string; // For gradient overlay
  size: string; // For Bento grid layout
  slug: string;
}
