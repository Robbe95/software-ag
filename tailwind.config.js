/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        bounce: 'cubic-bezier(.8, .16, 0, 1.3)',
      },
      boxShadow: {
        main: '0px 10px 20px rgba(0, 0, 0, 0.05)',
      },
      minWidth: {
        40: '10rem',
      },
      minHeight: {
        40: '10rem',
      },
      gridTemplateColumns: {
        sidebar: 'auto 3fr',
      },
      colors: {
        danger: {
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000',
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        success: {
          100: '#ccffcc',
          200: '#99ff99',
          300: '#66ff66',
          400: '#33ff33',
          500: '#00ff00',
          600: '#00cc00',
          700: '#009900',
          800: '#006600',
          900: '#003300',
        },
        primary: {
          100: '#ccccff',
          200: '#9999ff',
          300: '#6666ff',
          400: '#3333ff',
          500: '#0000ff',
          600: '#0000cc',
          700: '#000099',
          800: '#000066',
          900: '#000033',
        },
        secondary: {
          100: '#ffccff',
          200: '#ff99ff',
          300: '#ff66ff',
          400: '#ff33ff',
          500: '#ff00ff',
          600: '#cc00cc',
          700: '#990099',
          800: '#660066',
          900: '#330033',
        },
      },
    },
  },
  safelist: [
    'line-clamp-1',
    'line-clamp-2',
    'line-clamp-3',
    'line-clamp-4',
    'line-clamp-5',
    'line-clamp-6',
  ],
  plugins: [
  ],
}
