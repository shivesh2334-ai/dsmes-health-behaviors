import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { paper: "#EEF3F2", ink: "#12262B", teal: { DEFAULT: "#0E5A63", soft: "#D5E8E6" }, amber: { DEFAULT: "#B7791F", soft: "#F7E9CF" }, line: "#C9D6D4" },
      fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
};
export default config;
