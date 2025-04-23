'use server';

import { z } from 'zod';


// Define a schema for the form data using Zod
const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  projectType: z.string().optional(), // Optional field
  message: z.string().min(1, { message: "Message is required." }),
});

// Define the type for the state we'll return from the action
export type ContactFormState = {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function sendContactMessage(
  prevState: ContactFormState, // Previous state (useful for progressive enhancement)
  formData: FormData
): Promise<ContactFormState> {
  // Validate form data using the Zod schema
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    projectType: formData.get('projectType'),
    message: formData.get('message'),
  });

  // If validation fails, return errors
  if (!validatedFields.success) {
    console.error("Validation Errors:", validatedFields.error.flatten().fieldErrors);
    return {
      message: "Validation failed. Please check the fields.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // If validation succeeds, proceed (placeholder for sending email)
  const { name, email, projectType, message } = validatedFields.data;
  console.log("Received Contact Form Data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Project Type:", projectType || "N/A");
  console.log("Message:", message);

  // Return success since we're just validating for now
  return {
    message: "Form validated successfully. Email sending is handled by the API route.",
    success: true,
  };
}