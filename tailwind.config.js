/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
      },
      keyframes: {
        blink: {
          "from, to": { borderRightWidth: "1px" },
          "50%": { borderRightWidth: "0px" },
        },
      },
      animation: {
        blink: "blink 1.2s step-end infinite",
      },
    },
  },
  plugins: [],
};
