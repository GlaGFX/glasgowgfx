'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HomePageClient: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const services = [
    {
      title: "Pilates Classes",
      subtitle: "Transform your body and mind with our premium pilates classes in a modern, minimalist environment.",
      categories: ["REFORMER", "MAT", "PRIVATE"]
    },
    {
      title: "Personal Training",
      subtitle: "One-on-one sessions tailored to your specific goals and fitness level.",
      categories: ["STRENGTH", "FLEXIBILITY", "WELLNESS"]
    },
    {
      title: "Wellness Programs",
      subtitle: "Comprehensive wellness programs designed to enhance your overall well-being.",
      categories: ["NUTRITION", "MINDFULNESS", "RECOVERY"]
    }
  ];

  const currentService = services[currentSlide];

  return (
    <div className="min-h-screen relative overflow-hidden pt-20 md:pt-24">
      {/* Main Content Container */}
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Left Content Area */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 relative z-10 min-h-[70vh] lg:min-h-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
          >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 text-foreground leading-tight">
              {currentService.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-light mb-6 md:mb-8 leading-relaxed">
              {currentService.subtitle}
            </p>
            
            {/* Learn More Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-medium tracking-wide"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Navigation Dots - Bottom Left */}
          <div className="absolute bottom-16 sm:bottom-12 left-1/2 lg:left-6 xl:left-12 transform -translate-x-1/2 lg:transform-none flex space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-foreground'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Category Tags - Bottom Left (below dots) */}
          <div className="absolute bottom-6 sm:bottom-4 left-1/2 lg:left-6 xl:left-12 transform -translate-x-1/2 lg:transform-none flex flex-wrap justify-center lg:justify-start space-x-2 sm:space-x-4">
            {currentService.categories.map((category, index) => (
              <span
                key={index}
                className="text-xs font-medium text-gray tracking-widest uppercase"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side - Vertical Brand Text (Desktop) / Horizontal Brand Text (Mobile) */}
        <div className="lg:flex items-center justify-center w-full lg:w-64 xl:w-80 relative">
          {/* Mobile Brand Text - Horizontal */}
          <div className="lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground/20 tracking-wider">
                ALIGNE
              </h2>
            </motion.div>
          </div>

          {/* Desktop Brand Text - Vertical */}
          <div className="hidden lg:block absolute right-8 xl:right-12 top-1/2 transform -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="writing-mode-vertical text-right"
            >
              <h2 className="text-8xl xl:text-9xl font-light text-foreground/20 tracking-wider">
                ALIGNE
              </h2>
            </motion.div>
          </div>
          
          {/* Slide Counter - Top Right */}
          <div className="absolute top-4 right-6 lg:top-12 lg:right-8 xl:right-12 text-sm text-gray">
            <span className="font-medium">0{currentSlide + 1}</span>
            <span className="mx-2">/</span>
            <span>0{totalSlides}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageClient;