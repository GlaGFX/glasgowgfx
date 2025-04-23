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
    (set) => ({
      theme: 'dark',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      formSubmissions: {},
      markFormSubmitted: (formId) => 
        set((state) => ({ 
          formSubmissions: { ...state.formSubmissions, [formId]: true }
        })),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme }), // Only persist theme
    }
  )
);

// Helper hook for theme
export const useTheme = () => {
  const { theme, toggleTheme } = useAppStore();
  return { theme, toggleTheme };
};