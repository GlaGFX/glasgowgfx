'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Elegant geometric elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-gray-200/40 rounded-full"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-gray-200/40 rotate-45"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center min-h-screen py-20">
        
        {/* Premium tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 sm:mb-20"
        >
        </motion.div>

        {/* Main brand typography - Tightened spacing */}
        <div className="text-center mb-20 sm:mb-24">
          <div className="relative">
            {/* Primary heading with refined spacing */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] xl:text-[9rem] font-light text-gray-900 leading-[0.75] tracking-[-0.02em] mb-2 sm:mb-3"
              style={{ fontFamily: 'Black Mango Light, Inter, sans-serif' }}
            >
              ALIGNÉ
            </motion.h1>
            
            {/* Secondary heading - Closer integration */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 tracking-[0.3em] uppercase leading-[1.1]"
              style={{ fontFamily: 'League Gothic, sans-serif' }}
            >
              STUDIO
            </motion.h2>

            {/* Elegant underline accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-8 sm:mt-10"
            ></motion.div>
          </div>
        </div>

        {/* Refined supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-[1.4] font-light tracking-[-0.01em]">
            Something extraordinary is being crafted.
            <br className="hidden sm:block" />
            <span className="text-gray-500">Be the first to experience our vision.</span>
          </p>
        </motion.div>

        {/* Premium email signup form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-md mb-16 sm:mb-20"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-0 py-5 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-all duration-500 font-light tracking-[-0.01em] group-hover:border-gray-400"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 transition-all duration-500 group-focus-within:w-full"></div>
              </div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center text-sm font-light"
                >
                  {error}
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black text-white font-light text-lg hover:bg-gray-800 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 tracking-[0.05em] uppercase"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Notify Me'
                )}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <div className="w-20 h-20 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 bg-white shadow-lg">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-[-0.01em]">Thank you</h3>
              <p className="text-gray-600 font-light">We'll notify you when we launch.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Refined social media links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Elegant divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
          
          <div className="flex items-center justify-center space-x-8 sm:space-x-12">
            {/* Instagram */}
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center space-y-3 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 group-hover:bg-gray-50 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 font-light tracking-wider uppercase">
                Instagram
              </span>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center space-y-3 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 group-hover:bg-gray-50 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 font-light tracking-wider uppercase">
                Facebook
              </span>
            </motion.a>

            {/* X (Twitter) */}
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center space-y-3 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 group-hover:bg-gray-50 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 font-light tracking-wider uppercase">
                X
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}