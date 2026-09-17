/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0E17",
          900: "#0E1320",
          800: "#141B2E",
          700: "#1C2740",
          600: "#2A3654",
          500: "#3D4C70",
        },
        signal: {
          amber: "#F2A93B",
          "amber-dim": "#B5822C",
          teal: "#4FD1C5",
          rose: "#E8735C",
        },
        inktext: {
          primary: "#E8ECF4",
          muted: "#8A93A8",
          faint: "#5C6580",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(232,236,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(232,236,244,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 2.4s ease-in-out infinite",
        rise: "rise 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
