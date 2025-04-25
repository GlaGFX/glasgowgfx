interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  skills: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Johnson",
    role: "Creative Director",
    bio: "With 10+ years in design leadership, Alex specializes in brand strategy and visual storytelling. Passionate about creating memorable user experiences that drive engagement.",
    imageUrl: "/Images/Team/alex-johnson.jpg",
    skills: ["UI/UX Design", "Brand Strategy", "Creative Direction"]
  },
  {
    name: "Sam Taylor",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in modern web technologies. Focused on building performant, accessible, and maintainable applications.",
    imageUrl: "/Images/Team/sam-taylor.jpg",
    skills: ["React", "TypeScript", "Node.js", "Next.js"]
  },
  {
    name: "Jordan Smith",
    role: "Marketing Specialist",
    bio: "Digital marketing expert with a focus on data-driven strategies. Specializes in SEO, content marketing, and social media campaigns.",
    imageUrl: "/Images/Team/jordan-smith.jpg",
    skills: ["SEO", "Content Strategy", "Social Media", "Analytics"]
  }
];