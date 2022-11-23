/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {

            primary: "#007bff",

            secondary: "#ff4367",

            accent: "#3c4559",

            neutral: "#209b5a",

            "base-100": "#FFFFFF",

          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}