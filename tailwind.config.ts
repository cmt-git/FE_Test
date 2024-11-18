import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(0 166 255)",
        secondary: "rgb(255 214 0)",
        tertiary: "rgb(136 136 136)",
        fun88grey: "#888888",
        fun88lightgrey: "#88888880",
      },
      animation: {
        "carrousel-show": "carrousel-show 0.3s ease-in-out forwards",
      },
      keyframes: {
        "carrousel-show": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".text-base": {
          "font-size": "1rem",
          "line-height": "1.5rem",
        },
      });
    },
  ],
} satisfies Config;
