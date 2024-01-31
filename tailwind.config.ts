import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: '#181716',
      background: '#FBFAF4',
      primary: '#2392FB',
      secondary: '#72927D',
      accent: '#DB4D48',
    },
  },
  plugins: [],
};
export default config;
