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
    extend: {
      colors: {
        bodyColor: '#f5f5f5',
        categoriesColor: '#dabfe1',
        categoriesSvgColor: '#bcd9e4',
        titleColor: '#21225f',
        activeColor: '#8a2be2',
        buttonColor: '#8000a3',
      },
    },
  },
  plugins: [],
}

