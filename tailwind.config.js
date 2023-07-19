/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['page/coffee.html','index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        'coffee': "url('img/image.jpg')",
        
      },
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        cream: '#1e293b',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

