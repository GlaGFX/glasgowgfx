import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  // Extract budget along with other fields
  const { name, email, message, budget } = await request.json();

  // Basic validation (budget is optional, so no need to check here)
  if (!name || !email || !message ) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    // Verify email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid email format'
      }, { status: 400 });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify Gmail credentials
    try {
      await transporter.verify();
    } catch (authError) {
      console.error('Gmail authentication failed:', authError);
      return NextResponse.json({
        success: false,
        message: 'Email service configuration error. Please try again later.'
      }, { status: 500 });
    }

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's name and email
      to: process.env.GMAIL_USER, // Your Gmail address to receive emails
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''} // Include budget in HTML email if provided
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to send message due to a server error. Please try again later.'
    }, { status: 500 });
  }
}