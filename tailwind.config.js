/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-plum': '#6B46C1',
        'warm-beige': '#E3C4A8',
        
        // Neutral Base
        'pure-white': '#FFFFFF',
        'soft-warm-gray': '#F3F4F6',
        
        // Accents
        'olive': '#3D9970',
        'orange': '#D35400',
        'crimson': '#C0392B',
        
        // Typography & Contrast
        'dark': '#111827',
        'muted': '#6B7280',

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
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
} 