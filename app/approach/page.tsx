// app/approach/page.tsx
import React from 'react';

const ApproachPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-4xl font-bold mb-4">Our Approach</h1>
      <p className="text-lg mb-4">
        This is the approach page. We'll detail our methodology and process here.
      </p>
      {/* Add more content sections as needed */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Discovery & Strategy</h2>
        <p>Understanding your goals and defining the roadmap.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Design & Prototyping</h2>
        <p>Crafting user-centric designs and interactive prototypes.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Development & Implementation</h2>
        <p>Building robust solutions with clean, efficient code.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Testing & Launch</h2>
        <p>Ensuring quality and deploying for success.</p>
      </section>
    </div>
  );
};

export default ApproachPage;