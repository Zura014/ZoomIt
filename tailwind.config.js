/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        bodyColor: '#555555',
        mainColor:'rgba(138, 43, 226, 1)',
        titleColor: '#21225f',
      },
    },
  },
  plugins: [],
}

