'use client'; // Required for Framer Motion components

import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaPaintBrush, FaCode, FaRocket, FaLifeRing } from 'react-icons/fa'; // Example icons
import { IconType } from 'react-icons'; // Import IconType

// Define the process steps data structure
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: IconType; // Use IconType for the icon component
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Understanding your vision, goals, target audience, and project requirements through detailed discussions and research.',
    icon: FaSearch,
  },
  {
    id: 2,
    title: 'Design',
    description: 'Creating wireframes, mockups, and prototypes. Focusing on user experience (UX) and user interface (UI) design.',
    icon: FaPaintBrush,
  },
  {
    id: 3,
    title: 'Development',
    description: 'Building the website or application using clean, efficient code and modern technologies. Includes frontend and backend development.',
    icon: FaCode,
  },
  {
    id: 4,
    title: 'Deployment',
    description: 'Thorough testing across devices and browsers, followed by launching the project on the hosting server.',
    icon: FaRocket,
  },
  {
    id: 5,
    title: 'Support',
    description: 'Providing ongoing maintenance, updates, and support to ensure your project runs smoothly and stays up-to-date.',
    icon: FaLifeRing,
  },
];

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children by 0.2 seconds
    },
  },
};

// Animation variants for each step item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring', // Optional: adds a little bounce
      stiffness: 100,
    },
  },
};

const ProcessVisualization = () => {
  return (
    <div className="my-12 px-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Streamlined Process
      </motion.h2>
      <motion.div
        className="relative flex flex-col md:flex-row justify-between items-stretch space-y-8 md:space-y-0 md:space-x-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate when the component mounts / becomes visible
      >
        {processSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              className="flex-1 flex flex-col items-center text-center p-6 border rounded-lg shadow-lg bg-card dark:bg-card-dark hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants} // Use item variants for each step
              whileHover={{ scale: 1.05, y: -5 }} // Add hover effect
              title={step.description} // Add description as HTML title tooltip
            >
              <step.icon className="text-4xl text-primary dark:text-primary-dark mb-3" />
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              {/* Optional: Add a snippet of the description if needed */}
              {/* <p className="text-sm text-muted-foreground">{step.description.substring(0, 50)}...</p> */}
            </motion.div>

            {/* Add connector lines/arrows for medium screens and up, except after the last item */}
            {index < processSteps.length - 1 && (
              <div className="hidden md:flex items-center justify-center flex-shrink-0 mx-2">
                {/* Simple line connector */}
                <div className="w-8 h-1 bg-primary dark:bg-primary-dark rounded"></div>
                {/* Or an arrow (requires more styling or an SVG) */}
                {/* <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
              </div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ProcessVisualization;