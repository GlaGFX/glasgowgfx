/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types" />

// Wildcard type declarations for components
declare module '@/components/*' {
  import { FC } from 'react';
  const Component: FC;
  export default Component;
}

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