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
        "gray-med": "#696969",
        "gray-light": "#F3F3F3",
        'logo-purple': "#9B59B6",
        'logo-green': "#26C281",
      },
    },
  },
  plugins: [],
};
