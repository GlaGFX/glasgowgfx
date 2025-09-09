'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-white/10 mt-20 md:mt-32">
      <div className="container mx-auto px-6">
        <div className="footer-content flex flex-wrap justify-between items-start gap-10 md:gap-8">
          {/* Footer Info */}
          <div className="footer-info w-full md:w-auto md:max-w-xs">
            <Link href="/" className="logo text-2xl font-extrabold tracking-tight flex items-center gap-1 text-light no-underline mb-4 font-black-mango">
              Aligne<span className="text-primary text-3xl leading-none">•</span>
            </Link>
            <p className="text-gray leading-relaxed">
              Transform your body and mind through the perfect alignment of strength, flexibility, and mindfulness at our premium pilates studio.
            </p>
          </div>

          {/* Footer Links - Services */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-5 md:mb-6">Classes</h4>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="#approach" className="text-gray no-underline transition-colors duration-300 hover:text-light">Reformer Pilates</a></li>
              <li><a href="#approach" className="text-gray no-underline transition-colors duration-300 hover:text-light">Mat Classes</a></li>
              <li><a href="#approach" className="text-gray no-underline transition-colors duration-300 hover:text-light">Personal Training</a></li>
              <li><a href="#approach" className="text-gray no-underline transition-colors duration-300 hover:text-light">Group Sessions</a></li>
            </ul>
          </div>

          {/* Footer Links - Studio */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-5 md:mb-6">Studio</h4>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="#about" className="text-gray no-underline transition-colors duration-300 hover:text-light">About Us</a></li>
              <li><a href="#about" className="text-gray no-underline transition-colors duration-300 hover:text-light">Our Instructors</a></li>
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">Schedule</a></li>
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">Pricing</a></li>
            </ul>
          </div>

          {/* Footer Links - Connect */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-5 md:mb-6">Connect</h4>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray no-underline transition-colors duration-300 hover:text-light">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray no-underline transition-colors duration-300 hover:text-light">Facebook</a></li>
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">Contact</a></li>
              <li><a href="tel:+1234567890" className="text-gray no-underline transition-colors duration-300 hover:text-light">Call Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright mt-16 md:mt-20 text-center text-gray text-sm">
          © {new Date().getFullYear()} Aligne Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;