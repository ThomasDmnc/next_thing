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
      primaryDark: "#045FB4",
      secondary: '#72927D',
      secondaryDark: '#475c4e',
      accent: '#DB4D48',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1604328471151-b52226907017?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
};
export default config;
