module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glowEffect 1.5s infinite",
        zoom: "zoomInOut 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowEffect: {
          "0%, 100%": { boxShadow: "0 0 10px #32CD32, 0 0 20px #32CD32" },
          "50%": { boxShadow: "0 0 20px #32CD32, 0 0 40px #32CD32" },
        },
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
