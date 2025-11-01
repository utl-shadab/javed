/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tila: {
          background: '#F8FAFD',
          surface: '#FFFFFF',
          outline: '#D7D9E4',
          secondary: '#C0DBFF',
          text: '#333333',
          lightText: '#777777',
          primary: '#0a66ff'
        }
      },
     
    }
  },
  plugins: [],
}
