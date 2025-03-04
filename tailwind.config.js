export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scrollLeft: "scrollLeft 10s linear infinite",
        scrollRight: "scrollRight 10s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      }, 
    },
  },
  plugins: [],
};
