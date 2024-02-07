/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        textBlue: "#60a5fa",
        textGrey: "#4b5563",
        lightGrey: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
