import typography from "@tailwindcss/typography";
import rtl from "tailwindcss-rtl";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: "var(--container-pad)",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        "bg-base": "var(--bg-base)",
        "bg-elev": "var(--bg-elev)",
        "bg-elev-2": "var(--bg-elev-2)",
        "bg-glass": "var(--bg-glass)",
        "bg-glass-strong": "var(--bg-glass-strong)",
        accent: "var(--accent)",
        "accent-contrast": "var(--accent-contrast)",
        "accent-soft": "var(--accent-soft)",
        "accent-glow": "var(--accent-glow)",
        "accent-line": "var(--accent-line)",
        "accent-faint": "var(--accent-faint)",
        "text-1": "var(--text-1)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",
        "text-4": "var(--text-4)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        micro: ["11px", { lineHeight: "1.3", letterSpacing: "0.16em" }],
        caption: ["13px", { lineHeight: "1.5" }],
        body: ["16px", { lineHeight: "1.6" }],
        "body-l": ["18px", { lineHeight: "1.55" }],
        h3: ["clamp(22px, 2.4vw, 28px)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h2: ["clamp(28px, 3.4vw, 44px)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        h1: ["clamp(36px, 5.2vw, 64px)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        display: ["clamp(56px, 9vw, 128px)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
      },
      spacing: {
        "s-1": "var(--s-1)",
        "s-2": "var(--s-2)",
        "s-3": "var(--s-3)",
        "s-4": "var(--s-4)",
        "s-5": "var(--s-5)",
        "s-6": "var(--s-6)",
        "s-7": "var(--s-7)",
        "s-8": "var(--s-8)",
        "s-9": "var(--s-9)",
        "s-10": "var(--s-10)",
        section: "var(--section-y)",
      },
      borderRadius: {
        "r-1": "var(--r-1)",
        "r-2": "var(--r-2)",
        "r-3": "var(--r-3)",
        "r-4": "var(--r-4)",
        "r-5": "var(--r-5)",
      },
      boxShadow: {
        "el-1": "var(--el-1)",
        "el-2": "var(--el-2)",
        glow: "0 0 0 1px var(--accent-line), 0 8px 24px var(--accent-glow)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        decel: "cubic-bezier(0, 0, 0.2, 1)",
      },
      transitionDuration: {
        instant: "100ms",
        fast: "200ms",
        base: "320ms",
        slow: "600ms",
      },
      maxWidth: {
        container: "var(--container)",
      },
    },
  },
  plugins: [typography, rtl],
};
