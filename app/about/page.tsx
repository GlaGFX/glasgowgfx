import React from 'react';
import type Metadata from 'next';

// Optional: Add metadata specific to the About page
export const metadata: Metadata = {
  title: 'About Us | Glasgow GFX',
  description: 'Learn more about the team and mission at Glasgow GFX design studio.',
};

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">About Glasgow GFX</h1>

      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {/* Replace with actual mission statement */}
          Our mission is to empower businesses by creating compelling visual identities and intuitive digital experiences. We believe great design solves problems, communicates effectively, and leaves a lasting impression.
        </p>
      </section>

      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
          {/* Replace with team description */}
          We are a collective of creative thinkers, skilled designers, and expert developers united by a passion for excellence. Our diverse backgrounds and collaborative spirit allow us to tackle challenges from unique perspectives.
        </p>
        {/* Optional: Add team member profiles here */}
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 leading-relaxed space-y-2">
          {/* Replace with actual values */}
          <li>Creativity & Innovation</li>
          <li>Client Collaboration & Partnership</li>
          <li>Quality & Attention to Detail</li>
          <li>Integrity & Transparency</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;