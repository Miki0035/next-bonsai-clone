import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "#4c4d5f",
        darkTextColor: "#0d0d14",
        greenBackground: "#00b289",
        darkGreenBackground: "#0a896b",
        whiteBackground: "#ffffff",
      },
      fontFamily: {
        regular: ["ProximaRegular", "sans-serif"],
        bold: ["ProximaBold", "sans-serif"],
        semibold: ["ProximaSemiBold", "sans-serif"],
        amerigo: ["Amerigo", "ProximaRegular", "sans-serif"],
        sans: ["regular", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
