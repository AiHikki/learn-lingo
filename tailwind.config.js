/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      colors: {
        primary: '#121417',
        secondary: '#8A8A89',
        orange: {
          100: '#FBE9BA',
          200: '#FFDC86',
          300: '#F4C550',
        },
        green: {
          100: '#CBDED3',
          200: '#9FBAAE',
          300: '#38CD3E',
        },
        blue: {
          100: '#BFD6EA',
          200: '#9FB7CE',
        },
        pink: {
          100: '#F4C8BA',
          200: '#F2C0BD',
          300: '#F0AA8D',
          400: '#E0A39A',
        },
      },
    },
  },
  plugins: [],
};
