/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  purge: {
    enabled: true,
    content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#030712',
        blue: {
          950: '#111827',
        },
        green: {
          550: '#14a800',
        },
        gray: {
          450: '#888c93',
          700: '#374151',
          800: '#1f2937',
        },
      },
      animation: {
        floating: 'floating 2s linear infinite',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
}
