import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: '#ec4899',
        dark: '#111827',
        light: '#f9fafb',
        gray: {
          DEFAULT: '#6b7280',
          light: '#e5e7eb',
        },
      },
      animation: {
        twinkle: 'twinkle var(--duration, 5s) infinite var(--delay, 0s)',
        fadeUp: 'fadeUp 0.8s forwards',
        float: 'float 6s ease-in-out infinite',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: 'var(--brightness, 0.8)', transform: 'scale(1)' },
        },
        fadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config