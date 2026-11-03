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
          50: '#F4F8F4',
          100: '#E6EFE5',
          200: '#CFE0CD',
          300: '#ADC9AA',
          400: '#84AC80',
          500: '#5F8F5A',
          600: '#497345',
          700: '#385835',
          800: '#2A4228',
          900: '#1D2E1C',
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
        'card-hover': '0 8px 24px -4px rgba(31, 20, 31, 0.08), 0 24px 48px -10px rgba(31, 20, 31, 0.12)',
        'soft': '0 2px 12px -2px rgba(31, 20, 31, 0.05)',
        'soft-lg': '0 12px 32px -4px rgba(31, 20, 31, 0.08)',
        'modal': '0 25px 60px -15px rgba(20, 12, 20, 0.35)',
        'glow-gold': '0 0 30px -5px rgba(197, 160, 89, 0.35)',
        'glow-emerald': '0 0 30px -5px rgba(95, 143, 90, 0.35)',
        'glow-plum': '0 0 30px -5px rgba(70, 50, 70, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
