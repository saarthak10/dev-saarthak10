/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        'gray-dark-default': '',
        'gray-dark-50':'#111827',
        'gray-dark-100':'#1F2937',
        'gray-dark-200':'#374151',
        'gray-dark-600':'#D1D5DB',


      }
    },
  },
  plugins: [],
}

