import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Harmony Finance Platform",
    category: "UI/UX Design",
    description: "A comprehensive redesign focused on accessibility and user experience.",
    client: "Harmony Finance Corp",
    date: "April 2025",
    services: ["UX Research", "UI Design", "Prototyping", "User Testing"],
    challenge: "Harmony Finance needed a complete overhaul of their digital banking platform to improve accessibility, reduce user friction, and modernize their visual identity while maintaining trust and security.",
    approach: "We conducted extensive user research with diverse user groups to identify pain points in the existing platform. Our design process emphasized inclusive design principles, with multiple iterations and usability testing at each stage.",
    outcome: "The redesigned platform saw a 42% increase in user satisfaction scores, 27% reduction in support tickets, and a 35% improvement in task completion rates. The new design was successfully implemented across web and mobile applications.",
    imageUrl: "/Images/harmoney-finance.png",
    imageWidth: 1200,
    imageHeight: 800,
    coverImage: "/Images/harmoney-finance.png",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/Images/harmoney-finance.png",
        width: 1200,
        height: 800
      }
    ],
    color: "from-violet-500 to-purple-500",
    size: "md:col-span-2 md:row-span-2 col-span-1 row-span-1",
    slug: "harmony-finance"
  },
  {
    id: 2,
    title: "Lumina Health",
    category: "Brand Identity",
    description: "Creating a cohesive brand identity for a healthcare startup.",
    client: "Lumina Health Technologies",
    date: "March 2025",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    challenge: "Lumina Health, a new telemedicine startup, needed a comprehensive brand identity that would convey trust, innovation, and compassion while standing out in the competitive healthcare space.",
    approach: "We began with extensive market research and stakeholder interviews to understand the company's vision and competitive landscape. This informed our strategic positioning and visual direction, which we refined through collaborative workshops.",
    outcome: "The resulting brand identity has been successfully implemented across all touchpoints. The client reported a 40% increase in investor interest and positive feedback from early user testing groups on the brand's trustworthiness and approachability.",
    imageUrl: "/api/placeholder/400/500?text=Lumina+Health",
    imageWidth: 400,
    imageHeight: 500,
    coverImage: "/api/placeholder/1920/1080?text=Lumina+Health+Cover",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/api/placeholder/1200/800?text=Lumina+Health+1",
        width: 1200,
        height: 800
      },
      {
        url: "/api/placeholder/800/1200?text=Lumina+Health+2",
        width: 800,
        height: 1200
      },
      {
        url: "/api/placeholder/1200/800?text=Lumina+Health+3",
        width: 1200,
        height: 800
      }
    ],
    color: "from-blue-500 to-cyan-500",
    size: "md:col-span-1 md:row-span-1 col-span-1 row-span-1",
    slug: "lumina-health"
  },
  {
    id: 3,
    title: "Scope Project Management",
    category: "Web Application",
    description: "An intuitive project management tool for creative teams.",
    client: "Scope Solutions",
    date: "February 2025",
    services: ["Full-stack Development", "API Integration", "UI Design"],
    challenge: "Existing tools were too complex or lacked specific features needed by creative agencies.",
    approach: "Agile development with continuous feedback from target users.",
    outcome: "Successful launch with positive adoption rates.",
    imageUrl: "/api/placeholder/800/300?text=Scope+PM",
    imageWidth: 800,
    imageHeight: 300,
    coverImage: "/api/placeholder/1920/1080?text=Scope+PM+Cover",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/api/placeholder/1200/800?text=Scope+PM+1",
        width: 1200,
        height: 800
      }
    ],
    color: "from-emerald-500 to-teal-500",
    size: "md:col-span-1 md:row-span-2 col-span-1 row-span-1",
    slug: "scope-project-management"
  },
  {
    id: 4,
    title: "Atlas Travel App",
    category: "Mobile UI Design",
    description: "A navigation-focused app for adventure travelers.",
    client: "Atlas Adventures",
    date: "January 2025",
    services: ["Mobile UI Design", "Prototyping"],
    challenge: "Design an intuitive interface for offline map usage and point-of-interest discovery.",
    approach: "User-centered design focusing on clarity and ease of use in challenging environments.",
    outcome: "Highly rated prototype, pending development.",
    imageUrl: "/api/placeholder/500/300?text=Atlas+Travel+App",
    imageWidth: 500,
    imageHeight: 300,
    coverImage: "/api/placeholder/1920/1080?text=Atlas+Travel+Cover",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/api/placeholder/800/1200?text=Atlas+Travel+1",
        width: 800,
        height: 1200
      }
    ],
    color: "from-amber-500 to-orange-500",
    size: "md:col-span-1 md:row-span-1 col-span-1 row-span-1",
    slug: "atlas-travel-app"
  },
  {
    id: 5,
    title: "Quantum Analytics Dashboard",
    category: "Data Visualization",
    description: "Complex data made intuitive for business intelligence.",
    client: "Quantum Insights Inc.",
    date: "December 2024",
    services: ["Data Visualization", "Dashboard Design", "Frontend Development"],
    challenge: "Present complex datasets in an easily digestible format for non-technical stakeholders.",
    approach: "Iterative design process focusing on clear visual hierarchy and interactive elements.",
    outcome: "Improved data accessibility and decision-making speed for the client.",
    imageUrl: "/api/placeholder/500/600?text=Quantum+Analytics",
    imageWidth: 500,
    imageHeight: 600,
    coverImage: "/api/placeholder/1920/1080?text=Quantum+Analytics+Cover",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/api/placeholder/1200/800?text=Quantum+Analytics+1",
        width: 1200,
        height: 800
      }
    ],
    color: "from-fuchsia-500 to-pink-500",
    size: "md:col-span-1 md:row-span-2 col-span-1 row-span-1",
    slug: "quantum-analytics"
  },
  {
    id: 6,
    title: "EchoWave Music Platform",
    category: "Interactive Design",
    description: "Innovative music discovery platform with immersive visuals.",
    client: "EchoWave Studios",
    date: "November 2024",
    services: ["Interactive Design", "Frontend Development", "Web Animation"],
    challenge: "Create a unique and engaging music discovery experience beyond standard playlists.",
    approach: "Utilized WebGL and creative coding techniques for dynamic visualizations.",
    outcome: "Award-winning platform praised for its innovative user interface.",
    imageUrl: "/api/placeholder/800/300?text=EchoWave+Music",
    imageWidth: 800,
    imageHeight: 300,
    coverImage: "/api/placeholder/1920/1080?text=EchoWave+Cover",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/api/placeholder/1200/800?text=EchoWave+1",
        width: 1200,
        height: 800
      }
    ],
    color: "from-indigo-500 to-purple-500",
    size: "md:col-span-2 md:row-span-1 col-span-1 row-span-1",
    slug: "echowave-music"
  },
  {
    id: 7,
    title: "Verdant E-commerce",
    category: "Web Development",
    description: "Sustainable products marketplace with intuitive user journey.",
    client: "Verdant Goods",
    date: "October 2024",
    services: ["E-commerce Development", "Custom CMS", "UI/UX Design"],
    challenge: "Build a scalable e-commerce platform focused on sustainability and user trust.",
    approach: "Developed a custom solution using modern web technologies and best practices.",
    outcome: "Successful launch with strong initial sales and positive customer feedback.",
    imageUrl: "/api/placeholder/400/500?text=Verdant+E-commerce",
    imageWidth: 400,
    imageHeight: 500,
    coverImage: "/api/placeholder/1920/1080?text=Verdant+Cover",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/api/placeholder/1200/800?text=Verdant+1",
        width: 1200,
        height: 800
      }
    ],
    color: "from-green-500 to-emerald-500",
    size: "md:col-span-2 md:row-span-1 col-span-1 row-span-1",
    slug: "verdant-ecommerce"
  },
  {
    id: 8,
    title: "Pulse Fitness App",
    category: "Mobile Development",
    description: "Personal training and wellness tracking with social features.",
    client: "Pulse Wellness",
    date: "September 2024",
    services: ["iOS Development", "Android Development", "Backend API"],
    challenge: "Develop a cross-platform fitness app with real-time tracking and social integration.",
    approach: "Native development for optimal performance combined with a robust backend.",
    outcome: "App launched successfully on both platforms, achieving high user engagement.",
    imageUrl: "/api/placeholder/800/500?text=Pulse+Fitness",
    imageWidth: 800,
    imageHeight: 500,
    coverImage: "/api/placeholder/1920/1080?text=Pulse+Fitness+Cover",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/api/placeholder/800/1200?text=Pulse+Fitness+1",
        width: 800,
        height: 1200
      }
    ],
    color: "from-red-500 to-rose-500",
    size: "md:col-span-2 md:row-span-2 col-span-1 row-span-1",
    slug: "pulse-fitness"
  },
  {
    id: 9,
    title: "Dog Grooming by Charlotte",
    category: "Brand Identity",
    description: "Comprehensive branding and digital presence for a professional pet grooming service.",
    client: "Dog Grooming by Charlotte",
    date: "May 2025",
    services: ["Logo Design", "Website Development", "Print Materials", "Digital Listings"],
    challenge: "Charlotte needed a complete brand identity that would appeal to pet owners and stand out in the competitive pet grooming market. She required a professional online and offline presence to build client trust and showcase her services.",
    approach: "We developed a comprehensive branding strategy that included creating a distinctive logo, designing a user-friendly website, producing cohesive print materials, and establishing her business on essential digital platforms.",
    outcome: "The new brand identity and digital presence resulted in increased visibility for Charlotte's business, a professional image that appealed to her target audience, and improved client acquisition through enhanced online discoverability.",
    imageUrl: "/api/placeholder/800/500?text=Dog+Grooming",
    imageWidth: 800,
    imageHeight: 500,
    coverImage: "/api/placeholder/1920/1080?text=Dog+Grooming+Cover",
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    images: [
      {
        url: "/api/placeholder/800/500?text=Dog+Grooming+1",
        width: 800,
        height: 500
      }
    ],
    color: "from-pink-500 to-rose-500",
    size: "md:col-span-2 md:row-span-1 col-span-1 row-span-1",
    slug: "dog-grooming-by-charlotte"
  }
];

export const categories = [...new Set(projects.map(project => project.category))];