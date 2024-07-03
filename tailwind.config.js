/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/src/Assets/Background.png')",
      },
      colors: {
        custom: "#030bfc",
      },
    },
  },
  plugins: [],
};
