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
      black: "#000",
      white: "#fff",
      green: "#61F2E2",
      purple: "#8B7FD8",
      gray: "#1F1E1E",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    // extend: {
    //   "32rem": "32rem",
    // },
  },
  plugins: [],
};
