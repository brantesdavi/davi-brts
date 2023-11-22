/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        deepPink: '#EE3496',
        gold: '#FDD52D',
        onix: '#474445',
        antiWhite: '#EDEDED',
        raisinBlack: '#252223'
      },
      spacing:{
        '58': '58px',
        '54': '54px',
        '40': '40px'
      },
      height:{
        '180': '180px',
        '140': '140px'
      },
      screens:{
        'xs': '415px',
      },
      whitespace: {
        nowrap: 'nowrap'
      },
      width: {
        '300': '300px'
      }
    },
  plugins: [],
  }
}

