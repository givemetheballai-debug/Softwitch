/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New SoftWitch palette
        'sw-purple': '#6b4ba1',
        'sw-pink': '#ff6b9d',
        'sw-rust': '#c94c3c',
        'sw-teal': '#3ba89f',
        'sw-yellow': '#f4c761',
        'sw-cream': '#faf8f5',
        
        // Legacy colors (keeping for backwards compatibility)
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
        'display': ['Crimson Pro', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(107, 75, 161, 0.15)',
        'glow-pink': '0 0 30px rgba(255, 107, 157, 0.3)',
        'glow-purple': '0 0 30px rgba(107, 75, 161, 0.3)',
      },
    },
  },
  plugins: [],
}
