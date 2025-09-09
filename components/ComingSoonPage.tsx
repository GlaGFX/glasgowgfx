'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-screen">
        
        {/* Center - Email signup form */}
        <div className="flex-1 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-md w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white"
              style={{ fontFamily: 'Black Mango Light, Inter, sans-serif' }}
            >
              Coming Soon
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              Something extraordinary is on the way. Be the first to know when we launch.
            </motion.p>

            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Notify Me'
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Thank you!</h3>
                <p className="text-gray-300">We'll notify you when we launch.</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Right side - Brand name */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2"
        >
          <div className="writing-mode-vertical flex flex-col items-center">
            <h2
              className="text-6xl xl:text-7xl 2xl:text-8xl font-light text-white/80 tracking-wider mb-4"
              style={{ fontFamily: 'Black Mango Light, Inter, sans-serif' }}
            >
              ALIGNE
            </h2>
            <h3
              className="text-2xl xl:text-3xl 2xl:text-4xl font-normal text-white/60 tracking-widest"
              style={{ fontFamily: 'League Gothic, sans-serif' }}
            >
              STUDIO
            </h3>
          </div>
        </motion.div>

        {/* Mobile brand name - horizontal at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-center">
            <h2
              className="text-3xl sm:text-4xl font-light text-white/80 tracking-wider"
              style={{ fontFamily: 'Black Mango Light, Inter, sans-serif' }}
            >
              ALIGNE
            </h2>
            <h3
              className="text-lg sm:text-xl font-normal text-white/60 tracking-widest mt-1"
              style={{ fontFamily: 'League Gothic, sans-serif' }}
            >
              STUDIO
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}