/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-plum': '#6D214F',
        'warm-beige': '#E3C4A8',
        
        // Neutral Base
        'pure-white': '#FFFFFF',
        'soft-warm-gray': '#F4F1ED',
        
        // Accents
        'olive': '#3D9970',
        'orange': '#D35400',
        'crimson': '#C0392B',
        
        // Typography & Contrast
        'dark': '#3B2C35',
        'muted': '#8E8275',

        // Status Colors
        'status': {
          'completed': '#E8F5E9',
          'progress': '#E3F2FD',
          'pending': '#FFF3E0',
          'high': '#FFEBEE',
          'medium': '#FFF8E1',
          'low': '#F1F8E9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
} 