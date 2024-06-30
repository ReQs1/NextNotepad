import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: `rgb(var(--text-primary) / <alpha-value>)`,
        secondary: `rgb(var(--text-secondary) / <alpha-value>)`,
        bg1: `rgb(var(--bg1) / <alpha-value>)`,
        bg2: `rgb(var(--bg2) / <alpha-value>)`,
      },
    },
  },
  plugins: [],
};
export default config;
