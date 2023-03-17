/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#39cdcc",
        hoverGreen: "#20c997",
        heading: "#213f7d",
        textColor: "#545f7d",
        darkBlue: "#213F7D",
      },
      screens: {
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
