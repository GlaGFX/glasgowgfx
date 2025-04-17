'use client'; // Needed for potential future state (e.g., mobile menu toggle)

import React from 'react';
import Link from 'next/link'; // Use NextLink for the main logo link to home
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
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
      }
    }
  };

  return (
    // Added z-index and positioning to ensure it stays above background
    <header className="py-6 md:py-8 absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="logo text-2xl font-extrabold tracking-tight flex items-center gap-1 text-light no-underline">
            Nexus<span className="text-secondary text-3xl leading-none">•</span>
          </Link>

          {/* Desktop Navigation Links */}
          {/* Use regular <a> tags for smooth scrolling on the same page */}
          <div className="hidden md:flex gap-8 nav-links">
            <a
              href="#work"
              onClick={handleSmoothScroll}
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-light relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Work
            </a>
            <a
              href="#approach"
              onClick={handleSmoothScroll}
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-light relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Approach
            </a>
            <a
              href="#about"
              onClick={handleSmoothScroll}
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-light relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={handleSmoothScroll}
              className="text-gray-light text-base font-medium transition-colors duration-300 hover:text-light relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex gap-4 buttons">
            <button className="btn bg-transparent border border-gray text-light px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out hover:border-light hover:-translate-y-0.5">
              Log In
            </button>
            <button className="btn bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
              Start a Project
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <button className="md:hidden mobile-menu text-2xl bg-none border-none text-light cursor-pointer">
            ≡
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;