/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'champagne': '#F6EDE3',
        'dusty-lilac': '#DCD4EC',
        'glam-mauve': '#C09AAE',
        'midnight-aubergine': '#2C1B2E',
        'soft-gold': '#D5B26E',
        'black-cherry': '#420B2C',
        'vintage-teal': '#4B6F77',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
