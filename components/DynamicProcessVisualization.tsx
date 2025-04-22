"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import ProcessVisualization only on the client-side
const DynamicProcessVisualizationComponent = dynamic(
  () => import('./ProcessVisualization'), // Assuming ProcessVisualization.tsx is in the same components directory
  { ssr: false } // Disable server-side rendering for this component
);

const DynamicProcessVisualization: React.FC = () => {
  return <DynamicProcessVisualizationComponent />;
};

export default DynamicProcessVisualization;