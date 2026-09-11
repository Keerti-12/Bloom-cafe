/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#F5ECE3', // Warm background
        'brand-pink': '#E3A6A8', // Logo pink
        'brand-pink-light': '#F4D5D6',
        'brand-green': '#95A690', // Sage green
        'brand-gold': '#C5A365', // Gold trim
        'brand-text': '#4A3F35', // Deep warm text
        'brand-text-light': '#7D6F64', // Secondary text
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
