import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rale:[ "Raleway", "sans-serif"],
        aton:[ "Anton SC", "sans-serif"]
      },
      colors:{
        primary:"",
        ascent:"#E94560",
        background1:"#16213E",
        background:"#ECECEC"
      }
    },
  },
  plugins: [],
};
export default config;
