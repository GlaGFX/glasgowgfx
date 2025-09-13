'use client';

import { useTheme } from '@/lib/store';
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
    <label
      htmlFor="theme-toggle"
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only peer"
        checked={theme === 'dark'}
        onChange={handleToggle}
        aria-label="Toggle theme"
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800"></div>
    </label>
  );
}