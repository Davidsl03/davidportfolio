/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    
      colors: {
        spaceBlack: "#000319",
        deepNavy: "#0b0f19",
        midnightBlue: "#101828",
        neonBlue: "#3a86ff",
        galaxyPurple: "#6a0dad",
        cyanGlow: "#00e6e6",
      },
      backgroundImage: {
        "space-gradient": "linear-gradient(to bottom, #0b0f19, #101828, #0a0a0a)"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
};
