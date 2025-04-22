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
  // Reverted ProjectCard declaration (size prop handled differently now)
  interface ProjectCardProps {
    imageUrl: string;
    category: string;
    title: string;
    description: string;
    // Size prop removed from here, will be handled internally or passed differently if needed
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
  imageWidth: number;
  imageHeight: number;
  coverImage?: string; // Detail page hero
  coverImageWidth?: number;
  coverImageHeight?: number;
  images?: {
    url: string;
    width: number;
    height: number;
  }[]; // Detail page gallery
  color: string; // For gradient overlay
  // Reverted size type back to string to hold Tailwind classes
  size: string; // For Bento grid layout (Tailwind classes)
  slug: string;
}
