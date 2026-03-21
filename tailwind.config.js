/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a0938e',
          600: '#8a7c78',
          700: '#756662',
          800: '#5e524f',
          900: '#3d3533',
        },
        luxury: {
          gold: '#c9a962',
          'gold-light': '#e8d5a3',
          'gold-dark': '#bf9b30',
          dark: '#1a1a1a',
          cream: '#f5f0e8',
          sage: '#7d8471',
        },
        purple: {
          medium: '#6B4E7C',
          dark: '#4A3B5C',
          light: '#8B6FA0',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        logo: ['Montserrat', 'Futura PT', 'Century Gothic', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
        '6xl': '72rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(201, 169, 98, 0.25)',
        'luxury-lg': '0 20px 60px rgba(201, 169, 98, 0.35)',
        'purple': '0 0 30px rgba(107, 78, 124, 0.5), 0 0 60px rgba(107, 78, 124, 0.3)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)',
        'gradient-purple': 'linear-gradient(135deg, #6B4E7C 0%, #4A3B5C 100%)',
      },
    },
  },
  plugins: [],
}
