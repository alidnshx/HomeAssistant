import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
