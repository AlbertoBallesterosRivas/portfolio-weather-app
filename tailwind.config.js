/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/components/pexels-photo.webp') no-repeat center center fixed",
      },
      boxShadow: {
        'clickable': '-1px 0px 14px -3px rgba(19,237,91,1)',
      },
      height: {
        '332': '332px',
      }
    },
  },
  plugins: [],
}
