const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: colors.lime
    },
    extend: {
      gridTemplateColumns: {
      'custom': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  variants: {
    extend: {
      scale: ['focus-within'],
    },
  },
  plugins: [],
}
