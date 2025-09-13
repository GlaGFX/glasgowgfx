'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from '@/components/SplitText';

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  // Transform scroll progress (0 to 1) into scale (1 down to 0.6) and blur (0px to 4px)
  // The effect will be fully applied when the user scrolls 30% of the page height.
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]); // Increased scaling intensity
  const filter = useTransform(scrollYProgress, [0, 0.3], ['blur(0px)', 'blur(4px)']); // Increased blur intensity

  const handleScrollClick = () => {
    // Attempt to scroll to roughly the start of the next major content section
    // This might need adjustment based on final layout
    const featuresSection = document.getElementById('approach'); // Assuming 'approach' is the ID for the Features section
    if (featuresSection) {
        const headerOffset = 80; // Match the offset used in smooth scroll logic
        const elementPosition = featuresSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } else {
        // Fallback: Scroll down a significant portion of the viewport height if the target isn't found
        window.scrollTo({
            top: window.innerHeight * 0.8, // Scroll down 80% of viewport height
            behavior: 'smooth'
        });
    }
  };


  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="hero-content flex flex-col items-center gap-8 text-center"
          style={{ scale, filter }} // Apply scroll-based scale and blur
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <motion.div
            className="glitch-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <SplitText
              text="ALIGNE STUDIO"
              className="glitch text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none font-black-mango"
              data-text="ALIGNE STUDIO"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={() => {}}
            />
          </motion.div>

          <motion.p
            className="hero-desc text-lg md:text-xl text-gray max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            Transform your body and mind through the perfect alignment of strength, flexibility, and mindfulness. Experience pilates in our modern, minimalist studio.
          </motion.p>

          <motion.div
            className="hero-cta flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <button className="btn-primary px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
              Book a Class
            </button>
            <button className="btn-outline px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out hover:-translate-y-1">
              Our Programs
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray text-xs cursor-pointer bg-transparent border-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={handleScrollClick} // Use the refined scroll handler
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow w-8 h-8 border-2 border-gray rounded-full flex items-center justify-center animate-bounce">
          ↓
        </div>
      </motion.button>
    </section>
  );
}