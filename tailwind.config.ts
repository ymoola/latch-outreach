import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F5F7F7",
        carbon: "#162028",
        mist: "#D2DBDE",
        teal: {
          DEFAULT: "#03A493",
          50: "#E6F5F3",
          100: "#B0DFD8",
          200: "#5CC4B6",
          300: "#03A493",
          400: "#028476",
          500: "#016458"
        }
      },
      boxShadow: {
        soft: "0 24px 60px rgba(22, 32, 40, 0.08)",
        panel: "0 18px 45px rgba(22, 32, 40, 0.12)"
      },
      backgroundImage: {
        "radial-teal": "radial-gradient(circle at top, rgba(3, 164, 147, 0.14), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
