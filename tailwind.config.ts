import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#007B26",
          foreground: "#ffffff",
          dark: "#006620",
          light: "#2eca5e", // Verde mais claro
          extralight: "#6dde93", // Verde ainda mais claro para textos sobre fundos verdes
        },
        secondary: {
          DEFAULT: "#20B9E5",
          foreground: "#ffffff",
          dark: "#1899c0",
          light: "#4dcbf0",
        },
        accent: {
          DEFAULT: "#e8f7ed",
          foreground: "#007B26",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: {
          DEFAULT: "#005a2a",
          foreground: "#ffffff",
        },
        light: {
          DEFAULT: "#f0f9f2",
          foreground: "#005a2a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-up": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "float-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px) scale(0.95)",
          },
          "70%": {
            opacity: "1",
            transform: "translateY(4px) scale(1)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "float-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px) translateY(-5px)",
          },
          "70%": {
            opacity: "1",
            transform: "translateX(-4px) translateY(2px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) translateY(0)",
          },
        },
        "float-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "70%": {
            opacity: "1",
            transform: "translateY(-4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.85",
            transform: "scale(0.95)",
          },
        },
        "bounce-subtle": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-3px)",
          },
        },
        "reveal-text": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "color-pulse": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-bottom": "fade-in-bottom 0.7s ease-out forwards",
        "fade-in-left": "fade-in-left 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "scale-up": "scale-up 0.7s ease-out forwards",
        "float-in": "float-in 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "float-in-right": "float-in-right 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "float-up": "float-up 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-in-left": "slide-in-left 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-down": "slide-down 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "reveal-text": "reveal-text 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "color-pulse": "color-pulse 3s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
      boxShadow: {
        glow: "0 0 15px rgba(0, 123, 38, 0.5)",
        "glow-subtle": "0 0 10px rgba(0, 123, 38, 0.2)",
        "glow-blue": "0 0 15px rgba(32, 185, 229, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
