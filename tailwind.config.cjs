/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1d1d1e',
        'md-dark': 'rgb(34, 34, 35)',
        'sm-dark': 'rgba(255, 255, 255, 0.06)',
        'border': 'rgba(255, 255, 255, 0.04)',
        'primary': '#6A4C93',
        'hover': 'rgba(255, 255, 255, 0.08)',
        'light': 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
