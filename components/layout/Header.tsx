'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle'; // Corrected import path
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    if (isMenuOpen) {
      console.log('Mobile menu is open in Header.tsx');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding header
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

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
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="py-6 md:py-8 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        {/* Changed from grid to flex for better alignment control */}
        <nav className="flex justify-between items-center">
          {/* Logo - left aligned */}
          <Link href="/" className="logo text-2xl font-extrabold tracking-tight flex items-center gap-1 text-black dark:text-white no-underline font-black-mango">
            Aligne<span className="text-primary text-3xl leading-none">•</span>
          </Link>

          {/* Right side - Theme Toggle and Hamburger Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
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
              <div className="flex flex-col space-y-1 px-4">
                <a
                  href="#approach"
                  onClick={handleSmoothScroll}
                  className="text-gray-light block py-3 text-base font-medium transition-colors hover:text-foreground"
                >
                  Classes
                </a>
                <a
                  href="#about"
                  onClick={handleSmoothScroll}
                  className="text-gray-light block py-3 text-base font-medium transition-colors hover:text-foreground"
                >
                  About
                </a>
                <Link
                  href="/coming-soon"
                  onClick={closeMobileMenu}
                  className="text-gray-light block py-3 text-base font-medium transition-colors hover:text-foreground"
                >
                  Coming Soon
                </Link>
                <div className="pt-4 pb-2">
                  <button
                    className="bg-primary text-white block w-full py-3 px-4 rounded-lg font-semibold text-sm text-center transition-all hover:bg-primary-dark"
                    onClick={closeMobileMenu}
                  >
                    Book a Class
                  </button>
                </div>
                 <div className="flex justify-center pt-2 pb-2">
                   <ThemeToggle />
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;