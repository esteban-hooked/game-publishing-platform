/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hooked on Phonics Brand Colors
        brand: {
          blue: "#0066CC",
          yellow: "#FFD700",
          orange: "#FF6B35",
          purple: "#6B4C9A",
        },
        // Background colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Card colors
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Primary = Brand Blue
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Secondary = Brand Orange
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Accent = Brand Yellow
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
      },
      fontSize: {
        xs: ["14px", { lineHeight: "1.6" }],
        sm: ["16px", { lineHeight: "1.6" }],
        base: ["18px", { lineHeight: "1.7" }],
        lg: ["24px", { lineHeight: "1.3" }],
        xl: ["28px", { lineHeight: "1.3" }],
        "2xl": ["32px", { lineHeight: "1.3" }],
        "3xl": ["36px", { lineHeight: "1.2" }],
        "4xl": ["40px", { lineHeight: "1.2" }],
        "5xl": ["48px", { lineHeight: "1.2" }],
        "6xl": ["52px", { lineHeight: "1.2" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        container: "1200px",
        content: "1140px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
        button: "0 2px 8px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
}
