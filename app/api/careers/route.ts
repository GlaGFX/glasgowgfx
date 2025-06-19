import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Basic validation
    if (!formData.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create transporter (reuse existing nodemailer config)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CAREERS_EMAIL || process.env.EMAIL_USER,
      subject: 'New Career Interest Submission',
      html: `
        <h2>New Career Interest</h2>
        <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Interests:</strong> ${formData.interests?.join(', ') || 'None'}</p>
        ${formData.otherInterest ? `<p><strong>Other Interest:</strong> ${formData.otherInterest}</p>` : ''}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting career interest:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}