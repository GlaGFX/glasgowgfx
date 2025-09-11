'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SimpleThemeToggle } from './SimpleThemeToggle';

export default function StudioBAPage() {
  const [currentTime, setCurrentTime] = useState({
    saoPaulo: '',
    london: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const saoPauloTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(now);
      
      const londonTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(now);
      
      setCurrentTime({
        saoPaulo: saoPauloTime,
        london: londonTime
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="text-black dark:text-white font-medium text-lg tracking-wide">
            STUDIO—BA®
          </div>
          
          {/* Time zones */}
          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
            <div>São Paulo {currentTime.saoPaulo}</div>
            <div>London {currentTime.london}</div>
          </div>
          
          {/* Theme toggle and Summary toggle */}
          <div className="flex items-center space-x-6">
            <SimpleThemeToggle />
            <button
              onClick={() => {
                console.log('TEST BUTTON CLICKED!');
                alert('Test button works!');
              }}
              className="px-3 py-1 bg-red-500 text-white rounded text-xs"
            >
              TEST
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">Summary</span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  id="summary-toggle"
                />
                <label
                  htmlFor="summary-toggle"
                  className="block w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer relative"
                >
                  <div className="absolute top-1 left-1 w-4 h-4 bg-black dark:bg-white rounded-full transition-transform duration-200 ease-in-out"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto h-screen flex items-center justify-center relative">
          
          {/* Geometric elements container */}
          <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
            
            {/* Left overlapping circles */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
            >
              {/* White circle */}
              <div className="relative">
                <div className="w-32 h-32 bg-white border-4 border-black rounded-full"></div>
                {/* Black circle overlapping */}
                <div className="absolute top-4 left-8 w-32 h-32 bg-black rounded-full"></div>
              </div>
            </motion.div>

            {/* Center vertical lines pattern */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex space-x-1">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-px h-64 bg-gray-400"
                    style={{
                      opacity: i % 3 === 0 ? 0.8 : 0.4,
                      height: i % 5 === 0 ? '16rem' : '12rem'
                    }}
                  ></div>
                ))}
              </div>
            </motion.div>

            {/* Right circle with lines */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
            >
              <div className="relative w-32 h-32 bg-black rounded-full overflow-hidden">
                {/* Vertical white lines inside circle */}
                <div className="absolute inset-0 flex">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-full bg-white"
                      style={{
                        marginRight: i < 15 ? '1px' : '0'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="text-xs text-gray-500 mb-2 tracking-wider">
              (Working Worldwide)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
              Studio—BA® is
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
              a multidisciplinary design practice.
            </h2>
          </motion.div>

          {/* Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="absolute bottom-16 left-6 text-xs text-gray-500 dark:text-gray-400 font-mono"
          >
            <div>N 40° 14'21.16"</div>
            <div>W 26° 12'13.14"</div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}