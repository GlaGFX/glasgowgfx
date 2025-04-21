// app/approach/page.tsx
import React from 'react';
import ProcessVisualization from '@/components/ProcessVisualization'; // Adjusted import path assuming components is at root level relative to app

const ApproachPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-4xl font-bold mb-4 text-center">Our Approach</h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        We follow a structured and collaborative process to ensure your project's success, from initial concept to final launch and beyond.
      </p>

      {/* Render the interactive process visualization */}
      <ProcessVisualization />

      {/* Optional: Add any other content relevant to the approach page below */}
      {/*
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Our Approach?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow">Feature 1 description...</div>
          <div className="p-4 border rounded-lg shadow">Feature 2 description...</div>
          <div className="p-4 border rounded-lg shadow">Feature 3 description...</div>
        </div>
      </section>
      */}
    </div>
  );
};

export default ApproachPage;