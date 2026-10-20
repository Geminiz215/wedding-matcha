/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matcha: {
          light: '#DCE8C8',
          DEFAULT: '#8FAF78',
          dark: '#536B45',
          cream: '#EDF4EA'
        },
        strawberry: {
          light: '#FBE0E2',
          DEFAULT: '#F29BA6',
          dark: '#D94F5C',
          deep: '#BA164B'
        },
        cream: {
          DEFAULT: '#FFF9EE',
          dark: '#FDFBF7'
        },
        cocoa: {
          DEFAULT: '#685148'
        }
      },
      fontFamily: {
        display: ['Fredoka', 'Nunito', 'sans-serif'],
        'serif-romantic': ['Fraunces', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
