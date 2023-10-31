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
        "gray-dark": "#2D2D2D",
        "gray-med": "#696969",
        "gray-light": "#EFEFEF",
        'logo-purple': "#9B59B6",
        'logo-green': "#26C281",
      },
    },
  },
  plugins: [],
};
