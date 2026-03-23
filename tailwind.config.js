/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // ── Brand tokens ──────────────────────────────
        brand: {
          primary: "#1A1A1A",
          secondary: "#C8522A",
          tertiary: "#7A7A6E",
          neutral: "#F5F2EC",
        },

        // ── Primary palette (charcoal) ────────────────
        primary: {
          900: "#1A1A1A",
          700: "#3A3A3A",
          500: "#5C5C5C",
          300: "#8F8F8F",
          100: "#D4D4D4",
        },

        // ── Secondary palette (terracotta) ────────────
        secondary: {
          900: "#7A2010",
          700: "#A83A1A",
          500: "#C8522A",
          300: "#DC8060",
          100: "#F2C4B0",
        },

        // ── Tertiary palette (olive/sage) ─────────────
        tertiary: {
          900: "#3A3A34",
          700: "#58584E",
          500: "#7A7A6E",
          300: "#A8A89E",
          100: "#D8D8D0",
        },

        // ── Neutral palette (parchment) ───────────────
        neutral: {
          900: "#1A1814",
          700: "#4A4840",
          500: "#8A8880",
          300: "#C8C6BE",
          100: "#F5F2EC",
        },

        // ── Semantic light mode ───────────────────────
        surface: "#FFFFFF",
        border: "#D8D8D0",
      },

      fontFamily: {
        playfair: ["PlayfairDisplay_700Bold"],
        // sans falls back to system font via NativeWind default
      },

      letterSpacing: {
        // Matches your editorial label style
        "label-sm": "0.08em", // ~1px at 13px — tight labels
        "label-md": "0.15em", // ~2px at 13px — standard labels
        "label-lg": "0.20em", // ~3px at 13px — wide labels
        "label-xl": "0.25em", // extra wide — hero labels
      },

      fontSize: {
        // Label sizes used throughout the app
        "label-xs": ["10px", { lineHeight: "14px" }],
        "label-sm": ["11px", { lineHeight: "16px" }],
        "label-md": ["13px", { lineHeight: "18px" }],
      },
    },
  },
  plugins: [],
};
