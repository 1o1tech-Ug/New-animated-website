import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#081C3A",
          light: "#0E2A54",
          dark: "#050F20",
        },
        medblue: {
          DEFAULT: "#1E88E5",
          light: "#4FA6F7",
          dark: "#125EA3",
        },
        emerald: {
          DEFAULT: "#00C896",
          light: "#3EE8B9",
          dark: "#009671",
        },
        base: {
          DEFAULT: "#05070B",
          raised: "#0A0E17",
        },
        muted: "#B0B8C5",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(176,184,197,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(176,184,197,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(0,200,150,0.35)",
        "glow-blue": "0 0 60px -10px rgba(30,136,229,0.35)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "gradient-move": "gradient-move 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
