'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('ThemeProvider mounted');
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    console.log('Applying theme:', theme);
    // Apply theme class to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme, mounted]);

  // Don't hide content, just apply theme when ready
  return <>{children}</>;
}