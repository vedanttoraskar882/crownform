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
          300: '#EDE8DD',
          400: '#E2DACB',
        },
        plum: {
          950: '#170E17',
          900: '#241824',
          800: '#382738',
          700: '#4D384D',
          600: '#644C64',
          500: '#7E637E',
          400: '#9B819B',
          200: '#D6C7D6',
          100: '#EFE7EF',
          50: '#F9F5F9',
        },
        sage: {
          50: '#F4F7F4',
          100: '#EAEFE9',
          200: '#D8E2D7',
          300: '#BCCDBD',
          500: '#697A68',
          700: '#4A5B49',
          800: '#354334',
          900: '#232D22',
        },
        champagne: {
          50: '#FAF7F0',
          100: '#F4EFE2',
          200: '#E9DEC5',
          300: '#DCCBA5',
          400: '#CDB684',
          500: '#C5A059',
          600: '#B08B43',
          700: '#8E6D38',
          800: '#6D532B',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 24, 36, 0.05)',
        'soft-lg': '0 10px 30px -4px rgba(36, 24, 36, 0.08)',
        'soft-xl': '0 20px 40px -8px rgba(36, 24, 36, 0.10)',
        'modal': '0 25px 60px -15px rgba(36, 24, 36, 0.25)',
      }
    },
  },
  plugins: [],
}
