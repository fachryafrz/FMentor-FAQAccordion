/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-dstrd-blue": "hsl(238, 29%, 16%)",
        "primary-sf-red": "hsl(14, 88%, 65%)",
        "primary-sf-violet": "hsl(273, 75%, 66%)",
        "primary-sf-blue": "hsl(240, 73%, 65%)",

        "neutral-vd-gb": "hsl(237, 12%, 33%)",
        "neutral-d-gb": "hsl(240, 6%, 50%)",
        "neutral-l-gb": "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        "kumbh-sans": ["'Kumbh Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
