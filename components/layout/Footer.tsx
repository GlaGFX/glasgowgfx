import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-white/10 mt-20 md:mt-32">
      <div className="container mx-auto px-6">
        <div className="footer-content flex flex-wrap justify-between items-start gap-10 md:gap-8">
          {/* Footer Info */}
          <div className="footer-info w-full md:w-auto md:max-w-xs">
            <Link href="/" className="logo text-2xl font-extrabold tracking-tight flex items-center gap-1 text-light no-underline mb-4 inline-block">
              Nexus<span className="text-secondary text-3xl leading-none">•</span>
            </Link>
            <p className="text-gray leading-relaxed">
              A collective of digital creators passionate about crafting meaningful experiences that inspire and elevate.
            </p>
          </div>

          {/* Footer Links - Services */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-5 md:mb-6">Services</h4>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">UI/UX Design</a></li>
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">Brand Strategy</a></li>
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">Web Development</a></li>
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">Mobile Apps</a></li>
            </ul>
          </div>

          {/* Footer Links - Company */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-5 md:mb-6">Company</h4>
            <ul className="list-none flex flex-col gap-3">
              <li><Link href="/about" className="text-gray no-underline transition-colors duration-300 hover:text-light">About Us</Link></li>
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">Our Team</a></li>
              <li><a href="#" className="text-gray no-underline transition-colors duration-300 hover:text-light">Careers</a></li>
              <li><Link href="/contact" className="text-gray no-underline transition-colors duration-300 hover:text-light">Contact</Link></li>
            </ul>
          </div>

          {/* Footer Links - Connect */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-5 md:mb-6">Connect</h4>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="https://x.com/GlaGFX" target="_blank" rel="noopener noreferrer" className="text-gray no-underline transition-colors duration-300 hover:text-light">Twitter</a></li>
              <li><a href="https://www.instagram.com/glasgow_gfx/" target="_blank" rel="noopener noreferrer" className="text-gray no-underline transition-colors duration-300 hover:text-light">Instagram</a></li>
              <li><a href="https://dribbble.com/GlasgowGFX/shots" target="_blank" rel="noopener noreferrer" className="text-gray no-underline transition-colors duration-300 hover:text-light">Dribbble</a></li>
              <li><a href="https://github.com/GlaGFX" target="_blank" rel="noopener noreferrer" className="text-gray no-underline transition-colors duration-300 hover:text-light">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray no-underline transition-colors duration-300 hover:text-light">LinkedIn</a></li>
              <li><a href="https://pinterest.com/Glasgow_gfx/" target="_blank" rel="noopener noreferrer" className="text-gray no-underline transition-colors duration-300 hover:text-light">Pinterest</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright mt-16 md:mt-20 text-center text-gray text-sm">
          © {new Date().getFullYear()} Nexus Design Collective. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;