'use server';

import { z } from 'zod';
import sgMail from '@sendgrid/mail'; // Import SendGrid

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

  // --- SendGrid Email Logic ---
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || ''); // Ensure API key is set in .env.local

  const recipientEmail = 'contact@glasgowgfx.com';
  // IMPORTANT: Replace with your verified SendGrid sender email address
  const fromEmail = 'noreply@yourdomain.com';

  const msg = {
    to: recipientEmail,
    from: fromEmail, // Use the verified sender
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Project Type: ${projectType || 'N/A'}
      Message: ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully via SendGrid');
    return {
      message: "Your message has been sent successfully! We'll be in touch soon.",
      success: true,
    };
  } catch (error: any) {
    console.error('SendGrid Error:', error);
    // Log more details if available
    if (error.response) {
      console.error(error.response.body)
    }
    return {
      message: "Failed to send message due to a server error. Please try again later.",
      success: false,
    };
  }
  // --- End SendGrid Email Logic ---
}