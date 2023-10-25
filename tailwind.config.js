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
        bee: '#F1DEB5',
        beebright: '#F0DCB1'
      },
      maxWidth: {
        '960': '960px',
      },
      fontSize: {
        68: '68px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      zIndex: {
        '9999': '9999',
      },
      borderRadius: {
        lg: '60px'
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

