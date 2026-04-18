export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06070d",
        panel: "rgba(13, 18, 32, 0.72)",
        cyanline: "#67e8f9",
        mint: "#34d399",
        danger: "#fb7185",
        warning: "#facc15",
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
