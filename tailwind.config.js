module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    borderRadius: {
      "ballon-rectangle": "7.2px",
      "ballon-ovoid": "50%",
    },
    fontSize: {
      "ballon-rectangle": "57.5px",
      "ballon-ovoid": "57.5px",
    },
    lineHeight: {
      12: "3.5rem",
      ballon: "91px",
    },
    colors: {
      blue: "#1d4ed8",
      purple: "#7e5bef",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      "32rem": "32rem",
    },
  },
  plugins: [],
};
