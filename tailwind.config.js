/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          footer: "#304856",
        },
        orange: {
          header: "#D7908C"
        }
      }
    },
  },
  plugins: [],
};
