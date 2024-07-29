/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-agbalumo)"],
        secondary: ["var(--font-dosis)"],
      },
      colors: {
        primary: "#c084fc", //purple400
        secondary: "#4ade80", //green400
        l1: "#bbf7d0", //green200
        l2: "#fbcfe8", //pink200
        white: "#f3f4f6", //gray100
        dark: "#111827", // gray900
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
