'use client';

import { useTheme } from '@/lib/store';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    try {
      console.log('Theme toggle clicked, current theme:', theme);
      toggleTheme();
      console.log('Theme toggle completed');
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="p-2 rounded-full w-9 h-9 flex items-center justify-center">
        <div className="w-5 h-5 bg-gray-300 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      type="button"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-yellow-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
}