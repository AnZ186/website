/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/*",
    "./templates/**/*.html",
    "./app.py"
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      colors: {
        'darkpink': '#E9456C',
        'darkblue': '#052842',
        dark: "#0f172a",
        primary: "#3b82f6",
        secondary: "#8b5cf6",
      },
      fontFamily: {
        Winky: ['Winky Sans', ]
      }
    },
  },
  plugins: [],
}

