'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface AppState {
  theme: Theme;
  toggleTheme: () => void;
  formSubmissions: Record<string, boolean>;
  markFormSubmitted: (formId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'dark', // Default to dark theme
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        console.log('Toggling theme from', currentTheme, 'to', newTheme);
        
        set({ theme: newTheme });
        
        // Immediately apply to document
        if (typeof window !== 'undefined') {
          document.documentElement.classList.remove('light', 'dark');
          document.documentElement.classList.add(newTheme);
          console.log('Applied theme class:', newTheme);
        }
      },
      formSubmissions: {},
      markFormSubmitted: (formId) =>
        set((state) => ({
          formSubmissions: { ...state.formSubmissions, [formId]: true }
        })),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

// Helper hook for theme
export const useTheme = () => {
  const { theme, toggleTheme } = useAppStore();
  return { theme, toggleTheme };
};