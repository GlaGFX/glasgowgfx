'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle'; // Corrected import path
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scroll for anchor links within the header
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = e.currentTarget.hash;
    if (targetId) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80; // Adjust based on your fixed header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close menu after clicking
        setIsMenuOpen(false);
      }
    } else {
      // If it's not a hash link, just close the mobile menu if open
      setIsMenuOpen(false);
    }
  };

  // Close mobile menu function
  const closeMobileMenu = () => setIsMenuOpen(false);


  return (
    // Use background/80 and backdrop-blur for the glass effect
    <header className="py-6 md:py-8 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        {/* Changed from grid to flex for better alignment control */}
        <nav className="flex justify-center items-center space-x-16">
          {/* Logo - left aligned */}
          <div className="flex justify-start">
            {/* Ensure logo styling matches the rest of the site */}
            <Link href="/" className="logo text-2xl font-extrabold tracking-tight flex items-center gap-1 text-black dark:text-white no-underline">
              Nexus<span className="text-primary text-3xl leading-none">•</span> {/* Changed secondary to primary */}
            </Link>
          </div>

          {/* Desktop Navigation Links - Centered with increased spacing */}
          <div className="hidden md:flex gap-10 justify-center nav-links mx-auto">
            <Link
              href="/services"
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-foreground relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </Link>

            <Link
              href="/portfolio"
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-foreground relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Work
            </Link>
            <Link
              href="/gallery"
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-foreground relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </Link>


            <Link
              href="/about"
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-foreground relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/contact" // Link to contact page
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-foreground relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons - right aligned */}
          <div className="hidden md:flex gap-4 justify-end items-center buttons"> {/* Added items-center */}
            <Link href="/contact" className="btn bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
              Start a Project
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen} // Accessibility
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-lg mt-4 py-4 rounded-xl border border-white/10 overflow-hidden" // Added overflow-hidden
            >
              <div className="flex flex-col space-y-1 px-4"> {/* Reduced space-y */}
                <Link
                  href="/services"
                  className="text-gray-light block py-3 text-base font-medium transition-colors hover:text-foreground" // Use block and adjust padding
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-gray-light block py-3 text-base font-medium transition-colors hover:text-foreground"
                  onClick={closeMobileMenu}
                >
                  Work
                </Link>
                <Link
                  href="/gallery"
                  className="text-gray-light block py-3 text-base font-medium transition-colors hover:text-foreground"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>

                <Link
                  href="/about"
                  className="text-gray-light block py-3 text-base font-medium transition-colors hover:text-foreground"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu} // Close menu on click
                  className="text-gray-light block py-3 text-base font-medium transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
                <div className="pt-4 pb-2"> {/* Add padding for button */}
                  <Link
                    href="/contact"
                    className="bg-primary text-white block w-full py-3 px-4 rounded-lg font-semibold text-sm text-center transition-all hover:bg-primary-dark" // Use block and w-full
                    onClick={closeMobileMenu}
                  >
                    Start a Project
                  </Link>
                </div>
                 <div className="flex justify-center pt-2 pb-2"> {/* Center ThemeToggle */}
                   <ThemeToggle />
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;