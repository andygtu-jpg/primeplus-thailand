/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
   File : lib/theme.ts
========================================== */

export const theme = {
  colors: {
    primary: "#DC2626",
    primaryDark: "#991B1B",
    accent: "#FACC15",

    background: "#09090B",
    surface: "#18181B",
    card: "#1F1F23",

    text: "#FFFFFF",
    textSecondary: "#A1A1AA",

    success: "#22C55E",
    border: "#27272A",
  },

  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  shadow: {
    card: "0 10px 30px rgba(0,0,0,.35)",
    glow: "0 0 50px rgba(220,38,38,.25)",
  },

  spacing: {
    section: "py-24",
    container: "max-w-7xl",
  },
} as const;