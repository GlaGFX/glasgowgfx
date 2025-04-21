import React from 'react';
import type { Metadata } from 'next';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Example icons

export const metadata: Metadata = {
  title: 'Contact Us | Glasgow GFX',
  description: 'Get in touch with Glasgow GFX. We\'d love to hear about your project.',
};

const ContactPage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ready to start your next project? Let's talk.
        </p>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6 text-gray-400">
              <p className="flex items-center">
                <FiMail className="mr-3 h-5 w-5 text-primary" />
                <span>hello@glasgowgfx.com</span>
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-3 h-5 w-5 text-primary" />
                <span>+44 141 123 4567</span>
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-3 h-5 w-5 text-primary" />
                <span>07572 221612</span>
              </p>
              <p className="flex items-center">
                <FiMapPin className="mr-3 h-5 w-5 text-primary" />
                <span>The Pentagon Business Centre, 36-38 Washington St, Glasgow G3 8AZ</span>
              </p>
            </div>
            {/* Optional: Add a map here later */}
          </div>

          {/* Contact Form Placeholder */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="How can we help?"></textarea>
              </div>
              <div>
                <button type="submit" className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;