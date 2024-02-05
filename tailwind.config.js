/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open\\ Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#DADCE0',
        'brand-gray-2': '#F8F9FA',
        'brand-gray-3': '#80868B',
        'brand-blue-1': '#1967D2',
        'brand-blue-2': '#4285F4',
        'brand-green-1': '#137333',
        'brand-white': '#FFFFFF'
      },
      boxShadow: {
        blue: '0 0 3px 3px #4285F4'
      }
    }
  },
  plugins: []
}
