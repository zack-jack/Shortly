// eslint-disable-next-line import/no-extraneous-dependencies
const { colors, fontFamily } = require('tailwindcss/defaultTheme');

// spacing by 4 up to a multiple of 10
// 0 index is 0, 11 index is 40
const spacing = new Array(11)
  .fill()
  .reduce((result, _, index) => Object.assign(result, { [index]: `${index * 4}px` }), {
    xl: '100px',
  });

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
        sm: '14px',
        base: '16px',
        md: '18px',
        lg: '22px',
        xl: '28px',
        '2xl': '36px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        cyan: {
          100: '#53D2D2',
          200: '#29C7C7',
          300: '#24B3B3',
        },
        purple: {
          ...colors.purple,
          100: '#3B3054',
        },
        indigo: {
          ...colors.indigo,
          100: '#35323E',
          200: '#232127',
        },
        gray: {
          ...colors.gray,
          100: '#F0F1F6',
          200: '#BFBFBF',
          300: '#6E6B74',
          400: '#8B888F',
        },
        red: {
          ...colors.red,
          100: '#F46262',
        },
      },
      screens: {
        desktop: '1024px',
        max: '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
