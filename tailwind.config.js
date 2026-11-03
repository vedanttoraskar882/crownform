/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F2EB',
          300: '#EDE7DC',
          400: '#E2D9CB',
        },
        plum: {
          950: '#140C14',
          900: '#1F141F',
          850: '#261926',
          800: '#342334',
          700: '#463246',
          600: '#5D455D',
          500: '#775C77',
          400: '#947994',
          300: '#B69DB6',
          200: '#DAC6DA',
          100: '#EFE3EF',
          50: '#FAF4FA',
        },
        sage: {
          50: '#F5F8F5',
          100: '#EBF1EA',
          200: '#D6E2D5',
          300: '#B7CBB6',
          400: '#8FA88D',
          500: '#648262',
          600: '#4D6B4B',
          700: '#3D543B',
          800: '#2C3E2A',
          900: '#1E2C1D',
        },
        champagne: {
          50: '#FAF7F0',
          100: '#F4EFE2',
          200: '#E8DEC4',
          300: '#DAC9A2',
          400: '#CDB47E',
          500: '#C5A059',
          600: '#B08B43',
          700: '#8F6E32',
          800: '#6E5325',
          900: '#4A3716',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(31, 20, 31, 0.04), 0 12px 28px -6px rgba(31, 20, 31, 0.06)',
        'card-hover': '0 4px 14px -2px rgba(31, 20, 31, 0.06), 0 20px 40px -8px rgba(31, 20, 31, 0.10)',
        'soft': '0 2px 12px -2px rgba(31, 20, 31, 0.05)',
        'soft-lg': '0 12px 32px -4px rgba(31, 20, 31, 0.08)',
        'modal': '0 25px 60px -15px rgba(20, 12, 20, 0.35)',
        'glow-gold': '0 0 25px -5px rgba(197, 160, 89, 0.3)',
      }
    },
  },
  plugins: [],
}
