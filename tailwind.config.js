/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 1.8s ease-in-out forwards",
        show: "show 2s ease-in-out forwards",
      },

      keyframes: {
        slide: {
          "0%": {
            top: "120px",
            left: "-80px",
            transform: "scale(1.2)",
          },
          "50%": {
            top: "120px",
            left: "-80px",
            transform: "scale(1)",
          },
          "100%": {
            top: "0px",
            left: "0px",
            transform: "scale(1)",
          },
        },
        show: {
          "0%": {
            top: "var(--start-top, 0px)",
            left: "var(--start-left, 0px)",
            transform: "scale(0)",
            opacity: "0",
          },
          "74%": {
            top: "var(--start-top, 0px)",
            left: "var(--start-left, 0px)",
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            top: "0px",
            left: "0px",
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },

      fontFamily: {
        'main': 'Helvetica, sans-serif'
      },
    },
  },
  plugins: [],
}

