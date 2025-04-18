/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        gray: {
          300: 'var(--gray-light)',
          500: 'var(--gray)'
        }
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s forwards',
        float: 'float 6s ease-in-out infinite',
        bounce: 'bounce 1s ease infinite'
      }
    },
  },
  plugins: [],
}

