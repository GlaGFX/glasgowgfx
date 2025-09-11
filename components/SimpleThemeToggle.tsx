'use client';

import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export function SimpleThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(savedTheme);
    } else {
      // Default to dark theme
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    console.log('SimpleThemeToggle clicked! Current theme:', theme);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('Switching to:', newTheme);
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply immediately to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    
    console.log('Theme switched successfully to:', newTheme);
  };

  if (!mounted) {
    return (
      <div className="p-2 rounded-full w-9 h-9 flex items-center justify-center">
        <div className="w-5 h-5 bg-gray-300 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      onMouseDown={() => console.log('Mouse down on theme toggle')}
      onMouseUp={() => console.log('Mouse up on theme toggle')}
      className="relative z-50 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 pointer-events-auto"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      type="button"
      style={{ pointerEvents: 'auto' }}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-yellow-300 pointer-events-none" />
      ) : (
        <MoonIcon className="w-5 h-5 text-indigo-600 pointer-events-none" />
      )}
    </button>
  );
}