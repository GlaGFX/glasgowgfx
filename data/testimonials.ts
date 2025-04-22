export interface TestimonialAuthor {
  avatarInitial: string;
  name: string;
  title: string;
}

export interface Testimonial {
  text: string;
  author: TestimonialAuthor;
}

// Currently only one testimonial is shown on the page,
// but structuring as an array allows for future expansion (e.g., a carousel).
export const testimonialsData: Testimonial[] = [
  {
    text: "Working with Nexus transformed our digital presence completely. Their strategic approach and attention to detail exceeded our expectations at every step.",
    author: {
      avatarInitial: "JD",
      name: "Jane Doe",
      title: "CEO, Innovate Labs"
    }
  }
  // Add more testimonials here if needed
];