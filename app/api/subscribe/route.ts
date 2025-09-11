import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to admin (notification of new subscription)
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: 'New Email Subscription - Aligne Studio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Email Subscription</h2>
          <p>A new user has subscribed to your coming soon page:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Email:</strong> ${email}
          </div>
          <p style="color: #666; font-size: 14px;">
            Subscribed at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Welcome email to subscriber
    const welcomeMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Welcome to Aligne Studio - You\'re on the list!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000; color: #fff; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="font-size: 48px; font-weight: 300; margin: 0; letter-spacing: 2px;">ALIGNE</h1>
            <h2 style="font-size: 24px; font-weight: 300; margin: 5px 0 0 0; letter-spacing: 4px; color: #ccc;">STUDIO</h2>
          </div>
          
          <div style="text-align: center;">
            <h3 style="color: #fff; font-size: 24px; margin-bottom: 20px;">Thank you for joining us!</h3>
            <p style="color: #ccc; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              You're now on our exclusive list and will be the first to know when we launch something extraordinary.
            </p>
            <p style="color: #999; font-size: 14px;">
              We'll be in touch soon with updates on our progress.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Aligne Studio. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(welcomeMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again.' },
      { status: 500 }
    );
  }
}