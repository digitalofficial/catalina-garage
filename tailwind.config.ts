import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        grease: "#1C1C1E",     // dark charcoal — dark sections, footer
        cherry: "#C0392B",     // classic 60s red — primary brand
        chrome: "#B8C4CC",     // metallic silver — highlights
        turq: "#45B5AA",       // vintage teal — secondary accent
        ink: "#1A1A1C",        // near-black — body text
        paper: "#FBF8F2",      // warm cream — page background (old garage wall)
      },
    },
  },
  plugins: [],
};
export default config;
