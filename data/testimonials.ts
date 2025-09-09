export interface Testimonial {
  text: string;
  author: {
    name: string;
    title: string;
    avatarInitial: string;
  };
}

export const testimonialsData: Testimonial[] = [
  {
    text: "Aligne Studio has completely transformed my relationship with fitness. The instructors are incredibly knowledgeable, and the minimalist environment allows me to truly focus on my practice. I've never felt stronger or more balanced.",
    author: {
      name: "Sarah Mitchell",
      title: "Marketing Executive",
      avatarInitial: "S"
    }
  },
  {
    text: "After years of back pain, pilates at Aligne Studio has been life-changing. The personalized attention and expert guidance helped me build core strength I never knew I had. This place is truly special.",
    author: {
      name: "David Chen",
      title: "Software Engineer",
      avatarInitial: "D"
    }
  },
  {
    text: "The perfect blend of challenge and mindfulness. Every class at Aligne Studio leaves me feeling centered, strong, and ready to take on the world. The Black Mango Light aesthetic creates such a calming atmosphere.",
    author: {
      name: "Emma Rodriguez",
      title: "Yoga Instructor",
      avatarInitial: "E"
    }
  }
];