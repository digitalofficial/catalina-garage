import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        marker: ["var(--font-marker)", "cursive"],
      },
      colors: {
        ink: "#0A0A0B",
        paper: "#FAF7F0",
        offwhite: "#F2EDE4",
        charcoal: "#1C1C1E",
        red: "#E63222",
        orange: "#FF6B1A",
        yellow: "#FFD600",
        cyan: "#00D4FF",
      },
      rotate: {
        "1": "1deg",
        "2": "2deg",
        "-1": "-1deg",
        "-2": "-2deg",
      },
    },
  },
  plugins: [],
};
export default config;
