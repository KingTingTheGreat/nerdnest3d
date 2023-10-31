/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blacK: "#000000",
        white: "#FFFFFF",
        blue: "#495CEF",
        yellow: "#FFC328",
        "gray-dark": "#3D3D3D",
        "gray-med": "#D9D9D9",
        "gray-light": "#F3F3F3",
        'logo-red': "#FF0000",
        'logo-green': "#00FF00",
      },
    },
  },
  plugins: [],
};
