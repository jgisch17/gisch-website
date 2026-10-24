/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0D1B2A',
          mid: '#1B2B3D',
        },
        orange: {
          DEFAULT: '#FF6B2C', // Signal Orange
          dark: '#C2410C', // small text and links on Paper
        },
        paper: '#F6F5F1',
        slate: '#4A5563',
        border: '#E4E2DC',
        success: '#2F7D4F',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
