const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "green-primary": "rgb(46, 166, 0)",
        "pale-green": "rgba(158, 240, 26, 0.2)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        "black-75": "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
