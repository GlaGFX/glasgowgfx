'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer'; // Import nodemailer

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

  // If validation succeeds, proceed with sending the email
  const { name, email, projectType, message } = validatedFields.data;

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify Gmail credentials (optional but good practice)
    try {
      await transporter.verify();
    } catch (authError) {
      console.error('Gmail authentication failed:', authError);
      return {
        message: 'Email service configuration error. Please contact support.',
        success: false,
      };
    }

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Use configured sender email
      replyTo: email, // Set the reply-to field to the user's email
      to: process.env.GMAIL_USER, // Your Gmail address to receive emails
      subject: `Contact Form: ${name} - ${projectType || 'General Inquiry'}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success state
    return {
      message: "Message sent successfully! We'll get back to you soon.",
      success: true,
    };

  } catch (error) {
    console.error('Error sending email via Server Action:', error);
    return {
      message: 'Failed to send message due to a server error. Please try again later.',
      success: false,
    };
  }
}