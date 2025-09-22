/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        },
        portfolioDark:{
          50:'#0B2447',
          100:'#19376D',
          200:'#576CBC',
          300:'#A5D7E8'
        },
        portfolioDark2:{
          50:'#001C30',
          100:'#176B87',
          200:'#64CCC5',
          300:'#DAFFFB'
        },
        portfolioWhite:{
          50:'#FCF8E8',
          100:'#D4E2D4'
        }
      }
    }
  }
};

module.exports = config;