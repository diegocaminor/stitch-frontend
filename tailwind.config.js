module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "blue",
      black: "#000",
      white: "#fff",
      green: "#61F2E2",
      purple: "#8B7FD8",
      gray: "#1F1E1E",
      "gray-lighter": "#D2D3D3",
      red: "#C50D02",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    // extend: {
    //   "32rem": "32rem",
    // },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
