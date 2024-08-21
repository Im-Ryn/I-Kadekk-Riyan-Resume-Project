/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'basic-colors-cstm': '#CFCFD1',
        'blue-custom': '#202E4F'
      },
      fontFamily: {
        Roboto: ['Roboto'],
      },
      spacing: {
        '8.5': '34px',
        '19' : '78px',
        '70': '270px',
        '100': '420px',
        '50': '202px',
        '74': '310px',
        '85' : '22rem'
      }
    },
  },
  plugins: [],
}

