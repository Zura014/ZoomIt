/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    width:{
      78: '300px',
      2324:'100%',
      82:'324px'
    },
    height:{
      505: '505px',
      2334:'100%',
      82:'324px'
    },
    extend: {
      colors: {
        bodyColor: '#f5f5f5',
        categoriesColor: '#dabfe1',
        categoriesSvgColor: '#bcd9e4',
        titleColor: '#21225f',
        activeColor: '#8a2be2',
        buttonColor: '#8000a3',
      },
      fontFamily: {
        roboto: ['Noto Sans Georgian', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

