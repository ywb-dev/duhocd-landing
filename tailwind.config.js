/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#71B7EA',
        primaryText: '#56ABE9',
        dark: '#212121',
        grey: '#646464',
        bee: [
          200: '#F1DEB5',
          300: '#F0DCB1'
        ]
      },
      maxWidth: {
        '960': '960px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
    container: {
      // padding: {
      //   DEFAULT: '2rem',
      //   sm: '2rem',
      //   lg: '2rem',
      //   xl: '2rem',
      //   '2xl': '2rem',
      // },
      center: true,
    },
  },
  plugins: [],
}

