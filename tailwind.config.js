/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: { min: '375px' },
      },
      colors: {
        gray: '#5A5959',
        yellow: '#FFEAAE',
        'dark-yellow': '#FCCA3F',
        orange: '#F6820C',
      },
    },
  },
  plugins: [],
};
