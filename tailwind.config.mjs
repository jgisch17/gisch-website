/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          mid: '#1B2B4B',
          light: '#2D4068',
        },
        gold: {
          DEFAULT: '#B89A3E',
          light: '#D4B56A',
          dark: '#8A7030',
        },
        cream: '#FAF7F2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
