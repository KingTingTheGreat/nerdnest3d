/** @type {import('tailwindcss').Config} */

// default values for height and width are percetage
// also allows for vw and vh usages
const vwConfig = {};
const vhConfig = {};
for (let i = 1; i <= 100; i++) {
  // adding percentage values
  vwConfig[`${i}%`] = `${i}%`;
  vhConfig[`${i}%`] = `${i}%`;

  // adding vw and vh values
  vwConfig[`${i}vw`] = `${i}vw`;
  vhConfig[`${i}vh`] = `${i}vh`;
}

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
        "gray-midlight": "#A9A9A9",
        "gray-light": "#EFEFEF",
        'logo-purple': "#9B59B6",
        'logo-green': "#26C281",
      },
      width: vwConfig,
      height: vhConfig,
      minWidth: vwConfig, 
      minHeight: vhConfig,
    },
  },
  plugins: [],
};
