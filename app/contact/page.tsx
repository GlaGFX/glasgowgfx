import React from 'react';
import type { Metadata } from 'next';

// Optional: Add metadata specific to the Contact page
export const metadata: Metadata = {
  title: 'Contact Us | Glasgow GFX',
  description: 'Get in touch with the Glasgow GFX design studio.',
};

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        {/* Contact Information Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
            We'd love to hear about your project or answer any questions you might have. Reach out to us using the details below.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              {/* Replace with actual email or mailto link */}
              <a href="mailto:hello@glasgowgfx.example.com" className="text-blue-600 hover:underline">
                hello@glasgowgfx.example.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              {/* Replace with actual phone number */}
              <p className="text-gray-700 dark:text-gray-400">+44 141 123 4567</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              {/* Replace with actual address */}
              <p className="text-gray-700 dark:text-gray-400">
                123 Design Street<br />
                Glasgow, G1 1AA<br />
                United Kingdom
              </p>
            </div>
          </div>
        </section>

        {/* Placeholder for Contact Form Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          {/*
            Placeholder for a form.
            Implement using a library like react-hook-form and connect to:
            1. A simple service like Formspree (easiest)
            2. A Next.js API Route (requires backend logic)
          */}
          <form className="space-y-4">
             <p className="text-sm text-gray-500 dark:text-gray-400">(Contact form placeholder - implementation needed)</p>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="name" name="name" disabled className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-50" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" disabled className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-50" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} disabled className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-50" placeholder="Your message..."></textarea>
            </div>
            <div>
              <button type="submit" disabled className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
                Send Message (Disabled)
              </button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;