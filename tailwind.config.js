/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/components/pexels-photo.webp') no-repeat center center fixed",
      }
    },
  },
  plugins: [],
}
