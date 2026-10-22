import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { bg: "var(--bg)", surf: "var(--surf)", ink: "var(--ink)", mut: "var(--mut)", acc: "var(--acc)", accfg: "var(--accfg)", ln: "var(--ln)", dk: "var(--dk)", dkfg: "var(--dkfg)" },
    fontFamily: { display: ["var(--f-d)", "sans-serif"], sans: ["var(--f-s)", "system-ui", "sans-serif"], mono: ["var(--f-m)", "monospace"] },
  } },
} satisfies Config;
