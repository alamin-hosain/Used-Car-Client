/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {

          primary: "#ff4367",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#021431",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}