const { colors, fontFamily } = require('tailwindcss/defaultTheme');

// spacing by 4 up to a multiple of 10
// 0 index is 0, 11 index is 40
const spacing = new Array(11)
  .fill()
  .reduce((result, _, index) => Object.assign(result, { [index]: `${index * 4}px` }), {});

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing,
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      fontSize: {
        base: '16px',
        md: '18px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        ...colors,
      },
      screens: {
        desktop: '1024px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
