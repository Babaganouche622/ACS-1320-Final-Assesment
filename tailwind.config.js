/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html', 
    './src/**/*.vue', 
    './src/**/*.jsx', 
    './src/**/*.js', 
    './dist/**/*.{html,js}', 
    './dist/**/*.html', 
    './dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit')
  ],
    "tailwindCSS.includeLanguages": { "plaintext": "javascript" },
    "editor.quickSuggestions": {
        "strings": true
    }
}
